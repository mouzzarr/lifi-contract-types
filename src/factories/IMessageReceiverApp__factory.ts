/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMessageReceiverApp,
  IMessageReceiverAppInterface,
} from "../IMessageReceiverApp";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_sender",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "_srcChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "executeMessage",
    outputs: [
      {
        internalType: "enum IMessageReceiverApp.ExecutionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_srcChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "executeMessage",
    outputs: [
      {
        internalType: "enum IMessageReceiverApp.ExecutionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_srcChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "executeMessageWithTransfer",
    outputs: [
      {
        internalType: "enum IMessageReceiverApp.ExecutionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_srcChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "executeMessageWithTransferFallback",
    outputs: [
      {
        internalType: "enum IMessageReceiverApp.ExecutionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "executeMessageWithTransferRefund",
    outputs: [
      {
        internalType: "enum IMessageReceiverApp.ExecutionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IMessageReceiverApp__factory {
  static readonly abi = _abi;
  static createInterface(): IMessageReceiverAppInterface {
    return new utils.Interface(_abi) as IMessageReceiverAppInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMessageReceiverApp {
    return new Contract(address, _abi, signerOrProvider) as IMessageReceiverApp;
  }
}
