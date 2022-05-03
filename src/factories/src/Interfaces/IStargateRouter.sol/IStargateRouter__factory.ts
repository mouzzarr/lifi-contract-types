/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IStargateRouter,
  IStargateRouterInterface,
} from "../../../../src/Interfaces/IStargateRouter.sol/IStargateRouter";

const _abi = [
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "dstChainId",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "functionType",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "toAddress",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "transferAndCallPayload",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes",
          },
        ],
        internalType: "struct IStargateRouter.lzTxObj",
        name: "lzTxParams",
        type: "tuple",
      },
    ],
    name: "quoteLayerZeroFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "dstChainId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "srcPoolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dstPoolId",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "refundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountLD",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dstNativeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "dstNativeAddr",
            type: "bytes",
          },
        ],
        internalType: "struct IStargateRouter.lzTxObj",
        name: "lzTxParams",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "to",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IStargateRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IStargateRouterInterface {
    return new utils.Interface(_abi) as IStargateRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStargateRouter {
    return new Contract(address, _abi, signerOrProvider) as IStargateRouter;
  }
}
