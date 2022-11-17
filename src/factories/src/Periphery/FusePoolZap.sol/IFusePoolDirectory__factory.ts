/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFusePoolDirectory,
  IFusePoolDirectoryInterface,
} from "../../../../src/Periphery/FusePoolZap.sol/IFusePoolDirectory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "poolExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IFusePoolDirectory__factory {
  static readonly abi = _abi;
  static createInterface(): IFusePoolDirectoryInterface {
    return new utils.Interface(_abi) as IFusePoolDirectoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFusePoolDirectory {
    return new Contract(address, _abi, signerOrProvider) as IFusePoolDirectory;
  }
}
