
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model VendorShop
 * 
 */
export type VendorShop = $Result.DefaultSelection<Prisma.$VendorShopPayload>
/**
 * Model FeaturedPayment
 * 
 */
export type FeaturedPayment = $Result.DefaultSelection<Prisma.$FeaturedPaymentPayload>
/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ShopHighlight: {
  Organic: 'Organic',
  FreeRange: 'FreeRange',
  GrassFed: 'GrassFed',
  LocallySourced: 'LocallySourced',
  FamilyOwned: 'FamilyOwned',
  SeasonalOnly: 'SeasonalOnly',
  ZeroWaste: 'ZeroWaste',
  RenewableEnergy: 'RenewableEnergy',
  Biodynamic: 'Biodynamic',
  HeritageBreeds: 'HeritageBreeds',
  FarmToursAvailable: 'FarmToursAvailable',
  SmallBatch: 'SmallBatch',
  SustainablePackaging: 'SustainablePackaging',
  HandCrafted: 'HandCrafted',
  WomanOwned: 'WomanOwned'
};

export type ShopHighlight = (typeof ShopHighlight)[keyof typeof ShopHighlight]




export const ProductCategory: {
  RawMilk: 'RawMilk',
  PasteurizedMilk: 'PasteurizedMilk',
  Cheese: 'Cheese',
  Butter: 'Butter',
  Yogurt: 'Yogurt',
  Cream: 'Cream',
  FreshEggs: 'FreshEggs',
  FreeRangeEggs: 'FreeRangeEggs',
  Chicken: 'Chicken',
  Duck: 'Duck',
  Turkey: 'Turkey',
  Beef: 'Beef',
  Pork: 'Pork',
  Lamb: 'Lamb',
  Goat: 'Goat',
  Venison: 'Venison',
  Sausages: 'Sausages',
  Bacon: 'Bacon',
  FreshFish: 'FreshFish',
  SmokedFish: 'SmokedFish',
  Shellfish: 'Shellfish',
  FreshVegetables: 'FreshVegetables',
  FreshFruit: 'FreshFruit',
  OrganicProduce: 'OrganicProduce',
  Microgreens: 'Microgreens',
  Herbs: 'Herbs',
  Honey: 'Honey',
  JamsAndPreserves: 'JamsAndPreserves',
  Pickles: 'Pickles',
  FermentedGoods: 'FermentedGoods',
  Chutneys: 'Chutneys',
  Sauces: 'Sauces',
  Vinegar: 'Vinegar',
  Syrups: 'Syrups',
  Sourdough: 'Sourdough',
  Pastries: 'Pastries',
  Cookies: 'Cookies',
  Cakes: 'Cakes',
  Breads: 'Breads',
  Pies: 'Pies',
  HerbalTeas: 'HerbalTeas',
  Tinctures: 'Tinctures',
  NaturalRemedies: 'NaturalRemedies',
  DriedHerbs: 'DriedHerbs',
  HandmadeSoap: 'HandmadeSoap',
  SkincareProducts: 'SkincareProducts',
  Candles: 'Candles',
  Crafts: 'Crafts',
  Pottery: 'Pottery',
  Textiles: 'Textiles',
  Woodwork: 'Woodwork',
  Metalwork: 'Metalwork',
  Plants: 'Plants',
  Flowers: 'Flowers',
  Seeds: 'Seeds',
  Firewood: 'Firewood',
  Compost: 'Compost',
  AnimalFeed: 'AnimalFeed',
  Coffee: 'Coffee',
  Tea: 'Tea',
  Juice: 'Juice',
  Kombucha: 'Kombucha',
  Cider: 'Cider',
  HomebrewSupplies: 'HomebrewSupplies',
  GiftBoxes: 'GiftBoxes',
  SubscriptionBoxes: 'SubscriptionBoxes',
  CustomOrders: 'CustomOrders',
  FarmTours: 'FarmTours',
  Workshops: 'Workshops'
};

export type ProductCategory = (typeof ProductCategory)[keyof typeof ProductCategory]


export const VendorShopType: {
  Farm: 'Farm',
  DairyFarm: 'DairyFarm',
  Beekeeper: 'Beekeeper',
  Orchard: 'Orchard',
  Vineyard: 'Vineyard',
  Butcher: 'Butcher',
  Fishery: 'Fishery',
  PoultryFarm: 'PoultryFarm',
  MarketStall: 'MarketStall',
  RoadsideStand: 'RoadsideStand',
  SmallRetailShop: 'SmallRetailShop',
  GardenShed: 'GardenShed',
  CommunityMarket: 'CommunityMarket',
  MobileVan: 'MobileVan',
  OnlineOnly: 'OnlineOnly',
  HomeKitchen: 'HomeKitchen',
  SharedKitchen: 'SharedKitchen',
  Bakery: 'Bakery',
  CoffeeRoaster: 'CoffeeRoaster',
  Herbalist: 'Herbalist',
  SoapMaker: 'SoapMaker',
  CraftWorkshop: 'CraftWorkshop',
  Woodworker: 'Woodworker',
  PotteryStudio: 'PotteryStudio',
  TextileStudio: 'TextileStudio',
  UrbanGrower: 'UrbanGrower',
  AllotmentPlot: 'AllotmentPlot',
  MushroomFarm: 'MushroomFarm'
};

export type VendorShopType = (typeof VendorShopType)[keyof typeof VendorShopType]


export const Role: {
  BUYER: 'BUYER',
  VENDOR: 'VENDOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ShopPlan: {
  SEED: 'SEED',
  GROWTH: 'GROWTH',
  BLOOM: 'BLOOM'
};

export type ShopPlan = (typeof ShopPlan)[keyof typeof ShopPlan]

}

export type ShopHighlight = $Enums.ShopHighlight

export const ShopHighlight: typeof $Enums.ShopHighlight

export type ProductCategory = $Enums.ProductCategory

export const ProductCategory: typeof $Enums.ProductCategory

export type VendorShopType = $Enums.VendorShopType

export const VendorShopType: typeof $Enums.VendorShopType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ShopPlan = $Enums.ShopPlan

