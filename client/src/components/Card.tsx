import { Bath, Bed, Heart, House, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Card = ({
  shop,
  isFavorite,
  onFavoriteToggle,
  showFavoriteButton = true,
  shopLink,
}: CardProps) => {
  const [imgSrc, setImgSrc] = useState(
    shop.photoUrls?.[0] || "/placeholder.jpg"
  );

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full mb-5">
      <div className="relative">
        <div className="w-full h-48 relative">
          <Image
            src={imgSrc}
            alt={shop.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/placeholder.jpg")}
          />
        </div>
        {/* <div className="absolute bottom-4 left-4 flex gap-2">
          {shop.isPetsAllowed && (
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Pets Allowed
            </span>
          )}
          {shop.isParkingIncluded && (
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Parking Included
            </span>
          )}
        </div> */}
        {showFavoriteButton && (
          <button
            className="absolute bottom-4 right-4 bg-white hover:bg-white/90 rounded-full p-2 cursor-pointer"
            onClick={onFavoriteToggle}
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
            />
          </button>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-1">
          {shopLink ? (
            <Link
              href={shopLink}
              className="hover:underline hover:text-blue-600"
              scroll={false}
            >
              {shop.name}
            </Link>
          ) : (
            shop.name
          )}
        </h2>
        <p className="text-gray-600 mb-2">
          {shop.location?.address}, {shop.location?.city}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-2">
            <span className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1 fill-current" />
              {shop.averageRating?.toFixed(1) || "N/A"} ({shop.numberOfReviews || 0} Reviews)
            </span>
          </div>
          {/* <p className="text-lg font-bold mb-3">
            ${shop.pricePerMonth.toFixed(0)}{" "}
            <span className="text-gray-600 text-base font-normal"> /month</span>
          </p> */}
        </div>
        <hr />
        {/* <div className="flex justify-between items-center gap-4 text-gray-600 mt-5">
          <span className="flex items-center">
            <Bed className="w-5 h-5 mr-2" />
            {shop.beds} Bed
          </span>
          <span className="flex items-center">
            <Bath className="w-5 h-5 mr-2" />
            {shop.baths} Bath
          </span>
          <span className="flex items-center">
            <House className="w-5 h-5 mr-2" />
            {shop.squareFeet} sq ft
          </span>
        </div> */}
      </div>
    </div>
  )
}

export default Card