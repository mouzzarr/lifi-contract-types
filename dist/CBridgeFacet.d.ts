/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CBridgeFacetInterface extends ethers.utils.Interface {
  functions: {
    "initCbridge(address,uint64)": FunctionFragment;
    "startBridgeTokensViaCBridge((bytes32,string,address,address,address,address,uint256,uint256),(address,address,uint256,uint64,uint64,uint32))": FunctionFragment;
    "swapAndStartBridgeTokensViaCBridge((bytes32,string,address,address,address,address,uint256,uint256),tuple[],(address,address,uint256,uint64,uint64,uint32))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initCbridge",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startBridgeTokensViaCBridge",
    values: [
      {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
      },
      {
        receiver: string;
        token: string;
        amount: BigNumberish;
        dstChainId: BigNumberish;
        nonce: BigNumberish;
        maxSlippage: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapAndStartBridgeTokensViaCBridge",
    values: [
      {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
      },
      {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumberish;
        callData: BytesLike;
      }[],
      {
        receiver: string;
        token: string;
        amount: BigNumberish;
        dstChainId: BigNumberish;
        nonce: BigNumberish;
        maxSlippage: BigNumberish;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "initCbridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startBridgeTokensViaCBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapAndStartBridgeTokensViaCBridge",
    data: BytesLike
  ): Result;

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

export type InitedEvent = TypedEvent<
  [string, BigNumber] & { bridge: string; chainId: BigNumber }
>;

export type LiFiTransferCompletedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber] & {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
  }
>;

export type LiFiTransferConfirmedEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
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
>;

export type LiFiTransferRefundedEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
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
>;

export type LiFiTransferStartedEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
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
>;

export class CBridgeFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CBridgeFacetInterface;

  functions: {
    initCbridge(
      _cBridge: string,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startBridgeTokensViaCBridge(
      _lifiData: {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
      },
      _cBridgeData: {
        receiver: string;
        token: string;
        amount: BigNumberish;
        dstChainId: BigNumberish;
        nonce: BigNumberish;
        maxSlippage: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapAndStartBridgeTokensViaCBridge(
      _lifiData: {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
      },
      _swapData: {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumberish;
        callData: BytesLike;
      }[],
      _cBridgeData: {
        receiver: string;
        token: string;
        amount: BigNumberish;
        dstChainId: BigNumberish;
        nonce: BigNumberish;
        maxSlippage: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  initCbridge(
    _cBridge: string,
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startBridgeTokensViaCBridge(
    _lifiData: {
      transactionId: BytesLike;
      integrator: string;
      referrer: string;
      sendingAssetId: string;
      receivingAssetId: string;
      receiver: string;
      destinationChainId: BigNumberish;
      amount: BigNumberish;
    },
    _cBridgeData: {
      receiver: string;
      token: string;
      amount: BigNumberish;
      dstChainId: BigNumberish;
      nonce: BigNumberish;
      maxSlippage: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapAndStartBridgeTokensViaCBridge(
    _lifiData: {
      transactionId: BytesLike;
      integrator: string;
      referrer: string;
      sendingAssetId: string;
      receivingAssetId: string;
      receiver: string;
      destinationChainId: BigNumberish;
      amount: BigNumberish;
    },
    _swapData: {
      callTo: string;
      approveTo: string;
      sendingAssetId: string;
      receivingAssetId: string;
      fromAmount: BigNumberish;
      callData: BytesLike;
    }[],
    _cBridgeData: {
      receiver: string;
      token: string;
      amount: BigNumberish;
      dstChainId: BigNumberish;
      nonce: BigNumberish;
      maxSlippage: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    initCbridge(
      _cBridge: string,
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startBridgeTokensViaCBridge(
      _lifiData: {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
      },
      _cBridgeData: {
        receiver: string;
        token: string;
        amount: BigNumberish;
        dstChainId: BigNumberish;
        nonce: BigNumberish;
        maxSlippage: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    swapAndStartBridgeTokensViaCBridge(
      _lifiData: {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
      },
      _swapData: {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumberish;
        callData: BytesLike;
      }[],
      _cBridgeData: {
        receiver: string;
        token: string;
        amount: BigNumberish;
        dstChainId: BigNumberish;
        nonce: BigNumberish;
        maxSlippage: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Inited(address,uint64)"(
      bridge?: string | null,
      chainId?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { bridge: string; chainId: BigNumber }
    >;

    Inited(
      bridge?: string | null,
      chainId?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { bridge: string; chainId: BigNumber }
    >;

    "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(
      transactionId?: BytesLike | null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      timestamp?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        transactionId: string;
        receivingAssetId: string;
        receiver: string;
        amount: BigNumber;
        timestamp: BigNumber;
      }
    >;

    LiFiTransferCompleted(
      transactionId?: BytesLike | null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      timestamp?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        transactionId: string;
        receivingAssetId: string;
        receiver: string;
        amount: BigNumber;
        timestamp: BigNumber;
      }
    >;

    "LiFiTransferConfirmed(bytes32,string,address,address,address,address,uint256,uint256,uint256)"(
      transactionId?: BytesLike | null,
      integrator?: null,
      referrer?: null,
      sendingAssetId?: null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      destinationChainId?: null,
      timestamp?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
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
    >;

    LiFiTransferConfirmed(
      transactionId?: BytesLike | null,
      integrator?: null,
      referrer?: null,
      sendingAssetId?: null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      destinationChainId?: null,
      timestamp?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
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
    >;

    "LiFiTransferRefunded(bytes32,string,address,address,address,address,uint256,uint256,uint256)"(
      transactionId?: BytesLike | null,
      integrator?: null,
      referrer?: null,
      sendingAssetId?: null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      destinationChainId?: null,
      timestamp?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
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
    >;

    LiFiTransferRefunded(
      transactionId?: BytesLike | null,
      integrator?: null,
      referrer?: null,
      sendingAssetId?: null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      destinationChainId?: null,
      timestamp?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
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
    >;

    "LiFiTransferStarted(bytes32,string,address,address,address,address,uint256,uint256,uint256)"(
      transactionId?: BytesLike | null,
      integrator?: null,
      referrer?: null,
      sendingAssetId?: null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      destinationChainId?: null,
      timestamp?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
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
    >;

    LiFiTransferStarted(
      transactionId?: BytesLike | null,
      integrator?: null,
      referrer?: null,
      sendingAssetId?: null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      destinationChainId?: null,
      timestamp?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
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
    >;
  };

  estimateGas: {
    initCbridge(
      _cBridge: string,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startBridgeTokensViaCBridge(
      _lifiData: {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
      },
      _cBridgeData: {
        receiver: string;
        token: string;
        amount: BigNumberish;
        dstChainId: BigNumberish;
        nonce: BigNumberish;
        maxSlippage: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapAndStartBridgeTokensViaCBridge(
      _lifiData: {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
      },
      _swapData: {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumberish;
        callData: BytesLike;
      }[],
      _cBridgeData: {
        receiver: string;
        token: string;
        amount: BigNumberish;
        dstChainId: BigNumberish;
        nonce: BigNumberish;
        maxSlippage: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initCbridge(
      _cBridge: string,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startBridgeTokensViaCBridge(
      _lifiData: {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
      },
      _cBridgeData: {
        receiver: string;
        token: string;
        amount: BigNumberish;
        dstChainId: BigNumberish;
        nonce: BigNumberish;
        maxSlippage: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapAndStartBridgeTokensViaCBridge(
      _lifiData: {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
      },
      _swapData: {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumberish;
        callData: BytesLike;
      }[],
      _cBridgeData: {
        receiver: string;
        token: string;
        amount: BigNumberish;
        dstChainId: BigNumberish;
        nonce: BigNumberish;
        maxSlippage: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}