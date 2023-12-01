/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDiamondLoupe, IDiamondLoupeInterface } from "../IDiamondLoupe";

const _abi = [
  {
    type: "function",
    name: "facetAddress",
    inputs: [
      {
        name: "_functionSelector",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "facetAddress_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "facetAddresses",
    inputs: [],
    outputs: [
      {
        name: "facetAddresses_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "facetFunctionSelectors",
    inputs: [
      {
        name: "_facet",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "facetFunctionSelectors_",
        type: "bytes4[]",
        internalType: "bytes4[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "facets",
    inputs: [],
    outputs: [
      {
        name: "facets_",
        type: "tuple[]",
        internalType: "struct IDiamondLoupe.Facet[]",
        components: [
          {
            name: "facetAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "functionSelectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
] as const;

export class IDiamondLoupe__factory {
  static readonly abi = _abi;
  static createInterface(): IDiamondLoupeInterface {
    return new utils.Interface(_abi) as IDiamondLoupeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDiamondLoupe {
    return new Contract(address, _abi, signerOrProvider) as IDiamondLoupe;
  }
}
