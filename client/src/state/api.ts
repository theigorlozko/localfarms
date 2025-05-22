import { createNewUserInDatabase } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

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
  tagTypes: ["Vendors","Buyers", "Users"],
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

    updateUserSettings: build.mutation<User, {cognitoId: string } & Partial<User>>({
      query: ({ cognitoId, ...updatedUser }) => ({
        url: `/users/${cognitoId}`,
        method: "PUT",
        body: updatedUser,
      }),
      // responsible for matching backend data to front end 
      invalidatesTags: (result) => [{ type: "Users", id: result?.id }],

    })
  }),
});

export const {
  useGetAuthUserQuery,
  useUpdateUserSettingsMutation
} = api;
