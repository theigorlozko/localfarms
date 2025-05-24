import { useGetShopQuery } from "@/state/api";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useRef } from "react";
import { MapPin, Compass } from "lucide-react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const ShopLocation = ({ vendorShopId }: ShopOverviewProps) => {
  const {
    data: shop,
    isError,
    isLoading,
  } = useGetShopQuery(vendorShopId);

  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading || isError || !shop || !shop.location?.coordinates) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/igorlozkodev/cmb11sta200f501qxbrru6dxp",
      center: [
        shop.location.coordinates.longitude,
        shop.location.coordinates.latitude,
      ],
      zoom: 14,
    });

    const photo = shop.photoUrls?.[0] || "/fallback.jpg";
    const address = shop.location?.address || "Local area";
    const rating = shop.averageRating?.toFixed(1) ?? "–";
    const categories = shop.productCategory?.slice(0, 3).join(", ") || "Fresh local goods";
    const vendorType = shop.vendorShopType || "Vendor";

    const popupHtml = `
      <div 
        onclick="if (!event.target.closest('button')) window.open('/search/${shop.id}', '_blank')"
        style="
          width: 200px;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          cursor: pointer;
        "
      >
        <div style="position: relative;">
          <img src="${photo}" alt="${shop.name}" style="
            width: 100%;
            height: 100px;
            object-fit: cover;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
          "/>
          <button style="
            position: absolute;
            top: 6px;
            right: 8px;
            background: rgba(255,255,255,0.9);
            color: #ef4444;
            border: none;
            border-radius: 50%;
            font-size: 14px;
            cursor: pointer;
            width: 22px;
            height: 22px;
            line-height: 22px;
            text-align: center;
            font-weight: bold;
          " onclick="this.closest('.mapboxgl-popup').remove()">×</button>
        </div>
        <div style="padding: 10px 8px 6px 8px;">
          <div style="font-size: 14px; font-weight: 700; color: #111; margin-bottom: 2px;">${shop.name}</div>
          <div style="font-size: 12px; font-weight: 500; color: #444;">${vendorType}</div>
          <div style="font-size: 10px; color: #888; margin-top: 2px;">${categories}</div>
          <div style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 12px;
                color: #111;
                font-weight: 500;
                margin-top: 6px;
                gap: 6px;
                overflow: hidden;
                ">
                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 10px; color: #777; flex: 1;">
                ${address}
                </div>
                <div style="display: flex; align-items: center; gap: 2px;">
                    <span style="font-size: 14px; color: #facc15;">★</span> ${rating}
                </div>
            </div>
        </div>
      </div>
    `;

    const marker = new mapboxgl.Marker({ color: "#22c55e" })
      .setLngLat([
        shop.location.coordinates.longitude,
        shop.location.coordinates.latitude,
      ])
      .setPopup(
        new mapboxgl.Popup({ offset: 25, closeButton: false, closeOnClick: true }).setHTML(popupHtml)
      )
      .addTo(map);

    const markerElement = marker.getElement();
    const path = markerElement.querySelector("path[fill='#3FB1CE']");
    if (path) path.setAttribute("fill", "#000000");

    return () => map.remove();
  }, [shop, isError, isLoading]);

  if (isLoading) return <>Loading...</>;
  if (isError || !shop) return <>Shop not Found</>;

  return (
    <div className="py-16">
      <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100">
        Map and Location
      </h3>
      <div className="flex justify-between items-center text-sm text-primary-500 mt-2">
        <div className="flex items-center text-gray-500">
          <MapPin className="w-4 h-4 mr-1 text-gray-700" />
          Shop Address:
          <span className="ml-2 font-semibold text-gray-700">
            {shop.location?.address || "Address not available"}
          </span>
        </div>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            shop.location?.address || ""
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center hover:underline gap-2 text-primary-600"
        >
          <Compass className="w-5 h-5" />
          Get Directions
        </a>
      </div>
      <div
        className="relative mt-4 h-[300px] rounded-lg overflow-hidden"
        ref={mapContainerRef}
      />
    </div>
  );
};

export default ShopLocation;
