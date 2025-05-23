import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  location: string;
  priceRange: [number | null, number | null];
  vendorShopType: string; // consider using a union of VendorShopType enums
  productCategory: string[]; // enum values like 'Honey', 'Cheese', etc.
  coordinates: [number, number]; // [longitude, latitude]
}

interface InitialStateTypes{
  filters: FiltersState;
  isFiltersFullOpen: boolean;
  viewMode: "grid" | "list";
}

export const initialState: InitialStateTypes = {
  filters:{
    location: "Dublin",
    priceRange: [null, null],
    vendorShopType: "any",
    productCategory: [],
    coordinates: [-6.2603, 53.3498] // ✅ [longitude, latitude]
  },
  isFiltersFullOpen: false,
  viewMode: "grid", 
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    toggleFiltersFullOpen: (state) => {
      state.isFiltersFullOpen = !state.isFiltersFullOpen;
    },
    setViewMode: (state, action: PayloadAction<"grid" | "list">) => {
      state.viewMode = action.payload;
    }
  },
});

export const { setFilters, toggleFiltersFullOpen, setViewMode} = globalSlice.actions;

export default globalSlice.reducer;
