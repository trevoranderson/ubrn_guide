// This file was autogenerated by some hot garbage in the `uniffi-bindgen-react-native` crate.
// Trust me, you don't want to mess with it!
import nativeModule, {
  type UniffiRustFutureContinuationCallback,
  type UniffiForeignFutureFree,
  type UniffiCallbackInterfaceFree,
  type UniffiForeignFuture,
  type UniffiForeignFutureStructU8,
  type UniffiForeignFutureCompleteU8,
  type UniffiForeignFutureStructI8,
  type UniffiForeignFutureCompleteI8,
  type UniffiForeignFutureStructU16,
  type UniffiForeignFutureCompleteU16,
  type UniffiForeignFutureStructI16,
  type UniffiForeignFutureCompleteI16,
  type UniffiForeignFutureStructU32,
  type UniffiForeignFutureCompleteU32,
  type UniffiForeignFutureStructI32,
  type UniffiForeignFutureCompleteI32,
  type UniffiForeignFutureStructU64,
  type UniffiForeignFutureCompleteU64,
  type UniffiForeignFutureStructI64,
  type UniffiForeignFutureCompleteI64,
  type UniffiForeignFutureStructF32,
  type UniffiForeignFutureCompleteF32,
  type UniffiForeignFutureStructF64,
  type UniffiForeignFutureCompleteF64,
  type UniffiForeignFutureStructPointer,
  type UniffiForeignFutureCompletePointer,
  type UniffiForeignFutureStructRustBuffer,
  type UniffiForeignFutureCompleteRustBuffer,
  type UniffiForeignFutureStructVoid,
  type UniffiForeignFutureCompleteVoid,
  type UniffiVTableCallbackInterfaceBinaryOperator,
} from './foobar-ffi';
import {
  type FfiConverter,
  type UniffiDuration,
  type UniffiHandle,
  type UniffiObjectFactory,
  type UniffiReferenceHolder,
  type UniffiRustArcPtr,
  type UniffiRustCallStatus,
  type UnsafeMutableRawPointer,
  AbstractFfiConverterArrayBuffer,
  FfiConverterBool,
  FfiConverterDuration,
  FfiConverterInt32,
  FfiConverterInt64,
  FfiConverterObject,
  FfiConverterObjectWithCallbacks,
  FfiConverterOptional,
  FfiConverterUInt64,
  RustBuffer,
  UniffiAbstractObject,
  UniffiEnum,
  UniffiError,
  UniffiInternalError,
  destructorGuardSymbol,
  pointerLiteralSymbol,
  rustCall,
  rustCallWithError,
  uniffiCreateCallStatus,
  uniffiCreateRecord,
  uniffiTraitInterfaceCallWithError,
  uniffiTypeNameSymbol,
  variantOrdinalSymbol,
} from 'uniffi-bindgen-react-native';

// Get converters from the other files, if any.

const uniffiIsDebug = process.env.uniffiIsDebug !== 'production' || false;
// Public interface members begin here.

export function safeAdditionOperator(): BinaryOperator {
  return FfiConverterTypeBinaryOperator.lift(
    rustCall(
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_foobar_fn_func_safe_addition_operator(
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    )
  );
}
export function safeDivisionOperator(): BinaryOperator {
  return FfiConverterTypeBinaryOperator.lift(
    rustCall(
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_foobar_fn_func_safe_division_operator(
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    )
  );
}

export type ComputationResult = {
  value: /*i64*/ bigint;
  computationTime: UniffiDuration;
};

/**
 * Generated factory for {@link ComputationResult} record objects.
 */
export const ComputationResult = (() => {
  const defaults = () => ({});
  const create = (() => {
    return uniffiCreateRecord<ComputationResult, ReturnType<typeof defaults>>(
      defaults
    );
  })();
  return Object.freeze({
    /**
     * Create a frozen instance of {@link ComputationResult}, with defaults specified
     * in Rust, in the {@link foobar} crate.
     */
    create,

    /**
     * Create a frozen instance of {@link ComputationResult}, with defaults specified
     * in Rust, in the {@link foobar} crate.
     */
    new: create,

    /**
     * Defaults specified in the {@link foobar} crate.
     */
    defaults: () => Object.freeze(defaults()) as Partial<ComputationResult>,
  });
})();

const FfiConverterTypeComputationResult = (() => {
  type TypeName = ComputationResult;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      return {
        value: FfiConverterInt64.read(from),
        computationTime: FfiConverterDuration.read(from),
      };
    }
    write(value: TypeName, into: RustBuffer): void {
      FfiConverterInt64.write(value.value, into);
      FfiConverterDuration.write(value.computationTime, into);
    }
    allocationSize(value: TypeName): number {
      return (
        FfiConverterInt64.allocationSize(value.value) +
        FfiConverterDuration.allocationSize(value.computationTime)
      );
    }
  }
  return new FFIConverter();
})();

