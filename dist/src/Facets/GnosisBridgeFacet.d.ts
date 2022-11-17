import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export declare namespace GnosisBridgeFacet {
    type GnosisBridgeDataStruct = {
        receiver: string;
        amount: BigNumberish;
    };
    type GnosisBridgeDataStructOutput = [string, BigNumber] & {
        receiver: string;
        amount: BigNumber;
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
export interface GnosisBridgeFacetInterface extends utils.Interface {
    functions: {
        "initGnosisBridge(address,address,uint64)": FunctionFragment;
        "startBridgeTokensViaXDaiBridge((bytes32,string,address,address,address,address,uint256,uint256),(address,uint256))": FunctionFragment;
        "swapAndStartBridgeTokensViaXDaiBridge((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],(address,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initGnosisBridge" | "startBridgeTokensViaXDaiBridge" | "swapAndStartBridgeTokensViaXDaiBridge"): FunctionFragment;
    encodeFunctionData(functionFragment: "initGnosisBridge", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaXDaiBridge", values: [ILiFi.LiFiDataStruct, GnosisBridgeFacet.GnosisBridgeDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaXDaiBridge", values: [
        ILiFi.LiFiDataStruct,
        LibSwap.SwapDataStruct[],
        GnosisBridgeFacet.GnosisBridgeDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "initGnosisBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaXDaiBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaXDaiBridge", data: BytesLike): Result;
    events: {
        "GnosisBridgeInitialized(address,address,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GnosisBridgeInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}
export interface GnosisBridgeInitializedEventObject {
    xDaiBridge: string;
    token: string;
    dstChainId: BigNumber;
}
export declare type GnosisBridgeInitializedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], GnosisBridgeInitializedEventObject>;
export declare type GnosisBridgeInitializedEventFilter = TypedEventFilter<GnosisBridgeInitializedEvent>;
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
export interface LiFiTransferStartedEventObject {
    transactionId: string;
    bridge: string;
    bridgeData: string;
    integrator: string;
    referrer: string;
    sendingAssetId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    destinationChainId: BigNumber;
    hasSourceSwap: boolean;
    hasDestinationCall: boolean;
}
export declare type LiFiTransferStartedEvent = TypedEvent<[
    string,
    string,
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
], LiFiTransferStartedEventObject>;
export declare type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface GnosisBridgeFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GnosisBridgeFacetInterface;
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
        initGnosisBridge(xDaiBridge: string, token: string, dstChainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaXDaiBridge(lifiData: ILiFi.LiFiDataStruct, gnosisBridgeData: GnosisBridgeFacet.GnosisBridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaXDaiBridge(lifiData: ILiFi.LiFiDataStruct, swapData: LibSwap.SwapDataStruct[], gnosisBridgeData: GnosisBridgeFacet.GnosisBridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    initGnosisBridge(xDaiBridge: string, token: string, dstChainId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaXDaiBridge(lifiData: ILiFi.LiFiDataStruct, gnosisBridgeData: GnosisBridgeFacet.GnosisBridgeDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaXDaiBridge(lifiData: ILiFi.LiFiDataStruct, swapData: LibSwap.SwapDataStruct[], gnosisBridgeData: GnosisBridgeFacet.GnosisBridgeDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initGnosisBridge(xDaiBridge: string, token: string, dstChainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaXDaiBridge(lifiData: ILiFi.LiFiDataStruct, gnosisBridgeData: GnosisBridgeFacet.GnosisBridgeDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaXDaiBridge(lifiData: ILiFi.LiFiDataStruct, swapData: LibSwap.SwapDataStruct[], gnosisBridgeData: GnosisBridgeFacet.GnosisBridgeDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "GnosisBridgeInitialized(address,address,uint256)"(xDaiBridge?: null, token?: null, dstChainId?: null): GnosisBridgeInitializedEventFilter;
        GnosisBridgeInitialized(xDaiBridge?: null, token?: null, dstChainId?: null): GnosisBridgeInitializedEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)"(transactionId?: BytesLike | null, bridge?: null, bridgeData?: null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, hasSourceSwap?: null, hasDestinationCall?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(transactionId?: BytesLike | null, bridge?: null, bridgeData?: null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, hasSourceSwap?: null, hasDestinationCall?: null): LiFiTransferStartedEventFilter;
    };
    estimateGas: {
        initGnosisBridge(xDaiBridge: string, token: string, dstChainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaXDaiBridge(lifiData: ILiFi.LiFiDataStruct, gnosisBridgeData: GnosisBridgeFacet.GnosisBridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaXDaiBridge(lifiData: ILiFi.LiFiDataStruct, swapData: LibSwap.SwapDataStruct[], gnosisBridgeData: GnosisBridgeFacet.GnosisBridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initGnosisBridge(xDaiBridge: string, token: string, dstChainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaXDaiBridge(lifiData: ILiFi.LiFiDataStruct, gnosisBridgeData: GnosisBridgeFacet.GnosisBridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaXDaiBridge(lifiData: ILiFi.LiFiDataStruct, swapData: LibSwap.SwapDataStruct[], gnosisBridgeData: GnosisBridgeFacet.GnosisBridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}