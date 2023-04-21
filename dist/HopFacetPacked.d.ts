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
export declare namespace HopFacetOptimized {
    type HopDataStruct = {
        bonderFee: PromiseOrValue<BigNumberish>;
        amountOutMin: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
        destinationAmountOutMin: PromiseOrValue<BigNumberish>;
        destinationDeadline: PromiseOrValue<BigNumberish>;
        hopBridge: PromiseOrValue<string>;
    };
    type HopDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        bonderFee: BigNumber;
        amountOutMin: BigNumber;
        deadline: BigNumber;
        destinationAmountOutMin: BigNumber;
        destinationDeadline: BigNumber;
        hopBridge: string;
    };
}
export interface HopFacetPackedInterface extends utils.Interface {
    functions: {
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "decode_startBridgeTokensViaHopL1ERC20Packed(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaHopL1NativePacked(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaHopL2ERC20Packed(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaHopL2NativePacked(bytes)": FunctionFragment;
        "encode_startBridgeTokensViaHopL1ERC20Packed(bytes8,address,uint256,address,uint256,uint256,address,uint256,address)": FunctionFragment;
        "encode_startBridgeTokensViaHopL1NativePacked(bytes8,address,uint256,uint256,address,uint256,address)": FunctionFragment;
        "encode_startBridgeTokensViaHopL2ERC20Packed(bytes32,address,uint256,address,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "encode_startBridgeTokensViaHopL2NativePacked(bytes8,address,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "setApprovalForHopBridges(address[],address[])": FunctionFragment;
        "startBridgeTokensViaHopL1ERC20Min(bytes8,address,uint256,address,uint256,uint256,address,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL1ERC20Packed()": FunctionFragment;
        "startBridgeTokensViaHopL1NativeMin(bytes8,address,uint256,uint256,address,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL1NativePacked()": FunctionFragment;
        "startBridgeTokensViaHopL2ERC20Min(bytes8,address,uint256,address,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL2ERC20Packed()": FunctionFragment;
        "startBridgeTokensViaHopL2NativeMin(bytes8,address,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL2NativePacked()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "decode_startBridgeTokensViaHopL1ERC20Packed" | "decode_startBridgeTokensViaHopL1NativePacked" | "decode_startBridgeTokensViaHopL2ERC20Packed" | "decode_startBridgeTokensViaHopL2NativePacked" | "encode_startBridgeTokensViaHopL1ERC20Packed" | "encode_startBridgeTokensViaHopL1NativePacked" | "encode_startBridgeTokensViaHopL2ERC20Packed" | "encode_startBridgeTokensViaHopL2NativePacked" | "owner" | "pendingOwner" | "setApprovalForHopBridges" | "startBridgeTokensViaHopL1ERC20Min" | "startBridgeTokensViaHopL1ERC20Packed" | "startBridgeTokensViaHopL1NativeMin" | "startBridgeTokensViaHopL1NativePacked" | "startBridgeTokensViaHopL2ERC20Min" | "startBridgeTokensViaHopL2ERC20Packed" | "startBridgeTokensViaHopL2NativeMin" | "startBridgeTokensViaHopL2NativePacked" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaHopL1ERC20Packed", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaHopL1NativePacked", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaHopL2ERC20Packed", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaHopL2NativePacked", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaHopL1ERC20Packed", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaHopL1NativePacked", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaHopL2ERC20Packed", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaHopL2NativePacked", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setApprovalForHopBridges", values: [PromiseOrValue<string>[], PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL1ERC20Min", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL1ERC20Packed", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL1NativeMin", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL1NativePacked", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL2ERC20Min", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
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
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL2NativePacked", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaHopL1ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaHopL1NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaHopL2ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaHopL2NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaHopL1ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaHopL1NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaHopL2ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaHopL2NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForHopBridges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL1ERC20Min", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL1ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL1NativeMin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL1NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2ERC20Min", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2NativeMin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "LiFiHopTransfer(bytes8)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiHopTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface LiFiHopTransferEventObject {
    _transactionId: string;
}
export declare type LiFiHopTransferEvent = TypedEvent<[
    string
], LiFiHopTransferEventObject>;
export declare type LiFiHopTransferEventFilter = TypedEventFilter<LiFiHopTransferEvent>;
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
export interface OwnershipTransferRequestedEventObject {
    _from: string;
    _to: string;
}
export declare type OwnershipTransferRequestedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferRequestedEventObject>;
export declare type OwnershipTransferRequestedEventFilter = TypedEventFilter<OwnershipTransferRequestedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
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
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decode_startBridgeTokensViaHopL1ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL1NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL2ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL2NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        encode_startBridgeTokensViaHopL1ERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaHopL1NativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        setApprovalForHopBridges(bridges: PromiseOrValue<string>[], tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL1ERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL1ERC20Packed(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL1NativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL1NativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2ERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2ERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2NativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2NativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decode_startBridgeTokensViaHopL1ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        HopFacetOptimized.HopDataStructOutput
    ]>;
    decode_startBridgeTokensViaHopL1NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        HopFacetOptimized.HopDataStructOutput
    ]>;
    decode_startBridgeTokensViaHopL2ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        HopFacetOptimized.HopDataStructOutput
    ]>;
    decode_startBridgeTokensViaHopL2NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        HopFacetOptimized.HopDataStructOutput
    ]>;
    encode_startBridgeTokensViaHopL1ERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaHopL1NativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    setApprovalForHopBridges(bridges: PromiseOrValue<string>[], tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL1ERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL1ERC20Packed(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL1NativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL1NativePacked(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2ERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2ERC20Packed(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2NativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2NativePacked(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        decode_startBridgeTokensViaHopL1ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL1NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL2ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL2NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        encode_startBridgeTokensViaHopL1ERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaHopL1NativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        setApprovalForHopBridges(bridges: PromiseOrValue<string>[], tokensToApprove: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL1ERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL1ERC20Packed(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL1NativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL1NativePacked(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2ERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2ERC20Packed(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2NativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2NativePacked(overrides?: CallOverrides): Promise<void>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiHopTransfer(bytes8)"(_transactionId?: null): LiFiHopTransferEventFilter;
        LiFiHopTransfer(_transactionId?: null): LiFiHopTransferEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        LiFiTransferRecovered(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
        "OwnershipTransferRequested(address,address)"(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decode_startBridgeTokensViaHopL1ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaHopL1NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaHopL2ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaHopL2NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaHopL1ERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaHopL1NativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        setApprovalForHopBridges(bridges: PromiseOrValue<string>[], tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL1ERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL1ERC20Packed(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL1NativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL1NativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2ERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2ERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2NativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2NativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaHopL1ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaHopL1NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaHopL2ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaHopL2NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaHopL1ERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaHopL1NativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setApprovalForHopBridges(bridges: PromiseOrValue<string>[], tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL1ERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL1ERC20Packed(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL1NativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL1NativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2ERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2ERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2NativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2NativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