const stringToArrayBuffer = (s: string): ArrayBuffer =>
  rustCall((status) =>
    nativeModule().uniffi_internal_fn_func_ffi__string_to_arraybuffer(s, status)
  );

const arrayBufferToString = (ab: ArrayBuffer): string =>
  rustCall((status) =>
    nativeModule().uniffi_internal_fn_func_ffi__arraybuffer_to_string(
      ab,
      status
    )
  );

const stringByteLength = (s: string): number =>
  rustCall((status) =>
    nativeModule().uniffi_internal_fn_func_ffi__string_to_byte_length(s, status)
  );

const FfiConverterString = (() => {
  const lengthConverter = FfiConverterInt32;
  type TypeName = string;
  class FFIConverter implements FfiConverter<ArrayBuffer, TypeName> {
    lift(value: ArrayBuffer): TypeName {
      return arrayBufferToString(value);
    }
    lower(value: TypeName): ArrayBuffer {
      return stringToArrayBuffer(value);
    }
    read(from: RustBuffer): TypeName {
      const length = lengthConverter.read(from);
      const bytes = from.readBytes(length);
      return arrayBufferToString(bytes);
    }
    write(value: TypeName, into: RustBuffer): void {
      const buffer = stringToArrayBuffer(value);
      const numBytes = buffer.byteLength;
      lengthConverter.write(numBytes, into);
      into.writeBytes(buffer);
    }
    allocationSize(value: TypeName): number {
      return lengthConverter.allocationSize(0) + stringByteLength(value);
    }
  }

  return new FFIConverter();
})();

// Error type: ComputationError

// Enum: ComputationError
export enum ComputationError_Tags {
  DivisionByZero = 'DivisionByZero',
  Overflow = 'Overflow',
  IllegalComputationWithInitState = 'IllegalComputationWithInitState',
}
export const ComputationError = (() => {
  type DivisionByZero__interface = {
    tag: ComputationError_Tags.DivisionByZero;
  };

  class DivisionByZero_
    extends UniffiError
    implements DivisionByZero__interface
  {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'ComputationError';
    readonly tag = ComputationError_Tags.DivisionByZero;
    constructor() {
      super('ComputationError', 'DivisionByZero');
    }

    static new(): DivisionByZero_ {
      return new DivisionByZero_();
    }

    static instanceOf(obj: any): obj is DivisionByZero_ {
      return obj.tag === ComputationError_Tags.DivisionByZero;
    }

    static hasInner(obj: any): obj is DivisionByZero_ {
      return false;
    }
  }

  type Overflow__interface = {
    tag: ComputationError_Tags.Overflow;
  };

  class Overflow_ extends UniffiError implements Overflow__interface {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'ComputationError';
    readonly tag = ComputationError_Tags.Overflow;
    constructor() {
      super('ComputationError', 'Overflow');
    }

    static new(): Overflow_ {
      return new Overflow_();
    }

    static instanceOf(obj: any): obj is Overflow_ {
      return obj.tag === ComputationError_Tags.Overflow;
    }

    static hasInner(obj: any): obj is Overflow_ {
      return false;
    }
  }

  type IllegalComputationWithInitState__interface = {
    tag: ComputationError_Tags.IllegalComputationWithInitState;
  };

  class IllegalComputationWithInitState_
    extends UniffiError
    implements IllegalComputationWithInitState__interface
  {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'ComputationError';
    readonly tag = ComputationError_Tags.IllegalComputationWithInitState;
    constructor() {
      super('ComputationError', 'IllegalComputationWithInitState');
    }

    static new(): IllegalComputationWithInitState_ {
      return new IllegalComputationWithInitState_();
    }

    static instanceOf(obj: any): obj is IllegalComputationWithInitState_ {
      return obj.tag === ComputationError_Tags.IllegalComputationWithInitState;
    }

    static hasInner(obj: any): obj is IllegalComputationWithInitState_ {
      return false;
    }
  }

  function instanceOf(obj: any): obj is ComputationError {
    return obj[uniffiTypeNameSymbol] === 'ComputationError';
  }

  return Object.freeze({
    instanceOf,
    DivisionByZero: DivisionByZero_,
    Overflow: Overflow_,
    IllegalComputationWithInitState: IllegalComputationWithInitState_,
  });
})();

export type ComputationError = InstanceType<
  (typeof ComputationError)[keyof Omit<typeof ComputationError, 'instanceOf'>]
>;

