/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MultichainFacet,
  MultichainFacetInterface,
} from "../../MultichainFacet.sol/MultichainFacet";

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
    name: "InvalidRouter",
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
        components: [
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "anyTokenAddress",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct MultichainFacet.AnyMapping[]",
        name: "mappings",
        type: "tuple[]",
      },
    ],
    name: "AnyMappingUpdated",
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
    inputs: [],
    name: "MultichainInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "routers",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "bool[]",
        name: "allowed",
        type: "bool[]",
      },
    ],
    name: "MultichainRoutersUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "anyNative",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "routers",
        type: "address[]",
      },
    ],
    name: "initMultichain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "routers",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "allowed",
        type: "bool[]",
      },
    ],
    name: "registerRouters",
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
            name: "router",
            type: "address",
          },
        ],
        internalType: "struct MultichainFacet.MultichainData",
        name: "_multichainData",
        type: "tuple",
      },
    ],
    name: "startBridgeTokensViaMultichain",
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
            name: "router",
            type: "address",
          },
        ],
        internalType: "struct MultichainFacet.MultichainData",
        name: "_multichainData",
        type: "tuple",
      },
    ],
    name: "swapAndStartBridgeTokensViaMultichain",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "anyTokenAddress",
            type: "address",
          },
        ],
        internalType: "struct MultichainFacet.AnyMapping[]",
        name: "mappings",
        type: "tuple[]",
      },
    ],
    name: "updateAddressMappings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506130b3806100206000396000f3fe60806040526004361061005a5760003560e01c8063dcd5733b11610043578063dcd5733b14610094578063dfd83090146100b4578063ef55f6dd146100d457600080fd5b8063a342d3ff1461005f578063bcd733b314610074575b600080fd5b61007261006d3660046128f1565b6100e7565b005b34801561008057600080fd5b5061007261008f36600461296d565b610395565b3480156100a057600080fd5b506100726100af3660046129e2565b61052b565b3480156100c057600080fd5b506100726100cf366004612a4e565b61070a565b6100726100e2366004612aa1565b61093c565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610162576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101733447612b2a565b9050868061010001516101b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101f0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102068160a001516001600160a01b03161590565b1561023d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361027b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102b8576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86516001600160a01b031660009081527f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b72602081905260409091205460ff1661032d576040517f466d7fef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103428b600001518c60c001518c8c33610c11565b60c08c01526103518b89610d4c565b504792506000915050828211610368576000610372565b6103728383612b2a565b905080156103865761038660008583611030565b50506000909255505050505050565b61039d611059565b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b73547f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b729060ff1661041a576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b67ffffffffffffffff81168311156104ec5783838267ffffffffffffffff1681811061044b5761044b612b3d565b90506040020160200160208101906104639190612b6c565b82600201600086868567ffffffffffffffff1681811061048557610485612b3d565b61049b9260206040909202019081019150612b6c565b6001600160a01b039081168252602082019290925260400160002080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169290911691909117905560010161041d565b507fbcc160cb920b2b041ee8915122941375065d36950ffc1d026789ac3db33d7efc838360405161051e929190612b87565b60405180910390a1505050565b610533611059565b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b73547f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b729060ff166105b0576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8360005b818110156106c45760008787838181106105d0576105d0612b3d565b90506020020160208101906105e59190612b6c565b6001600160a01b031603610625576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84848281811061063757610637612b3d565b905060200201602081019061064c9190612be9565b83600089898581811061066157610661612b3d565b90506020020160208101906106769190612b6c565b6001600160a01b03168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790556001016105b4565b507f2c54db8b386392c78501cad30dd4571a5a59d23826fc1053f2f620621909c3da868686866040516106fa9493929190612c06565b60405180910390a1505050505050565b610712611059565b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b726001600160a01b038416610773576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001810180546001600160a01b038616610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff8216811790925560ff918216911617156107ee576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8160005b818110156108dd57600085858381811061080e5761080e612b3d565b90506020020160208101906108239190612b6c565b6001600160a01b031603610863576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600183600087878581811061087a5761087a612b3d565b905060200201602081019061088f9190612b6c565b6001600160a01b03168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790556001016107f2565b50600182810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517fe51c1d2eff84ab6f9ee1bd80996062dc0cb46f36d7becb600280a7083294908890600090a15050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016109b7576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006109c83447612b2a565b90508480610100015115610a08576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610a46576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86610a5c8160a001516001600160a01b03161590565b15610a93576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610ad1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610b0e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b72806000610b3f60208b018b612b6c565b6001600160a01b0316815260208101919091526040016000205460ff16610b92576040517f466d7fef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808901516001600160a01b031615610bb757610bb789608001518a60c001516110c1565b610bcf89610bca368b90038b018b612c94565b610d4c565b504792506000915050828211610be6576000610bf0565b610bf08383612b2a565b90508015610c0457610c0460008583611030565b5050600090925550505050565b600082808203610c4d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610c5c600185612b2a565b818110610c6b57610c6b612b3d565b9050602002810190610c7d9190612cb0565b610c8e906080810190606001612b6c565b90506000610c9b8261121d565b90506001600160a01b038216610cb857610cb53482612b2a565b90505b6000610cc488886112bc565b9050610cd088886113bb565b610cdd8a8989898561141c565b600082610ce98561121d565b610cf39190612b2a565b905089811015610d3e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b81608001516001600160a01b031681600001516001600160a01b031603610e1057608082015160c083015160a08401516040517f628d6cba00000000000000000000000000000000000000000000000000000000815260048101929092526001600160a01b0390811660248301529091169063628d6cba906044016020604051808303816000875af1158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a9190612cee565b50610ff5565b60808201517f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b72906001600160a01b0316610ee657815160c0840151600183015460a086015160e08701516040517fa5e565710000000000000000000000000000000000000000000000000000000081526001600160a01b03610100909404841660048201529183166024830152604482015292169163a5e5657191906064016000604051808303818588803b158015610ec857600080fd5b505af1158015610edc573d6000803e3d6000fd5b5050505050610ff3565b610efd836080015183600001518560c0015161179a565b815160808401516001600160a01b0390811660009081526002840160205260409020549181169163edbdf5e29116610f39578460800151610f5c565b60808501516001600160a01b039081166000908152600285016020526040902054165b60a086015160c087015160e0808901516040519186901b7fffffffff000000000000000000000000000000000000000000000000000000001682526001600160a01b03948516600483015293909216602483015260448201526064810191909152608401600060405180830381600087803b158015610fda57600080fd5b505af1158015610fee573d6000803e3d6000fd5b505050505b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516110249190612d5b565b60405180910390a15050565b6001600160a01b0383161561104f5761104a8383836118be565b505050565b61104a82826119d3565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146110bf576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6001600160a01b03821661110d5780341015611109576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003611147576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa1580156111a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111cb9190612e29565b905081811015611211576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610d35565b61104a83333085611ae3565b60006001600160a01b038216156112b4576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa15801561128b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112af9190612e29565b6112b6565b475b92915050565b60608160008167ffffffffffffffff8111156112da576112da612611565b604051908082528060200260200182016040528015611303578160200160208202803683370190505b5090506000805b838110156113b05786868281811061132457611324612b3d565b90506020028101906113369190612cb0565b611347906080810190606001612b6c565b91506113528261121d565b83828151811061136457611364612b3d565b60209081029190910101526001600160a01b0382166113a8573483828151811061139057611390612b3d565b602002602001018181516113a49190612b2a565b9052505b60010161130a565b509095945050505050565b60005b8181101561104a5760008383838181106113da576113da612b3d565b90506020028101906113ec9190612cb0565b6113f590612e42565b90508060c001511561141357611413816040015182608001516110c1565b506001016113be565b8383838382600181146116b55760008585611438600185612b2a565b81811061144757611447612b3d565b90506020028101906114599190612cb0565b61146a906080810190606001612b6c565b9050600089815b818110156115fb57368d8d8381811061148c5761148c612b3d565b905060200281019061149e9190612cb0565b90506114c06114b36060830160408401612b6c565b6001600160a01b03161590565b8061151657506115166114d96040830160208401612b6c565b6001600160a01b031660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561152d575061152d6114d96020830183612b6c565b80156115b257506115b261154460a0830183612ee7565b61155391600491600091612f4c565b61155c91612f76565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6115e8576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115f28f82611cc9565b50600101611471565b505060005b61160b600185612b2a565b8110156116ad57600088888381811061162657611626612b3d565b90506020028101906116389190612cb0565b611649906080810190606001612b6c565b9050836001600160a01b0316816001600160a01b0316146116a45785828151811061167657611676612b3d565b60200260200101516116878261121d565b6116919190612b2a565b925082156116a4576116a4818885611030565b50600101611600565b50505061178e565b8760005b8181101561178b57368b8b838181106116d4576116d4612b3d565b90506020028101906116e69190612cb0565b90506116fb6114b36060830160408401612b6c565b8061171457506117146114d96040830160208401612b6c565b801561172b575061172b6114d96020830183612b6c565b8015611742575061174261154460a0830183612ee7565b611778576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117828d82611cc9565b506001016116b9565b50505b50505050505050505050565b6001600160a01b0383166117ad57505050565b6001600160a01b0382166117ed576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611856573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061187a9190612e29565b9050818110156118b8576118b884846118b3847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612b2a565b611fc5565b50505050565b6001600160a01b0383166118fe576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000906001600160a01b038516906370a0823190602401602060405180830381865afa15801561195e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119829190612e29565b9050808211156119c8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610d35565b6118b8848484612109565b6001600160a01b038216611a13576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611a56576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610d35565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611aa3576040519150601f19603f3d011682016040523d82523d6000602084013e611aa8565b606091505b505090508061104a576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038416611b23576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038216611b63576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b03838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611bc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611beb9190612e29565b9050611bf982868686612152565b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152849183918516906370a0823190602401602060405180830381865afa158015611c5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c809190612e29565b611c8a9190612b2a565b14611cc1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611cdf611cd96020830183612b6c565b3b151590565b611d15576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611d55576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611d6a6114b36060850160408601612b6c565b611d75576000611d7b565b82608001355b90506000611d97611d926060860160408701612b6c565b61121d565b90506000611dae611d926080870160608801612b6c565b905082600003611de557611de5611dcb6060870160408801612b6c565b611ddb6040880160208901612b6c565b876080013561179a565b8460800135821015611e30576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610d35565b600080611e406020880188612b6c565b6001600160a01b031685611e5760a08a018a612ee7565b604051611e65929190612fbe565b60006040518083038185875af1925050503d8060008114611ea2576040519150601f19603f3d011682016040523d82523d6000602084013e611ea7565b606091505b509150915081611ef2576000611ebc826121a3565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d359190612fce565b6000611f07611d9260808a0160608b01612b6c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611f3860208b018b612b6c565b611f4860608c0160408d01612b6c565b611f5860808d0160608e01612b6c565b8c60800135898711611f6a5786611f74565b611f748a88612b2a565b604080519687526001600160a01b0395861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561202f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120539190612e29565b61205d9190612fe1565b6040516001600160a01b0385166024820152604481018290529091506118b89085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612221565b6040516001600160a01b03831660248201526044810182905261104a9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016120a5565b6040516001600160a01b03808516602483015283166044820152606481018290526118b89085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016120a5565b60606044825110156121e857505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061220460048085516121fc9190612b2a565b859190612320565b90508080602001905181019061221a9190612ff4565b9392505050565b6000612276826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661241c9092919063ffffffff16565b80519091501561104a57808060200190518101906122949190612cee565b61104a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610d35565b60608161232e81601f612fe1565b1015612366576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6123708284612fe1565b845110156123aa576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060821580156123c95760405191506000825260208201604052612413565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156124025780518352602092830192016123ea565b5050858452601f01601f1916604052505b50949350505050565b606061242b8484600085612433565b949350505050565b6060824710156124c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610d35565b600080866001600160a01b031685876040516124e1919061306b565b60006040518083038185875af1925050503d806000811461251e576040519150601f19603f3d011682016040523d82523d6000602084013e612523565b606091505b50915091506125348783838761253f565b979650505050505050565b606083156125c85782516000036125c1576001600160a01b0385163b6125c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610d35565b508161242b565b61242b83838151156125dd5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d359190612fce565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561266457612664612611565b60405290565b60405160e0810167ffffffffffffffff8111828210171561266457612664612611565b604051601f8201601f1916810167ffffffffffffffff811182821017156126b6576126b6612611565b604052919050565b600067ffffffffffffffff8211156126d8576126d8612611565b50601f01601f191660200190565b600082601f8301126126f757600080fd5b813561270a612705826126be565b61268d565b81815284602083860101111561271f57600080fd5b816020850160208301376000918101602001919091529392505050565b80356001600160a01b038116811461275357600080fd5b919050565b801515811461276657600080fd5b50565b803561275381612758565b6000610140828403121561278757600080fd5b61278f612640565b905081358152602082013567ffffffffffffffff808211156127b057600080fd5b6127bc858386016126e6565b602084015260408401359150808211156127d557600080fd5b506127e2848285016126e6565b6040830152506127f46060830161273c565b60608201526128056080830161273c565b608082015261281660a0830161273c565b60a082015260c082013560c082015260e082013560e082015261010061283d818401612769565b9082015261012061284f838201612769565b9082015292915050565b60008083601f84011261286b57600080fd5b50813567ffffffffffffffff81111561288357600080fd5b6020830191508360208260051b850101111561289e57600080fd5b9250929050565b6000602082840312156128b757600080fd5b6040516020810181811067ffffffffffffffff821117156128da576128da612611565b6040529050806128e98361273c565b905292915050565b6000806000806060858703121561290757600080fd5b843567ffffffffffffffff8082111561291f57600080fd5b61292b88838901612774565b9550602087013591508082111561294157600080fd5b5061294e87828801612859565b9094509250612962905086604087016128a5565b905092959194509250565b6000806020838503121561298057600080fd5b823567ffffffffffffffff8082111561299857600080fd5b818501915085601f8301126129ac57600080fd5b8135818111156129bb57600080fd5b8660208260061b85010111156129d057600080fd5b60209290920196919550909350505050565b600080600080604085870312156129f857600080fd5b843567ffffffffffffffff80821115612a1057600080fd5b612a1c88838901612859565b90965094506020870135915080821115612a3557600080fd5b50612a4287828801612859565b95989497509550505050565b600080600060408486031215612a6357600080fd5b612a6c8461273c565b9250602084013567ffffffffffffffff811115612a8857600080fd5b612a9486828701612859565b9497909650939450505050565b6000808284036040811215612ab557600080fd5b833567ffffffffffffffff811115612acc57600080fd5b612ad886828701612774565b9350506020601f1982011215612aed57600080fd5b506020830190509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156112b6576112b6612afb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215612b7e57600080fd5b61221a8261273c565b6020808252818101839052600090604080840186845b87811015612bdc576001600160a01b0380612bb78461273c565b16845280612bc687850161273c565b1684870152509183019190830190600101612b9d565b5090979650505050505050565b600060208284031215612bfb57600080fd5b813561221a81612758565b6040808252810184905260008560608301825b87811015612c47576001600160a01b03612c328461273c565b16825260209283019290910190600101612c19565b5083810360208581019190915285825291508590820160005b86811015612c87578235612c7381612758565b151582529183019190830190600101612c60565b5098975050505050505050565b600060208284031215612ca657600080fd5b61221a83836128a5565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612ce457600080fd5b9190910192915050565b600060208284031215612d0057600080fd5b815161221a81612758565b60005b83811015612d26578181015183820152602001612d0e565b50506000910152565b60008151808452612d47816020860160208601612d0b565b601f01601f19169290920160200192915050565b602081528151602082015260006020830151610140806040850152612d84610160850183612d2f565b91506040850151601f19858403016060860152612da18382612d2f565b9250506060850151612dbe60808601826001600160a01b03169052565b5060808501516001600160a01b03811660a08601525060a08501516001600160a01b03811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612e178187018315159052565b90950151151593019290925250919050565b600060208284031215612e3b57600080fd5b5051919050565b600060e08236031215612e5457600080fd5b612e5c61266a565b612e658361273c565b8152612e736020840161273c565b6020820152612e846040840161273c565b6040820152612e956060840161273c565b60608201526080830135608082015260a083013567ffffffffffffffff811115612ebe57600080fd5b612eca368286016126e6565b60a083015250612edc60c08401612769565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612f1c57600080fd5b83018035915067ffffffffffffffff821115612f3757600080fd5b60200191503681900382131561289e57600080fd5b60008085851115612f5c57600080fd5b83861115612f6957600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612fb65780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60208152600061221a6020830184612d2f565b808201808211156112b6576112b6612afb565b60006020828403121561300657600080fd5b815167ffffffffffffffff81111561301d57600080fd5b8201601f8101841361302e57600080fd5b805161303c612705826126be565b81815285602083850101111561305157600080fd5b613062826020830160208601612d0b565b95945050505050565b60008251612ce4818460208701612d0b56fea2646970667358221220dad6d979b3e7a7ff0ca2dcfb5f680071ccb4806c6d22d2370eba5e7f31671e1464736f6c63430008110033";

type MultichainFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultichainFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultichainFacet__factory extends ContractFactory {
  constructor(...args: MultichainFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MultichainFacet> {
    return super.deploy(overrides || {}) as Promise<MultichainFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MultichainFacet {
    return super.attach(address) as MultichainFacet;
  }
  override connect(signer: Signer): MultichainFacet__factory {
    return super.connect(signer) as MultichainFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultichainFacetInterface {
    return new utils.Interface(_abi) as MultichainFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultichainFacet {
    return new Contract(address, _abi, signerOrProvider) as MultichainFacet;
  }
}
