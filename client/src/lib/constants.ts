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
  Leaf,
  Handshake,
  HeartHandshake,
  Recycle,
  Flame,
  Gift,
  Sparkles,
  BadgeCheck,
  Users,
  Globe,
  Sun,
  HandPlatter,
  HandCoins,
  PackageCheck,
  Sprout
  
} from "lucide-react";
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



export enum HighlightEnum {
  Organic = "Organic",
  FreeRange = "FreeRange",
  GrassFed = "GrassFed",
  LocallySourced = "LocallySourced",
  FamilyOwned = "FamilyOwned",
  SeasonalOnly = "SeasonalOnly",
  ZeroWaste = "ZeroWaste",
  RenewableEnergy = "RenewableEnergy",
  Biodynamic = "Biodynamic",
  HeritageBreeds = "HeritageBreeds",
  FarmToursAvailable = "FarmToursAvailable",
  SmallBatch = "SmallBatch",
  SustainablePackaging = "SustainablePackaging",
  HandCrafted = "HandCrafted",
  WomanOwned = "WomanOwned",
}

export const HighlightIcons: Record<ShopHighlightEnum, LucideIcon> = {
  Organic: Leaf,
  FreeRange: Handshake,
  GrassFed: Sprout,
  LocallySourced: Globe,
  FamilyOwned: Users,
  SeasonalOnly: Sun,
  ZeroWaste: Recycle,
  RenewableEnergy: Flame,
  Biodynamic: Sparkles,
  HeritageBreeds: BadgeCheck,
  FarmToursAvailable: HandPlatter,
  SmallBatch: HandCoins,
  SustainablePackaging: PackageCheck,
  HandCrafted: Handshake,
  WomanOwned: Gift
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