/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPool,
  IPoolInterface,
} from "../../../../src/Interfaces/IStargateRouter.sol/IPool";

const _abi = [
  {
    inputs: [],
    name: "token",
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

export class IPool__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolInterface {
    return new utils.Interface(_abi) as IPoolInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IPool {
    return new Contract(address, _abi, signerOrProvider) as IPool;
  }
}