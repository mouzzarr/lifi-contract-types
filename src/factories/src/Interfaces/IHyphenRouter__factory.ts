/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IHyphenRouter,
  IHyphenRouterInterface,
} from "../../../src/Interfaces/IHyphenRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "toChainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tag",
        type: "string",
      },
    ],
    name: "depositErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "toChainId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tag",
        type: "string",
      },
    ],
    name: "depositNative",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IHyphenRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IHyphenRouterInterface {
    return new utils.Interface(_abi) as IHyphenRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IHyphenRouter {
    return new Contract(address, _abi, signerOrProvider) as IHyphenRouter;
  }
}