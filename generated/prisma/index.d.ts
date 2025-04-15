
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RaffleEdition
 * 
 */
export type RaffleEdition = $Result.DefaultSelection<Prisma.$RaffleEditionPayload>
/**
 * Model Prize
 * 
 */
export type Prize = $Result.DefaultSelection<Prisma.$PrizePayload>
/**
 * Model TicketRaffle
 * 
 */
export type TicketRaffle = $Result.DefaultSelection<Prisma.$TicketRafflePayload>
/**
 * Model TicketPayment
 * 
 */
export type TicketPayment = $Result.DefaultSelection<Prisma.$TicketPaymentPayload>
/**
 * Model Extract
 * 
 */
export type Extract = $Result.DefaultSelection<Prisma.$ExtractPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RaffleEditionStatus: {
  pending: 'pending',
  active: 'active',
  closed: 'closed'
};

export type RaffleEditionStatus = (typeof RaffleEditionStatus)[keyof typeof RaffleEditionStatus]


export const Profiles: {
  suporte: 'suporte',
  owner: 'owner',
  influencer: 'influencer'
};

export type Profiles = (typeof Profiles)[keyof typeof Profiles]


export const TicketRaffleStatus: {
  bought: 'bought',
  available: 'available'
};

export type TicketRaffleStatus = (typeof TicketRaffleStatus)[keyof typeof TicketRaffleStatus]


export const ExtractType: {
  deposit: 'deposit',
  withdrawal: 'withdrawal'
};

export type ExtractType = (typeof ExtractType)[keyof typeof ExtractType]

}

export type RaffleEditionStatus = $Enums.RaffleEditionStatus

export const RaffleEditionStatus: typeof $Enums.RaffleEditionStatus

export type Profiles = $Enums.Profiles

export const Profiles: typeof $Enums.Profiles

export type TicketRaffleStatus = $Enums.TicketRaffleStatus

export const TicketRaffleStatus: typeof $Enums.TicketRaffleStatus

export type ExtractType = $Enums.ExtractType