// FfiConverter for enum ComputationError
const FfiConverterTypeComputationError = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = ComputationError;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return new ComputationError.DivisionByZero();
        case 2:
          return new ComputationError.Overflow();
        case 3:
          return new ComputationError.IllegalComputationWithInitState();
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value.tag) {
        case ComputationError_Tags.DivisionByZero: {
          ordinalConverter.write(1, into);
          return;
        }
        case ComputationError_Tags.Overflow: {
          ordinalConverter.write(2, into);
          return;
        }
        case ComputationError_Tags.IllegalComputationWithInitState: {
          ordinalConverter.write(3, into);
          return;
        }
        default:
          // Throwing from here means that ComputationError_Tags hasn't matched an ordinal.
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    allocationSize(value: TypeName): number {
      switch (value.tag) {
        case ComputationError_Tags.DivisionByZero: {
          return ordinalConverter.allocationSize(1);
        }
        case ComputationError_Tags.Overflow: {
          return ordinalConverter.allocationSize(2);
        }
        case ComputationError_Tags.IllegalComputationWithInitState: {
          return ordinalConverter.allocationSize(3);
        }
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
  }
  return new FFIConverter();
})();

// Enum: ComputationState
export enum ComputationState_Tags {
  Init = 'Init',
  Computed = 'Computed',
}
export const ComputationState = (() => {
  type Init__interface = {
    tag: ComputationState_Tags.Init;
  };

  /**
   * Initial state with no value computed
   */
  class Init_ extends UniffiEnum implements Init__interface {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'ComputationState';
    readonly tag = ComputationState_Tags.Init;
    constructor() {
      super('ComputationState', 'Init');
    }

    static new(): Init_ {
      return new Init_();
    }

    static instanceOf(obj: any): obj is Init_ {
      return obj.tag === ComputationState_Tags.Init;
    }
  }

  type Computed__interface = {
    tag: ComputationState_Tags.Computed;
    inner: Readonly<{ result: ComputationResult }>;
  };

  class Computed_ extends UniffiEnum implements Computed__interface {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'ComputationState';
    readonly tag = ComputationState_Tags.Computed;
    readonly inner: Readonly<{ result: ComputationResult }>;
    constructor(inner: { result: ComputationResult }) {
      super('ComputationState', 'Computed');
      this.inner = Object.freeze(inner);
    }

    static new(inner: { result: ComputationResult }): Computed_ {
      return new Computed_(inner);
    }

    static instanceOf(obj: any): obj is Computed_ {
      return obj.tag === ComputationState_Tags.Computed;
    }
  }

  function instanceOf(obj: any): obj is ComputationState {
    return obj[uniffiTypeNameSymbol] === 'ComputationState';
  }

  return Object.freeze({
    instanceOf,
    Init: Init_,
    Computed: Computed_,
  });
})();

export type ComputationState = InstanceType<
  (typeof ComputationState)[keyof Omit<typeof ComputationState, 'instanceOf'>]
>;

// FfiConverter for enum ComputationState
const FfiConverterTypeComputationState = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = ComputationState;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return new ComputationState.Init();
        case 2:
          return new ComputationState.Computed({
            result: FfiConverterTypeComputationResult.read(from),
          });
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value.tag) {
        case ComputationState_Tags.Init: {
          ordinalConverter.write(1, into);
          return;
        }
        case ComputationState_Tags.Computed: {
          ordinalConverter.write(2, into);
          const inner = value.inner;
          FfiConverterTypeComputationResult.write(inner.result, into);
          return;
        }
        default:
          // Throwing from here means that ComputationState_Tags hasn't matched an ordinal.
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    allocationSize(value: TypeName): number {
      switch (value.tag) {
        case ComputationState_Tags.Init: {
          return ordinalConverter.allocationSize(1);
        }
        case ComputationState_Tags.Computed: {
          const inner = value.inner;
          let size = ordinalConverter.allocationSize(2);
          size += FfiConverterTypeComputationResult.allocationSize(
            inner.result
          );
          return size;
        }
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
  }
  return new FFIConverter();
})();

/**
 * A binary operator that performs some mathematical operation with two numbers.
 */
export interface BinaryOperator {
  perform(lhs: /*i64*/ bigint, rhs: /*i64*/ bigint) /*throws*/ : /*i64*/ bigint;
}

/**
 * A binary operator that performs some mathematical operation with two numbers.
 */
