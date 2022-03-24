import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace ILiFi {
    type LiFiDataStruct = {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
    };
    type LiFiDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        transactionId: string;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumber;
        amount: BigNumber;
    };
}
export declare namespace GenericBridgeFacet {
    type BridgeDataStruct = {
        amount: BigNumberish;
        assetId: string;
        callTo: string;
        callData: BytesLike;
    };
    type BridgeDataStructOutput = [BigNumber, string, string, string] & {
        amount: BigNumber;
        assetId: string;
        callTo: string;
        callData: string;
    };
}
export declare namespace LibSwap {
    type SwapDataStruct = {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumberish;
        callData: BytesLike;
    };
    type SwapDataStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber,
        string
    ] & {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumber;
        callData: string;
    };
}
export interface GenericBridgeFacetInterface extends utils.Interface {
    functions: {
        "startBridgeTokensGeneric((bytes32,string,address,address,address,address,uint256,uint256),(uint256,address,address,bytes))": FunctionFragment;
        "swapAndStartBridgeTokensGeneric((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],(uint256,address,address,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "startBridgeTokensGeneric" | "swapAndStartBridgeTokensGeneric"): FunctionFragment;
    encodeFunctionData(functionFragment: "startBridgeTokensGeneric", values: [ILiFi.LiFiDataStruct, GenericBridgeFacet.BridgeDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensGeneric", values: [
        ILiFi.LiFiDataStruct,
        LibSwap.SwapDataStruct[],
        GenericBridgeFacet.BridgeDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "startBridgeTokensGeneric", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensGeneric", data: BytesLike): Result;
    events: {
        "Inited(address,uint64)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferConfirmed(bytes32,string,address,address,address,address,uint256,uint256,uint256)": EventFragment;
        "LiFiTransferRefunded(bytes32,string,address,address,address,address,uint256,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(bytes32,string,address,address,address,address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Inited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferConfirmed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRefunded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}
export interface InitedEventObject {
    bridge: string;
    chainId: BigNumber;
}
export declare type InitedEvent = TypedEvent<[string, BigNumber], InitedEventObject>;
export declare type InitedEventFilter = TypedEventFilter<InitedEvent>;
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
export interface LiFiTransferConfirmedEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    sendingAssetId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    destinationChainId: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferConfirmedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], LiFiTransferConfirmedEventObject>;
export declare type LiFiTransferConfirmedEventFilter = TypedEventFilter<LiFiTransferConfirmedEvent>;
export interface LiFiTransferRefundedEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    sendingAssetId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    destinationChainId: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferRefundedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], LiFiTransferRefundedEventObject>;
export declare type LiFiTransferRefundedEventFilter = TypedEventFilter<LiFiTransferRefundedEvent>;
export interface LiFiTransferStartedEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    sendingAssetId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    destinationChainId: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferStartedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], LiFiTransferStartedEventObject>;
export declare type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface GenericBridgeFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GenericBridgeFacetInterface;
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
        startBridgeTokensGeneric(_lifiData: ILiFi.LiFiDataStruct, _bridgeData: GenericBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensGeneric(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _bridgeData: GenericBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    startBridgeTokensGeneric(_lifiData: ILiFi.LiFiDataStruct, _bridgeData: GenericBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensGeneric(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _bridgeData: GenericBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        startBridgeTokensGeneric(_lifiData: ILiFi.LiFiDataStruct, _bridgeData: GenericBridgeFacet.BridgeDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensGeneric(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _bridgeData: GenericBridgeFacet.BridgeDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Inited(address,uint64)"(bridge?: string | null, chainId?: null): InitedEventFilter;
        Inited(bridge?: string | null, chainId?: null): InitedEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferConfirmed(bytes32,string,address,address,address,address,uint256,uint256,uint256)"(transactionId?: BytesLike | null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, timestamp?: null): LiFiTransferConfirmedEventFilter;
        LiFiTransferConfirmed(transactionId?: BytesLike | null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, timestamp?: null): LiFiTransferConfirmedEventFilter;
        "LiFiTransferRefunded(bytes32,string,address,address,address,address,uint256,uint256,uint256)"(transactionId?: BytesLike | null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, timestamp?: null): LiFiTransferRefundedEventFilter;
        LiFiTransferRefunded(transactionId?: BytesLike | null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, timestamp?: null): LiFiTransferRefundedEventFilter;
        "LiFiTransferStarted(bytes32,string,address,address,address,address,uint256,uint256,uint256)"(transactionId?: BytesLike | null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, timestamp?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(transactionId?: BytesLike | null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, timestamp?: null): LiFiTransferStartedEventFilter;
    };
    estimateGas: {
        startBridgeTokensGeneric(_lifiData: ILiFi.LiFiDataStruct, _bridgeData: GenericBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensGeneric(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _bridgeData: GenericBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        startBridgeTokensGeneric(_lifiData: ILiFi.LiFiDataStruct, _bridgeData: GenericBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensGeneric(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _bridgeData: GenericBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
