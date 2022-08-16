import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IAxelarGasServiceInterface extends utils.Interface {
    functions: {
        "addGas(bytes32,uint256,address,uint256,address)": FunctionFragment;
        "addNativeGas(bytes32,uint256,address)": FunctionFragment;
        "collectFees(address,address[])": FunctionFragment;
        "contractId()": FunctionFragment;
        "owner()": FunctionFragment;
        "payGasForContractCall(address,string,string,bytes,address,uint256,address)": FunctionFragment;
        "payGasForContractCallWithToken(address,string,string,bytes,string,uint256,address,uint256,address)": FunctionFragment;
        "payNativeGasForContractCall(address,string,string,bytes,address)": FunctionFragment;
        "payNativeGasForContractCallWithToken(address,string,string,bytes,string,uint256,address)": FunctionFragment;
        "refund(address,address,uint256)": FunctionFragment;
        "setup(bytes)": FunctionFragment;
        "upgrade(address,bytes32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addGas" | "addNativeGas" | "collectFees" | "contractId" | "owner" | "payGasForContractCall" | "payGasForContractCallWithToken" | "payNativeGasForContractCall" | "payNativeGasForContractCallWithToken" | "refund" | "setup" | "upgrade"): FunctionFragment;
    encodeFunctionData(functionFragment: "addGas", values: [BytesLike, BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "addNativeGas", values: [BytesLike, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "collectFees", values: [string, string[]]): string;
    encodeFunctionData(functionFragment: "contractId", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "payGasForContractCall", values: [string, string, string, BytesLike, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "payGasForContractCallWithToken", values: [
        string,
        string,
        string,
        BytesLike,
        string,
        BigNumberish,
        string,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "payNativeGasForContractCall", values: [string, string, string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "payNativeGasForContractCallWithToken", values: [string, string, string, BytesLike, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "refund", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setup", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "upgrade", values: [string, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "addGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addNativeGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payGasForContractCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payGasForContractCallWithToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payNativeGasForContractCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payNativeGasForContractCallWithToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
    events: {
        "GasAdded(bytes32,uint256,address,uint256,address)": EventFragment;
        "GasPaidForContractCall(address,string,string,bytes32,address,uint256,address)": EventFragment;
        "GasPaidForContractCallWithToken(address,string,string,bytes32,string,uint256,address,uint256,address)": EventFragment;
        "NativeGasAdded(bytes32,uint256,uint256,address)": EventFragment;
        "NativeGasPaidForContractCall(address,string,string,bytes32,uint256,address)": EventFragment;
        "NativeGasPaidForContractCallWithToken(address,string,string,bytes32,string,uint256,uint256,address)": EventFragment;
        "OwnershipTransferred(address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GasAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasPaidForContractCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasPaidForContractCallWithToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NativeGasAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NativeGasPaidForContractCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NativeGasPaidForContractCallWithToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface GasAddedEventObject {
    txHash: string;
    logIndex: BigNumber;
    gasToken: string;
    gasFeeAmount: BigNumber;
    refundAddress: string;
}
export declare type GasAddedEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    string
], GasAddedEventObject>;
export declare type GasAddedEventFilter = TypedEventFilter<GasAddedEvent>;
export interface GasPaidForContractCallEventObject {
    sourceAddress: string;
    destinationChain: string;
    destinationAddress: string;
    payloadHash: string;
    gasToken: string;
    gasFeeAmount: BigNumber;
    refundAddress: string;
}
export declare type GasPaidForContractCallEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    string
], GasPaidForContractCallEventObject>;
export declare type GasPaidForContractCallEventFilter = TypedEventFilter<GasPaidForContractCallEvent>;
export interface GasPaidForContractCallWithTokenEventObject {
    sourceAddress: string;
    destinationChain: string;
    destinationAddress: string;
    payloadHash: string;
    symbol: string;
    amount: BigNumber;
    gasToken: string;
    gasFeeAmount: BigNumber;
    refundAddress: string;
}
export declare type GasPaidForContractCallWithTokenEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    string
], GasPaidForContractCallWithTokenEventObject>;
export declare type GasPaidForContractCallWithTokenEventFilter = TypedEventFilter<GasPaidForContractCallWithTokenEvent>;
export interface NativeGasAddedEventObject {
    txHash: string;
    logIndex: BigNumber;
    gasFeeAmount: BigNumber;
    refundAddress: string;
}
export declare type NativeGasAddedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string
], NativeGasAddedEventObject>;
export declare type NativeGasAddedEventFilter = TypedEventFilter<NativeGasAddedEvent>;
export interface NativeGasPaidForContractCallEventObject {
    sourceAddress: string;
    destinationChain: string;
    destinationAddress: string;
    payloadHash: string;
    gasFeeAmount: BigNumber;
    refundAddress: string;
}
export declare type NativeGasPaidForContractCallEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string
], NativeGasPaidForContractCallEventObject>;
export declare type NativeGasPaidForContractCallEventFilter = TypedEventFilter<NativeGasPaidForContractCallEvent>;
export interface NativeGasPaidForContractCallWithTokenEventObject {
    sourceAddress: string;
    destinationChain: string;
    destinationAddress: string;
    payloadHash: string;
    symbol: string;
    amount: BigNumber;
    gasFeeAmount: BigNumber;
    refundAddress: string;
}
export declare type NativeGasPaidForContractCallWithTokenEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string
], NativeGasPaidForContractCallWithTokenEventObject>;
export declare type NativeGasPaidForContractCallWithTokenEventFilter = TypedEventFilter<NativeGasPaidForContractCallWithTokenEvent>;
export interface OwnershipTransferredEventObject {
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface UpgradedEventObject {
    newImplementation: string;
}
export declare type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface IAxelarGasService extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAxelarGasServiceInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addGas(txHash: BytesLike, txIndex: BigNumberish, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addNativeGas(txHash: BytesLike, logIndex: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collectFees(receiver: string, tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        contractId(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        payGasForContractCall(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        payGasForContractCallWithToken(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        payNativeGasForContractCall(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, refundAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        payNativeGasForContractCallWithToken(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        refund(receiver: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setup(data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgrade(newImplementation: string, newImplementationCodeHash: BytesLike, params: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addGas(txHash: BytesLike, txIndex: BigNumberish, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addNativeGas(txHash: BytesLike, logIndex: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collectFees(receiver: string, tokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    contractId(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    payGasForContractCall(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    payGasForContractCallWithToken(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    payNativeGasForContractCall(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, refundAddress: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    payNativeGasForContractCallWithToken(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    refund(receiver: string, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setup(data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgrade(newImplementation: string, newImplementationCodeHash: BytesLike, params: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addGas(txHash: BytesLike, txIndex: BigNumberish, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: CallOverrides): Promise<void>;
        addNativeGas(txHash: BytesLike, logIndex: BigNumberish, refundAddress: string, overrides?: CallOverrides): Promise<void>;
        collectFees(receiver: string, tokens: string[], overrides?: CallOverrides): Promise<void>;
        contractId(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        payGasForContractCall(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: CallOverrides): Promise<void>;
        payGasForContractCallWithToken(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: CallOverrides): Promise<void>;
        payNativeGasForContractCall(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, refundAddress: string, overrides?: CallOverrides): Promise<void>;
        payNativeGasForContractCallWithToken(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, refundAddress: string, overrides?: CallOverrides): Promise<void>;
        refund(receiver: string, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setup(data: BytesLike, overrides?: CallOverrides): Promise<void>;
        upgrade(newImplementation: string, newImplementationCodeHash: BytesLike, params: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "GasAdded(bytes32,uint256,address,uint256,address)"(txHash?: BytesLike | null, logIndex?: BigNumberish | null, gasToken?: null, gasFeeAmount?: null, refundAddress?: null): GasAddedEventFilter;
        GasAdded(txHash?: BytesLike | null, logIndex?: BigNumberish | null, gasToken?: null, gasFeeAmount?: null, refundAddress?: null): GasAddedEventFilter;
        "GasPaidForContractCall(address,string,string,bytes32,address,uint256,address)"(sourceAddress?: string | null, destinationChain?: null, destinationAddress?: null, payloadHash?: BytesLike | null, gasToken?: null, gasFeeAmount?: null, refundAddress?: null): GasPaidForContractCallEventFilter;
        GasPaidForContractCall(sourceAddress?: string | null, destinationChain?: null, destinationAddress?: null, payloadHash?: BytesLike | null, gasToken?: null, gasFeeAmount?: null, refundAddress?: null): GasPaidForContractCallEventFilter;
        "GasPaidForContractCallWithToken(address,string,string,bytes32,string,uint256,address,uint256,address)"(sourceAddress?: string | null, destinationChain?: null, destinationAddress?: null, payloadHash?: BytesLike | null, symbol?: null, amount?: null, gasToken?: null, gasFeeAmount?: null, refundAddress?: null): GasPaidForContractCallWithTokenEventFilter;
        GasPaidForContractCallWithToken(sourceAddress?: string | null, destinationChain?: null, destinationAddress?: null, payloadHash?: BytesLike | null, symbol?: null, amount?: null, gasToken?: null, gasFeeAmount?: null, refundAddress?: null): GasPaidForContractCallWithTokenEventFilter;
        "NativeGasAdded(bytes32,uint256,uint256,address)"(txHash?: BytesLike | null, logIndex?: BigNumberish | null, gasFeeAmount?: null, refundAddress?: null): NativeGasAddedEventFilter;
        NativeGasAdded(txHash?: BytesLike | null, logIndex?: BigNumberish | null, gasFeeAmount?: null, refundAddress?: null): NativeGasAddedEventFilter;
        "NativeGasPaidForContractCall(address,string,string,bytes32,uint256,address)"(sourceAddress?: string | null, destinationChain?: null, destinationAddress?: null, payloadHash?: BytesLike | null, gasFeeAmount?: null, refundAddress?: null): NativeGasPaidForContractCallEventFilter;
        NativeGasPaidForContractCall(sourceAddress?: string | null, destinationChain?: null, destinationAddress?: null, payloadHash?: BytesLike | null, gasFeeAmount?: null, refundAddress?: null): NativeGasPaidForContractCallEventFilter;
        "NativeGasPaidForContractCallWithToken(address,string,string,bytes32,string,uint256,uint256,address)"(sourceAddress?: string | null, destinationChain?: null, destinationAddress?: null, payloadHash?: BytesLike | null, symbol?: null, amount?: null, gasFeeAmount?: null, refundAddress?: null): NativeGasPaidForContractCallWithTokenEventFilter;
        NativeGasPaidForContractCallWithToken(sourceAddress?: string | null, destinationChain?: null, destinationAddress?: null, payloadHash?: BytesLike | null, symbol?: null, amount?: null, gasFeeAmount?: null, refundAddress?: null): NativeGasPaidForContractCallWithTokenEventFilter;
        "OwnershipTransferred(address)"(newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(newOwner?: string | null): OwnershipTransferredEventFilter;
        "Upgraded(address)"(newImplementation?: string | null): UpgradedEventFilter;
        Upgraded(newImplementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        addGas(txHash: BytesLike, txIndex: BigNumberish, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addNativeGas(txHash: BytesLike, logIndex: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collectFees(receiver: string, tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        contractId(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        payGasForContractCall(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        payGasForContractCallWithToken(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        payNativeGasForContractCall(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, refundAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        payNativeGasForContractCallWithToken(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        refund(receiver: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setup(data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgrade(newImplementation: string, newImplementationCodeHash: BytesLike, params: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addGas(txHash: BytesLike, txIndex: BigNumberish, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addNativeGas(txHash: BytesLike, logIndex: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collectFees(receiver: string, tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        contractId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        payGasForContractCall(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        payGasForContractCallWithToken(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, gasToken: string, gasFeeAmount: BigNumberish, refundAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        payNativeGasForContractCall(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, refundAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        payNativeGasForContractCallWithToken(sender: string, destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        refund(receiver: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setup(data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgrade(newImplementation: string, newImplementationCodeHash: BytesLike, params: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
