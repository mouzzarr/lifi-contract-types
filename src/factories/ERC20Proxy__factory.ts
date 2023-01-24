/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC20Proxy, ERC20ProxyInterface } from "../ERC20Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "NoTransferToNullAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAnERC20Token",
    type: "error",
  },
  {
    inputs: [],
    name: "UnAuthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "authorized",
        type: "bool",
      },
    ],
    name: "AuthorizationChanged",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorizedCallers",
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
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "bool",
        name: "authorized",
        type: "bool",
      },
    ],
    name: "setAuthorizedCaller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610d2c380380610d2c83398101604081905261002f91610171565b61003833610047565b61004181610097565b506101a1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61009f610115565b6001600160a01b0381166101095760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61011281610047565b50565b6000546001600160a01b0316331461016f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610100565b565b60006020828403121561018357600080fd5b81516001600160a01b038116811461019a57600080fd5b9392505050565b610b7c806101b06000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063715018a611610050578063715018a6146100d75780638da5cb5b146100df578063f2fde38b1461010757600080fd5b806315dacbea14610077578063454bbd291461008c578063536fff6c1461009f575b600080fd5b61008a610085366004610994565b61011a565b005b61008a61009a3660046109ed565b610175565b6100c26100ad366004610a24565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b61008a610207565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ce565b61008a610115366004610a24565b61021b565b3360009081526001602052604090205460ff16610163576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61016f848484846102d7565b50505050565b61017d6104f1565b73ffffffffffffffffffffffffffffffffffffffff821660008181526001602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527f5fe3a0cb9aeae856eac34445ace9544f3e15c21fa6f9bffeca60d662a690ca1b910160405180910390a25050565b61020f6104f1565b6102196000610572565b565b6102236104f1565b73ffffffffffffffffffffffffffffffffffffffff81166102cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102d481610572565b50565b73ffffffffffffffffffffffffffffffffffffffff8416610324576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610371576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156103e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104069190610a3f565b9050610414828686866105e7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610484573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a89190610a3f565b6104b29190610a58565b146104e9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610219576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102c2565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152848116604483015260648083018590528351808403909101815260849092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015261016f928792916000916106ba918516908490610769565b80519091501561076457808060200190518101906106d89190610a98565b610764576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016102c2565b505050565b60606107788484600085610782565b90505b9392505050565b606082471015610814576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016102c2565b73ffffffffffffffffffffffffffffffffffffffff85163b610892576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102c2565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108bb9190610ad9565b60006040518083038185875af1925050503d80600081146108f8576040519150601f19603f3d011682016040523d82523d6000602084013e6108fd565b606091505b509150915061090d828286610918565b979650505050505050565b6060831561092757508161077b565b8251156109375782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c29190610af5565b803573ffffffffffffffffffffffffffffffffffffffff8116811461098f57600080fd5b919050565b600080600080608085870312156109aa57600080fd5b6109b38561096b565b93506109c16020860161096b565b92506109cf6040860161096b565b9396929550929360600135925050565b80151581146102d457600080fd5b60008060408385031215610a0057600080fd5b610a098361096b565b91506020830135610a19816109df565b809150509250929050565b600060208284031215610a3657600080fd5b61077b8261096b565b600060208284031215610a5157600080fd5b5051919050565b81810381811115610a92577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b600060208284031215610aaa57600080fd5b815161077b816109df565b60005b83811015610ad0578181015183820152602001610ab8565b50506000910152565b60008251610aeb818460208701610ab5565b9190910192915050565b6020815260008251806020840152610b14816040850160208701610ab5565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220a2af92dd6e4f160276744b925c6c1d96c83ecef77032eed6f80775cec0e3505364736f6c63430008110033";

type ERC20ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Proxy__factory extends ContractFactory {
  constructor(...args: ERC20ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Proxy> {
    return super.deploy(_owner, overrides || {}) as Promise<ERC20Proxy>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): ERC20Proxy {
    return super.attach(address) as ERC20Proxy;
  }
  override connect(signer: Signer): ERC20Proxy__factory {
    return super.connect(signer) as ERC20Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20ProxyInterface {
    return new utils.Interface(_abi) as ERC20ProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Proxy {
    return new Contract(address, _abi, signerOrProvider) as ERC20Proxy;
  }
}