export class BinaryOperatorImpl
  extends UniffiAbstractObject
  implements BinaryOperator
{
  readonly [uniffiTypeNameSymbol] = 'BinaryOperatorImpl';
  readonly [destructorGuardSymbol]: UniffiRustArcPtr;
  readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
  // No primary constructor declared for this class.
  private constructor(pointer: UnsafeMutableRawPointer) {
    super();
    this[pointerLiteralSymbol] = pointer;
    this[destructorGuardSymbol] =
      uniffiTypeBinaryOperatorImplObjectFactory.bless(pointer);
  }

  public perform(
    lhs: /*i64*/ bigint,
    rhs: /*i64*/ bigint
  ): /*i64*/ bigint /*throws*/ {
    return FfiConverterInt64.lift(
      rustCallWithError(
        /*liftError:*/ FfiConverterTypeComputationError.lift.bind(
          FfiConverterTypeComputationError
        ),
        /*caller:*/ (callStatus) => {
          return nativeModule().uniffi_foobar_fn_method_binaryoperator_perform(
            uniffiTypeBinaryOperatorImplObjectFactory.clonePointer(this),
            FfiConverterInt64.lower(lhs),
            FfiConverterInt64.lower(rhs),
            callStatus
          );
        },
        /*liftString:*/ FfiConverterString.lift
      )
    );
  }

  /**
   * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
   */
  uniffiDestroy(): void {
    if ((this as any)[destructorGuardSymbol]) {
      const pointer = uniffiTypeBinaryOperatorImplObjectFactory.pointer(this);
      uniffiTypeBinaryOperatorImplObjectFactory.freePointer(pointer);
      this[destructorGuardSymbol].markDestroyed();
      delete (this as any)[destructorGuardSymbol];
    }
  }

  static instanceOf(obj: any): obj is BinaryOperatorImpl {
    return uniffiTypeBinaryOperatorImplObjectFactory.isConcreteType(obj);
  }
}

const uniffiTypeBinaryOperatorImplObjectFactory: UniffiObjectFactory<BinaryOperator> =
  {
    create(pointer: UnsafeMutableRawPointer): BinaryOperator {
      const instance = Object.create(BinaryOperatorImpl.prototype);
      instance[pointerLiteralSymbol] = pointer;
      instance[destructorGuardSymbol] = this.bless(pointer);
      instance[uniffiTypeNameSymbol] = 'BinaryOperatorImpl';
      return instance;
    },

    bless(p: UnsafeMutableRawPointer): UniffiRustArcPtr {
      return rustCall(
        /*caller:*/ (status) =>
          nativeModule().uniffi_internal_fn_method_binaryoperator_ffi__bless_pointer(
            p,
            status
          ),
        /*liftString:*/ FfiConverterString.lift
      );
    },

    pointer(obj: BinaryOperator): UnsafeMutableRawPointer {
      if ((obj as any)[destructorGuardSymbol] === undefined) {
        throw new UniffiInternalError.UnexpectedNullPointer();
      }
      return (obj as any)[pointerLiteralSymbol];
    },

    clonePointer(obj: BinaryOperator): UnsafeMutableRawPointer {
      const pointer = this.pointer(obj);
      return rustCall(
        /*caller:*/ (callStatus) =>
          nativeModule().uniffi_foobar_fn_clone_binaryoperator(
            pointer,
            callStatus
          ),
        /*liftString:*/ FfiConverterString.lift
      );
    },

    freePointer(pointer: UnsafeMutableRawPointer): void {
      rustCall(
        /*caller:*/ (callStatus) =>
          nativeModule().uniffi_foobar_fn_free_binaryoperator(
            pointer,
            callStatus
          ),
        /*liftString:*/ FfiConverterString.lift
      );
    },

    isConcreteType(obj: any): obj is BinaryOperator {
      return (
        obj[destructorGuardSymbol] &&
        obj[uniffiTypeNameSymbol] === 'BinaryOperatorImpl'
      );
    },
  };
// FfiConverter for BinaryOperator
const FfiConverterTypeBinaryOperator = new FfiConverterObjectWithCallbacks(
  uniffiTypeBinaryOperatorImplObjectFactory
);

// Add a vtavble for the callbacks that go in BinaryOperator.

// Put the implementation in a struct so we don't pollute the top-level namespace
const uniffiCallbackInterfaceBinaryOperator: {
  vtable: UniffiVTableCallbackInterfaceBinaryOperator;
  register: () => void;
} = {
  // Create the VTable using a series of closures.
  // ts automatically converts these into C callback functions.
  vtable: {
    perform: (
      uniffiHandle: bigint,
      lhs: bigint,
      rhs: bigint,
      uniffiOutReturn: UniffiReferenceHolder<bigint>,
      uniffiCallStatus: UniffiRustCallStatus
    ) => {
      const uniffiMakeCall = (): /*i64*/ bigint => {
        const jsCallback = FfiConverterTypeBinaryOperator.lift(uniffiHandle);
        return jsCallback.perform(
          FfiConverterInt64.lift(lhs),
          FfiConverterInt64.lift(rhs)
        );
      };

      const uniffiWriteReturn = (obj: any) => {
        uniffiOutReturn.pointee = FfiConverterInt64.lower(obj);
      };
      uniffiTraitInterfaceCallWithError(
        /*callStatus:*/ uniffiCallStatus,
        /*makeCall:*/ uniffiMakeCall,
        /*writeReturn:*/ uniffiWriteReturn,
        /*isErrorType:*/ ComputationError.instanceOf,
        /*lowerError:*/ FfiConverterTypeComputationError.lower.bind(
          FfiConverterTypeComputationError
        ),
        /*lowerString:*/ FfiConverterString.lower
      );
    },
    uniffiFree: (uniffiHandle: UniffiHandle): void => {
      // BinaryOperator: this will throw a stale handle error if the handle isn't found.
      FfiConverterTypeBinaryOperator.drop(uniffiHandle);
    },
  },
  register: () => {
    nativeModule().uniffi_foobar_fn_init_callback_vtable_binaryoperator(
      uniffiCallbackInterfaceBinaryOperator.vtable
    );
  },
};

