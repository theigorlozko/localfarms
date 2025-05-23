import { ProductCategory } from "@/types/prismaTypes";
import {
  Wifi,
  Waves,
  Dumbbell,
  Car,
  PawPrint,
  Tv,
  Thermometer,
  Cigarette,
  Cable,
  Maximize,
  Bath,
  Phone,
  Sprout,
  Hammer,
  Bus,
  Mountain,
  VolumeX,
  Home,
  Warehouse,
  Building,
  Castle,
  Trees,
  LucideIcon,
  
} from "lucide-react";

export enum AmenityEnum {
  WasherDryer = "WasherDryer",
  AirConditioning = "AirConditioning",
  Dishwasher = "Dishwasher",
  HighSpeedInternet = "HighSpeedInternet",
  HardwoodFloors = "HardwoodFloors",
  WalkInClosets = "WalkInClosets",
  Microwave = "Microwave",
  Refrigerator = "Refrigerator",
  Pool = "Pool",
  Gym = "Gym",
  Parking = "Parking",
  PetsAllowed = "PetsAllowed",
  WiFi = "WiFi",
}

export const AmenityIcons: Record<AmenityEnum, LucideIcon> = {
  WasherDryer: Waves,
  AirConditioning: Thermometer,
  Dishwasher: Waves,
  HighSpeedInternet: Wifi,
  HardwoodFloors: Home,
  WalkInClosets: Maximize,
  Microwave: Tv,
  Refrigerator: Thermometer,
  Pool: Waves,
  Gym: Dumbbell,
  Parking: Car,
  PetsAllowed: PawPrint,
  WiFi: Wifi,
};

export enum HighlightEnum {
  HighSpeedInternetAccess = "HighSpeedInternetAccess",
  WasherDryer = "WasherDryer",
  AirConditioning = "AirConditioning",
  Heating = "Heating",
  SmokeFree = "SmokeFree",
  CableReady = "CableReady",
  SatelliteTV = "SatelliteTV",
  DoubleVanities = "DoubleVanities",
  TubShower = "TubShower",
  Intercom = "Intercom",
  SprinklerSystem = "SprinklerSystem",
  RecentlyRenovated = "RecentlyRenovated",
  CloseToTransit = "CloseToTransit",
  GreatView = "GreatView",
  QuietNeighborhood = "QuietNeighborhood",
}

export const HighlightIcons: Record<HighlightEnum, LucideIcon> = {
  HighSpeedInternetAccess: Wifi,
  WasherDryer: Waves,
  AirConditioning: Thermometer,
  Heating: Thermometer,
  SmokeFree: Cigarette,
  CableReady: Cable,
  SatelliteTV: Tv,
  DoubleVanities: Maximize,
  TubShower: Bath,
  Intercom: Phone,
  SprinklerSystem: Sprout,
  RecentlyRenovated: Hammer,
  CloseToTransit: Bus,
  GreatView: Mountain,
  QuietNeighborhood: VolumeX,
};

export enum PropertyTypeEnum {
  Rooms = "Rooms",
  Tinyhouse = "Tinyhouse",
  Apartment = "Apartment",
  Villa = "Villa",
  Townhouse = "Townhouse",
  Cottage = "Cottage",
}

export const PropertyTypeIcons: Record<PropertyTypeEnum, LucideIcon> = {
  Rooms: Home,
  Tinyhouse: Warehouse,
  Apartment: Building,
  Villa: Castle,
  Townhouse: Home,
  Cottage: Trees,
};

// Add this constant at the end of the file
export const NAVBAR_HEIGHT = 54; // in pixels

// Test users for development
export const testUsers = {
  tenant: {
    username: "Carol White",
    userId: "us-east-2:76543210-90ab-cdef-1234-567890abcdef",
    signInDetails: {
      loginId: "carol.white@example.com",
      authFlowType: "USER_SRP_AUTH",
    },
  },
  tenantRole: "tenant",
  manager: {
    username: "John Smith",
    userId: "us-east-2:12345678-90ab-cdef-1234-567890abcdef",
    signInDetails: {
      loginId: "john.smith@example.com",
      authFlowType: "USER_SRP_AUTH",
    },
  },
  managerRole: "manager",
};

