/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Receiver, ReceiverInterface } from "../Receiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sgRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_amarokRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_recoverGas",
        type: "uint256",
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
    name: "ReentrancyError",
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
        name: "router",
        type: "address",
      },
    ],
    name: "AmarokRouterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    name: "ExecutorSet",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "recoverGas",
        type: "uint256",
      },
    ],
    name: "RecoverGasSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "StargateRouterSet",
    type: "event",
  },
  {
    inputs: [],
    name: "amarokRouter",
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
    name: "cancelOwnershipTransfer",
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
    inputs: [],
    name: "executor",
    outputs: [
      {
        internalType: "contract IExecutor",
        name: "",
        type: "address",
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
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "pullToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "recoverGas",
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
        name: "_amarokRouter",
        type: "address",
      },
    ],
    name: "setAmarokRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "setExecutor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_recoverGas",
        type: "uint256",
      },
    ],
    name: "setRecoverGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sgRouter",
        type: "address",
      },
    ],
    name: "setStargateRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
    ],
    name: "sgReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sgRouter",
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
        internalType: "bytes32",
        name: "_transactionId",
        type: "bytes32",
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
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
    ],
    name: "swapAndCompleteBridgeTokens",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
    ],
    name: "xReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620027c8380380620027c8833981016040819052620000349162000134565b600080546001600160a01b038088166001600160a01b031992831617835560028054888316908416811790915560058054888416908516179055600380549287169290931691909117909155600483905560405190917f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab91a26040516001600160a01b038416907fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a260405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250505050506200019b565b80516001600160a01b03811681146200012f57600080fd5b919050565b600080600080600060a086880312156200014d57600080fd5b620001588662000117565b9450620001686020870162000117565b9350620001786040870162000117565b9250620001886060870162000117565b9150608086015190509295509295909350565b61261d80620001ab6000396000f3fe6080604052600436106101125760003560e01c80637aacd8f8116100a5578063bcf225e611610074578063e30c397811610059578063e30c39781461031f578063f2fde38b1461034c578063fd614f411461036c57600080fd5b8063bcf225e6146102ce578063c34c08e5146102f257600080fd5b80637aacd8f8146102345780638199c105146102615780638da5cb5b14610281578063ab8236f3146102ae57600080fd5b80633184cc22116100e15780633184cc22146101cc5780634f91bc2b146101ec57806351b78b47146101ff5780637200b8291461021f57600080fd5b80630517cb761461011e5780631c3c0ea81461017557806323452b9c146101975780632e144579146101ac57600080fd5b3661011957005b600080fd5b34801561012a57600080fd5b5060025461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018157600080fd5b50610195610190366004611c65565b61038c565b005b3480156101a357600080fd5b5061019561044c565b3480156101b857600080fd5b506101956101c7366004611c82565b610516565b3480156101d857600080fd5b506101956101e7366004611cc3565b61060b565b6101956101fa366004611e5c565b61068f565b34801561020b57600080fd5b5061019561021a366004611c65565b6107fb565b34801561022b57600080fd5b506101956108bb565b34801561024057600080fd5b5060055461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026d57600080fd5b5061019561027c366004611c65565b6109a1565b34801561028d57600080fd5b5060005461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102ba57600080fd5b506101956102c9366004611fee565b610a61565b3480156102da57600080fd5b506102e460045481565b60405190815260200161016c565b3480156102fe57600080fd5b5060035461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561032b57600080fd5b5060015461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561035857600080fd5b50610195610367366004611c65565b610b70565b34801561037857600080fd5b50610195610387366004612092565b610cce565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103dd576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f3e3c5e6d5b512eaa5d5a80669846cfbaf8bde70fc6f7a3be9828cffc9ba5f1db90600090a250565b60005473ffffffffffffffffffffffffffffffffffffffff16331461049d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166104ec576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610567576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166105e55760405173ffffffffffffffffffffffffffffffffffffffff8316908290600081818185875af1925050503d80600081146105d8576040519150601f19603f3d011682016040523d82523d6000602084013e6105dd565b606091505b505050505050565b61060673ffffffffffffffffffffffffffffffffffffffff84168383610dd6565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461065c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600481905560405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161070a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815573ffffffffffffffffffffffffffffffffffffffff831661073d5761073885858585346000610eaa565b6107f1565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff85169063dd62ed3e90604401602060405180830381865afa1580156107b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d49190612115565b90506107e084826112b1565b6107ef86868686856000610eaa565b505b6000905550505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461084c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab90600090a250565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461090d576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146109f2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a250565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610adc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560025473ffffffffffffffffffffffffffffffffffffffff163314610b31576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080600084806020019051810190610b4a91906122fc565b93505092509250610b60838389848a6001610eaa565b5050600090915550505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610bc1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610c0e576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610c5d576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610d49576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560055473ffffffffffffffffffffffffffffffffffffffff163314610d9e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008083806020019051810190610db59190612369565b91509150610dc8898389848c6000610eaa565b505060009055505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106069084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261142c565b600081610eb8576000610ebc565b6004545b905073ffffffffffffffffffffffffffffffffffffffff851661109557818015610ee55750805a105b15610fae5760405173ffffffffffffffffffffffffffffffffffffffff8516908490600081818185875af1925050503d8060008114610f40576040519150601f19603f3d011682016040523d82523d6000602084013e610f45565b606091505b50506040805173ffffffffffffffffffffffffffffffffffffffff8089168252871660208201529081018590524260608201528891507f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2506105dd565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b84835a610fd991906123ea565b908a8a8a8a6040518763ffffffff1660e01b8152600401610ffd949392919061244d565b6000604051808303818589803b15801561101657600080fd5b5088f19450505050508015611029575060015b6110905760405173ffffffffffffffffffffffffffffffffffffffff8516908490600081818185875af1925050503d8060008114611083576040519150601f19603f3d011682016040523d82523d6000602084013e611088565b606091505b5050506112a8565b6112a8565b60035485906110bf9073ffffffffffffffffffffffffffffffffffffffff80841691166000611538565b6003546110e69073ffffffffffffffffffffffffffffffffffffffff8381169116866116ba565b8280156110f25750815a105b1561117f5761111873ffffffffffffffffffffffffffffffffffffffff82168686610dd6565b6040805173ffffffffffffffffffffffffffffffffffffffff80891682528716602082015290810185905242606082015288907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a250506105dd565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b835a6111a991906123ea565b8a8a8a8a6040518663ffffffff1660e01b81526004016111cc949392919061244d565b600060405180830381600088803b1580156111e657600080fd5b5087f1935050505080156111f8575060015b61127e5761121d73ffffffffffffffffffffffffffffffffffffffff82168686610dd6565b6040805173ffffffffffffffffffffffffffffffffffffffff80891682528716602082015290810185905242606082015288907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b6003546112a69073ffffffffffffffffffffffffffffffffffffffff83811691166000611538565b505b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661130a5780341015611306576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003611344576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156113b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d59190612115565b905081811015611420576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610606833330856117be565b600061148e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166119d09092919063ffffffff16565b80519091501561060657808060200190518101906114ac9190612588565b610606576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401611417565b8015806115d857506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156115b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d69190612115565b155b611664576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401611417565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106069084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610e28565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611731573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117559190612115565b61175f91906125a5565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506117b89085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610e28565b50505050565b73ffffffffffffffffffffffffffffffffffffffff841661180b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611858576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156118c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ed9190612115565b90506118fb828686866119e9565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561196b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198f9190612115565b61199991906123ea565b146105dd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60606119df8484600085611a47565b90505b9392505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526117b89085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610e28565b606082471015611ad9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401611417565b73ffffffffffffffffffffffffffffffffffffffff85163b611b57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611417565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611b8091906125b8565b60006040518083038185875af1925050503d8060008114611bbd576040519150601f19603f3d011682016040523d82523d6000602084013e611bc2565b606091505b5091509150611bd2828286611bdd565b979650505050505050565b60608315611bec5750816119e2565b825115611bfc5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141791906125d4565b73ffffffffffffffffffffffffffffffffffffffff81168114611c5257600080fd5b50565b8035611c6081611c30565b919050565b600060208284031215611c7757600080fd5b81356119e281611c30565b600080600060608486031215611c9757600080fd5b8335611ca281611c30565b92506020840135611cb281611c30565b929592945050506040919091013590565b600060208284031215611cd557600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611d2e57611d2e611cdc565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d7b57611d7b611cdc565b604052919050565b600067ffffffffffffffff821115611d9d57611d9d611cdc565b5060051b60200190565b600067ffffffffffffffff821115611dc157611dc1611cdc565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611dfe57600080fd5b8135611e11611e0c82611da7565b611d34565b818152846020838601011115611e2657600080fd5b816020850160208301376000918101602001919091529392505050565b8015158114611c5257600080fd5b8035611c6081611e43565b60008060008060808587031215611e7257600080fd5b84359350602085013567ffffffffffffffff80821115611e9157600080fd5b818701915087601f830112611ea557600080fd5b8135611eb3611e0c82611d83565b8082825260208201915060208360051b86010192508a831115611ed557600080fd5b602085015b83811015611fc0578481351115611ef057600080fd5b8035860160e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828f03011215611f2657600080fd5b611f2e611d0b565b611f3a60208301611c55565b8152611f4860408301611c55565b6020820152611f5960608301611c55565b6040820152611f6a60808301611c55565b606082015260a0820135608082015260c082013587811115611f8b57600080fd5b611f9a8f602083860101611ded565b60a083015250611fac60e08301611e51565b60c082015284525060209283019201611eda565b508097505050505050611fd560408601611c55565b9150611fe360608601611c55565b905092959194509250565b60008060008060008060c0878903121561200757600080fd5b863561ffff8116811461201957600080fd5b9550602087013567ffffffffffffffff8082111561203657600080fd5b6120428a838b01611ded565b9650604089013595506060890135915061205b82611c30565b9093506080880135925060a0880135908082111561207857600080fd5b5061208589828a01611ded565b9150509295509295509295565b60008060008060008060c087890312156120ab57600080fd5b863595506020870135945060408701356120c481611c30565b935060608701356120d481611c30565b9250608087013563ffffffff811681146120ed57600080fd5b915060a087013567ffffffffffffffff81111561210957600080fd5b61208589828a01611ded565b60006020828403121561212757600080fd5b5051919050565b8051611c6081611c30565b60005b8381101561215457818101518382015260200161213c565b50506000910152565b600082601f83011261216e57600080fd5b815161217c611e0c82611da7565b81815284602083860101111561219157600080fd5b6121a2826020830160208701612139565b949350505050565b8051611c6081611e43565b600082601f8301126121c657600080fd5b815160206121d6611e0c83611d83565b82815260059290921b840181019181810190868411156121f557600080fd5b8286015b848110156122f157805167ffffffffffffffff8082111561221a5760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d030112156122535760008081fd5b61225b611d0b565b61226688850161212e565b8152604061227581860161212e565b89830152606061228681870161212e565b828401526080915061229982870161212e565b818401525060a0808601518284015260c0915081860151858111156122be5760008081fd5b6122cc8f8c838a010161215d565b8285015250506122dd8386016121aa565b9082015286525050509183019183016121f9565b509695505050505050565b6000806000806080858703121561231257600080fd5b84519350602085015167ffffffffffffffff81111561233057600080fd5b61233c878288016121b5565b935050604085015161234d81611c30565b606086015190925061235e81611c30565b939692955090935050565b6000806040838503121561237c57600080fd5b825167ffffffffffffffff81111561239357600080fd5b61239f858286016121b5565b92505060208301516123b081611c30565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156123fd576123fd6123bb565b92915050565b6000815180845261241b816020860160208601612139565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015612538577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e08986018190529061250c82870182612403565b91505060c08083015192506125248187018415159052565b50958701959350509085019060010161247b565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550612563945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b60006020828403121561259a57600080fd5b81516119e281611e43565b808201808211156123fd576123fd6123bb565b600082516125ca818460208701612139565b9190910192915050565b6020815260006119e2602083018461240356fea2646970667358221220d15e8e74bbfe2adf72869f5bc7078d37f7f5c647db85aef1a874b470db32e0db64736f6c63430008110033";

type ReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Receiver__factory extends ContractFactory {
  constructor(...args: ReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _sgRouter: PromiseOrValue<string>,
    _amarokRouter: PromiseOrValue<string>,
    _executor: PromiseOrValue<string>,
    _recoverGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Receiver> {
    return super.deploy(
      _owner,
      _sgRouter,
      _amarokRouter,
      _executor,
      _recoverGas,
      overrides || {}
    ) as Promise<Receiver>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _sgRouter: PromiseOrValue<string>,
    _amarokRouter: PromiseOrValue<string>,
    _executor: PromiseOrValue<string>,
    _recoverGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _sgRouter,
      _amarokRouter,
      _executor,
      _recoverGas,
      overrides || {}
    );
  }
  override attach(address: string): Receiver {
    return super.attach(address) as Receiver;
  }
  override connect(signer: Signer): Receiver__factory {
    return super.connect(signer) as Receiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReceiverInterface {
    return new utils.Interface(_abi) as ReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Receiver {
    return new Contract(address, _abi, signerOrProvider) as Receiver;
  }
}