export const ExtractType: typeof $Enums.ExtractType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raffleEdition`: Exposes CRUD operations for the **RaffleEdition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaffleEditions
    * const raffleEditions = await prisma.raffleEdition.findMany()
    * ```
    */
  get raffleEdition(): Prisma.RaffleEditionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prize`: Exposes CRUD operations for the **Prize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prizes
    * const prizes = await prisma.prize.findMany()
    * ```
    */
  get prize(): Prisma.PrizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketRaffle`: Exposes CRUD operations for the **TicketRaffle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketRaffles
    * const ticketRaffles = await prisma.ticketRaffle.findMany()
    * ```
    */
  get ticketRaffle(): Prisma.TicketRaffleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketPayment`: Exposes CRUD operations for the **TicketPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketPayments
    * const ticketPayments = await prisma.ticketPayment.findMany()
    * ```
    */
  get ticketPayment(): Prisma.TicketPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.extract`: Exposes CRUD operations for the **Extract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Extracts
    * const extracts = await prisma.extract.findMany()
    * ```
    */
  get extract(): Prisma.ExtractDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    RaffleEdition: 'RaffleEdition',
    Prize: 'Prize',
    TicketRaffle: 'TicketRaffle',
    TicketPayment: 'TicketPayment',
    Extract: 'Extract'
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
      modelProps: "user" | "raffleEdition" | "prize" | "ticketRaffle" | "ticketPayment" | "extract"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      RaffleEdition: {
        payload: Prisma.$RaffleEditionPayload<ExtArgs>
        fields: Prisma.RaffleEditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaffleEditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleEditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaffleEditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleEditionPayload>
          }
          findFirst: {
            args: Prisma.RaffleEditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleEditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaffleEditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleEditionPayload>
          }
          findMany: {
            args: Prisma.RaffleEditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleEditionPayload>[]
          }
          create: {
            args: Prisma.RaffleEditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleEditionPayload>
          }
          createMany: {
            args: Prisma.RaffleEditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaffleEditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleEditionPayload>[]
          }
          delete: {
            args: Prisma.RaffleEditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleEditionPayload>
          }
          update: {
            args: Prisma.RaffleEditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleEditionPayload>
          }
          deleteMany: {
            args: Prisma.RaffleEditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaffleEditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaffleEditionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleEditionPayload>[]
          }
          upsert: {
            args: Prisma.RaffleEditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaffleEditionPayload>
          }
          aggregate: {
            args: Prisma.RaffleEditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaffleEdition>
          }
          groupBy: {
            args: Prisma.RaffleEditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaffleEditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaffleEditionCountArgs<ExtArgs>
            result: $Utils.Optional<RaffleEditionCountAggregateOutputType> | number
          }
        }
      }
      Prize: {
        payload: Prisma.$PrizePayload<ExtArgs>
        fields: Prisma.PrizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>
          }
          findFirst: {
            args: Prisma.PrizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>
          }
          findMany: {
            args: Prisma.PrizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>[]
          }
          create: {
            args: Prisma.PrizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>
          }
          createMany: {
            args: Prisma.PrizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>[]
          }
          delete: {
            args: Prisma.PrizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>
          }
          update: {
            args: Prisma.PrizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>
          }
          deleteMany: {
            args: Prisma.PrizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>[]
          }
          upsert: {
            args: Prisma.PrizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrizePayload>
          }
          aggregate: {
            args: Prisma.PrizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrize>
          }
          groupBy: {
            args: Prisma.PrizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrizeCountArgs<ExtArgs>
            result: $Utils.Optional<PrizeCountAggregateOutputType> | number
          }
        }
      }
      TicketRaffle: {
        payload: Prisma.$TicketRafflePayload<ExtArgs>
        fields: Prisma.TicketRaffleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketRaffleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRafflePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketRaffleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRafflePayload>
          }
          findFirst: {
            args: Prisma.TicketRaffleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRafflePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketRaffleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRafflePayload>
          }
          findMany: {
            args: Prisma.TicketRaffleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRafflePayload>[]
          }
          create: {
            args: Prisma.TicketRaffleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRafflePayload>
          }
          createMany: {
            args: Prisma.TicketRaffleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketRaffleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRafflePayload>[]
          }
          delete: {
            args: Prisma.TicketRaffleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRafflePayload>
          }
          update: {
            args: Prisma.TicketRaffleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRafflePayload>
          }
          deleteMany: {
            args: Prisma.TicketRaffleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketRaffleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketRaffleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRafflePayload>[]
          }
          upsert: {
            args: Prisma.TicketRaffleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRafflePayload>
          }
          aggregate: {
            args: Prisma.TicketRaffleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketRaffle>
          }
          groupBy: {
            args: Prisma.TicketRaffleGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketRaffleGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketRaffleCountArgs<ExtArgs>
            result: $Utils.Optional<TicketRaffleCountAggregateOutputType> | number
          }
        }
      }
      TicketPayment: {
        payload: Prisma.$TicketPaymentPayload<ExtArgs>
        fields: Prisma.TicketPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPaymentPayload>
          }
          findFirst: {
            args: Prisma.TicketPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPaymentPayload>
          }
          findMany: {
            args: Prisma.TicketPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPaymentPayload>[]
          }
          create: {
            args: Prisma.TicketPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPaymentPayload>
          }
          createMany: {
            args: Prisma.TicketPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPaymentPayload>[]
          }
          delete: {
            args: Prisma.TicketPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPaymentPayload>
          }
          update: {
            args: Prisma.TicketPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPaymentPayload>
          }
          deleteMany: {
            args: Prisma.TicketPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPaymentPayload>[]
          }
          upsert: {
            args: Prisma.TicketPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPaymentPayload>
          }
          aggregate: {
            args: Prisma.TicketPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketPayment>
          }
          groupBy: {
            args: Prisma.TicketPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<TicketPaymentCountAggregateOutputType> | number
          }
        }
      }
      Extract: {
        payload: Prisma.$ExtractPayload<ExtArgs>
        fields: Prisma.ExtractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExtractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExtractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>
          }
          findFirst: {
            args: Prisma.ExtractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExtractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>
          }
          findMany: {
            args: Prisma.ExtractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>[]
          }
          create: {
            args: Prisma.ExtractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>
          }
          createMany: {
            args: Prisma.ExtractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExtractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>[]
          }
          delete: {
            args: Prisma.ExtractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>
          }
          update: {
            args: Prisma.ExtractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>
          }
          deleteMany: {
            args: Prisma.ExtractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExtractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExtractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>[]
          }
          upsert: {
            args: Prisma.ExtractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>
          }
          aggregate: {
            args: Prisma.ExtractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExtract>
          }
          groupBy: {
            args: Prisma.ExtractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExtractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExtractCountArgs<ExtArgs>
            result: $Utils.Optional<ExtractCountAggregateOutputType> | number
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
    user?: UserOmit
    raffleEdition?: RaffleEditionOmit
    prize?: PrizeOmit
    ticketRaffle?: TicketRaffleOmit
    ticketPayment?: TicketPaymentOmit
    extract?: ExtractOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sub_users: number
    raffle_editions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_users?: boolean | UserCountOutputTypeCountSub_usersArgs
    raffle_editions?: boolean | UserCountOutputTypeCountRaffle_editionsArgs
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
  export type UserCountOutputTypeCountSub_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRaffle_editionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaffleEditionWhereInput
  }


  /**
   * Count Type RaffleEditionCountOutputType
   */

  export type RaffleEditionCountOutputType = {
    TicketRaffle: number
  }

  export type RaffleEditionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TicketRaffle?: boolean | RaffleEditionCountOutputTypeCountTicketRaffleArgs
  }

  // Custom InputTypes
  /**
   * RaffleEditionCountOutputType without action
   */
  export type RaffleEditionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEditionCountOutputType
     */
    select?: RaffleEditionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaffleEditionCountOutputType without action
   */
  export type RaffleEditionCountOutputTypeCountTicketRaffleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketRaffleWhereInput
  }


  /**
   * Count Type PrizeCountOutputType
   */

  export type PrizeCountOutputType = {
    TicketRaffle: number
  }

  export type PrizeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TicketRaffle?: boolean | PrizeCountOutputTypeCountTicketRaffleArgs
  }

  // Custom InputTypes
  /**
   * PrizeCountOutputType without action
   */
  export type PrizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeCountOutputType
     */
    select?: PrizeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrizeCountOutputType without action
   */
  export type PrizeCountOutputTypeCountTicketRaffleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketRaffleWhereInput
  }


  /**
   * Count Type TicketRaffleCountOutputType
   */

  export type TicketRaffleCountOutputType = {
    ticket_payment: number
  }

  export type TicketRaffleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_payment?: boolean | TicketRaffleCountOutputTypeCountTicket_paymentArgs
  }

  // Custom InputTypes
  /**
   * TicketRaffleCountOutputType without action
   */
  export type TicketRaffleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffleCountOutputType
     */
    select?: TicketRaffleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketRaffleCountOutputType without action
   */
  export type TicketRaffleCountOutputTypeCountTicket_paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketPaymentWhereInput
  }


  /**
   * Count Type TicketPaymentCountOutputType
   */

  export type TicketPaymentCountOutputType = {
    ticket_raffle: number
    Extract: number
  }

  export type TicketPaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_raffle?: boolean | TicketPaymentCountOutputTypeCountTicket_raffleArgs
    Extract?: boolean | TicketPaymentCountOutputTypeCountExtractArgs
  }

  // Custom InputTypes
  /**
   * TicketPaymentCountOutputType without action
   */
  export type TicketPaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPaymentCountOutputType
     */
    select?: TicketPaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketPaymentCountOutputType without action
   */
  export type TicketPaymentCountOutputTypeCountTicket_raffleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketRaffleWhereInput
  }

  /**
   * TicketPaymentCountOutputType without action
   */
  export type TicketPaymentCountOutputTypeCountExtractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtractWhereInput
  }


  /**
   * Models
   */

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
    saldo: number | null
    comissao: Decimal | null
  }

  export type UserSumAggregateOutputType = {
    saldo: bigint | null
    comissao: Decimal | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    email: string | null
    number: string | null
    social_media: string | null
    saldo: bigint | null
    hashed_password: string | null
    comissao: Decimal | null
    profile: $Enums.Profiles | null
    owner_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    email: string | null
    number: string | null
    social_media: string | null
    saldo: bigint | null
    hashed_password: string | null
    comissao: Decimal | null
    profile: $Enums.Profiles | null
    owner_id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    email: number
    number: number
    social_media: number
    saldo: number
    hashed_password: number
    comissao: number
    profile: number
    owner_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    saldo?: true
    comissao?: true
  }

  export type UserSumAggregateInputType = {
    saldo?: true
    comissao?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    email?: true
    number?: true
    social_media?: true
    saldo?: true
    hashed_password?: true
    comissao?: true
    profile?: true
    owner_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    email?: true
    number?: true
    social_media?: true
    saldo?: true
    hashed_password?: true
    comissao?: true
    profile?: true
    owner_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    email?: true
    number?: true
    social_media?: true
    saldo?: true
    hashed_password?: true
    comissao?: true
    profile?: true
    owner_id?: true
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
    id: string
    name: string
    cpf: string
    email: string
    number: string
    social_media: string | null
    saldo: bigint
    hashed_password: string
    comissao: Decimal
    profile: $Enums.Profiles
    owner_id: string | null
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
    name?: boolean
    cpf?: boolean
    email?: boolean
    number?: boolean
    social_media?: boolean
    saldo?: boolean
    hashed_password?: boolean
    comissao?: boolean
    profile?: boolean
    owner_id?: boolean
    owner?: boolean | User$ownerArgs<ExtArgs>
    sub_users?: boolean | User$sub_usersArgs<ExtArgs>
    raffle_editions?: boolean | User$raffle_editionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    number?: boolean
    social_media?: boolean
    saldo?: boolean
    hashed_password?: boolean
    comissao?: boolean
    profile?: boolean
    owner_id?: boolean
    owner?: boolean | User$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    number?: boolean
    social_media?: boolean
    saldo?: boolean
    hashed_password?: boolean
    comissao?: boolean
    profile?: boolean
    owner_id?: boolean
    owner?: boolean | User$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    number?: boolean
    social_media?: boolean
    saldo?: boolean
    hashed_password?: boolean
    comissao?: boolean
    profile?: boolean
    owner_id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "email" | "number" | "social_media" | "saldo" | "hashed_password" | "comissao" | "profile" | "owner_id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | User$ownerArgs<ExtArgs>
    sub_users?: boolean | User$sub_usersArgs<ExtArgs>
    raffle_editions?: boolean | User$raffle_editionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | User$ownerArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | User$ownerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      sub_users: Prisma.$UserPayload<ExtArgs>[]
      raffle_editions: Prisma.$RaffleEditionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cpf: string
      email: string
      number: string
      social_media: string | null
      saldo: bigint
      hashed_password: string
      comissao: Prisma.Decimal
      profile: $Enums.Profiles
      owner_id: string | null
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
    owner<T extends User$ownerArgs<ExtArgs> = {}>(args?: Subset<T, User$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sub_users<T extends User$sub_usersArgs<ExtArgs> = {}>(args?: Subset<T, User$sub_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    raffle_editions<T extends User$raffle_editionsArgs<ExtArgs> = {}>(args?: Subset<T, User$raffle_editionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly number: FieldRef<"User", 'String'>
    readonly social_media: FieldRef<"User", 'String'>
    readonly saldo: FieldRef<"User", 'BigInt'>
    readonly hashed_password: FieldRef<"User", 'String'>
    readonly comissao: FieldRef<"User", 'Decimal'>
    readonly profile: FieldRef<"User", 'Profiles'>
    readonly owner_id: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.owner
   */
  export type User$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * User.sub_users
   */
  export type User$sub_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.raffle_editions
   */
  export type User$raffle_editionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionInclude<ExtArgs> | null
    where?: RaffleEditionWhereInput
    orderBy?: RaffleEditionOrderByWithRelationInput | RaffleEditionOrderByWithRelationInput[]
    cursor?: RaffleEditionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaffleEditionScalarFieldEnum | RaffleEditionScalarFieldEnum[]
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
   * Model RaffleEdition
   */

  export type AggregateRaffleEdition = {
    _count: RaffleEditionCountAggregateOutputType | null
    _avg: RaffleEditionAvgAggregateOutputType | null
    _sum: RaffleEditionSumAggregateOutputType | null
    _min: RaffleEditionMinAggregateOutputType | null
    _max: RaffleEditionMaxAggregateOutputType | null
  }

  export type RaffleEditionAvgAggregateOutputType = {
    total_tickets: number | null
    winner_tickets: number | null
  }

  export type RaffleEditionSumAggregateOutputType = {
    total_tickets: number | null
    winner_tickets: number | null
  }

  export type RaffleEditionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.RaffleEditionStatus | null
    total_tickets: number | null
    winner_tickets: number | null
    raffle_draw_date: Date | null
    user_id: string | null
    userId: string | null
  }

  export type RaffleEditionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.RaffleEditionStatus | null
    total_tickets: number | null
    winner_tickets: number | null
    raffle_draw_date: Date | null
    user_id: string | null
    userId: string | null
  }

  export type RaffleEditionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    total_tickets: number
    winner_tickets: number
    raffle_draw_date: number
    user_id: number
    userId: number
    _all: number
  }


  export type RaffleEditionAvgAggregateInputType = {
    total_tickets?: true
    winner_tickets?: true
  }

  export type RaffleEditionSumAggregateInputType = {
    total_tickets?: true
    winner_tickets?: true
  }

  export type RaffleEditionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    total_tickets?: true
    winner_tickets?: true
    raffle_draw_date?: true
    user_id?: true
    userId?: true
  }

  export type RaffleEditionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    total_tickets?: true
    winner_tickets?: true
    raffle_draw_date?: true
    user_id?: true
    userId?: true
  }

  export type RaffleEditionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    total_tickets?: true
    winner_tickets?: true
    raffle_draw_date?: true
    user_id?: true
    userId?: true
    _all?: true
  }

  export type RaffleEditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaffleEdition to aggregate.
     */
    where?: RaffleEditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaffleEditions to fetch.
     */
    orderBy?: RaffleEditionOrderByWithRelationInput | RaffleEditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaffleEditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaffleEditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaffleEditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaffleEditions
    **/
    _count?: true | RaffleEditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaffleEditionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaffleEditionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaffleEditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaffleEditionMaxAggregateInputType
  }

  export type GetRaffleEditionAggregateType<T extends RaffleEditionAggregateArgs> = {
        [P in keyof T & keyof AggregateRaffleEdition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaffleEdition[P]>
      : GetScalarType<T[P], AggregateRaffleEdition[P]>
  }




  export type RaffleEditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaffleEditionWhereInput
    orderBy?: RaffleEditionOrderByWithAggregationInput | RaffleEditionOrderByWithAggregationInput[]
    by: RaffleEditionScalarFieldEnum[] | RaffleEditionScalarFieldEnum
    having?: RaffleEditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaffleEditionCountAggregateInputType | true
    _avg?: RaffleEditionAvgAggregateInputType
    _sum?: RaffleEditionSumAggregateInputType
    _min?: RaffleEditionMinAggregateInputType
    _max?: RaffleEditionMaxAggregateInputType
  }

  export type RaffleEditionGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.RaffleEditionStatus
    total_tickets: number
    winner_tickets: number
    raffle_draw_date: Date
    user_id: string | null
    userId: string | null
    _count: RaffleEditionCountAggregateOutputType | null
    _avg: RaffleEditionAvgAggregateOutputType | null
    _sum: RaffleEditionSumAggregateOutputType | null
    _min: RaffleEditionMinAggregateOutputType | null
    _max: RaffleEditionMaxAggregateOutputType | null
  }

  type GetRaffleEditionGroupByPayload<T extends RaffleEditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaffleEditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaffleEditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaffleEditionGroupByOutputType[P]>
            : GetScalarType<T[P], RaffleEditionGroupByOutputType[P]>
        }
      >
    >


  export type RaffleEditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    total_tickets?: boolean
    winner_tickets?: boolean
    raffle_draw_date?: boolean
    user_id?: boolean
    userId?: boolean
    User?: boolean | RaffleEdition$UserArgs<ExtArgs>
    TicketRaffle?: boolean | RaffleEdition$TicketRaffleArgs<ExtArgs>
    _count?: boolean | RaffleEditionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raffleEdition"]>

  export type RaffleEditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    total_tickets?: boolean
    winner_tickets?: boolean
    raffle_draw_date?: boolean
    user_id?: boolean
    userId?: boolean
    User?: boolean | RaffleEdition$UserArgs<ExtArgs>
  }, ExtArgs["result"]["raffleEdition"]>

  export type RaffleEditionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    total_tickets?: boolean
    winner_tickets?: boolean
    raffle_draw_date?: boolean
    user_id?: boolean
    userId?: boolean
    User?: boolean | RaffleEdition$UserArgs<ExtArgs>
  }, ExtArgs["result"]["raffleEdition"]>

  export type RaffleEditionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    total_tickets?: boolean
    winner_tickets?: boolean
    raffle_draw_date?: boolean
    user_id?: boolean
    userId?: boolean
  }

  export type RaffleEditionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "total_tickets" | "winner_tickets" | "raffle_draw_date" | "user_id" | "userId", ExtArgs["result"]["raffleEdition"]>
  export type RaffleEditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | RaffleEdition$UserArgs<ExtArgs>
    TicketRaffle?: boolean | RaffleEdition$TicketRaffleArgs<ExtArgs>
    _count?: boolean | RaffleEditionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaffleEditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | RaffleEdition$UserArgs<ExtArgs>
  }
  export type RaffleEditionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | RaffleEdition$UserArgs<ExtArgs>
  }

  export type $RaffleEditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaffleEdition"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      TicketRaffle: Prisma.$TicketRafflePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.RaffleEditionStatus
      total_tickets: number
      winner_tickets: number
      raffle_draw_date: Date
      user_id: string | null
      userId: string | null
    }, ExtArgs["result"]["raffleEdition"]>
    composites: {}
  }

  type RaffleEditionGetPayload<S extends boolean | null | undefined | RaffleEditionDefaultArgs> = $Result.GetResult<Prisma.$RaffleEditionPayload, S>

  type RaffleEditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaffleEditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaffleEditionCountAggregateInputType | true
    }

  export interface RaffleEditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaffleEdition'], meta: { name: 'RaffleEdition' } }
    /**
     * Find zero or one RaffleEdition that matches the filter.
     * @param {RaffleEditionFindUniqueArgs} args - Arguments to find a RaffleEdition
     * @example
     * // Get one RaffleEdition
     * const raffleEdition = await prisma.raffleEdition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaffleEditionFindUniqueArgs>(args: SelectSubset<T, RaffleEditionFindUniqueArgs<ExtArgs>>): Prisma__RaffleEditionClient<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaffleEdition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaffleEditionFindUniqueOrThrowArgs} args - Arguments to find a RaffleEdition
     * @example
     * // Get one RaffleEdition
     * const raffleEdition = await prisma.raffleEdition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaffleEditionFindUniqueOrThrowArgs>(args: SelectSubset<T, RaffleEditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaffleEditionClient<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaffleEdition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleEditionFindFirstArgs} args - Arguments to find a RaffleEdition
     * @example
     * // Get one RaffleEdition
     * const raffleEdition = await prisma.raffleEdition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaffleEditionFindFirstArgs>(args?: SelectSubset<T, RaffleEditionFindFirstArgs<ExtArgs>>): Prisma__RaffleEditionClient<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaffleEdition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleEditionFindFirstOrThrowArgs} args - Arguments to find a RaffleEdition
     * @example
     * // Get one RaffleEdition
     * const raffleEdition = await prisma.raffleEdition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaffleEditionFindFirstOrThrowArgs>(args?: SelectSubset<T, RaffleEditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaffleEditionClient<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaffleEditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleEditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaffleEditions
     * const raffleEditions = await prisma.raffleEdition.findMany()
     * 
     * // Get first 10 RaffleEditions
     * const raffleEditions = await prisma.raffleEdition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raffleEditionWithIdOnly = await prisma.raffleEdition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaffleEditionFindManyArgs>(args?: SelectSubset<T, RaffleEditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaffleEdition.
     * @param {RaffleEditionCreateArgs} args - Arguments to create a RaffleEdition.
     * @example
     * // Create one RaffleEdition
     * const RaffleEdition = await prisma.raffleEdition.create({
     *   data: {
     *     // ... data to create a RaffleEdition
     *   }
     * })
     * 
     */
    create<T extends RaffleEditionCreateArgs>(args: SelectSubset<T, RaffleEditionCreateArgs<ExtArgs>>): Prisma__RaffleEditionClient<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaffleEditions.
     * @param {RaffleEditionCreateManyArgs} args - Arguments to create many RaffleEditions.
     * @example
     * // Create many RaffleEditions
     * const raffleEdition = await prisma.raffleEdition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaffleEditionCreateManyArgs>(args?: SelectSubset<T, RaffleEditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaffleEditions and returns the data saved in the database.
     * @param {RaffleEditionCreateManyAndReturnArgs} args - Arguments to create many RaffleEditions.
     * @example
     * // Create many RaffleEditions
     * const raffleEdition = await prisma.raffleEdition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaffleEditions and only return the `id`
     * const raffleEditionWithIdOnly = await prisma.raffleEdition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaffleEditionCreateManyAndReturnArgs>(args?: SelectSubset<T, RaffleEditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaffleEdition.
     * @param {RaffleEditionDeleteArgs} args - Arguments to delete one RaffleEdition.
     * @example
     * // Delete one RaffleEdition
     * const RaffleEdition = await prisma.raffleEdition.delete({
     *   where: {
     *     // ... filter to delete one RaffleEdition
     *   }
     * })
     * 
     */
    delete<T extends RaffleEditionDeleteArgs>(args: SelectSubset<T, RaffleEditionDeleteArgs<ExtArgs>>): Prisma__RaffleEditionClient<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaffleEdition.
     * @param {RaffleEditionUpdateArgs} args - Arguments to update one RaffleEdition.
     * @example
     * // Update one RaffleEdition
     * const raffleEdition = await prisma.raffleEdition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaffleEditionUpdateArgs>(args: SelectSubset<T, RaffleEditionUpdateArgs<ExtArgs>>): Prisma__RaffleEditionClient<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaffleEditions.
     * @param {RaffleEditionDeleteManyArgs} args - Arguments to filter RaffleEditions to delete.
     * @example
     * // Delete a few RaffleEditions
     * const { count } = await prisma.raffleEdition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaffleEditionDeleteManyArgs>(args?: SelectSubset<T, RaffleEditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaffleEditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleEditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaffleEditions
     * const raffleEdition = await prisma.raffleEdition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaffleEditionUpdateManyArgs>(args: SelectSubset<T, RaffleEditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaffleEditions and returns the data updated in the database.
     * @param {RaffleEditionUpdateManyAndReturnArgs} args - Arguments to update many RaffleEditions.
     * @example
     * // Update many RaffleEditions
     * const raffleEdition = await prisma.raffleEdition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaffleEditions and only return the `id`
     * const raffleEditionWithIdOnly = await prisma.raffleEdition.updateManyAndReturn({
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
    updateManyAndReturn<T extends RaffleEditionUpdateManyAndReturnArgs>(args: SelectSubset<T, RaffleEditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaffleEdition.
     * @param {RaffleEditionUpsertArgs} args - Arguments to update or create a RaffleEdition.
     * @example
     * // Update or create a RaffleEdition
     * const raffleEdition = await prisma.raffleEdition.upsert({
     *   create: {
     *     // ... data to create a RaffleEdition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaffleEdition we want to update
     *   }
     * })
     */
    upsert<T extends RaffleEditionUpsertArgs>(args: SelectSubset<T, RaffleEditionUpsertArgs<ExtArgs>>): Prisma__RaffleEditionClient<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaffleEditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleEditionCountArgs} args - Arguments to filter RaffleEditions to count.
     * @example
     * // Count the number of RaffleEditions
     * const count = await prisma.raffleEdition.count({
     *   where: {
     *     // ... the filter for the RaffleEditions we want to count
     *   }
     * })
    **/
    count<T extends RaffleEditionCountArgs>(
      args?: Subset<T, RaffleEditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaffleEditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaffleEdition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleEditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RaffleEditionAggregateArgs>(args: Subset<T, RaffleEditionAggregateArgs>): Prisma.PrismaPromise<GetRaffleEditionAggregateType<T>>

    /**
     * Group by RaffleEdition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaffleEditionGroupByArgs} args - Group by arguments.
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
      T extends RaffleEditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaffleEditionGroupByArgs['orderBy'] }
        : { orderBy?: RaffleEditionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RaffleEditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaffleEditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaffleEdition model
   */
  readonly fields: RaffleEditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaffleEdition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaffleEditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends RaffleEdition$UserArgs<ExtArgs> = {}>(args?: Subset<T, RaffleEdition$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    TicketRaffle<T extends RaffleEdition$TicketRaffleArgs<ExtArgs> = {}>(args?: Subset<T, RaffleEdition$TicketRaffleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RaffleEdition model
   */
  interface RaffleEditionFieldRefs {
    readonly id: FieldRef<"RaffleEdition", 'String'>
    readonly title: FieldRef<"RaffleEdition", 'String'>
    readonly description: FieldRef<"RaffleEdition", 'String'>
    readonly status: FieldRef<"RaffleEdition", 'RaffleEditionStatus'>
    readonly total_tickets: FieldRef<"RaffleEdition", 'Int'>
    readonly winner_tickets: FieldRef<"RaffleEdition", 'Int'>
    readonly raffle_draw_date: FieldRef<"RaffleEdition", 'DateTime'>
    readonly user_id: FieldRef<"RaffleEdition", 'String'>
    readonly userId: FieldRef<"RaffleEdition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RaffleEdition findUnique
   */
  export type RaffleEditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionInclude<ExtArgs> | null
    /**
     * Filter, which RaffleEdition to fetch.
     */
    where: RaffleEditionWhereUniqueInput
  }

  /**
   * RaffleEdition findUniqueOrThrow
   */
  export type RaffleEditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionInclude<ExtArgs> | null
    /**
     * Filter, which RaffleEdition to fetch.
     */
    where: RaffleEditionWhereUniqueInput
  }

  /**
   * RaffleEdition findFirst
   */
  export type RaffleEditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionInclude<ExtArgs> | null
    /**
     * Filter, which RaffleEdition to fetch.
     */
    where?: RaffleEditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaffleEditions to fetch.
     */
    orderBy?: RaffleEditionOrderByWithRelationInput | RaffleEditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaffleEditions.
     */
    cursor?: RaffleEditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaffleEditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaffleEditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaffleEditions.
     */
    distinct?: RaffleEditionScalarFieldEnum | RaffleEditionScalarFieldEnum[]
  }

  /**
   * RaffleEdition findFirstOrThrow
   */
  export type RaffleEditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionInclude<ExtArgs> | null
    /**
     * Filter, which RaffleEdition to fetch.
     */
    where?: RaffleEditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaffleEditions to fetch.
     */
    orderBy?: RaffleEditionOrderByWithRelationInput | RaffleEditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaffleEditions.
     */
    cursor?: RaffleEditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaffleEditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaffleEditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaffleEditions.
     */
    distinct?: RaffleEditionScalarFieldEnum | RaffleEditionScalarFieldEnum[]
  }

  /**
   * RaffleEdition findMany
   */
  export type RaffleEditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionInclude<ExtArgs> | null
    /**
     * Filter, which RaffleEditions to fetch.
     */
    where?: RaffleEditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaffleEditions to fetch.
     */
    orderBy?: RaffleEditionOrderByWithRelationInput | RaffleEditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaffleEditions.
     */
    cursor?: RaffleEditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaffleEditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaffleEditions.
     */
    skip?: number
    distinct?: RaffleEditionScalarFieldEnum | RaffleEditionScalarFieldEnum[]
  }

  /**
   * RaffleEdition create
   */
  export type RaffleEditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionInclude<ExtArgs> | null
    /**
     * The data needed to create a RaffleEdition.
     */
    data: XOR<RaffleEditionCreateInput, RaffleEditionUncheckedCreateInput>
  }

  /**
   * RaffleEdition createMany
   */
  export type RaffleEditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaffleEditions.
     */
    data: RaffleEditionCreateManyInput | RaffleEditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaffleEdition createManyAndReturn
   */
  export type RaffleEditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * The data used to create many RaffleEditions.
     */
    data: RaffleEditionCreateManyInput | RaffleEditionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaffleEdition update
   */
  export type RaffleEditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionInclude<ExtArgs> | null
    /**
     * The data needed to update a RaffleEdition.
     */
    data: XOR<RaffleEditionUpdateInput, RaffleEditionUncheckedUpdateInput>
    /**
     * Choose, which RaffleEdition to update.
     */
    where: RaffleEditionWhereUniqueInput
  }

  /**
   * RaffleEdition updateMany
   */
  export type RaffleEditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaffleEditions.
     */
    data: XOR<RaffleEditionUpdateManyMutationInput, RaffleEditionUncheckedUpdateManyInput>
    /**
     * Filter which RaffleEditions to update
     */
    where?: RaffleEditionWhereInput
    /**
     * Limit how many RaffleEditions to update.
     */
    limit?: number
  }

  /**
   * RaffleEdition updateManyAndReturn
   */
  export type RaffleEditionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * The data used to update RaffleEditions.
     */
    data: XOR<RaffleEditionUpdateManyMutationInput, RaffleEditionUncheckedUpdateManyInput>
    /**
     * Filter which RaffleEditions to update
     */
    where?: RaffleEditionWhereInput
    /**
     * Limit how many RaffleEditions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaffleEdition upsert
   */
  export type RaffleEditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionInclude<ExtArgs> | null
    /**
     * The filter to search for the RaffleEdition to update in case it exists.
     */
    where: RaffleEditionWhereUniqueInput
    /**
     * In case the RaffleEdition found by the `where` argument doesn't exist, create a new RaffleEdition with this data.
     */
    create: XOR<RaffleEditionCreateInput, RaffleEditionUncheckedCreateInput>
    /**
     * In case the RaffleEdition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaffleEditionUpdateInput, RaffleEditionUncheckedUpdateInput>
  }

  /**
   * RaffleEdition delete
   */
  export type RaffleEditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionInclude<ExtArgs> | null
    /**
     * Filter which RaffleEdition to delete.
     */
    where: RaffleEditionWhereUniqueInput
  }

  /**
   * RaffleEdition deleteMany
   */
  export type RaffleEditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaffleEditions to delete
     */
    where?: RaffleEditionWhereInput
    /**
     * Limit how many RaffleEditions to delete.
     */
    limit?: number
  }

  /**
   * RaffleEdition.User
   */
  export type RaffleEdition$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * RaffleEdition.TicketRaffle
   */
  export type RaffleEdition$TicketRaffleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
    where?: TicketRaffleWhereInput
    orderBy?: TicketRaffleOrderByWithRelationInput | TicketRaffleOrderByWithRelationInput[]
    cursor?: TicketRaffleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketRaffleScalarFieldEnum | TicketRaffleScalarFieldEnum[]
  }

  /**
   * RaffleEdition without action
   */
  export type RaffleEditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaffleEdition
     */
    select?: RaffleEditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaffleEdition
     */
    omit?: RaffleEditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaffleEditionInclude<ExtArgs> | null
  }


  /**
   * Model Prize
   */

  export type AggregatePrize = {
    _count: PrizeCountAggregateOutputType | null
    _avg: PrizeAvgAggregateOutputType | null
    _sum: PrizeSumAggregateOutputType | null
    _min: PrizeMinAggregateOutputType | null
    _max: PrizeMaxAggregateOutputType | null
  }

  export type PrizeAvgAggregateOutputType = {
    prize_quantity: number | null
  }

  export type PrizeSumAggregateOutputType = {
    prize_quantity: number | null
  }

  export type PrizeMinAggregateOutputType = {
    id: string | null
    prize_name: string | null
    prize_quantity: number | null
  }

  export type PrizeMaxAggregateOutputType = {
    id: string | null
    prize_name: string | null
    prize_quantity: number | null
  }

  export type PrizeCountAggregateOutputType = {
    id: number
    prize_name: number
    prize_quantity: number
    _all: number
  }


  export type PrizeAvgAggregateInputType = {
    prize_quantity?: true
  }

  export type PrizeSumAggregateInputType = {
    prize_quantity?: true
  }

  export type PrizeMinAggregateInputType = {
    id?: true
    prize_name?: true
    prize_quantity?: true
  }

  export type PrizeMaxAggregateInputType = {
    id?: true
    prize_name?: true
    prize_quantity?: true
  }

  export type PrizeCountAggregateInputType = {
    id?: true
    prize_name?: true
    prize_quantity?: true
    _all?: true
  }

  export type PrizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prize to aggregate.
     */
    where?: PrizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prizes to fetch.
     */
    orderBy?: PrizeOrderByWithRelationInput | PrizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prizes
    **/
    _count?: true | PrizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrizeMaxAggregateInputType
  }

  export type GetPrizeAggregateType<T extends PrizeAggregateArgs> = {
        [P in keyof T & keyof AggregatePrize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrize[P]>
      : GetScalarType<T[P], AggregatePrize[P]>
  }




  export type PrizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrizeWhereInput
    orderBy?: PrizeOrderByWithAggregationInput | PrizeOrderByWithAggregationInput[]
    by: PrizeScalarFieldEnum[] | PrizeScalarFieldEnum
    having?: PrizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrizeCountAggregateInputType | true
    _avg?: PrizeAvgAggregateInputType
    _sum?: PrizeSumAggregateInputType
    _min?: PrizeMinAggregateInputType
    _max?: PrizeMaxAggregateInputType
  }

  export type PrizeGroupByOutputType = {
    id: string
    prize_name: string
    prize_quantity: number
    _count: PrizeCountAggregateOutputType | null
    _avg: PrizeAvgAggregateOutputType | null
    _sum: PrizeSumAggregateOutputType | null
    _min: PrizeMinAggregateOutputType | null
    _max: PrizeMaxAggregateOutputType | null
  }

  type GetPrizeGroupByPayload<T extends PrizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrizeGroupByOutputType[P]>
            : GetScalarType<T[P], PrizeGroupByOutputType[P]>
        }
      >
    >


  export type PrizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prize_name?: boolean
    prize_quantity?: boolean
    TicketRaffle?: boolean | Prize$TicketRaffleArgs<ExtArgs>
    _count?: boolean | PrizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prize"]>

  export type PrizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prize_name?: boolean
    prize_quantity?: boolean
  }, ExtArgs["result"]["prize"]>

  export type PrizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prize_name?: boolean
    prize_quantity?: boolean
  }, ExtArgs["result"]["prize"]>

  export type PrizeSelectScalar = {
    id?: boolean
    prize_name?: boolean
    prize_quantity?: boolean
  }

  export type PrizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prize_name" | "prize_quantity", ExtArgs["result"]["prize"]>
  export type PrizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TicketRaffle?: boolean | Prize$TicketRaffleArgs<ExtArgs>
    _count?: boolean | PrizeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PrizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PrizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prize"
    objects: {
      TicketRaffle: Prisma.$TicketRafflePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prize_name: string
      prize_quantity: number
    }, ExtArgs["result"]["prize"]>
    composites: {}
  }

  type PrizeGetPayload<S extends boolean | null | undefined | PrizeDefaultArgs> = $Result.GetResult<Prisma.$PrizePayload, S>

  type PrizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrizeCountAggregateInputType | true
    }

  export interface PrizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prize'], meta: { name: 'Prize' } }
    /**
     * Find zero or one Prize that matches the filter.
     * @param {PrizeFindUniqueArgs} args - Arguments to find a Prize
     * @example
     * // Get one Prize
     * const prize = await prisma.prize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrizeFindUniqueArgs>(args: SelectSubset<T, PrizeFindUniqueArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrizeFindUniqueOrThrowArgs} args - Arguments to find a Prize
     * @example
     * // Get one Prize
     * const prize = await prisma.prize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrizeFindUniqueOrThrowArgs>(args: SelectSubset<T, PrizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeFindFirstArgs} args - Arguments to find a Prize
     * @example
     * // Get one Prize
     * const prize = await prisma.prize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrizeFindFirstArgs>(args?: SelectSubset<T, PrizeFindFirstArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeFindFirstOrThrowArgs} args - Arguments to find a Prize
     * @example
     * // Get one Prize
     * const prize = await prisma.prize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrizeFindFirstOrThrowArgs>(args?: SelectSubset<T, PrizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prizes
     * const prizes = await prisma.prize.findMany()
     * 
     * // Get first 10 Prizes
     * const prizes = await prisma.prize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prizeWithIdOnly = await prisma.prize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrizeFindManyArgs>(args?: SelectSubset<T, PrizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prize.
     * @param {PrizeCreateArgs} args - Arguments to create a Prize.
     * @example
     * // Create one Prize
     * const Prize = await prisma.prize.create({
     *   data: {
     *     // ... data to create a Prize
     *   }
     * })
     * 
     */
    create<T extends PrizeCreateArgs>(args: SelectSubset<T, PrizeCreateArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prizes.
     * @param {PrizeCreateManyArgs} args - Arguments to create many Prizes.
     * @example
     * // Create many Prizes
     * const prize = await prisma.prize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrizeCreateManyArgs>(args?: SelectSubset<T, PrizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prizes and returns the data saved in the database.
     * @param {PrizeCreateManyAndReturnArgs} args - Arguments to create many Prizes.
     * @example
     * // Create many Prizes
     * const prize = await prisma.prize.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prizes and only return the `id`
     * const prizeWithIdOnly = await prisma.prize.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrizeCreateManyAndReturnArgs>(args?: SelectSubset<T, PrizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prize.
     * @param {PrizeDeleteArgs} args - Arguments to delete one Prize.
     * @example
     * // Delete one Prize
     * const Prize = await prisma.prize.delete({
     *   where: {
     *     // ... filter to delete one Prize
     *   }
     * })
     * 
     */
    delete<T extends PrizeDeleteArgs>(args: SelectSubset<T, PrizeDeleteArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prize.
     * @param {PrizeUpdateArgs} args - Arguments to update one Prize.
     * @example
     * // Update one Prize
     * const prize = await prisma.prize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrizeUpdateArgs>(args: SelectSubset<T, PrizeUpdateArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prizes.
     * @param {PrizeDeleteManyArgs} args - Arguments to filter Prizes to delete.
     * @example
     * // Delete a few Prizes
     * const { count } = await prisma.prize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrizeDeleteManyArgs>(args?: SelectSubset<T, PrizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prizes
     * const prize = await prisma.prize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrizeUpdateManyArgs>(args: SelectSubset<T, PrizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prizes and returns the data updated in the database.
     * @param {PrizeUpdateManyAndReturnArgs} args - Arguments to update many Prizes.
     * @example
     * // Update many Prizes
     * const prize = await prisma.prize.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prizes and only return the `id`
     * const prizeWithIdOnly = await prisma.prize.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrizeUpdateManyAndReturnArgs>(args: SelectSubset<T, PrizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prize.
     * @param {PrizeUpsertArgs} args - Arguments to update or create a Prize.
     * @example
     * // Update or create a Prize
     * const prize = await prisma.prize.upsert({
     *   create: {
     *     // ... data to create a Prize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prize we want to update
     *   }
     * })
     */
    upsert<T extends PrizeUpsertArgs>(args: SelectSubset<T, PrizeUpsertArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeCountArgs} args - Arguments to filter Prizes to count.
     * @example
     * // Count the number of Prizes
     * const count = await prisma.prize.count({
     *   where: {
     *     // ... the filter for the Prizes we want to count
     *   }
     * })
    **/
    count<T extends PrizeCountArgs>(
      args?: Subset<T, PrizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrizeAggregateArgs>(args: Subset<T, PrizeAggregateArgs>): Prisma.PrismaPromise<GetPrizeAggregateType<T>>

    /**
     * Group by Prize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeGroupByArgs} args - Group by arguments.
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
      T extends PrizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrizeGroupByArgs['orderBy'] }
        : { orderBy?: PrizeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prize model
   */
  readonly fields: PrizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TicketRaffle<T extends Prize$TicketRaffleArgs<ExtArgs> = {}>(args?: Subset<T, Prize$TicketRaffleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prize model
   */
  interface PrizeFieldRefs {
    readonly id: FieldRef<"Prize", 'String'>
    readonly prize_name: FieldRef<"Prize", 'String'>
    readonly prize_quantity: FieldRef<"Prize", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Prize findUnique
   */
  export type PrizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * Filter, which Prize to fetch.
     */
    where: PrizeWhereUniqueInput
  }

  /**
   * Prize findUniqueOrThrow
   */
  export type PrizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * Filter, which Prize to fetch.
     */
    where: PrizeWhereUniqueInput
  }

  /**
   * Prize findFirst
   */
  export type PrizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * Filter, which Prize to fetch.
     */
    where?: PrizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prizes to fetch.
     */
    orderBy?: PrizeOrderByWithRelationInput | PrizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prizes.
     */
    cursor?: PrizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prizes.
     */
    distinct?: PrizeScalarFieldEnum | PrizeScalarFieldEnum[]
  }

  /**
   * Prize findFirstOrThrow
   */
  export type PrizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * Filter, which Prize to fetch.
     */
    where?: PrizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prizes to fetch.
     */
    orderBy?: PrizeOrderByWithRelationInput | PrizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prizes.
     */
    cursor?: PrizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prizes.
     */
    distinct?: PrizeScalarFieldEnum | PrizeScalarFieldEnum[]
  }

  /**
   * Prize findMany
   */
  export type PrizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * Filter, which Prizes to fetch.
     */
    where?: PrizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prizes to fetch.
     */
    orderBy?: PrizeOrderByWithRelationInput | PrizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prizes.
     */
    cursor?: PrizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prizes.
     */
    skip?: number
    distinct?: PrizeScalarFieldEnum | PrizeScalarFieldEnum[]
  }

  /**
   * Prize create
   */
  export type PrizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * The data needed to create a Prize.
     */
    data: XOR<PrizeCreateInput, PrizeUncheckedCreateInput>
  }

  /**
   * Prize createMany
   */
  export type PrizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prizes.
     */
    data: PrizeCreateManyInput | PrizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prize createManyAndReturn
   */
  export type PrizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * The data used to create many Prizes.
     */
    data: PrizeCreateManyInput | PrizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prize update
   */
  export type PrizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * The data needed to update a Prize.
     */
    data: XOR<PrizeUpdateInput, PrizeUncheckedUpdateInput>
    /**
     * Choose, which Prize to update.
     */
    where: PrizeWhereUniqueInput
  }

  /**
   * Prize updateMany
   */
  export type PrizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prizes.
     */
    data: XOR<PrizeUpdateManyMutationInput, PrizeUncheckedUpdateManyInput>
    /**
     * Filter which Prizes to update
     */
    where?: PrizeWhereInput
    /**
     * Limit how many Prizes to update.
     */
    limit?: number
  }

  /**
   * Prize updateManyAndReturn
   */
  export type PrizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * The data used to update Prizes.
     */
    data: XOR<PrizeUpdateManyMutationInput, PrizeUncheckedUpdateManyInput>
    /**
     * Filter which Prizes to update
     */
    where?: PrizeWhereInput
    /**
     * Limit how many Prizes to update.
     */
    limit?: number
  }

  /**
   * Prize upsert
   */
  export type PrizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * The filter to search for the Prize to update in case it exists.
     */
    where: PrizeWhereUniqueInput
    /**
     * In case the Prize found by the `where` argument doesn't exist, create a new Prize with this data.
     */
    create: XOR<PrizeCreateInput, PrizeUncheckedCreateInput>
    /**
     * In case the Prize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrizeUpdateInput, PrizeUncheckedUpdateInput>
  }

  /**
   * Prize delete
   */
  export type PrizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
    /**
     * Filter which Prize to delete.
     */
    where: PrizeWhereUniqueInput
  }

  /**
   * Prize deleteMany
   */
  export type PrizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prizes to delete
     */
    where?: PrizeWhereInput
    /**
     * Limit how many Prizes to delete.
     */
    limit?: number
  }

  /**
   * Prize.TicketRaffle
   */
  export type Prize$TicketRaffleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
    where?: TicketRaffleWhereInput
    orderBy?: TicketRaffleOrderByWithRelationInput | TicketRaffleOrderByWithRelationInput[]
    cursor?: TicketRaffleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketRaffleScalarFieldEnum | TicketRaffleScalarFieldEnum[]
  }

  /**
   * Prize without action
   */
  export type PrizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: PrizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prize
     */
    omit?: PrizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrizeInclude<ExtArgs> | null
  }


  /**
   * Model TicketRaffle
   */

  export type AggregateTicketRaffle = {
    _count: TicketRaffleCountAggregateOutputType | null
    _avg: TicketRaffleAvgAggregateOutputType | null
    _sum: TicketRaffleSumAggregateOutputType | null
    _min: TicketRaffleMinAggregateOutputType | null
    _max: TicketRaffleMaxAggregateOutputType | null
  }

  export type TicketRaffleAvgAggregateOutputType = {
    raffle_number: number | null
    price: number | null
  }

  export type TicketRaffleSumAggregateOutputType = {
    raffle_number: bigint | null
    price: bigint | null
  }

  export type TicketRaffleMinAggregateOutputType = {
    id: string | null
    raffle_number: bigint | null
    price: bigint | null
    status: $Enums.TicketRaffleStatus | null
    prize_id: string | null
    raffle_edition_id: string | null
  }

  export type TicketRaffleMaxAggregateOutputType = {
    id: string | null
    raffle_number: bigint | null
    price: bigint | null
    status: $Enums.TicketRaffleStatus | null
    prize_id: string | null
    raffle_edition_id: string | null
  }

  export type TicketRaffleCountAggregateOutputType = {
    id: number
    raffle_number: number
    price: number
    status: number
    prize_id: number
    raffle_edition_id: number
    _all: number
  }


  export type TicketRaffleAvgAggregateInputType = {
    raffle_number?: true
    price?: true
  }

  export type TicketRaffleSumAggregateInputType = {
    raffle_number?: true
    price?: true
  }

  export type TicketRaffleMinAggregateInputType = {
    id?: true
    raffle_number?: true
    price?: true
    status?: true
    prize_id?: true
    raffle_edition_id?: true
  }

  export type TicketRaffleMaxAggregateInputType = {
    id?: true
    raffle_number?: true
    price?: true
    status?: true
    prize_id?: true
    raffle_edition_id?: true
  }

  export type TicketRaffleCountAggregateInputType = {
    id?: true
    raffle_number?: true
    price?: true
    status?: true
    prize_id?: true
    raffle_edition_id?: true
    _all?: true
  }

  export type TicketRaffleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketRaffle to aggregate.
     */
    where?: TicketRaffleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketRaffles to fetch.
     */
    orderBy?: TicketRaffleOrderByWithRelationInput | TicketRaffleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketRaffleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketRaffles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketRaffles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketRaffles
    **/
    _count?: true | TicketRaffleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketRaffleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketRaffleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketRaffleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketRaffleMaxAggregateInputType
  }

  export type GetTicketRaffleAggregateType<T extends TicketRaffleAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketRaffle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketRaffle[P]>
      : GetScalarType<T[P], AggregateTicketRaffle[P]>
  }




  export type TicketRaffleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketRaffleWhereInput
    orderBy?: TicketRaffleOrderByWithAggregationInput | TicketRaffleOrderByWithAggregationInput[]
    by: TicketRaffleScalarFieldEnum[] | TicketRaffleScalarFieldEnum
    having?: TicketRaffleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketRaffleCountAggregateInputType | true
    _avg?: TicketRaffleAvgAggregateInputType
    _sum?: TicketRaffleSumAggregateInputType
    _min?: TicketRaffleMinAggregateInputType
    _max?: TicketRaffleMaxAggregateInputType
  }

  export type TicketRaffleGroupByOutputType = {
    id: string
    raffle_number: bigint
    price: bigint
    status: $Enums.TicketRaffleStatus
    prize_id: string
    raffle_edition_id: string
    _count: TicketRaffleCountAggregateOutputType | null
    _avg: TicketRaffleAvgAggregateOutputType | null
    _sum: TicketRaffleSumAggregateOutputType | null
    _min: TicketRaffleMinAggregateOutputType | null
    _max: TicketRaffleMaxAggregateOutputType | null
  }

  type GetTicketRaffleGroupByPayload<T extends TicketRaffleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketRaffleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketRaffleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketRaffleGroupByOutputType[P]>
            : GetScalarType<T[P], TicketRaffleGroupByOutputType[P]>
        }
      >
    >


  export type TicketRaffleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raffle_number?: boolean
    price?: boolean
    status?: boolean
    prize_id?: boolean
    raffle_edition_id?: boolean
    prize?: boolean | PrizeDefaultArgs<ExtArgs>
    raffle_edition?: boolean | RaffleEditionDefaultArgs<ExtArgs>
    ticket_payment?: boolean | TicketRaffle$ticket_paymentArgs<ExtArgs>
    _count?: boolean | TicketRaffleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketRaffle"]>

  export type TicketRaffleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raffle_number?: boolean
    price?: boolean
    status?: boolean
    prize_id?: boolean
    raffle_edition_id?: boolean
    prize?: boolean | PrizeDefaultArgs<ExtArgs>
    raffle_edition?: boolean | RaffleEditionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketRaffle"]>

  export type TicketRaffleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raffle_number?: boolean
    price?: boolean
    status?: boolean
    prize_id?: boolean
    raffle_edition_id?: boolean
    prize?: boolean | PrizeDefaultArgs<ExtArgs>
    raffle_edition?: boolean | RaffleEditionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketRaffle"]>

  export type TicketRaffleSelectScalar = {
    id?: boolean
    raffle_number?: boolean
    price?: boolean
    status?: boolean
    prize_id?: boolean
    raffle_edition_id?: boolean
  }

  export type TicketRaffleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raffle_number" | "price" | "status" | "prize_id" | "raffle_edition_id", ExtArgs["result"]["ticketRaffle"]>
  export type TicketRaffleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prize?: boolean | PrizeDefaultArgs<ExtArgs>
    raffle_edition?: boolean | RaffleEditionDefaultArgs<ExtArgs>
    ticket_payment?: boolean | TicketRaffle$ticket_paymentArgs<ExtArgs>
    _count?: boolean | TicketRaffleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketRaffleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prize?: boolean | PrizeDefaultArgs<ExtArgs>
    raffle_edition?: boolean | RaffleEditionDefaultArgs<ExtArgs>
  }
  export type TicketRaffleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prize?: boolean | PrizeDefaultArgs<ExtArgs>
    raffle_edition?: boolean | RaffleEditionDefaultArgs<ExtArgs>
  }

  export type $TicketRafflePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketRaffle"
    objects: {
      prize: Prisma.$PrizePayload<ExtArgs>
      raffle_edition: Prisma.$RaffleEditionPayload<ExtArgs>
      ticket_payment: Prisma.$TicketPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      raffle_number: bigint
      price: bigint
      status: $Enums.TicketRaffleStatus
      prize_id: string
      raffle_edition_id: string
    }, ExtArgs["result"]["ticketRaffle"]>
    composites: {}
  }

  type TicketRaffleGetPayload<S extends boolean | null | undefined | TicketRaffleDefaultArgs> = $Result.GetResult<Prisma.$TicketRafflePayload, S>

  type TicketRaffleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketRaffleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketRaffleCountAggregateInputType | true
    }

  export interface TicketRaffleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketRaffle'], meta: { name: 'TicketRaffle' } }
    /**
     * Find zero or one TicketRaffle that matches the filter.
     * @param {TicketRaffleFindUniqueArgs} args - Arguments to find a TicketRaffle
     * @example
     * // Get one TicketRaffle
     * const ticketRaffle = await prisma.ticketRaffle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketRaffleFindUniqueArgs>(args: SelectSubset<T, TicketRaffleFindUniqueArgs<ExtArgs>>): Prisma__TicketRaffleClient<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketRaffle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketRaffleFindUniqueOrThrowArgs} args - Arguments to find a TicketRaffle
     * @example
     * // Get one TicketRaffle
     * const ticketRaffle = await prisma.ticketRaffle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketRaffleFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketRaffleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketRaffleClient<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketRaffle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRaffleFindFirstArgs} args - Arguments to find a TicketRaffle
     * @example
     * // Get one TicketRaffle
     * const ticketRaffle = await prisma.ticketRaffle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketRaffleFindFirstArgs>(args?: SelectSubset<T, TicketRaffleFindFirstArgs<ExtArgs>>): Prisma__TicketRaffleClient<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketRaffle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRaffleFindFirstOrThrowArgs} args - Arguments to find a TicketRaffle
     * @example
     * // Get one TicketRaffle
     * const ticketRaffle = await prisma.ticketRaffle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketRaffleFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketRaffleFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketRaffleClient<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketRaffles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRaffleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketRaffles
     * const ticketRaffles = await prisma.ticketRaffle.findMany()
     * 
     * // Get first 10 TicketRaffles
     * const ticketRaffles = await prisma.ticketRaffle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketRaffleWithIdOnly = await prisma.ticketRaffle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketRaffleFindManyArgs>(args?: SelectSubset<T, TicketRaffleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketRaffle.
     * @param {TicketRaffleCreateArgs} args - Arguments to create a TicketRaffle.
     * @example
     * // Create one TicketRaffle
     * const TicketRaffle = await prisma.ticketRaffle.create({
     *   data: {
     *     // ... data to create a TicketRaffle
     *   }
     * })
     * 
     */
    create<T extends TicketRaffleCreateArgs>(args: SelectSubset<T, TicketRaffleCreateArgs<ExtArgs>>): Prisma__TicketRaffleClient<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketRaffles.
     * @param {TicketRaffleCreateManyArgs} args - Arguments to create many TicketRaffles.
     * @example
     * // Create many TicketRaffles
     * const ticketRaffle = await prisma.ticketRaffle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketRaffleCreateManyArgs>(args?: SelectSubset<T, TicketRaffleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketRaffles and returns the data saved in the database.
     * @param {TicketRaffleCreateManyAndReturnArgs} args - Arguments to create many TicketRaffles.
     * @example
     * // Create many TicketRaffles
     * const ticketRaffle = await prisma.ticketRaffle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketRaffles and only return the `id`
     * const ticketRaffleWithIdOnly = await prisma.ticketRaffle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketRaffleCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketRaffleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketRaffle.
     * @param {TicketRaffleDeleteArgs} args - Arguments to delete one TicketRaffle.
     * @example
     * // Delete one TicketRaffle
     * const TicketRaffle = await prisma.ticketRaffle.delete({
     *   where: {
     *     // ... filter to delete one TicketRaffle
     *   }
     * })
     * 
     */
    delete<T extends TicketRaffleDeleteArgs>(args: SelectSubset<T, TicketRaffleDeleteArgs<ExtArgs>>): Prisma__TicketRaffleClient<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketRaffle.
     * @param {TicketRaffleUpdateArgs} args - Arguments to update one TicketRaffle.
     * @example
     * // Update one TicketRaffle
     * const ticketRaffle = await prisma.ticketRaffle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketRaffleUpdateArgs>(args: SelectSubset<T, TicketRaffleUpdateArgs<ExtArgs>>): Prisma__TicketRaffleClient<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketRaffles.
     * @param {TicketRaffleDeleteManyArgs} args - Arguments to filter TicketRaffles to delete.
     * @example
     * // Delete a few TicketRaffles
     * const { count } = await prisma.ticketRaffle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketRaffleDeleteManyArgs>(args?: SelectSubset<T, TicketRaffleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketRaffles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRaffleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketRaffles
     * const ticketRaffle = await prisma.ticketRaffle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketRaffleUpdateManyArgs>(args: SelectSubset<T, TicketRaffleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketRaffles and returns the data updated in the database.
     * @param {TicketRaffleUpdateManyAndReturnArgs} args - Arguments to update many TicketRaffles.
     * @example
     * // Update many TicketRaffles
     * const ticketRaffle = await prisma.ticketRaffle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketRaffles and only return the `id`
     * const ticketRaffleWithIdOnly = await prisma.ticketRaffle.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketRaffleUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketRaffleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketRaffle.
     * @param {TicketRaffleUpsertArgs} args - Arguments to update or create a TicketRaffle.
     * @example
     * // Update or create a TicketRaffle
     * const ticketRaffle = await prisma.ticketRaffle.upsert({
     *   create: {
     *     // ... data to create a TicketRaffle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketRaffle we want to update
     *   }
     * })
     */
    upsert<T extends TicketRaffleUpsertArgs>(args: SelectSubset<T, TicketRaffleUpsertArgs<ExtArgs>>): Prisma__TicketRaffleClient<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketRaffles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRaffleCountArgs} args - Arguments to filter TicketRaffles to count.
     * @example
     * // Count the number of TicketRaffles
     * const count = await prisma.ticketRaffle.count({
     *   where: {
     *     // ... the filter for the TicketRaffles we want to count
     *   }
     * })
    **/
    count<T extends TicketRaffleCountArgs>(
      args?: Subset<T, TicketRaffleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketRaffleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketRaffle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRaffleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketRaffleAggregateArgs>(args: Subset<T, TicketRaffleAggregateArgs>): Prisma.PrismaPromise<GetTicketRaffleAggregateType<T>>

    /**
     * Group by TicketRaffle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRaffleGroupByArgs} args - Group by arguments.
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
      T extends TicketRaffleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketRaffleGroupByArgs['orderBy'] }
        : { orderBy?: TicketRaffleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketRaffleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketRaffleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketRaffle model
   */
  readonly fields: TicketRaffleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketRaffle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketRaffleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prize<T extends PrizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrizeDefaultArgs<ExtArgs>>): Prisma__PrizeClient<$Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    raffle_edition<T extends RaffleEditionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaffleEditionDefaultArgs<ExtArgs>>): Prisma__RaffleEditionClient<$Result.GetResult<Prisma.$RaffleEditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket_payment<T extends TicketRaffle$ticket_paymentArgs<ExtArgs> = {}>(args?: Subset<T, TicketRaffle$ticket_paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TicketRaffle model
   */
  interface TicketRaffleFieldRefs {
    readonly id: FieldRef<"TicketRaffle", 'String'>
    readonly raffle_number: FieldRef<"TicketRaffle", 'BigInt'>
    readonly price: FieldRef<"TicketRaffle", 'BigInt'>
    readonly status: FieldRef<"TicketRaffle", 'TicketRaffleStatus'>
    readonly prize_id: FieldRef<"TicketRaffle", 'String'>
    readonly raffle_edition_id: FieldRef<"TicketRaffle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TicketRaffle findUnique
   */
  export type TicketRaffleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
    /**
     * Filter, which TicketRaffle to fetch.
     */
    where: TicketRaffleWhereUniqueInput
  }

  /**
   * TicketRaffle findUniqueOrThrow
   */
  export type TicketRaffleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
    /**
     * Filter, which TicketRaffle to fetch.
     */
    where: TicketRaffleWhereUniqueInput
  }

  /**
   * TicketRaffle findFirst
   */
  export type TicketRaffleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
    /**
     * Filter, which TicketRaffle to fetch.
     */
    where?: TicketRaffleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketRaffles to fetch.
     */
    orderBy?: TicketRaffleOrderByWithRelationInput | TicketRaffleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketRaffles.
     */
    cursor?: TicketRaffleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketRaffles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketRaffles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketRaffles.
     */
    distinct?: TicketRaffleScalarFieldEnum | TicketRaffleScalarFieldEnum[]
  }

  /**
   * TicketRaffle findFirstOrThrow
   */
  export type TicketRaffleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
    /**
     * Filter, which TicketRaffle to fetch.
     */
    where?: TicketRaffleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketRaffles to fetch.
     */
    orderBy?: TicketRaffleOrderByWithRelationInput | TicketRaffleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketRaffles.
     */
    cursor?: TicketRaffleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketRaffles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketRaffles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketRaffles.
     */
    distinct?: TicketRaffleScalarFieldEnum | TicketRaffleScalarFieldEnum[]
  }

  /**
   * TicketRaffle findMany
   */
  export type TicketRaffleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
    /**
     * Filter, which TicketRaffles to fetch.
     */
    where?: TicketRaffleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketRaffles to fetch.
     */
    orderBy?: TicketRaffleOrderByWithRelationInput | TicketRaffleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketRaffles.
     */
    cursor?: TicketRaffleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketRaffles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketRaffles.
     */
    skip?: number
    distinct?: TicketRaffleScalarFieldEnum | TicketRaffleScalarFieldEnum[]
  }

  /**
   * TicketRaffle create
   */
  export type TicketRaffleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketRaffle.
     */
    data: XOR<TicketRaffleCreateInput, TicketRaffleUncheckedCreateInput>
  }

  /**
   * TicketRaffle createMany
   */
  export type TicketRaffleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketRaffles.
     */
    data: TicketRaffleCreateManyInput | TicketRaffleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketRaffle createManyAndReturn
   */
  export type TicketRaffleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * The data used to create many TicketRaffles.
     */
    data: TicketRaffleCreateManyInput | TicketRaffleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketRaffle update
   */
  export type TicketRaffleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketRaffle.
     */
    data: XOR<TicketRaffleUpdateInput, TicketRaffleUncheckedUpdateInput>
    /**
     * Choose, which TicketRaffle to update.
     */
    where: TicketRaffleWhereUniqueInput
  }

  /**
   * TicketRaffle updateMany
   */
  export type TicketRaffleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketRaffles.
     */
    data: XOR<TicketRaffleUpdateManyMutationInput, TicketRaffleUncheckedUpdateManyInput>
    /**
     * Filter which TicketRaffles to update
     */
    where?: TicketRaffleWhereInput
    /**
     * Limit how many TicketRaffles to update.
     */
    limit?: number
  }

  /**
   * TicketRaffle updateManyAndReturn
   */
  export type TicketRaffleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * The data used to update TicketRaffles.
     */
    data: XOR<TicketRaffleUpdateManyMutationInput, TicketRaffleUncheckedUpdateManyInput>
    /**
     * Filter which TicketRaffles to update
     */
    where?: TicketRaffleWhereInput
    /**
     * Limit how many TicketRaffles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketRaffle upsert
   */
  export type TicketRaffleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketRaffle to update in case it exists.
     */
    where: TicketRaffleWhereUniqueInput
    /**
     * In case the TicketRaffle found by the `where` argument doesn't exist, create a new TicketRaffle with this data.
     */
    create: XOR<TicketRaffleCreateInput, TicketRaffleUncheckedCreateInput>
    /**
     * In case the TicketRaffle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketRaffleUpdateInput, TicketRaffleUncheckedUpdateInput>
  }

  /**
   * TicketRaffle delete
   */
  export type TicketRaffleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
    /**
     * Filter which TicketRaffle to delete.
     */
    where: TicketRaffleWhereUniqueInput
  }

  /**
   * TicketRaffle deleteMany
   */
  export type TicketRaffleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketRaffles to delete
     */
    where?: TicketRaffleWhereInput
    /**
     * Limit how many TicketRaffles to delete.
     */
    limit?: number
  }

  /**
   * TicketRaffle.ticket_payment
   */
  export type TicketRaffle$ticket_paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPaymentInclude<ExtArgs> | null
    where?: TicketPaymentWhereInput
    orderBy?: TicketPaymentOrderByWithRelationInput | TicketPaymentOrderByWithRelationInput[]
    cursor?: TicketPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketPaymentScalarFieldEnum | TicketPaymentScalarFieldEnum[]
  }

  /**
   * TicketRaffle without action
   */
  export type TicketRaffleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
  }


  /**
   * Model TicketPayment
   */

  export type AggregateTicketPayment = {
    _count: TicketPaymentCountAggregateOutputType | null
    _avg: TicketPaymentAvgAggregateOutputType | null
    _sum: TicketPaymentSumAggregateOutputType | null
    _min: TicketPaymentMinAggregateOutputType | null
    _max: TicketPaymentMaxAggregateOutputType | null
  }

  export type TicketPaymentAvgAggregateOutputType = {
    ticket_amount: number | null
    total_value: number | null
  }

  export type TicketPaymentSumAggregateOutputType = {
    ticket_amount: number | null
    total_value: bigint | null
  }

  export type TicketPaymentMinAggregateOutputType = {
    id: string | null
    ticket_amount: number | null
    total_value: bigint | null
    name: string | null
    cpf: string | null
    email: string | null
    number: string | null
  }

  export type TicketPaymentMaxAggregateOutputType = {
    id: string | null
    ticket_amount: number | null
    total_value: bigint | null
    name: string | null
    cpf: string | null
    email: string | null
    number: string | null
  }

  export type TicketPaymentCountAggregateOutputType = {
    id: number
    ticket_amount: number
    total_value: number
    name: number
    cpf: number
    email: number
    number: number
    _all: number
  }


  export type TicketPaymentAvgAggregateInputType = {
    ticket_amount?: true
    total_value?: true
  }

  export type TicketPaymentSumAggregateInputType = {
    ticket_amount?: true
    total_value?: true
  }

  export type TicketPaymentMinAggregateInputType = {
    id?: true
    ticket_amount?: true
    total_value?: true
    name?: true
    cpf?: true
    email?: true
    number?: true
  }

  export type TicketPaymentMaxAggregateInputType = {
    id?: true
    ticket_amount?: true
    total_value?: true
    name?: true
    cpf?: true
    email?: true
    number?: true
  }

  export type TicketPaymentCountAggregateInputType = {
    id?: true
    ticket_amount?: true
    total_value?: true
    name?: true
    cpf?: true
    email?: true
    number?: true
    _all?: true
  }

  export type TicketPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketPayment to aggregate.
     */
    where?: TicketPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPayments to fetch.
     */
    orderBy?: TicketPaymentOrderByWithRelationInput | TicketPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketPayments
    **/
    _count?: true | TicketPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketPaymentMaxAggregateInputType
  }

  export type GetTicketPaymentAggregateType<T extends TicketPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketPayment[P]>
      : GetScalarType<T[P], AggregateTicketPayment[P]>
  }




  export type TicketPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketPaymentWhereInput
    orderBy?: TicketPaymentOrderByWithAggregationInput | TicketPaymentOrderByWithAggregationInput[]
    by: TicketPaymentScalarFieldEnum[] | TicketPaymentScalarFieldEnum
    having?: TicketPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketPaymentCountAggregateInputType | true
    _avg?: TicketPaymentAvgAggregateInputType
    _sum?: TicketPaymentSumAggregateInputType
    _min?: TicketPaymentMinAggregateInputType
    _max?: TicketPaymentMaxAggregateInputType
  }

  export type TicketPaymentGroupByOutputType = {
    id: string
    ticket_amount: number
    total_value: bigint
    name: string
    cpf: string
    email: string
    number: string | null
    _count: TicketPaymentCountAggregateOutputType | null
    _avg: TicketPaymentAvgAggregateOutputType | null
    _sum: TicketPaymentSumAggregateOutputType | null
    _min: TicketPaymentMinAggregateOutputType | null
    _max: TicketPaymentMaxAggregateOutputType | null
  }

  type GetTicketPaymentGroupByPayload<T extends TicketPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], TicketPaymentGroupByOutputType[P]>
        }
      >
    >


  export type TicketPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_amount?: boolean
    total_value?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    number?: boolean
    ticket_raffle?: boolean | TicketPayment$ticket_raffleArgs<ExtArgs>
    Extract?: boolean | TicketPayment$ExtractArgs<ExtArgs>
    _count?: boolean | TicketPaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketPayment"]>

  export type TicketPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_amount?: boolean
    total_value?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    number?: boolean
  }, ExtArgs["result"]["ticketPayment"]>

  export type TicketPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_amount?: boolean
    total_value?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    number?: boolean
  }, ExtArgs["result"]["ticketPayment"]>

  export type TicketPaymentSelectScalar = {
    id?: boolean
    ticket_amount?: boolean
    total_value?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    number?: boolean
  }

  export type TicketPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticket_amount" | "total_value" | "name" | "cpf" | "email" | "number", ExtArgs["result"]["ticketPayment"]>
  export type TicketPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_raffle?: boolean | TicketPayment$ticket_raffleArgs<ExtArgs>
    Extract?: boolean | TicketPayment$ExtractArgs<ExtArgs>
    _count?: boolean | TicketPaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TicketPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TicketPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketPayment"
    objects: {
      ticket_raffle: Prisma.$TicketRafflePayload<ExtArgs>[]
      Extract: Prisma.$ExtractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticket_amount: number
      total_value: bigint
      name: string
      cpf: string
      email: string
      number: string | null
    }, ExtArgs["result"]["ticketPayment"]>
    composites: {}
  }

  type TicketPaymentGetPayload<S extends boolean | null | undefined | TicketPaymentDefaultArgs> = $Result.GetResult<Prisma.$TicketPaymentPayload, S>

  type TicketPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketPaymentCountAggregateInputType | true
    }

  export interface TicketPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketPayment'], meta: { name: 'TicketPayment' } }
    /**
     * Find zero or one TicketPayment that matches the filter.
     * @param {TicketPaymentFindUniqueArgs} args - Arguments to find a TicketPayment
     * @example
     * // Get one TicketPayment
     * const ticketPayment = await prisma.ticketPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketPaymentFindUniqueArgs>(args: SelectSubset<T, TicketPaymentFindUniqueArgs<ExtArgs>>): Prisma__TicketPaymentClient<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketPaymentFindUniqueOrThrowArgs} args - Arguments to find a TicketPayment
     * @example
     * // Get one TicketPayment
     * const ticketPayment = await prisma.ticketPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketPaymentClient<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPaymentFindFirstArgs} args - Arguments to find a TicketPayment
     * @example
     * // Get one TicketPayment
     * const ticketPayment = await prisma.ticketPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketPaymentFindFirstArgs>(args?: SelectSubset<T, TicketPaymentFindFirstArgs<ExtArgs>>): Prisma__TicketPaymentClient<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPaymentFindFirstOrThrowArgs} args - Arguments to find a TicketPayment
     * @example
     * // Get one TicketPayment
     * const ticketPayment = await prisma.ticketPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketPaymentClient<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketPayments
     * const ticketPayments = await prisma.ticketPayment.findMany()
     * 
     * // Get first 10 TicketPayments
     * const ticketPayments = await prisma.ticketPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketPaymentWithIdOnly = await prisma.ticketPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketPaymentFindManyArgs>(args?: SelectSubset<T, TicketPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketPayment.
     * @param {TicketPaymentCreateArgs} args - Arguments to create a TicketPayment.
     * @example
     * // Create one TicketPayment
     * const TicketPayment = await prisma.ticketPayment.create({
     *   data: {
     *     // ... data to create a TicketPayment
     *   }
     * })
     * 
     */
    create<T extends TicketPaymentCreateArgs>(args: SelectSubset<T, TicketPaymentCreateArgs<ExtArgs>>): Prisma__TicketPaymentClient<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketPayments.
     * @param {TicketPaymentCreateManyArgs} args - Arguments to create many TicketPayments.
     * @example
     * // Create many TicketPayments
     * const ticketPayment = await prisma.ticketPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketPaymentCreateManyArgs>(args?: SelectSubset<T, TicketPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketPayments and returns the data saved in the database.
     * @param {TicketPaymentCreateManyAndReturnArgs} args - Arguments to create many TicketPayments.
     * @example
     * // Create many TicketPayments
     * const ticketPayment = await prisma.ticketPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketPayments and only return the `id`
     * const ticketPaymentWithIdOnly = await prisma.ticketPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketPayment.
     * @param {TicketPaymentDeleteArgs} args - Arguments to delete one TicketPayment.
     * @example
     * // Delete one TicketPayment
     * const TicketPayment = await prisma.ticketPayment.delete({
     *   where: {
     *     // ... filter to delete one TicketPayment
     *   }
     * })
     * 
     */
    delete<T extends TicketPaymentDeleteArgs>(args: SelectSubset<T, TicketPaymentDeleteArgs<ExtArgs>>): Prisma__TicketPaymentClient<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketPayment.
     * @param {TicketPaymentUpdateArgs} args - Arguments to update one TicketPayment.
     * @example
     * // Update one TicketPayment
     * const ticketPayment = await prisma.ticketPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketPaymentUpdateArgs>(args: SelectSubset<T, TicketPaymentUpdateArgs<ExtArgs>>): Prisma__TicketPaymentClient<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketPayments.
     * @param {TicketPaymentDeleteManyArgs} args - Arguments to filter TicketPayments to delete.
     * @example
     * // Delete a few TicketPayments
     * const { count } = await prisma.ticketPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketPaymentDeleteManyArgs>(args?: SelectSubset<T, TicketPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketPayments
     * const ticketPayment = await prisma.ticketPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketPaymentUpdateManyArgs>(args: SelectSubset<T, TicketPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketPayments and returns the data updated in the database.
     * @param {TicketPaymentUpdateManyAndReturnArgs} args - Arguments to update many TicketPayments.
     * @example
     * // Update many TicketPayments
     * const ticketPayment = await prisma.ticketPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketPayments and only return the `id`
     * const ticketPaymentWithIdOnly = await prisma.ticketPayment.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketPayment.
     * @param {TicketPaymentUpsertArgs} args - Arguments to update or create a TicketPayment.
     * @example
     * // Update or create a TicketPayment
     * const ticketPayment = await prisma.ticketPayment.upsert({
     *   create: {
     *     // ... data to create a TicketPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketPayment we want to update
     *   }
     * })
     */
    upsert<T extends TicketPaymentUpsertArgs>(args: SelectSubset<T, TicketPaymentUpsertArgs<ExtArgs>>): Prisma__TicketPaymentClient<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPaymentCountArgs} args - Arguments to filter TicketPayments to count.
     * @example
     * // Count the number of TicketPayments
     * const count = await prisma.ticketPayment.count({
     *   where: {
     *     // ... the filter for the TicketPayments we want to count
     *   }
     * })
    **/
    count<T extends TicketPaymentCountArgs>(
      args?: Subset<T, TicketPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketPaymentAggregateArgs>(args: Subset<T, TicketPaymentAggregateArgs>): Prisma.PrismaPromise<GetTicketPaymentAggregateType<T>>

    /**
     * Group by TicketPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPaymentGroupByArgs} args - Group by arguments.
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
      T extends TicketPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketPaymentGroupByArgs['orderBy'] }
        : { orderBy?: TicketPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketPayment model
   */
  readonly fields: TicketPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket_raffle<T extends TicketPayment$ticket_raffleArgs<ExtArgs> = {}>(args?: Subset<T, TicketPayment$ticket_raffleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRafflePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Extract<T extends TicketPayment$ExtractArgs<ExtArgs> = {}>(args?: Subset<T, TicketPayment$ExtractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TicketPayment model
   */
  interface TicketPaymentFieldRefs {
    readonly id: FieldRef<"TicketPayment", 'String'>
    readonly ticket_amount: FieldRef<"TicketPayment", 'Int'>
    readonly total_value: FieldRef<"TicketPayment", 'BigInt'>
    readonly name: FieldRef<"TicketPayment", 'String'>
    readonly cpf: FieldRef<"TicketPayment", 'String'>
    readonly email: FieldRef<"TicketPayment", 'String'>
    readonly number: FieldRef<"TicketPayment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TicketPayment findUnique
   */
  export type TicketPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPaymentInclude<ExtArgs> | null
    /**
     * Filter, which TicketPayment to fetch.
     */
    where: TicketPaymentWhereUniqueInput
  }

  /**
   * TicketPayment findUniqueOrThrow
   */
  export type TicketPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPaymentInclude<ExtArgs> | null
    /**
     * Filter, which TicketPayment to fetch.
     */
    where: TicketPaymentWhereUniqueInput
  }

  /**
   * TicketPayment findFirst
   */
  export type TicketPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPaymentInclude<ExtArgs> | null
    /**
     * Filter, which TicketPayment to fetch.
     */
    where?: TicketPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPayments to fetch.
     */
    orderBy?: TicketPaymentOrderByWithRelationInput | TicketPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketPayments.
     */
    cursor?: TicketPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketPayments.
     */
    distinct?: TicketPaymentScalarFieldEnum | TicketPaymentScalarFieldEnum[]
  }

  /**
   * TicketPayment findFirstOrThrow
   */
  export type TicketPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPaymentInclude<ExtArgs> | null
    /**
     * Filter, which TicketPayment to fetch.
     */
    where?: TicketPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPayments to fetch.
     */
    orderBy?: TicketPaymentOrderByWithRelationInput | TicketPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketPayments.
     */
    cursor?: TicketPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketPayments.
     */
    distinct?: TicketPaymentScalarFieldEnum | TicketPaymentScalarFieldEnum[]
  }

  /**
   * TicketPayment findMany
   */
  export type TicketPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPaymentInclude<ExtArgs> | null
    /**
     * Filter, which TicketPayments to fetch.
     */
    where?: TicketPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPayments to fetch.
     */
    orderBy?: TicketPaymentOrderByWithRelationInput | TicketPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketPayments.
     */
    cursor?: TicketPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPayments.
     */
    skip?: number
    distinct?: TicketPaymentScalarFieldEnum | TicketPaymentScalarFieldEnum[]
  }

  /**
   * TicketPayment create
   */
  export type TicketPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketPayment.
     */
    data: XOR<TicketPaymentCreateInput, TicketPaymentUncheckedCreateInput>
  }

  /**
   * TicketPayment createMany
   */
  export type TicketPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketPayments.
     */
    data: TicketPaymentCreateManyInput | TicketPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketPayment createManyAndReturn
   */
  export type TicketPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many TicketPayments.
     */
    data: TicketPaymentCreateManyInput | TicketPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketPayment update
   */
  export type TicketPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketPayment.
     */
    data: XOR<TicketPaymentUpdateInput, TicketPaymentUncheckedUpdateInput>
    /**
     * Choose, which TicketPayment to update.
     */
    where: TicketPaymentWhereUniqueInput
  }

  /**
   * TicketPayment updateMany
   */
  export type TicketPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketPayments.
     */
    data: XOR<TicketPaymentUpdateManyMutationInput, TicketPaymentUncheckedUpdateManyInput>
    /**
     * Filter which TicketPayments to update
     */
    where?: TicketPaymentWhereInput
    /**
     * Limit how many TicketPayments to update.
     */
    limit?: number
  }

  /**
   * TicketPayment updateManyAndReturn
   */
  export type TicketPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * The data used to update TicketPayments.
     */
    data: XOR<TicketPaymentUpdateManyMutationInput, TicketPaymentUncheckedUpdateManyInput>
    /**
     * Filter which TicketPayments to update
     */
    where?: TicketPaymentWhereInput
    /**
     * Limit how many TicketPayments to update.
     */
    limit?: number
  }

  /**
   * TicketPayment upsert
   */
  export type TicketPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketPayment to update in case it exists.
     */
    where: TicketPaymentWhereUniqueInput
    /**
     * In case the TicketPayment found by the `where` argument doesn't exist, create a new TicketPayment with this data.
     */
    create: XOR<TicketPaymentCreateInput, TicketPaymentUncheckedCreateInput>
    /**
     * In case the TicketPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketPaymentUpdateInput, TicketPaymentUncheckedUpdateInput>
  }

  /**
   * TicketPayment delete
   */
  export type TicketPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPaymentInclude<ExtArgs> | null
    /**
     * Filter which TicketPayment to delete.
     */
    where: TicketPaymentWhereUniqueInput
  }

  /**
   * TicketPayment deleteMany
   */
  export type TicketPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketPayments to delete
     */
    where?: TicketPaymentWhereInput
    /**
     * Limit how many TicketPayments to delete.
     */
    limit?: number
  }

  /**
   * TicketPayment.ticket_raffle
   */
  export type TicketPayment$ticket_raffleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRaffle
     */
    select?: TicketRaffleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRaffle
     */
    omit?: TicketRaffleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRaffleInclude<ExtArgs> | null
    where?: TicketRaffleWhereInput
    orderBy?: TicketRaffleOrderByWithRelationInput | TicketRaffleOrderByWithRelationInput[]
    cursor?: TicketRaffleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketRaffleScalarFieldEnum | TicketRaffleScalarFieldEnum[]
  }

  /**
   * TicketPayment.Extract
   */
  export type TicketPayment$ExtractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    where?: ExtractWhereInput
    orderBy?: ExtractOrderByWithRelationInput | ExtractOrderByWithRelationInput[]
    cursor?: ExtractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExtractScalarFieldEnum | ExtractScalarFieldEnum[]
  }

  /**
   * TicketPayment without action
   */
  export type TicketPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPaymentInclude<ExtArgs> | null
  }


  /**
   * Model Extract
   */

  export type AggregateExtract = {
    _count: ExtractCountAggregateOutputType | null
    _avg: ExtractAvgAggregateOutputType | null
    _sum: ExtractSumAggregateOutputType | null
    _min: ExtractMinAggregateOutputType | null
    _max: ExtractMaxAggregateOutputType | null
  }

  export type ExtractAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExtractSumAggregateOutputType = {
    amount: bigint | null
  }

  export type ExtractMinAggregateOutputType = {
    id: string | null
    amount: bigint | null
    type: $Enums.ExtractType | null
    ticket_payment_id: string | null
  }

  export type ExtractMaxAggregateOutputType = {
    id: string | null
    amount: bigint | null
    type: $Enums.ExtractType | null
    ticket_payment_id: string | null
  }

  export type ExtractCountAggregateOutputType = {
    id: number
    amount: number
    type: number
    ticket_payment_id: number
    _all: number
  }


  export type ExtractAvgAggregateInputType = {
    amount?: true
  }

  export type ExtractSumAggregateInputType = {
    amount?: true
  }

  export type ExtractMinAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    ticket_payment_id?: true
  }

  export type ExtractMaxAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    ticket_payment_id?: true
  }

  export type ExtractCountAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    ticket_payment_id?: true
    _all?: true
  }

  export type ExtractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extract to aggregate.
     */
    where?: ExtractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extracts to fetch.
     */
    orderBy?: ExtractOrderByWithRelationInput | ExtractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExtractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Extracts
    **/
    _count?: true | ExtractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExtractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExtractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExtractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExtractMaxAggregateInputType
  }

  export type GetExtractAggregateType<T extends ExtractAggregateArgs> = {
        [P in keyof T & keyof AggregateExtract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExtract[P]>
      : GetScalarType<T[P], AggregateExtract[P]>
  }




  export type ExtractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtractWhereInput
    orderBy?: ExtractOrderByWithAggregationInput | ExtractOrderByWithAggregationInput[]
    by: ExtractScalarFieldEnum[] | ExtractScalarFieldEnum
    having?: ExtractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExtractCountAggregateInputType | true
    _avg?: ExtractAvgAggregateInputType
    _sum?: ExtractSumAggregateInputType
    _min?: ExtractMinAggregateInputType
    _max?: ExtractMaxAggregateInputType
  }

  export type ExtractGroupByOutputType = {
    id: string
    amount: bigint
    type: $Enums.ExtractType
    ticket_payment_id: string | null
    _count: ExtractCountAggregateOutputType | null
    _avg: ExtractAvgAggregateOutputType | null
    _sum: ExtractSumAggregateOutputType | null
    _min: ExtractMinAggregateOutputType | null
    _max: ExtractMaxAggregateOutputType | null
  }

  type GetExtractGroupByPayload<T extends ExtractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExtractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExtractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExtractGroupByOutputType[P]>
            : GetScalarType<T[P], ExtractGroupByOutputType[P]>
        }
      >
    >


  export type ExtractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    ticket_payment_id?: boolean
    ticket_payment?: boolean | Extract$ticket_paymentArgs<ExtArgs>
  }, ExtArgs["result"]["extract"]>

  export type ExtractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    ticket_payment_id?: boolean
    ticket_payment?: boolean | Extract$ticket_paymentArgs<ExtArgs>
  }, ExtArgs["result"]["extract"]>

  export type ExtractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    ticket_payment_id?: boolean
    ticket_payment?: boolean | Extract$ticket_paymentArgs<ExtArgs>
  }, ExtArgs["result"]["extract"]>

  export type ExtractSelectScalar = {
    id?: boolean
    amount?: boolean
    type?: boolean
    ticket_payment_id?: boolean
  }

  export type ExtractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "type" | "ticket_payment_id", ExtArgs["result"]["extract"]>
  export type ExtractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_payment?: boolean | Extract$ticket_paymentArgs<ExtArgs>
  }
  export type ExtractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_payment?: boolean | Extract$ticket_paymentArgs<ExtArgs>
  }
  export type ExtractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_payment?: boolean | Extract$ticket_paymentArgs<ExtArgs>
  }

  export type $ExtractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Extract"
    objects: {
      ticket_payment: Prisma.$TicketPaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: bigint
      type: $Enums.ExtractType
      ticket_payment_id: string | null
    }, ExtArgs["result"]["extract"]>
    composites: {}
  }

  type ExtractGetPayload<S extends boolean | null | undefined | ExtractDefaultArgs> = $Result.GetResult<Prisma.$ExtractPayload, S>

  type ExtractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExtractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExtractCountAggregateInputType | true
    }

  export interface ExtractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Extract'], meta: { name: 'Extract' } }
    /**
     * Find zero or one Extract that matches the filter.
     * @param {ExtractFindUniqueArgs} args - Arguments to find a Extract
     * @example
     * // Get one Extract
     * const extract = await prisma.extract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExtractFindUniqueArgs>(args: SelectSubset<T, ExtractFindUniqueArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Extract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExtractFindUniqueOrThrowArgs} args - Arguments to find a Extract
     * @example
     * // Get one Extract
     * const extract = await prisma.extract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExtractFindUniqueOrThrowArgs>(args: SelectSubset<T, ExtractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractFindFirstArgs} args - Arguments to find a Extract
     * @example
     * // Get one Extract
     * const extract = await prisma.extract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExtractFindFirstArgs>(args?: SelectSubset<T, ExtractFindFirstArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractFindFirstOrThrowArgs} args - Arguments to find a Extract
     * @example
     * // Get one Extract
     * const extract = await prisma.extract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExtractFindFirstOrThrowArgs>(args?: SelectSubset<T, ExtractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Extracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Extracts
     * const extracts = await prisma.extract.findMany()
     * 
     * // Get first 10 Extracts
     * const extracts = await prisma.extract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const extractWithIdOnly = await prisma.extract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExtractFindManyArgs>(args?: SelectSubset<T, ExtractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Extract.
     * @param {ExtractCreateArgs} args - Arguments to create a Extract.
     * @example
     * // Create one Extract
     * const Extract = await prisma.extract.create({
     *   data: {
     *     // ... data to create a Extract
     *   }
     * })
     * 
     */
    create<T extends ExtractCreateArgs>(args: SelectSubset<T, ExtractCreateArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Extracts.
     * @param {ExtractCreateManyArgs} args - Arguments to create many Extracts.
     * @example
     * // Create many Extracts
     * const extract = await prisma.extract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExtractCreateManyArgs>(args?: SelectSubset<T, ExtractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Extracts and returns the data saved in the database.
     * @param {ExtractCreateManyAndReturnArgs} args - Arguments to create many Extracts.
     * @example
     * // Create many Extracts
     * const extract = await prisma.extract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Extracts and only return the `id`
     * const extractWithIdOnly = await prisma.extract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExtractCreateManyAndReturnArgs>(args?: SelectSubset<T, ExtractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Extract.
     * @param {ExtractDeleteArgs} args - Arguments to delete one Extract.
     * @example
     * // Delete one Extract
     * const Extract = await prisma.extract.delete({
     *   where: {
     *     // ... filter to delete one Extract
     *   }
     * })
     * 
     */
    delete<T extends ExtractDeleteArgs>(args: SelectSubset<T, ExtractDeleteArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Extract.
     * @param {ExtractUpdateArgs} args - Arguments to update one Extract.
     * @example
     * // Update one Extract
     * const extract = await prisma.extract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExtractUpdateArgs>(args: SelectSubset<T, ExtractUpdateArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Extracts.
     * @param {ExtractDeleteManyArgs} args - Arguments to filter Extracts to delete.
     * @example
     * // Delete a few Extracts
     * const { count } = await prisma.extract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExtractDeleteManyArgs>(args?: SelectSubset<T, ExtractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Extracts
     * const extract = await prisma.extract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExtractUpdateManyArgs>(args: SelectSubset<T, ExtractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extracts and returns the data updated in the database.
     * @param {ExtractUpdateManyAndReturnArgs} args - Arguments to update many Extracts.
     * @example
     * // Update many Extracts
     * const extract = await prisma.extract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Extracts and only return the `id`
     * const extractWithIdOnly = await prisma.extract.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExtractUpdateManyAndReturnArgs>(args: SelectSubset<T, ExtractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Extract.
     * @param {ExtractUpsertArgs} args - Arguments to update or create a Extract.
     * @example
     * // Update or create a Extract
     * const extract = await prisma.extract.upsert({
     *   create: {
     *     // ... data to create a Extract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Extract we want to update
     *   }
     * })
     */
    upsert<T extends ExtractUpsertArgs>(args: SelectSubset<T, ExtractUpsertArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Extracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractCountArgs} args - Arguments to filter Extracts to count.
     * @example
     * // Count the number of Extracts
     * const count = await prisma.extract.count({
     *   where: {
     *     // ... the filter for the Extracts we want to count
     *   }
     * })
    **/
    count<T extends ExtractCountArgs>(
      args?: Subset<T, ExtractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExtractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Extract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExtractAggregateArgs>(args: Subset<T, ExtractAggregateArgs>): Prisma.PrismaPromise<GetExtractAggregateType<T>>

    /**
     * Group by Extract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractGroupByArgs} args - Group by arguments.
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
      T extends ExtractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExtractGroupByArgs['orderBy'] }
        : { orderBy?: ExtractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExtractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExtractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Extract model
   */
  readonly fields: ExtractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Extract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExtractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket_payment<T extends Extract$ticket_paymentArgs<ExtArgs> = {}>(args?: Subset<T, Extract$ticket_paymentArgs<ExtArgs>>): Prisma__TicketPaymentClient<$Result.GetResult<Prisma.$TicketPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Extract model
   */
  interface ExtractFieldRefs {
    readonly id: FieldRef<"Extract", 'String'>
    readonly amount: FieldRef<"Extract", 'BigInt'>
    readonly type: FieldRef<"Extract", 'ExtractType'>
    readonly ticket_payment_id: FieldRef<"Extract", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Extract findUnique
   */
  export type ExtractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * Filter, which Extract to fetch.
     */
    where: ExtractWhereUniqueInput
  }

  /**
   * Extract findUniqueOrThrow
   */
  export type ExtractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * Filter, which Extract to fetch.
     */
    where: ExtractWhereUniqueInput
  }

  /**
   * Extract findFirst
   */
  export type ExtractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * Filter, which Extract to fetch.
     */
    where?: ExtractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extracts to fetch.
     */
    orderBy?: ExtractOrderByWithRelationInput | ExtractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extracts.
     */
    cursor?: ExtractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extracts.
     */
    distinct?: ExtractScalarFieldEnum | ExtractScalarFieldEnum[]
  }

  /**
   * Extract findFirstOrThrow
   */
  export type ExtractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * Filter, which Extract to fetch.
     */
    where?: ExtractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extracts to fetch.
     */
    orderBy?: ExtractOrderByWithRelationInput | ExtractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extracts.
     */
    cursor?: ExtractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extracts.
     */
    distinct?: ExtractScalarFieldEnum | ExtractScalarFieldEnum[]
  }

  /**
   * Extract findMany
   */
  export type ExtractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * Filter, which Extracts to fetch.
     */
    where?: ExtractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extracts to fetch.
     */
    orderBy?: ExtractOrderByWithRelationInput | ExtractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Extracts.
     */
    cursor?: ExtractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extracts.
     */
    skip?: number
    distinct?: ExtractScalarFieldEnum | ExtractScalarFieldEnum[]
  }

  /**
   * Extract create
   */
  export type ExtractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * The data needed to create a Extract.
     */
    data: XOR<ExtractCreateInput, ExtractUncheckedCreateInput>
  }

  /**
   * Extract createMany
   */
  export type ExtractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Extracts.
     */
    data: ExtractCreateManyInput | ExtractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Extract createManyAndReturn
   */
  export type ExtractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * The data used to create many Extracts.
     */
    data: ExtractCreateManyInput | ExtractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Extract update
   */
  export type ExtractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * The data needed to update a Extract.
     */
    data: XOR<ExtractUpdateInput, ExtractUncheckedUpdateInput>
    /**
     * Choose, which Extract to update.
     */
    where: ExtractWhereUniqueInput
  }

  /**
   * Extract updateMany
   */
  export type ExtractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Extracts.
     */
    data: XOR<ExtractUpdateManyMutationInput, ExtractUncheckedUpdateManyInput>
    /**
     * Filter which Extracts to update
     */
    where?: ExtractWhereInput
    /**
     * Limit how many Extracts to update.
     */
    limit?: number
  }

  /**
   * Extract updateManyAndReturn
   */
  export type ExtractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * The data used to update Extracts.
     */
    data: XOR<ExtractUpdateManyMutationInput, ExtractUncheckedUpdateManyInput>
    /**
     * Filter which Extracts to update
     */
    where?: ExtractWhereInput
    /**
     * Limit how many Extracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Extract upsert
   */
  export type ExtractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * The filter to search for the Extract to update in case it exists.
     */
    where: ExtractWhereUniqueInput
    /**
     * In case the Extract found by the `where` argument doesn't exist, create a new Extract with this data.
     */
    create: XOR<ExtractCreateInput, ExtractUncheckedCreateInput>
    /**
     * In case the Extract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExtractUpdateInput, ExtractUncheckedUpdateInput>
  }

  /**
   * Extract delete
   */
  export type ExtractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * Filter which Extract to delete.
     */
    where: ExtractWhereUniqueInput
  }

  /**
   * Extract deleteMany
   */
  export type ExtractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extracts to delete
     */
    where?: ExtractWhereInput
    /**
     * Limit how many Extracts to delete.
     */
    limit?: number
  }

  /**
   * Extract.ticket_payment
   */
  export type Extract$ticket_paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPayment
     */
    select?: TicketPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPayment
     */
    omit?: TicketPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPaymentInclude<ExtArgs> | null
    where?: TicketPaymentWhereInput
  }

  /**
   * Extract without action
   */
  export type ExtractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    email: 'email',
    number: 'number',
    social_media: 'social_media',
    saldo: 'saldo',
    hashed_password: 'hashed_password',
    comissao: 'comissao',
    profile: 'profile',
    owner_id: 'owner_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RaffleEditionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    total_tickets: 'total_tickets',
    winner_tickets: 'winner_tickets',
    raffle_draw_date: 'raffle_draw_date',
    user_id: 'user_id',
    userId: 'userId'
  };

  export type RaffleEditionScalarFieldEnum = (typeof RaffleEditionScalarFieldEnum)[keyof typeof RaffleEditionScalarFieldEnum]


  export const PrizeScalarFieldEnum: {
    id: 'id',
    prize_name: 'prize_name',
    prize_quantity: 'prize_quantity'
  };

  export type PrizeScalarFieldEnum = (typeof PrizeScalarFieldEnum)[keyof typeof PrizeScalarFieldEnum]


  export const TicketRaffleScalarFieldEnum: {
    id: 'id',
    raffle_number: 'raffle_number',
    price: 'price',
    status: 'status',
    prize_id: 'prize_id',
    raffle_edition_id: 'raffle_edition_id'
  };

  export type TicketRaffleScalarFieldEnum = (typeof TicketRaffleScalarFieldEnum)[keyof typeof TicketRaffleScalarFieldEnum]


  export const TicketPaymentScalarFieldEnum: {
    id: 'id',
    ticket_amount: 'ticket_amount',
    total_value: 'total_value',
    name: 'name',
    cpf: 'cpf',
    email: 'email',
    number: 'number'
  };

  export type TicketPaymentScalarFieldEnum = (typeof TicketPaymentScalarFieldEnum)[keyof typeof TicketPaymentScalarFieldEnum]


  export const ExtractScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    type: 'type',
    ticket_payment_id: 'ticket_payment_id'
  };

  export type ExtractScalarFieldEnum = (typeof ExtractScalarFieldEnum)[keyof typeof ExtractScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Profiles'
   */
  export type EnumProfilesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Profiles'>
    


  /**
   * Reference to a field of type 'Profiles[]'
   */
  export type ListEnumProfilesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Profiles[]'>
    


  /**
   * Reference to a field of type 'RaffleEditionStatus'
   */
  export type EnumRaffleEditionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RaffleEditionStatus'>
    


  /**
   * Reference to a field of type 'RaffleEditionStatus[]'
   */
  export type ListEnumRaffleEditionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RaffleEditionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TicketRaffleStatus'
   */
  export type EnumTicketRaffleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketRaffleStatus'>
    


  /**
   * Reference to a field of type 'TicketRaffleStatus[]'
   */
  export type ListEnumTicketRaffleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketRaffleStatus[]'>
    


  /**
   * Reference to a field of type 'ExtractType'
   */
  export type EnumExtractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExtractType'>
    


  /**
   * Reference to a field of type 'ExtractType[]'
   */
  export type ListEnumExtractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExtractType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    number?: StringFilter<"User"> | string
    social_media?: StringNullableFilter<"User"> | string | null
    saldo?: BigIntFilter<"User"> | bigint | number
    hashed_password?: StringFilter<"User"> | string
    comissao?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFilter<"User"> | $Enums.Profiles
    owner_id?: StringNullableFilter<"User"> | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sub_users?: UserListRelationFilter
    raffle_editions?: RaffleEditionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    number?: SortOrder
    social_media?: SortOrderInput | SortOrder
    saldo?: SortOrder
    hashed_password?: SortOrder
    comissao?: SortOrder
    profile?: SortOrder
    owner_id?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    sub_users?: UserOrderByRelationAggregateInput
    raffle_editions?: RaffleEditionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    number?: StringFilter<"User"> | string
    social_media?: StringNullableFilter<"User"> | string | null
    saldo?: BigIntFilter<"User"> | bigint | number
    hashed_password?: StringFilter<"User"> | string
    comissao?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFilter<"User"> | $Enums.Profiles
    owner_id?: StringNullableFilter<"User"> | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sub_users?: UserListRelationFilter
    raffle_editions?: RaffleEditionListRelationFilter
  }, "id" | "cpf" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    number?: SortOrder
    social_media?: SortOrderInput | SortOrder
    saldo?: SortOrder
    hashed_password?: SortOrder
    comissao?: SortOrder
    profile?: SortOrder
    owner_id?: SortOrderInput | SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    number?: StringWithAggregatesFilter<"User"> | string
    social_media?: StringNullableWithAggregatesFilter<"User"> | string | null
    saldo?: BigIntWithAggregatesFilter<"User"> | bigint | number
    hashed_password?: StringWithAggregatesFilter<"User"> | string
    comissao?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesWithAggregatesFilter<"User"> | $Enums.Profiles
    owner_id?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type RaffleEditionWhereInput = {
    AND?: RaffleEditionWhereInput | RaffleEditionWhereInput[]
    OR?: RaffleEditionWhereInput[]
    NOT?: RaffleEditionWhereInput | RaffleEditionWhereInput[]
    id?: StringFilter<"RaffleEdition"> | string
    title?: StringFilter<"RaffleEdition"> | string
    description?: StringFilter<"RaffleEdition"> | string
    status?: EnumRaffleEditionStatusFilter<"RaffleEdition"> | $Enums.RaffleEditionStatus
    total_tickets?: IntFilter<"RaffleEdition"> | number
    winner_tickets?: IntFilter<"RaffleEdition"> | number
    raffle_draw_date?: DateTimeFilter<"RaffleEdition"> | Date | string
    user_id?: StringNullableFilter<"RaffleEdition"> | string | null
    userId?: StringNullableFilter<"RaffleEdition"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    TicketRaffle?: TicketRaffleListRelationFilter
  }

  export type RaffleEditionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    total_tickets?: SortOrder
    winner_tickets?: SortOrder
    raffle_draw_date?: SortOrder
    user_id?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    TicketRaffle?: TicketRaffleOrderByRelationAggregateInput
  }

  export type RaffleEditionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaffleEditionWhereInput | RaffleEditionWhereInput[]
    OR?: RaffleEditionWhereInput[]
    NOT?: RaffleEditionWhereInput | RaffleEditionWhereInput[]
    title?: StringFilter<"RaffleEdition"> | string
    description?: StringFilter<"RaffleEdition"> | string
    status?: EnumRaffleEditionStatusFilter<"RaffleEdition"> | $Enums.RaffleEditionStatus
    total_tickets?: IntFilter<"RaffleEdition"> | number
    winner_tickets?: IntFilter<"RaffleEdition"> | number
    raffle_draw_date?: DateTimeFilter<"RaffleEdition"> | Date | string
    user_id?: StringNullableFilter<"RaffleEdition"> | string | null
    userId?: StringNullableFilter<"RaffleEdition"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    TicketRaffle?: TicketRaffleListRelationFilter
  }, "id">

  export type RaffleEditionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    total_tickets?: SortOrder
    winner_tickets?: SortOrder
    raffle_draw_date?: SortOrder
    user_id?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: RaffleEditionCountOrderByAggregateInput
    _avg?: RaffleEditionAvgOrderByAggregateInput
    _max?: RaffleEditionMaxOrderByAggregateInput
    _min?: RaffleEditionMinOrderByAggregateInput
    _sum?: RaffleEditionSumOrderByAggregateInput
  }

  export type RaffleEditionScalarWhereWithAggregatesInput = {
    AND?: RaffleEditionScalarWhereWithAggregatesInput | RaffleEditionScalarWhereWithAggregatesInput[]
    OR?: RaffleEditionScalarWhereWithAggregatesInput[]
    NOT?: RaffleEditionScalarWhereWithAggregatesInput | RaffleEditionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RaffleEdition"> | string
    title?: StringWithAggregatesFilter<"RaffleEdition"> | string
    description?: StringWithAggregatesFilter<"RaffleEdition"> | string
    status?: EnumRaffleEditionStatusWithAggregatesFilter<"RaffleEdition"> | $Enums.RaffleEditionStatus
    total_tickets?: IntWithAggregatesFilter<"RaffleEdition"> | number
    winner_tickets?: IntWithAggregatesFilter<"RaffleEdition"> | number
    raffle_draw_date?: DateTimeWithAggregatesFilter<"RaffleEdition"> | Date | string
    user_id?: StringNullableWithAggregatesFilter<"RaffleEdition"> | string | null
    userId?: StringNullableWithAggregatesFilter<"RaffleEdition"> | string | null
  }

  export type PrizeWhereInput = {
    AND?: PrizeWhereInput | PrizeWhereInput[]
    OR?: PrizeWhereInput[]
    NOT?: PrizeWhereInput | PrizeWhereInput[]
    id?: StringFilter<"Prize"> | string
    prize_name?: StringFilter<"Prize"> | string
    prize_quantity?: IntFilter<"Prize"> | number
    TicketRaffle?: TicketRaffleListRelationFilter
  }

  export type PrizeOrderByWithRelationInput = {
    id?: SortOrder
    prize_name?: SortOrder
    prize_quantity?: SortOrder
    TicketRaffle?: TicketRaffleOrderByRelationAggregateInput
  }

  export type PrizeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrizeWhereInput | PrizeWhereInput[]
    OR?: PrizeWhereInput[]
    NOT?: PrizeWhereInput | PrizeWhereInput[]
    prize_name?: StringFilter<"Prize"> | string
    prize_quantity?: IntFilter<"Prize"> | number
    TicketRaffle?: TicketRaffleListRelationFilter
  }, "id">

  export type PrizeOrderByWithAggregationInput = {
    id?: SortOrder
    prize_name?: SortOrder
    prize_quantity?: SortOrder
    _count?: PrizeCountOrderByAggregateInput
    _avg?: PrizeAvgOrderByAggregateInput
    _max?: PrizeMaxOrderByAggregateInput
    _min?: PrizeMinOrderByAggregateInput
    _sum?: PrizeSumOrderByAggregateInput
  }

  export type PrizeScalarWhereWithAggregatesInput = {
    AND?: PrizeScalarWhereWithAggregatesInput | PrizeScalarWhereWithAggregatesInput[]
    OR?: PrizeScalarWhereWithAggregatesInput[]
    NOT?: PrizeScalarWhereWithAggregatesInput | PrizeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prize"> | string
    prize_name?: StringWithAggregatesFilter<"Prize"> | string
    prize_quantity?: IntWithAggregatesFilter<"Prize"> | number
  }

  export type TicketRaffleWhereInput = {
    AND?: TicketRaffleWhereInput | TicketRaffleWhereInput[]
    OR?: TicketRaffleWhereInput[]
    NOT?: TicketRaffleWhereInput | TicketRaffleWhereInput[]
    id?: StringFilter<"TicketRaffle"> | string
    raffle_number?: BigIntFilter<"TicketRaffle"> | bigint | number
    price?: BigIntFilter<"TicketRaffle"> | bigint | number
    status?: EnumTicketRaffleStatusFilter<"TicketRaffle"> | $Enums.TicketRaffleStatus
    prize_id?: StringFilter<"TicketRaffle"> | string
    raffle_edition_id?: StringFilter<"TicketRaffle"> | string
    prize?: XOR<PrizeScalarRelationFilter, PrizeWhereInput>
    raffle_edition?: XOR<RaffleEditionScalarRelationFilter, RaffleEditionWhereInput>
    ticket_payment?: TicketPaymentListRelationFilter
  }

  export type TicketRaffleOrderByWithRelationInput = {
    id?: SortOrder
    raffle_number?: SortOrder
    price?: SortOrder
    status?: SortOrder
    prize_id?: SortOrder
    raffle_edition_id?: SortOrder
    prize?: PrizeOrderByWithRelationInput
    raffle_edition?: RaffleEditionOrderByWithRelationInput
    ticket_payment?: TicketPaymentOrderByRelationAggregateInput
  }

  export type TicketRaffleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketRaffleWhereInput | TicketRaffleWhereInput[]
    OR?: TicketRaffleWhereInput[]
    NOT?: TicketRaffleWhereInput | TicketRaffleWhereInput[]
    raffle_number?: BigIntFilter<"TicketRaffle"> | bigint | number
    price?: BigIntFilter<"TicketRaffle"> | bigint | number
    status?: EnumTicketRaffleStatusFilter<"TicketRaffle"> | $Enums.TicketRaffleStatus
    prize_id?: StringFilter<"TicketRaffle"> | string
    raffle_edition_id?: StringFilter<"TicketRaffle"> | string
    prize?: XOR<PrizeScalarRelationFilter, PrizeWhereInput>
    raffle_edition?: XOR<RaffleEditionScalarRelationFilter, RaffleEditionWhereInput>
    ticket_payment?: TicketPaymentListRelationFilter
  }, "id">

  export type TicketRaffleOrderByWithAggregationInput = {
    id?: SortOrder
    raffle_number?: SortOrder
    price?: SortOrder
    status?: SortOrder
    prize_id?: SortOrder
    raffle_edition_id?: SortOrder
    _count?: TicketRaffleCountOrderByAggregateInput
    _avg?: TicketRaffleAvgOrderByAggregateInput
    _max?: TicketRaffleMaxOrderByAggregateInput
    _min?: TicketRaffleMinOrderByAggregateInput
    _sum?: TicketRaffleSumOrderByAggregateInput
  }

  export type TicketRaffleScalarWhereWithAggregatesInput = {
    AND?: TicketRaffleScalarWhereWithAggregatesInput | TicketRaffleScalarWhereWithAggregatesInput[]
    OR?: TicketRaffleScalarWhereWithAggregatesInput[]
    NOT?: TicketRaffleScalarWhereWithAggregatesInput | TicketRaffleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketRaffle"> | string
    raffle_number?: BigIntWithAggregatesFilter<"TicketRaffle"> | bigint | number
    price?: BigIntWithAggregatesFilter<"TicketRaffle"> | bigint | number
    status?: EnumTicketRaffleStatusWithAggregatesFilter<"TicketRaffle"> | $Enums.TicketRaffleStatus
    prize_id?: StringWithAggregatesFilter<"TicketRaffle"> | string
    raffle_edition_id?: StringWithAggregatesFilter<"TicketRaffle"> | string
  }

  export type TicketPaymentWhereInput = {
    AND?: TicketPaymentWhereInput | TicketPaymentWhereInput[]
    OR?: TicketPaymentWhereInput[]
    NOT?: TicketPaymentWhereInput | TicketPaymentWhereInput[]
    id?: StringFilter<"TicketPayment"> | string
    ticket_amount?: IntFilter<"TicketPayment"> | number
    total_value?: BigIntFilter<"TicketPayment"> | bigint | number
    name?: StringFilter<"TicketPayment"> | string
    cpf?: StringFilter<"TicketPayment"> | string
    email?: StringFilter<"TicketPayment"> | string
    number?: StringNullableFilter<"TicketPayment"> | string | null
    ticket_raffle?: TicketRaffleListRelationFilter
    Extract?: ExtractListRelationFilter
  }

  export type TicketPaymentOrderByWithRelationInput = {
    id?: SortOrder
    ticket_amount?: SortOrder
    total_value?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    number?: SortOrderInput | SortOrder
    ticket_raffle?: TicketRaffleOrderByRelationAggregateInput
    Extract?: ExtractOrderByRelationAggregateInput
  }

  export type TicketPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketPaymentWhereInput | TicketPaymentWhereInput[]
    OR?: TicketPaymentWhereInput[]
    NOT?: TicketPaymentWhereInput | TicketPaymentWhereInput[]
    ticket_amount?: IntFilter<"TicketPayment"> | number
    total_value?: BigIntFilter<"TicketPayment"> | bigint | number
    name?: StringFilter<"TicketPayment"> | string
    cpf?: StringFilter<"TicketPayment"> | string
    email?: StringFilter<"TicketPayment"> | string
    number?: StringNullableFilter<"TicketPayment"> | string | null
    ticket_raffle?: TicketRaffleListRelationFilter
    Extract?: ExtractListRelationFilter
  }, "id">

  export type TicketPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    ticket_amount?: SortOrder
    total_value?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    number?: SortOrderInput | SortOrder
    _count?: TicketPaymentCountOrderByAggregateInput
    _avg?: TicketPaymentAvgOrderByAggregateInput
    _max?: TicketPaymentMaxOrderByAggregateInput
    _min?: TicketPaymentMinOrderByAggregateInput
    _sum?: TicketPaymentSumOrderByAggregateInput
  }

  export type TicketPaymentScalarWhereWithAggregatesInput = {
    AND?: TicketPaymentScalarWhereWithAggregatesInput | TicketPaymentScalarWhereWithAggregatesInput[]
    OR?: TicketPaymentScalarWhereWithAggregatesInput[]
    NOT?: TicketPaymentScalarWhereWithAggregatesInput | TicketPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketPayment"> | string
    ticket_amount?: IntWithAggregatesFilter<"TicketPayment"> | number
    total_value?: BigIntWithAggregatesFilter<"TicketPayment"> | bigint | number
    name?: StringWithAggregatesFilter<"TicketPayment"> | string
    cpf?: StringWithAggregatesFilter<"TicketPayment"> | string
    email?: StringWithAggregatesFilter<"TicketPayment"> | string
    number?: StringNullableWithAggregatesFilter<"TicketPayment"> | string | null
  }

  export type ExtractWhereInput = {
    AND?: ExtractWhereInput | ExtractWhereInput[]
    OR?: ExtractWhereInput[]
    NOT?: ExtractWhereInput | ExtractWhereInput[]
    id?: StringFilter<"Extract"> | string
    amount?: BigIntFilter<"Extract"> | bigint | number
    type?: EnumExtractTypeFilter<"Extract"> | $Enums.ExtractType
    ticket_payment_id?: StringNullableFilter<"Extract"> | string | null
    ticket_payment?: XOR<TicketPaymentNullableScalarRelationFilter, TicketPaymentWhereInput> | null
  }

  export type ExtractOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    ticket_payment_id?: SortOrderInput | SortOrder
    ticket_payment?: TicketPaymentOrderByWithRelationInput
  }

  export type ExtractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExtractWhereInput | ExtractWhereInput[]
    OR?: ExtractWhereInput[]
    NOT?: ExtractWhereInput | ExtractWhereInput[]
    amount?: BigIntFilter<"Extract"> | bigint | number
    type?: EnumExtractTypeFilter<"Extract"> | $Enums.ExtractType
    ticket_payment_id?: StringNullableFilter<"Extract"> | string | null
    ticket_payment?: XOR<TicketPaymentNullableScalarRelationFilter, TicketPaymentWhereInput> | null
  }, "id">

  export type ExtractOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    ticket_payment_id?: SortOrderInput | SortOrder
    _count?: ExtractCountOrderByAggregateInput
    _avg?: ExtractAvgOrderByAggregateInput
    _max?: ExtractMaxOrderByAggregateInput
    _min?: ExtractMinOrderByAggregateInput
    _sum?: ExtractSumOrderByAggregateInput
  }

  export type ExtractScalarWhereWithAggregatesInput = {
    AND?: ExtractScalarWhereWithAggregatesInput | ExtractScalarWhereWithAggregatesInput[]
    OR?: ExtractScalarWhereWithAggregatesInput[]
    NOT?: ExtractScalarWhereWithAggregatesInput | ExtractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Extract"> | string
    amount?: BigIntWithAggregatesFilter<"Extract"> | bigint | number
    type?: EnumExtractTypeWithAggregatesFilter<"Extract"> | $Enums.ExtractType
    ticket_payment_id?: StringNullableWithAggregatesFilter<"Extract"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    cpf: string
    email: string
    number: string
    social_media?: string | null
    saldo?: bigint | number
    hashed_password: string
    comissao: Decimal | DecimalJsLike | number | string
    profile: $Enums.Profiles
    owner?: UserCreateNestedOneWithoutSub_usersInput
    sub_users?: UserCreateNestedManyWithoutOwnerInput
    raffle_editions?: RaffleEditionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    cpf: string
    email: string
    number: string
    social_media?: string | null
    saldo?: bigint | number
    hashed_password: string
    comissao: Decimal | DecimalJsLike | number | string
    profile: $Enums.Profiles
    owner_id?: string | null
    sub_users?: UserUncheckedCreateNestedManyWithoutOwnerInput
    raffle_editions?: RaffleEditionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    social_media?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: BigIntFieldUpdateOperationsInput | bigint | number
    hashed_password?: StringFieldUpdateOperationsInput | string
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles
    owner?: UserUpdateOneWithoutSub_usersNestedInput
    sub_users?: UserUpdateManyWithoutOwnerNestedInput
    raffle_editions?: RaffleEditionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    social_media?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: BigIntFieldUpdateOperationsInput | bigint | number
    hashed_password?: StringFieldUpdateOperationsInput | string
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    sub_users?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    raffle_editions?: RaffleEditionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    cpf: string
    email: string
    number: string
    social_media?: string | null
    saldo?: bigint | number
    hashed_password: string
    comissao: Decimal | DecimalJsLike | number | string
    profile: $Enums.Profiles
    owner_id?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    social_media?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: BigIntFieldUpdateOperationsInput | bigint | number
    hashed_password?: StringFieldUpdateOperationsInput | string
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    social_media?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: BigIntFieldUpdateOperationsInput | bigint | number
    hashed_password?: StringFieldUpdateOperationsInput | string
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaffleEditionCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.RaffleEditionStatus
    total_tickets: number
    winner_tickets: number
    raffle_draw_date: Date | string
    user_id?: string | null
    User?: UserCreateNestedOneWithoutRaffle_editionsInput
    TicketRaffle?: TicketRaffleCreateNestedManyWithoutRaffle_editionInput
  }

  export type RaffleEditionUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.RaffleEditionStatus
    total_tickets: number
    winner_tickets: number
    raffle_draw_date: Date | string
    user_id?: string | null
    userId?: string | null
    TicketRaffle?: TicketRaffleUncheckedCreateNestedManyWithoutRaffle_editionInput
  }

  export type RaffleEditionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRaffleEditionStatusFieldUpdateOperationsInput | $Enums.RaffleEditionStatus
    total_tickets?: IntFieldUpdateOperationsInput | number
    winner_tickets?: IntFieldUpdateOperationsInput | number
    raffle_draw_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutRaffle_editionsNestedInput
    TicketRaffle?: TicketRaffleUpdateManyWithoutRaffle_editionNestedInput
  }

  export type RaffleEditionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRaffleEditionStatusFieldUpdateOperationsInput | $Enums.RaffleEditionStatus
    total_tickets?: IntFieldUpdateOperationsInput | number
    winner_tickets?: IntFieldUpdateOperationsInput | number
    raffle_draw_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    TicketRaffle?: TicketRaffleUncheckedUpdateManyWithoutRaffle_editionNestedInput
  }

  export type RaffleEditionCreateManyInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.RaffleEditionStatus
    total_tickets: number
    winner_tickets: number
    raffle_draw_date: Date | string
    user_id?: string | null
    userId?: string | null
  }

  export type RaffleEditionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRaffleEditionStatusFieldUpdateOperationsInput | $Enums.RaffleEditionStatus
    total_tickets?: IntFieldUpdateOperationsInput | number
    winner_tickets?: IntFieldUpdateOperationsInput | number
    raffle_draw_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaffleEditionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRaffleEditionStatusFieldUpdateOperationsInput | $Enums.RaffleEditionStatus
    total_tickets?: IntFieldUpdateOperationsInput | number
    winner_tickets?: IntFieldUpdateOperationsInput | number
    raffle_draw_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrizeCreateInput = {
    id?: string
    prize_name: string
    prize_quantity: number
    TicketRaffle?: TicketRaffleCreateNestedManyWithoutPrizeInput
  }

  export type PrizeUncheckedCreateInput = {
    id?: string
    prize_name: string
    prize_quantity: number
    TicketRaffle?: TicketRaffleUncheckedCreateNestedManyWithoutPrizeInput
  }

  export type PrizeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prize_name?: StringFieldUpdateOperationsInput | string
    prize_quantity?: IntFieldUpdateOperationsInput | number
    TicketRaffle?: TicketRaffleUpdateManyWithoutPrizeNestedInput
  }

  export type PrizeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prize_name?: StringFieldUpdateOperationsInput | string
    prize_quantity?: IntFieldUpdateOperationsInput | number
    TicketRaffle?: TicketRaffleUncheckedUpdateManyWithoutPrizeNestedInput
  }

  export type PrizeCreateManyInput = {
    id?: string
    prize_name: string
    prize_quantity: number
  }

  export type PrizeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prize_name?: StringFieldUpdateOperationsInput | string
    prize_quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PrizeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prize_name?: StringFieldUpdateOperationsInput | string
    prize_quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TicketRaffleCreateInput = {
    id?: string
    raffle_number: bigint | number
    price: bigint | number
    status?: $Enums.TicketRaffleStatus
    prize: PrizeCreateNestedOneWithoutTicketRaffleInput
    raffle_edition: RaffleEditionCreateNestedOneWithoutTicketRaffleInput
    ticket_payment?: TicketPaymentCreateNestedManyWithoutTicket_raffleInput
  }

  export type TicketRaffleUncheckedCreateInput = {
    id?: string
    raffle_number: bigint | number
    price: bigint | number
    status?: $Enums.TicketRaffleStatus
    prize_id: string
    raffle_edition_id: string
    ticket_payment?: TicketPaymentUncheckedCreateNestedManyWithoutTicket_raffleInput
  }

  export type TicketRaffleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
    prize?: PrizeUpdateOneRequiredWithoutTicketRaffleNestedInput
    raffle_edition?: RaffleEditionUpdateOneRequiredWithoutTicketRaffleNestedInput
    ticket_payment?: TicketPaymentUpdateManyWithoutTicket_raffleNestedInput
  }

  export type TicketRaffleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
    prize_id?: StringFieldUpdateOperationsInput | string
    raffle_edition_id?: StringFieldUpdateOperationsInput | string
    ticket_payment?: TicketPaymentUncheckedUpdateManyWithoutTicket_raffleNestedInput
  }

  export type TicketRaffleCreateManyInput = {
    id?: string
    raffle_number: bigint | number
    price: bigint | number
    status?: $Enums.TicketRaffleStatus
    prize_id: string
    raffle_edition_id: string
  }

  export type TicketRaffleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
  }

  export type TicketRaffleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
    prize_id?: StringFieldUpdateOperationsInput | string
    raffle_edition_id?: StringFieldUpdateOperationsInput | string
  }

  export type TicketPaymentCreateInput = {
    id?: string
    ticket_amount: number
    total_value?: bigint | number
    name: string
    cpf: string
    email: string
    number?: string | null
    ticket_raffle?: TicketRaffleCreateNestedManyWithoutTicket_paymentInput
    Extract?: ExtractCreateNestedManyWithoutTicket_paymentInput
  }

  export type TicketPaymentUncheckedCreateInput = {
    id?: string
    ticket_amount: number
    total_value?: bigint | number
    name: string
    cpf: string
    email: string
    number?: string | null
    ticket_raffle?: TicketRaffleUncheckedCreateNestedManyWithoutTicket_paymentInput
    Extract?: ExtractUncheckedCreateNestedManyWithoutTicket_paymentInput
  }

  export type TicketPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_amount?: IntFieldUpdateOperationsInput | number
    total_value?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_raffle?: TicketRaffleUpdateManyWithoutTicket_paymentNestedInput
    Extract?: ExtractUpdateManyWithoutTicket_paymentNestedInput
  }

  export type TicketPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_amount?: IntFieldUpdateOperationsInput | number
    total_value?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_raffle?: TicketRaffleUncheckedUpdateManyWithoutTicket_paymentNestedInput
    Extract?: ExtractUncheckedUpdateManyWithoutTicket_paymentNestedInput
  }

  export type TicketPaymentCreateManyInput = {
    id?: string
    ticket_amount: number
    total_value?: bigint | number
    name: string
    cpf: string
    email: string
    number?: string | null
  }

  export type TicketPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_amount?: IntFieldUpdateOperationsInput | number
    total_value?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_amount?: IntFieldUpdateOperationsInput | number
    total_value?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExtractCreateInput = {
    id?: string
    amount: bigint | number
    type: $Enums.ExtractType
    ticket_payment?: TicketPaymentCreateNestedOneWithoutExtractInput
  }

  export type ExtractUncheckedCreateInput = {
    id?: string
    amount: bigint | number
    type: $Enums.ExtractType
    ticket_payment_id?: string | null
  }

  export type ExtractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
    ticket_payment?: TicketPaymentUpdateOneWithoutExtractNestedInput
  }

  export type ExtractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
    ticket_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExtractCreateManyInput = {
    id?: string
    amount: bigint | number
    type: $Enums.ExtractType
    ticket_payment_id?: string | null
  }

  export type ExtractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
  }

  export type ExtractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
    ticket_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumProfilesFilter<$PrismaModel = never> = {
    equals?: $Enums.Profiles | EnumProfilesFieldRefInput<$PrismaModel>
    in?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>
    not?: NestedEnumProfilesFilter<$PrismaModel> | $Enums.Profiles
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type RaffleEditionListRelationFilter = {
    every?: RaffleEditionWhereInput
    some?: RaffleEditionWhereInput
    none?: RaffleEditionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaffleEditionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    number?: SortOrder
    social_media?: SortOrder
    saldo?: SortOrder
    hashed_password?: SortOrder
    comissao?: SortOrder
    profile?: SortOrder
    owner_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    saldo?: SortOrder
    comissao?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    number?: SortOrder
    social_media?: SortOrder
    saldo?: SortOrder
    hashed_password?: SortOrder
    comissao?: SortOrder
    profile?: SortOrder
    owner_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    number?: SortOrder
    social_media?: SortOrder
    saldo?: SortOrder
    hashed_password?: SortOrder
    comissao?: SortOrder
    profile?: SortOrder
    owner_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    saldo?: SortOrder
    comissao?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumProfilesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Profiles | EnumProfilesFieldRefInput<$PrismaModel>
    in?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>
    not?: NestedEnumProfilesWithAggregatesFilter<$PrismaModel> | $Enums.Profiles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProfilesFilter<$PrismaModel>
    _max?: NestedEnumProfilesFilter<$PrismaModel>
  }

  export type EnumRaffleEditionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RaffleEditionStatus | EnumRaffleEditionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaffleEditionStatus[] | ListEnumRaffleEditionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaffleEditionStatus[] | ListEnumRaffleEditionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaffleEditionStatusFilter<$PrismaModel> | $Enums.RaffleEditionStatus
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

  export type TicketRaffleListRelationFilter = {
    every?: TicketRaffleWhereInput
    some?: TicketRaffleWhereInput
    none?: TicketRaffleWhereInput
  }

  export type TicketRaffleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaffleEditionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    total_tickets?: SortOrder
    winner_tickets?: SortOrder
    raffle_draw_date?: SortOrder
    user_id?: SortOrder
    userId?: SortOrder
  }

  export type RaffleEditionAvgOrderByAggregateInput = {
    total_tickets?: SortOrder
    winner_tickets?: SortOrder
  }

  export type RaffleEditionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    total_tickets?: SortOrder
    winner_tickets?: SortOrder
    raffle_draw_date?: SortOrder
    user_id?: SortOrder
    userId?: SortOrder
  }

  export type RaffleEditionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    total_tickets?: SortOrder
    winner_tickets?: SortOrder
    raffle_draw_date?: SortOrder
    user_id?: SortOrder
    userId?: SortOrder
  }

  export type RaffleEditionSumOrderByAggregateInput = {
    total_tickets?: SortOrder
    winner_tickets?: SortOrder
  }

  export type EnumRaffleEditionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RaffleEditionStatus | EnumRaffleEditionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaffleEditionStatus[] | ListEnumRaffleEditionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaffleEditionStatus[] | ListEnumRaffleEditionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaffleEditionStatusWithAggregatesFilter<$PrismaModel> | $Enums.RaffleEditionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRaffleEditionStatusFilter<$PrismaModel>
    _max?: NestedEnumRaffleEditionStatusFilter<$PrismaModel>
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

  export type PrizeCountOrderByAggregateInput = {
    id?: SortOrder
    prize_name?: SortOrder
    prize_quantity?: SortOrder
  }

  export type PrizeAvgOrderByAggregateInput = {
    prize_quantity?: SortOrder
  }

  export type PrizeMaxOrderByAggregateInput = {
    id?: SortOrder
    prize_name?: SortOrder
    prize_quantity?: SortOrder
  }

  export type PrizeMinOrderByAggregateInput = {
    id?: SortOrder
    prize_name?: SortOrder
    prize_quantity?: SortOrder
  }

  export type PrizeSumOrderByAggregateInput = {
    prize_quantity?: SortOrder
  }

  export type EnumTicketRaffleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketRaffleStatus | EnumTicketRaffleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketRaffleStatus[] | ListEnumTicketRaffleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketRaffleStatus[] | ListEnumTicketRaffleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketRaffleStatusFilter<$PrismaModel> | $Enums.TicketRaffleStatus
  }

  export type PrizeScalarRelationFilter = {
    is?: PrizeWhereInput
    isNot?: PrizeWhereInput
  }

  export type RaffleEditionScalarRelationFilter = {
    is?: RaffleEditionWhereInput
    isNot?: RaffleEditionWhereInput
  }

  export type TicketPaymentListRelationFilter = {
    every?: TicketPaymentWhereInput
    some?: TicketPaymentWhereInput
    none?: TicketPaymentWhereInput
  }

  export type TicketPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketRaffleCountOrderByAggregateInput = {
    id?: SortOrder
    raffle_number?: SortOrder
    price?: SortOrder
    status?: SortOrder
    prize_id?: SortOrder
    raffle_edition_id?: SortOrder
  }

  export type TicketRaffleAvgOrderByAggregateInput = {
    raffle_number?: SortOrder
    price?: SortOrder
  }

  export type TicketRaffleMaxOrderByAggregateInput = {
    id?: SortOrder
    raffle_number?: SortOrder
    price?: SortOrder
    status?: SortOrder
    prize_id?: SortOrder
    raffle_edition_id?: SortOrder
  }

  export type TicketRaffleMinOrderByAggregateInput = {
    id?: SortOrder
    raffle_number?: SortOrder
    price?: SortOrder
    status?: SortOrder
    prize_id?: SortOrder
    raffle_edition_id?: SortOrder
  }

  export type TicketRaffleSumOrderByAggregateInput = {
    raffle_number?: SortOrder
    price?: SortOrder
  }

  export type EnumTicketRaffleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketRaffleStatus | EnumTicketRaffleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketRaffleStatus[] | ListEnumTicketRaffleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketRaffleStatus[] | ListEnumTicketRaffleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketRaffleStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketRaffleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketRaffleStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketRaffleStatusFilter<$PrismaModel>
  }

  export type ExtractListRelationFilter = {
    every?: ExtractWhereInput
    some?: ExtractWhereInput
    none?: ExtractWhereInput
  }

  export type ExtractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    ticket_amount?: SortOrder
    total_value?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    number?: SortOrder
  }

  export type TicketPaymentAvgOrderByAggregateInput = {
    ticket_amount?: SortOrder
    total_value?: SortOrder
  }

  export type TicketPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    ticket_amount?: SortOrder
    total_value?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    number?: SortOrder
  }

  export type TicketPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    ticket_amount?: SortOrder
    total_value?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    number?: SortOrder
  }

  export type TicketPaymentSumOrderByAggregateInput = {
    ticket_amount?: SortOrder
    total_value?: SortOrder
  }

  export type EnumExtractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractType | EnumExtractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExtractTypeFilter<$PrismaModel> | $Enums.ExtractType
  }

  export type TicketPaymentNullableScalarRelationFilter = {
    is?: TicketPaymentWhereInput | null
    isNot?: TicketPaymentWhereInput | null
  }

  export type ExtractCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    ticket_payment_id?: SortOrder
  }

  export type ExtractAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExtractMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    ticket_payment_id?: SortOrder
  }

  export type ExtractMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    ticket_payment_id?: SortOrder
  }

  export type ExtractSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumExtractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractType | EnumExtractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExtractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExtractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExtractTypeFilter<$PrismaModel>
    _max?: NestedEnumExtractTypeFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutSub_usersInput = {
    create?: XOR<UserCreateWithoutSub_usersInput, UserUncheckedCreateWithoutSub_usersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSub_usersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UserCreateWithoutOwnerInput, UserUncheckedCreateWithoutOwnerInput> | UserCreateWithoutOwnerInput[] | UserUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOwnerInput | UserCreateOrConnectWithoutOwnerInput[]
    createMany?: UserCreateManyOwnerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RaffleEditionCreateNestedManyWithoutUserInput = {
    create?: XOR<RaffleEditionCreateWithoutUserInput, RaffleEditionUncheckedCreateWithoutUserInput> | RaffleEditionCreateWithoutUserInput[] | RaffleEditionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaffleEditionCreateOrConnectWithoutUserInput | RaffleEditionCreateOrConnectWithoutUserInput[]
    createMany?: RaffleEditionCreateManyUserInputEnvelope
    connect?: RaffleEditionWhereUniqueInput | RaffleEditionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UserCreateWithoutOwnerInput, UserUncheckedCreateWithoutOwnerInput> | UserCreateWithoutOwnerInput[] | UserUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOwnerInput | UserCreateOrConnectWithoutOwnerInput[]
    createMany?: UserCreateManyOwnerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RaffleEditionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RaffleEditionCreateWithoutUserInput, RaffleEditionUncheckedCreateWithoutUserInput> | RaffleEditionCreateWithoutUserInput[] | RaffleEditionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaffleEditionCreateOrConnectWithoutUserInput | RaffleEditionCreateOrConnectWithoutUserInput[]
    createMany?: RaffleEditionCreateManyUserInputEnvelope
    connect?: RaffleEditionWhereUniqueInput | RaffleEditionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumProfilesFieldUpdateOperationsInput = {
    set?: $Enums.Profiles
  }

  export type UserUpdateOneWithoutSub_usersNestedInput = {
    create?: XOR<UserCreateWithoutSub_usersInput, UserUncheckedCreateWithoutSub_usersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSub_usersInput
    upsert?: UserUpsertWithoutSub_usersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSub_usersInput, UserUpdateWithoutSub_usersInput>, UserUncheckedUpdateWithoutSub_usersInput>
  }

  export type UserUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UserCreateWithoutOwnerInput, UserUncheckedCreateWithoutOwnerInput> | UserCreateWithoutOwnerInput[] | UserUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOwnerInput | UserCreateOrConnectWithoutOwnerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOwnerInput | UserUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: UserCreateManyOwnerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOwnerInput | UserUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOwnerInput | UserUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RaffleEditionUpdateManyWithoutUserNestedInput = {
    create?: XOR<RaffleEditionCreateWithoutUserInput, RaffleEditionUncheckedCreateWithoutUserInput> | RaffleEditionCreateWithoutUserInput[] | RaffleEditionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaffleEditionCreateOrConnectWithoutUserInput | RaffleEditionCreateOrConnectWithoutUserInput[]
    upsert?: RaffleEditionUpsertWithWhereUniqueWithoutUserInput | RaffleEditionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RaffleEditionCreateManyUserInputEnvelope
    set?: RaffleEditionWhereUniqueInput | RaffleEditionWhereUniqueInput[]
    disconnect?: RaffleEditionWhereUniqueInput | RaffleEditionWhereUniqueInput[]
    delete?: RaffleEditionWhereUniqueInput | RaffleEditionWhereUniqueInput[]
    connect?: RaffleEditionWhereUniqueInput | RaffleEditionWhereUniqueInput[]
    update?: RaffleEditionUpdateWithWhereUniqueWithoutUserInput | RaffleEditionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RaffleEditionUpdateManyWithWhereWithoutUserInput | RaffleEditionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RaffleEditionScalarWhereInput | RaffleEditionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UserCreateWithoutOwnerInput, UserUncheckedCreateWithoutOwnerInput> | UserCreateWithoutOwnerInput[] | UserUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOwnerInput | UserCreateOrConnectWithoutOwnerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOwnerInput | UserUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: UserCreateManyOwnerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOwnerInput | UserUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOwnerInput | UserUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RaffleEditionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RaffleEditionCreateWithoutUserInput, RaffleEditionUncheckedCreateWithoutUserInput> | RaffleEditionCreateWithoutUserInput[] | RaffleEditionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaffleEditionCreateOrConnectWithoutUserInput | RaffleEditionCreateOrConnectWithoutUserInput[]
    upsert?: RaffleEditionUpsertWithWhereUniqueWithoutUserInput | RaffleEditionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RaffleEditionCreateManyUserInputEnvelope
    set?: RaffleEditionWhereUniqueInput | RaffleEditionWhereUniqueInput[]
    disconnect?: RaffleEditionWhereUniqueInput | RaffleEditionWhereUniqueInput[]
    delete?: RaffleEditionWhereUniqueInput | RaffleEditionWhereUniqueInput[]
    connect?: RaffleEditionWhereUniqueInput | RaffleEditionWhereUniqueInput[]
    update?: RaffleEditionUpdateWithWhereUniqueWithoutUserInput | RaffleEditionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RaffleEditionUpdateManyWithWhereWithoutUserInput | RaffleEditionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RaffleEditionScalarWhereInput | RaffleEditionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRaffle_editionsInput = {
    create?: XOR<UserCreateWithoutRaffle_editionsInput, UserUncheckedCreateWithoutRaffle_editionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRaffle_editionsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketRaffleCreateNestedManyWithoutRaffle_editionInput = {
    create?: XOR<TicketRaffleCreateWithoutRaffle_editionInput, TicketRaffleUncheckedCreateWithoutRaffle_editionInput> | TicketRaffleCreateWithoutRaffle_editionInput[] | TicketRaffleUncheckedCreateWithoutRaffle_editionInput[]
    connectOrCreate?: TicketRaffleCreateOrConnectWithoutRaffle_editionInput | TicketRaffleCreateOrConnectWithoutRaffle_editionInput[]
    createMany?: TicketRaffleCreateManyRaffle_editionInputEnvelope
    connect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
  }

  export type TicketRaffleUncheckedCreateNestedManyWithoutRaffle_editionInput = {
    create?: XOR<TicketRaffleCreateWithoutRaffle_editionInput, TicketRaffleUncheckedCreateWithoutRaffle_editionInput> | TicketRaffleCreateWithoutRaffle_editionInput[] | TicketRaffleUncheckedCreateWithoutRaffle_editionInput[]
    connectOrCreate?: TicketRaffleCreateOrConnectWithoutRaffle_editionInput | TicketRaffleCreateOrConnectWithoutRaffle_editionInput[]
    createMany?: TicketRaffleCreateManyRaffle_editionInputEnvelope
    connect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
  }

  export type EnumRaffleEditionStatusFieldUpdateOperationsInput = {
    set?: $Enums.RaffleEditionStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutRaffle_editionsNestedInput = {
    create?: XOR<UserCreateWithoutRaffle_editionsInput, UserUncheckedCreateWithoutRaffle_editionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRaffle_editionsInput
    upsert?: UserUpsertWithoutRaffle_editionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRaffle_editionsInput, UserUpdateWithoutRaffle_editionsInput>, UserUncheckedUpdateWithoutRaffle_editionsInput>
  }

  export type TicketRaffleUpdateManyWithoutRaffle_editionNestedInput = {
    create?: XOR<TicketRaffleCreateWithoutRaffle_editionInput, TicketRaffleUncheckedCreateWithoutRaffle_editionInput> | TicketRaffleCreateWithoutRaffle_editionInput[] | TicketRaffleUncheckedCreateWithoutRaffle_editionInput[]
    connectOrCreate?: TicketRaffleCreateOrConnectWithoutRaffle_editionInput | TicketRaffleCreateOrConnectWithoutRaffle_editionInput[]
    upsert?: TicketRaffleUpsertWithWhereUniqueWithoutRaffle_editionInput | TicketRaffleUpsertWithWhereUniqueWithoutRaffle_editionInput[]
    createMany?: TicketRaffleCreateManyRaffle_editionInputEnvelope
    set?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    disconnect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    delete?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    connect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    update?: TicketRaffleUpdateWithWhereUniqueWithoutRaffle_editionInput | TicketRaffleUpdateWithWhereUniqueWithoutRaffle_editionInput[]
    updateMany?: TicketRaffleUpdateManyWithWhereWithoutRaffle_editionInput | TicketRaffleUpdateManyWithWhereWithoutRaffle_editionInput[]
    deleteMany?: TicketRaffleScalarWhereInput | TicketRaffleScalarWhereInput[]
  }

  export type TicketRaffleUncheckedUpdateManyWithoutRaffle_editionNestedInput = {
    create?: XOR<TicketRaffleCreateWithoutRaffle_editionInput, TicketRaffleUncheckedCreateWithoutRaffle_editionInput> | TicketRaffleCreateWithoutRaffle_editionInput[] | TicketRaffleUncheckedCreateWithoutRaffle_editionInput[]
    connectOrCreate?: TicketRaffleCreateOrConnectWithoutRaffle_editionInput | TicketRaffleCreateOrConnectWithoutRaffle_editionInput[]
    upsert?: TicketRaffleUpsertWithWhereUniqueWithoutRaffle_editionInput | TicketRaffleUpsertWithWhereUniqueWithoutRaffle_editionInput[]
    createMany?: TicketRaffleCreateManyRaffle_editionInputEnvelope
    set?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    disconnect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    delete?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    connect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    update?: TicketRaffleUpdateWithWhereUniqueWithoutRaffle_editionInput | TicketRaffleUpdateWithWhereUniqueWithoutRaffle_editionInput[]
    updateMany?: TicketRaffleUpdateManyWithWhereWithoutRaffle_editionInput | TicketRaffleUpdateManyWithWhereWithoutRaffle_editionInput[]
    deleteMany?: TicketRaffleScalarWhereInput | TicketRaffleScalarWhereInput[]
  }

  export type TicketRaffleCreateNestedManyWithoutPrizeInput = {
    create?: XOR<TicketRaffleCreateWithoutPrizeInput, TicketRaffleUncheckedCreateWithoutPrizeInput> | TicketRaffleCreateWithoutPrizeInput[] | TicketRaffleUncheckedCreateWithoutPrizeInput[]
    connectOrCreate?: TicketRaffleCreateOrConnectWithoutPrizeInput | TicketRaffleCreateOrConnectWithoutPrizeInput[]
    createMany?: TicketRaffleCreateManyPrizeInputEnvelope
    connect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
  }

  export type TicketRaffleUncheckedCreateNestedManyWithoutPrizeInput = {
    create?: XOR<TicketRaffleCreateWithoutPrizeInput, TicketRaffleUncheckedCreateWithoutPrizeInput> | TicketRaffleCreateWithoutPrizeInput[] | TicketRaffleUncheckedCreateWithoutPrizeInput[]
    connectOrCreate?: TicketRaffleCreateOrConnectWithoutPrizeInput | TicketRaffleCreateOrConnectWithoutPrizeInput[]
    createMany?: TicketRaffleCreateManyPrizeInputEnvelope
    connect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
  }

  export type TicketRaffleUpdateManyWithoutPrizeNestedInput = {
    create?: XOR<TicketRaffleCreateWithoutPrizeInput, TicketRaffleUncheckedCreateWithoutPrizeInput> | TicketRaffleCreateWithoutPrizeInput[] | TicketRaffleUncheckedCreateWithoutPrizeInput[]
    connectOrCreate?: TicketRaffleCreateOrConnectWithoutPrizeInput | TicketRaffleCreateOrConnectWithoutPrizeInput[]
    upsert?: TicketRaffleUpsertWithWhereUniqueWithoutPrizeInput | TicketRaffleUpsertWithWhereUniqueWithoutPrizeInput[]
    createMany?: TicketRaffleCreateManyPrizeInputEnvelope
    set?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    disconnect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    delete?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    connect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    update?: TicketRaffleUpdateWithWhereUniqueWithoutPrizeInput | TicketRaffleUpdateWithWhereUniqueWithoutPrizeInput[]
    updateMany?: TicketRaffleUpdateManyWithWhereWithoutPrizeInput | TicketRaffleUpdateManyWithWhereWithoutPrizeInput[]
    deleteMany?: TicketRaffleScalarWhereInput | TicketRaffleScalarWhereInput[]
  }

  export type TicketRaffleUncheckedUpdateManyWithoutPrizeNestedInput = {
    create?: XOR<TicketRaffleCreateWithoutPrizeInput, TicketRaffleUncheckedCreateWithoutPrizeInput> | TicketRaffleCreateWithoutPrizeInput[] | TicketRaffleUncheckedCreateWithoutPrizeInput[]
    connectOrCreate?: TicketRaffleCreateOrConnectWithoutPrizeInput | TicketRaffleCreateOrConnectWithoutPrizeInput[]
    upsert?: TicketRaffleUpsertWithWhereUniqueWithoutPrizeInput | TicketRaffleUpsertWithWhereUniqueWithoutPrizeInput[]
    createMany?: TicketRaffleCreateManyPrizeInputEnvelope
    set?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    disconnect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    delete?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    connect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    update?: TicketRaffleUpdateWithWhereUniqueWithoutPrizeInput | TicketRaffleUpdateWithWhereUniqueWithoutPrizeInput[]
    updateMany?: TicketRaffleUpdateManyWithWhereWithoutPrizeInput | TicketRaffleUpdateManyWithWhereWithoutPrizeInput[]
    deleteMany?: TicketRaffleScalarWhereInput | TicketRaffleScalarWhereInput[]
  }

  export type PrizeCreateNestedOneWithoutTicketRaffleInput = {
    create?: XOR<PrizeCreateWithoutTicketRaffleInput, PrizeUncheckedCreateWithoutTicketRaffleInput>
    connectOrCreate?: PrizeCreateOrConnectWithoutTicketRaffleInput
    connect?: PrizeWhereUniqueInput
  }

  export type RaffleEditionCreateNestedOneWithoutTicketRaffleInput = {
    create?: XOR<RaffleEditionCreateWithoutTicketRaffleInput, RaffleEditionUncheckedCreateWithoutTicketRaffleInput>
    connectOrCreate?: RaffleEditionCreateOrConnectWithoutTicketRaffleInput
    connect?: RaffleEditionWhereUniqueInput
  }

  export type TicketPaymentCreateNestedManyWithoutTicket_raffleInput = {
    create?: XOR<TicketPaymentCreateWithoutTicket_raffleInput, TicketPaymentUncheckedCreateWithoutTicket_raffleInput> | TicketPaymentCreateWithoutTicket_raffleInput[] | TicketPaymentUncheckedCreateWithoutTicket_raffleInput[]
    connectOrCreate?: TicketPaymentCreateOrConnectWithoutTicket_raffleInput | TicketPaymentCreateOrConnectWithoutTicket_raffleInput[]
    connect?: TicketPaymentWhereUniqueInput | TicketPaymentWhereUniqueInput[]
  }

  export type TicketPaymentUncheckedCreateNestedManyWithoutTicket_raffleInput = {
    create?: XOR<TicketPaymentCreateWithoutTicket_raffleInput, TicketPaymentUncheckedCreateWithoutTicket_raffleInput> | TicketPaymentCreateWithoutTicket_raffleInput[] | TicketPaymentUncheckedCreateWithoutTicket_raffleInput[]
    connectOrCreate?: TicketPaymentCreateOrConnectWithoutTicket_raffleInput | TicketPaymentCreateOrConnectWithoutTicket_raffleInput[]
    connect?: TicketPaymentWhereUniqueInput | TicketPaymentWhereUniqueInput[]
  }

  export type EnumTicketRaffleStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketRaffleStatus
  }

  export type PrizeUpdateOneRequiredWithoutTicketRaffleNestedInput = {
    create?: XOR<PrizeCreateWithoutTicketRaffleInput, PrizeUncheckedCreateWithoutTicketRaffleInput>
    connectOrCreate?: PrizeCreateOrConnectWithoutTicketRaffleInput
    upsert?: PrizeUpsertWithoutTicketRaffleInput
    connect?: PrizeWhereUniqueInput
    update?: XOR<XOR<PrizeUpdateToOneWithWhereWithoutTicketRaffleInput, PrizeUpdateWithoutTicketRaffleInput>, PrizeUncheckedUpdateWithoutTicketRaffleInput>
  }

  export type RaffleEditionUpdateOneRequiredWithoutTicketRaffleNestedInput = {
    create?: XOR<RaffleEditionCreateWithoutTicketRaffleInput, RaffleEditionUncheckedCreateWithoutTicketRaffleInput>
    connectOrCreate?: RaffleEditionCreateOrConnectWithoutTicketRaffleInput
    upsert?: RaffleEditionUpsertWithoutTicketRaffleInput
    connect?: RaffleEditionWhereUniqueInput
    update?: XOR<XOR<RaffleEditionUpdateToOneWithWhereWithoutTicketRaffleInput, RaffleEditionUpdateWithoutTicketRaffleInput>, RaffleEditionUncheckedUpdateWithoutTicketRaffleInput>
  }

  export type TicketPaymentUpdateManyWithoutTicket_raffleNestedInput = {
    create?: XOR<TicketPaymentCreateWithoutTicket_raffleInput, TicketPaymentUncheckedCreateWithoutTicket_raffleInput> | TicketPaymentCreateWithoutTicket_raffleInput[] | TicketPaymentUncheckedCreateWithoutTicket_raffleInput[]
    connectOrCreate?: TicketPaymentCreateOrConnectWithoutTicket_raffleInput | TicketPaymentCreateOrConnectWithoutTicket_raffleInput[]
    upsert?: TicketPaymentUpsertWithWhereUniqueWithoutTicket_raffleInput | TicketPaymentUpsertWithWhereUniqueWithoutTicket_raffleInput[]
    set?: TicketPaymentWhereUniqueInput | TicketPaymentWhereUniqueInput[]
    disconnect?: TicketPaymentWhereUniqueInput | TicketPaymentWhereUniqueInput[]
    delete?: TicketPaymentWhereUniqueInput | TicketPaymentWhereUniqueInput[]
    connect?: TicketPaymentWhereUniqueInput | TicketPaymentWhereUniqueInput[]
    update?: TicketPaymentUpdateWithWhereUniqueWithoutTicket_raffleInput | TicketPaymentUpdateWithWhereUniqueWithoutTicket_raffleInput[]
    updateMany?: TicketPaymentUpdateManyWithWhereWithoutTicket_raffleInput | TicketPaymentUpdateManyWithWhereWithoutTicket_raffleInput[]
    deleteMany?: TicketPaymentScalarWhereInput | TicketPaymentScalarWhereInput[]
  }

  export type TicketPaymentUncheckedUpdateManyWithoutTicket_raffleNestedInput = {
    create?: XOR<TicketPaymentCreateWithoutTicket_raffleInput, TicketPaymentUncheckedCreateWithoutTicket_raffleInput> | TicketPaymentCreateWithoutTicket_raffleInput[] | TicketPaymentUncheckedCreateWithoutTicket_raffleInput[]
    connectOrCreate?: TicketPaymentCreateOrConnectWithoutTicket_raffleInput | TicketPaymentCreateOrConnectWithoutTicket_raffleInput[]
    upsert?: TicketPaymentUpsertWithWhereUniqueWithoutTicket_raffleInput | TicketPaymentUpsertWithWhereUniqueWithoutTicket_raffleInput[]
    set?: TicketPaymentWhereUniqueInput | TicketPaymentWhereUniqueInput[]
    disconnect?: TicketPaymentWhereUniqueInput | TicketPaymentWhereUniqueInput[]
    delete?: TicketPaymentWhereUniqueInput | TicketPaymentWhereUniqueInput[]
    connect?: TicketPaymentWhereUniqueInput | TicketPaymentWhereUniqueInput[]
    update?: TicketPaymentUpdateWithWhereUniqueWithoutTicket_raffleInput | TicketPaymentUpdateWithWhereUniqueWithoutTicket_raffleInput[]
    updateMany?: TicketPaymentUpdateManyWithWhereWithoutTicket_raffleInput | TicketPaymentUpdateManyWithWhereWithoutTicket_raffleInput[]
    deleteMany?: TicketPaymentScalarWhereInput | TicketPaymentScalarWhereInput[]
  }

  export type TicketRaffleCreateNestedManyWithoutTicket_paymentInput = {
    create?: XOR<TicketRaffleCreateWithoutTicket_paymentInput, TicketRaffleUncheckedCreateWithoutTicket_paymentInput> | TicketRaffleCreateWithoutTicket_paymentInput[] | TicketRaffleUncheckedCreateWithoutTicket_paymentInput[]
    connectOrCreate?: TicketRaffleCreateOrConnectWithoutTicket_paymentInput | TicketRaffleCreateOrConnectWithoutTicket_paymentInput[]
    connect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
  }

  export type ExtractCreateNestedManyWithoutTicket_paymentInput = {
    create?: XOR<ExtractCreateWithoutTicket_paymentInput, ExtractUncheckedCreateWithoutTicket_paymentInput> | ExtractCreateWithoutTicket_paymentInput[] | ExtractUncheckedCreateWithoutTicket_paymentInput[]
    connectOrCreate?: ExtractCreateOrConnectWithoutTicket_paymentInput | ExtractCreateOrConnectWithoutTicket_paymentInput[]
    createMany?: ExtractCreateManyTicket_paymentInputEnvelope
    connect?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
  }

  export type TicketRaffleUncheckedCreateNestedManyWithoutTicket_paymentInput = {
    create?: XOR<TicketRaffleCreateWithoutTicket_paymentInput, TicketRaffleUncheckedCreateWithoutTicket_paymentInput> | TicketRaffleCreateWithoutTicket_paymentInput[] | TicketRaffleUncheckedCreateWithoutTicket_paymentInput[]
    connectOrCreate?: TicketRaffleCreateOrConnectWithoutTicket_paymentInput | TicketRaffleCreateOrConnectWithoutTicket_paymentInput[]
    connect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
  }

  export type ExtractUncheckedCreateNestedManyWithoutTicket_paymentInput = {
    create?: XOR<ExtractCreateWithoutTicket_paymentInput, ExtractUncheckedCreateWithoutTicket_paymentInput> | ExtractCreateWithoutTicket_paymentInput[] | ExtractUncheckedCreateWithoutTicket_paymentInput[]
    connectOrCreate?: ExtractCreateOrConnectWithoutTicket_paymentInput | ExtractCreateOrConnectWithoutTicket_paymentInput[]
    createMany?: ExtractCreateManyTicket_paymentInputEnvelope
    connect?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
  }

  export type TicketRaffleUpdateManyWithoutTicket_paymentNestedInput = {
    create?: XOR<TicketRaffleCreateWithoutTicket_paymentInput, TicketRaffleUncheckedCreateWithoutTicket_paymentInput> | TicketRaffleCreateWithoutTicket_paymentInput[] | TicketRaffleUncheckedCreateWithoutTicket_paymentInput[]
    connectOrCreate?: TicketRaffleCreateOrConnectWithoutTicket_paymentInput | TicketRaffleCreateOrConnectWithoutTicket_paymentInput[]
    upsert?: TicketRaffleUpsertWithWhereUniqueWithoutTicket_paymentInput | TicketRaffleUpsertWithWhereUniqueWithoutTicket_paymentInput[]
    set?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    disconnect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    delete?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    connect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    update?: TicketRaffleUpdateWithWhereUniqueWithoutTicket_paymentInput | TicketRaffleUpdateWithWhereUniqueWithoutTicket_paymentInput[]
    updateMany?: TicketRaffleUpdateManyWithWhereWithoutTicket_paymentInput | TicketRaffleUpdateManyWithWhereWithoutTicket_paymentInput[]
    deleteMany?: TicketRaffleScalarWhereInput | TicketRaffleScalarWhereInput[]
  }

  export type ExtractUpdateManyWithoutTicket_paymentNestedInput = {
    create?: XOR<ExtractCreateWithoutTicket_paymentInput, ExtractUncheckedCreateWithoutTicket_paymentInput> | ExtractCreateWithoutTicket_paymentInput[] | ExtractUncheckedCreateWithoutTicket_paymentInput[]
    connectOrCreate?: ExtractCreateOrConnectWithoutTicket_paymentInput | ExtractCreateOrConnectWithoutTicket_paymentInput[]
    upsert?: ExtractUpsertWithWhereUniqueWithoutTicket_paymentInput | ExtractUpsertWithWhereUniqueWithoutTicket_paymentInput[]
    createMany?: ExtractCreateManyTicket_paymentInputEnvelope
    set?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    disconnect?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    delete?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    connect?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    update?: ExtractUpdateWithWhereUniqueWithoutTicket_paymentInput | ExtractUpdateWithWhereUniqueWithoutTicket_paymentInput[]
    updateMany?: ExtractUpdateManyWithWhereWithoutTicket_paymentInput | ExtractUpdateManyWithWhereWithoutTicket_paymentInput[]
    deleteMany?: ExtractScalarWhereInput | ExtractScalarWhereInput[]
  }

  export type TicketRaffleUncheckedUpdateManyWithoutTicket_paymentNestedInput = {
    create?: XOR<TicketRaffleCreateWithoutTicket_paymentInput, TicketRaffleUncheckedCreateWithoutTicket_paymentInput> | TicketRaffleCreateWithoutTicket_paymentInput[] | TicketRaffleUncheckedCreateWithoutTicket_paymentInput[]
    connectOrCreate?: TicketRaffleCreateOrConnectWithoutTicket_paymentInput | TicketRaffleCreateOrConnectWithoutTicket_paymentInput[]
    upsert?: TicketRaffleUpsertWithWhereUniqueWithoutTicket_paymentInput | TicketRaffleUpsertWithWhereUniqueWithoutTicket_paymentInput[]
    set?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    disconnect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    delete?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    connect?: TicketRaffleWhereUniqueInput | TicketRaffleWhereUniqueInput[]
    update?: TicketRaffleUpdateWithWhereUniqueWithoutTicket_paymentInput | TicketRaffleUpdateWithWhereUniqueWithoutTicket_paymentInput[]
    updateMany?: TicketRaffleUpdateManyWithWhereWithoutTicket_paymentInput | TicketRaffleUpdateManyWithWhereWithoutTicket_paymentInput[]
    deleteMany?: TicketRaffleScalarWhereInput | TicketRaffleScalarWhereInput[]
  }

  export type ExtractUncheckedUpdateManyWithoutTicket_paymentNestedInput = {
    create?: XOR<ExtractCreateWithoutTicket_paymentInput, ExtractUncheckedCreateWithoutTicket_paymentInput> | ExtractCreateWithoutTicket_paymentInput[] | ExtractUncheckedCreateWithoutTicket_paymentInput[]
    connectOrCreate?: ExtractCreateOrConnectWithoutTicket_paymentInput | ExtractCreateOrConnectWithoutTicket_paymentInput[]
    upsert?: ExtractUpsertWithWhereUniqueWithoutTicket_paymentInput | ExtractUpsertWithWhereUniqueWithoutTicket_paymentInput[]
    createMany?: ExtractCreateManyTicket_paymentInputEnvelope
    set?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    disconnect?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    delete?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    connect?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    update?: ExtractUpdateWithWhereUniqueWithoutTicket_paymentInput | ExtractUpdateWithWhereUniqueWithoutTicket_paymentInput[]
    updateMany?: ExtractUpdateManyWithWhereWithoutTicket_paymentInput | ExtractUpdateManyWithWhereWithoutTicket_paymentInput[]
    deleteMany?: ExtractScalarWhereInput | ExtractScalarWhereInput[]
  }

  export type TicketPaymentCreateNestedOneWithoutExtractInput = {
    create?: XOR<TicketPaymentCreateWithoutExtractInput, TicketPaymentUncheckedCreateWithoutExtractInput>
    connectOrCreate?: TicketPaymentCreateOrConnectWithoutExtractInput
    connect?: TicketPaymentWhereUniqueInput
  }

  export type EnumExtractTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExtractType
  }

  export type TicketPaymentUpdateOneWithoutExtractNestedInput = {
    create?: XOR<TicketPaymentCreateWithoutExtractInput, TicketPaymentUncheckedCreateWithoutExtractInput>
    connectOrCreate?: TicketPaymentCreateOrConnectWithoutExtractInput
    upsert?: TicketPaymentUpsertWithoutExtractInput
    disconnect?: TicketPaymentWhereInput | boolean
    delete?: TicketPaymentWhereInput | boolean
    connect?: TicketPaymentWhereUniqueInput
    update?: XOR<XOR<TicketPaymentUpdateToOneWithWhereWithoutExtractInput, TicketPaymentUpdateWithoutExtractInput>, TicketPaymentUncheckedUpdateWithoutExtractInput>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumProfilesFilter<$PrismaModel = never> = {
    equals?: $Enums.Profiles | EnumProfilesFieldRefInput<$PrismaModel>
    in?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>
    not?: NestedEnumProfilesFilter<$PrismaModel> | $Enums.Profiles
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumProfilesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Profiles | EnumProfilesFieldRefInput<$PrismaModel>
    in?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>
    not?: NestedEnumProfilesWithAggregatesFilter<$PrismaModel> | $Enums.Profiles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProfilesFilter<$PrismaModel>
    _max?: NestedEnumProfilesFilter<$PrismaModel>
  }

  export type NestedEnumRaffleEditionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RaffleEditionStatus | EnumRaffleEditionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaffleEditionStatus[] | ListEnumRaffleEditionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaffleEditionStatus[] | ListEnumRaffleEditionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaffleEditionStatusFilter<$PrismaModel> | $Enums.RaffleEditionStatus
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

  export type NestedEnumRaffleEditionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RaffleEditionStatus | EnumRaffleEditionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaffleEditionStatus[] | ListEnumRaffleEditionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaffleEditionStatus[] | ListEnumRaffleEditionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaffleEditionStatusWithAggregatesFilter<$PrismaModel> | $Enums.RaffleEditionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRaffleEditionStatusFilter<$PrismaModel>
    _max?: NestedEnumRaffleEditionStatusFilter<$PrismaModel>
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

  export type NestedEnumTicketRaffleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketRaffleStatus | EnumTicketRaffleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketRaffleStatus[] | ListEnumTicketRaffleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketRaffleStatus[] | ListEnumTicketRaffleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketRaffleStatusFilter<$PrismaModel> | $Enums.TicketRaffleStatus
  }

  export type NestedEnumTicketRaffleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketRaffleStatus | EnumTicketRaffleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketRaffleStatus[] | ListEnumTicketRaffleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketRaffleStatus[] | ListEnumTicketRaffleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketRaffleStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketRaffleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketRaffleStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketRaffleStatusFilter<$PrismaModel>
  }

  export type NestedEnumExtractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractType | EnumExtractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExtractTypeFilter<$PrismaModel> | $Enums.ExtractType
  }

  export type NestedEnumExtractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractType | EnumExtractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExtractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExtractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExtractTypeFilter<$PrismaModel>
    _max?: NestedEnumExtractTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutSub_usersInput = {
    id?: string
    name: string
    cpf: string
    email: string
    number: string
    social_media?: string | null
    saldo?: bigint | number
    hashed_password: string
    comissao: Decimal | DecimalJsLike | number | string
    profile: $Enums.Profiles
    owner?: UserCreateNestedOneWithoutSub_usersInput
    raffle_editions?: RaffleEditionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSub_usersInput = {
    id?: string
    name: string
    cpf: string
    email: string
    number: string
    social_media?: string | null
    saldo?: bigint | number
    hashed_password: string
    comissao: Decimal | DecimalJsLike | number | string
    profile: $Enums.Profiles
    owner_id?: string | null
    raffle_editions?: RaffleEditionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSub_usersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSub_usersInput, UserUncheckedCreateWithoutSub_usersInput>
  }

  export type UserCreateWithoutOwnerInput = {
    id?: string
    name: string
    cpf: string
    email: string
    number: string
    social_media?: string | null
    saldo?: bigint | number
    hashed_password: string
    comissao: Decimal | DecimalJsLike | number | string
    profile: $Enums.Profiles
    sub_users?: UserCreateNestedManyWithoutOwnerInput
    raffle_editions?: RaffleEditionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    cpf: string
    email: string
    number: string
    social_media?: string | null
    saldo?: bigint | number
    hashed_password: string
    comissao: Decimal | DecimalJsLike | number | string
    profile: $Enums.Profiles
    sub_users?: UserUncheckedCreateNestedManyWithoutOwnerInput
    raffle_editions?: RaffleEditionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnerInput, UserUncheckedCreateWithoutOwnerInput>
  }

  export type UserCreateManyOwnerInputEnvelope = {
    data: UserCreateManyOwnerInput | UserCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type RaffleEditionCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.RaffleEditionStatus
    total_tickets: number
    winner_tickets: number
    raffle_draw_date: Date | string
    user_id?: string | null
    TicketRaffle?: TicketRaffleCreateNestedManyWithoutRaffle_editionInput
  }

  export type RaffleEditionUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.RaffleEditionStatus
    total_tickets: number
    winner_tickets: number
    raffle_draw_date: Date | string
    user_id?: string | null
    TicketRaffle?: TicketRaffleUncheckedCreateNestedManyWithoutRaffle_editionInput
  }

  export type RaffleEditionCreateOrConnectWithoutUserInput = {
    where: RaffleEditionWhereUniqueInput
    create: XOR<RaffleEditionCreateWithoutUserInput, RaffleEditionUncheckedCreateWithoutUserInput>
  }

  export type RaffleEditionCreateManyUserInputEnvelope = {
    data: RaffleEditionCreateManyUserInput | RaffleEditionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSub_usersInput = {
    update: XOR<UserUpdateWithoutSub_usersInput, UserUncheckedUpdateWithoutSub_usersInput>
    create: XOR<UserCreateWithoutSub_usersInput, UserUncheckedCreateWithoutSub_usersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSub_usersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSub_usersInput, UserUncheckedUpdateWithoutSub_usersInput>
  }

  export type UserUpdateWithoutSub_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    social_media?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: BigIntFieldUpdateOperationsInput | bigint | number
    hashed_password?: StringFieldUpdateOperationsInput | string
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles
    owner?: UserUpdateOneWithoutSub_usersNestedInput
    raffle_editions?: RaffleEditionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSub_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    social_media?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: BigIntFieldUpdateOperationsInput | bigint | number
    hashed_password?: StringFieldUpdateOperationsInput | string
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    raffle_editions?: RaffleEditionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutOwnerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOwnerInput, UserUncheckedUpdateWithoutOwnerInput>
    create: XOR<UserCreateWithoutOwnerInput, UserUncheckedCreateWithoutOwnerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOwnerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOwnerInput, UserUncheckedUpdateWithoutOwnerInput>
  }

  export type UserUpdateManyWithWhereWithoutOwnerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOwnerInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    number?: StringFilter<"User"> | string
    social_media?: StringNullableFilter<"User"> | string | null
    saldo?: BigIntFilter<"User"> | bigint | number
    hashed_password?: StringFilter<"User"> | string
    comissao?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFilter<"User"> | $Enums.Profiles
    owner_id?: StringNullableFilter<"User"> | string | null
  }

  export type RaffleEditionUpsertWithWhereUniqueWithoutUserInput = {
    where: RaffleEditionWhereUniqueInput
    update: XOR<RaffleEditionUpdateWithoutUserInput, RaffleEditionUncheckedUpdateWithoutUserInput>
    create: XOR<RaffleEditionCreateWithoutUserInput, RaffleEditionUncheckedCreateWithoutUserInput>
  }

  export type RaffleEditionUpdateWithWhereUniqueWithoutUserInput = {
    where: RaffleEditionWhereUniqueInput
    data: XOR<RaffleEditionUpdateWithoutUserInput, RaffleEditionUncheckedUpdateWithoutUserInput>
  }

  export type RaffleEditionUpdateManyWithWhereWithoutUserInput = {
    where: RaffleEditionScalarWhereInput
    data: XOR<RaffleEditionUpdateManyMutationInput, RaffleEditionUncheckedUpdateManyWithoutUserInput>
  }

  export type RaffleEditionScalarWhereInput = {
    AND?: RaffleEditionScalarWhereInput | RaffleEditionScalarWhereInput[]
    OR?: RaffleEditionScalarWhereInput[]
    NOT?: RaffleEditionScalarWhereInput | RaffleEditionScalarWhereInput[]
    id?: StringFilter<"RaffleEdition"> | string
    title?: StringFilter<"RaffleEdition"> | string
    description?: StringFilter<"RaffleEdition"> | string
    status?: EnumRaffleEditionStatusFilter<"RaffleEdition"> | $Enums.RaffleEditionStatus
    total_tickets?: IntFilter<"RaffleEdition"> | number
    winner_tickets?: IntFilter<"RaffleEdition"> | number
    raffle_draw_date?: DateTimeFilter<"RaffleEdition"> | Date | string
    user_id?: StringNullableFilter<"RaffleEdition"> | string | null
    userId?: StringNullableFilter<"RaffleEdition"> | string | null
  }

  export type UserCreateWithoutRaffle_editionsInput = {
    id?: string
    name: string
    cpf: string
    email: string
    number: string
    social_media?: string | null
    saldo?: bigint | number
    hashed_password: string
    comissao: Decimal | DecimalJsLike | number | string
    profile: $Enums.Profiles
    owner?: UserCreateNestedOneWithoutSub_usersInput
    sub_users?: UserCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutRaffle_editionsInput = {
    id?: string
    name: string
    cpf: string
    email: string
    number: string
    social_media?: string | null
    saldo?: bigint | number
    hashed_password: string
    comissao: Decimal | DecimalJsLike | number | string
    profile: $Enums.Profiles
    owner_id?: string | null
    sub_users?: UserUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutRaffle_editionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRaffle_editionsInput, UserUncheckedCreateWithoutRaffle_editionsInput>
  }

  export type TicketRaffleCreateWithoutRaffle_editionInput = {
    id?: string
    raffle_number: bigint | number
    price: bigint | number
    status?: $Enums.TicketRaffleStatus
    prize: PrizeCreateNestedOneWithoutTicketRaffleInput
    ticket_payment?: TicketPaymentCreateNestedManyWithoutTicket_raffleInput
  }

  export type TicketRaffleUncheckedCreateWithoutRaffle_editionInput = {
    id?: string
    raffle_number: bigint | number
    price: bigint | number
    status?: $Enums.TicketRaffleStatus
    prize_id: string
    ticket_payment?: TicketPaymentUncheckedCreateNestedManyWithoutTicket_raffleInput
  }

  export type TicketRaffleCreateOrConnectWithoutRaffle_editionInput = {
    where: TicketRaffleWhereUniqueInput
    create: XOR<TicketRaffleCreateWithoutRaffle_editionInput, TicketRaffleUncheckedCreateWithoutRaffle_editionInput>
  }

  export type TicketRaffleCreateManyRaffle_editionInputEnvelope = {
    data: TicketRaffleCreateManyRaffle_editionInput | TicketRaffleCreateManyRaffle_editionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRaffle_editionsInput = {
    update: XOR<UserUpdateWithoutRaffle_editionsInput, UserUncheckedUpdateWithoutRaffle_editionsInput>
    create: XOR<UserCreateWithoutRaffle_editionsInput, UserUncheckedCreateWithoutRaffle_editionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRaffle_editionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRaffle_editionsInput, UserUncheckedUpdateWithoutRaffle_editionsInput>
  }

  export type UserUpdateWithoutRaffle_editionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    social_media?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: BigIntFieldUpdateOperationsInput | bigint | number
    hashed_password?: StringFieldUpdateOperationsInput | string
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles
    owner?: UserUpdateOneWithoutSub_usersNestedInput
    sub_users?: UserUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutRaffle_editionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    social_media?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: BigIntFieldUpdateOperationsInput | bigint | number
    hashed_password?: StringFieldUpdateOperationsInput | string
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    sub_users?: UserUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type TicketRaffleUpsertWithWhereUniqueWithoutRaffle_editionInput = {
    where: TicketRaffleWhereUniqueInput
    update: XOR<TicketRaffleUpdateWithoutRaffle_editionInput, TicketRaffleUncheckedUpdateWithoutRaffle_editionInput>
    create: XOR<TicketRaffleCreateWithoutRaffle_editionInput, TicketRaffleUncheckedCreateWithoutRaffle_editionInput>
  }

  export type TicketRaffleUpdateWithWhereUniqueWithoutRaffle_editionInput = {
    where: TicketRaffleWhereUniqueInput
    data: XOR<TicketRaffleUpdateWithoutRaffle_editionInput, TicketRaffleUncheckedUpdateWithoutRaffle_editionInput>
  }

  export type TicketRaffleUpdateManyWithWhereWithoutRaffle_editionInput = {
    where: TicketRaffleScalarWhereInput
    data: XOR<TicketRaffleUpdateManyMutationInput, TicketRaffleUncheckedUpdateManyWithoutRaffle_editionInput>
  }

  export type TicketRaffleScalarWhereInput = {
    AND?: TicketRaffleScalarWhereInput | TicketRaffleScalarWhereInput[]
    OR?: TicketRaffleScalarWhereInput[]
    NOT?: TicketRaffleScalarWhereInput | TicketRaffleScalarWhereInput[]
    id?: StringFilter<"TicketRaffle"> | string
    raffle_number?: BigIntFilter<"TicketRaffle"> | bigint | number
    price?: BigIntFilter<"TicketRaffle"> | bigint | number
    status?: EnumTicketRaffleStatusFilter<"TicketRaffle"> | $Enums.TicketRaffleStatus
    prize_id?: StringFilter<"TicketRaffle"> | string
    raffle_edition_id?: StringFilter<"TicketRaffle"> | string
  }

  export type TicketRaffleCreateWithoutPrizeInput = {
    id?: string
    raffle_number: bigint | number
    price: bigint | number
    status?: $Enums.TicketRaffleStatus
    raffle_edition: RaffleEditionCreateNestedOneWithoutTicketRaffleInput
    ticket_payment?: TicketPaymentCreateNestedManyWithoutTicket_raffleInput
  }

  export type TicketRaffleUncheckedCreateWithoutPrizeInput = {
    id?: string
    raffle_number: bigint | number
    price: bigint | number
    status?: $Enums.TicketRaffleStatus
    raffle_edition_id: string
    ticket_payment?: TicketPaymentUncheckedCreateNestedManyWithoutTicket_raffleInput
  }

  export type TicketRaffleCreateOrConnectWithoutPrizeInput = {
    where: TicketRaffleWhereUniqueInput
    create: XOR<TicketRaffleCreateWithoutPrizeInput, TicketRaffleUncheckedCreateWithoutPrizeInput>
  }

  export type TicketRaffleCreateManyPrizeInputEnvelope = {
    data: TicketRaffleCreateManyPrizeInput | TicketRaffleCreateManyPrizeInput[]
    skipDuplicates?: boolean
  }

  export type TicketRaffleUpsertWithWhereUniqueWithoutPrizeInput = {
    where: TicketRaffleWhereUniqueInput
    update: XOR<TicketRaffleUpdateWithoutPrizeInput, TicketRaffleUncheckedUpdateWithoutPrizeInput>
    create: XOR<TicketRaffleCreateWithoutPrizeInput, TicketRaffleUncheckedCreateWithoutPrizeInput>
  }

  export type TicketRaffleUpdateWithWhereUniqueWithoutPrizeInput = {
    where: TicketRaffleWhereUniqueInput
    data: XOR<TicketRaffleUpdateWithoutPrizeInput, TicketRaffleUncheckedUpdateWithoutPrizeInput>
  }

  export type TicketRaffleUpdateManyWithWhereWithoutPrizeInput = {
    where: TicketRaffleScalarWhereInput
    data: XOR<TicketRaffleUpdateManyMutationInput, TicketRaffleUncheckedUpdateManyWithoutPrizeInput>
  }

  export type PrizeCreateWithoutTicketRaffleInput = {
    id?: string
    prize_name: string
    prize_quantity: number
  }

  export type PrizeUncheckedCreateWithoutTicketRaffleInput = {
    id?: string
    prize_name: string
    prize_quantity: number
  }

  export type PrizeCreateOrConnectWithoutTicketRaffleInput = {
    where: PrizeWhereUniqueInput
    create: XOR<PrizeCreateWithoutTicketRaffleInput, PrizeUncheckedCreateWithoutTicketRaffleInput>
  }

  export type RaffleEditionCreateWithoutTicketRaffleInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.RaffleEditionStatus
    total_tickets: number
    winner_tickets: number
    raffle_draw_date: Date | string
    user_id?: string | null
    User?: UserCreateNestedOneWithoutRaffle_editionsInput
  }

  export type RaffleEditionUncheckedCreateWithoutTicketRaffleInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.RaffleEditionStatus
    total_tickets: number
    winner_tickets: number
    raffle_draw_date: Date | string
    user_id?: string | null
    userId?: string | null
  }

  export type RaffleEditionCreateOrConnectWithoutTicketRaffleInput = {
    where: RaffleEditionWhereUniqueInput
    create: XOR<RaffleEditionCreateWithoutTicketRaffleInput, RaffleEditionUncheckedCreateWithoutTicketRaffleInput>
  }

  export type TicketPaymentCreateWithoutTicket_raffleInput = {
    id?: string
    ticket_amount: number
    total_value?: bigint | number
    name: string
    cpf: string
    email: string
    number?: string | null
    Extract?: ExtractCreateNestedManyWithoutTicket_paymentInput
  }

  export type TicketPaymentUncheckedCreateWithoutTicket_raffleInput = {
    id?: string
    ticket_amount: number
    total_value?: bigint | number
    name: string
    cpf: string
    email: string
    number?: string | null
    Extract?: ExtractUncheckedCreateNestedManyWithoutTicket_paymentInput
  }

  export type TicketPaymentCreateOrConnectWithoutTicket_raffleInput = {
    where: TicketPaymentWhereUniqueInput
    create: XOR<TicketPaymentCreateWithoutTicket_raffleInput, TicketPaymentUncheckedCreateWithoutTicket_raffleInput>
  }

  export type PrizeUpsertWithoutTicketRaffleInput = {
    update: XOR<PrizeUpdateWithoutTicketRaffleInput, PrizeUncheckedUpdateWithoutTicketRaffleInput>
    create: XOR<PrizeCreateWithoutTicketRaffleInput, PrizeUncheckedCreateWithoutTicketRaffleInput>
    where?: PrizeWhereInput
  }

  export type PrizeUpdateToOneWithWhereWithoutTicketRaffleInput = {
    where?: PrizeWhereInput
    data: XOR<PrizeUpdateWithoutTicketRaffleInput, PrizeUncheckedUpdateWithoutTicketRaffleInput>
  }

  export type PrizeUpdateWithoutTicketRaffleInput = {
    id?: StringFieldUpdateOperationsInput | string
    prize_name?: StringFieldUpdateOperationsInput | string
    prize_quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PrizeUncheckedUpdateWithoutTicketRaffleInput = {
    id?: StringFieldUpdateOperationsInput | string
    prize_name?: StringFieldUpdateOperationsInput | string
    prize_quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RaffleEditionUpsertWithoutTicketRaffleInput = {
    update: XOR<RaffleEditionUpdateWithoutTicketRaffleInput, RaffleEditionUncheckedUpdateWithoutTicketRaffleInput>
    create: XOR<RaffleEditionCreateWithoutTicketRaffleInput, RaffleEditionUncheckedCreateWithoutTicketRaffleInput>
    where?: RaffleEditionWhereInput
  }

  export type RaffleEditionUpdateToOneWithWhereWithoutTicketRaffleInput = {
    where?: RaffleEditionWhereInput
    data: XOR<RaffleEditionUpdateWithoutTicketRaffleInput, RaffleEditionUncheckedUpdateWithoutTicketRaffleInput>
  }

  export type RaffleEditionUpdateWithoutTicketRaffleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRaffleEditionStatusFieldUpdateOperationsInput | $Enums.RaffleEditionStatus
    total_tickets?: IntFieldUpdateOperationsInput | number
    winner_tickets?: IntFieldUpdateOperationsInput | number
    raffle_draw_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutRaffle_editionsNestedInput
  }

  export type RaffleEditionUncheckedUpdateWithoutTicketRaffleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRaffleEditionStatusFieldUpdateOperationsInput | $Enums.RaffleEditionStatus
    total_tickets?: IntFieldUpdateOperationsInput | number
    winner_tickets?: IntFieldUpdateOperationsInput | number
    raffle_draw_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketPaymentUpsertWithWhereUniqueWithoutTicket_raffleInput = {
    where: TicketPaymentWhereUniqueInput
    update: XOR<TicketPaymentUpdateWithoutTicket_raffleInput, TicketPaymentUncheckedUpdateWithoutTicket_raffleInput>
    create: XOR<TicketPaymentCreateWithoutTicket_raffleInput, TicketPaymentUncheckedCreateWithoutTicket_raffleInput>
  }

  export type TicketPaymentUpdateWithWhereUniqueWithoutTicket_raffleInput = {
    where: TicketPaymentWhereUniqueInput
    data: XOR<TicketPaymentUpdateWithoutTicket_raffleInput, TicketPaymentUncheckedUpdateWithoutTicket_raffleInput>
  }

  export type TicketPaymentUpdateManyWithWhereWithoutTicket_raffleInput = {
    where: TicketPaymentScalarWhereInput
    data: XOR<TicketPaymentUpdateManyMutationInput, TicketPaymentUncheckedUpdateManyWithoutTicket_raffleInput>
  }

  export type TicketPaymentScalarWhereInput = {
    AND?: TicketPaymentScalarWhereInput | TicketPaymentScalarWhereInput[]
    OR?: TicketPaymentScalarWhereInput[]
    NOT?: TicketPaymentScalarWhereInput | TicketPaymentScalarWhereInput[]
    id?: StringFilter<"TicketPayment"> | string
    ticket_amount?: IntFilter<"TicketPayment"> | number
    total_value?: BigIntFilter<"TicketPayment"> | bigint | number
    name?: StringFilter<"TicketPayment"> | string
    cpf?: StringFilter<"TicketPayment"> | string
    email?: StringFilter<"TicketPayment"> | string
    number?: StringNullableFilter<"TicketPayment"> | string | null
  }

  export type TicketRaffleCreateWithoutTicket_paymentInput = {
    id?: string
    raffle_number: bigint | number
    price: bigint | number
    status?: $Enums.TicketRaffleStatus
    prize: PrizeCreateNestedOneWithoutTicketRaffleInput
    raffle_edition: RaffleEditionCreateNestedOneWithoutTicketRaffleInput
  }

  export type TicketRaffleUncheckedCreateWithoutTicket_paymentInput = {
    id?: string
    raffle_number: bigint | number
    price: bigint | number
    status?: $Enums.TicketRaffleStatus
    prize_id: string
    raffle_edition_id: string
  }

  export type TicketRaffleCreateOrConnectWithoutTicket_paymentInput = {
    where: TicketRaffleWhereUniqueInput
    create: XOR<TicketRaffleCreateWithoutTicket_paymentInput, TicketRaffleUncheckedCreateWithoutTicket_paymentInput>
  }

  export type ExtractCreateWithoutTicket_paymentInput = {
    id?: string
    amount: bigint | number
    type: $Enums.ExtractType
  }

  export type ExtractUncheckedCreateWithoutTicket_paymentInput = {
    id?: string
    amount: bigint | number
    type: $Enums.ExtractType
  }

  export type ExtractCreateOrConnectWithoutTicket_paymentInput = {
    where: ExtractWhereUniqueInput
    create: XOR<ExtractCreateWithoutTicket_paymentInput, ExtractUncheckedCreateWithoutTicket_paymentInput>
  }

  export type ExtractCreateManyTicket_paymentInputEnvelope = {
    data: ExtractCreateManyTicket_paymentInput | ExtractCreateManyTicket_paymentInput[]
    skipDuplicates?: boolean
  }

  export type TicketRaffleUpsertWithWhereUniqueWithoutTicket_paymentInput = {
    where: TicketRaffleWhereUniqueInput
    update: XOR<TicketRaffleUpdateWithoutTicket_paymentInput, TicketRaffleUncheckedUpdateWithoutTicket_paymentInput>
    create: XOR<TicketRaffleCreateWithoutTicket_paymentInput, TicketRaffleUncheckedCreateWithoutTicket_paymentInput>
  }

  export type TicketRaffleUpdateWithWhereUniqueWithoutTicket_paymentInput = {
    where: TicketRaffleWhereUniqueInput
    data: XOR<TicketRaffleUpdateWithoutTicket_paymentInput, TicketRaffleUncheckedUpdateWithoutTicket_paymentInput>
  }

  export type TicketRaffleUpdateManyWithWhereWithoutTicket_paymentInput = {
    where: TicketRaffleScalarWhereInput
    data: XOR<TicketRaffleUpdateManyMutationInput, TicketRaffleUncheckedUpdateManyWithoutTicket_paymentInput>
  }

  export type ExtractUpsertWithWhereUniqueWithoutTicket_paymentInput = {
    where: ExtractWhereUniqueInput
    update: XOR<ExtractUpdateWithoutTicket_paymentInput, ExtractUncheckedUpdateWithoutTicket_paymentInput>
    create: XOR<ExtractCreateWithoutTicket_paymentInput, ExtractUncheckedCreateWithoutTicket_paymentInput>
  }

  export type ExtractUpdateWithWhereUniqueWithoutTicket_paymentInput = {
    where: ExtractWhereUniqueInput
    data: XOR<ExtractUpdateWithoutTicket_paymentInput, ExtractUncheckedUpdateWithoutTicket_paymentInput>
  }

  export type ExtractUpdateManyWithWhereWithoutTicket_paymentInput = {
    where: ExtractScalarWhereInput
    data: XOR<ExtractUpdateManyMutationInput, ExtractUncheckedUpdateManyWithoutTicket_paymentInput>
  }

  export type ExtractScalarWhereInput = {
    AND?: ExtractScalarWhereInput | ExtractScalarWhereInput[]
    OR?: ExtractScalarWhereInput[]
    NOT?: ExtractScalarWhereInput | ExtractScalarWhereInput[]
    id?: StringFilter<"Extract"> | string
    amount?: BigIntFilter<"Extract"> | bigint | number
    type?: EnumExtractTypeFilter<"Extract"> | $Enums.ExtractType
    ticket_payment_id?: StringNullableFilter<"Extract"> | string | null
  }

  export type TicketPaymentCreateWithoutExtractInput = {
    id?: string
    ticket_amount: number
    total_value?: bigint | number
    name: string
    cpf: string
    email: string
    number?: string | null
    ticket_raffle?: TicketRaffleCreateNestedManyWithoutTicket_paymentInput
  }

  export type TicketPaymentUncheckedCreateWithoutExtractInput = {
    id?: string
    ticket_amount: number
    total_value?: bigint | number
    name: string
    cpf: string
    email: string
    number?: string | null
    ticket_raffle?: TicketRaffleUncheckedCreateNestedManyWithoutTicket_paymentInput
  }

  export type TicketPaymentCreateOrConnectWithoutExtractInput = {
    where: TicketPaymentWhereUniqueInput
    create: XOR<TicketPaymentCreateWithoutExtractInput, TicketPaymentUncheckedCreateWithoutExtractInput>
  }

  export type TicketPaymentUpsertWithoutExtractInput = {
    update: XOR<TicketPaymentUpdateWithoutExtractInput, TicketPaymentUncheckedUpdateWithoutExtractInput>
    create: XOR<TicketPaymentCreateWithoutExtractInput, TicketPaymentUncheckedCreateWithoutExtractInput>
    where?: TicketPaymentWhereInput
  }

  export type TicketPaymentUpdateToOneWithWhereWithoutExtractInput = {
    where?: TicketPaymentWhereInput
    data: XOR<TicketPaymentUpdateWithoutExtractInput, TicketPaymentUncheckedUpdateWithoutExtractInput>
  }

  export type TicketPaymentUpdateWithoutExtractInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_amount?: IntFieldUpdateOperationsInput | number
    total_value?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_raffle?: TicketRaffleUpdateManyWithoutTicket_paymentNestedInput
  }

  export type TicketPaymentUncheckedUpdateWithoutExtractInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_amount?: IntFieldUpdateOperationsInput | number
    total_value?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_raffle?: TicketRaffleUncheckedUpdateManyWithoutTicket_paymentNestedInput
  }

  export type UserCreateManyOwnerInput = {
    id?: string
    name: string
    cpf: string
    email: string
    number: string
    social_media?: string | null
    saldo?: bigint | number
    hashed_password: string
    comissao: Decimal | DecimalJsLike | number | string
    profile: $Enums.Profiles
  }

  export type RaffleEditionCreateManyUserInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.RaffleEditionStatus
    total_tickets: number
    winner_tickets: number
    raffle_draw_date: Date | string
    user_id?: string | null
  }

  export type UserUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    social_media?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: BigIntFieldUpdateOperationsInput | bigint | number
    hashed_password?: StringFieldUpdateOperationsInput | string
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles
    sub_users?: UserUpdateManyWithoutOwnerNestedInput
    raffle_editions?: RaffleEditionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    social_media?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: BigIntFieldUpdateOperationsInput | bigint | number
    hashed_password?: StringFieldUpdateOperationsInput | string
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles
    sub_users?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    raffle_editions?: RaffleEditionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    social_media?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: BigIntFieldUpdateOperationsInput | bigint | number
    hashed_password?: StringFieldUpdateOperationsInput | string
    comissao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles
  }

  export type RaffleEditionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRaffleEditionStatusFieldUpdateOperationsInput | $Enums.RaffleEditionStatus
    total_tickets?: IntFieldUpdateOperationsInput | number
    winner_tickets?: IntFieldUpdateOperationsInput | number
    raffle_draw_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    TicketRaffle?: TicketRaffleUpdateManyWithoutRaffle_editionNestedInput
  }

  export type RaffleEditionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRaffleEditionStatusFieldUpdateOperationsInput | $Enums.RaffleEditionStatus
    total_tickets?: IntFieldUpdateOperationsInput | number
    winner_tickets?: IntFieldUpdateOperationsInput | number
    raffle_draw_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    TicketRaffle?: TicketRaffleUncheckedUpdateManyWithoutRaffle_editionNestedInput
  }

  export type RaffleEditionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRaffleEditionStatusFieldUpdateOperationsInput | $Enums.RaffleEditionStatus
    total_tickets?: IntFieldUpdateOperationsInput | number
    winner_tickets?: IntFieldUpdateOperationsInput | number
    raffle_draw_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketRaffleCreateManyRaffle_editionInput = {
    id?: string
    raffle_number: bigint | number
    price: bigint | number
    status?: $Enums.TicketRaffleStatus
    prize_id: string
  }

  export type TicketRaffleUpdateWithoutRaffle_editionInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
    prize?: PrizeUpdateOneRequiredWithoutTicketRaffleNestedInput
    ticket_payment?: TicketPaymentUpdateManyWithoutTicket_raffleNestedInput
  }

  export type TicketRaffleUncheckedUpdateWithoutRaffle_editionInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
    prize_id?: StringFieldUpdateOperationsInput | string
    ticket_payment?: TicketPaymentUncheckedUpdateManyWithoutTicket_raffleNestedInput
  }

  export type TicketRaffleUncheckedUpdateManyWithoutRaffle_editionInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
    prize_id?: StringFieldUpdateOperationsInput | string
  }

  export type TicketRaffleCreateManyPrizeInput = {
    id?: string
    raffle_number: bigint | number
    price: bigint | number
    status?: $Enums.TicketRaffleStatus
    raffle_edition_id: string
  }

  export type TicketRaffleUpdateWithoutPrizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
    raffle_edition?: RaffleEditionUpdateOneRequiredWithoutTicketRaffleNestedInput
    ticket_payment?: TicketPaymentUpdateManyWithoutTicket_raffleNestedInput
  }

  export type TicketRaffleUncheckedUpdateWithoutPrizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
    raffle_edition_id?: StringFieldUpdateOperationsInput | string
    ticket_payment?: TicketPaymentUncheckedUpdateManyWithoutTicket_raffleNestedInput
  }

  export type TicketRaffleUncheckedUpdateManyWithoutPrizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
    raffle_edition_id?: StringFieldUpdateOperationsInput | string
  }

  export type TicketPaymentUpdateWithoutTicket_raffleInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_amount?: IntFieldUpdateOperationsInput | number
    total_value?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    Extract?: ExtractUpdateManyWithoutTicket_paymentNestedInput
  }

  export type TicketPaymentUncheckedUpdateWithoutTicket_raffleInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_amount?: IntFieldUpdateOperationsInput | number
    total_value?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    Extract?: ExtractUncheckedUpdateManyWithoutTicket_paymentNestedInput
  }

  export type TicketPaymentUncheckedUpdateManyWithoutTicket_raffleInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_amount?: IntFieldUpdateOperationsInput | number
    total_value?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExtractCreateManyTicket_paymentInput = {
    id?: string
    amount: bigint | number
    type: $Enums.ExtractType
  }

  export type TicketRaffleUpdateWithoutTicket_paymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
    prize?: PrizeUpdateOneRequiredWithoutTicketRaffleNestedInput
    raffle_edition?: RaffleEditionUpdateOneRequiredWithoutTicketRaffleNestedInput
  }

  export type TicketRaffleUncheckedUpdateWithoutTicket_paymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
    prize_id?: StringFieldUpdateOperationsInput | string
    raffle_edition_id?: StringFieldUpdateOperationsInput | string
  }

  export type TicketRaffleUncheckedUpdateManyWithoutTicket_paymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    raffle_number?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTicketRaffleStatusFieldUpdateOperationsInput | $Enums.TicketRaffleStatus
    prize_id?: StringFieldUpdateOperationsInput | string
    raffle_edition_id?: StringFieldUpdateOperationsInput | string
  }

  export type ExtractUpdateWithoutTicket_paymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
  }

  export type ExtractUncheckedUpdateWithoutTicket_paymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
  }

  export type ExtractUncheckedUpdateManyWithoutTicket_paymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
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