import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
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
export declare namespace MultichainFacet {
    type MultichainDataStruct = {
        router: PromiseOrValue<string>;
    };
    type MultichainDataStructOutput = [string] & {
        router: string;
    };
}
export declare namespace LibSwap {
    type SwapDataStruct = {
        callTo: PromiseOrValue<string>;
        approveTo: PromiseOrValue<string>;
        sendingAssetId: PromiseOrValue<string>;
        receivingAssetId: PromiseOrValue<string>;
        fromAmount: PromiseOrValue<BigNumberish>;
        callData: PromiseOrValue<BytesLike>;
        requiresDeposit: PromiseOrValue<boolean>;
    };
    type SwapDataStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber,
        string,
        boolean
    ] & {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumber;
        callData: string;
        requiresDeposit: boolean;
    };
}
export interface MultichainFacetInterface extends utils.Interface {
    functions: {
        "initMultichain(address[])": FunctionFragment;
        "registerBridge(address,bool)": FunctionFragment;
        "registerBridge(address[],bool[])": FunctionFragment;
        "startBridgeTokensViaMultichain((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address))": FunctionFragment;
        "swapAndStartBridgeTokensViaMultichain((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initMultichain" | "registerBridge(address,bool)" | "registerBridge(address[],bool[])" | "startBridgeTokensViaMultichain" | "swapAndStartBridgeTokensViaMultichain"): FunctionFragment;
    encodeFunctionData(functionFragment: "initMultichain", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "registerBridge(address,bool)", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "registerBridge(address[],bool[])", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaMultichain", values: [ILiFi.BridgeDataStruct, MultichainFacet.MultichainDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaMultichain", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        MultichainFacet.MultichainDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "initMultichain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerBridge(address,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerBridge(address[],bool[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaMultichain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaMultichain", data: BytesLike): Result;
    events: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "MultichainInitialized()": EventFragment;
        "MultichainRouterRegistered(address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MultichainInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MultichainRouterRegistered"): EventFragment;
}
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
    bridgeData: ILiFi.BridgeDataStructOutput;
}
export declare type LiFiTransferStartedEvent = TypedEvent<[
    ILiFi.BridgeDataStructOutput
], LiFiTransferStartedEventObject>;
export declare type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface MultichainInitializedEventObject {
}
export declare type MultichainInitializedEvent = TypedEvent<[
], MultichainInitializedEventObject>;
export declare type MultichainInitializedEventFilter = TypedEventFilter<MultichainInitializedEvent>;
export interface MultichainRouterRegisteredEventObject {
    router: string;
    allowed: boolean;
}
export declare type MultichainRouterRegisteredEvent = TypedEvent<[
    string,
    boolean
], MultichainRouterRegisteredEventObject>;
export declare type MultichainRouterRegisteredEventFilter = TypedEventFilter<MultichainRouterRegisteredEvent>;
export interface MultichainFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MultichainFacetInterface;
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
        initMultichain(routers: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "registerBridge(address,bool)"(router: PromiseOrValue<string>, allowed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "registerBridge(address[],bool[])"(routers: PromiseOrValue<string>[], allowed: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaMultichain(_bridgeData: ILiFi.BridgeDataStruct, _multichainData: MultichainFacet.MultichainDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaMultichain(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _multichainData: MultichainFacet.MultichainDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    initMultichain(routers: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "registerBridge(address,bool)"(router: PromiseOrValue<string>, allowed: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "registerBridge(address[],bool[])"(routers: PromiseOrValue<string>[], allowed: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaMultichain(_bridgeData: ILiFi.BridgeDataStruct, _multichainData: MultichainFacet.MultichainDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaMultichain(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _multichainData: MultichainFacet.MultichainDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initMultichain(routers: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        "registerBridge(address,bool)"(router: PromiseOrValue<string>, allowed: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        "registerBridge(address[],bool[])"(routers: PromiseOrValue<string>[], allowed: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaMultichain(_bridgeData: ILiFi.BridgeDataStruct, _multichainData: MultichainFacet.MultichainDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaMultichain(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _multichainData: MultichainFacet.MultichainDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
        "MultichainInitialized()"(): MultichainInitializedEventFilter;
        MultichainInitialized(): MultichainInitializedEventFilter;
        "MultichainRouterRegistered(address,bool)"(router?: PromiseOrValue<string> | null, allowed?: null): MultichainRouterRegisteredEventFilter;
        MultichainRouterRegistered(router?: PromiseOrValue<string> | null, allowed?: null): MultichainRouterRegisteredEventFilter;
    };
    estimateGas: {
        initMultichain(routers: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "registerBridge(address,bool)"(router: PromiseOrValue<string>, allowed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "registerBridge(address[],bool[])"(routers: PromiseOrValue<string>[], allowed: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaMultichain(_bridgeData: ILiFi.BridgeDataStruct, _multichainData: MultichainFacet.MultichainDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaMultichain(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _multichainData: MultichainFacet.MultichainDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initMultichain(routers: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "registerBridge(address,bool)"(router: PromiseOrValue<string>, allowed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "registerBridge(address[],bool[])"(routers: PromiseOrValue<string>[], allowed: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaMultichain(_bridgeData: ILiFi.BridgeDataStruct, _multichainData: MultichainFacet.MultichainDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaMultichain(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _multichainData: MultichainFacet.MultichainDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
