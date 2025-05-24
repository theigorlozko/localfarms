import { Heart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const CardCompact = ({
  shop,
  isFavorite,
  onFavoriteToggle,
  showFavoriteButton = true,
  shopLink,
}: CardCompactProps) => {
  const [imgSrc, setImgSrc] = useState(
    shop.photoUrls?.[0] || '/placeholder.jpg'
  );

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full flex h-40 mb-5">
      <div className="relative w-1/3">
        <Image
          src={imgSrc}
          alt={shop.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc('/placeholder.jpg')}
        />
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
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
            {showFavoriteButton && (
              <button
                className="bg-white rounded-full p-1"
                onClick={onFavoriteToggle}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-600'
                  }`}
                />
              </button>
            )}
          </div>
          <p className="text-gray-600 mb-1 text-sm">
            {shop?.location?.address}, {shop?.location?.city}
          </p>
          <div className="flex text-sm items-center">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            <span className="font-semibold">
              {shop.averageRating?.toFixed(1) ?? 'N/A'}
            </span>
            <span className="text-gray-600 ml-1">
              ({shop.numberOfReviews})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCompact;
