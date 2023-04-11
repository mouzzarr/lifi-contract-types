import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace ILiFi {
    type BridgeDataStruct = {
        transactionId: PromiseOrValue<BytesLike>;
        bridge: PromiseOrValue<string>;
        integrator: PromiseOrValue<string>;
        referrer: PromiseOrValue<string>;
        sendingAssetId: PromiseOrValue<string>;
        receiver: PromiseOrValue<string>;
        minAmount: PromiseOrValue<BigNumberish>;
        destinationChainId: PromiseOrValue<BigNumberish>;
        hasSourceSwaps: PromiseOrValue<boolean>;
        hasDestinationCall: PromiseOrValue<boolean>;
    };
    type BridgeDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        boolean,
        boolean
    ] & {
        transactionId: string;
        bridge: string;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receiver: string;
        minAmount: BigNumber;
        destinationChainId: BigNumber;
        hasSourceSwaps: boolean;
        hasDestinationCall: boolean;
    };
}
export interface HopFacetPackedInterface extends utils.Interface {
    functions: {
        "encoder_startBridgeTokensViaHopL2ERC20Packed(bytes32,string,address,uint256,address,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "encoder_startBridgeTokensViaHopL2NativePacked(bytes32,string,address,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL1ERC20Min(bytes32,string,address,uint256,address,uint256,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL1NativeMin(bytes32,string,address,uint256,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL2ERC20Min(bytes32,string,address,uint256,address,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL2ERC20Packed()": FunctionFragment;
        "startBridgeTokensViaHopL2NativeMin(bytes32,string,address,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL2NativePacked()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "encoder_startBridgeTokensViaHopL2ERC20Packed" | "encoder_startBridgeTokensViaHopL2NativePacked" | "startBridgeTokensViaHopL1ERC20Min" | "startBridgeTokensViaHopL1NativeMin" | "startBridgeTokensViaHopL2ERC20Min" | "startBridgeTokensViaHopL2ERC20Packed" | "startBridgeTokensViaHopL2NativeMin" | "startBridgeTokensViaHopL2NativePacked"): FunctionFragment;
    encodeFunctionData(functionFragment: "encoder_startBridgeTokensViaHopL2ERC20Packed", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "encoder_startBridgeTokensViaHopL2NativePacked", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL1ERC20Min", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL1NativeMin", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL2ERC20Min", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL2ERC20Packed", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL2NativeMin", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL2NativePacked", values?: undefined): string;
    decodeFunctionResult(functionFragment: "encoder_startBridgeTokensViaHopL2ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encoder_startBridgeTokensViaHopL2NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL1ERC20Min", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL1NativeMin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2ERC20Min", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2NativeMin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2NativePacked", data: BytesLike): Result;
    events: {
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}
export interface LiFiGenericSwapCompletedEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    receiver: string;
    fromAssetId: string;
    toAssetId: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
}
export declare type LiFiGenericSwapCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiGenericSwapCompletedEventObject>;
export declare type LiFiGenericSwapCompletedEventFilter = TypedEventFilter<LiFiGenericSwapCompletedEvent>;
export interface LiFiSwappedGenericEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    fromAssetId: string;
    toAssetId: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
}
export declare type LiFiSwappedGenericEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiSwappedGenericEventObject>;
export declare type LiFiSwappedGenericEventFilter = TypedEventFilter<LiFiSwappedGenericEvent>;
export interface LiFiTransferCompletedEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferCompletedEventObject>;
export declare type LiFiTransferCompletedEventFilter = TypedEventFilter<LiFiTransferCompletedEvent>;
export interface LiFiTransferRecoveredEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferRecoveredEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferRecoveredEventObject>;
export declare type LiFiTransferRecoveredEventFilter = TypedEventFilter<LiFiTransferRecoveredEvent>;
export interface LiFiTransferStartedEventObject {
    bridgeData: ILiFi.BridgeDataStructOutput;
}
export declare type LiFiTransferStartedEvent = TypedEvent<[
    ILiFi.BridgeDataStructOutput
], LiFiTransferStartedEventObject>;
export declare type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface HopFacetPacked extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HopFacetPackedInterface;
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
        encoder_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        encoder_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        startBridgeTokensViaHopL1ERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL1NativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2ERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2ERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2NativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2NativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    encoder_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    encoder_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    startBridgeTokensViaHopL1ERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL1NativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2ERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2ERC20Packed(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2NativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2NativePacked(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        encoder_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        encoder_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        startBridgeTokensViaHopL1ERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL1NativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2ERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2ERC20Packed(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2NativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2NativePacked(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, integrator?: null, referrer?: null, receiver?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiGenericSwapCompletedEventFilter;
        LiFiGenericSwapCompleted(transactionId?: PromiseOrValue<BytesLike> | null, integrator?: null, referrer?: null, receiver?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiGenericSwapCompletedEventFilter;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, integrator?: null, referrer?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiSwappedGenericEventFilter;
        LiFiSwappedGeneric(transactionId?: PromiseOrValue<BytesLike> | null, integrator?: null, referrer?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiSwappedGenericEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        LiFiTransferRecovered(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
    };
    estimateGas: {
        encoder_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        encoder_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        startBridgeTokensViaHopL1ERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL1NativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2ERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2ERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2NativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2NativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        encoder_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encoder_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL1ERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL1NativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2ERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2ERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2NativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2NativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}