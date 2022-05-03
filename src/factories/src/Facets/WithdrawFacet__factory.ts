/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WithdrawFacet,
  WithdrawFacetInterface,
} from "../../../src/Facets/WithdrawFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
    ],
    name: "NotEnoughBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_assetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogWithdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_assetAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610895806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063d9caed1214610030575b600080fd5b61004361003e36600461074b565b610045565b005b61004d6102cd565b600073ffffffffffffffffffffffffffffffffffffffff8316156100715782610073565b335b9050600073ffffffffffffffffffffffffffffffffffffffff8516610194573080318411156100f3576040517f8f0f42060000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff82163160248201526044015b60405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d806000811461014d576040519150601f19603f3d011682016040523d82523d6000602084013e610152565b606091505b505090508061018d576040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050610273565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa1580156101fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102229190610787565b905080831115610268576040517f8f0f420600000000000000000000000000000000000000000000000000000000815260048101849052602481018290526044016100ea565b610273858385610398565b6040805173ffffffffffffffffffffffffffffffffffffffff8481168252602082018690528716917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a25050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610396576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201527f657200000000000000000000000000000000000000000000000000000000000060648201526084016100ea565b565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261042590849061042a565b505050565b600061048c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166105369092919063ffffffff16565b80519091501561042557808060200190518101906104aa91906107a0565b610425576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016100ea565b6060610545848460008561054f565b90505b9392505050565b6060824710156105e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016100ea565b843b610649576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016100ea565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161067291906107f2565b60006040518083038185875af1925050503d80600081146106af576040519150601f19603f3d011682016040523d82523d6000602084013e6106b4565b606091505b50915091506106c48282866106cf565b979650505050505050565b606083156106de575081610548565b8251156106ee5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100ea919061080e565b803573ffffffffffffffffffffffffffffffffffffffff8116811461074657600080fd5b919050565b60008060006060848603121561076057600080fd5b61076984610722565b925061077760208501610722565b9150604084013590509250925092565b60006020828403121561079957600080fd5b5051919050565b6000602082840312156107b257600080fd5b8151801515811461054857600080fd5b60005b838110156107dd5781810151838201526020016107c5565b838111156107ec576000848401525b50505050565b600082516108048184602087016107c2565b9190910192915050565b602081526000825180602084015261082d8160408501602087016107c2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220054cbd724d7ea2216498a1f9204736159ca507e2006e92889461c67c6cfbf8d264736f6c634300080d0033";

type WithdrawFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WithdrawFacet__factory extends ContractFactory {
  constructor(...args: WithdrawFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WithdrawFacet> {
    return super.deploy(overrides || {}) as Promise<WithdrawFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WithdrawFacet {
    return super.attach(address) as WithdrawFacet;
  }
  override connect(signer: Signer): WithdrawFacet__factory {
    return super.connect(signer) as WithdrawFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawFacetInterface {
    return new utils.Interface(_abi) as WithdrawFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WithdrawFacet {
    return new Contract(address, _abi, signerOrProvider) as WithdrawFacet;
  }
}
