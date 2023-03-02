/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CelerIMFacet,
  CelerIMFacetInterface,
} from "../../CelerIMFacet.sol/CelerIMFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IMessageBus",
        name: "_messageBus",
        type: "address",
      },
      {
        internalType: "contract RelayerCelerIM",
        name: "_relayer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
            internalType: "uint32",
            name: "maxSlippage",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "callTo",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "messageBusFee",
            type: "uint256",
          },
          {
            internalType: "enum MsgDataTypes.BridgeSendType",
            name: "bridgeType",
            type: "uint8",
          },
        ],
        internalType: "struct CelerIMFacet.CelerIMData",
        name: "_celerIMData",
        type: "tuple",
      },
    ],
    name: "startBridgeTokensViaCelerIM",
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
            internalType: "uint32",
            name: "maxSlippage",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "callTo",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "messageBusFee",
            type: "uint256",
          },
          {
            internalType: "enum MsgDataTypes.BridgeSendType",
            name: "bridgeType",
            type: "uint8",
          },
        ],
        internalType: "struct CelerIMFacet.CelerIMData",
        name: "_celerIMData",
        type: "tuple",
      },
    ],
    name: "swapAndStartBridgeTokensViaCelerIM",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620030ac380380620030ac833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612fb4620000f8600039600081816103ee0152818161046e015281816104d90152818161080a01528181610889015281816108f401528181610b630152610c10015260005050612fb46000f3fe6080604052600436106100295760003560e01c806305095ded1461002e578063b06c52da14610043575b600080fd5b61004161003c366004612750565b610056565b005b6100416100513660046128a2565b6105e4565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612990565b90508480610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101458160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61020987610204886129a3565b6109f9565b608087015173ffffffffffffffffffffffffffffffffffffffff1615610593576040517f6366555344430000000000000000000000000000000000000000000000000000602082015260009060260160405160208183030381529060405280519060200120886080015173ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156102bd573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261030391908101906129d3565b6040516020016103139190612a4a565b60405160208183030381529060405280519060200120036103aa57876080015173ffffffffffffffffffffffffffffffffffffffff166326afaadd6040518163ffffffff1660e01b81526004016020604051808303816000875af115801561037f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a39190612a66565b90506103b1565b5060808701515b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152600091908316906370a0823190602401602060405180830381865afa158015610441573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104659190612a83565b905061049782337f00000000000000000000000000000000000000000000000000000000000000008c60c00151610a45565b60c08901516040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301528391908516906370a0823190602401602060405180830381865afa15801561052b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054f9190612a83565b6105599190612990565b14610590576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b6105a5876105a0886129a3565b610b27565b5047905060008282116105b95760006105c3565b6105c38383612990565b905080156105d7576105d760008583610cf1565b5050600090925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161065f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006106703447612990565b9050868061010001516106af576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876106d28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610709576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610747576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610784576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61078e89876109f9565b6107a389600001518a60c001518a8a33610d27565b60c08a0152608089015173ffffffffffffffffffffffffffffffffffffffff16156109ae5760808901516040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152600091908316906370a0823190602401602060405180830381865afa15801561085d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108819190612a83565b90506108b2827f00000000000000000000000000000000000000000000000000000000000000008d60c00151610e6f565b60c08b01516040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301528391908516906370a0823190602401602060405180830381865afa158015610946573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096a9190612a83565b6109749190612990565b146109ab576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b6109b88987610b27565b5047905060008282116109cc5760006109d6565b6109d68383612990565b905080156109ea576109ea60008583610cf1565b50506000909255505050505050565b610120820151606082015151151590151514610a41576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610b219085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610ec5565b50505050565b6000610b4b836080015173ffffffffffffffffffffffffffffffffffffffff161590565b610b56576000610b5c565b8260c001515b90506000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166375b4c0058487876040518463ffffffff1660e01b8152600401610bbd929190612bdb565b604080518083038185885af1158015610bda573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610bff9190612ca1565b9150915084610120015115610cb3577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c2aad68f85608001518760a001518860e0015185878a606001516040518763ffffffff1660e01b8152600401610c80959493929190612cc6565b6000604051808303818588803b158015610c9957600080fd5b505af1158015610cad573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610ce29190612d15565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610d1d57610d18838383610fd1565b505050565b610d188282611100565b600082808203610d63576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610d72600185612990565b818110610d8157610d81612d28565b9050602002810190610d939190612d57565b610da4906080810190606001612d8b565b90506000610db18261122a565b905073ffffffffffffffffffffffffffffffffffffffff8216610ddb57610dd83482612990565b90505b6000610de788886112e3565b9050610df388886113ef565b610e008a89898985611450565b600082610e0c8561122a565b610e169190612990565b905089811015610e61576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610d189084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401610a9f565b6000610f27826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166118029092919063ffffffff16565b805190915015610d185780806020019051810190610f459190612da8565b610d18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610e58565b73ffffffffffffffffffffffffffffffffffffffff831661101e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561108b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110af9190612a83565b9050808211156110f5576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610e58565b610b21848484610e6f565b73ffffffffffffffffffffffffffffffffffffffff821661114d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611190576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610e58565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146111ea576040519150601f19603f3d011682016040523d82523d6000602084013e6111ef565b606091505b5050905080610d18576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156112db576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156112b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d69190612a83565b6112dd565b475b92915050565b60608160008167ffffffffffffffff81111561130157611301612493565b60405190808252806020026020018201604052801561132a578160200160208202803683370190505b5090506000805b838110156113e45786868281811061134b5761134b612d28565b905060200281019061135d9190612d57565b61136e906080810190606001612d8b565b91506113798261122a565b83828151811061138b5761138b612d28565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166113dc57348382815181106113c4576113c4612d28565b602002602001018181516113d89190612990565b9052505b600101611331565b509095945050505050565b60005b81811015610d1857600083838381811061140e5761140e612d28565b90506020028101906114209190612d57565b61142990612dc5565b90508060c00151156114475761144781604001518260800151611819565b506001016113f2565b83838383826001811461171d576000858561146c600185612990565b81811061147b5761147b612d28565b905060200281019061148d9190612d57565b61149e906080810190606001612d8b565b9050600089815b8181101561164957368d8d838181106114c0576114c0612d28565b90506020028101906114d29190612d57565b90506115016114e76060830160408401612d8b565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611564575061156461151a6040830160208401612d8b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561157b575061157b61151a6020830183612d8b565b8015611600575061160061159260a0830183612e6a565b6115a191600491600091612ed6565b6115aa91612f00565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611636576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116408f8261198b565b506001016114a5565b505060005b611659600185612990565b81101561171557600088888381811061167457611674612d28565b90506020028101906116869190612d57565b611697906080810190606001612d8b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461170c578582815181106116de576116de612d28565b60200260200101516116ef8261122a565b6116f99190612990565b9250821561170c5761170c818885610cf1565b5060010161164e565b5050506117f6565b8760005b818110156117f357368b8b8381811061173c5761173c612d28565b905060200281019061174e9190612d57565b90506117636114e76060830160408401612d8b565b8061177c575061177c61151a6040830160208401612d8b565b8015611793575061179361151a6020830183612d8b565b80156117aa57506117aa61159260a0830183612e6a565b6117e0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117ea8d8261198b565b50600101611721565b50505b50505050505050505050565b60606118118484600085611ca1565b949350505050565b73ffffffffffffffffffffffffffffffffffffffff821661186e5780341015610a41576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806000036118a8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611915573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119399190612a83565b90508181101561197f576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610e58565b610d1883333085611dba565b6119a161199b6020830183612d8b565b3b151590565b6119d7576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611a17576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611a2c6114e76060850160408601612d8b565b611a37576000611a3d565b82608001355b90506000611a59611a546060860160408701612d8b565b61122a565b90506000611a70611a546080870160608801612d8b565b905082600003611aa757611aa7611a8d6060870160408801612d8b565b611a9d6040880160208901612d8b565b8760800135611fd4565b8460800135821015611af2576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610e58565b600080611b026020880188612d8b565b73ffffffffffffffffffffffffffffffffffffffff1685611b2660a08a018a612e6a565b604051611b34929190612f48565b60006040518083038185875af1925050503d8060008114611b71576040519150601f19603f3d011682016040523d82523d6000602084013e611b76565b606091505b509150915081611bc1576000611b8b82612119565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e589190612f58565b6000611bd6611a5460808a0160608b01612d8b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611c0760208b018b612d8b565b611c1760608c0160408d01612d8b565b611c2760808d0160608e01612d8b565b8c60800135898711611c395786611c43565b611c438a88612990565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b606082471015611d33576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610e58565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d5c9190612a4a565b60006040518083038185875af1925050503d8060008114611d99576040519150601f19603f3d011682016040523d82523d6000602084013e611d9e565b606091505b5091509150611daf87838387612197565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416611e07576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611e54576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611ec5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ee99190612a83565b9050611ef782868686610a45565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611f67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f8b9190612a83565b611f959190612990565b14611fcc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611ff457505050565b73ffffffffffffffffffffffffffffffffffffffff8216612041576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156120b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120db9190612a83565b905081811015610b2157610b218484612114847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612990565b612237565b606060448251101561215e57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061217a60048085516121729190612990565b859190612335565b90508080602001905181019061219091906129d3565b9392505050565b6060831561222d5782516000036122265773ffffffffffffffffffffffffffffffffffffffff85163b612226576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610e58565b5081611811565b611811838361244f565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156122ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122d29190612a83565b6122dc9190612f6b565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610b219085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610a9f565b60608161234381601f612f6b565b101561237b576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6123858284612f6b565b845110156123bf576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060821580156123de5760405191506000825260208201604052612446565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156124175780518352602092830192016123ff565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b81511561245f5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e589190612f58565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156124e6576124e6612493565b60405290565b60405160c0810167ffffffffffffffff811182821017156124e6576124e6612493565b60405160e0810167ffffffffffffffff811182821017156124e6576124e6612493565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561257957612579612493565b604052919050565b600067ffffffffffffffff82111561259b5761259b612493565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126125d857600080fd5b81356125eb6125e682612581565b612532565b81815284602083860101111561260057600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461263f57600080fd5b50565b803561264d8161261d565b919050565b801515811461263f57600080fd5b803561264d81612652565b6000610140828403121561267e57600080fd5b6126866124c2565b905081358152602082013567ffffffffffffffff808211156126a757600080fd5b6126b3858386016125c7565b602084015260408401359150808211156126cc57600080fd5b506126d9848285016125c7565b6040830152506126eb60608301612642565b60608201526126fc60808301612642565b608082015261270d60a08301612642565b60a082015260c082013560c082015260e082013560e0820152610100612734818401612660565b90820152610120612746838201612660565b9082015292915050565b6000806040838503121561276357600080fd5b823567ffffffffffffffff8082111561277b57600080fd5b6127878683870161266b565b9350602085013591508082111561279d57600080fd5b50830160c081860312156127b057600080fd5b809150509250929050565b803563ffffffff8116811461264d57600080fd5b803567ffffffffffffffff8116811461264d57600080fd5b80356007811061264d57600080fd5b600060c0828403121561280857600080fd5b6128106124ec565b905061281b826127bb565b8152612829602083016127cf565b6020820152604082013567ffffffffffffffff8082111561284957600080fd5b612855858386016125c7565b6040840152606084013591508082111561286e57600080fd5b5061287b848285016125c7565b6060830152506080820135608082015261289760a083016127e7565b60a082015292915050565b600080600080606085870312156128b857600080fd5b843567ffffffffffffffff808211156128d057600080fd5b6128dc8883890161266b565b955060208701359150808211156128f257600080fd5b818701915087601f83011261290657600080fd5b81358181111561291557600080fd5b8860208260051b850101111561292a57600080fd5b60208301955080945050604087013591508082111561294857600080fd5b50612955878288016127f6565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156112dd576112dd612961565b60006112dd36836127f6565b60005b838110156129ca5781810151838201526020016129b2565b50506000910152565b6000602082840312156129e557600080fd5b815167ffffffffffffffff8111156129fc57600080fd5b8201601f81018413612a0d57600080fd5b8051612a1b6125e682612581565b818152856020838501011115612a3057600080fd5b612a418260208301602086016129af565b95945050505050565b60008251612a5c8184602087016129af565b9190910192915050565b600060208284031215612a7857600080fd5b81516121908161261d565b600060208284031215612a9557600080fd5b5051919050565b60008151808452612ab48160208601602086016129af565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000610140825184526020830151816020860152612b0682860182612a9c565b91505060408301518482036040860152612b208282612a9c565b9150506060830151612b4a606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080830151612b72608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a0830151612b9a60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e085015261010080840151612bc38287018215159052565b50506101209283015115159390920192909252919050565b604081526000612bee6040830185612ae6565b828103602084015263ffffffff845116815267ffffffffffffffff6020850151166020820152604084015160c06040830152612c2d60c0830182612a9c565b905060608501518282036060840152612c468282612a9c565b9150506080850151608083015260a085015160078110612c8f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60a09290920191909152949350505050565b60008060408385031215612cb457600080fd5b8251915060208301516127b08161261d565b600073ffffffffffffffffffffffffffffffffffffffff808816835267ffffffffffffffff8716602084015280861660408401525083606083015260a06080830152611daf60a0830184612a9c565b6020815260006121906020830184612ae6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612a5c57600080fd5b600060208284031215612d9d57600080fd5b81356121908161261d565b600060208284031215612dba57600080fd5b815161219081612652565b600060e08236031215612dd757600080fd5b612ddf61250f565b612de883612642565b8152612df660208401612642565b6020820152612e0760408401612642565b6040820152612e1860608401612642565b60608201526080830135608082015260a083013567ffffffffffffffff811115612e4157600080fd5b612e4d368286016125c7565b60a083015250612e5f60c08401612660565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612e9f57600080fd5b83018035915067ffffffffffffffff821115612eba57600080fd5b602001915036819003821315612ecf57600080fd5b9250929050565b60008085851115612ee657600080fd5b83861115612ef357600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612f405780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6020815260006121906020830184612a9c565b808201808211156112dd576112dd61296156fea2646970667358221220179aedba05934be74980aa792e07284dbc2ba59a28e82a8a9d28928c49fe57a464736f6c63430008110033";

type CelerIMFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CelerIMFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CelerIMFacet__factory extends ContractFactory {
  constructor(...args: CelerIMFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _messageBus: PromiseOrValue<string>,
    _relayer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CelerIMFacet> {
    return super.deploy(
      _messageBus,
      _relayer,
      overrides || {}
    ) as Promise<CelerIMFacet>;
  }
  override getDeployTransaction(
    _messageBus: PromiseOrValue<string>,
    _relayer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_messageBus, _relayer, overrides || {});
  }
  override attach(address: string): CelerIMFacet {
    return super.attach(address) as CelerIMFacet;
  }
  override connect(signer: Signer): CelerIMFacet__factory {
    return super.connect(signer) as CelerIMFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CelerIMFacetInterface {
    return new utils.Interface(_abi) as CelerIMFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CelerIMFacet {
    return new Contract(address, _abi, signerOrProvider) as CelerIMFacet;
  }
}