/**
 * A somewhat silly demonstration of functional core/imperative shell in the form of a calculator with arbitrary operators.
 *
 * Operations return a new calculator with updated internal state reflecting the computation.
 */
export interface CalculatorInterface {
  /**
   * Performs a calculation using the supplied binary operator and operands.
   */
  calculate(
    op: BinaryOperator,
    lhs: /*i64*/ bigint,
    rhs: /*i64*/ bigint
  ) /*throws*/ : CalculatorInterface;
  /**
   * Performs a calculation using the supplied binary operator, the last computation result, and the supplied operand.
   *
   * The supplied operand will be the right-hand side in the mathematical operation.
   */
  calculateMore(
    op: BinaryOperator,
    rhs: /*i64*/ bigint
  ) /*throws*/ : CalculatorInterface;
  lastResult(): ComputationResult | undefined;
}

/**
 * A somewhat silly demonstration of functional core/imperative shell in the form of a calculator with arbitrary operators.
 *
 * Operations return a new calculator with updated internal state reflecting the computation.
 */
export class Calculator
  extends UniffiAbstractObject
  implements CalculatorInterface
{
  readonly [uniffiTypeNameSymbol] = 'Calculator';
  readonly [destructorGuardSymbol]: UniffiRustArcPtr;
  readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
  constructor() {
    super();
    const pointer = rustCall(
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_foobar_fn_constructor_calculator_new(
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    );
    this[pointerLiteralSymbol] = pointer;
    this[destructorGuardSymbol] =
      uniffiTypeCalculatorObjectFactory.bless(pointer);
  }

  /**
   * Performs a calculation using the supplied binary operator and operands.
   */
  public calculate(
    op: BinaryOperator,
    lhs: /*i64*/ bigint,
    rhs: /*i64*/ bigint
  ): CalculatorInterface /*throws*/ {
    return FfiConverterTypeCalculator.lift(
      rustCallWithError(
        /*liftError:*/ FfiConverterTypeComputationError.lift.bind(
          FfiConverterTypeComputationError
        ),
        /*caller:*/ (callStatus) => {
          return nativeModule().uniffi_foobar_fn_method_calculator_calculate(
            uniffiTypeCalculatorObjectFactory.clonePointer(this),
            FfiConverterTypeBinaryOperator.lower(op),
            FfiConverterInt64.lower(lhs),
            FfiConverterInt64.lower(rhs),
            callStatus
          );
        },
        /*liftString:*/ FfiConverterString.lift
      )
    );
  }

  /**
   * Performs a calculation using the supplied binary operator, the last computation result, and the supplied operand.
   *
   * The supplied operand will be the right-hand side in the mathematical operation.
   */
  public calculateMore(
    op: BinaryOperator,
    rhs: /*i64*/ bigint
  ): CalculatorInterface /*throws*/ {
    return FfiConverterTypeCalculator.lift(
      rustCallWithError(
        /*liftError:*/ FfiConverterTypeComputationError.lift.bind(
          FfiConverterTypeComputationError
        ),
        /*caller:*/ (callStatus) => {
          return nativeModule().uniffi_foobar_fn_method_calculator_calculate_more(
            uniffiTypeCalculatorObjectFactory.clonePointer(this),
            FfiConverterTypeBinaryOperator.lower(op),
            FfiConverterInt64.lower(rhs),
            callStatus
          );
        },
        /*liftString:*/ FfiConverterString.lift
      )
    );
  }

  public lastResult(): ComputationResult | undefined {
    return FfiConverterOptionalTypeComputationResult.lift(
      rustCall(
        /*caller:*/ (callStatus) => {
          return nativeModule().uniffi_foobar_fn_method_calculator_last_result(
            uniffiTypeCalculatorObjectFactory.clonePointer(this),
            callStatus
          );
        },
        /*liftString:*/ FfiConverterString.lift
      )
    );
  }

  /**
   * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
   */
  uniffiDestroy(): void {
    if ((this as any)[destructorGuardSymbol]) {
      const pointer = uniffiTypeCalculatorObjectFactory.pointer(this);
      uniffiTypeCalculatorObjectFactory.freePointer(pointer);
      this[destructorGuardSymbol].markDestroyed();
      delete (this as any)[destructorGuardSymbol];
    }
  }

  static instanceOf(obj: any): obj is Calculator {
    return uniffiTypeCalculatorObjectFactory.isConcreteType(obj);
  }
}

const uniffiTypeCalculatorObjectFactory: UniffiObjectFactory<CalculatorInterface> =
  {
    create(pointer: UnsafeMutableRawPointer): CalculatorInterface {
      const instance = Object.create(Calculator.prototype);
      instance[pointerLiteralSymbol] = pointer;
      instance[destructorGuardSymbol] = this.bless(pointer);
      instance[uniffiTypeNameSymbol] = 'Calculator';
      return instance;
    },

    bless(p: UnsafeMutableRawPointer): UniffiRustArcPtr {
      return rustCall(
        /*caller:*/ (status) =>
          nativeModule().uniffi_internal_fn_method_calculator_ffi__bless_pointer(
            p,
            status
          ),
        /*liftString:*/ FfiConverterString.lift
      );
    },

    pointer(obj: CalculatorInterface): UnsafeMutableRawPointer {
      if ((obj as any)[destructorGuardSymbol] === undefined) {
        throw new UniffiInternalError.UnexpectedNullPointer();
      }
      return (obj as any)[pointerLiteralSymbol];
    },

    clonePointer(obj: CalculatorInterface): UnsafeMutableRawPointer {
      const pointer = this.pointer(obj);
      return rustCall(
        /*caller:*/ (callStatus) =>
          nativeModule().uniffi_foobar_fn_clone_calculator(pointer, callStatus),
        /*liftString:*/ FfiConverterString.lift
      );
    },

    freePointer(pointer: UnsafeMutableRawPointer): void {
      rustCall(
        /*caller:*/ (callStatus) =>
          nativeModule().uniffi_foobar_fn_free_calculator(pointer, callStatus),
        /*liftString:*/ FfiConverterString.lift
      );
    },

    isConcreteType(obj: any): obj is CalculatorInterface {
      return (
        obj[destructorGuardSymbol] && obj[uniffiTypeNameSymbol] === 'Calculator'
      );
    },
  };
// FfiConverter for CalculatorInterface
const FfiConverterTypeCalculator = new FfiConverterObject(
  uniffiTypeCalculatorObjectFactory
);

export interface SafeAdditionInterface {
  perform(lhs: /*i64*/ bigint, rhs: /*i64*/ bigint) /*throws*/ : /*i64*/ bigint;
}

export class SafeAddition
  extends UniffiAbstractObject
  implements SafeAdditionInterface
{
  readonly [uniffiTypeNameSymbol] = 'SafeAddition';
  readonly [destructorGuardSymbol]: UniffiRustArcPtr;
  readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
  constructor() {
    super();
    const pointer = rustCall(
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_foobar_fn_constructor_safeaddition_new(
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    );
    this[pointerLiteralSymbol] = pointer;
    this[destructorGuardSymbol] =
      uniffiTypeSafeAdditionObjectFactory.bless(pointer);
  }

  public perform(
    lhs: /*i64*/ bigint,
    rhs: /*i64*/ bigint
  ): /*i64*/ bigint /*throws*/ {
    return FfiConverterInt64.lift(
      rustCallWithError(
        /*liftError:*/ FfiConverterTypeComputationError.lift.bind(
          FfiConverterTypeComputationError
        ),
        /*caller:*/ (callStatus) => {
          return nativeModule().uniffi_foobar_fn_method_safeaddition_perform(
            uniffiTypeSafeAdditionObjectFactory.clonePointer(this),
            FfiConverterInt64.lower(lhs),
            FfiConverterInt64.lower(rhs),
            callStatus
          );
        },
        /*liftString:*/ FfiConverterString.lift
      )
    );
  }

  /**
   * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
   */
  uniffiDestroy(): void {
    if ((this as any)[destructorGuardSymbol]) {
      const pointer = uniffiTypeSafeAdditionObjectFactory.pointer(this);
      uniffiTypeSafeAdditionObjectFactory.freePointer(pointer);
      this[destructorGuardSymbol].markDestroyed();
      delete (this as any)[destructorGuardSymbol];
    }
  }

  static instanceOf(obj: any): obj is SafeAddition {
    return uniffiTypeSafeAdditionObjectFactory.isConcreteType(obj);
  }
}

const uniffiTypeSafeAdditionObjectFactory: UniffiObjectFactory<SafeAdditionInterface> =
  {
    create(pointer: UnsafeMutableRawPointer): SafeAdditionInterface {
      const instance = Object.create(SafeAddition.prototype);
      instance[pointerLiteralSymbol] = pointer;
      instance[destructorGuardSymbol] = this.bless(pointer);
      instance[uniffiTypeNameSymbol] = 'SafeAddition';
      return instance;
    },

    bless(p: UnsafeMutableRawPointer): UniffiRustArcPtr {
      return rustCall(
        /*caller:*/ (status) =>
          nativeModule().uniffi_internal_fn_method_safeaddition_ffi__bless_pointer(
            p,
            status
          ),
        /*liftString:*/ FfiConverterString.lift
      );
    },

    pointer(obj: SafeAdditionInterface): UnsafeMutableRawPointer {
      if ((obj as any)[destructorGuardSymbol] === undefined) {
        throw new UniffiInternalError.UnexpectedNullPointer();
      }
      return (obj as any)[pointerLiteralSymbol];
    },

    clonePointer(obj: SafeAdditionInterface): UnsafeMutableRawPointer {
      const pointer = this.pointer(obj);
      return rustCall(
        /*caller:*/ (callStatus) =>
          nativeModule().uniffi_foobar_fn_clone_safeaddition(
            pointer,
            callStatus
          ),
        /*liftString:*/ FfiConverterString.lift
      );
    },

    freePointer(pointer: UnsafeMutableRawPointer): void {
      rustCall(
        /*caller:*/ (callStatus) =>
          nativeModule().uniffi_foobar_fn_free_safeaddition(
            pointer,
            callStatus
          ),
        /*liftString:*/ FfiConverterString.lift
      );
    },

    isConcreteType(obj: any): obj is SafeAdditionInterface {
      return (
        obj[destructorGuardSymbol] &&
        obj[uniffiTypeNameSymbol] === 'SafeAddition'
      );
    },
  };
// FfiConverter for SafeAdditionInterface
const FfiConverterTypeSafeAddition = new FfiConverterObject(
  uniffiTypeSafeAdditionObjectFactory
);

export interface SafeDivisionInterface {
  perform(lhs: /*i64*/ bigint, rhs: /*i64*/ bigint) /*throws*/ : /*i64*/ bigint;
}

export class SafeDivision
  extends UniffiAbstractObject
  implements SafeDivisionInterface
{
  readonly [uniffiTypeNameSymbol] = 'SafeDivision';
  readonly [destructorGuardSymbol]: UniffiRustArcPtr;
  readonly [pointerLiteralSymbol]: UnsafeMutableRawPointer;
  constructor() {
    super();
    const pointer = rustCall(
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_foobar_fn_constructor_safedivision_new(
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    );
    this[pointerLiteralSymbol] = pointer;
    this[destructorGuardSymbol] =
      uniffiTypeSafeDivisionObjectFactory.bless(pointer);
  }

  public perform(
    lhs: /*i64*/ bigint,
    rhs: /*i64*/ bigint
  ): /*i64*/ bigint /*throws*/ {
    return FfiConverterInt64.lift(
      rustCallWithError(
        /*liftError:*/ FfiConverterTypeComputationError.lift.bind(
          FfiConverterTypeComputationError
        ),
        /*caller:*/ (callStatus) => {
          return nativeModule().uniffi_foobar_fn_method_safedivision_perform(
            uniffiTypeSafeDivisionObjectFactory.clonePointer(this),
            FfiConverterInt64.lower(lhs),
            FfiConverterInt64.lower(rhs),
            callStatus
          );
        },
        /*liftString:*/ FfiConverterString.lift
      )
    );
  }

  /**
   * {@inheritDoc uniffi-bindgen-react-native#UniffiAbstractObject.uniffiDestroy}
   */
  uniffiDestroy(): void {
    if ((this as any)[destructorGuardSymbol]) {
      const pointer = uniffiTypeSafeDivisionObjectFactory.pointer(this);
      uniffiTypeSafeDivisionObjectFactory.freePointer(pointer);
      this[destructorGuardSymbol].markDestroyed();
      delete (this as any)[destructorGuardSymbol];
    }
  }

  static instanceOf(obj: any): obj is SafeDivision {
    return uniffiTypeSafeDivisionObjectFactory.isConcreteType(obj);
  }
}

const uniffiTypeSafeDivisionObjectFactory: UniffiObjectFactory<SafeDivisionInterface> =
  {
    create(pointer: UnsafeMutableRawPointer): SafeDivisionInterface {
      const instance = Object.create(SafeDivision.prototype);
      instance[pointerLiteralSymbol] = pointer;
      instance[destructorGuardSymbol] = this.bless(pointer);
      instance[uniffiTypeNameSymbol] = 'SafeDivision';
      return instance;
    },

    bless(p: UnsafeMutableRawPointer): UniffiRustArcPtr {
      return rustCall(
        /*caller:*/ (status) =>
          nativeModule().uniffi_internal_fn_method_safedivision_ffi__bless_pointer(
            p,
            status
          ),
        /*liftString:*/ FfiConverterString.lift
      );
    },

    pointer(obj: SafeDivisionInterface): UnsafeMutableRawPointer {
      if ((obj as any)[destructorGuardSymbol] === undefined) {
        throw new UniffiInternalError.UnexpectedNullPointer();
      }
      return (obj as any)[pointerLiteralSymbol];
    },

    clonePointer(obj: SafeDivisionInterface): UnsafeMutableRawPointer {
      const pointer = this.pointer(obj);
      return rustCall(
        /*caller:*/ (callStatus) =>
          nativeModule().uniffi_foobar_fn_clone_safedivision(
            pointer,
            callStatus
          ),
        /*liftString:*/ FfiConverterString.lift
      );
    },

    freePointer(pointer: UnsafeMutableRawPointer): void {
      rustCall(
        /*caller:*/ (callStatus) =>
          nativeModule().uniffi_foobar_fn_free_safedivision(
            pointer,
            callStatus
          ),
        /*liftString:*/ FfiConverterString.lift
      );
    },

    isConcreteType(obj: any): obj is SafeDivisionInterface {
      return (
        obj[destructorGuardSymbol] &&
        obj[uniffiTypeNameSymbol] === 'SafeDivision'
      );
    },
  };
// FfiConverter for SafeDivisionInterface
const FfiConverterTypeSafeDivision = new FfiConverterObject(
  uniffiTypeSafeDivisionObjectFactory
);

// FfiConverter for ComputationResult | undefined
const FfiConverterOptionalTypeComputationResult = new FfiConverterOptional(
  FfiConverterTypeComputationResult
);

/**
 * This should be called before anything else.
 *
 * It is likely that this is being done for you by the library's `index.ts`.
 *
 * It checks versions of uniffi between when the Rust scaffolding was generated
 * and when the bindings were generated.
 *
 * It also initializes the machinery to enable Rust to talk back to Javascript.
 */
function uniffiEnsureInitialized() {
  // Get the bindings contract version from our ComponentInterface
  const bindingsContractVersion = 26;
  // Get the scaffolding contract version by calling the into the dylib
  const scaffoldingContractVersion =
    nativeModule().ffi_foobar_uniffi_contract_version();
  if (bindingsContractVersion !== scaffoldingContractVersion) {
    throw new UniffiInternalError.ContractVersionMismatch(
      scaffoldingContractVersion,
      bindingsContractVersion
    );
  }
  if (
    nativeModule().uniffi_foobar_checksum_func_safe_addition_operator() !== 2550
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_foobar_checksum_func_safe_addition_operator'
    );
  }
  if (
    nativeModule().uniffi_foobar_checksum_func_safe_division_operator() !==
    26772
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_foobar_checksum_func_safe_division_operator'
    );
  }
  if (
    nativeModule().uniffi_foobar_checksum_method_binaryoperator_perform() !==
    14159
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_foobar_checksum_method_binaryoperator_perform'
    );
  }
  if (
    nativeModule().uniffi_foobar_checksum_method_calculator_calculate() !==
    63226
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_foobar_checksum_method_calculator_calculate'
    );
  }
  if (
    nativeModule().uniffi_foobar_checksum_method_calculator_calculate_more() !==
    55050
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_foobar_checksum_method_calculator_calculate_more'
    );
  }
  if (
    nativeModule().uniffi_foobar_checksum_method_calculator_last_result() !==
    48598
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_foobar_checksum_method_calculator_last_result'
    );
  }
  if (
    nativeModule().uniffi_foobar_checksum_method_safeaddition_perform() !==
    41639
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_foobar_checksum_method_safeaddition_perform'
    );
  }
  if (
    nativeModule().uniffi_foobar_checksum_method_safedivision_perform() !==
    11259
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_foobar_checksum_method_safedivision_perform'
    );
  }
  if (
    nativeModule().uniffi_foobar_checksum_constructor_calculator_new() !== 50473
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_foobar_checksum_constructor_calculator_new'
    );
  }
  if (
    nativeModule().uniffi_foobar_checksum_constructor_safeaddition_new() !==
    7323
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_foobar_checksum_constructor_safeaddition_new'
    );
  }
  if (
    nativeModule().uniffi_foobar_checksum_constructor_safedivision_new() !==
    18654
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_foobar_checksum_constructor_safedivision_new'
    );
  }

  uniffiCallbackInterfaceBinaryOperator.register();
}

export default Object.freeze({
  initialize: uniffiEnsureInitialized,
  converters: {
    FfiConverterTypeBinaryOperator,
    FfiConverterTypeCalculator,
    FfiConverterTypeComputationResult,
    FfiConverterTypeComputationState,
    FfiConverterTypeSafeAddition,
    FfiConverterTypeSafeDivision,
  },
});
