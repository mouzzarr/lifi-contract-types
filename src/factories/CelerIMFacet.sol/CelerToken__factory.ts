/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  CelerToken,
  CelerTokenInterface,
} from "../../CelerIMFacet.sol/CelerToken";

const _abi = [
  {
    inputs: [],
    name: "canonical",
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

export class CelerToken__factory {
  static readonly abi = _abi;
  static createInterface(): CelerTokenInterface {
    return new utils.Interface(_abi) as CelerTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CelerToken {
    return new Contract(address, _abi, signerOrProvider) as CelerToken;
  }
}