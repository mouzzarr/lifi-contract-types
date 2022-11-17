/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IConnextHandler,
  IConnextHandlerInterface,
} from "../../../src/Interfaces/IConnextHandler";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
              {
                internalType: "uint32",
                name: "originDomain",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "destinationDomain",
                type: "uint32",
              },
              {
                internalType: "address",
                name: "agent",
                type: "address",
              },
              {
                internalType: "address",
                name: "recovery",
                type: "address",
              },
              {
                internalType: "bool",
                name: "forceSlow",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "receiveLocal",
                type: "bool",
              },
              {
                internalType: "address",
                name: "callback",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "callbackFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "relayerFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "slippageTol",
                type: "uint256",
              },
            ],
            internalType: "struct IConnextHandler.CallParams",
            name: "params",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "transactingAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "transactingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "originMinOut",
            type: "uint256",
          },
        ],
        internalType: "struct IConnextHandler.XCallArgs",
        name: "_args",
        type: "tuple",
      },
    ],
    name: "xcall",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class IConnextHandler__factory {
  static readonly abi = _abi;
  static createInterface(): IConnextHandlerInterface {
    return new utils.Interface(_abi) as IConnextHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IConnextHandler {
    return new Contract(address, _abi, signerOrProvider) as IConnextHandler;
  }
}
