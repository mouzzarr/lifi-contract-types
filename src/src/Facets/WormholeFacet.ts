/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export declare namespace ILiFi {
  export type LiFiDataStruct = {
    transactionId: BytesLike;
    integrator: string;
    referrer: string;
    sendingAssetId: string;
    receivingAssetId: string;
    receiver: string;
    destinationChainId: BigNumberish;
    amount: BigNumberish;
  };

  export type LiFiDataStructOutput = [
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

export declare namespace WormholeFacet {
  export type WormholeDataStruct = {
    token: string;
    amount: BigNumberish;
    recipient: string;
    toChainId: BigNumberish;
    nonce: BigNumberish;
  };

  export type WormholeDataStructOutput = [
    string,
    BigNumber,
    string,
    number,
    number
  ] & {
    token: string;
    amount: BigNumber;
    recipient: string;
    toChainId: number;
    nonce: number;
  };
}

export declare namespace LibSwap {
  export type SwapDataStruct = {
    callTo: string;
    approveTo: string;
    sendingAssetId: string;
    receivingAssetId: string;
    fromAmount: BigNumberish;
    callData: BytesLike;
  };

  export type SwapDataStructOutput = [
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

export interface WormholeFacetInterface extends utils.Interface {
  functions: {
    "changeWormholeRouter(address)": FunctionFragment;
    "initWormhole(address)": FunctionFragment;
    "startBridgeTokensViaWormhole((bytes32,string,address,address,address,address,uint256,uint256),(address,uint256,address,uint16,uint32))": FunctionFragment;
    "swapAndStartBridgeTokensViaWormhole((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],(address,uint256,address,uint16,uint32))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "changeWormholeRouter"
      | "initWormhole"
      | "startBridgeTokensViaWormhole"
      | "swapAndStartBridgeTokensViaWormhole"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changeWormholeRouter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initWormhole",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "startBridgeTokensViaWormhole",
    values: [ILiFi.LiFiDataStruct, WormholeFacet.WormholeDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "swapAndStartBridgeTokensViaWormhole",
    values: [
      ILiFi.LiFiDataStruct,
      LibSwap.SwapDataStruct[],
      WormholeFacet.WormholeDataStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeWormholeRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initWormhole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startBridgeTokensViaWormhole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapAndStartBridgeTokensViaWormhole",
    data: BytesLike
  ): Result;

  events: {
    "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
    "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)": EventFragment;
    "WormholeInitialized(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WormholeInitialized"): EventFragment;
}

export interface LiFiTransferCompletedEventObject {
  transactionId: string;
  receivingAssetId: string;
  receiver: string;
  amount: BigNumber;
  timestamp: BigNumber;
}
export type LiFiTransferCompletedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  LiFiTransferCompletedEventObject
>;

export type LiFiTransferCompletedEventFilter =
  TypedEventFilter<LiFiTransferCompletedEvent>;

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
export type LiFiTransferStartedEvent = TypedEvent<
  [
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
  ],
  LiFiTransferStartedEventObject
>;

export type LiFiTransferStartedEventFilter =
  TypedEventFilter<LiFiTransferStartedEvent>;

export interface WormholeInitializedEventObject {
  _wormholeRouter: string;
}
export type WormholeInitializedEvent = TypedEvent<
  [string],
  WormholeInitializedEventObject
>;

export type WormholeInitializedEventFilter =
  TypedEventFilter<WormholeInitializedEvent>;

export interface WormholeFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WormholeFacetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    changeWormholeRouter(
      _newRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initWormhole(
      _wormholeRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startBridgeTokensViaWormhole(
      _lifiData: ILiFi.LiFiDataStruct,
      _wormholeData: WormholeFacet.WormholeDataStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapAndStartBridgeTokensViaWormhole(
      _lifiData: ILiFi.LiFiDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _wormholeData: WormholeFacet.WormholeDataStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  changeWormholeRouter(
    _newRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initWormhole(
    _wormholeRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startBridgeTokensViaWormhole(
    _lifiData: ILiFi.LiFiDataStruct,
    _wormholeData: WormholeFacet.WormholeDataStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapAndStartBridgeTokensViaWormhole(
    _lifiData: ILiFi.LiFiDataStruct,
    _swapData: LibSwap.SwapDataStruct[],
    _wormholeData: WormholeFacet.WormholeDataStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    changeWormholeRouter(
      _newRouter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initWormhole(
      _wormholeRouter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    startBridgeTokensViaWormhole(
      _lifiData: ILiFi.LiFiDataStruct,
      _wormholeData: WormholeFacet.WormholeDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    swapAndStartBridgeTokensViaWormhole(
      _lifiData: ILiFi.LiFiDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _wormholeData: WormholeFacet.WormholeDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(
      transactionId?: BytesLike | null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      timestamp?: null
    ): LiFiTransferCompletedEventFilter;
    LiFiTransferCompleted(
      transactionId?: BytesLike | null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      timestamp?: null
    ): LiFiTransferCompletedEventFilter;

    "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)"(
      transactionId?: BytesLike | null,
      bridge?: null,
      bridgeData?: null,
      integrator?: null,
      referrer?: null,
      sendingAssetId?: null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      destinationChainId?: null,
      hasSourceSwap?: null,
      hasDestinationCall?: null
    ): LiFiTransferStartedEventFilter;
    LiFiTransferStarted(
      transactionId?: BytesLike | null,
      bridge?: null,
      bridgeData?: null,
      integrator?: null,
      referrer?: null,
      sendingAssetId?: null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      destinationChainId?: null,
      hasSourceSwap?: null,
      hasDestinationCall?: null
    ): LiFiTransferStartedEventFilter;

    "WormholeInitialized(address)"(
      _wormholeRouter?: null
    ): WormholeInitializedEventFilter;
    WormholeInitialized(_wormholeRouter?: null): WormholeInitializedEventFilter;
  };

  estimateGas: {
    changeWormholeRouter(
      _newRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initWormhole(
      _wormholeRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startBridgeTokensViaWormhole(
      _lifiData: ILiFi.LiFiDataStruct,
      _wormholeData: WormholeFacet.WormholeDataStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapAndStartBridgeTokensViaWormhole(
      _lifiData: ILiFi.LiFiDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _wormholeData: WormholeFacet.WormholeDataStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeWormholeRouter(
      _newRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initWormhole(
      _wormholeRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startBridgeTokensViaWormhole(
      _lifiData: ILiFi.LiFiDataStruct,
      _wormholeData: WormholeFacet.WormholeDataStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapAndStartBridgeTokensViaWormhole(
      _lifiData: ILiFi.LiFiDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _wormholeData: WormholeFacet.WormholeDataStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
