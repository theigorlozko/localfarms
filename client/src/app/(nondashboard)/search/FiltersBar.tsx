import { FiltersState, setFilters, setViewMode, toggleFiltersFullOpen } from '@/state';
import { useAppSelector } from '@/state/redux';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { debounce } from "lodash";
import { cleanParams, cn, formatPriceValue } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShopCategoryIcons } from '@/lib/constants';

const FiltersBar = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    
    const filters = useAppSelector((state) => state.global.filters);
    const isFiltersFullOpen = useAppSelector(
        (state) => state.global.isFiltersFullOpen
    );
    const viewMode = useAppSelector((state) => state.global.viewMode);
    const [searchInput, setSearchInput] = useState(filters.location);

    // Debounced function to update the URL with new filters
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
      
    const handleFilterChange = (
            key: string, 
            value: any, 
            isMin: boolean | null = null
        ) => {
        let newValue = value;
    
        if (key === 'priceRange') {
          const currentArrayRange = [...filters[key]];
          if (isMin !== null) {
            const index = isMin ? 0 : 1;
            currentArrayRange[index] = value === 'any' ? null : Number(value);
          }
          newValue = currentArrayRange;
        } else if (key === 'coordinates') {
          newValue = value === 'any' ? [0, 0] : value.map(Number);
        } else if (key === 'productCategory') {
          newValue = value === 'any' ? [] : value.split(',');
        } else {
          newValue = value === 'any' ? 'any' : value;
        }
    
        const newFilters = { ...filters, [key]: newValue };
        dispatch(setFilters(newFilters));
        updateURL(newFilters);
    };

  return (
    <div className="flex justify-between items-center w-full py-5">
        {/* Filter */}
        <div className="flex justify-between items-center gap-4 p-2">
        {/* All Filters */}
            <Button
            variant="outline"
            className={cn(
                "gap-2 rounded-xl border-primary-400 hover:bg-primary-500 hover:text-primary-100",
                isFiltersFullOpen && "bg-primary-700 text-primary-100"
            )}
            onClick={() => dispatch(toggleFiltersFullOpen())}
            >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            </Button>

            {/* Search Location */}
            <div className="flex items-center">
            <Input
                placeholder="Search location"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-40 rounded-l-xl rounded-r-none border-primary-400 border-r-0"
            />
            <Button
                // onClick={handleLocationSearch}
                className={`rounded-r-xl rounded-l-none border-l-none border-primary-400 shadow-none 
                border hover:bg-primary-700 hover:text-primary-50`}
            >
                <Search className="w-4 h-4" />
            </Button>
            </div>

             {/* Price Range */}
                <div className="flex gap-1">
                    {/* Minimum Price Selector */}
                    <Select
                        value={filters.priceRange[0]?.toString() || "any"}
                        onValueChange={(value) =>
                        handleFilterChange("priceRange", value, true)
                        }
                    >
                        <SelectTrigger className="w-22 rounded-xl border-primary-400">
                        <SelectValue>
                            {formatPriceValue(filters.priceRange[0], true)}
                        </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                        <SelectItem value="any">Any Min Price</SelectItem>
                        {[0,1, 5, 10, 15, 20, 25, 30, 40,50,100,150,200].map((price) => (
                            <SelectItem key={price} value={price.toString()}>
                            €{price}+
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    {/* Maximum Price Selector */}
                    <Select
                        value={filters.priceRange[1]?.toString() || "any"}
                        onValueChange={(value) =>
                        handleFilterChange("priceRange", value, false)
                        }
                    >
                        <SelectTrigger className="w-22 rounded-xl border-primary-400">
                        <SelectValue>
                            {formatPriceValue(filters.priceRange[1], false)}
                        </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                        <SelectItem value="any">Any Max Price</SelectItem>
                        {[1,5,10, 20, 30, 40, 50, 75, 100, 150, 200,250].map((price) => (
                            <SelectItem key={price} value={price.toString()}>
                            &lt;€{price}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                </div>
                {/* Shop Category */}    
                <Select
                value={filters.vendorShopType || "any"}
                onValueChange={(value) => handleFilterChange("vendorShopType", value)}
                >
                <SelectTrigger className="w-36 rounded-xl border-primary-400">
                    <SelectValue placeholder="Shop Category" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectItem value="any">Vendor Type</SelectItem>
                    {Object.entries(ShopCategoryIcons).map(([category, Icon]) => (
                    <SelectItem key={category} value={category}>
                        <div className="flex items-center">
                        <Icon className="w-4 h-4 mr-2" />
                        <span>{category}</span>
                        </div>
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
            </div>
            {/* View Mode */}
            <div className="flex justify-between items-center gap-4 p-2">
                <div className="flex border rounded-xl">
                <Button
                    variant="ghost"
                    className={cn(
                    "px-3 py-1 rounded-none rounded-l-xl hover:bg-primary-600 hover:text-primary-50",
                    viewMode === "list" ? "bg-primary-700 text-primary-50" : ""
                    )}
                    onClick={() => dispatch(setViewMode("list"))}
                >
                    <List className="w-5 h-5" />
                </Button>
                <Button
                    variant="ghost"
                    className={cn(
                    "px-3 py-1 rounded-none rounded-r-xl hover:bg-primary-600 hover:text-primary-50",
                    viewMode === "grid" ? "bg-primary-700 text-primary-50" : ""
                    )}
                    onClick={() => dispatch(setViewMode("grid"))}
                >
                    <Grid className="w-5 h-5" />
                </Button>
                </div>
            </div>
    </div>
  )
}

export default FiltersBar