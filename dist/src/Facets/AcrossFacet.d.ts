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
export declare namespace AcrossFacet {
    type AcrossDataStruct = {
        recipient: string;
        token: string;
        amount: BigNumberish;
        destinationChainId: BigNumberish;
        relayerFeePct: BigNumberish;
        quoteTimestamp: BigNumberish;
    };
    type AcrossDataStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        number
    ] & {
        recipient: string;
        token: string;
        amount: BigNumber;
        destinationChainId: BigNumber;
        relayerFeePct: BigNumber;
        quoteTimestamp: number;
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
export interface AcrossFacetInterface extends utils.Interface {
    functions: {
        "initAcross(address,address)": FunctionFragment;
        "setSpokePool(address)": FunctionFragment;
        "setWeth(address)": FunctionFragment;
        "startBridgeTokensViaAcross((bytes32,string,address,address,address,address,uint256,uint256),(address,address,uint256,uint256,uint64,uint32))": FunctionFragment;
        "swapAndStartBridgeTokensViaAcross((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],(address,address,uint256,uint256,uint64,uint32))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initAcross" | "setSpokePool" | "setWeth" | "startBridgeTokensViaAcross" | "swapAndStartBridgeTokensViaAcross"): FunctionFragment;
    encodeFunctionData(functionFragment: "initAcross", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setSpokePool", values: [string]): string;
    encodeFunctionData(functionFragment: "setWeth", values: [string]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAcross", values: [ILiFi.LiFiDataStruct, AcrossFacet.AcrossDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaAcross", values: [
        ILiFi.LiFiDataStruct,
        LibSwap.SwapDataStruct[],
        AcrossFacet.AcrossDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "initAcross", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSpokePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWeth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAcross", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaAcross", data: BytesLike): Result;
    events: {
        "AcrossInitialized(address,address)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AcrossInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}
export interface AcrossInitializedEventObject {
    weth: string;
    spokePool: string;
}
export declare type AcrossInitializedEvent = TypedEvent<[
    string,
    string
], AcrossInitializedEventObject>;
export declare type AcrossInitializedEventFilter = TypedEventFilter<AcrossInitializedEvent>;
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
export interface AcrossFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AcrossFacetInterface;
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
        initAcross(_weth: string, _spokePool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSpokePool(_spokePool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWeth(_weth: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaAcross(_lifiData: ILiFi.LiFiDataStruct, _acrossData: AcrossFacet.AcrossDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaAcross(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _acrossData: AcrossFacet.AcrossDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    initAcross(_weth: string, _spokePool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSpokePool(_spokePool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWeth(_weth: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaAcross(_lifiData: ILiFi.LiFiDataStruct, _acrossData: AcrossFacet.AcrossDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaAcross(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _acrossData: AcrossFacet.AcrossDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initAcross(_weth: string, _spokePool: string, overrides?: CallOverrides): Promise<void>;
        setSpokePool(_spokePool: string, overrides?: CallOverrides): Promise<void>;
        setWeth(_weth: string, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaAcross(_lifiData: ILiFi.LiFiDataStruct, _acrossData: AcrossFacet.AcrossDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaAcross(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _acrossData: AcrossFacet.AcrossDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AcrossInitialized(address,address)"(weth?: null, spokePool?: null): AcrossInitializedEventFilter;
        AcrossInitialized(weth?: null, spokePool?: null): AcrossInitializedEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)"(transactionId?: BytesLike | null, bridge?: null, bridgeData?: null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, hasSourceSwap?: null, hasDestinationCall?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(transactionId?: BytesLike | null, bridge?: null, bridgeData?: null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, hasSourceSwap?: null, hasDestinationCall?: null): LiFiTransferStartedEventFilter;
    };
    estimateGas: {
        initAcross(_weth: string, _spokePool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSpokePool(_spokePool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWeth(_weth: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaAcross(_lifiData: ILiFi.LiFiDataStruct, _acrossData: AcrossFacet.AcrossDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaAcross(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _acrossData: AcrossFacet.AcrossDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initAcross(_weth: string, _spokePool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSpokePool(_spokePool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWeth(_weth: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaAcross(_lifiData: ILiFi.LiFiDataStruct, _acrossData: AcrossFacet.AcrossDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaAcross(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _acrossData: AcrossFacet.AcrossDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
