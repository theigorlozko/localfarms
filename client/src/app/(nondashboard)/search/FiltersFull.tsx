import { FiltersState, initialState, setFilters, setViewMode, toggleFiltersFullOpen } from '@/state';
import { useAppSelector } from '@/state/redux';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { debounce } from "lodash";
import { cleanParams, cn, formatEnumString, formatPriceValue } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductCategoryIcons, ShopCategoryIcons } from '@/lib/constants';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { ProductCategory } from '@/types/prismaTypes';

const FiltersFull = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    
    const filters = useAppSelector((state) => state.global.filters);
    const [localFilters, setLocalFilters] = useState(initialState.filters);
    const isFiltersFullOpen = useAppSelector(
        (state) => state.global.isFiltersFullOpen
    );
    const updateURL = debounce((newFilters: FiltersState) => {
            const cleanFilters = cleanParams(newFilters);
            const updatedSearchParams = new URLSearchParams();
    
            Object.entries(cleanFilters).forEach(([key, value]) => {
                 updatedSearchParams.set(
                    key,
                    Array.isArray(value) ? value.join(',') : value.toString()
                 )
                });
                router.push(`${pathname}?${updatedSearchParams.toString()}`);
    }, 300);

    const handleSubmit = () =>{
        dispatch(setFilters(localFilters));
        updateURL(localFilters);
        dispatch(toggleFiltersFullOpen()); // optional
    }
    const handleReset = () => {
        setLocalFilters(initialState.filters);
        dispatch(setFilters(initialState.filters));
        updateURL(initialState.filters);
    };

    const handleCategoryChange = (category: ProductCategory) => {
        setLocalFilters((prev) => ({
            ...prev,
            productCategory: prev.productCategory.includes(category)
              ? prev.productCategory.filter((a) => a !== category)
              : [...prev.productCategory, category],
          })); 
    };

    const handleLocationSearch = async () => {
        try {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
              localFilters.location
            )}.json?access_token=${
              process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
            }&fuzzyMatch=true`
          );
          const data = await response.json();
          if (data.features && data.features.length > 0) {
            const [lng, lat] = data.features[0].center;
            setLocalFilters((prev) => ({
              ...prev,
              coordinates: [lng, lat],
            }));
          }
        } catch (err) {
          console.error("Error search location:", err);
        }
      };
    
    if (!isFiltersFullOpen) return null;

  return (
    <div className="bg-white rounded-lg px-4 h-full overflow-auto pb-10">
        <div className="flex flex-col space-y-6">
            {/* Location */}
            <div>
            <h4 className="font-bold mb-2">Location</h4>
                <div className="flex items-center">
                    <Input
                    placeholder="Enter location"
                    value={localFilters.location}
                    onChange={(e) =>
                        setLocalFilters((prev) => ({
                        ...prev,
                        location: e.target.value,
                        }))
                    }
                    className="rounded-l-xl rounded-r-none border-r-0"
                    />
                    <Button
                    onClick={handleLocationSearch}
                    className="rounded-r-xl rounded-l-none border-l-none border-black shadow-none border hover:bg-primary-700 hover:text-primary-50"
                    >
                        <Search className="w-4 h-4" />
                    </Button>
                </div>
            </div>
            {/* Vendor Type */}
            <div>
                    <h4 className="font-bold mb-2">Vendor Type</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(ShopCategoryIcons).map(([type, Icon]) => (
                        <div
                            key={type}
                            className={cn(
                            "flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer",
                            localFilters.vendorShopType === type
                                ? "border-black"
                                : "border-gray-200"
                            )}
                            onClick={() =>
                            setLocalFilters((prev) => ({
                                ...prev,
                                vendorShopType:
                                prev.vendorShopType === type ? "any" : (type as keyof typeof ShopCategoryIcons),
                            }))
                            }
                        >
                            <Icon className="w-6 h-6 mb-2" />
                            <span>{type}</span>
                        </div>
                        ))}
                    </div>
                </div>
            {/* Price Range */}
            <div>
                <h4 className="font-bold mb-2">Price Range )</h4>
                <Slider
                    min={0}
                    max={80}
                    step={5}
                    value={[
                        localFilters.priceRange[0] ?? 0,
                        localFilters.priceRange[1] ?? 80,
                    ]}
                    onValueChange={(value: [number, number]) =>
                        setLocalFilters((prev) => ({
                        ...prev,
                        priceRange: value,
                        }))
                    }
                />

                <div className="flex justify-between mt-2">
                    <span>€{(localFilters.priceRange[0] ?? 0).toFixed(0)}</span>
                    <span>
                            {(localFilters.priceRange[1] ?? 80) >= 80
                            ? "€80+"
                            : `€${(localFilters.priceRange[1] ?? 80).toFixed(0)}`}
                    </span>
                </div>
            </div>
            {/* Products */}
                <div>
                <h4 className="font-bold mb-2">Porducts</h4>
                <div className="flex flex-wrap gap-2">
                {Object.entries(ProductCategoryIcons).map(([category, Icon]) => (
                    <div
                        key={category}
                        className={cn(
                        "flex items-center space-x-2 p-2 border rounded-lg hover:cursor-pointer",
                        localFilters.productCategory.includes(category as ProductCategory)
                            ? "border-black"
                            : "border-gray-200"
                        )}
                        onClick={() => handleCategoryChange(category as ProductCategory)}
                    >
                        <span className="w-5 h-5 hover:cursor-pointer">
                            <Icon />
                        </span>
                        <Label className="hover:cursor-pointer">
                        {formatEnumString(category)}
                        </Label>
                    </div>
                    ))}
                </div>
            </div> 
            {/* Apply and Reset buttons */}
            <div className="flex gap-4 mt-6">
            <Button
                onClick={handleSubmit}
                className="flex-1 bg-green-500 text-white rounded-xl hover:bg-green-600"
            >
                APPLY
            </Button>
            <Button
                onClick={handleReset}
                variant="outline"
                className="flex-1 rounded-xl hover:bg-gray-200"
            >
                Reset Filters
            </Button>
            </div>
        </div>
    </div>
  )
}

export default FiltersFull