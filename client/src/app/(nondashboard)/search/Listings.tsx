import Card from '@/components/Card';
import CardCompact from '@/components/CardCompact';
import { useAddFavoriteShopMutation, useGetAuthUserQuery, useGetShopsQuery, useGetUserQuery, useRemoveFavoriteShopMutation } from '@/state/api';
import { useAppSelector } from '@/state/redux';
import { VendorShop } from '@/types/prismaTypes';
import React from 'react'

const Listings = () => {
    const {data: authUser, refetch} = useGetAuthUserQuery();
    const {data: user} = useGetUserQuery(
        authUser?.cognitoInfo?.userId || "",
        {
            skip: !authUser?.cognitoInfo?.userId, // Skip if no user is authenticated
        }
    );
    const [addFavorite] = useAddFavoriteShopMutation();
    const [removeFavorite] = useRemoveFavoriteShopMutation();
    const viewMode = useAppSelector((state) => state.global.viewMode);
    const filters = useAppSelector((state) => state.global.filters);

    const {
        data: shops,
        isLoading,
        isError,
    } = useGetShopsQuery(filters);

    const handleFavoriteToggle = async(vendorShopId: number) => {
            if(!authUser) return;

            // This checks if the selected shop to be favorited is a favorite that already exists
            const isFavorite = authUser?.userInfo.favorites?.some(
            (fav: VendorShop) => fav.id === vendorShopId);

            if(isFavorite){
                await removeFavorite({ // passing both ids into the api
                    cognitoId: authUser.cognitoInfo.userId,
                    vendorShopId
                })
            }else{
                await addFavorite({
                    cognitoId: authUser.cognitoInfo.userId,
                    vendorShopId
                })
            }
            await refetch(); // ✅ force refetch to update favorites
        };

    if(isLoading) return <>Loading...</>
    if(isError) return <>Something went wrong</>

    
  return (
    <div className="w-full">
    <h3 className="text-sm px-4 font-bold">
      {(shops ?? []).length}{" "}
      <span className="text-gray-700 font-normal">
        Places in {filters.location}
      </span>
    </h3>
    <div className="flex">
      <div className="p-4 w-full">
        {shops?.map((shop) =>
          viewMode === "grid" ? (
            <Card
              key={shop.id}
              shop={shop}
              isFavorite={
                authUser?.userInfo?.favorites?.some(
                  (fav: VendorShop) => fav.id === shop.id
                ) || false
              }
              onFavoriteToggle={() => handleFavoriteToggle(shop.id)}
              showFavoriteButton={!!authUser}
              shopLink={`/search/${shop.id}`}
            />
          ) : (
            <CardCompact
              key={shop.id}
              shop={shop}
              isFavorite={
                authUser?.userInfo?.favorites?.some(
                  (fav: VendorShop) => fav.id === shop.id
                ) || false
              }
              onFavoriteToggle={() => handleFavoriteToggle(shop.id)}
              showFavoriteButton={!!authUser}
              shopLink={`/search/${shop.id}`}
            />
          )
        )}
      </div>
    </div>
  </div>
  )
}

export default Listings