import {
  FaSeedling,
  FaCheese,
  FaAppleAlt,
  FaSoap,
  FaStore,
  FaGlassWhiskey,
  FaFireAlt,
  FaBreadSlice,
  FaHammer,
  FaMugHot,
  FaCut
} from 'react-icons/fa';

export const ShopCategoryIcons = {
  Beekeeper: FaSeedling,
  "Jam Maker": FaAppleAlt,
  Cheesemaker: FaCheese,
  "Soap Crafter": FaSoap,
  "Farm Shop": FaStore,
  "Milk Vendor": FaGlassWhiskey, // milk bottle alternative
  "Candle Maker": FaFireAlt,
  Bakery: FaBreadSlice,
  "Herbal Products": FaSeedling,
  Woodwork: FaHammer,
  Ceramics: FaMugHot,
  Crafts: FaCut,
};
export const ShopCategories = Object.keys(ShopCategoryIcons);

import {
  FaFish,
  FaDrumstickBite,
  FaEgg,
  FaCarrot,
  
  FaCookie,
  
  FaLeaf,
  FaFlask,
  FaGift,
  FaBox,
  FaHandsHelping,
  FaWineBottle,
} from "react-icons/fa";

export const ProductCategoryIcons: Record<ProductCategory, React.ComponentType> = {
  RawMilk: FaWineBottle,
  PasteurizedMilk: FaWineBottle,
  Cheese: FaCheese,
  Butter: FaCheese,
  Yogurt: FaWineBottle,
  Cream: FaWineBottle,
  FreshEggs: FaEgg,
  FreeRangeEggs: FaEgg,
  Chicken: FaDrumstickBite,
  Duck: FaDrumstickBite,
  Turkey: FaDrumstickBite,
  Beef: FaDrumstickBite,
  Pork: FaDrumstickBite,
  Lamb: FaDrumstickBite,
  Goat: FaDrumstickBite,
  Venison: FaDrumstickBite,
  Sausages: FaDrumstickBite,
  Bacon: FaDrumstickBite,
  FreshFish: FaFish,
  SmokedFish: FaFish,
  Shellfish: FaFish,
  FreshVegetables: FaCarrot,
  FreshFruit: FaAppleAlt,
  OrganicProduce: FaSeedling,
  Microgreens: FaLeaf,
  Herbs: FaLeaf,
  Sourdough: FaBreadSlice,
  Pastries: FaBreadSlice,
  Cookies: FaCookie,
  Cakes: FaCookie,
  Breads: FaBreadSlice,
  Pies: FaBreadSlice,
  HerbalTeas: FaLeaf,
  Tinctures: FaFlask,
  NaturalRemedies: FaFlask,
  DriedHerbs: FaLeaf,
  HandmadeSoap: FaSoap,
  SkincareProducts: FaFlask,
  Candles: FaGift,
  Crafts: FaHandsHelping,
  Pottery: FaHandsHelping,
  Textiles: FaHandsHelping,
  Woodwork: FaHandsHelping,
  Metalwork: FaHandsHelping,
  Plants: FaSeedling,
  Flowers: FaSeedling,
  Seeds: FaSeedling,
  Firewood: FaBox,
  Compost: FaBox,
  AnimalFeed: FaBox,
  Coffee: FaWineBottle,
  Tea: FaWineBottle,
  Juice: FaWineBottle,
  Kombucha: FaWineBottle,
  Cider: FaWineBottle,
  HomebrewSupplies: FaFlask,
  GiftBoxes: FaGift,
  SubscriptionBoxes: FaBox,
  CustomOrders: FaHandsHelping,
  FarmTours: FaHandsHelping,
  Workshops: FaHandsHelping,
  Honey: () => null, // Placeholder component
  JamsAndPreserves: () => null, // Placeholder component
  Pickles: () => null, // Placeholder component
  FermentedGoods: () => null, // Placeholder component
  Chutneys: () => null ,
  Sauces: () => null ,
  Vinegar: () => null ,
  Syrups: () => null 
};