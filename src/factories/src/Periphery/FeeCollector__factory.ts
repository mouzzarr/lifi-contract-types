/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FeeCollector,
  FeeCollectorInterface,
} from "../../../src/Periphery/FeeCollector";

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
  "0x608060405234801561001057600080fd5b5060405161198938038061198983398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6118f6806100936000396000f3fe6080604052600436106100d25760003560e01c8063bd0b380b1161007f578063e30c397811610059578063e30c397814610217578063e5d6476614610237578063eedd56e114610257578063f2fde38b1461027757600080fd5b8063bd0b380b146101c4578063c489744b146101e4578063e0cbc5f21461020457600080fd5b806364bc5be1116100b057806364bc5be1146101575780637200b829146101775780638da5cb5b1461018c57600080fd5b80630fe97f70146100d757806323452b9c14610120578063461ad4f514610137575b600080fd5b3480156100e357600080fd5b5061010d6100f2366004611595565b6001600160a01b031660009081526003602052604090205490565b6040519081526020015b60405180910390f35b34801561012c57600080fd5b50610135610297565b005b34801561014357600080fd5b50610135610152366004611595565b610347565b34801561016357600080fd5b506101356101723660046115df565b610419565b34801561018357600080fd5b50610135610588565b34801561019857600080fd5b506000546101ac906001600160a01b031681565b6040516001600160a01b039091168152602001610117565b3480156101d057600080fd5b506101356101df366004611595565b610647565b3480156101f057600080fd5b5061010d6101ff3660046116c2565b6106e4565b6101356102123660046116f5565b610711565b34801561022357600080fd5b506001546101ac906001600160a01b031681565b34801561024357600080fd5b506101356102523660046115df565b6108bd565b34801561026357600080fd5b5061013561027236600461172a565b6109f9565b34801561028357600080fd5b50610135610292366004611595565b610abb565b6000546001600160a01b031633146102db576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546001600160a01b031661031d576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6000546001600160a01b0316331461038b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038116600090815260036020526040812054908190036103b0575050565b6001600160a01b0382166000908152600360205260408120556103d4823383610be5565b60405181815233906001600160a01b038416907fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc906020015b60405180910390a35050565b6000546001600160a01b0316331461045d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516000805b82811015610582576003600085838151811061048157610481611770565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000205491506000600360008684815181106104c4576104c4611770565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208190555061051484828151811061050557610505611770565b60200260200101513384610be5565b336001600160a01b031684828151811061053057610530611770565b60200260200101516001600160a01b03167fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc8460405161057291815260200190565b60405180910390a3600101610463565b50505050565b6001546001600160a01b03163381146105cd576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b3360009081526002602090815260408083206001600160a01b038516845290915281205490819003610677575050565b3360008181526002602090815260408083206001600160a01b03871684529091528120556106a790839083610be5565b60405181815233906001600160a01b038416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200161040d565b6001600160a01b038083166000908152600260209081526040808320938516835292905220545b92915050565b61071b82846117ce565b341015610754576040517f840a2adf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b0381166000908152600260209081526040808320838052909152812080548592906107879084906117ce565b9091555050600080805260036020527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff80548492906107c79084906117ce565b90915550600090506107d983856117ce565b6107e390346117e1565b9050801561086f57604051600090339083908381818185875af1925050503d806000811461082d576040519150601f19603f3d011682016040523d82523d6000602084013e610832565b606091505b505090508061086d576040517ff7e6817a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b60408051858152602081018590526001600160a01b038416916000917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea91015b60405180910390a350505050565b80516000805b828110156105825733600090815260026020526040812085519091908690849081106108f1576108f1611770565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020549150816000146109f1573360009081526002602052604081208551829087908590811061094957610949611770565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208190555061098a84828151811061050557610505611770565b336001600160a01b03168482815181106109a6576109a6611770565b60200260200101516001600160a01b03167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa8846040516109e891815260200190565b60405180910390a35b6001016108c3565b610a0c84610a0784866117ce565b610c0e565b6001600160a01b03808216600090815260026020908152604080832093881683529290529081208054859290610a439084906117ce565b90915550506001600160a01b03841660009081526003602052604081208054849290610a709084906117ce565b909155505060408051848152602081018490526001600160a01b0380841692908716917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea91016108af565b6000546001600160a01b03163314610aff576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038116610b3f576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336001600160a01b03821603610b81576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6001600160a01b03831615610c0457610bff838383610d6f565b505050565b610bff8282610e84565b6001600160a01b038216610c5a5780341015610c56576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610c94576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610cf4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1891906117f4565b905081811015610d63576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610bff83333085610f94565b6001600160a01b038316610daf576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000906001600160a01b038516906370a0823190602401602060405180830381865afa158015610e0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3391906117f4565b905080821115610e79576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610d5a565b61058284848461117a565b6001600160a01b038216610ec4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f07576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610d5a565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610f54576040519150601f19603f3d011682016040523d82523d6000602084013e610f59565b606091505b5050905080610bff576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038416610fd4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038216611014576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b03838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611078573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109c91906117f4565b90506110aa82868686611241565b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152849183918516906370a0823190602401602060405180830381865afa15801561110d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113191906117f4565b61113b91906117e1565b14611172576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6040516001600160a01b038316602482015260448101829052610bff9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611292565b6040516001600160a01b03808516602483015283166044820152606481018290526105829085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016111bf565b60006112e7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113919092919063ffffffff16565b805190915015610bff5780806020019051810190611305919061180d565b610bff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610d5a565b60606113a084846000856113aa565b90505b9392505050565b60608247101561143c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610d5a565b6001600160a01b0385163b6114ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610d5a565b600080866001600160a01b031685876040516114c99190611853565b60006040518083038185875af1925050503d8060008114611506576040519150601f19603f3d011682016040523d82523d6000602084013e61150b565b606091505b509150915061151b828286611526565b979650505050505050565b606083156115355750816113a3565b8251156115455782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5a919061186f565b80356001600160a01b038116811461159057600080fd5b919050565b6000602082840312156115a757600080fd5b6113a382611579565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208083850312156115f257600080fd5b823567ffffffffffffffff8082111561160a57600080fd5b818501915085601f83011261161e57600080fd5b813581811115611630576116306115b0565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715611673576116736115b0565b60405291825284820192508381018501918883111561169157600080fd5b938501935b828510156116b6576116a785611579565b84529385019392850192611696565b98975050505050505050565b600080604083850312156116d557600080fd5b6116de83611579565b91506116ec60208401611579565b90509250929050565b60008060006060848603121561170a57600080fd5b833592506020840135915061172160408501611579565b90509250925092565b6000806000806080858703121561174057600080fd5b61174985611579565b9350602085013592506040850135915061176560608601611579565b905092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561070b5761070b61179f565b8181038181111561070b5761070b61179f565b60006020828403121561180657600080fd5b5051919050565b60006020828403121561181f57600080fd5b815180151581146113a357600080fd5b60005b8381101561184a578181015183820152602001611832565b50506000910152565b6000825161186581846020870161182f565b9190910192915050565b602081526000825180602084015261188e81604085016020870161182f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220c2ab3552babd6d13ea2df8067763b2f07afb94c9b0c4dbfde318102ddc64e85564736f6c63430008110033";

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
