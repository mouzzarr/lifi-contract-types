/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFusePool,
  IFusePoolInterface,
} from "../../FusePoolZap.sol/IFusePool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "cTokensByUnderlying",
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
];

export class IFusePool__factory {
  static readonly abi = _abi;
  static createInterface(): IFusePoolInterface {
    return new utils.Interface(_abi) as IFusePoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFusePool {
    return new Contract(address, _abi, signerOrProvider) as IFusePool;
  }
}
