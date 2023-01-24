/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FeeCollector, FeeCollectorInterface } from "../FeeCollector";

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
    inputs: [
      {
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeAssetTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NewOwnerMustNotBeSelf",
    type: "error",
  },
  {
    inputs: [],
    name: "NoNullOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NoPendingOwnershipTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "NoTransferToNullAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughNativeForFees",
    type: "error",
  },
  {
    inputs: [],
    name: "NotPendingOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAnERC20Token",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFailure",
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
        name: "_token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_integrator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_integratorFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_lifiFee",
        type: "uint256",
      },
    ],
    name: "FeesCollected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "FeesWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "LiFiFeesWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
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
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
    ],
    name: "batchWithdrawIntegratorFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
    ],
    name: "batchWithdrawLifiFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelOwnershipTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "integratorFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lifiFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "integratorAddress",
        type: "address",
      },
    ],
    name: "collectNativeFees",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "uint256",
        name: "integratorFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lifiFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "integratorAddress",
        type: "address",
      },
    ],
    name: "collectTokenFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "confirmOwnershipTransfer",
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
    ],
    name: "getLifiTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "integratorAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "getTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    name: "pendingOwner",
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
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
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
    ],
    name: "withdrawIntegratorFees",
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
    ],
    name: "withdrawLifiFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611c61380380611c6183398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b611bce806100936000396000f3fe6080604052600436106100d25760003560e01c8063bd0b380b1161007f578063e30c397811610059578063e30c39781461023e578063e5d647661461026b578063eedd56e11461028b578063f2fde38b146102ab57600080fd5b8063bd0b380b146101eb578063c489744b1461020b578063e0cbc5f21461022b57600080fd5b806364bc5be1116100b057806364bc5be1146101645780637200b829146101845780638da5cb5b1461019957600080fd5b80630fe97f70146100d757806323452b9c1461012d578063461ad4f514610144575b600080fd5b3480156100e357600080fd5b5061011a6100f236600461186d565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6040519081526020015b60405180910390f35b34801561013957600080fd5b506101426102cb565b005b34801561015057600080fd5b5061014261015f36600461186d565b610395565b34801561017057600080fd5b5061014261017f3660046118b7565b61049b565b34801561019057600080fd5b50610142610665565b3480156101a557600080fd5b506000546101c69073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610124565b3480156101f757600080fd5b5061014261020636600461186d565b61074b565b34801561021757600080fd5b5061011a61022636600461199a565b61080f565b6101426102393660046119cd565b610849565b34801561024a57600080fd5b506001546101c69073ffffffffffffffffffffffffffffffffffffffff1681565b34801561027757600080fd5b506101426102863660046118b7565b610a0f565b34801561029757600080fd5b506101426102a6366004611a02565b610b99565b3480156102b757600080fd5b506101426102c636600461186d565b610c82565b60005473ffffffffffffffffffffffffffffffffffffffff16331461031c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661036b576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103e6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604081205490819003610418575050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020526040812055610449823383610de0565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc906020015b60405180910390a35050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104ec576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516000805b8281101561065f576003600085838151811061051057610510611a48565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915060006003600086848151811061056d5761056d611a48565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506105d78482815181106105c8576105c8611a48565b60200260200101513384610de0565b3373ffffffffffffffffffffffffffffffffffffffff1684828151811061060057610600611a48565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc8460405161064f91815260200190565b60405180910390a36001016104f2565b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106b7576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b33600090815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205490819003610788575050565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120556107c590839083610de0565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200161048f565b73ffffffffffffffffffffffffffffffffffffffff8083166000908152600260209081526040808320938516835292905220545b92915050565b6108538284611aa6565b34101561088c576040517f840a2adf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600260209081526040808320838052909152812080548592906108cc908490611aa6565b9091555050600080805260036020527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff805484929061090c908490611aa6565b909155506000905061091e8385611aa6565b6109289034611ab9565b905080156109b457604051600090339083908381818185875af1925050503d8060008114610972576040519150601f19603f3d011682016040523d82523d6000602084013e610977565b606091505b50509050806109b2576040517ff7e6817a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b604080518581526020810185905273ffffffffffffffffffffffffffffffffffffffff8416916000917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea91015b60405180910390a350505050565b80516000805b8281101561065f573360009081526002602052604081208551909190869084908110610a4357610a43611a48565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915081600014610b915733600090815260026020526040812085518290879085908110610ab557610ab5611a48565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b108482815181106105c8576105c8611a48565b3373ffffffffffffffffffffffffffffffffffffffff16848281518110610b3957610b39611a48565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa884604051610b8891815260200190565b60405180910390a35b600101610a15565b610bac84610ba78486611aa6565b610e16565b73ffffffffffffffffffffffffffffffffffffffff808216600090815260026020908152604080832093881683529290529081208054859290610bf0908490611aa6565b909155505073ffffffffffffffffffffffffffffffffffffffff841660009081526003602052604081208054849290610c2a908490611aa6565b9091555050604080518481526020810184905273ffffffffffffffffffffffffffffffffffffffff80841692908716917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea9101610a01565b60005473ffffffffffffffffffffffffffffffffffffffff163314610cd3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d20576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610d6f576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff831615610e0c57610e07838383610f91565b505050565b610e0782826110c0565b73ffffffffffffffffffffffffffffffffffffffff8216610e6f5780341015610e6b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610ea9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610f16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3a9190611acc565b905081811015610f85576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610e07833330856111ea565b73ffffffffffffffffffffffffffffffffffffffff8316610fde576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561104b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106f9190611acc565b9050808211156110b5576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f7c565b61065f848484611404565b73ffffffffffffffffffffffffffffffffffffffff821661110d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611150576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610f7c565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146111aa576040519150601f19603f3d011682016040523d82523d6000602084013e6111af565b606091505b5050905080610e07576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611237576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611284576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156112f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113199190611acc565b9050611327828686866114d8565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611397573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113bb9190611acc565b6113c59190611ab9565b146113fc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610e079084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611536565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261065f9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611456565b6000611598826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166116429092919063ffffffff16565b805190915015610e0757808060200190518101906115b69190611ae5565b610e07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610f7c565b6060611651848460008561165b565b90505b9392505050565b6060824710156116ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610f7c565b73ffffffffffffffffffffffffffffffffffffffff85163b61176b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f7c565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516117949190611b2b565b60006040518083038185875af1925050503d80600081146117d1576040519150601f19603f3d011682016040523d82523d6000602084013e6117d6565b606091505b50915091506117e68282866117f1565b979650505050505050565b60608315611800575081611654565b8251156118105782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7c9190611b47565b803573ffffffffffffffffffffffffffffffffffffffff8116811461186857600080fd5b919050565b60006020828403121561187f57600080fd5b61165482611844565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208083850312156118ca57600080fd5b823567ffffffffffffffff808211156118e257600080fd5b818501915085601f8301126118f657600080fd5b81358181111561190857611908611888565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f8301168101818110858211171561194b5761194b611888565b60405291825284820192508381018501918883111561196957600080fd5b938501935b8285101561198e5761197f85611844565b8452938501939285019261196e565b98975050505050505050565b600080604083850312156119ad57600080fd5b6119b683611844565b91506119c460208401611844565b90509250929050565b6000806000606084860312156119e257600080fd5b83359250602084013591506119f960408501611844565b90509250925092565b60008060008060808587031215611a1857600080fd5b611a2185611844565b93506020850135925060408501359150611a3d60608601611844565b905092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561084357610843611a77565b8181038181111561084357610843611a77565b600060208284031215611ade57600080fd5b5051919050565b600060208284031215611af757600080fd5b8151801515811461165457600080fd5b60005b83811015611b22578181015183820152602001611b0a565b50506000910152565b60008251611b3d818460208701611b07565b9190910192915050565b6020815260008251806020840152611b66816040850160208701611b07565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220cf0936eadb20c768bcbe0502a46c50bfaca922242be5e0510c4e5f7b1a93f2f664736f6c63430008110033";

type FeeCollectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeCollectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeCollector__factory extends ContractFactory {
  constructor(...args: FeeCollectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FeeCollector> {
    return super.deploy(_owner, overrides || {}) as Promise<FeeCollector>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): FeeCollector {
    return super.attach(address) as FeeCollector;
  }
  override connect(signer: Signer): FeeCollector__factory {
    return super.connect(signer) as FeeCollector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeCollectorInterface {
    return new utils.Interface(_abi) as FeeCollectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeCollector {
    return new Contract(address, _abi, signerOrProvider) as FeeCollector;
  }
}
