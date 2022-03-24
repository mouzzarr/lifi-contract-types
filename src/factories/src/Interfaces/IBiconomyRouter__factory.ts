/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBiconomyRouter,
  IBiconomyRouterInterface,
} from "../../../src/Interfaces/IBiconomyRouter";

const _abi = [
  {
    inputs: [
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
        internalType: "uint256",
        name: "toChainId",
        type: "uint256",
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
    ],
    name: "depositNative",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IBiconomyRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IBiconomyRouterInterface {
    return new utils.Interface(_abi) as IBiconomyRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBiconomyRouter {
    return new Contract(address, _abi, signerOrProvider) as IBiconomyRouter;
  }
}