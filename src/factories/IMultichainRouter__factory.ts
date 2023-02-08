/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMultichainRouter,
  IMultichainRouterInterface,
} from "../IMultichainRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toChainID",
        type: "uint256",
      },
    ],
    name: "anySwapOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "toChainID",
        type: "uint256",
      },
    ],
    name: "anySwapOutNative",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toChainID",
        type: "uint256",
      },
    ],
    name: "anySwapOutUnderlying",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wNATIVE",
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
] as const;

export class IMultichainRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IMultichainRouterInterface {
    return new utils.Interface(_abi) as IMultichainRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMultichainRouter {
    return new Contract(address, _abi, signerOrProvider) as IMultichainRouter;
  }
}