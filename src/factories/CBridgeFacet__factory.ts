/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CBridgeFacet, CBridgeFacetInterface } from "../CBridgeFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICBridge",
        name: "_cBridge",
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
        ],
        internalType: "struct CBridgeFacet.CBridgeData",
        name: "_cBridgeData",
        type: "tuple",
      },
    ],
    name: "startBridgeTokensViaCBridge",
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
        ],
        internalType: "struct CBridgeFacet.CBridgeData",
        name: "_cBridgeData",
        type: "tuple",
      },
    ],
    name: "swapAndStartBridgeTokensViaCBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620029fb380380620029fb833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612959620000a26000396000818161071a01528181610787015261084201526129596000f3fe6080604052600436106100295760003560e01c8063482c6a851461002e578063ae0b91e514610043575b600080fd5b61004161003c366004612320565b610056565b005b6100416100513660046123cc565b61029b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612473565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104e5565b60c08b01526102588a8861062d565b504791506000905082821161026e576000610278565b6102788383612473565b9050801561028c5761028c600085836108dc565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610316576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103273447612473565b90508480610100015115610367576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103a5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103c88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103ff576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361043d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361047a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048c88608001518960c00151610912565b6104a48861049f368a90038a018a612486565b61062d565b50479150600090508282116104ba5760006104c4565b6104c48383612473565b905080156104d8576104d8600085836108dc565b5050600090925550505050565b600082808203610521576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610530600185612473565b81811061053f5761053f6124a2565b905060200281019061055191906124d1565b61056290608081019060600161250f565b9050600061056f82610a88565b905073ffffffffffffffffffffffffffffffffffffffff8216610599576105963482612473565b90505b60006105a58888610b41565b90506105b18888610c4d565b6105be8a89898985610cae565b6000826105ca85610a88565b6105d49190612473565b90508981101561061f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b8160e001514667ffffffffffffffff1603610674576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff1661077d5760c082015160a083015160e0840151602084015184516040517f3f2e5fc300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff94851660048201526024810186905267ffffffffffffffff938416604482015292909116606483015263ffffffff1660848201527f000000000000000000000000000000000000000000000000000000000000000090911691633f2e5fc39160a4016000604051808303818588803b15801561075f57600080fd5b505af1158015610773573d6000803e3d6000fd5b50505050506108a1565b6107b082608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151611060565b60a0820151608083015160c084015160e0850151602085015185516040517fa5977fbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff96871660048201529486166024860152604485019390935267ffffffffffffffff918216606485015216608483015263ffffffff1660a48201527f00000000000000000000000000000000000000000000000000000000000000009091169063a5977fbb9060c401600060405180830381600087803b15801561088857600080fd5b505af115801561089c573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108d09190612598565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610908576109038383836111ab565b505050565b61090382826112da565b73ffffffffffffffffffffffffffffffffffffffff821661096b5780341015610967576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036109a5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3691906126ab565b905081811015610a7c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610616565b61090383333085611404565b600073ffffffffffffffffffffffffffffffffffffffff821615610b39576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3491906126ab565b610b3b565b475b92915050565b60608160008167ffffffffffffffff811115610b5f57610b5f612017565b604051908082528060200260200182016040528015610b88578160200160208202803683370190505b5090506000805b83811015610c4257868682818110610ba957610ba96124a2565b9050602002810190610bbb91906124d1565b610bcc90608081019060600161250f565b9150610bd782610a88565b838281518110610be957610be96124a2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c3a5734838281518110610c2257610c226124a2565b60200260200101818151610c369190612473565b9052505b600101610b8f565b509095945050505050565b60005b81811015610903576000838383818110610c6c57610c6c6124a2565b9050602002810190610c7e91906124d1565b610c87906126c4565b90508060c0015115610ca557610ca581604001518260800151610912565b50600101610c50565b838383838260018114610f7b5760008585610cca600185612473565b818110610cd957610cd96124a2565b9050602002810190610ceb91906124d1565b610cfc90608081019060600161250f565b9050600089815b81811015610ea757368d8d83818110610d1e57610d1e6124a2565b9050602002810190610d3091906124d1565b9050610d5f610d45606083016040840161250f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610dc25750610dc2610d78604083016020840161250f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610dd95750610dd9610d78602083018361250f565b8015610e5e5750610e5e610df060a0830183612769565b610dff916004916000916127d5565b610e08916127ff565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e94576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e9e8f8261161e565b50600101610d03565b505060005b610eb7600185612473565b811015610f73576000888883818110610ed257610ed26124a2565b9050602002810190610ee491906124d1565b610ef590608081019060600161250f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f6a57858281518110610f3c57610f3c6124a2565b6020026020010151610f4d82610a88565b610f579190612473565b92508215610f6a57610f6a8188856108dc565b50600101610eac565b505050611054565b8760005b8181101561105157368b8b83818110610f9a57610f9a6124a2565b9050602002810190610fac91906124d1565b9050610fc1610d45606083016040840161250f565b80610fda5750610fda610d78604083016020840161250f565b8015610ff15750610ff1610d78602083018361250f565b80156110085750611008610df060a0830183612769565b61103e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110488d8261161e565b50600101610f7f565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661108057505050565b73ffffffffffffffffffffffffffffffffffffffff82166110cd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611143573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116791906126ab565b9050818110156111a5576111a584846111a0847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612473565b611934565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166111f8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611265573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128991906126ab565b9050808211156112cf576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610616565b6111a5848484611ab0565b73ffffffffffffffffffffffffffffffffffffffff8216611327576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561136a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610616565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146113c4576040519150601f19603f3d011682016040523d82523d6000602084013e6113c9565b606091505b5050905080610903576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611451576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661149e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561150f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153391906126ab565b905061154182868686611b06565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156115b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d591906126ab565b6115df9190612473565b14611616576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61163461162e602083018361250f565b3b151590565b61166a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036116aa576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006116bf610d45606085016040860161250f565b6116ca5760006116d0565b82608001355b905060006116ec6116e7606086016040870161250f565b610a88565b905060006117036116e7608087016060880161250f565b90508260000361173a5761173a611720606087016040880161250f565b611730604088016020890161250f565b8760800135611060565b8460800135821015611785576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610616565b600080611795602088018861250f565b73ffffffffffffffffffffffffffffffffffffffff16856117b960a08a018a612769565b6040516117c7929190612847565b60006040518083038185875af1925050503d8060008114611804576040519150601f19603f3d011682016040523d82523d6000602084013e611809565b606091505b50915091508161185457600061181e82611b64565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106169190612857565b60006118696116e760808a0160608b0161250f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961189a60208b018b61250f565b6118aa60608c0160408d0161250f565b6118ba60808d0160608e0161250f565b8c608001358987116118cc57866118d6565b6118d68a88612473565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156119ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119cf91906126ab565b6119d9919061286a565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506111a59085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611be2565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109039084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a2e565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111a59085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a2e565b6060604482511015611ba957505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611bc56004808551611bbd9190612473565b859190611cee565b905080806020019051810190611bdb919061287d565b9392505050565b6000611c44826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e089092919063ffffffff16565b8051909150156109035780806020019051810190611c6291906128f4565b610903576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610616565b606081611cfc81601f61286a565b1015611d34576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d3e828461286a565b84511015611d78576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d975760405191506000825260208201604052611dff565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611dd0578051835260209283019201611db8565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611e178484600085611e1f565b949350505050565b606082471015611eb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610616565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611eda9190612911565b60006040518083038185875af1925050503d8060008114611f17576040519150601f19603f3d011682016040523d82523d6000602084013e611f1c565b606091505b5091509150611f2d87838387611f38565b979650505050505050565b60608315611fce578251600003611fc75773ffffffffffffffffffffffffffffffffffffffff85163b611fc7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610616565b5081611e17565b611e178383815115611fe35781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106169190612857565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561206a5761206a612017565b60405290565b60405160e0810167ffffffffffffffff8111828210171561206a5761206a612017565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120da576120da612017565b604052919050565b600067ffffffffffffffff8211156120fc576120fc612017565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261213957600080fd5b813561214c612147826120e2565b612093565b81815284602083860101111561216157600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146121a257600080fd5b919050565b80151581146121b557600080fd5b50565b80356121a2816121a7565b600061014082840312156121d657600080fd5b6121de612046565b905081358152602082013567ffffffffffffffff808211156121ff57600080fd5b61220b85838601612128565b6020840152604084013591508082111561222457600080fd5b5061223184828501612128565b6040830152506122436060830161217e565b60608201526122546080830161217e565b608082015261226560a0830161217e565b60a082015260c082013560c082015260e082013560e082015261010061228c8184016121b8565b9082015261012061229e8382016121b8565b9082015292915050565b6000604082840312156122ba57600080fd5b6040516040810167ffffffffffffffff82821081831117156122de576122de612017565b816040528293508435915063ffffffff821682146122fb57600080fd5b908252602084013590808216821461231257600080fd5b506020919091015292915050565b6000806000806080858703121561233657600080fd5b843567ffffffffffffffff8082111561234e57600080fd5b61235a888389016121c3565b9550602087013591508082111561237057600080fd5b818701915087601f83011261238457600080fd5b81358181111561239357600080fd5b8860208260051b85010111156123a857600080fd5b6020830195508094505050506123c186604087016122a8565b905092959194509250565b60008082840360608112156123e057600080fd5b833567ffffffffffffffff8111156123f757600080fd5b612403868287016121c3565b93505060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201121561243657600080fd5b506020830190509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610b3b57610b3b612444565b60006040828403121561249857600080fd5b611bdb83836122a8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261250557600080fd5b9190910192915050565b60006020828403121561252157600080fd5b611bdb8261217e565b60005b8381101561254557818101518382015260200161252d565b50506000910152565b6000815180845261256681602086016020860161252a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526125c161016085018361254e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125fc838261254e565b9250506060850151612626608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126998187018315159052565b90950151151593019290925250919050565b6000602082840312156126bd57600080fd5b5051919050565b600060e082360312156126d657600080fd5b6126de612070565b6126e78361217e565b81526126f56020840161217e565b60208201526127066040840161217e565b60408201526127176060840161217e565b60608201526080830135608082015260a083013567ffffffffffffffff81111561274057600080fd5b61274c36828601612128565b60a08301525061275e60c084016121b8565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261279e57600080fd5b83018035915067ffffffffffffffff8211156127b957600080fd5b6020019150368190038213156127ce57600080fd5b9250929050565b600080858511156127e557600080fd5b838611156127f257600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561283f5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611bdb602083018461254e565b80820180821115610b3b57610b3b612444565b60006020828403121561288f57600080fd5b815167ffffffffffffffff8111156128a657600080fd5b8201601f810184136128b757600080fd5b80516128c5612147826120e2565b8181528560208385010111156128da57600080fd5b6128eb82602083016020860161252a565b95945050505050565b60006020828403121561290657600080fd5b8151611bdb816121a7565b6000825161250581846020870161252a56fea2646970667358221220866ca40f6b33c48dec37c6f9234192b294e24a4c7606854820c68fcf2e0d0a3a64736f6c63430008110033";

type CBridgeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CBridgeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CBridgeFacet__factory extends ContractFactory {
  constructor(...args: CBridgeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _cBridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CBridgeFacet> {
    return super.deploy(_cBridge, overrides || {}) as Promise<CBridgeFacet>;
  }
  override getDeployTransaction(
    _cBridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_cBridge, overrides || {});
  }
  override attach(address: string): CBridgeFacet {
    return super.attach(address) as CBridgeFacet;
  }
  override connect(signer: Signer): CBridgeFacet__factory {
    return super.connect(signer) as CBridgeFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CBridgeFacetInterface {
    return new utils.Interface(_abi) as CBridgeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CBridgeFacet {
    return new Contract(address, _abi, signerOrProvider) as CBridgeFacet;
  }
}
