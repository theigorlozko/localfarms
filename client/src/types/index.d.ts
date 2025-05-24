import { LucideIcon } from "lucide-react";
import { AuthUser } from "aws-amplify/auth";
import { Manager, Tenant, Property, Application, Vendor, VendorShop } from "./prismaTypes";
import { MotionProps as OriginalMotionProps } from "framer-motion";

declare module "framer-motion" {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
  }
}

declare global {
  enum AmenityEnum {
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

  enum ProductCategoryEnum {
    RawMilk = "RawMilk",
    PasteurizedMilk = "PasteurizedMilk",
    Cheese = "Cheese",
    Butter = "Butter",
    Yogurt = "Yogurt",
    Cream = "Cream",
    FreshEggs = "FreshEggs",
    FreeRangeEggs = "FreeRangeEggs",
    Chicken = "Chicken",
    Duck = "Duck",
    Turkey = "Turkey",
    Beef = "Beef",
    Pork = "Pork",
    Lamb = "Lamb",
    Goat = "Goat",
    Venison = "Venison",
    Sausages = "Sausages",
    Bacon = "Bacon",
    FreshFish = "FreshFish",
    SmokedFish = "SmokedFish",
    Shellfish = "Shellfish",
    FreshVegetables = "FreshVegetables",
    FreshFruit = "FreshFruit",
    OrganicProduce = "OrganicProduce",
    Microgreens = "Microgreens",
    Herbs = "Herbs",
    Honey = "Honey",
    JamsAndPreserves = "JamsAndPreserves",
    Pickles = "Pickles",
    FermentedGoods = "FermentedGoods",
    Chutneys = "Chutneys",
    Sauces = "Sauces",
    Vinegar = "Vinegar",
    Syrups = "Syrups",
    Sourdough = "Sourdough",
    Pastries = "Pastries",
    Cookies = "Cookies",
    Cakes = "Cakes",
    Breads = "Breads",
    Pies = "Pies",
    HerbalTeas = "HerbalTeas",
    Tinctures = "Tinctures",
    NaturalRemedies = "NaturalRemedies",
    DriedHerbs = "DriedHerbs",
    HandmadeSoap = "HandmadeSoap",
    SkincareProducts = "SkincareProducts",
    Candles = "Candles",
    Crafts = "Crafts",
    Pottery = "Pottery",
    Textiles = "Textiles",
    Woodwork = "Woodwork",
    Metalwork = "Metalwork",
    Plants = "Plants",
    Flowers = "Flowers",
    Seeds = "Seeds",
    Firewood = "Firewood",
    Compost = "Compost",
    AnimalFeed = "AnimalFeed",
    Coffee = "Coffee",
    Tea = "Tea",
    Juice = "Juice",
    Kombucha = "Kombucha",
    Cider = "Cider",
    HomebrewSupplies = "HomebrewSupplies",
    GiftBoxes = "GiftBoxes",
    SubscriptionBoxes = "SubscriptionBoxes",
    CustomOrders = "CustomOrders",
    FarmTours = "FarmTours",
    Workshops = "Workshops"
  }

  enum ShopHighlightEnum {
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
    WomanOwned = "WomanOwned"
  }
  
  enum HighlightEnum {
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

  enum PropertyTypeEnum {
    Rooms = "Rooms",
    Tinyhouse = "Tinyhouse",
    Apartment = "Apartment",
    Villa = "Villa",
    Townhouse = "Townhouse",
    Cottage = "Cottage",
  }

  interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
  }

  interface ShopOverviewProps{
    vendorShopId: number;
  }

  interface ShopOverviewProps {
    vendorShopId: number;
    location?: {
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    coordinates?: {
      longitude: number;
      latitude: number;
    };
  };
  }

  interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    propertyId: number;
  }

  interface ContactWidgetProps {
    onOpenModal: () => void;
  }

  interface ImagePreviewsProps {
    images: string[];
  }

  interface ShopDetailsProps {
    vendorShopId: number;
  }

  interface PropertyOverviewProps {
    propertyId: number;
  }

  interface PropertyLocationProps {
    propertyId: number;
  }

  interface ApplicationCardProps {
    application: Application;
    userType: "manager" | "renter";
    children: React.ReactNode;
  }

  interface CardProps {
    shop: VendorShop & {
      location?: {
        address?: string;
        city?: string;
      };
    };
    isFavorite: boolean;
    onFavoriteToggle: () => void;
    showFavoriteButton?: boolean;
    shopLink?: string;
  }

  interface CardCompactProps {
    shop: VendorShop & {
      location?: {
        address?: string;
        city?: string;
      };
    };
    isFavorite: boolean;
    onFavoriteToggle: () => void;
    showFavoriteButton?: boolean;
    shopLink?: string;
  }

  export type VendorShopWithLocation = VendorShop & {
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

  interface HeaderProps {
    title: string;
    subtitle: string;
  }

  interface NavbarProps {
    isDashboard: boolean;
  }

  interface AppSidebarProps {
    userType: "buyer" | "vendor" | "user";
  }

  interface SettingsFormProps {
    initialData: SettingsFormData;
    onSubmit: (data: SettingsFormData) => Promise<void>;
    userType: "buyer" | "vendor"| "user";
  }

  interface User {
    id: string;
    userInfo: {
      name: string;
      image?: string;
      email: string;
      phoneNumber: string;
      cognitoId: string;
      favorites: any[]; // Adjust type based on your schema
      role: string;
    };
    userRole: string;
    cognitoInfo: AuthUser;
    role: string;
  }
}

export {};
