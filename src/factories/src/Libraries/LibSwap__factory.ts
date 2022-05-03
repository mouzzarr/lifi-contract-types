/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibSwap, LibSwapInterface } from "../../../src/Libraries/LibSwap";

const _abi = [
  {
    inputs: [],
    name: "NoSwapFromZeroBalance",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "dex",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fromAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "toAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AssetSwapped",
    type: "event",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b887a5d43f77dc34ca01ea9fbd7c70e57e0dbe986c01c9c8b4e00c9d6ea1b15264736f6c634300080d0033";

type LibSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibSwap__factory extends ContractFactory {
  constructor(...args: LibSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibSwap> {
    return super.deploy(overrides || {}) as Promise<LibSwap>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibSwap {
    return super.attach(address) as LibSwap;
  }
  override connect(signer: Signer): LibSwap__factory {
    return super.connect(signer) as LibSwap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibSwapInterface {
    return new utils.Interface(_abi) as LibSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibSwap {
    return new Contract(address, _abi, signerOrProvider) as LibSwap;
  }
}
