-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- CreateEnum
CREATE TYPE "ShopHighlight" AS ENUM ('Organic', 'FreeRange', 'GrassFed', 'LocallySourced', 'FamilyOwned', 'SeasonalOnly', 'ZeroWaste', 'RenewableEnergy', 'Biodynamic', 'HeritageBreeds', 'FarmToursAvailable', 'SmallBatch', 'SustainablePackaging', 'HandCrafted', 'WomanOwned');

-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('RawMilk', 'PasteurizedMilk', 'Cheese', 'Butter', 'Yogurt', 'Cream', 'FreshEggs', 'FreeRangeEggs', 'Chicken', 'Duck', 'Turkey', 'Beef', 'Pork', 'Lamb', 'Goat', 'Venison', 'Sausages', 'Bacon', 'FreshFish', 'SmokedFish', 'Shellfish', 'FreshVegetables', 'FreshFruit', 'OrganicProduce', 'Microgreens', 'Herbs', 'Honey', 'JamsAndPreserves', 'Pickles', 'FermentedGoods', 'Chutneys', 'Sauces', 'Vinegar', 'Syrups', 'Sourdough', 'Pastries', 'Cookies', 'Cakes', 'Breads', 'Pies', 'HerbalTeas', 'Tinctures', 'NaturalRemedies', 'DriedHerbs', 'HandmadeSoap', 'SkincareProducts', 'Candles', 'Crafts', 'Pottery', 'Textiles', 'Woodwork', 'Metalwork', 'Plants', 'Flowers', 'Seeds', 'Firewood', 'Compost', 'AnimalFeed', 'Coffee', 'Tea', 'Juice', 'Kombucha', 'Cider', 'HomebrewSupplies', 'GiftBoxes', 'SubscriptionBoxes', 'CustomOrders', 'FarmTours', 'Workshops');

-- CreateEnum
CREATE TYPE "VendorShopType" AS ENUM ('Farm', 'DairyFarm', 'Beekeeper', 'Orchard', 'Vineyard', 'Butcher', 'Fishery', 'PoultryFarm', 'MarketStall', 'RoadsideStand', 'SmallRetailShop', 'GardenShed', 'CommunityMarket', 'MobileVan', 'OnlineOnly', 'HomeKitchen', 'SharedKitchen', 'Bakery', 'CoffeeRoaster', 'Herbalist', 'SoapMaker', 'CraftWorkshop', 'Woodworker', 'PotteryStudio', 'TextileStudio', 'UrbanGrower', 'AllotmentPlot', 'MushroomFarm');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BUYER', 'VENDOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "ShopPlan" AS ENUM ('SEED', 'GROWTH', 'BLOOM');

-- CreateTable
CREATE TABLE "VendorShop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photoUrls" TEXT[],
    "productCategory" "ProductCategory"[],
    "shopHighlight" "ShopHighlight"[],
    "isParkingIncluded" BOOLEAN NOT NULL DEFAULT false,
    "vendorShopType" "VendorShopType" NOT NULL,
    "postedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "averageRating" DOUBLE PRECISION DEFAULT 0,
    "numberOfReviews" INTEGER DEFAULT 0,
    "locationId" INTEGER NOT NULL,
    "vendorId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "featuredUntil" TIMESTAMP(3),

    CONSTRAINT "VendorShop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeaturedPayment" (
    "id" SERIAL NOT NULL,
    "vendorShopId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paidAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeaturedPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "plan" "ShopPlan" NOT NULL DEFAULT 'SEED',
    "subscriptionId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "activeUntil" TIMESTAMP(3),

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "cognitoId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "coordinates" geography(Point, 4326) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "vendorShopId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "unit" TEXT,
    "tags" TEXT[],
    "imageUrl" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "externalPurchaseUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "vendorShopId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserFavorites" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserFavorites_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "VendorShop_slug_key" ON "VendorShop"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_userId_key" ON "Vendor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_cognitoId_key" ON "User"("cognitoId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "_UserFavorites_B_index" ON "_UserFavorites"("B");

-- AddForeignKey
ALTER TABLE "VendorShop" ADD CONSTRAINT "VendorShop_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VendorShop" ADD CONSTRAINT "VendorShop_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeaturedPayment" ADD CONSTRAINT "FeaturedPayment_vendorShopId_fkey" FOREIGN KEY ("vendorShopId") REFERENCES "VendorShop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeaturedPayment" ADD CONSTRAINT "FeaturedPayment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_vendorShopId_fkey" FOREIGN KEY ("vendorShopId") REFERENCES "VendorShop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_vendorShopId_fkey" FOREIGN KEY ("vendorShopId") REFERENCES "VendorShop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavorites" ADD CONSTRAINT "_UserFavorites_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavorites" ADD CONSTRAINT "_UserFavorites_B_fkey" FOREIGN KEY ("B") REFERENCES "VendorShop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
