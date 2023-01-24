/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibBytes, LibBytesInterface } from "../LibBytes";

const _abi = [
  {
    inputs: [],
    name: "AddressOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "SliceOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "SliceOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "UintOutOfBounds",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b98ca003ee0b8a0599e09f418c83fe4c7bcbd6c3cb73314703f8bb2ed64ceca764736f6c63430008110033";

type LibBytesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibBytesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibBytes__factory extends ContractFactory {
  constructor(...args: LibBytesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibBytes> {
    return super.deploy(overrides || {}) as Promise<LibBytes>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibBytes {
    return super.attach(address) as LibBytes;
  }
  override connect(signer: Signer): LibBytes__factory {
    return super.connect(signer) as LibBytes__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibBytesInterface {
    return new utils.Interface(_abi) as LibBytesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibBytes {
    return new Contract(address, _abi, signerOrProvider) as LibBytes;
  }
}
