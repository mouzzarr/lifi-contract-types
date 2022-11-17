/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LibDiamond,
  LibDiamondInterface,
} from "../../../src/Libraries/LibDiamond";

const _abi = [
  {
    inputs: [],
    name: "CalldataEmptyButInitNotZero",
    type: "error",
  },
  {
    inputs: [],
    name: "FacetAddressIsNotZero",
    type: "error",
  },
  {
    inputs: [],
    name: "FacetAddressIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "FacetContainsNoCode",
    type: "error",
  },
  {
    inputs: [],
    name: "FunctionAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "FunctionDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "FunctionIsImmutable",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectFacetCutAction",
    type: "error",
  },
  {
    inputs: [],
    name: "InitReverted",
    type: "error",
  },
  {
    inputs: [],
    name: "InitZeroButCalldataNotEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSelectorsInFace",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ca667345260d270b1c0d3bbd81e2f4beee15836b12495a345327848e32fedcb264736f6c63430008110033";

type LibDiamondConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibDiamondConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibDiamond__factory extends ContractFactory {
  constructor(...args: LibDiamondConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibDiamond> {
    return super.deploy(overrides || {}) as Promise<LibDiamond>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibDiamond {
    return super.attach(address) as LibDiamond;
  }
  override connect(signer: Signer): LibDiamond__factory {
    return super.connect(signer) as LibDiamond__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibDiamondInterface {
    return new utils.Interface(_abi) as LibDiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibDiamond {
    return new Contract(address, _abi, signerOrProvider) as LibDiamond;
  }
}
