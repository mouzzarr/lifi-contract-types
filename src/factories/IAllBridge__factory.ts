/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAllBridge, IAllBridgeInterface } from "../IAllBridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "addr",
        type: "bytes32",
      },
    ],
    name: "pools",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "token",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "recipient",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "destinationChainId",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "receiveToken",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "enum IAllBridge.MessengerProtocol",
        name: "messenger",
        type: "uint8",
      },
    ],
    name: "swapAndBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IAllBridge__factory {
  static readonly abi = _abi;
  static createInterface(): IAllBridgeInterface {
    return new utils.Interface(_abi) as IAllBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAllBridge {
    return new Contract(address, _abi, signerOrProvider) as IAllBridge;
  }
}