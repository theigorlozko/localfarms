import { cleanParams, createNewUserInDatabase, withToast } from "@/lib/utils";
import { VendorShop } from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { FiltersState } from ".";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
      const session = await fetchAuthSession();
      const { idToken } = session.tokens ?? {};
      if (idToken) {
        headers.set("Authorization", `Bearer ${idToken}`);
      }
      return headers;
    },
  }),
  reducerPath: "api",
  tagTypes: ["Vendors","Buyers", "Users", "Shops", "Shop Details"],
  endpoints: (build) => ({
    getAuthUser: build.query<User, void>({
      queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ) => {
        try {
          const user = await getCurrentUser(); // AWS Cognito user
          //const cognitoId = user.username;
          const session = await fetchAuthSession();
          const { sub } = session.tokens?.idToken?.payload ?? {};
          const cognitoId = sub;
          const { idToken } = session.tokens ?? {};
          const endpoint = `/users/${cognitoId}`;
          let response = await fetchWithBQ(endpoint);
          

          //let userDetailsResponse = await fetchWithBQ(endpoint);
          if(response.error && response.error.status === 404) {
            const userRole = "BUYER"; // default starting role
            response = await createNewUserInDatabase(
              user,
              idToken,
              userRole,
              fetchWithBQ
            )
          }

          if (response.error) {
            return { error: response.error };
          }
          const userData = response.data as {
            id: string;
            cognitoId: string;
            name: string;
            email: string;
            phoneNumber: string;
            role: string;
            favorites: any[]; // Adjust type based on your schema
            image?: string; // Assuming image is optional
          };

          return {
            data: {
              id: userData.id,
              userInfo: {
                name: userData.name,
                image: userData.image, // Assuming `image` is optional
                email: userData.email,
                phoneNumber: userData.phoneNumber,
                cognitoId: userData.cognitoId,
                favorites: userData.favorites,
                role: userData.role,
              },
              userRole: userData.role,
              cognitoInfo: user,
              role: userData.role,
            } satisfies User,
          };
        } catch (error: any) {
          return { error: error.message || "Could not fetch user data" };
        }
      },
    }),

    // Shop related endpoints.
    getShops: build.query<
        VendorShop[],
        Partial<FiltersState> & { favoriteIds?: number[] }
      >({
        query: (filters) => {
          const params = cleanParams({
            location: filters.location,
            priceMin: filters.priceRange?.[0],
            priceMax: filters.priceRange?.[1],
            vendorShopType:
              filters.vendorShopType && filters.vendorShopType !== "any"
                ? filters.vendorShopType
                : undefined,
            productCategory:
              filters.productCategory && filters.productCategory.length > 0
                ? filters.productCategory.join(",")
                : undefined,
            favoriteIds:
              filters.favoriteIds && filters.favoriteIds.length > 0
                ? filters.favoriteIds.join(",")
                : undefined,
            latitude: filters.coordinates?.[1],
            longitude: filters.coordinates?.[0],
          });
          return { url: "shops", params };
     },
     providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Shops" as const, id })),
              { type: "Shops", id: "LIST" },
            ]
          : [{ type: "Shops", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch shops.",
        });
      },
    }),

    getShop: build.query<VendorShopWithLocation, number>({
      query: (id) => `shops/${id}`,
      providesTags: (result, error, id) => [{ type: "Shop Details", id }],
    }),


    //Tenant Related endpoints
    getUser: build.query<
        User,
        string
      >({
        query: (cognitoId) => `users/${cognitoId}`,
     providesTags: (result) => [{type: "Users", id: result?.id}],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load user profile.",
      });
    },
    }),

    updateUserSettings: build.mutation<User, {cognitoId: string } & Partial<User>>({
      query: ({ cognitoId, ...updatedUser }) => ({
        url: `/users/${cognitoId}`,
        method: "PUT",
        body: updatedUser,
      }),
      // responsible for matching backend data to front end 
      invalidatesTags: (result) => [{ type: "Users", id: result?.id }],

    }),
    // Add to favorites
    addFavoriteShop: build.mutation<
    User,
    { cognitoId: string; vendorShopId: number }
    >({
    query: ({ cognitoId, vendorShopId }) => ({
      url: `users/${cognitoId}/favorites/${vendorShopId}`,
      method: "POST",
    }),
    invalidatesTags: (result) => [
      { type: "Users", id: result?.id },
      { type: "Shops", id: "LIST" },
    ],
    async onQueryStarted(_, { queryFulfilled }) {
      await withToast(queryFulfilled, {
        success: "Added to favorites!",
        error: "Failed to add to favorites",
      });
    },
    }),
    // Remove from favorites
    removeFavoriteShop: build.mutation<
    User,
    { cognitoId: string; vendorShopId: number }
    >({
    query: ({ cognitoId, vendorShopId }) => ({ // cognitoId and the vendor shop id is required to be sent to backend
      url: `users/${cognitoId}/favorites/${vendorShopId}`,
      method: "DELETE",
    }),
    invalidatesTags: (result) => [
      { type: "Users", id: result?.id },
      { type: "Shops", id: "LIST" },
    ],
    async onQueryStarted(_, { queryFulfilled }) {
      await withToast(queryFulfilled, {
        success: "Removed from favorites!",
        error: "Failed to remove from favorites.",
      });
    },
    }),
  }),
});


export const {
  useGetUserQuery,
  useGetShopQuery,
  useGetAuthUserQuery,
  useUpdateUserSettingsMutation,
  useGetShopsQuery,
  useAddFavoriteShopMutation,
  useRemoveFavoriteShopMutation
} = api;
