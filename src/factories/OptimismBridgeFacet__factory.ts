/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  OptimismBridgeFacet,
  OptimismBridgeFacetInterface,
} from "../OptimismBridgeFacet";

const _abi = [
  {
    inputs: [],
    name: "AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotBridgeToSameNetwork",
    type: "error",
  },
  {
    inputs: [],
    name: "ContractCallNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "receivedAmount",
        type: "uint256",
      },
    ],
    name: "CumulativeSlippageTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "InformationMismatch",
    type: "error",
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
    name: "InvalidConfig",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidContract",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidReceiver",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeAssetTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSwapDataProvided",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSwapFromZeroBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "NoTransferToNullAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAValidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAnERC20Token",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyContractOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyError",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receivingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LiFiTransferCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receivingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LiFiTransferRecovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "bridge",
            type: "string",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "hasSourceSwaps",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "hasDestinationCall",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct ILiFi.BridgeData",
        name: "bridgeData",
        type: "tuple",
      },
    ],
    name: "LiFiTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "OptimismBridgeRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "assetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "bridge",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct OptimismBridgeFacet.Config[]",
        name: "configs",
        type: "tuple[]",
      },
    ],
    name: "OptimismInitialized",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "assetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "bridge",
            type: "address",
          },
        ],
        internalType: "struct OptimismBridgeFacet.Config[]",
        name: "configs",
        type: "tuple[]",
      },
      {
        internalType: "contract IL1StandardBridge",
        name: "standardBridge",
        type: "address",
      },
    ],
    name: "initOptimism",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "registerOptimismBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "bridge",
            type: "string",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "hasSourceSwaps",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "hasDestinationCall",
            type: "bool",
          },
        ],
        internalType: "struct ILiFi.BridgeData",
        name: "_bridgeData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "assetIdOnL2",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "l2Gas",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "isSynthetix",
            type: "bool",
          },
        ],
        internalType: "struct OptimismBridgeFacet.OptimismData",
        name: "_optimismData",
        type: "tuple",
      },
    ],
    name: "startBridgeTokensViaOptimismBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "bridge",
            type: "string",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "hasSourceSwaps",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "hasDestinationCall",
            type: "bool",
          },
        ],
        internalType: "struct ILiFi.BridgeData",
        name: "_bridgeData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "approveTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fromAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "requiresDeposit",
            type: "bool",
          },
        ],
        internalType: "struct LibSwap.SwapData[]",
        name: "_swapData",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "assetIdOnL2",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "l2Gas",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "isSynthetix",
            type: "bool",
          },
        ],
        internalType: "struct OptimismBridgeFacet.OptimismData",
        name: "_optimismData",
        type: "tuple",
      },
    ],
    name: "swapAndStartBridgeTokensViaOptimismBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612ff1806100206000396000f3fe60806040526004361061003f5760003560e01c80635bb5d44814610044578063899cc31714610059578063ce8a97a514610079578063decb09d71461008c575b600080fd5b61005761005236600461284e565b6100ac565b005b34801561006557600080fd5b506100576100743660046128fa565b6102f1565b610057610087366004612980565b61056a565b34801561009857600080fd5b506100576100a73660046129cf565b6107a6565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610127576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101383447612a37565b905086806101000151610177576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361024d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361028a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61029f8a600001518b60c001518b8b3361091b565b60c08b01526102ae8a88610a63565b50479150600090508282116102c45760006102ce565b6102ce8383612a37565b905080156102e2576102e260008583610dec565b50506000909255505050505050565b6102f9610e22565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff161561038f576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b838110156104d05760008585838181106103ae576103ae612a4a565b90506040020160200160208101906103c69190612a79565b73ffffffffffffffffffffffffffffffffffffffff1603610413576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84848281811061042557610425612a4a565b905060400201602001602081019061043d9190612a79565b82600087878581811061045257610452612a4a565b6104689260206040909202019081019150612a79565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055806104c881612a96565b915050610392565b506001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fd192688003c02a257d1ee3ef083c31f3ba31e400ad8655bf4257081255c915689061055c9086908690612ace565b60405180910390a150505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105e5576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006105f63447612a37565b90508480610100015115610636576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610674576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106978160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106ce576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361070c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610749576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61075b88608001518960c00151610e97565b6107658888610a63565b504791506000905082821161077b576000610785565b6107858383612a37565b905080156107995761079960008583610dec565b5050600090925550505050565b6107ae610e22565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff16610843576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610890576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917f8ba151f3405c32cff2d4c159409e00b97b0b46fbcbe59438e7f62c1283f80638910160405180910390a2505050565b600082808203610957576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610966600185612a37565b81811061097557610975612a4a565b90506020028101906109879190612b41565b610998906080810190606001612a79565b905060006109a58261100d565b905073ffffffffffffffffffffffffffffffffffffffff82166109cf576109cc3482612a37565b90505b60006109db88886110c6565b90506109e788886111d2565b6109f48a89898985611233565b600082610a008561100d565b610a0a9190612a37565b905089811015610a55576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff90811660009081527f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca360208190526040822054909216908115610ac05781610adc565b600183015473ffffffffffffffffffffffffffffffffffffffff165b9050610b00856080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610bd95760c085015160a086015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610b3d6040890160208a01612b7f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015263ffffffff16602482015260606044820152600060648201526084016000604051808303818588803b158015610bbb57600080fd5b505af1158015610bcf573d6000803e3d6000fd5b5050505050610dae565b610bec8560800151828760c001516115e5565b610bfc6060850160408601612ba5565b15610cb35760a085015160c08601516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610c7c9260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b158015610c9657600080fd5b505af1158015610caa573d6000803e3d6000fd5b50505050610dae565b608085015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610ce36020880188612a79565b60a089015160c08a0151610cfd60408b0160208c01612b7f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff95861660048201529385166024850152939091166044830152606482015263ffffffff91909116608482015260c060a4820152600060c482015260e401600060405180830381600087803b158015610d9557600080fd5b505af1158015610da9573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610ddd9190612c30565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610e1857610e13838383611730565b505050565b610e13828261185f565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e95576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b73ffffffffffffffffffffffffffffffffffffffff8216610ef05780341015610eec576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610f2a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610f97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbb9190612d43565b905081811015611001576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a4c565b610e1383333085611989565b600073ffffffffffffffffffffffffffffffffffffffff8216156110be576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611095573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b99190612d43565b6110c0565b475b92915050565b60608160008167ffffffffffffffff8111156110e4576110e461259c565b60405190808252806020026020018201604052801561110d578160200160208202803683370190505b5090506000805b838110156111c75786868281811061112e5761112e612a4a565b90506020028101906111409190612b41565b611151906080810190606001612a79565b915061115c8261100d565b83828151811061116e5761116e612a4a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111bf57348382815181106111a7576111a7612a4a565b602002602001018181516111bb9190612a37565b9052505b600101611114565b509095945050505050565b60005b81811015610e135760008383838181106111f1576111f1612a4a565b90506020028101906112039190612b41565b61120c90612d5c565b90508060c001511561122a5761122a81604001518260800151610e97565b506001016111d5565b838383838260018114611500576000858561124f600185612a37565b81811061125e5761125e612a4a565b90506020028101906112709190612b41565b611281906080810190606001612a79565b9050600089815b8181101561142c57368d8d838181106112a3576112a3612a4a565b90506020028101906112b59190612b41565b90506112e46112ca6060830160408401612a79565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061134757506113476112fd6040830160208401612a79565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561135e575061135e6112fd6020830183612a79565b80156113e357506113e361137560a0830183612e01565b61138491600491600091612e6d565b61138d91612e97565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611419576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114238f82611ba3565b50600101611288565b505060005b61143c600185612a37565b8110156114f857600088888381811061145757611457612a4a565b90506020028101906114699190612b41565b61147a906080810190606001612a79565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114ef578582815181106114c1576114c1612a4a565b60200260200101516114d28261100d565b6114dc9190612a37565b925082156114ef576114ef818885610dec565b50600101611431565b5050506115d9565b8760005b818110156115d657368b8b8381811061151f5761151f612a4a565b90506020028101906115319190612b41565b90506115466112ca6060830160408401612a79565b8061155f575061155f6112fd6040830160208401612a79565b801561157657506115766112fd6020830183612a79565b801561158d575061158d61137560a0830183612e01565b6115c3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115cd8d82611ba3565b50600101611504565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661160557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611652576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156116c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ec9190612d43565b90508181101561172a5761172a8484611725847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612a37565b611eb9565b50505050565b73ffffffffffffffffffffffffffffffffffffffff831661177d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156117ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061180e9190612d43565b905080821115611854576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a4c565b61172a848484612035565b73ffffffffffffffffffffffffffffffffffffffff82166118ac576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156118ef576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a4c565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611949576040519150601f19603f3d011682016040523d82523d6000602084013e61194e565b606091505b5050905080610e13576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166119d6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611a23576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611a94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ab89190612d43565b9050611ac68286868661208b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611b36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b5a9190612d43565b611b649190612a37565b14611b9b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611bb9611bb36020830183612a79565b3b151590565b611bef576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611c2f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611c446112ca6060850160408601612a79565b611c4f576000611c55565b82608001355b90506000611c71611c6c6060860160408701612a79565b61100d565b90506000611c88611c6c6080870160608801612a79565b905082600003611cbf57611cbf611ca56060870160408801612a79565b611cb56040880160208901612a79565b87608001356115e5565b8460800135821015611d0a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a4c565b600080611d1a6020880188612a79565b73ffffffffffffffffffffffffffffffffffffffff1685611d3e60a08a018a612e01565b604051611d4c929190612edf565b60006040518083038185875af1925050503d8060008114611d89576040519150601f19603f3d011682016040523d82523d6000602084013e611d8e565b606091505b509150915081611dd9576000611da3826120e9565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4c9190612eef565b6000611dee611c6c60808a0160608b01612a79565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611e1f60208b018b612a79565b611e2f60608c0160408d01612a79565b611e3f60808d0160608e01612a79565b8c60800135898711611e515786611e5b565b611e5b8a88612a37565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611f30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f549190612d43565b611f5e9190612f02565b60405173ffffffffffffffffffffffffffffffffffffffff851660248201526044810182905290915061172a9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612167565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610e139084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611fb3565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261172a9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611fb3565b606060448251101561212e57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061214a60048085516121429190612a37565b859190612273565b9050808060200190518101906121609190612f15565b9392505050565b60006121c9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661238d9092919063ffffffff16565b805190915015610e1357808060200190518101906121e79190612f8c565b610e13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a4c565b60608161228181601f612f02565b10156122b9576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6122c38284612f02565b845110156122fd576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561231c5760405191506000825260208201604052612384565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561235557805183526020928301920161233d565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606061239c84846000856123a4565b949350505050565b606082471015612436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a4c565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161245f9190612fa9565b60006040518083038185875af1925050503d806000811461249c576040519150601f19603f3d011682016040523d82523d6000602084013e6124a1565b606091505b50915091506124b2878383876124bd565b979650505050505050565b6060831561255357825160000361254c5773ffffffffffffffffffffffffffffffffffffffff85163b61254c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a4c565b508161239c565b61239c83838151156125685781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4c9190612eef565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156125ef576125ef61259c565b60405290565b60405160e0810167ffffffffffffffff811182821017156125ef576125ef61259c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561265f5761265f61259c565b604052919050565b600067ffffffffffffffff8211156126815761268161259c565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126126be57600080fd5b81356126d16126cc82612667565b612618565b8181528460208386010111156126e657600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461272557600080fd5b50565b803561273381612703565b919050565b801515811461272557600080fd5b803561273381612738565b6000610140828403121561276457600080fd5b61276c6125cb565b905081358152602082013567ffffffffffffffff8082111561278d57600080fd5b612799858386016126ad565b602084015260408401359150808211156127b257600080fd5b506127bf848285016126ad565b6040830152506127d160608301612728565b60608201526127e260808301612728565b60808201526127f360a08301612728565b60a082015260c082013560c082015260e082013560e082015261010061281a818401612746565b9082015261012061282c838201612746565b9082015292915050565b60006060828403121561284857600080fd5b50919050565b60008060008060a0858703121561286457600080fd5b843567ffffffffffffffff8082111561287c57600080fd5b61288888838901612751565b9550602087013591508082111561289e57600080fd5b818701915087601f8301126128b257600080fd5b8135818111156128c157600080fd5b8860208260051b85010111156128d657600080fd5b6020830195508094505050506128ef8660408701612836565b905092959194509250565b60008060006040848603121561290f57600080fd5b833567ffffffffffffffff8082111561292757600080fd5b818601915086601f83011261293b57600080fd5b81358181111561294a57600080fd5b8760208260061b850101111561295f57600080fd5b6020928301955093505084013561297581612703565b809150509250925092565b6000806080838503121561299357600080fd5b823567ffffffffffffffff8111156129aa57600080fd5b6129b685828601612751565b9250506129c68460208501612836565b90509250929050565b600080604083850312156129e257600080fd5b82356129ed81612703565b915060208301356129fd81612703565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156110c0576110c0612a08565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215612a8b57600080fd5b813561216081612703565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612ac757612ac7612a08565b5060010190565b6020808252818101839052600090604080840186845b87811015612b34578135612af781612703565b73ffffffffffffffffffffffffffffffffffffffff90811684528286013590612b1f82612703565b16838601529183019190830190600101612ae4565b5090979650505050505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612b7557600080fd5b9190910192915050565b600060208284031215612b9157600080fd5b813563ffffffff8116811461216057600080fd5b600060208284031215612bb757600080fd5b813561216081612738565b60005b83811015612bdd578181015183820152602001612bc5565b50506000910152565b60008151808452612bfe816020860160208601612bc2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612c59610160850183612be6565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612c948382612be6565b9250506060850151612cbe608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612d318187018315159052565b90950151151593019290925250919050565b600060208284031215612d5557600080fd5b5051919050565b600060e08236031215612d6e57600080fd5b612d766125f5565b612d7f83612728565b8152612d8d60208401612728565b6020820152612d9e60408401612728565b6040820152612daf60608401612728565b60608201526080830135608082015260a083013567ffffffffffffffff811115612dd857600080fd5b612de4368286016126ad565b60a083015250612df660c08401612746565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612e3657600080fd5b83018035915067ffffffffffffffff821115612e5157600080fd5b602001915036819003821315612e6657600080fd5b9250929050565b60008085851115612e7d57600080fd5b83861115612e8a57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612ed75780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6020815260006121606020830184612be6565b808201808211156110c0576110c0612a08565b600060208284031215612f2757600080fd5b815167ffffffffffffffff811115612f3e57600080fd5b8201601f81018413612f4f57600080fd5b8051612f5d6126cc82612667565b818152856020838501011115612f7257600080fd5b612f83826020830160208601612bc2565b95945050505050565b600060208284031215612f9e57600080fd5b815161216081612738565b60008251612b75818460208701612bc256fea2646970667358221220474636f73cc8fdaba451144487022a51f53e0bcf881d33cbdbf8f1438b38b2ec64736f6c63430008110033";

type OptimismBridgeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OptimismBridgeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OptimismBridgeFacet__factory extends ContractFactory {
  constructor(...args: OptimismBridgeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OptimismBridgeFacet> {
    return super.deploy(overrides || {}) as Promise<OptimismBridgeFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OptimismBridgeFacet {
    return super.attach(address) as OptimismBridgeFacet;
  }
  override connect(signer: Signer): OptimismBridgeFacet__factory {
    return super.connect(signer) as OptimismBridgeFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OptimismBridgeFacetInterface {
    return new utils.Interface(_abi) as OptimismBridgeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OptimismBridgeFacet {
    return new Contract(address, _abi, signerOrProvider) as OptimismBridgeFacet;
  }
}
