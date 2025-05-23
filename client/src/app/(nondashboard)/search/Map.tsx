'use client';

import React, { useEffect, useRef } from 'react'
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useAppSelector } from '@/state/redux';
import { FiltersState } from '@/state';
import { useGetShopsQuery } from '@/state/api';
import { VendorShop } from "@/types/prismaTypes";

type VendorShopWithLocation = VendorShop & {
    location: {
      address: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
      coordinates: {
        longitude: number;
        latitude: number;
      };
    };
  };

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const Map = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
  
    const filters = useAppSelector((state) => state.global.filters);
    const isFiltersFullOpen = useAppSelector((state) => state.global.isFiltersFullOpen);
  
    const { data: shops, isLoading, isError } = useGetShopsQuery(filters);
  
    // Init map
    useEffect(() => {
      if (isLoading || isError || !shops || !mapContainerRef.current) return;
  
      if (!mapRef.current) {
        mapRef.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/igorlozkodev/cmb11sta200f501qxbrru6dxp',
          center: filters.coordinates || [-6.2603, 53.3498],
          zoom: 9,
        });

        shops.forEach((shop) =>{
            const marker = createShopMarker(shop as VendorShopWithLocation, mapRef.current!);
            const markerElement = marker.getElement();
            const path = markerElement.querySelector("path[fill='#3FB1CE']");
            if (path) path.setAttribute("fill", "#000000");
        })
  
        mapRef.current.on('load', () => {
          setTimeout(() => {
            mapRef.current?.resize();
          }, 500);
        });
      }
      console.log(shops)
  
      return () => {
        mapRef.current?.remove();
        mapRef.current = null;
      };
    }, [filters, shops, isLoading, isError]);
  
    // Sync resize to filter close/open animation
    useEffect(() => {
      const transitionDelay = 600; // must match Tailwind duration (300ms + buffer)
  
      const timeout = setTimeout(() => {
        mapRef.current?.resize();
      }, transitionDelay);
  
      return () => clearTimeout(timeout);
    }, [isFiltersFullOpen]);
  
    return (
      <div className=" flex-grow basis-5/12 relative rounded-xl transition-all duration-300 ease-in-out">
        <div
          ref={mapContainerRef}
          className="map-container rounded-xl"
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    );
  };

  const createShopMarker = (shop: VendorShopWithLocation, map: mapboxgl.Map) => {
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
  
    return new mapboxgl.Marker({ color: "#22c55e" })
      .setLngLat([
        shop.location.coordinates.longitude,
        shop.location.coordinates.latitude,
      ])
      .setPopup(
        new mapboxgl.Popup({ offset: 25, closeButton: false, closeOnClick: true }).setHTML(popupHtml)
      )
      .addTo(map);
  };
  
  
  export default Map;
