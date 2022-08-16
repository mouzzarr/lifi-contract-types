/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HopFacet, HopFacetInterface } from "../../../src/Facets/HopFacet";

const _abi = [
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
    inputs: [],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidBridgeConfigLength",
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
    name: "NativeAssetTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeValueWithERC",
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
    name: "ReentrancyError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string[]",
        name: "tokens",
        type: "string[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "bridge",
            type: "address",
          },
          {
            internalType: "address",
            name: "ammWrapper",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct IHopBridge.BridgeConfig[]",
        name: "bridgeConfigs",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "HopInitialized",
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
        internalType: "string",
        name: "bridge",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "bridgeData",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "integrator",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sendingAssetId",
        type: "address",
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
        name: "destinationChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "hasSourceSwap",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "hasDestinationCall",
        type: "bool",
      },
    ],
    name: "LiFiTransferStarted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_tokens",
        type: "string[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "bridge",
            type: "address",
          },
          {
            internalType: "address",
            name: "ammWrapper",
            type: "address",
          },
        ],
        internalType: "struct IHopBridge.BridgeConfig[]",
        name: "_bridgeConfigs",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
    ],
    name: "initHop",
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
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ILiFi.LiFiData",
        name: "_lifiData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "asset",
            type: "string",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bonderFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationAmountOutMin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationDeadline",
            type: "uint256",
          },
        ],
        internalType: "struct HopFacet.HopData",
        name: "_hopData",
        type: "tuple",
      },
    ],
    name: "startBridgeTokensViaHop",
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
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ILiFi.LiFiData",
        name: "_lifiData",
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
        ],
        internalType: "struct LibSwap.SwapData[]",
        name: "_swapData",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "string",
            name: "asset",
            type: "string",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bonderFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationAmountOutMin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationDeadline",
            type: "uint256",
          },
        ],
        internalType: "struct HopFacet.HopData",
        name: "_hopData",
        type: "tuple",
      },
    ],
    name: "swapAndStartBridgeTokensViaHop",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612b16806100206000396000f3fe6080604052600436106100345760003560e01c80632722a4a814610039578063327a564d1461004e578063d1026c9c14610061575b600080fd5b61004c6100473660046121d2565b610081565b005b61004c61005c366004612260565b610276565b34801561006d57600080fd5b5061004c61007c3660046122cc565b6103f5565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561012d610113608087016060880161236e565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561013957503415155b1561016f576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61018361017b8661238b565b8585336105a9565b6060830152610191826106ad565b84357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c46101c16020880188612437565b6101d160608a0160408b0161236e565b888860008181106101e4576101e461249c565b90506020028101906101f691906124cb565b61020790606081019060400161236e565b61021760a08c0160808d0161236e565b88602001518b8b600081811061022f5761022f61249c565b905060200281019061024191906124cb565b608001358a60400151600160006040516102649a99989796959493929190612534565b60405180910390a26000905550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155600061033e6103048480612437565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061099892505050565b51905061034f816060850135610a35565b61036061035b8461263d565b6106ad565b83357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c46103906020870187612437565b6103a06060890160408a0161236e565b856103b160a08b0160808c0161236e565b6103c160408b0160208c0161236e565b8a606001358b604001356000806040516103e49a99989796959493929190612534565b60405180910390a250600090555050565b6103fd610a5b565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b884838114610458576040517f10502ef900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156105585760008686838181106104775761047761249c565b905060600201602001602081019061048f919061236e565b73ffffffffffffffffffffffffffffffffffffffff16036104dc576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8585828181106104ee576104ee61249c565b9050606002018360000189898481811061050a5761050a61249c565b905060200281019061051c9190612437565b60405161052a929190612649565b9081526040519081900360200190206105438282612659565b5081905061055081612778565b91505061045b565b50600182018390556040517fd52c41b004e120dc91d2d2c9c6e5669bc5ef5478d3601e634bd338c160c8eccf906105989089908990899089908990612835565b60405180910390a150505050505050565b6000828082036105e5576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105f4600182612928565b8181106106035761060361249c565b905060200281019061061591906124cb565b61062690608081019060600161236e565b9050600061063382610b2b565b905061064188888888610be4565b600061064c83610b2b565b905081811161065b5780610665565b6106658282612928565b9150816000036106a1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50979650505050505050565b80516040517f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b89160009183916106e29161296b565b908152604051908190036020019020805460018481015492935073ffffffffffffffffffffffffffffffffffffffff909116916000910361073e5750600182015473ffffffffffffffffffffffffffffffffffffffff1661075b565b50600282015473ffffffffffffffffffffffffffffffffffffffff165b846040015184600101540361079c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107ab82828760600151610ff5565b600073ffffffffffffffffffffffffffffffffffffffff8316156107d05760006107d6565b85606001515b905084600101546001036108b2576040808701516020880151606089015160e08a01516101008b015194517fdeace8f5000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff9283166024850152604484019190915260648301526084820192909252600060a4820181905260c48201529083169063deace8f590839060e4016000604051808303818588803b15801561089457600080fd5b505af11580156108a8573d6000803e3d6000fd5b5050505050610990565b6040808701516020880151606089015160808a015160a08b015160c08c015160e08d01516101008e015197517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019790975273ffffffffffffffffffffffffffffffffffffffff958616602488015260448701949094526064860192909252608485015260a484015260c483015260e48201929092529083169063eea0d7b2908390610104016000604051808303818588803b15801561097657600080fd5b505af115801561098a573d6000803e3d6000fd5b50505050505b505050505050565b604080516060810182526000808252602082018190528183015290517f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b89081906109e390859061296b565b908152604080519182900360209081018320606084018352805473ffffffffffffffffffffffffffffffffffffffff908116855260018201548116928501929092526002015416908201529392505050565b610a57828273ffffffffffffffffffffffffffffffffffffffff821615611137565b5050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610b29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201527f657200000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff821615610bdc576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610bb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd7919061297d565b610bde565b475b92915050565b8282828160018114610e9e576000610bfc8585611251565b905060008585610c0d600186612928565b818110610c1c57610c1c61249c565b9050602002810190610c2e91906124cb565b610c3f90608081019060600161236e565b905060008060005b8a811015610d8f57368c8c83818110610c6257610c6261249c565b9050602002810190610c7491906124cb565b9050600080610c89604084016020850161236e565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610cf55750600080610cca602084018461236e565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610d3a575060016000610d0d60a0840184612437565b610d1c91600891600091612996565b610d25916129c0565b815260208101919091526040016000205460ff165b610d70576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d51610d7c908261131b565b5080610d8781612778565b915050610c47565b5060005b610d9e600187612928565b811015610e94576000898983818110610db957610db961249c565b9050602002810190610dcb91906124cb565b610ddc90608081019060600161236e565b90508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e175750610e82565b610e2081610b2b565b9250858281518110610e3457610e3461249c565b60200260200101518311610e485782610e6d565b858281518110610e5a57610e5a61249c565b602002602001015183610e6d9190612928565b93508315610e8057610e808189866115ef565b505b80610e8c81612778565b915050610d93565b5050505050610feb565b60005b86811015610fe95736888883818110610ebc57610ebc61249c565b9050602002810190610ece91906124cb565b9050600080610ee3604084016020850161236e565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610f4f5750600080610f24602084018461236e565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610f94575060016000610f6760a0840184612437565b610f7691600891600091612996565b610f7f916129c0565b815260208101919091526040016000205460ff165b610fca576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8951610fd6908261131b565b5080610fe181612778565b915050610ea1565b505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661101557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611062576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156110d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110fc919061297d565b9050818110156111315761113184847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611620565b50505050565b81600003611171576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156111b5578134146111b0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b34156111ec576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006111f784610b2b565b905061120584333086611802565b828161121086610b2b565b61121a9190612928565b14611131576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608160008167ffffffffffffffff81111561126f5761126f611fcf565b604051908082528060200260200182016040528015611298578160200160208202803683370190505b50905060005b82811015611312576112e38686838181106112bb576112bb61249c565b90506020028101906112cd91906124cb565b6112de90608081019060600161236e565b610b2b565b8282815181106112f5576112f561249c565b60209081029190910101528061130a81612778565b91505061129e565b50949350505050565b61133161132b602083018361236e565b3b151590565b611367576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036113a7576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806113ba606085016040860161236e565b905060006113ce608086016060870161236e565b905060006113db83610b2b565b905060006113e883610b2b565b905060008683106113fa576000611404565b6114048388612928565b905073ffffffffffffffffffffffffffffffffffffffff8516156114535761143c8561143660408b0160208c0161236e565b89610ff5565b801561144e5761144e85333084611802565b611457565b8695505b60008061146760208b018b61236e565b73ffffffffffffffffffffffffffffffffffffffff168861148b60a08d018d612437565b604051611499929190612649565b60006040518083038185875af1925050503d80600081146114d6576040519150601f19603f3d011682016040523d82523d6000602084013e6114db565b606091505b5091509150816115265760006114f0826118a8565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2091906129fc565b600061153187610b2b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c61156260208e018e61236e565b8d6040016020810190611575919061236e565b8a8e8a8711611584578661158e565b61158e8b88612928565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615611616576111b0838383611926565b6111b0828261197e565b8015806116c057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561169a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116be919061297d565b155b61174c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610b20565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526111b09084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a65565b73ffffffffffffffffffffffffffffffffffffffff841661184f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661189c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61113184848484611b71565b60606044825110156118ed57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061190960048085516119019190612928565b859190611bcf565b90508080602001905181019061191f9190612a2f565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8316611973576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111b0838383611d2a565b73ffffffffffffffffffffffffffffffffffffffff82166119cb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611a25576040519150601f19603f3d011682016040523d82523d6000602084013e611a2a565b606091505b50509050806111b0576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611ac7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d809092919063ffffffff16565b8051909150156111b05780806020019051810190611ae59190612aa6565b6111b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b20565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111319085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161179e565b606081611bdd81601f612ac8565b1015611c45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152606401610b20565b611c4f8284612ac8565b84511015611cb9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152606401610b20565b606082158015611cd85760405191506000825260208201604052611312565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d11578051835260209283019201611cf9565b5050858452601f01601f19166040525050949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526111b09084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161179e565b6060611d8f8484600085611d97565b949350505050565b606082471015611e29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b20565b843b611e91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b20565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611eba919061296b565b60006040518083038185875af1925050503d8060008114611ef7576040519150601f19603f3d011682016040523d82523d6000602084013e611efc565b606091505b5091509150611f0c828286611f17565b979650505050505050565b60608315611f2657508161191f565b825115611f365782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2091906129fc565b60006101008284031215611f7d57600080fd5b50919050565b60008083601f840112611f9557600080fd5b50813567ffffffffffffffff811115611fad57600080fd5b6020830191508360208260051b8501011115611fc857600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610120810167ffffffffffffffff8111828210171561202257612022611fcf565b60405290565b604051610100810167ffffffffffffffff8111828210171561202257612022611fcf565b604051601f8201601f1916810167ffffffffffffffff8111828210171561207557612075611fcf565b604052919050565b600067ffffffffffffffff82111561209757612097611fcf565b50601f01601f191660200190565b600082601f8301126120b657600080fd5b81356120c96120c48261207d565b61204c565b8181528460208386010111156120de57600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461211d57600080fd5b50565b803561212b816120fb565b919050565b6000610120828403121561214357600080fd5b61214b611ffe565b9050813567ffffffffffffffff81111561216457600080fd5b612170848285016120a5565b82525061217f60208301612120565b602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525092915050565b600080600080606085870312156121e857600080fd5b843567ffffffffffffffff8082111561220057600080fd5b61220c88838901611f6a565b9550602087013591508082111561222257600080fd5b61222e88838901611f83565b9095509350604087013591508082111561224757600080fd5b5061225487828801612130565b91505092959194509250565b6000806040838503121561227357600080fd5b823567ffffffffffffffff8082111561228b57600080fd5b61229786838701611f6a565b935060208501359150808211156122ad57600080fd5b50830161012081860312156122c157600080fd5b809150509250929050565b6000806000806000606086880312156122e457600080fd5b853567ffffffffffffffff808211156122fc57600080fd5b61230889838a01611f83565b9097509550602088013591508082111561232157600080fd5b818801915088601f83011261233557600080fd5b81358181111561234457600080fd5b89602060608302850101111561235957600080fd5b96999598505060200195604001359392505050565b60006020828403121561238057600080fd5b813561191f816120fb565b6000610100823603121561239e57600080fd5b6123a6612028565b82358152602083013567ffffffffffffffff8111156123c457600080fd5b6123d0368286016120a5565b6020830152506123e260408401612120565b60408201526123f360608401612120565b606082015261240460808401612120565b608082015261241560a08401612120565b60a082015260c083013560c082015260e083013560e082015280915050919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261246c57600080fd5b83018035915067ffffffffffffffff82111561248757600080fd5b602001915036819003821315611fc857600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418336030181126124ff57600080fd5b9190910192915050565b818352818160208501375060006020828401015260006020601f19601f840116840101905092915050565b6000610160808352600381840152507f686f7000000000000000000000000000000000000000000000000000000000006101808301526101a0806020840152600081840152506101c08060408401526125908184018d8f612509565b91505073ffffffffffffffffffffffffffffffffffffffff8a1660608301526125d1608083018a73ffffffffffffffffffffffffffffffffffffffff169052565b73ffffffffffffffffffffffffffffffffffffffff881660a083015273ffffffffffffffffffffffffffffffffffffffff871660c08301528560e08301528461010083015261262561012083018515159052565b8215156101408301529b9a5050505050505050505050565b6000610bde3683612130565b8183823760009101908152919050565b8135612664816120fb565b81547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff82161782555060208201356126b1816120fb565b6001820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316179055506040820135612702816120fb565b6002820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316179055505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036127a9576127a9612749565b5060010190565b8183526000602080850194508260005b8581101561282a5781356127d3816120fb565b73ffffffffffffffffffffffffffffffffffffffff908116885282840135906127fb826120fb565b9081168885015260409083820135612812816120fb565b169088015260609687019691909101906001016127c0565b509495945050505050565b6060808252810185905260006080600587901b8301810190830188835b898110156128ff577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8086850301835281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18c36030181126128b357600080fd5b8b018035602067ffffffffffffffff8211156128ce57600080fd5b8136038e13156128dd57600080fd5b6128ea8783838601612509565b96509485019493909301925050600101612852565b50505082810360208401526129158186886127b0565b9150508260408301529695505050505050565b60008282101561293a5761293a612749565b500390565b60005b8381101561295a578181015183820152602001612942565b838111156111315750506000910152565b600082516124ff81846020870161293f565b60006020828403121561298f57600080fd5b5051919050565b600080858511156129a657600080fd5b838611156129b357600080fd5b5050820193919092039150565b80356020831015610bde577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b6020815260008251806020840152612a1b81604085016020870161293f565b601f01601f19169190910160400192915050565b600060208284031215612a4157600080fd5b815167ffffffffffffffff811115612a5857600080fd5b8201601f81018413612a6957600080fd5b8051612a776120c48261207d565b818152856020838501011115612a8c57600080fd5b612a9d82602083016020860161293f565b95945050505050565b600060208284031215612ab857600080fd5b8151801515811461191f57600080fd5b60008219821115612adb57612adb612749565b50019056fea264697066735822122068de08ae5272cba128897612bc60522cc265e60a41b8e00ad8c75497323efc2264736f6c634300080d0033";

type HopFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HopFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HopFacet__factory extends ContractFactory {
  constructor(...args: HopFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HopFacet> {
    return super.deploy(overrides || {}) as Promise<HopFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HopFacet {
    return super.attach(address) as HopFacet;
  }
  override connect(signer: Signer): HopFacet__factory {
    return super.connect(signer) as HopFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HopFacetInterface {
    return new utils.Interface(_abi) as HopFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HopFacet {
    return new Contract(address, _abi, signerOrProvider) as HopFacet;
  }
}