export const ShopPlan: typeof $Enums.ShopPlan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more VendorShops
 * const vendorShops = await prisma.vendorShop.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more VendorShops
   * const vendorShops = await prisma.vendorShop.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.vendorShop`: Exposes CRUD operations for the **VendorShop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VendorShops
    * const vendorShops = await prisma.vendorShop.findMany()
    * ```
    */
  get vendorShop(): Prisma.VendorShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featuredPayment`: Exposes CRUD operations for the **FeaturedPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeaturedPayments
    * const featuredPayments = await prisma.featuredPayment.findMany()
    * ```
    */
  get featuredPayment(): Prisma.FeaturedPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    VendorShop: 'VendorShop',
    FeaturedPayment: 'FeaturedPayment',
    Vendor: 'Vendor',
    User: 'User',
    Location: 'Location',
    Product: 'Product',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "vendorShop" | "featuredPayment" | "vendor" | "user" | "location" | "product" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      VendorShop: {
        payload: Prisma.$VendorShopPayload<ExtArgs>
        fields: Prisma.VendorShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorShopPayload>
          }
          findFirst: {
            args: Prisma.VendorShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorShopPayload>
          }
          findMany: {
            args: Prisma.VendorShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorShopPayload>[]
          }
          create: {
            args: Prisma.VendorShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorShopPayload>
          }
          createMany: {
            args: Prisma.VendorShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorShopPayload>[]
          }
          delete: {
            args: Prisma.VendorShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorShopPayload>
          }
          update: {
            args: Prisma.VendorShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorShopPayload>
          }
          deleteMany: {
            args: Prisma.VendorShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorShopPayload>[]
          }
          upsert: {
            args: Prisma.VendorShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorShopPayload>
          }
          aggregate: {
            args: Prisma.VendorShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendorShop>
          }
          groupBy: {
            args: Prisma.VendorShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorShopCountArgs<ExtArgs>
            result: $Utils.Optional<VendorShopCountAggregateOutputType> | number
          }
        }
      }
      FeaturedPayment: {
        payload: Prisma.$FeaturedPaymentPayload<ExtArgs>
        fields: Prisma.FeaturedPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeaturedPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeaturedPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPaymentPayload>
          }
          findFirst: {
            args: Prisma.FeaturedPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeaturedPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPaymentPayload>
          }
          findMany: {
            args: Prisma.FeaturedPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPaymentPayload>[]
          }
          create: {
            args: Prisma.FeaturedPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPaymentPayload>
          }
          createMany: {
            args: Prisma.FeaturedPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeaturedPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPaymentPayload>[]
          }
          delete: {
            args: Prisma.FeaturedPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPaymentPayload>
          }
          update: {
            args: Prisma.FeaturedPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPaymentPayload>
          }
          deleteMany: {
            args: Prisma.FeaturedPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeaturedPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeaturedPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPaymentPayload>[]
          }
          upsert: {
            args: Prisma.FeaturedPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPaymentPayload>
          }
          aggregate: {
            args: Prisma.FeaturedPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeaturedPayment>
          }
          groupBy: {
            args: Prisma.FeaturedPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeaturedPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeaturedPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<FeaturedPaymentCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    vendorShop?: VendorShopOmit
    featuredPayment?: FeaturedPaymentOmit
    vendor?: VendorOmit
    user?: UserOmit
    location?: LocationOmit
    product?: ProductOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VendorShopCountOutputType
   */

  export type VendorShopCountOutputType = {
    favoritedBy: number
    products: number
    reviews: number
    featuredPayments: number
  }

  export type VendorShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritedBy?: boolean | VendorShopCountOutputTypeCountFavoritedByArgs
    products?: boolean | VendorShopCountOutputTypeCountProductsArgs
    reviews?: boolean | VendorShopCountOutputTypeCountReviewsArgs
    featuredPayments?: boolean | VendorShopCountOutputTypeCountFeaturedPaymentsArgs
  }

  // Custom InputTypes
  /**
   * VendorShopCountOutputType without action
   */
  export type VendorShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShopCountOutputType
     */
    select?: VendorShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorShopCountOutputType without action
   */
  export type VendorShopCountOutputTypeCountFavoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * VendorShopCountOutputType without action
   */
  export type VendorShopCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * VendorShopCountOutputType without action
   */
  export type VendorShopCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * VendorShopCountOutputType without action
   */
  export type VendorShopCountOutputTypeCountFeaturedPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeaturedPaymentWhereInput
  }


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    vendorShops: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorShops?: boolean | VendorCountOutputTypeCountVendorShopsArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountVendorShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorShopWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviews: number
    favorites: number
    featuredPayments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    featuredPayments?: boolean | UserCountOutputTypeCountFeaturedPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorShopWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeaturedPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeaturedPaymentWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    vendorShops: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorShops?: boolean | LocationCountOutputTypeCountVendorShopsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountVendorShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorShopWhereInput
  }


  /**
   * Models
   */

  /**
   * Model VendorShop
   */

  export type AggregateVendorShop = {
    _count: VendorShopCountAggregateOutputType | null
    _avg: VendorShopAvgAggregateOutputType | null
    _sum: VendorShopSumAggregateOutputType | null
    _min: VendorShopMinAggregateOutputType | null
    _max: VendorShopMaxAggregateOutputType | null
  }

  export type VendorShopAvgAggregateOutputType = {
    id: number | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
    vendorId: number | null
  }

  export type VendorShopSumAggregateOutputType = {
    id: number | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
    vendorId: number | null
  }

  export type VendorShopMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isParkingIncluded: boolean | null
    vendorShopType: $Enums.VendorShopType | null
    postedDate: Date | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
    vendorId: number | null
    slug: string | null
    isFeatured: boolean | null
    featuredUntil: Date | null
  }

  export type VendorShopMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isParkingIncluded: boolean | null
    vendorShopType: $Enums.VendorShopType | null
    postedDate: Date | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
    vendorId: number | null
    slug: string | null
    isFeatured: boolean | null
    featuredUntil: Date | null
  }

  export type VendorShopCountAggregateOutputType = {
    id: number
    name: number
    description: number
    photoUrls: number
    productCategory: number
    shopHighlight: number
    isParkingIncluded: number
    vendorShopType: number
    postedDate: number
    averageRating: number
    numberOfReviews: number
    locationId: number
    vendorId: number
    slug: number
    isFeatured: number
    featuredUntil: number
    _all: number
  }


  export type VendorShopAvgAggregateInputType = {
    id?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    vendorId?: true
  }

  export type VendorShopSumAggregateInputType = {
    id?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    vendorId?: true
  }

  export type VendorShopMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isParkingIncluded?: true
    vendorShopType?: true
    postedDate?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    vendorId?: true
    slug?: true
    isFeatured?: true
    featuredUntil?: true
  }

  export type VendorShopMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isParkingIncluded?: true
    vendorShopType?: true
    postedDate?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    vendorId?: true
    slug?: true
    isFeatured?: true
    featuredUntil?: true
  }

  export type VendorShopCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    photoUrls?: true
    productCategory?: true
    shopHighlight?: true
    isParkingIncluded?: true
    vendorShopType?: true
    postedDate?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    vendorId?: true
    slug?: true
    isFeatured?: true
    featuredUntil?: true
    _all?: true
  }

  export type VendorShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorShop to aggregate.
     */
    where?: VendorShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorShops to fetch.
     */
    orderBy?: VendorShopOrderByWithRelationInput | VendorShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VendorShops
    **/
    _count?: true | VendorShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorShopMaxAggregateInputType
  }

  export type GetVendorShopAggregateType<T extends VendorShopAggregateArgs> = {
        [P in keyof T & keyof AggregateVendorShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendorShop[P]>
      : GetScalarType<T[P], AggregateVendorShop[P]>
  }




  export type VendorShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorShopWhereInput
    orderBy?: VendorShopOrderByWithAggregationInput | VendorShopOrderByWithAggregationInput[]
    by: VendorShopScalarFieldEnum[] | VendorShopScalarFieldEnum
    having?: VendorShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorShopCountAggregateInputType | true
    _avg?: VendorShopAvgAggregateInputType
    _sum?: VendorShopSumAggregateInputType
    _min?: VendorShopMinAggregateInputType
    _max?: VendorShopMaxAggregateInputType
  }

  export type VendorShopGroupByOutputType = {
    id: number
    name: string
    description: string
    photoUrls: string[]
    productCategory: $Enums.ProductCategory[]
    shopHighlight: $Enums.ShopHighlight[]
    isParkingIncluded: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate: Date
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number
    vendorId: number
    slug: string
    isFeatured: boolean
    featuredUntil: Date | null
    _count: VendorShopCountAggregateOutputType | null
    _avg: VendorShopAvgAggregateOutputType | null
    _sum: VendorShopSumAggregateOutputType | null
    _min: VendorShopMinAggregateOutputType | null
    _max: VendorShopMaxAggregateOutputType | null
  }

  type GetVendorShopGroupByPayload<T extends VendorShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorShopGroupByOutputType[P]>
            : GetScalarType<T[P], VendorShopGroupByOutputType[P]>
        }
      >
    >


  export type VendorShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    photoUrls?: boolean
    productCategory?: boolean
    shopHighlight?: boolean
    isParkingIncluded?: boolean
    vendorShopType?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    vendorId?: boolean
    slug?: boolean
    isFeatured?: boolean
    featuredUntil?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    favoritedBy?: boolean | VendorShop$favoritedByArgs<ExtArgs>
    products?: boolean | VendorShop$productsArgs<ExtArgs>
    reviews?: boolean | VendorShop$reviewsArgs<ExtArgs>
    featuredPayments?: boolean | VendorShop$featuredPaymentsArgs<ExtArgs>
    _count?: boolean | VendorShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorShop"]>

  export type VendorShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    photoUrls?: boolean
    productCategory?: boolean
    shopHighlight?: boolean
    isParkingIncluded?: boolean
    vendorShopType?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    vendorId?: boolean
    slug?: boolean
    isFeatured?: boolean
    featuredUntil?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorShop"]>

  export type VendorShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    photoUrls?: boolean
    productCategory?: boolean
    shopHighlight?: boolean
    isParkingIncluded?: boolean
    vendorShopType?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    vendorId?: boolean
    slug?: boolean
    isFeatured?: boolean
    featuredUntil?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorShop"]>

  export type VendorShopSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    photoUrls?: boolean
    productCategory?: boolean
    shopHighlight?: boolean
    isParkingIncluded?: boolean
    vendorShopType?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    vendorId?: boolean
    slug?: boolean
    isFeatured?: boolean
    featuredUntil?: boolean
  }

  export type VendorShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "photoUrls" | "productCategory" | "shopHighlight" | "isParkingIncluded" | "vendorShopType" | "postedDate" | "averageRating" | "numberOfReviews" | "locationId" | "vendorId" | "slug" | "isFeatured" | "featuredUntil", ExtArgs["result"]["vendorShop"]>
  export type VendorShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    favoritedBy?: boolean | VendorShop$favoritedByArgs<ExtArgs>
    products?: boolean | VendorShop$productsArgs<ExtArgs>
    reviews?: boolean | VendorShop$reviewsArgs<ExtArgs>
    featuredPayments?: boolean | VendorShop$featuredPaymentsArgs<ExtArgs>
    _count?: boolean | VendorShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type VendorShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $VendorShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VendorShop"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      vendor: Prisma.$VendorPayload<ExtArgs>
      favoritedBy: Prisma.$UserPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      featuredPayments: Prisma.$FeaturedPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      photoUrls: string[]
      productCategory: $Enums.ProductCategory[]
      shopHighlight: $Enums.ShopHighlight[]
      isParkingIncluded: boolean
      vendorShopType: $Enums.VendorShopType
      postedDate: Date
      averageRating: number | null
      numberOfReviews: number | null
      locationId: number
      vendorId: number
      slug: string
      isFeatured: boolean
      featuredUntil: Date | null
    }, ExtArgs["result"]["vendorShop"]>
    composites: {}
  }

  type VendorShopGetPayload<S extends boolean | null | undefined | VendorShopDefaultArgs> = $Result.GetResult<Prisma.$VendorShopPayload, S>

  type VendorShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorShopCountAggregateInputType | true
    }

  export interface VendorShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VendorShop'], meta: { name: 'VendorShop' } }
    /**
     * Find zero or one VendorShop that matches the filter.
     * @param {VendorShopFindUniqueArgs} args - Arguments to find a VendorShop
     * @example
     * // Get one VendorShop
     * const vendorShop = await prisma.vendorShop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorShopFindUniqueArgs>(args: SelectSubset<T, VendorShopFindUniqueArgs<ExtArgs>>): Prisma__VendorShopClient<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VendorShop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorShopFindUniqueOrThrowArgs} args - Arguments to find a VendorShop
     * @example
     * // Get one VendorShop
     * const vendorShop = await prisma.vendorShop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorShopFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorShopClient<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorShop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorShopFindFirstArgs} args - Arguments to find a VendorShop
     * @example
     * // Get one VendorShop
     * const vendorShop = await prisma.vendorShop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorShopFindFirstArgs>(args?: SelectSubset<T, VendorShopFindFirstArgs<ExtArgs>>): Prisma__VendorShopClient<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorShop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorShopFindFirstOrThrowArgs} args - Arguments to find a VendorShop
     * @example
     * // Get one VendorShop
     * const vendorShop = await prisma.vendorShop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorShopFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorShopClient<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VendorShops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VendorShops
     * const vendorShops = await prisma.vendorShop.findMany()
     * 
     * // Get first 10 VendorShops
     * const vendorShops = await prisma.vendorShop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorShopWithIdOnly = await prisma.vendorShop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorShopFindManyArgs>(args?: SelectSubset<T, VendorShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VendorShop.
     * @param {VendorShopCreateArgs} args - Arguments to create a VendorShop.
     * @example
     * // Create one VendorShop
     * const VendorShop = await prisma.vendorShop.create({
     *   data: {
     *     // ... data to create a VendorShop
     *   }
     * })
     * 
     */
    create<T extends VendorShopCreateArgs>(args: SelectSubset<T, VendorShopCreateArgs<ExtArgs>>): Prisma__VendorShopClient<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VendorShops.
     * @param {VendorShopCreateManyArgs} args - Arguments to create many VendorShops.
     * @example
     * // Create many VendorShops
     * const vendorShop = await prisma.vendorShop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorShopCreateManyArgs>(args?: SelectSubset<T, VendorShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VendorShops and returns the data saved in the database.
     * @param {VendorShopCreateManyAndReturnArgs} args - Arguments to create many VendorShops.
     * @example
     * // Create many VendorShops
     * const vendorShop = await prisma.vendorShop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VendorShops and only return the `id`
     * const vendorShopWithIdOnly = await prisma.vendorShop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorShopCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VendorShop.
     * @param {VendorShopDeleteArgs} args - Arguments to delete one VendorShop.
     * @example
     * // Delete one VendorShop
     * const VendorShop = await prisma.vendorShop.delete({
     *   where: {
     *     // ... filter to delete one VendorShop
     *   }
     * })
     * 
     */
    delete<T extends VendorShopDeleteArgs>(args: SelectSubset<T, VendorShopDeleteArgs<ExtArgs>>): Prisma__VendorShopClient<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VendorShop.
     * @param {VendorShopUpdateArgs} args - Arguments to update one VendorShop.
     * @example
     * // Update one VendorShop
     * const vendorShop = await prisma.vendorShop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorShopUpdateArgs>(args: SelectSubset<T, VendorShopUpdateArgs<ExtArgs>>): Prisma__VendorShopClient<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VendorShops.
     * @param {VendorShopDeleteManyArgs} args - Arguments to filter VendorShops to delete.
     * @example
     * // Delete a few VendorShops
     * const { count } = await prisma.vendorShop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorShopDeleteManyArgs>(args?: SelectSubset<T, VendorShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VendorShops
     * const vendorShop = await prisma.vendorShop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorShopUpdateManyArgs>(args: SelectSubset<T, VendorShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorShops and returns the data updated in the database.
     * @param {VendorShopUpdateManyAndReturnArgs} args - Arguments to update many VendorShops.
     * @example
     * // Update many VendorShops
     * const vendorShop = await prisma.vendorShop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VendorShops and only return the `id`
     * const vendorShopWithIdOnly = await prisma.vendorShop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendorShopUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VendorShop.
     * @param {VendorShopUpsertArgs} args - Arguments to update or create a VendorShop.
     * @example
     * // Update or create a VendorShop
     * const vendorShop = await prisma.vendorShop.upsert({
     *   create: {
     *     // ... data to create a VendorShop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VendorShop we want to update
     *   }
     * })
     */
    upsert<T extends VendorShopUpsertArgs>(args: SelectSubset<T, VendorShopUpsertArgs<ExtArgs>>): Prisma__VendorShopClient<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VendorShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorShopCountArgs} args - Arguments to filter VendorShops to count.
     * @example
     * // Count the number of VendorShops
     * const count = await prisma.vendorShop.count({
     *   where: {
     *     // ... the filter for the VendorShops we want to count
     *   }
     * })
    **/
    count<T extends VendorShopCountArgs>(
      args?: Subset<T, VendorShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VendorShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorShopAggregateArgs>(args: Subset<T, VendorShopAggregateArgs>): Prisma.PrismaPromise<GetVendorShopAggregateType<T>>

    /**
     * Group by VendorShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorShopGroupByArgs['orderBy'] }
        : { orderBy?: VendorShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VendorShop model
   */
  readonly fields: VendorShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VendorShop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    favoritedBy<T extends VendorShop$favoritedByArgs<ExtArgs> = {}>(args?: Subset<T, VendorShop$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends VendorShop$productsArgs<ExtArgs> = {}>(args?: Subset<T, VendorShop$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends VendorShop$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, VendorShop$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    featuredPayments<T extends VendorShop$featuredPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, VendorShop$featuredPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VendorShop model
   */
  interface VendorShopFieldRefs {
    readonly id: FieldRef<"VendorShop", 'Int'>
    readonly name: FieldRef<"VendorShop", 'String'>
    readonly description: FieldRef<"VendorShop", 'String'>
    readonly photoUrls: FieldRef<"VendorShop", 'String[]'>
    readonly productCategory: FieldRef<"VendorShop", 'ProductCategory[]'>
    readonly shopHighlight: FieldRef<"VendorShop", 'ShopHighlight[]'>
    readonly isParkingIncluded: FieldRef<"VendorShop", 'Boolean'>
    readonly vendorShopType: FieldRef<"VendorShop", 'VendorShopType'>
    readonly postedDate: FieldRef<"VendorShop", 'DateTime'>
    readonly averageRating: FieldRef<"VendorShop", 'Float'>
    readonly numberOfReviews: FieldRef<"VendorShop", 'Int'>
    readonly locationId: FieldRef<"VendorShop", 'Int'>
    readonly vendorId: FieldRef<"VendorShop", 'Int'>
    readonly slug: FieldRef<"VendorShop", 'String'>
    readonly isFeatured: FieldRef<"VendorShop", 'Boolean'>
    readonly featuredUntil: FieldRef<"VendorShop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VendorShop findUnique
   */
  export type VendorShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
    /**
     * Filter, which VendorShop to fetch.
     */
    where: VendorShopWhereUniqueInput
  }

  /**
   * VendorShop findUniqueOrThrow
   */
  export type VendorShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
    /**
     * Filter, which VendorShop to fetch.
     */
    where: VendorShopWhereUniqueInput
  }

  /**
   * VendorShop findFirst
   */
  export type VendorShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
    /**
     * Filter, which VendorShop to fetch.
     */
    where?: VendorShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorShops to fetch.
     */
    orderBy?: VendorShopOrderByWithRelationInput | VendorShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorShops.
     */
    cursor?: VendorShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorShops.
     */
    distinct?: VendorShopScalarFieldEnum | VendorShopScalarFieldEnum[]
  }

  /**
   * VendorShop findFirstOrThrow
   */
  export type VendorShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
    /**
     * Filter, which VendorShop to fetch.
     */
    where?: VendorShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorShops to fetch.
     */
    orderBy?: VendorShopOrderByWithRelationInput | VendorShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorShops.
     */
    cursor?: VendorShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorShops.
     */
    distinct?: VendorShopScalarFieldEnum | VendorShopScalarFieldEnum[]
  }

  /**
   * VendorShop findMany
   */
  export type VendorShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
    /**
     * Filter, which VendorShops to fetch.
     */
    where?: VendorShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorShops to fetch.
     */
    orderBy?: VendorShopOrderByWithRelationInput | VendorShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VendorShops.
     */
    cursor?: VendorShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorShops.
     */
    skip?: number
    distinct?: VendorShopScalarFieldEnum | VendorShopScalarFieldEnum[]
  }

  /**
   * VendorShop create
   */
  export type VendorShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
    /**
     * The data needed to create a VendorShop.
     */
    data: XOR<VendorShopCreateInput, VendorShopUncheckedCreateInput>
  }

  /**
   * VendorShop createMany
   */
  export type VendorShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VendorShops.
     */
    data: VendorShopCreateManyInput | VendorShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VendorShop createManyAndReturn
   */
  export type VendorShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * The data used to create many VendorShops.
     */
    data: VendorShopCreateManyInput | VendorShopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorShop update
   */
  export type VendorShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
    /**
     * The data needed to update a VendorShop.
     */
    data: XOR<VendorShopUpdateInput, VendorShopUncheckedUpdateInput>
    /**
     * Choose, which VendorShop to update.
     */
    where: VendorShopWhereUniqueInput
  }

  /**
   * VendorShop updateMany
   */
  export type VendorShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VendorShops.
     */
    data: XOR<VendorShopUpdateManyMutationInput, VendorShopUncheckedUpdateManyInput>
    /**
     * Filter which VendorShops to update
     */
    where?: VendorShopWhereInput
    /**
     * Limit how many VendorShops to update.
     */
    limit?: number
  }

  /**
   * VendorShop updateManyAndReturn
   */
  export type VendorShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * The data used to update VendorShops.
     */
    data: XOR<VendorShopUpdateManyMutationInput, VendorShopUncheckedUpdateManyInput>
    /**
     * Filter which VendorShops to update
     */
    where?: VendorShopWhereInput
    /**
     * Limit how many VendorShops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorShop upsert
   */
  export type VendorShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
    /**
     * The filter to search for the VendorShop to update in case it exists.
     */
    where: VendorShopWhereUniqueInput
    /**
     * In case the VendorShop found by the `where` argument doesn't exist, create a new VendorShop with this data.
     */
    create: XOR<VendorShopCreateInput, VendorShopUncheckedCreateInput>
    /**
     * In case the VendorShop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorShopUpdateInput, VendorShopUncheckedUpdateInput>
  }

  /**
   * VendorShop delete
   */
  export type VendorShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
    /**
     * Filter which VendorShop to delete.
     */
    where: VendorShopWhereUniqueInput
  }

  /**
   * VendorShop deleteMany
   */
  export type VendorShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorShops to delete
     */
    where?: VendorShopWhereInput
    /**
     * Limit how many VendorShops to delete.
     */
    limit?: number
  }

  /**
   * VendorShop.favoritedBy
   */
  export type VendorShop$favoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * VendorShop.products
   */
  export type VendorShop$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * VendorShop.reviews
   */
  export type VendorShop$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * VendorShop.featuredPayments
   */
  export type VendorShop$featuredPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentInclude<ExtArgs> | null
    where?: FeaturedPaymentWhereInput
    orderBy?: FeaturedPaymentOrderByWithRelationInput | FeaturedPaymentOrderByWithRelationInput[]
    cursor?: FeaturedPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeaturedPaymentScalarFieldEnum | FeaturedPaymentScalarFieldEnum[]
  }

  /**
   * VendorShop without action
   */
  export type VendorShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
  }


  /**
   * Model FeaturedPayment
   */

  export type AggregateFeaturedPayment = {
    _count: FeaturedPaymentCountAggregateOutputType | null
    _avg: FeaturedPaymentAvgAggregateOutputType | null
    _sum: FeaturedPaymentSumAggregateOutputType | null
    _min: FeaturedPaymentMinAggregateOutputType | null
    _max: FeaturedPaymentMaxAggregateOutputType | null
  }

  export type FeaturedPaymentAvgAggregateOutputType = {
    id: number | null
    vendorShopId: number | null
    userId: number | null
    amount: number | null
  }

  export type FeaturedPaymentSumAggregateOutputType = {
    id: number | null
    vendorShopId: number | null
    userId: number | null
    amount: number | null
  }

  export type FeaturedPaymentMinAggregateOutputType = {
    id: number | null
    vendorShopId: number | null
    userId: number | null
    amount: number | null
    paidAt: Date | null
    expiresAt: Date | null
  }

  export type FeaturedPaymentMaxAggregateOutputType = {
    id: number | null
    vendorShopId: number | null
    userId: number | null
    amount: number | null
    paidAt: Date | null
    expiresAt: Date | null
  }

  export type FeaturedPaymentCountAggregateOutputType = {
    id: number
    vendorShopId: number
    userId: number
    amount: number
    paidAt: number
    expiresAt: number
    _all: number
  }


  export type FeaturedPaymentAvgAggregateInputType = {
    id?: true
    vendorShopId?: true
    userId?: true
    amount?: true
  }

  export type FeaturedPaymentSumAggregateInputType = {
    id?: true
    vendorShopId?: true
    userId?: true
    amount?: true
  }

  export type FeaturedPaymentMinAggregateInputType = {
    id?: true
    vendorShopId?: true
    userId?: true
    amount?: true
    paidAt?: true
    expiresAt?: true
  }

  export type FeaturedPaymentMaxAggregateInputType = {
    id?: true
    vendorShopId?: true
    userId?: true
    amount?: true
    paidAt?: true
    expiresAt?: true
  }

  export type FeaturedPaymentCountAggregateInputType = {
    id?: true
    vendorShopId?: true
    userId?: true
    amount?: true
    paidAt?: true
    expiresAt?: true
    _all?: true
  }

  export type FeaturedPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeaturedPayment to aggregate.
     */
    where?: FeaturedPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedPayments to fetch.
     */
    orderBy?: FeaturedPaymentOrderByWithRelationInput | FeaturedPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeaturedPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeaturedPayments
    **/
    _count?: true | FeaturedPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeaturedPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeaturedPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeaturedPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeaturedPaymentMaxAggregateInputType
  }

  export type GetFeaturedPaymentAggregateType<T extends FeaturedPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateFeaturedPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeaturedPayment[P]>
      : GetScalarType<T[P], AggregateFeaturedPayment[P]>
  }




  export type FeaturedPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeaturedPaymentWhereInput
    orderBy?: FeaturedPaymentOrderByWithAggregationInput | FeaturedPaymentOrderByWithAggregationInput[]
    by: FeaturedPaymentScalarFieldEnum[] | FeaturedPaymentScalarFieldEnum
    having?: FeaturedPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeaturedPaymentCountAggregateInputType | true
    _avg?: FeaturedPaymentAvgAggregateInputType
    _sum?: FeaturedPaymentSumAggregateInputType
    _min?: FeaturedPaymentMinAggregateInputType
    _max?: FeaturedPaymentMaxAggregateInputType
  }

  export type FeaturedPaymentGroupByOutputType = {
    id: number
    vendorShopId: number
    userId: number
    amount: number
    paidAt: Date
    expiresAt: Date
    _count: FeaturedPaymentCountAggregateOutputType | null
    _avg: FeaturedPaymentAvgAggregateOutputType | null
    _sum: FeaturedPaymentSumAggregateOutputType | null
    _min: FeaturedPaymentMinAggregateOutputType | null
    _max: FeaturedPaymentMaxAggregateOutputType | null
  }

  type GetFeaturedPaymentGroupByPayload<T extends FeaturedPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeaturedPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeaturedPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeaturedPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], FeaturedPaymentGroupByOutputType[P]>
        }
      >
    >


  export type FeaturedPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorShopId?: boolean
    userId?: boolean
    amount?: boolean
    paidAt?: boolean
    expiresAt?: boolean
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featuredPayment"]>

  export type FeaturedPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorShopId?: boolean
    userId?: boolean
    amount?: boolean
    paidAt?: boolean
    expiresAt?: boolean
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featuredPayment"]>

  export type FeaturedPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorShopId?: boolean
    userId?: boolean
    amount?: boolean
    paidAt?: boolean
    expiresAt?: boolean
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featuredPayment"]>

  export type FeaturedPaymentSelectScalar = {
    id?: boolean
    vendorShopId?: boolean
    userId?: boolean
    amount?: boolean
    paidAt?: boolean
    expiresAt?: boolean
  }

  export type FeaturedPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorShopId" | "userId" | "amount" | "paidAt" | "expiresAt", ExtArgs["result"]["featuredPayment"]>
  export type FeaturedPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeaturedPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeaturedPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeaturedPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeaturedPayment"
    objects: {
      vendorShop: Prisma.$VendorShopPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vendorShopId: number
      userId: number
      amount: number
      paidAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["featuredPayment"]>
    composites: {}
  }

  type FeaturedPaymentGetPayload<S extends boolean | null | undefined | FeaturedPaymentDefaultArgs> = $Result.GetResult<Prisma.$FeaturedPaymentPayload, S>

  type FeaturedPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeaturedPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeaturedPaymentCountAggregateInputType | true
    }

  export interface FeaturedPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeaturedPayment'], meta: { name: 'FeaturedPayment' } }
    /**
     * Find zero or one FeaturedPayment that matches the filter.
     * @param {FeaturedPaymentFindUniqueArgs} args - Arguments to find a FeaturedPayment
     * @example
     * // Get one FeaturedPayment
     * const featuredPayment = await prisma.featuredPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeaturedPaymentFindUniqueArgs>(args: SelectSubset<T, FeaturedPaymentFindUniqueArgs<ExtArgs>>): Prisma__FeaturedPaymentClient<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeaturedPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeaturedPaymentFindUniqueOrThrowArgs} args - Arguments to find a FeaturedPayment
     * @example
     * // Get one FeaturedPayment
     * const featuredPayment = await prisma.featuredPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeaturedPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, FeaturedPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeaturedPaymentClient<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeaturedPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedPaymentFindFirstArgs} args - Arguments to find a FeaturedPayment
     * @example
     * // Get one FeaturedPayment
     * const featuredPayment = await prisma.featuredPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeaturedPaymentFindFirstArgs>(args?: SelectSubset<T, FeaturedPaymentFindFirstArgs<ExtArgs>>): Prisma__FeaturedPaymentClient<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeaturedPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedPaymentFindFirstOrThrowArgs} args - Arguments to find a FeaturedPayment
     * @example
     * // Get one FeaturedPayment
     * const featuredPayment = await prisma.featuredPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeaturedPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, FeaturedPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeaturedPaymentClient<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeaturedPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeaturedPayments
     * const featuredPayments = await prisma.featuredPayment.findMany()
     * 
     * // Get first 10 FeaturedPayments
     * const featuredPayments = await prisma.featuredPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featuredPaymentWithIdOnly = await prisma.featuredPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeaturedPaymentFindManyArgs>(args?: SelectSubset<T, FeaturedPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeaturedPayment.
     * @param {FeaturedPaymentCreateArgs} args - Arguments to create a FeaturedPayment.
     * @example
     * // Create one FeaturedPayment
     * const FeaturedPayment = await prisma.featuredPayment.create({
     *   data: {
     *     // ... data to create a FeaturedPayment
     *   }
     * })
     * 
     */
    create<T extends FeaturedPaymentCreateArgs>(args: SelectSubset<T, FeaturedPaymentCreateArgs<ExtArgs>>): Prisma__FeaturedPaymentClient<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeaturedPayments.
     * @param {FeaturedPaymentCreateManyArgs} args - Arguments to create many FeaturedPayments.
     * @example
     * // Create many FeaturedPayments
     * const featuredPayment = await prisma.featuredPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeaturedPaymentCreateManyArgs>(args?: SelectSubset<T, FeaturedPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeaturedPayments and returns the data saved in the database.
     * @param {FeaturedPaymentCreateManyAndReturnArgs} args - Arguments to create many FeaturedPayments.
     * @example
     * // Create many FeaturedPayments
     * const featuredPayment = await prisma.featuredPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeaturedPayments and only return the `id`
     * const featuredPaymentWithIdOnly = await prisma.featuredPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeaturedPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, FeaturedPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeaturedPayment.
     * @param {FeaturedPaymentDeleteArgs} args - Arguments to delete one FeaturedPayment.
     * @example
     * // Delete one FeaturedPayment
     * const FeaturedPayment = await prisma.featuredPayment.delete({
     *   where: {
     *     // ... filter to delete one FeaturedPayment
     *   }
     * })
     * 
     */
    delete<T extends FeaturedPaymentDeleteArgs>(args: SelectSubset<T, FeaturedPaymentDeleteArgs<ExtArgs>>): Prisma__FeaturedPaymentClient<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeaturedPayment.
     * @param {FeaturedPaymentUpdateArgs} args - Arguments to update one FeaturedPayment.
     * @example
     * // Update one FeaturedPayment
     * const featuredPayment = await prisma.featuredPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeaturedPaymentUpdateArgs>(args: SelectSubset<T, FeaturedPaymentUpdateArgs<ExtArgs>>): Prisma__FeaturedPaymentClient<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeaturedPayments.
     * @param {FeaturedPaymentDeleteManyArgs} args - Arguments to filter FeaturedPayments to delete.
     * @example
     * // Delete a few FeaturedPayments
     * const { count } = await prisma.featuredPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeaturedPaymentDeleteManyArgs>(args?: SelectSubset<T, FeaturedPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeaturedPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeaturedPayments
     * const featuredPayment = await prisma.featuredPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeaturedPaymentUpdateManyArgs>(args: SelectSubset<T, FeaturedPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeaturedPayments and returns the data updated in the database.
     * @param {FeaturedPaymentUpdateManyAndReturnArgs} args - Arguments to update many FeaturedPayments.
     * @example
     * // Update many FeaturedPayments
     * const featuredPayment = await prisma.featuredPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeaturedPayments and only return the `id`
     * const featuredPaymentWithIdOnly = await prisma.featuredPayment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeaturedPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, FeaturedPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeaturedPayment.
     * @param {FeaturedPaymentUpsertArgs} args - Arguments to update or create a FeaturedPayment.
     * @example
     * // Update or create a FeaturedPayment
     * const featuredPayment = await prisma.featuredPayment.upsert({
     *   create: {
     *     // ... data to create a FeaturedPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeaturedPayment we want to update
     *   }
     * })
     */
    upsert<T extends FeaturedPaymentUpsertArgs>(args: SelectSubset<T, FeaturedPaymentUpsertArgs<ExtArgs>>): Prisma__FeaturedPaymentClient<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeaturedPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedPaymentCountArgs} args - Arguments to filter FeaturedPayments to count.
     * @example
     * // Count the number of FeaturedPayments
     * const count = await prisma.featuredPayment.count({
     *   where: {
     *     // ... the filter for the FeaturedPayments we want to count
     *   }
     * })
    **/
    count<T extends FeaturedPaymentCountArgs>(
      args?: Subset<T, FeaturedPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeaturedPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeaturedPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeaturedPaymentAggregateArgs>(args: Subset<T, FeaturedPaymentAggregateArgs>): Prisma.PrismaPromise<GetFeaturedPaymentAggregateType<T>>

    /**
     * Group by FeaturedPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeaturedPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeaturedPaymentGroupByArgs['orderBy'] }
        : { orderBy?: FeaturedPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeaturedPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeaturedPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeaturedPayment model
   */
  readonly fields: FeaturedPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeaturedPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeaturedPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendorShop<T extends VendorShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorShopDefaultArgs<ExtArgs>>): Prisma__VendorShopClient<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeaturedPayment model
   */
  interface FeaturedPaymentFieldRefs {
    readonly id: FieldRef<"FeaturedPayment", 'Int'>
    readonly vendorShopId: FieldRef<"FeaturedPayment", 'Int'>
    readonly userId: FieldRef<"FeaturedPayment", 'Int'>
    readonly amount: FieldRef<"FeaturedPayment", 'Float'>
    readonly paidAt: FieldRef<"FeaturedPayment", 'DateTime'>
    readonly expiresAt: FieldRef<"FeaturedPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeaturedPayment findUnique
   */
  export type FeaturedPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedPayment to fetch.
     */
    where: FeaturedPaymentWhereUniqueInput
  }

  /**
   * FeaturedPayment findUniqueOrThrow
   */
  export type FeaturedPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedPayment to fetch.
     */
    where: FeaturedPaymentWhereUniqueInput
  }

  /**
   * FeaturedPayment findFirst
   */
  export type FeaturedPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedPayment to fetch.
     */
    where?: FeaturedPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedPayments to fetch.
     */
    orderBy?: FeaturedPaymentOrderByWithRelationInput | FeaturedPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeaturedPayments.
     */
    cursor?: FeaturedPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeaturedPayments.
     */
    distinct?: FeaturedPaymentScalarFieldEnum | FeaturedPaymentScalarFieldEnum[]
  }

  /**
   * FeaturedPayment findFirstOrThrow
   */
  export type FeaturedPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedPayment to fetch.
     */
    where?: FeaturedPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedPayments to fetch.
     */
    orderBy?: FeaturedPaymentOrderByWithRelationInput | FeaturedPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeaturedPayments.
     */
    cursor?: FeaturedPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeaturedPayments.
     */
    distinct?: FeaturedPaymentScalarFieldEnum | FeaturedPaymentScalarFieldEnum[]
  }

  /**
   * FeaturedPayment findMany
   */
  export type FeaturedPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedPayments to fetch.
     */
    where?: FeaturedPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedPayments to fetch.
     */
    orderBy?: FeaturedPaymentOrderByWithRelationInput | FeaturedPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeaturedPayments.
     */
    cursor?: FeaturedPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedPayments.
     */
    skip?: number
    distinct?: FeaturedPaymentScalarFieldEnum | FeaturedPaymentScalarFieldEnum[]
  }

  /**
   * FeaturedPayment create
   */
  export type FeaturedPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a FeaturedPayment.
     */
    data: XOR<FeaturedPaymentCreateInput, FeaturedPaymentUncheckedCreateInput>
  }

  /**
   * FeaturedPayment createMany
   */
  export type FeaturedPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeaturedPayments.
     */
    data: FeaturedPaymentCreateManyInput | FeaturedPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeaturedPayment createManyAndReturn
   */
  export type FeaturedPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many FeaturedPayments.
     */
    data: FeaturedPaymentCreateManyInput | FeaturedPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeaturedPayment update
   */
  export type FeaturedPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a FeaturedPayment.
     */
    data: XOR<FeaturedPaymentUpdateInput, FeaturedPaymentUncheckedUpdateInput>
    /**
     * Choose, which FeaturedPayment to update.
     */
    where: FeaturedPaymentWhereUniqueInput
  }

  /**
   * FeaturedPayment updateMany
   */
  export type FeaturedPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeaturedPayments.
     */
    data: XOR<FeaturedPaymentUpdateManyMutationInput, FeaturedPaymentUncheckedUpdateManyInput>
    /**
     * Filter which FeaturedPayments to update
     */
    where?: FeaturedPaymentWhereInput
    /**
     * Limit how many FeaturedPayments to update.
     */
    limit?: number
  }

  /**
   * FeaturedPayment updateManyAndReturn
   */
  export type FeaturedPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * The data used to update FeaturedPayments.
     */
    data: XOR<FeaturedPaymentUpdateManyMutationInput, FeaturedPaymentUncheckedUpdateManyInput>
    /**
     * Filter which FeaturedPayments to update
     */
    where?: FeaturedPaymentWhereInput
    /**
     * Limit how many FeaturedPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeaturedPayment upsert
   */
  export type FeaturedPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the FeaturedPayment to update in case it exists.
     */
    where: FeaturedPaymentWhereUniqueInput
    /**
     * In case the FeaturedPayment found by the `where` argument doesn't exist, create a new FeaturedPayment with this data.
     */
    create: XOR<FeaturedPaymentCreateInput, FeaturedPaymentUncheckedCreateInput>
    /**
     * In case the FeaturedPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeaturedPaymentUpdateInput, FeaturedPaymentUncheckedUpdateInput>
  }

  /**
   * FeaturedPayment delete
   */
  export type FeaturedPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentInclude<ExtArgs> | null
    /**
     * Filter which FeaturedPayment to delete.
     */
    where: FeaturedPaymentWhereUniqueInput
  }

  /**
   * FeaturedPayment deleteMany
   */
  export type FeaturedPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeaturedPayments to delete
     */
    where?: FeaturedPaymentWhereInput
    /**
     * Limit how many FeaturedPayments to delete.
     */
    limit?: number
  }

  /**
   * FeaturedPayment without action
   */
  export type FeaturedPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentInclude<ExtArgs> | null
  }


  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VendorSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VendorMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    plan: $Enums.ShopPlan | null
    subscriptionId: string | null
    isActive: boolean | null
    activeUntil: Date | null
  }

  export type VendorMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    plan: $Enums.ShopPlan | null
    subscriptionId: string | null
    isActive: boolean | null
    activeUntil: Date | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    email: number
    phoneNumber: number
    plan: number
    subscriptionId: number
    isActive: number
    activeUntil: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VendorSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    phoneNumber?: true
    plan?: true
    subscriptionId?: true
    isActive?: true
    activeUntil?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    phoneNumber?: true
    plan?: true
    subscriptionId?: true
    isActive?: true
    activeUntil?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    phoneNumber?: true
    plan?: true
    subscriptionId?: true
    isActive?: true
    activeUntil?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: number
    userId: number
    name: string | null
    email: string
    phoneNumber: string
    plan: $Enums.ShopPlan
    subscriptionId: string | null
    isActive: boolean
    activeUntil: Date | null
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    plan?: boolean
    subscriptionId?: boolean
    isActive?: boolean
    activeUntil?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendorShops?: boolean | Vendor$vendorShopsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    plan?: boolean
    subscriptionId?: boolean
    isActive?: boolean
    activeUntil?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    plan?: boolean
    subscriptionId?: boolean
    isActive?: boolean
    activeUntil?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    plan?: boolean
    subscriptionId?: boolean
    isActive?: boolean
    activeUntil?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "email" | "phoneNumber" | "plan" | "subscriptionId" | "isActive" | "activeUntil", ExtArgs["result"]["vendor"]>
  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendorShops?: boolean | Vendor$vendorShopsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VendorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vendorShops: Prisma.$VendorShopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string | null
      email: string
      phoneNumber: string
      plan: $Enums.ShopPlan
      subscriptionId: string | null
      isActive: boolean
      activeUntil: Date | null
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {VendorCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors and returns the data updated in the database.
     * @param {VendorUpdateManyAndReturnArgs} args - Arguments to update many Vendors.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendorUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendorShops<T extends Vendor$vendorShopsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$vendorShopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'Int'>
    readonly userId: FieldRef<"Vendor", 'Int'>
    readonly name: FieldRef<"Vendor", 'String'>
    readonly email: FieldRef<"Vendor", 'String'>
    readonly phoneNumber: FieldRef<"Vendor", 'String'>
    readonly plan: FieldRef<"Vendor", 'ShopPlan'>
    readonly subscriptionId: FieldRef<"Vendor", 'String'>
    readonly isActive: FieldRef<"Vendor", 'Boolean'>
    readonly activeUntil: FieldRef<"Vendor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor createManyAndReturn
   */
  export type VendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor updateManyAndReturn
   */
  export type VendorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor.vendorShops
   */
  export type Vendor$vendorShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
    where?: VendorShopWhereInput
    orderBy?: VendorShopOrderByWithRelationInput | VendorShopOrderByWithRelationInput[]
    cursor?: VendorShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendorShopScalarFieldEnum | VendorShopScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    cognitoId: number
    name: number
    email: number
    phoneNumber: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    vendor?: boolean | User$vendorArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    featuredPayments?: boolean | User$featuredPaymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "name" | "email" | "phoneNumber" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | User$vendorArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    featuredPayments?: boolean | User$featuredPaymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs> | null
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      favorites: Prisma.$VendorShopPayload<ExtArgs>[]
      featuredPayments: Prisma.$FeaturedPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      name: string
      email: string
      phoneNumber: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends User$vendorArgs<ExtArgs> = {}>(args?: Subset<T, User$vendorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    featuredPayments<T extends User$featuredPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$featuredPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly cognitoId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vendor
   */
  export type User$vendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
    where?: VendorShopWhereInput
    orderBy?: VendorShopOrderByWithRelationInput | VendorShopOrderByWithRelationInput[]
    cursor?: VendorShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendorShopScalarFieldEnum | VendorShopScalarFieldEnum[]
  }

  /**
   * User.featuredPayments
   */
  export type User$featuredPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedPayment
     */
    select?: FeaturedPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedPayment
     */
    omit?: FeaturedPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedPaymentInclude<ExtArgs> | null
    where?: FeaturedPaymentWhereInput
    orderBy?: FeaturedPaymentOrderByWithRelationInput | FeaturedPaymentOrderByWithRelationInput[]
    cursor?: FeaturedPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeaturedPaymentScalarFieldEnum | FeaturedPaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    address: number
    city: number
    state: number
    country: number
    postalCode: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    vendorShops?: boolean | Location$vendorShopsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>


  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "city" | "state" | "country" | "postalCode", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorShops?: boolean | Location$vendorShopsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      vendorShops: Prisma.$VendorShopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      city: string
      state: string
      country: string
      postalCode: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendorShops<T extends Location$vendorShopsArgs<ExtArgs> = {}>(args?: Subset<T, Location$vendorShopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly address: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly postalCode: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.vendorShops
   */
  export type Location$vendorShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorShop
     */
    select?: VendorShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorShop
     */
    omit?: VendorShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorShopInclude<ExtArgs> | null
    where?: VendorShopWhereInput
    orderBy?: VendorShopOrderByWithRelationInput | VendorShopOrderByWithRelationInput[]
    cursor?: VendorShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendorShopScalarFieldEnum | VendorShopScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    vendorShopId: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    vendorShopId: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    vendorShopId: number | null
    name: string | null
    description: string | null
    price: number | null
    unit: string | null
    imageUrl: string | null
    isAvailable: boolean | null
    externalPurchaseUrl: string | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    vendorShopId: number | null
    name: string | null
    description: string | null
    price: number | null
    unit: string | null
    imageUrl: string | null
    isAvailable: boolean | null
    externalPurchaseUrl: string | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    vendorShopId: number
    name: number
    description: number
    price: number
    unit: number
    tags: number
    imageUrl: number
    isAvailable: number
    externalPurchaseUrl: number
    createdAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    vendorShopId?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    vendorShopId?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    vendorShopId?: true
    name?: true
    description?: true
    price?: true
    unit?: true
    imageUrl?: true
    isAvailable?: true
    externalPurchaseUrl?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    vendorShopId?: true
    name?: true
    description?: true
    price?: true
    unit?: true
    imageUrl?: true
    isAvailable?: true
    externalPurchaseUrl?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    vendorShopId?: true
    name?: true
    description?: true
    price?: true
    unit?: true
    tags?: true
    imageUrl?: true
    isAvailable?: true
    externalPurchaseUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    vendorShopId: number
    name: string
    description: string
    price: number
    unit: string | null
    tags: string[]
    imageUrl: string
    isAvailable: boolean
    externalPurchaseUrl: string | null
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorShopId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    unit?: boolean
    tags?: boolean
    imageUrl?: boolean
    isAvailable?: boolean
    externalPurchaseUrl?: boolean
    createdAt?: boolean
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorShopId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    unit?: boolean
    tags?: boolean
    imageUrl?: boolean
    isAvailable?: boolean
    externalPurchaseUrl?: boolean
    createdAt?: boolean
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorShopId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    unit?: boolean
    tags?: boolean
    imageUrl?: boolean
    isAvailable?: boolean
    externalPurchaseUrl?: boolean
    createdAt?: boolean
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    vendorShopId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    unit?: boolean
    tags?: boolean
    imageUrl?: boolean
    isAvailable?: boolean
    externalPurchaseUrl?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorShopId" | "name" | "description" | "price" | "unit" | "tags" | "imageUrl" | "isAvailable" | "externalPurchaseUrl" | "createdAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      vendorShop: Prisma.$VendorShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vendorShopId: number
      name: string
      description: string
      price: number
      unit: string | null
      tags: string[]
      imageUrl: string
      isAvailable: boolean
      externalPurchaseUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendorShop<T extends VendorShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorShopDefaultArgs<ExtArgs>>): Prisma__VendorShopClient<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly vendorShopId: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly tags: FieldRef<"Product", 'String[]'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly isAvailable: FieldRef<"Product", 'Boolean'>
    readonly externalPurchaseUrl: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    vendorShopId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    vendorShopId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    vendorShopId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    vendorShopId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    vendorShopId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    userId?: true
    vendorShopId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    userId?: true
    vendorShopId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    vendorShopId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    vendorShopId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    vendorShopId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    userId: number
    vendorShopId: number
    rating: number
    comment: string
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vendorShopId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vendorShopId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vendorShopId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    vendorShopId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "vendorShopId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendorShop?: boolean | VendorShopDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vendorShop: Prisma.$VendorShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      vendorShopId: number
      rating: number
      comment: string
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendorShop<T extends VendorShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorShopDefaultArgs<ExtArgs>>): Prisma__VendorShopClient<$Result.GetResult<Prisma.$VendorShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly vendorShopId: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VendorShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    photoUrls: 'photoUrls',
    productCategory: 'productCategory',
    shopHighlight: 'shopHighlight',
    isParkingIncluded: 'isParkingIncluded',
    vendorShopType: 'vendorShopType',
    postedDate: 'postedDate',
    averageRating: 'averageRating',
    numberOfReviews: 'numberOfReviews',
    locationId: 'locationId',
    vendorId: 'vendorId',
    slug: 'slug',
    isFeatured: 'isFeatured',
    featuredUntil: 'featuredUntil'
  };

  export type VendorShopScalarFieldEnum = (typeof VendorShopScalarFieldEnum)[keyof typeof VendorShopScalarFieldEnum]


  export const FeaturedPaymentScalarFieldEnum: {
    id: 'id',
    vendorShopId: 'vendorShopId',
    userId: 'userId',
    amount: 'amount',
    paidAt: 'paidAt',
    expiresAt: 'expiresAt'
  };

  export type FeaturedPaymentScalarFieldEnum = (typeof FeaturedPaymentScalarFieldEnum)[keyof typeof FeaturedPaymentScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    plan: 'plan',
    subscriptionId: 'subscriptionId',
    isActive: 'isActive',
    activeUntil: 'activeUntil'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    vendorShopId: 'vendorShopId',
    name: 'name',
    description: 'description',
    price: 'price',
    unit: 'unit',
    tags: 'tags',
    imageUrl: 'imageUrl',
    isAvailable: 'isAvailable',
    externalPurchaseUrl: 'externalPurchaseUrl',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    vendorShopId: 'vendorShopId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ProductCategory[]'
   */
  export type ListEnumProductCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductCategory[]'>
    


  /**
   * Reference to a field of type 'ProductCategory'
   */
  export type EnumProductCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductCategory'>
    


  /**
   * Reference to a field of type 'ShopHighlight[]'
   */
  export type ListEnumShopHighlightFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShopHighlight[]'>
    


  /**
   * Reference to a field of type 'ShopHighlight'
   */
  export type EnumShopHighlightFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShopHighlight'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'VendorShopType'
   */
  export type EnumVendorShopTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VendorShopType'>
    


  /**
   * Reference to a field of type 'VendorShopType[]'
   */
  export type ListEnumVendorShopTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VendorShopType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ShopPlan'
   */
  export type EnumShopPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShopPlan'>
    


  /**
   * Reference to a field of type 'ShopPlan[]'
   */
  export type ListEnumShopPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShopPlan[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
  /**
   * Deep Input Types
   */


  export type VendorShopWhereInput = {
    AND?: VendorShopWhereInput | VendorShopWhereInput[]
    OR?: VendorShopWhereInput[]
    NOT?: VendorShopWhereInput | VendorShopWhereInput[]
    id?: IntFilter<"VendorShop"> | number
    name?: StringFilter<"VendorShop"> | string
    description?: StringFilter<"VendorShop"> | string
    photoUrls?: StringNullableListFilter<"VendorShop">
    productCategory?: EnumProductCategoryNullableListFilter<"VendorShop">
    shopHighlight?: EnumShopHighlightNullableListFilter<"VendorShop">
    isParkingIncluded?: BoolFilter<"VendorShop"> | boolean
    vendorShopType?: EnumVendorShopTypeFilter<"VendorShop"> | $Enums.VendorShopType
    postedDate?: DateTimeFilter<"VendorShop"> | Date | string
    averageRating?: FloatNullableFilter<"VendorShop"> | number | null
    numberOfReviews?: IntNullableFilter<"VendorShop"> | number | null
    locationId?: IntFilter<"VendorShop"> | number
    vendorId?: IntFilter<"VendorShop"> | number
    slug?: StringFilter<"VendorShop"> | string
    isFeatured?: BoolFilter<"VendorShop"> | boolean
    featuredUntil?: DateTimeNullableFilter<"VendorShop"> | Date | string | null
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    favoritedBy?: UserListRelationFilter
    products?: ProductListRelationFilter
    reviews?: ReviewListRelationFilter
    featuredPayments?: FeaturedPaymentListRelationFilter
  }

  export type VendorShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    photoUrls?: SortOrder
    productCategory?: SortOrder
    shopHighlight?: SortOrder
    isParkingIncluded?: SortOrder
    vendorShopType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrderInput | SortOrder
    numberOfReviews?: SortOrderInput | SortOrder
    locationId?: SortOrder
    vendorId?: SortOrder
    slug?: SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrderInput | SortOrder
    location?: LocationOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
    favoritedBy?: UserOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    featuredPayments?: FeaturedPaymentOrderByRelationAggregateInput
  }

  export type VendorShopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: VendorShopWhereInput | VendorShopWhereInput[]
    OR?: VendorShopWhereInput[]
    NOT?: VendorShopWhereInput | VendorShopWhereInput[]
    name?: StringFilter<"VendorShop"> | string
    description?: StringFilter<"VendorShop"> | string
    photoUrls?: StringNullableListFilter<"VendorShop">
    productCategory?: EnumProductCategoryNullableListFilter<"VendorShop">
    shopHighlight?: EnumShopHighlightNullableListFilter<"VendorShop">
    isParkingIncluded?: BoolFilter<"VendorShop"> | boolean
    vendorShopType?: EnumVendorShopTypeFilter<"VendorShop"> | $Enums.VendorShopType
    postedDate?: DateTimeFilter<"VendorShop"> | Date | string
    averageRating?: FloatNullableFilter<"VendorShop"> | number | null
    numberOfReviews?: IntNullableFilter<"VendorShop"> | number | null
    locationId?: IntFilter<"VendorShop"> | number
    vendorId?: IntFilter<"VendorShop"> | number
    isFeatured?: BoolFilter<"VendorShop"> | boolean
    featuredUntil?: DateTimeNullableFilter<"VendorShop"> | Date | string | null
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    favoritedBy?: UserListRelationFilter
    products?: ProductListRelationFilter
    reviews?: ReviewListRelationFilter
    featuredPayments?: FeaturedPaymentListRelationFilter
  }, "id" | "slug">

  export type VendorShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    photoUrls?: SortOrder
    productCategory?: SortOrder
    shopHighlight?: SortOrder
    isParkingIncluded?: SortOrder
    vendorShopType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrderInput | SortOrder
    numberOfReviews?: SortOrderInput | SortOrder
    locationId?: SortOrder
    vendorId?: SortOrder
    slug?: SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrderInput | SortOrder
    _count?: VendorShopCountOrderByAggregateInput
    _avg?: VendorShopAvgOrderByAggregateInput
    _max?: VendorShopMaxOrderByAggregateInput
    _min?: VendorShopMinOrderByAggregateInput
    _sum?: VendorShopSumOrderByAggregateInput
  }

  export type VendorShopScalarWhereWithAggregatesInput = {
    AND?: VendorShopScalarWhereWithAggregatesInput | VendorShopScalarWhereWithAggregatesInput[]
    OR?: VendorShopScalarWhereWithAggregatesInput[]
    NOT?: VendorShopScalarWhereWithAggregatesInput | VendorShopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VendorShop"> | number
    name?: StringWithAggregatesFilter<"VendorShop"> | string
    description?: StringWithAggregatesFilter<"VendorShop"> | string
    photoUrls?: StringNullableListFilter<"VendorShop">
    productCategory?: EnumProductCategoryNullableListFilter<"VendorShop">
    shopHighlight?: EnumShopHighlightNullableListFilter<"VendorShop">
    isParkingIncluded?: BoolWithAggregatesFilter<"VendorShop"> | boolean
    vendorShopType?: EnumVendorShopTypeWithAggregatesFilter<"VendorShop"> | $Enums.VendorShopType
    postedDate?: DateTimeWithAggregatesFilter<"VendorShop"> | Date | string
    averageRating?: FloatNullableWithAggregatesFilter<"VendorShop"> | number | null
    numberOfReviews?: IntNullableWithAggregatesFilter<"VendorShop"> | number | null
    locationId?: IntWithAggregatesFilter<"VendorShop"> | number
    vendorId?: IntWithAggregatesFilter<"VendorShop"> | number
    slug?: StringWithAggregatesFilter<"VendorShop"> | string
    isFeatured?: BoolWithAggregatesFilter<"VendorShop"> | boolean
    featuredUntil?: DateTimeNullableWithAggregatesFilter<"VendorShop"> | Date | string | null
  }

  export type FeaturedPaymentWhereInput = {
    AND?: FeaturedPaymentWhereInput | FeaturedPaymentWhereInput[]
    OR?: FeaturedPaymentWhereInput[]
    NOT?: FeaturedPaymentWhereInput | FeaturedPaymentWhereInput[]
    id?: IntFilter<"FeaturedPayment"> | number
    vendorShopId?: IntFilter<"FeaturedPayment"> | number
    userId?: IntFilter<"FeaturedPayment"> | number
    amount?: FloatFilter<"FeaturedPayment"> | number
    paidAt?: DateTimeFilter<"FeaturedPayment"> | Date | string
    expiresAt?: DateTimeFilter<"FeaturedPayment"> | Date | string
    vendorShop?: XOR<VendorShopScalarRelationFilter, VendorShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FeaturedPaymentOrderByWithRelationInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    expiresAt?: SortOrder
    vendorShop?: VendorShopOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FeaturedPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeaturedPaymentWhereInput | FeaturedPaymentWhereInput[]
    OR?: FeaturedPaymentWhereInput[]
    NOT?: FeaturedPaymentWhereInput | FeaturedPaymentWhereInput[]
    vendorShopId?: IntFilter<"FeaturedPayment"> | number
    userId?: IntFilter<"FeaturedPayment"> | number
    amount?: FloatFilter<"FeaturedPayment"> | number
    paidAt?: DateTimeFilter<"FeaturedPayment"> | Date | string
    expiresAt?: DateTimeFilter<"FeaturedPayment"> | Date | string
    vendorShop?: XOR<VendorShopScalarRelationFilter, VendorShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FeaturedPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    expiresAt?: SortOrder
    _count?: FeaturedPaymentCountOrderByAggregateInput
    _avg?: FeaturedPaymentAvgOrderByAggregateInput
    _max?: FeaturedPaymentMaxOrderByAggregateInput
    _min?: FeaturedPaymentMinOrderByAggregateInput
    _sum?: FeaturedPaymentSumOrderByAggregateInput
  }

  export type FeaturedPaymentScalarWhereWithAggregatesInput = {
    AND?: FeaturedPaymentScalarWhereWithAggregatesInput | FeaturedPaymentScalarWhereWithAggregatesInput[]
    OR?: FeaturedPaymentScalarWhereWithAggregatesInput[]
    NOT?: FeaturedPaymentScalarWhereWithAggregatesInput | FeaturedPaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeaturedPayment"> | number
    vendorShopId?: IntWithAggregatesFilter<"FeaturedPayment"> | number
    userId?: IntWithAggregatesFilter<"FeaturedPayment"> | number
    amount?: FloatWithAggregatesFilter<"FeaturedPayment"> | number
    paidAt?: DateTimeWithAggregatesFilter<"FeaturedPayment"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"FeaturedPayment"> | Date | string
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: IntFilter<"Vendor"> | number
    userId?: IntFilter<"Vendor"> | number
    name?: StringNullableFilter<"Vendor"> | string | null
    email?: StringFilter<"Vendor"> | string
    phoneNumber?: StringFilter<"Vendor"> | string
    plan?: EnumShopPlanFilter<"Vendor"> | $Enums.ShopPlan
    subscriptionId?: StringNullableFilter<"Vendor"> | string | null
    isActive?: BoolFilter<"Vendor"> | boolean
    activeUntil?: DateTimeNullableFilter<"Vendor"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendorShops?: VendorShopListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    plan?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    activeUntil?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    vendorShops?: VendorShopOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    name?: StringNullableFilter<"Vendor"> | string | null
    email?: StringFilter<"Vendor"> | string
    phoneNumber?: StringFilter<"Vendor"> | string
    plan?: EnumShopPlanFilter<"Vendor"> | $Enums.ShopPlan
    subscriptionId?: StringNullableFilter<"Vendor"> | string | null
    isActive?: BoolFilter<"Vendor"> | boolean
    activeUntil?: DateTimeNullableFilter<"Vendor"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendorShops?: VendorShopListRelationFilter
  }, "id" | "userId">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    plan?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    activeUntil?: SortOrderInput | SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vendor"> | number
    userId?: IntWithAggregatesFilter<"Vendor"> | number
    name?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    email?: StringWithAggregatesFilter<"Vendor"> | string
    phoneNumber?: StringWithAggregatesFilter<"Vendor"> | string
    plan?: EnumShopPlanWithAggregatesFilter<"Vendor"> | $Enums.ShopPlan
    subscriptionId?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    isActive?: BoolWithAggregatesFilter<"Vendor"> | boolean
    activeUntil?: DateTimeNullableWithAggregatesFilter<"Vendor"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    cognitoId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    reviews?: ReviewListRelationFilter
    favorites?: VendorShopListRelationFilter
    featuredPayments?: FeaturedPaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
    favorites?: VendorShopOrderByRelationAggregateInput
    featuredPayments?: FeaturedPaymentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    reviews?: ReviewListRelationFilter
    favorites?: VendorShopListRelationFilter
    featuredPayments?: FeaturedPaymentListRelationFilter
  }, "id" | "cognitoId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    cognitoId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    vendorShops?: VendorShopListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    vendorShops?: VendorShopOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    vendorShops?: VendorShopListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    address?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    state?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
    postalCode?: StringWithAggregatesFilter<"Location"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    vendorShopId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    unit?: StringNullableFilter<"Product"> | string | null
    tags?: StringNullableListFilter<"Product">
    imageUrl?: StringFilter<"Product"> | string
    isAvailable?: BoolFilter<"Product"> | boolean
    externalPurchaseUrl?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    vendorShop?: XOR<VendorShopScalarRelationFilter, VendorShopWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unit?: SortOrderInput | SortOrder
    tags?: SortOrder
    imageUrl?: SortOrder
    isAvailable?: SortOrder
    externalPurchaseUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    vendorShop?: VendorShopOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    vendorShopId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    unit?: StringNullableFilter<"Product"> | string | null
    tags?: StringNullableListFilter<"Product">
    imageUrl?: StringFilter<"Product"> | string
    isAvailable?: BoolFilter<"Product"> | boolean
    externalPurchaseUrl?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    vendorShop?: XOR<VendorShopScalarRelationFilter, VendorShopWhereInput>
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unit?: SortOrderInput | SortOrder
    tags?: SortOrder
    imageUrl?: SortOrder
    isAvailable?: SortOrder
    externalPurchaseUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    vendorShopId?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    unit?: StringNullableWithAggregatesFilter<"Product"> | string | null
    tags?: StringNullableListFilter<"Product">
    imageUrl?: StringWithAggregatesFilter<"Product"> | string
    isAvailable?: BoolWithAggregatesFilter<"Product"> | boolean
    externalPurchaseUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    vendorShopId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendorShop?: XOR<VendorShopScalarRelationFilter, VendorShopWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    vendorShopId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    vendorShop?: VendorShopOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: IntFilter<"Review"> | number
    vendorShopId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendorShop?: XOR<VendorShopScalarRelationFilter, VendorShopWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    vendorShopId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    vendorShopId?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type VendorShopCreateInput = {
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    location: LocationCreateNestedOneWithoutVendorShopsInput
    vendor: VendorCreateNestedOneWithoutVendorShopsInput
    favoritedBy?: UserCreateNestedManyWithoutFavoritesInput
    products?: ProductCreateNestedManyWithoutVendorShopInput
    reviews?: ReviewCreateNestedManyWithoutVendorShopInput
    featuredPayments?: FeaturedPaymentCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    vendorId: number
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoritesInput
    products?: ProductUncheckedCreateNestedManyWithoutVendorShopInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorShopInput
    featuredPayments?: FeaturedPaymentUncheckedCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: LocationUpdateOneRequiredWithoutVendorShopsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutVendorShopsNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoritesNestedInput
    products?: ProductUpdateManyWithoutVendorShopNestedInput
    reviews?: ReviewUpdateManyWithoutVendorShopNestedInput
    featuredPayments?: FeaturedPaymentUpdateManyWithoutVendorShopNestedInput
  }

  export type VendorShopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoritesNestedInput
    products?: ProductUncheckedUpdateManyWithoutVendorShopNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorShopNestedInput
    featuredPayments?: FeaturedPaymentUncheckedUpdateManyWithoutVendorShopNestedInput
  }

  export type VendorShopCreateManyInput = {
    id?: number
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    vendorId: number
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
  }

  export type VendorShopUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VendorShopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeaturedPaymentCreateInput = {
    amount: number
    paidAt?: Date | string
    expiresAt: Date | string
    vendorShop: VendorShopCreateNestedOneWithoutFeaturedPaymentsInput
    user: UserCreateNestedOneWithoutFeaturedPaymentsInput
  }

  export type FeaturedPaymentUncheckedCreateInput = {
    id?: number
    vendorShopId: number
    userId: number
    amount: number
    paidAt?: Date | string
    expiresAt: Date | string
  }

  export type FeaturedPaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorShop?: VendorShopUpdateOneRequiredWithoutFeaturedPaymentsNestedInput
    user?: UserUpdateOneRequiredWithoutFeaturedPaymentsNestedInput
  }

  export type FeaturedPaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorShopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedPaymentCreateManyInput = {
    id?: number
    vendorShopId: number
    userId: number
    amount: number
    paidAt?: Date | string
    expiresAt: Date | string
  }

  export type FeaturedPaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedPaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorShopId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorCreateInput = {
    name?: string | null
    email: string
    phoneNumber: string
    plan?: $Enums.ShopPlan
    subscriptionId?: string | null
    isActive?: boolean
    activeUntil?: Date | string | null
    user: UserCreateNestedOneWithoutVendorInput
    vendorShops?: VendorShopCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: number
    userId: number
    name?: string | null
    email: string
    phoneNumber: string
    plan?: $Enums.ShopPlan
    subscriptionId?: string | null
    isActive?: boolean
    activeUntil?: Date | string | null
    vendorShops?: VendorShopUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutVendorNestedInput
    vendorShops?: VendorShopUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorShops?: VendorShopUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: number
    userId: number
    name?: string | null
    email: string
    phoneNumber: string
    plan?: $Enums.ShopPlan
    subscriptionId?: string | null
    isActive?: boolean
    activeUntil?: Date | string | null
  }

  export type VendorUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    vendor?: VendorCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    favorites?: VendorShopCreateNestedManyWithoutFavoritedByInput
    featuredPayments?: FeaturedPaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    vendor?: VendorUncheckedCreateNestedOneWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    favorites?: VendorShopUncheckedCreateNestedManyWithoutFavoritedByInput
    featuredPayments?: FeaturedPaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    favorites?: VendorShopUpdateManyWithoutFavoritedByNestedInput
    featuredPayments?: FeaturedPaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUncheckedUpdateOneWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    favorites?: VendorShopUncheckedUpdateManyWithoutFavoritedByNestedInput
    featuredPayments?: FeaturedPaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    vendorShops?: VendorShopUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    vendorShops?: VendorShopUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    name: string
    description: string
    price: number
    unit?: string | null
    tags?: ProductCreatetagsInput | string[]
    imageUrl: string
    isAvailable?: boolean
    externalPurchaseUrl?: string | null
    createdAt?: Date | string
    vendorShop: VendorShopCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    vendorShopId: number
    name: string
    description: string
    price: number
    unit?: string | null
    tags?: ProductCreatetagsInput | string[]
    imageUrl: string
    isAvailable?: boolean
    externalPurchaseUrl?: string | null
    createdAt?: Date | string
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    externalPurchaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorShop?: VendorShopUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorShopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    externalPurchaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    id?: number
    vendorShopId: number
    name: string
    description: string
    price: number
    unit?: string | null
    tags?: ProductCreatetagsInput | string[]
    imageUrl: string
    isAvailable?: boolean
    externalPurchaseUrl?: string | null
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    externalPurchaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorShopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    externalPurchaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    vendorShop: VendorShopCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    userId: number
    vendorShopId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    vendorShop?: VendorShopUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    vendorShopId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    userId: number
    vendorShopId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    vendorShopId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumProductCategoryNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel> | null
    has?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumShopHighlightNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopHighlight[] | ListEnumShopHighlightFieldRefInput<$PrismaModel> | null
    has?: $Enums.ShopHighlight | EnumShopHighlightFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ShopHighlight[] | ListEnumShopHighlightFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ShopHighlight[] | ListEnumShopHighlightFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumVendorShopTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VendorShopType | EnumVendorShopTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VendorShopType[] | ListEnumVendorShopTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VendorShopType[] | ListEnumVendorShopTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVendorShopTypeFilter<$PrismaModel> | $Enums.VendorShopType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type VendorScalarRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type FeaturedPaymentListRelationFilter = {
    every?: FeaturedPaymentWhereInput
    some?: FeaturedPaymentWhereInput
    none?: FeaturedPaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeaturedPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    photoUrls?: SortOrder
    productCategory?: SortOrder
    shopHighlight?: SortOrder
    isParkingIncluded?: SortOrder
    vendorShopType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    vendorId?: SortOrder
    slug?: SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrder
  }

  export type VendorShopAvgOrderByAggregateInput = {
    id?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    vendorId?: SortOrder
  }

  export type VendorShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isParkingIncluded?: SortOrder
    vendorShopType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    vendorId?: SortOrder
    slug?: SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrder
  }

  export type VendorShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isParkingIncluded?: SortOrder
    vendorShopType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    vendorId?: SortOrder
    slug?: SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrder
  }

  export type VendorShopSumOrderByAggregateInput = {
    id?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    vendorId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumVendorShopTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VendorShopType | EnumVendorShopTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VendorShopType[] | ListEnumVendorShopTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VendorShopType[] | ListEnumVendorShopTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVendorShopTypeWithAggregatesFilter<$PrismaModel> | $Enums.VendorShopType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVendorShopTypeFilter<$PrismaModel>
    _max?: NestedEnumVendorShopTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VendorShopScalarRelationFilter = {
    is?: VendorShopWhereInput
    isNot?: VendorShopWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FeaturedPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type FeaturedPaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type FeaturedPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type FeaturedPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type FeaturedPaymentSumOrderByAggregateInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumShopPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopPlan | EnumShopPlanFieldRefInput<$PrismaModel>
    in?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumShopPlanFilter<$PrismaModel> | $Enums.ShopPlan
  }

  export type VendorShopListRelationFilter = {
    every?: VendorShopWhereInput
    some?: VendorShopWhereInput
    none?: VendorShopWhereInput
  }

  export type VendorShopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    plan?: SortOrder
    subscriptionId?: SortOrder
    isActive?: SortOrder
    activeUntil?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    plan?: SortOrder
    subscriptionId?: SortOrder
    isActive?: SortOrder
    activeUntil?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    plan?: SortOrder
    subscriptionId?: SortOrder
    isActive?: SortOrder
    activeUntil?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumShopPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopPlan | EnumShopPlanFieldRefInput<$PrismaModel>
    in?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumShopPlanWithAggregatesFilter<$PrismaModel> | $Enums.ShopPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShopPlanFilter<$PrismaModel>
    _max?: NestedEnumShopPlanFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type VendorNullableScalarRelationFilter = {
    is?: VendorWhereInput | null
    isNot?: VendorWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    tags?: SortOrder
    imageUrl?: SortOrder
    isAvailable?: SortOrder
    externalPurchaseUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    imageUrl?: SortOrder
    isAvailable?: SortOrder
    externalPurchaseUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    imageUrl?: SortOrder
    isAvailable?: SortOrder
    externalPurchaseUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    vendorShopId?: SortOrder
    price?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vendorShopId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vendorShopId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vendorShopId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vendorShopId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vendorShopId?: SortOrder
    rating?: SortOrder
  }

  export type VendorShopCreatephotoUrlsInput = {
    set: string[]
  }

  export type VendorShopCreateproductCategoryInput = {
    set: $Enums.ProductCategory[]
  }

  export type VendorShopCreateshopHighlightInput = {
    set: $Enums.ShopHighlight[]
  }

  export type LocationCreateNestedOneWithoutVendorShopsInput = {
    connect?: LocationWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutVendorShopsInput = {
    create?: XOR<VendorCreateWithoutVendorShopsInput, VendorUncheckedCreateWithoutVendorShopsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutVendorShopsInput
    connect?: VendorWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput> | UserCreateWithoutFavoritesInput[] | UserUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput | UserCreateOrConnectWithoutFavoritesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutVendorShopInput = {
    create?: XOR<ProductCreateWithoutVendorShopInput, ProductUncheckedCreateWithoutVendorShopInput> | ProductCreateWithoutVendorShopInput[] | ProductUncheckedCreateWithoutVendorShopInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutVendorShopInput | ProductCreateOrConnectWithoutVendorShopInput[]
    createMany?: ProductCreateManyVendorShopInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutVendorShopInput = {
    create?: XOR<ReviewCreateWithoutVendorShopInput, ReviewUncheckedCreateWithoutVendorShopInput> | ReviewCreateWithoutVendorShopInput[] | ReviewUncheckedCreateWithoutVendorShopInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorShopInput | ReviewCreateOrConnectWithoutVendorShopInput[]
    createMany?: ReviewCreateManyVendorShopInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FeaturedPaymentCreateNestedManyWithoutVendorShopInput = {
    create?: XOR<FeaturedPaymentCreateWithoutVendorShopInput, FeaturedPaymentUncheckedCreateWithoutVendorShopInput> | FeaturedPaymentCreateWithoutVendorShopInput[] | FeaturedPaymentUncheckedCreateWithoutVendorShopInput[]
    connectOrCreate?: FeaturedPaymentCreateOrConnectWithoutVendorShopInput | FeaturedPaymentCreateOrConnectWithoutVendorShopInput[]
    createMany?: FeaturedPaymentCreateManyVendorShopInputEnvelope
    connect?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput> | UserCreateWithoutFavoritesInput[] | UserUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput | UserCreateOrConnectWithoutFavoritesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutVendorShopInput = {
    create?: XOR<ProductCreateWithoutVendorShopInput, ProductUncheckedCreateWithoutVendorShopInput> | ProductCreateWithoutVendorShopInput[] | ProductUncheckedCreateWithoutVendorShopInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutVendorShopInput | ProductCreateOrConnectWithoutVendorShopInput[]
    createMany?: ProductCreateManyVendorShopInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutVendorShopInput = {
    create?: XOR<ReviewCreateWithoutVendorShopInput, ReviewUncheckedCreateWithoutVendorShopInput> | ReviewCreateWithoutVendorShopInput[] | ReviewUncheckedCreateWithoutVendorShopInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorShopInput | ReviewCreateOrConnectWithoutVendorShopInput[]
    createMany?: ReviewCreateManyVendorShopInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FeaturedPaymentUncheckedCreateNestedManyWithoutVendorShopInput = {
    create?: XOR<FeaturedPaymentCreateWithoutVendorShopInput, FeaturedPaymentUncheckedCreateWithoutVendorShopInput> | FeaturedPaymentCreateWithoutVendorShopInput[] | FeaturedPaymentUncheckedCreateWithoutVendorShopInput[]
    connectOrCreate?: FeaturedPaymentCreateOrConnectWithoutVendorShopInput | FeaturedPaymentCreateOrConnectWithoutVendorShopInput[]
    createMany?: FeaturedPaymentCreateManyVendorShopInputEnvelope
    connect?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type VendorShopUpdatephotoUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VendorShopUpdateproductCategoryInput = {
    set?: $Enums.ProductCategory[]
    push?: $Enums.ProductCategory | $Enums.ProductCategory[]
  }

  export type VendorShopUpdateshopHighlightInput = {
    set?: $Enums.ShopHighlight[]
    push?: $Enums.ShopHighlight | $Enums.ShopHighlight[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumVendorShopTypeFieldUpdateOperationsInput = {
    set?: $Enums.VendorShopType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LocationUpdateOneRequiredWithoutVendorShopsNestedInput = {
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutVendorShopsInput, LocationUpdateWithoutVendorShopsInput>, LocationUncheckedUpdateWithoutVendorShopsInput>
  }

  export type VendorUpdateOneRequiredWithoutVendorShopsNestedInput = {
    create?: XOR<VendorCreateWithoutVendorShopsInput, VendorUncheckedCreateWithoutVendorShopsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutVendorShopsInput
    upsert?: VendorUpsertWithoutVendorShopsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutVendorShopsInput, VendorUpdateWithoutVendorShopsInput>, VendorUncheckedUpdateWithoutVendorShopsInput>
  }

  export type UserUpdateManyWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput> | UserCreateWithoutFavoritesInput[] | UserUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput | UserCreateOrConnectWithoutFavoritesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavoritesInput | UserUpsertWithWhereUniqueWithoutFavoritesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavoritesInput | UserUpdateWithWhereUniqueWithoutFavoritesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavoritesInput | UserUpdateManyWithWhereWithoutFavoritesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutVendorShopNestedInput = {
    create?: XOR<ProductCreateWithoutVendorShopInput, ProductUncheckedCreateWithoutVendorShopInput> | ProductCreateWithoutVendorShopInput[] | ProductUncheckedCreateWithoutVendorShopInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutVendorShopInput | ProductCreateOrConnectWithoutVendorShopInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutVendorShopInput | ProductUpsertWithWhereUniqueWithoutVendorShopInput[]
    createMany?: ProductCreateManyVendorShopInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutVendorShopInput | ProductUpdateWithWhereUniqueWithoutVendorShopInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutVendorShopInput | ProductUpdateManyWithWhereWithoutVendorShopInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutVendorShopNestedInput = {
    create?: XOR<ReviewCreateWithoutVendorShopInput, ReviewUncheckedCreateWithoutVendorShopInput> | ReviewCreateWithoutVendorShopInput[] | ReviewUncheckedCreateWithoutVendorShopInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorShopInput | ReviewCreateOrConnectWithoutVendorShopInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutVendorShopInput | ReviewUpsertWithWhereUniqueWithoutVendorShopInput[]
    createMany?: ReviewCreateManyVendorShopInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutVendorShopInput | ReviewUpdateWithWhereUniqueWithoutVendorShopInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutVendorShopInput | ReviewUpdateManyWithWhereWithoutVendorShopInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FeaturedPaymentUpdateManyWithoutVendorShopNestedInput = {
    create?: XOR<FeaturedPaymentCreateWithoutVendorShopInput, FeaturedPaymentUncheckedCreateWithoutVendorShopInput> | FeaturedPaymentCreateWithoutVendorShopInput[] | FeaturedPaymentUncheckedCreateWithoutVendorShopInput[]
    connectOrCreate?: FeaturedPaymentCreateOrConnectWithoutVendorShopInput | FeaturedPaymentCreateOrConnectWithoutVendorShopInput[]
    upsert?: FeaturedPaymentUpsertWithWhereUniqueWithoutVendorShopInput | FeaturedPaymentUpsertWithWhereUniqueWithoutVendorShopInput[]
    createMany?: FeaturedPaymentCreateManyVendorShopInputEnvelope
    set?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    disconnect?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    delete?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    connect?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    update?: FeaturedPaymentUpdateWithWhereUniqueWithoutVendorShopInput | FeaturedPaymentUpdateWithWhereUniqueWithoutVendorShopInput[]
    updateMany?: FeaturedPaymentUpdateManyWithWhereWithoutVendorShopInput | FeaturedPaymentUpdateManyWithWhereWithoutVendorShopInput[]
    deleteMany?: FeaturedPaymentScalarWhereInput | FeaturedPaymentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput> | UserCreateWithoutFavoritesInput[] | UserUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput | UserCreateOrConnectWithoutFavoritesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavoritesInput | UserUpsertWithWhereUniqueWithoutFavoritesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavoritesInput | UserUpdateWithWhereUniqueWithoutFavoritesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavoritesInput | UserUpdateManyWithWhereWithoutFavoritesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutVendorShopNestedInput = {
    create?: XOR<ProductCreateWithoutVendorShopInput, ProductUncheckedCreateWithoutVendorShopInput> | ProductCreateWithoutVendorShopInput[] | ProductUncheckedCreateWithoutVendorShopInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutVendorShopInput | ProductCreateOrConnectWithoutVendorShopInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutVendorShopInput | ProductUpsertWithWhereUniqueWithoutVendorShopInput[]
    createMany?: ProductCreateManyVendorShopInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutVendorShopInput | ProductUpdateWithWhereUniqueWithoutVendorShopInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutVendorShopInput | ProductUpdateManyWithWhereWithoutVendorShopInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutVendorShopNestedInput = {
    create?: XOR<ReviewCreateWithoutVendorShopInput, ReviewUncheckedCreateWithoutVendorShopInput> | ReviewCreateWithoutVendorShopInput[] | ReviewUncheckedCreateWithoutVendorShopInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorShopInput | ReviewCreateOrConnectWithoutVendorShopInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutVendorShopInput | ReviewUpsertWithWhereUniqueWithoutVendorShopInput[]
    createMany?: ReviewCreateManyVendorShopInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutVendorShopInput | ReviewUpdateWithWhereUniqueWithoutVendorShopInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutVendorShopInput | ReviewUpdateManyWithWhereWithoutVendorShopInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FeaturedPaymentUncheckedUpdateManyWithoutVendorShopNestedInput = {
    create?: XOR<FeaturedPaymentCreateWithoutVendorShopInput, FeaturedPaymentUncheckedCreateWithoutVendorShopInput> | FeaturedPaymentCreateWithoutVendorShopInput[] | FeaturedPaymentUncheckedCreateWithoutVendorShopInput[]
    connectOrCreate?: FeaturedPaymentCreateOrConnectWithoutVendorShopInput | FeaturedPaymentCreateOrConnectWithoutVendorShopInput[]
    upsert?: FeaturedPaymentUpsertWithWhereUniqueWithoutVendorShopInput | FeaturedPaymentUpsertWithWhereUniqueWithoutVendorShopInput[]
    createMany?: FeaturedPaymentCreateManyVendorShopInputEnvelope
    set?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    disconnect?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    delete?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    connect?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    update?: FeaturedPaymentUpdateWithWhereUniqueWithoutVendorShopInput | FeaturedPaymentUpdateWithWhereUniqueWithoutVendorShopInput[]
    updateMany?: FeaturedPaymentUpdateManyWithWhereWithoutVendorShopInput | FeaturedPaymentUpdateManyWithWhereWithoutVendorShopInput[]
    deleteMany?: FeaturedPaymentScalarWhereInput | FeaturedPaymentScalarWhereInput[]
  }

  export type VendorShopCreateNestedOneWithoutFeaturedPaymentsInput = {
    create?: XOR<VendorShopCreateWithoutFeaturedPaymentsInput, VendorShopUncheckedCreateWithoutFeaturedPaymentsInput>
    connectOrCreate?: VendorShopCreateOrConnectWithoutFeaturedPaymentsInput
    connect?: VendorShopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeaturedPaymentsInput = {
    create?: XOR<UserCreateWithoutFeaturedPaymentsInput, UserUncheckedCreateWithoutFeaturedPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeaturedPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorShopUpdateOneRequiredWithoutFeaturedPaymentsNestedInput = {
    create?: XOR<VendorShopCreateWithoutFeaturedPaymentsInput, VendorShopUncheckedCreateWithoutFeaturedPaymentsInput>
    connectOrCreate?: VendorShopCreateOrConnectWithoutFeaturedPaymentsInput
    upsert?: VendorShopUpsertWithoutFeaturedPaymentsInput
    connect?: VendorShopWhereUniqueInput
    update?: XOR<XOR<VendorShopUpdateToOneWithWhereWithoutFeaturedPaymentsInput, VendorShopUpdateWithoutFeaturedPaymentsInput>, VendorShopUncheckedUpdateWithoutFeaturedPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutFeaturedPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutFeaturedPaymentsInput, UserUncheckedCreateWithoutFeaturedPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeaturedPaymentsInput
    upsert?: UserUpsertWithoutFeaturedPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeaturedPaymentsInput, UserUpdateWithoutFeaturedPaymentsInput>, UserUncheckedUpdateWithoutFeaturedPaymentsInput>
  }

  export type UserCreateNestedOneWithoutVendorInput = {
    create?: XOR<UserCreateWithoutVendorInput, UserUncheckedCreateWithoutVendorInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorInput
    connect?: UserWhereUniqueInput
  }

  export type VendorShopCreateNestedManyWithoutVendorInput = {
    create?: XOR<VendorShopCreateWithoutVendorInput, VendorShopUncheckedCreateWithoutVendorInput> | VendorShopCreateWithoutVendorInput[] | VendorShopUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: VendorShopCreateOrConnectWithoutVendorInput | VendorShopCreateOrConnectWithoutVendorInput[]
    createMany?: VendorShopCreateManyVendorInputEnvelope
    connect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
  }

  export type VendorShopUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<VendorShopCreateWithoutVendorInput, VendorShopUncheckedCreateWithoutVendorInput> | VendorShopCreateWithoutVendorInput[] | VendorShopUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: VendorShopCreateOrConnectWithoutVendorInput | VendorShopCreateOrConnectWithoutVendorInput[]
    createMany?: VendorShopCreateManyVendorInputEnvelope
    connect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumShopPlanFieldUpdateOperationsInput = {
    set?: $Enums.ShopPlan
  }

  export type UserUpdateOneRequiredWithoutVendorNestedInput = {
    create?: XOR<UserCreateWithoutVendorInput, UserUncheckedCreateWithoutVendorInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorInput
    upsert?: UserUpsertWithoutVendorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVendorInput, UserUpdateWithoutVendorInput>, UserUncheckedUpdateWithoutVendorInput>
  }

  export type VendorShopUpdateManyWithoutVendorNestedInput = {
    create?: XOR<VendorShopCreateWithoutVendorInput, VendorShopUncheckedCreateWithoutVendorInput> | VendorShopCreateWithoutVendorInput[] | VendorShopUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: VendorShopCreateOrConnectWithoutVendorInput | VendorShopCreateOrConnectWithoutVendorInput[]
    upsert?: VendorShopUpsertWithWhereUniqueWithoutVendorInput | VendorShopUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: VendorShopCreateManyVendorInputEnvelope
    set?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    disconnect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    delete?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    connect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    update?: VendorShopUpdateWithWhereUniqueWithoutVendorInput | VendorShopUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: VendorShopUpdateManyWithWhereWithoutVendorInput | VendorShopUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: VendorShopScalarWhereInput | VendorShopScalarWhereInput[]
  }

  export type VendorShopUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<VendorShopCreateWithoutVendorInput, VendorShopUncheckedCreateWithoutVendorInput> | VendorShopCreateWithoutVendorInput[] | VendorShopUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: VendorShopCreateOrConnectWithoutVendorInput | VendorShopCreateOrConnectWithoutVendorInput[]
    upsert?: VendorShopUpsertWithWhereUniqueWithoutVendorInput | VendorShopUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: VendorShopCreateManyVendorInputEnvelope
    set?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    disconnect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    delete?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    connect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    update?: VendorShopUpdateWithWhereUniqueWithoutVendorInput | VendorShopUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: VendorShopUpdateManyWithWhereWithoutVendorInput | VendorShopUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: VendorShopScalarWhereInput | VendorShopScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    connect?: VendorWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type VendorShopCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<VendorShopCreateWithoutFavoritedByInput, VendorShopUncheckedCreateWithoutFavoritedByInput> | VendorShopCreateWithoutFavoritedByInput[] | VendorShopUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: VendorShopCreateOrConnectWithoutFavoritedByInput | VendorShopCreateOrConnectWithoutFavoritedByInput[]
    connect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
  }

  export type FeaturedPaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<FeaturedPaymentCreateWithoutUserInput, FeaturedPaymentUncheckedCreateWithoutUserInput> | FeaturedPaymentCreateWithoutUserInput[] | FeaturedPaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeaturedPaymentCreateOrConnectWithoutUserInput | FeaturedPaymentCreateOrConnectWithoutUserInput[]
    createMany?: FeaturedPaymentCreateManyUserInputEnvelope
    connect?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
  }

  export type VendorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    connect?: VendorWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type VendorShopUncheckedCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<VendorShopCreateWithoutFavoritedByInput, VendorShopUncheckedCreateWithoutFavoritedByInput> | VendorShopCreateWithoutFavoritedByInput[] | VendorShopUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: VendorShopCreateOrConnectWithoutFavoritedByInput | VendorShopCreateOrConnectWithoutFavoritedByInput[]
    connect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
  }

  export type FeaturedPaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeaturedPaymentCreateWithoutUserInput, FeaturedPaymentUncheckedCreateWithoutUserInput> | FeaturedPaymentCreateWithoutUserInput[] | FeaturedPaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeaturedPaymentCreateOrConnectWithoutUserInput | FeaturedPaymentCreateOrConnectWithoutUserInput[]
    createMany?: FeaturedPaymentCreateManyUserInputEnvelope
    connect?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type VendorUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    upsert?: VendorUpsertWithoutUserInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutUserInput, VendorUpdateWithoutUserInput>, VendorUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type VendorShopUpdateManyWithoutFavoritedByNestedInput = {
    create?: XOR<VendorShopCreateWithoutFavoritedByInput, VendorShopUncheckedCreateWithoutFavoritedByInput> | VendorShopCreateWithoutFavoritedByInput[] | VendorShopUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: VendorShopCreateOrConnectWithoutFavoritedByInput | VendorShopCreateOrConnectWithoutFavoritedByInput[]
    upsert?: VendorShopUpsertWithWhereUniqueWithoutFavoritedByInput | VendorShopUpsertWithWhereUniqueWithoutFavoritedByInput[]
    set?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    disconnect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    delete?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    connect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    update?: VendorShopUpdateWithWhereUniqueWithoutFavoritedByInput | VendorShopUpdateWithWhereUniqueWithoutFavoritedByInput[]
    updateMany?: VendorShopUpdateManyWithWhereWithoutFavoritedByInput | VendorShopUpdateManyWithWhereWithoutFavoritedByInput[]
    deleteMany?: VendorShopScalarWhereInput | VendorShopScalarWhereInput[]
  }

  export type FeaturedPaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeaturedPaymentCreateWithoutUserInput, FeaturedPaymentUncheckedCreateWithoutUserInput> | FeaturedPaymentCreateWithoutUserInput[] | FeaturedPaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeaturedPaymentCreateOrConnectWithoutUserInput | FeaturedPaymentCreateOrConnectWithoutUserInput[]
    upsert?: FeaturedPaymentUpsertWithWhereUniqueWithoutUserInput | FeaturedPaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeaturedPaymentCreateManyUserInputEnvelope
    set?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    disconnect?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    delete?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    connect?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    update?: FeaturedPaymentUpdateWithWhereUniqueWithoutUserInput | FeaturedPaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeaturedPaymentUpdateManyWithWhereWithoutUserInput | FeaturedPaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeaturedPaymentScalarWhereInput | FeaturedPaymentScalarWhereInput[]
  }

  export type VendorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    upsert?: VendorUpsertWithoutUserInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutUserInput, VendorUpdateWithoutUserInput>, VendorUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type VendorShopUncheckedUpdateManyWithoutFavoritedByNestedInput = {
    create?: XOR<VendorShopCreateWithoutFavoritedByInput, VendorShopUncheckedCreateWithoutFavoritedByInput> | VendorShopCreateWithoutFavoritedByInput[] | VendorShopUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: VendorShopCreateOrConnectWithoutFavoritedByInput | VendorShopCreateOrConnectWithoutFavoritedByInput[]
    upsert?: VendorShopUpsertWithWhereUniqueWithoutFavoritedByInput | VendorShopUpsertWithWhereUniqueWithoutFavoritedByInput[]
    set?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    disconnect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    delete?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    connect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    update?: VendorShopUpdateWithWhereUniqueWithoutFavoritedByInput | VendorShopUpdateWithWhereUniqueWithoutFavoritedByInput[]
    updateMany?: VendorShopUpdateManyWithWhereWithoutFavoritedByInput | VendorShopUpdateManyWithWhereWithoutFavoritedByInput[]
    deleteMany?: VendorShopScalarWhereInput | VendorShopScalarWhereInput[]
  }

  export type FeaturedPaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeaturedPaymentCreateWithoutUserInput, FeaturedPaymentUncheckedCreateWithoutUserInput> | FeaturedPaymentCreateWithoutUserInput[] | FeaturedPaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeaturedPaymentCreateOrConnectWithoutUserInput | FeaturedPaymentCreateOrConnectWithoutUserInput[]
    upsert?: FeaturedPaymentUpsertWithWhereUniqueWithoutUserInput | FeaturedPaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeaturedPaymentCreateManyUserInputEnvelope
    set?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    disconnect?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    delete?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    connect?: FeaturedPaymentWhereUniqueInput | FeaturedPaymentWhereUniqueInput[]
    update?: FeaturedPaymentUpdateWithWhereUniqueWithoutUserInput | FeaturedPaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeaturedPaymentUpdateManyWithWhereWithoutUserInput | FeaturedPaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeaturedPaymentScalarWhereInput | FeaturedPaymentScalarWhereInput[]
  }

  export type VendorShopUpdateManyWithoutLocationNestedInput = {
    create?: XOR<VendorShopCreateWithoutLocationInput, VendorShopUncheckedCreateWithoutLocationInput> | VendorShopCreateWithoutLocationInput[] | VendorShopUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: VendorShopCreateOrConnectWithoutLocationInput | VendorShopCreateOrConnectWithoutLocationInput[]
    upsert?: VendorShopUpsertWithWhereUniqueWithoutLocationInput | VendorShopUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: VendorShopCreateManyLocationInputEnvelope
    set?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    disconnect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    delete?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    connect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    update?: VendorShopUpdateWithWhereUniqueWithoutLocationInput | VendorShopUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: VendorShopUpdateManyWithWhereWithoutLocationInput | VendorShopUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: VendorShopScalarWhereInput | VendorShopScalarWhereInput[]
  }

  export type VendorShopUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<VendorShopCreateWithoutLocationInput, VendorShopUncheckedCreateWithoutLocationInput> | VendorShopCreateWithoutLocationInput[] | VendorShopUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: VendorShopCreateOrConnectWithoutLocationInput | VendorShopCreateOrConnectWithoutLocationInput[]
    upsert?: VendorShopUpsertWithWhereUniqueWithoutLocationInput | VendorShopUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: VendorShopCreateManyLocationInputEnvelope
    set?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    disconnect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    delete?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    connect?: VendorShopWhereUniqueInput | VendorShopWhereUniqueInput[]
    update?: VendorShopUpdateWithWhereUniqueWithoutLocationInput | VendorShopUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: VendorShopUpdateManyWithWhereWithoutLocationInput | VendorShopUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: VendorShopScalarWhereInput | VendorShopScalarWhereInput[]
  }

  export type ProductCreatetagsInput = {
    set: string[]
  }

  export type VendorShopCreateNestedOneWithoutProductsInput = {
    create?: XOR<VendorShopCreateWithoutProductsInput, VendorShopUncheckedCreateWithoutProductsInput>
    connectOrCreate?: VendorShopCreateOrConnectWithoutProductsInput
    connect?: VendorShopWhereUniqueInput
  }

  export type ProductUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VendorShopUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<VendorShopCreateWithoutProductsInput, VendorShopUncheckedCreateWithoutProductsInput>
    connectOrCreate?: VendorShopCreateOrConnectWithoutProductsInput
    upsert?: VendorShopUpsertWithoutProductsInput
    connect?: VendorShopWhereUniqueInput
    update?: XOR<XOR<VendorShopUpdateToOneWithWhereWithoutProductsInput, VendorShopUpdateWithoutProductsInput>, VendorShopUncheckedUpdateWithoutProductsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type VendorShopCreateNestedOneWithoutReviewsInput = {
    create?: XOR<VendorShopCreateWithoutReviewsInput, VendorShopUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: VendorShopCreateOrConnectWithoutReviewsInput
    connect?: VendorShopWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type VendorShopUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<VendorShopCreateWithoutReviewsInput, VendorShopUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: VendorShopCreateOrConnectWithoutReviewsInput
    upsert?: VendorShopUpsertWithoutReviewsInput
    connect?: VendorShopWhereUniqueInput
    update?: XOR<XOR<VendorShopUpdateToOneWithWhereWithoutReviewsInput, VendorShopUpdateWithoutReviewsInput>, VendorShopUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumVendorShopTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VendorShopType | EnumVendorShopTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VendorShopType[] | ListEnumVendorShopTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VendorShopType[] | ListEnumVendorShopTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVendorShopTypeFilter<$PrismaModel> | $Enums.VendorShopType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumVendorShopTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VendorShopType | EnumVendorShopTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VendorShopType[] | ListEnumVendorShopTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VendorShopType[] | ListEnumVendorShopTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVendorShopTypeWithAggregatesFilter<$PrismaModel> | $Enums.VendorShopType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVendorShopTypeFilter<$PrismaModel>
    _max?: NestedEnumVendorShopTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumShopPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopPlan | EnumShopPlanFieldRefInput<$PrismaModel>
    in?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumShopPlanFilter<$PrismaModel> | $Enums.ShopPlan
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumShopPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopPlan | EnumShopPlanFieldRefInput<$PrismaModel>
    in?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumShopPlanWithAggregatesFilter<$PrismaModel> | $Enums.ShopPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShopPlanFilter<$PrismaModel>
    _max?: NestedEnumShopPlanFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type VendorCreateWithoutVendorShopsInput = {
    name?: string | null
    email: string
    phoneNumber: string
    plan?: $Enums.ShopPlan
    subscriptionId?: string | null
    isActive?: boolean
    activeUntil?: Date | string | null
    user: UserCreateNestedOneWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutVendorShopsInput = {
    id?: number
    userId: number
    name?: string | null
    email: string
    phoneNumber: string
    plan?: $Enums.ShopPlan
    subscriptionId?: string | null
    isActive?: boolean
    activeUntil?: Date | string | null
  }

  export type VendorCreateOrConnectWithoutVendorShopsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutVendorShopsInput, VendorUncheckedCreateWithoutVendorShopsInput>
  }

  export type UserCreateWithoutFavoritesInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    vendor?: VendorCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    featuredPayments?: FeaturedPaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    vendor?: VendorUncheckedCreateNestedOneWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    featuredPayments?: FeaturedPaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type ProductCreateWithoutVendorShopInput = {
    name: string
    description: string
    price: number
    unit?: string | null
    tags?: ProductCreatetagsInput | string[]
    imageUrl: string
    isAvailable?: boolean
    externalPurchaseUrl?: string | null
    createdAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutVendorShopInput = {
    id?: number
    name: string
    description: string
    price: number
    unit?: string | null
    tags?: ProductCreatetagsInput | string[]
    imageUrl: string
    isAvailable?: boolean
    externalPurchaseUrl?: string | null
    createdAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutVendorShopInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVendorShopInput, ProductUncheckedCreateWithoutVendorShopInput>
  }

  export type ProductCreateManyVendorShopInputEnvelope = {
    data: ProductCreateManyVendorShopInput | ProductCreateManyVendorShopInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutVendorShopInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutVendorShopInput = {
    id?: number
    userId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutVendorShopInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutVendorShopInput, ReviewUncheckedCreateWithoutVendorShopInput>
  }

  export type ReviewCreateManyVendorShopInputEnvelope = {
    data: ReviewCreateManyVendorShopInput | ReviewCreateManyVendorShopInput[]
    skipDuplicates?: boolean
  }

  export type FeaturedPaymentCreateWithoutVendorShopInput = {
    amount: number
    paidAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutFeaturedPaymentsInput
  }

  export type FeaturedPaymentUncheckedCreateWithoutVendorShopInput = {
    id?: number
    userId: number
    amount: number
    paidAt?: Date | string
    expiresAt: Date | string
  }

  export type FeaturedPaymentCreateOrConnectWithoutVendorShopInput = {
    where: FeaturedPaymentWhereUniqueInput
    create: XOR<FeaturedPaymentCreateWithoutVendorShopInput, FeaturedPaymentUncheckedCreateWithoutVendorShopInput>
  }

  export type FeaturedPaymentCreateManyVendorShopInputEnvelope = {
    data: FeaturedPaymentCreateManyVendorShopInput | FeaturedPaymentCreateManyVendorShopInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpdateToOneWithWhereWithoutVendorShopsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutVendorShopsInput, LocationUncheckedUpdateWithoutVendorShopsInput>
  }

  export type LocationUpdateWithoutVendorShopsInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateWithoutVendorShopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type VendorUpsertWithoutVendorShopsInput = {
    update: XOR<VendorUpdateWithoutVendorShopsInput, VendorUncheckedUpdateWithoutVendorShopsInput>
    create: XOR<VendorCreateWithoutVendorShopsInput, VendorUncheckedCreateWithoutVendorShopsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutVendorShopsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutVendorShopsInput, VendorUncheckedUpdateWithoutVendorShopsInput>
  }

  export type VendorUpdateWithoutVendorShopsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutVendorShopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithWhereUniqueWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateManyWithWhereWithoutFavoritesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFavoritesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    cognitoId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutVendorShopInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutVendorShopInput, ProductUncheckedUpdateWithoutVendorShopInput>
    create: XOR<ProductCreateWithoutVendorShopInput, ProductUncheckedCreateWithoutVendorShopInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutVendorShopInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutVendorShopInput, ProductUncheckedUpdateWithoutVendorShopInput>
  }

  export type ProductUpdateManyWithWhereWithoutVendorShopInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutVendorShopInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    vendorShopId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    unit?: StringNullableFilter<"Product"> | string | null
    tags?: StringNullableListFilter<"Product">
    imageUrl?: StringFilter<"Product"> | string
    isAvailable?: BoolFilter<"Product"> | boolean
    externalPurchaseUrl?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutVendorShopInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutVendorShopInput, ReviewUncheckedUpdateWithoutVendorShopInput>
    create: XOR<ReviewCreateWithoutVendorShopInput, ReviewUncheckedCreateWithoutVendorShopInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutVendorShopInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutVendorShopInput, ReviewUncheckedUpdateWithoutVendorShopInput>
  }

  export type ReviewUpdateManyWithWhereWithoutVendorShopInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutVendorShopInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    vendorShopId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type FeaturedPaymentUpsertWithWhereUniqueWithoutVendorShopInput = {
    where: FeaturedPaymentWhereUniqueInput
    update: XOR<FeaturedPaymentUpdateWithoutVendorShopInput, FeaturedPaymentUncheckedUpdateWithoutVendorShopInput>
    create: XOR<FeaturedPaymentCreateWithoutVendorShopInput, FeaturedPaymentUncheckedCreateWithoutVendorShopInput>
  }

  export type FeaturedPaymentUpdateWithWhereUniqueWithoutVendorShopInput = {
    where: FeaturedPaymentWhereUniqueInput
    data: XOR<FeaturedPaymentUpdateWithoutVendorShopInput, FeaturedPaymentUncheckedUpdateWithoutVendorShopInput>
  }

  export type FeaturedPaymentUpdateManyWithWhereWithoutVendorShopInput = {
    where: FeaturedPaymentScalarWhereInput
    data: XOR<FeaturedPaymentUpdateManyMutationInput, FeaturedPaymentUncheckedUpdateManyWithoutVendorShopInput>
  }

  export type FeaturedPaymentScalarWhereInput = {
    AND?: FeaturedPaymentScalarWhereInput | FeaturedPaymentScalarWhereInput[]
    OR?: FeaturedPaymentScalarWhereInput[]
    NOT?: FeaturedPaymentScalarWhereInput | FeaturedPaymentScalarWhereInput[]
    id?: IntFilter<"FeaturedPayment"> | number
    vendorShopId?: IntFilter<"FeaturedPayment"> | number
    userId?: IntFilter<"FeaturedPayment"> | number
    amount?: FloatFilter<"FeaturedPayment"> | number
    paidAt?: DateTimeFilter<"FeaturedPayment"> | Date | string
    expiresAt?: DateTimeFilter<"FeaturedPayment"> | Date | string
  }

  export type VendorShopCreateWithoutFeaturedPaymentsInput = {
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    location: LocationCreateNestedOneWithoutVendorShopsInput
    vendor: VendorCreateNestedOneWithoutVendorShopsInput
    favoritedBy?: UserCreateNestedManyWithoutFavoritesInput
    products?: ProductCreateNestedManyWithoutVendorShopInput
    reviews?: ReviewCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopUncheckedCreateWithoutFeaturedPaymentsInput = {
    id?: number
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    vendorId: number
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoritesInput
    products?: ProductUncheckedCreateNestedManyWithoutVendorShopInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopCreateOrConnectWithoutFeaturedPaymentsInput = {
    where: VendorShopWhereUniqueInput
    create: XOR<VendorShopCreateWithoutFeaturedPaymentsInput, VendorShopUncheckedCreateWithoutFeaturedPaymentsInput>
  }

  export type UserCreateWithoutFeaturedPaymentsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    vendor?: VendorCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    favorites?: VendorShopCreateNestedManyWithoutFavoritedByInput
  }

  export type UserUncheckedCreateWithoutFeaturedPaymentsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    vendor?: VendorUncheckedCreateNestedOneWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    favorites?: VendorShopUncheckedCreateNestedManyWithoutFavoritedByInput
  }

  export type UserCreateOrConnectWithoutFeaturedPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeaturedPaymentsInput, UserUncheckedCreateWithoutFeaturedPaymentsInput>
  }

  export type VendorShopUpsertWithoutFeaturedPaymentsInput = {
    update: XOR<VendorShopUpdateWithoutFeaturedPaymentsInput, VendorShopUncheckedUpdateWithoutFeaturedPaymentsInput>
    create: XOR<VendorShopCreateWithoutFeaturedPaymentsInput, VendorShopUncheckedCreateWithoutFeaturedPaymentsInput>
    where?: VendorShopWhereInput
  }

  export type VendorShopUpdateToOneWithWhereWithoutFeaturedPaymentsInput = {
    where?: VendorShopWhereInput
    data: XOR<VendorShopUpdateWithoutFeaturedPaymentsInput, VendorShopUncheckedUpdateWithoutFeaturedPaymentsInput>
  }

  export type VendorShopUpdateWithoutFeaturedPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: LocationUpdateOneRequiredWithoutVendorShopsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutVendorShopsNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoritesNestedInput
    products?: ProductUpdateManyWithoutVendorShopNestedInput
    reviews?: ReviewUpdateManyWithoutVendorShopNestedInput
  }

  export type VendorShopUncheckedUpdateWithoutFeaturedPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoritesNestedInput
    products?: ProductUncheckedUpdateManyWithoutVendorShopNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorShopNestedInput
  }

  export type UserUpsertWithoutFeaturedPaymentsInput = {
    update: XOR<UserUpdateWithoutFeaturedPaymentsInput, UserUncheckedUpdateWithoutFeaturedPaymentsInput>
    create: XOR<UserCreateWithoutFeaturedPaymentsInput, UserUncheckedCreateWithoutFeaturedPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeaturedPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeaturedPaymentsInput, UserUncheckedUpdateWithoutFeaturedPaymentsInput>
  }

  export type UserUpdateWithoutFeaturedPaymentsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    favorites?: VendorShopUpdateManyWithoutFavoritedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFeaturedPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUncheckedUpdateOneWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    favorites?: VendorShopUncheckedUpdateManyWithoutFavoritedByNestedInput
  }

  export type UserCreateWithoutVendorInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    favorites?: VendorShopCreateNestedManyWithoutFavoritedByInput
    featuredPayments?: FeaturedPaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVendorInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    favorites?: VendorShopUncheckedCreateNestedManyWithoutFavoritedByInput
    featuredPayments?: FeaturedPaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVendorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVendorInput, UserUncheckedCreateWithoutVendorInput>
  }

  export type VendorShopCreateWithoutVendorInput = {
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    location: LocationCreateNestedOneWithoutVendorShopsInput
    favoritedBy?: UserCreateNestedManyWithoutFavoritesInput
    products?: ProductCreateNestedManyWithoutVendorShopInput
    reviews?: ReviewCreateNestedManyWithoutVendorShopInput
    featuredPayments?: FeaturedPaymentCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopUncheckedCreateWithoutVendorInput = {
    id?: number
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoritesInput
    products?: ProductUncheckedCreateNestedManyWithoutVendorShopInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorShopInput
    featuredPayments?: FeaturedPaymentUncheckedCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopCreateOrConnectWithoutVendorInput = {
    where: VendorShopWhereUniqueInput
    create: XOR<VendorShopCreateWithoutVendorInput, VendorShopUncheckedCreateWithoutVendorInput>
  }

  export type VendorShopCreateManyVendorInputEnvelope = {
    data: VendorShopCreateManyVendorInput | VendorShopCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVendorInput = {
    update: XOR<UserUpdateWithoutVendorInput, UserUncheckedUpdateWithoutVendorInput>
    create: XOR<UserCreateWithoutVendorInput, UserUncheckedCreateWithoutVendorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVendorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVendorInput, UserUncheckedUpdateWithoutVendorInput>
  }

  export type UserUpdateWithoutVendorInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    favorites?: VendorShopUpdateManyWithoutFavoritedByNestedInput
    featuredPayments?: FeaturedPaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    favorites?: VendorShopUncheckedUpdateManyWithoutFavoritedByNestedInput
    featuredPayments?: FeaturedPaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VendorShopUpsertWithWhereUniqueWithoutVendorInput = {
    where: VendorShopWhereUniqueInput
    update: XOR<VendorShopUpdateWithoutVendorInput, VendorShopUncheckedUpdateWithoutVendorInput>
    create: XOR<VendorShopCreateWithoutVendorInput, VendorShopUncheckedCreateWithoutVendorInput>
  }

  export type VendorShopUpdateWithWhereUniqueWithoutVendorInput = {
    where: VendorShopWhereUniqueInput
    data: XOR<VendorShopUpdateWithoutVendorInput, VendorShopUncheckedUpdateWithoutVendorInput>
  }

  export type VendorShopUpdateManyWithWhereWithoutVendorInput = {
    where: VendorShopScalarWhereInput
    data: XOR<VendorShopUpdateManyMutationInput, VendorShopUncheckedUpdateManyWithoutVendorInput>
  }

  export type VendorShopScalarWhereInput = {
    AND?: VendorShopScalarWhereInput | VendorShopScalarWhereInput[]
    OR?: VendorShopScalarWhereInput[]
    NOT?: VendorShopScalarWhereInput | VendorShopScalarWhereInput[]
    id?: IntFilter<"VendorShop"> | number
    name?: StringFilter<"VendorShop"> | string
    description?: StringFilter<"VendorShop"> | string
    photoUrls?: StringNullableListFilter<"VendorShop">
    productCategory?: EnumProductCategoryNullableListFilter<"VendorShop">
    shopHighlight?: EnumShopHighlightNullableListFilter<"VendorShop">
    isParkingIncluded?: BoolFilter<"VendorShop"> | boolean
    vendorShopType?: EnumVendorShopTypeFilter<"VendorShop"> | $Enums.VendorShopType
    postedDate?: DateTimeFilter<"VendorShop"> | Date | string
    averageRating?: FloatNullableFilter<"VendorShop"> | number | null
    numberOfReviews?: IntNullableFilter<"VendorShop"> | number | null
    locationId?: IntFilter<"VendorShop"> | number
    vendorId?: IntFilter<"VendorShop"> | number
    slug?: StringFilter<"VendorShop"> | string
    isFeatured?: BoolFilter<"VendorShop"> | boolean
    featuredUntil?: DateTimeNullableFilter<"VendorShop"> | Date | string | null
  }

  export type VendorCreateWithoutUserInput = {
    name?: string | null
    email: string
    phoneNumber: string
    plan?: $Enums.ShopPlan
    subscriptionId?: string | null
    isActive?: boolean
    activeUntil?: Date | string | null
    vendorShops?: VendorShopCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    email: string
    phoneNumber: string
    plan?: $Enums.ShopPlan
    subscriptionId?: string | null
    isActive?: boolean
    activeUntil?: Date | string | null
    vendorShops?: VendorShopUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutUserInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    vendorShop: VendorShopCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    vendorShopId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VendorShopCreateWithoutFavoritedByInput = {
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    location: LocationCreateNestedOneWithoutVendorShopsInput
    vendor: VendorCreateNestedOneWithoutVendorShopsInput
    products?: ProductCreateNestedManyWithoutVendorShopInput
    reviews?: ReviewCreateNestedManyWithoutVendorShopInput
    featuredPayments?: FeaturedPaymentCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopUncheckedCreateWithoutFavoritedByInput = {
    id?: number
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    vendorId: number
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    products?: ProductUncheckedCreateNestedManyWithoutVendorShopInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorShopInput
    featuredPayments?: FeaturedPaymentUncheckedCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopCreateOrConnectWithoutFavoritedByInput = {
    where: VendorShopWhereUniqueInput
    create: XOR<VendorShopCreateWithoutFavoritedByInput, VendorShopUncheckedCreateWithoutFavoritedByInput>
  }

  export type FeaturedPaymentCreateWithoutUserInput = {
    amount: number
    paidAt?: Date | string
    expiresAt: Date | string
    vendorShop: VendorShopCreateNestedOneWithoutFeaturedPaymentsInput
  }

  export type FeaturedPaymentUncheckedCreateWithoutUserInput = {
    id?: number
    vendorShopId: number
    amount: number
    paidAt?: Date | string
    expiresAt: Date | string
  }

  export type FeaturedPaymentCreateOrConnectWithoutUserInput = {
    where: FeaturedPaymentWhereUniqueInput
    create: XOR<FeaturedPaymentCreateWithoutUserInput, FeaturedPaymentUncheckedCreateWithoutUserInput>
  }

  export type FeaturedPaymentCreateManyUserInputEnvelope = {
    data: FeaturedPaymentCreateManyUserInput | FeaturedPaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VendorUpsertWithoutUserInput = {
    update: XOR<VendorUpdateWithoutUserInput, VendorUncheckedUpdateWithoutUserInput>
    create: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutUserInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutUserInput, VendorUncheckedUpdateWithoutUserInput>
  }

  export type VendorUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorShops?: VendorShopUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendorShops?: VendorShopUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type VendorShopUpsertWithWhereUniqueWithoutFavoritedByInput = {
    where: VendorShopWhereUniqueInput
    update: XOR<VendorShopUpdateWithoutFavoritedByInput, VendorShopUncheckedUpdateWithoutFavoritedByInput>
    create: XOR<VendorShopCreateWithoutFavoritedByInput, VendorShopUncheckedCreateWithoutFavoritedByInput>
  }

  export type VendorShopUpdateWithWhereUniqueWithoutFavoritedByInput = {
    where: VendorShopWhereUniqueInput
    data: XOR<VendorShopUpdateWithoutFavoritedByInput, VendorShopUncheckedUpdateWithoutFavoritedByInput>
  }

  export type VendorShopUpdateManyWithWhereWithoutFavoritedByInput = {
    where: VendorShopScalarWhereInput
    data: XOR<VendorShopUpdateManyMutationInput, VendorShopUncheckedUpdateManyWithoutFavoritedByInput>
  }

  export type FeaturedPaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: FeaturedPaymentWhereUniqueInput
    update: XOR<FeaturedPaymentUpdateWithoutUserInput, FeaturedPaymentUncheckedUpdateWithoutUserInput>
    create: XOR<FeaturedPaymentCreateWithoutUserInput, FeaturedPaymentUncheckedCreateWithoutUserInput>
  }

  export type FeaturedPaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: FeaturedPaymentWhereUniqueInput
    data: XOR<FeaturedPaymentUpdateWithoutUserInput, FeaturedPaymentUncheckedUpdateWithoutUserInput>
  }

  export type FeaturedPaymentUpdateManyWithWhereWithoutUserInput = {
    where: FeaturedPaymentScalarWhereInput
    data: XOR<FeaturedPaymentUpdateManyMutationInput, FeaturedPaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type VendorShopCreateWithoutLocationInput = {
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    vendor: VendorCreateNestedOneWithoutVendorShopsInput
    favoritedBy?: UserCreateNestedManyWithoutFavoritesInput
    products?: ProductCreateNestedManyWithoutVendorShopInput
    reviews?: ReviewCreateNestedManyWithoutVendorShopInput
    featuredPayments?: FeaturedPaymentCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopUncheckedCreateWithoutLocationInput = {
    id?: number
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    vendorId: number
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoritesInput
    products?: ProductUncheckedCreateNestedManyWithoutVendorShopInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorShopInput
    featuredPayments?: FeaturedPaymentUncheckedCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopCreateOrConnectWithoutLocationInput = {
    where: VendorShopWhereUniqueInput
    create: XOR<VendorShopCreateWithoutLocationInput, VendorShopUncheckedCreateWithoutLocationInput>
  }

  export type VendorShopUpsertWithWhereUniqueWithoutLocationInput = {
    where: VendorShopWhereUniqueInput
    update: XOR<VendorShopUpdateWithoutLocationInput, VendorShopUncheckedUpdateWithoutLocationInput>
    create: XOR<VendorShopCreateWithoutLocationInput, VendorShopUncheckedCreateWithoutLocationInput>
  }

  export type VendorShopCreateManyLocationInputEnvelope = {
    data: VendorShopCreateManyLocationInput | VendorShopCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type VendorShopUpdateWithWhereUniqueWithoutLocationInput = {
    where: VendorShopWhereUniqueInput
    data: XOR<VendorShopUpdateWithoutLocationInput, VendorShopUncheckedUpdateWithoutLocationInput>
  }

  export type VendorShopUpdateManyWithWhereWithoutLocationInput = {
    where: VendorShopScalarWhereInput
    data: XOR<VendorShopUpdateManyMutationInput, VendorShopUncheckedUpdateManyWithoutLocationInput>
  }

  export type VendorShopCreateWithoutProductsInput = {
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    location: LocationCreateNestedOneWithoutVendorShopsInput
    vendor: VendorCreateNestedOneWithoutVendorShopsInput
    favoritedBy?: UserCreateNestedManyWithoutFavoritesInput
    reviews?: ReviewCreateNestedManyWithoutVendorShopInput
    featuredPayments?: FeaturedPaymentCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    vendorId: number
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoritesInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorShopInput
    featuredPayments?: FeaturedPaymentUncheckedCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopCreateOrConnectWithoutProductsInput = {
    where: VendorShopWhereUniqueInput
    create: XOR<VendorShopCreateWithoutProductsInput, VendorShopUncheckedCreateWithoutProductsInput>
  }

  export type VendorShopUpsertWithoutProductsInput = {
    update: XOR<VendorShopUpdateWithoutProductsInput, VendorShopUncheckedUpdateWithoutProductsInput>
    create: XOR<VendorShopCreateWithoutProductsInput, VendorShopUncheckedCreateWithoutProductsInput>
    where?: VendorShopWhereInput
  }

  export type VendorShopUpdateToOneWithWhereWithoutProductsInput = {
    where?: VendorShopWhereInput
    data: XOR<VendorShopUpdateWithoutProductsInput, VendorShopUncheckedUpdateWithoutProductsInput>
  }

  export type VendorShopUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: LocationUpdateOneRequiredWithoutVendorShopsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutVendorShopsNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoritesNestedInput
    reviews?: ReviewUpdateManyWithoutVendorShopNestedInput
    featuredPayments?: FeaturedPaymentUpdateManyWithoutVendorShopNestedInput
  }

  export type VendorShopUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoritesNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorShopNestedInput
    featuredPayments?: FeaturedPaymentUncheckedUpdateManyWithoutVendorShopNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    vendor?: VendorCreateNestedOneWithoutUserInput
    favorites?: VendorShopCreateNestedManyWithoutFavoritedByInput
    featuredPayments?: FeaturedPaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    vendor?: VendorUncheckedCreateNestedOneWithoutUserInput
    favorites?: VendorShopUncheckedCreateNestedManyWithoutFavoritedByInput
    featuredPayments?: FeaturedPaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type VendorShopCreateWithoutReviewsInput = {
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    location: LocationCreateNestedOneWithoutVendorShopsInput
    vendor: VendorCreateNestedOneWithoutVendorShopsInput
    favoritedBy?: UserCreateNestedManyWithoutFavoritesInput
    products?: ProductCreateNestedManyWithoutVendorShopInput
    featuredPayments?: FeaturedPaymentCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    vendorId: number
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoritesInput
    products?: ProductUncheckedCreateNestedManyWithoutVendorShopInput
    featuredPayments?: FeaturedPaymentUncheckedCreateNestedManyWithoutVendorShopInput
  }

  export type VendorShopCreateOrConnectWithoutReviewsInput = {
    where: VendorShopWhereUniqueInput
    create: XOR<VendorShopCreateWithoutReviewsInput, VendorShopUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutUserNestedInput
    favorites?: VendorShopUpdateManyWithoutFavoritedByNestedInput
    featuredPayments?: FeaturedPaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUncheckedUpdateOneWithoutUserNestedInput
    favorites?: VendorShopUncheckedUpdateManyWithoutFavoritedByNestedInput
    featuredPayments?: FeaturedPaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VendorShopUpsertWithoutReviewsInput = {
    update: XOR<VendorShopUpdateWithoutReviewsInput, VendorShopUncheckedUpdateWithoutReviewsInput>
    create: XOR<VendorShopCreateWithoutReviewsInput, VendorShopUncheckedCreateWithoutReviewsInput>
    where?: VendorShopWhereInput
  }

  export type VendorShopUpdateToOneWithWhereWithoutReviewsInput = {
    where?: VendorShopWhereInput
    data: XOR<VendorShopUpdateWithoutReviewsInput, VendorShopUncheckedUpdateWithoutReviewsInput>
  }

  export type VendorShopUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: LocationUpdateOneRequiredWithoutVendorShopsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutVendorShopsNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoritesNestedInput
    products?: ProductUpdateManyWithoutVendorShopNestedInput
    featuredPayments?: FeaturedPaymentUpdateManyWithoutVendorShopNestedInput
  }

  export type VendorShopUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoritesNestedInput
    products?: ProductUncheckedUpdateManyWithoutVendorShopNestedInput
    featuredPayments?: FeaturedPaymentUncheckedUpdateManyWithoutVendorShopNestedInput
  }

  export type ProductCreateManyVendorShopInput = {
    id?: number
    name: string
    description: string
    price: number
    unit?: string | null
    tags?: ProductCreatetagsInput | string[]
    imageUrl: string
    isAvailable?: boolean
    externalPurchaseUrl?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyVendorShopInput = {
    id?: number
    userId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type FeaturedPaymentCreateManyVendorShopInput = {
    id?: number
    userId: number
    amount: number
    paidAt?: Date | string
    expiresAt: Date | string
  }

  export type UserUpdateWithoutFavoritesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    featuredPayments?: FeaturedPaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUncheckedUpdateOneWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    featuredPayments?: FeaturedPaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutVendorShopInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    externalPurchaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutVendorShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    externalPurchaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyWithoutVendorShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    externalPurchaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutVendorShopInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutVendorShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutVendorShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedPaymentUpdateWithoutVendorShopInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeaturedPaymentsNestedInput
  }

  export type FeaturedPaymentUncheckedUpdateWithoutVendorShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedPaymentUncheckedUpdateManyWithoutVendorShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorShopCreateManyVendorInput = {
    id?: number
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
  }

  export type VendorShopUpdateWithoutVendorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: LocationUpdateOneRequiredWithoutVendorShopsNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoritesNestedInput
    products?: ProductUpdateManyWithoutVendorShopNestedInput
    reviews?: ReviewUpdateManyWithoutVendorShopNestedInput
    featuredPayments?: FeaturedPaymentUpdateManyWithoutVendorShopNestedInput
  }

  export type VendorShopUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoritesNestedInput
    products?: ProductUncheckedUpdateManyWithoutVendorShopNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorShopNestedInput
    featuredPayments?: FeaturedPaymentUncheckedUpdateManyWithoutVendorShopNestedInput
  }

  export type VendorShopUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    vendorShopId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type FeaturedPaymentCreateManyUserInput = {
    id?: number
    vendorShopId: number
    amount: number
    paidAt?: Date | string
    expiresAt: Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorShop?: VendorShopUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorShopId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorShopId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorShopUpdateWithoutFavoritedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: LocationUpdateOneRequiredWithoutVendorShopsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutVendorShopsNestedInput
    products?: ProductUpdateManyWithoutVendorShopNestedInput
    reviews?: ReviewUpdateManyWithoutVendorShopNestedInput
    featuredPayments?: FeaturedPaymentUpdateManyWithoutVendorShopNestedInput
  }

  export type VendorShopUncheckedUpdateWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUncheckedUpdateManyWithoutVendorShopNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorShopNestedInput
    featuredPayments?: FeaturedPaymentUncheckedUpdateManyWithoutVendorShopNestedInput
  }

  export type VendorShopUncheckedUpdateManyWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeaturedPaymentUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorShop?: VendorShopUpdateOneRequiredWithoutFeaturedPaymentsNestedInput
  }

  export type FeaturedPaymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorShopId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedPaymentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorShopId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorShopUpdateWithoutLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendor?: VendorUpdateOneRequiredWithoutVendorShopsNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoritesNestedInput
    products?: ProductUpdateManyWithoutVendorShopNestedInput
    reviews?: ReviewUpdateManyWithoutVendorShopNestedInput
    featuredPayments?: FeaturedPaymentUpdateManyWithoutVendorShopNestedInput
  }

  export type VendorShopUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    vendorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoritesNestedInput
    products?: ProductUncheckedUpdateManyWithoutVendorShopNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorShopNestedInput
    featuredPayments?: FeaturedPaymentUncheckedUpdateManyWithoutVendorShopNestedInput
  }

  export type VendorShopCreateManyLocationInput = {
    id?: number
    name: string
    description: string
    photoUrls?: VendorShopCreatephotoUrlsInput | string[]
    productCategory?: VendorShopCreateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopCreateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: boolean
    vendorShopType: $Enums.VendorShopType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    vendorId: number
    slug: string
    isFeatured?: boolean
    featuredUntil?: Date | string | null
  }

  export type VendorShopUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: VendorShopUpdatephotoUrlsInput | string[]
    productCategory?: VendorShopUpdateproductCategoryInput | $Enums.ProductCategory[]
    shopHighlight?: VendorShopUpdateshopHighlightInput | $Enums.ShopHighlight[]
    isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean
    vendorShopType?: EnumVendorShopTypeFieldUpdateOperationsInput | $Enums.VendorShopType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    vendorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}