/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MultichainFacet,
  MultichainFacetInterface,
} from "../../../src/Facets/MultichainFacet";

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
    inputs: [],
    name: "TokenAddressIsZero",
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
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "MultichainRouterRegistered",
    type: "event",
  },
  {
    inputs: [
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
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "registerBridge",
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
    name: "registerBridge",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612fc8806100206000396000f3fe60806040526004361061005a5760003560e01c8063a342d3ff11610043578063a342d3ff146100a1578063cc818ad1146100b4578063ef55f6dd146100d457600080fd5b806323920d461461005f5780632cd5405314610081575b600080fd5b34801561006b57600080fd5b5061007f61007a366004612681565b6100e7565b005b34801561008d57600080fd5b5061007f61009c3660046126ff565b610228565b61007f6100af3660046129c9565b610455565b3480156100c057600080fd5b5061007f6100cf366004612a45565b6106e3565b61007f6100e2366004612a87565b6108b6565b6100ef610b63565b6001600160a01b03821661012f576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b73547f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b729060ff166101ac576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b0383166000818152602083815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f3a1708a4110d0ba9cf04ca69635900fa4b43baba595f928e904f50b08caab797910160405180910390a2505050565b610230610b63565b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b73547f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b729060ff166102ad576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8360005b8181101561044c5760008787838181106102cd576102cd612ae1565b90506020020160208101906102e29190612b10565b6001600160a01b031603610322576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84848281811061033457610334612ae1565b90506020020160208101906103499190612b2d565b83600089898581811061035e5761035e612ae1565b90506020020160208101906103739190612b10565b6001600160a01b03168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790558686828181106103cb576103cb612ae1565b90506020020160208101906103e09190612b10565b6001600160a01b03167f3a1708a4110d0ba9cf04ca69635900fa4b43baba595f928e904f50b08caab79786868481811061041c5761041c612ae1565b90506020020160208101906104319190612b2d565b604051901515815260200160405180910390a26001016102b1565b50505050505050565b3360006104623447612b79565b9050858061010001516104a1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104df576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876104f58160a001516001600160a01b03161590565b1561052c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361056a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105e5576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815586516001600160a01b031660009081527f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b72602081905260409091205460ff1661065e576040517f466d7fef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106738b600001518c60c001518c8c33610bcb565b60c08c015260808b01518851600091829161068e9190610d06565b9150915061069e8d8b8484610e4d565b5050600091829055504793509150508282116106bb5760006106c5565b6106c58383612b79565b905080156106d9576106d9600085836110de565b5050505050505050565b6106eb610b63565b7f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b73547f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b729060ff1615610769576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8160005b8181101561085857600085858381811061078957610789612ae1565b905060200201602081019061079e9190612b10565b6001600160a01b0316036107de576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018360008787858181106107f5576107f5612ae1565b905060200201602081019061080a9190612b10565b6001600160a01b03168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905560010161076d565b50600182810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517fe51c1d2eff84ab6f9ee1bd80996062dc0cb46f36d7becb600280a7083294908890600090a150505050565b3360006108c33447612b79565b90508380610100015115610903576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610941576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856109578160a001516001600160a01b03161590565b1561098e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036109cc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610a47576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181557f1ee407b3d26d6d639b123c41c4a76edbb0ed1dd9e1bbd835fcab743f9a070b72806000610a7c60208b018b612b10565b6001600160a01b0316815260208101919091526040016000205460ff16610acf576040517f466d7fef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808901516000908190610aef90610aea60208d018d612b10565b610d06565b9150915080610b0657610b06828c60c00151611107565b610b208b610b19368d90038d018d612b8c565b8484610e4d565b505060009182905550479350915050828211610b3d576000610b47565b610b478383612b79565b90508015610b5b57610b5b600085836110de565b505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b03163314610bc9576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600082808203610c07576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610c16600185612b79565b818110610c2557610c25612ae1565b9050602002810190610c379190612ba8565b610c48906080810190606001612b10565b90506000610c5582611263565b90506001600160a01b038216610c7257610c6f3482612b79565b90505b6000610c7e8888611302565b9050610c8a8888611401565b610c978a89898985611462565b600082610ca385611263565b610cad9190612b79565b905089811015610cf8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b6000806001600160a01b038416610d49576040517fdc2e5e8d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836001600160a01b0316636f307dc36040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610d89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dad9190612be6565b9150816001600160a01b0316836001600160a01b0316638fd903f56040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610df9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1d9190612be6565b6001600160a01b0316149050801581610e3d57506001600160a01b038216155b15610e46578391505b9250929050565b8360e001514603610e8a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015610f2d57825160c0850151608086015160a087015160e08801516040517fa5e565710000000000000000000000000000000000000000000000000000000081526001600160a01b0393841660048201529183166024830152604482015292169163a5e5657191906064016000604051808303818588803b158015610f0f57600080fd5b505af1158015610f23573d6000803e3d6000fd5b50505050506110a1565b610f408284600001518660c001516117e0565b816001600160a01b031684608001516001600160a01b031614611001578251608085015160a086015160c087015160e08801516040517fedbdf5e20000000000000000000000000000000000000000000000000000000081526001600160a01b03948516600482015292841660248401526044830191909152606482015291169063edbdf5e290608401600060405180830381600087803b158015610fe457600080fd5b505af1158015610ff8573d6000803e3d6000fd5b505050506110a1565b8251608085015160a086015160c087015160e08801516040517f241dc2df0000000000000000000000000000000000000000000000000000000081526001600160a01b03948516600482015292841660248401526044830191909152606482015291169063241dc2df90608401600060405180830381600087803b15801561108857600080fd5b505af115801561109c573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516110d09190612c53565b60405180910390a150505050565b6001600160a01b038316156110fd576110f8838383611904565b505050565b6110f88282611a19565b6001600160a01b038216611153578034101561114f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b8060000361118d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa1580156111ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112119190612d21565b905081811015611257576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610cef565b6110f883333085611b29565b60006001600160a01b038216156112fa576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa1580156112d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f59190612d21565b6112fc565b475b92915050565b60608160008167ffffffffffffffff8111156113205761132061276b565b604051908082528060200260200182016040528015611349578160200160208202803683370190505b5090506000805b838110156113f65786868281811061136a5761136a612ae1565b905060200281019061137c9190612ba8565b61138d906080810190606001612b10565b915061139882611263565b8382815181106113aa576113aa612ae1565b60209081029190910101526001600160a01b0382166113ee57348382815181106113d6576113d6612ae1565b602002602001018181516113ea9190612b79565b9052505b600101611350565b509095945050505050565b60005b818110156110f857600083838381811061142057611420612ae1565b90506020028101906114329190612ba8565b61143b90612d3a565b90508060c00151156114595761145981604001518260800151611107565b50600101611404565b8383838382600181146116fb576000858561147e600185612b79565b81811061148d5761148d612ae1565b905060200281019061149f9190612ba8565b6114b0906080810190606001612b10565b9050600089815b8181101561164157368d8d838181106114d2576114d2612ae1565b90506020028101906114e49190612ba8565b90506115066114f96060830160408401612b10565b6001600160a01b03161590565b8061155c575061155c61151f6040830160208401612b10565b6001600160a01b031660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611573575061157361151f6020830183612b10565b80156115f857506115f861158a60a0830183612ddf565b61159991600491600091612e44565b6115a291612e6e565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61162e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116388f82611d07565b506001016114b7565b505060005b611651600185612b79565b8110156116f357600088888381811061166c5761166c612ae1565b905060200281019061167e9190612ba8565b61168f906080810190606001612b10565b9050836001600160a01b0316816001600160a01b0316146116ea578582815181106116bc576116bc612ae1565b60200260200101516116cd82611263565b6116d79190612b79565b925082156116ea576116ea8188856110de565b50600101611646565b5050506117d4565b8760005b818110156117d157368b8b8381811061171a5761171a612ae1565b905060200281019061172c9190612ba8565b90506117416114f96060830160408401612b10565b8061175a575061175a61151f6040830160208401612b10565b8015611771575061177161151f6020830183612b10565b8015611788575061178861158a60a0830183612ddf565b6117be576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117c88d82611d07565b506001016116ff565b50505b50505050505050505050565b6001600160a01b0383166117f357505050565b6001600160a01b038216611833576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e90604401602060405180830381865afa15801561189c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118c09190612d21565b9050818110156118fe576118fe84846118f9847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612b79565b612003565b50505050565b6001600160a01b038316611944576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156119a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119c89190612d21565b905080821115611a0e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610cef565b6118fe848484612147565b6001600160a01b038216611a59576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611a9c576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610cef565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611ae9576040519150601f19603f3d011682016040523d82523d6000602084013e611aee565b606091505b50509050806110f8576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038416611b69576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038216611ba9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b03838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611c0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c319190612d21565b9050611c3f82868686612190565b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152849183918516906370a0823190602401602060405180830381865afa158015611ca2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cc69190612d21565b611cd09190612b79565b14610b5b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d1d611d176020830183612b10565b3b151590565b611d53576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611d93576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611da86114f96060850160408601612b10565b611db3576000611db9565b82608001355b90506000611dd5611dd06060860160408701612b10565b611263565b90506000611dec611dd06080870160608801612b10565b905082600003611e2357611e23611e096060870160408801612b10565b611e196040880160208901612b10565b87608001356117e0565b8460800135821015611e6e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610cef565b600080611e7e6020880188612b10565b6001600160a01b031685611e9560a08a018a612ddf565b604051611ea3929190612eb6565b60006040518083038185875af1925050503d8060008114611ee0576040519150601f19603f3d011682016040523d82523d6000602084013e611ee5565b606091505b509150915081611f30576000611efa826121e1565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cef9190612ec6565b6000611f45611dd060808a0160608b01612b10565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611f7660208b018b612b10565b611f8660608c0160408d01612b10565b611f9660808d0160608e01612b10565b8c60800135898711611fa85786611fb2565b611fb28a88612b79565b604080519687526001600160a01b0395861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561206d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120919190612d21565b61209b9190612ed9565b6040516001600160a01b0385166024820152604481018290529091506118fe9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261225f565b6040516001600160a01b0383166024820152604481018290526110f89084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016120e3565b6040516001600160a01b03808516602483015283166044820152606481018290526118fe9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016120e3565b606060448251101561222657505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000612242600480855161223a9190612b79565b85919061235e565b9050808060200190518101906122589190612eec565b9392505050565b60006122b4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661245a9092919063ffffffff16565b8051909150156110f857808060200190518101906122d29190612f63565b6110f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610cef565b60608161236c81601f612ed9565b10156123a4576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6123ae8284612ed9565b845110156123e8576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060821580156124075760405191506000825260208201604052612451565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015612440578051835260209283019201612428565b5050858452601f01601f1916604052505b50949350505050565b60606124698484600085612471565b949350505050565b606082471015612503576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610cef565b6001600160a01b0385163b612574576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610cef565b600080866001600160a01b031685876040516125909190612f80565b60006040518083038185875af1925050503d80600081146125cd576040519150601f19603f3d011682016040523d82523d6000602084013e6125d2565b606091505b50915091506125e28282866125ed565b979650505050505050565b606083156125fc575081612258565b82511561260c5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cef9190612ec6565b6001600160a01b038116811461265557600080fd5b50565b803561266381612640565b919050565b801515811461265557600080fd5b803561266381612668565b6000806040838503121561269457600080fd5b823561269f81612640565b915060208301356126af81612668565b809150509250929050565b60008083601f8401126126cc57600080fd5b50813567ffffffffffffffff8111156126e457600080fd5b6020830191508360208260051b8501011115610e4657600080fd5b6000806000806040858703121561271557600080fd5b843567ffffffffffffffff8082111561272d57600080fd5b612739888389016126ba565b9096509450602087013591508082111561275257600080fd5b5061275f878288016126ba565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156127be576127be61276b565b60405290565b60405160e0810167ffffffffffffffff811182821017156127be576127be61276b565b604051601f8201601f1916810167ffffffffffffffff811182821017156128105761281061276b565b604052919050565b600067ffffffffffffffff8211156128325761283261276b565b50601f01601f191660200190565b600082601f83011261285157600080fd5b813561286461285f82612818565b6127e7565b81815284602083860101111561287957600080fd5b816020850160208301376000918101602001919091529392505050565b600061014082840312156128a957600080fd5b6128b161279a565b905081358152602082013567ffffffffffffffff808211156128d257600080fd5b6128de85838601612840565b602084015260408401359150808211156128f757600080fd5b5061290484828501612840565b60408301525061291660608301612658565b606082015261292760808301612658565b608082015261293860a08301612658565b60a082015260c082013560c082015260e082013560e082015261010061295f818401612676565b90820152610120612971838201612676565b9082015292915050565b60006020828403121561298d57600080fd5b6040516020810181811067ffffffffffffffff821117156129b0576129b061276b565b60405290508082356129c181612640565b905292915050565b600080600080606085870312156129df57600080fd5b843567ffffffffffffffff808211156129f757600080fd5b612a0388838901612896565b95506020870135915080821115612a1957600080fd5b50612a26878288016126ba565b9094509250612a3a9050866040870161297b565b905092959194509250565b60008060208385031215612a5857600080fd5b823567ffffffffffffffff811115612a6f57600080fd5b612a7b858286016126ba565b90969095509350505050565b6000808284036040811215612a9b57600080fd5b833567ffffffffffffffff811115612ab257600080fd5b612abe86828701612896565b9350506020601f1982011215612ad357600080fd5b506020830190509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215612b2257600080fd5b813561225881612640565b600060208284031215612b3f57600080fd5b813561225881612668565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156112fc576112fc612b4a565b600060208284031215612b9e57600080fd5b612258838361297b565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612bdc57600080fd5b9190910192915050565b600060208284031215612bf857600080fd5b815161225881612640565b60005b83811015612c1e578181015183820152602001612c06565b50506000910152565b60008151808452612c3f816020860160208601612c03565b601f01601f19169290920160200192915050565b602081528151602082015260006020830151610140806040850152612c7c610160850183612c27565b91506040850151601f19858403016060860152612c998382612c27565b9250506060850151612cb660808601826001600160a01b03169052565b5060808501516001600160a01b03811660a08601525060a08501516001600160a01b03811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612d0f8187018315159052565b90950151151593019290925250919050565b600060208284031215612d3357600080fd5b5051919050565b600060e08236031215612d4c57600080fd5b612d546127c4565b612d5d83612658565b8152612d6b60208401612658565b6020820152612d7c60408401612658565b6040820152612d8d60608401612658565b60608201526080830135608082015260a083013567ffffffffffffffff811115612db657600080fd5b612dc236828601612840565b60a083015250612dd460c08401612676565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612e1457600080fd5b83018035915067ffffffffffffffff821115612e2f57600080fd5b602001915036819003821315610e4657600080fd5b60008085851115612e5457600080fd5b83861115612e6157600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612eae5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6020815260006122586020830184612c27565b808201808211156112fc576112fc612b4a565b600060208284031215612efe57600080fd5b815167ffffffffffffffff811115612f1557600080fd5b8201601f81018413612f2657600080fd5b8051612f3461285f82612818565b818152856020838501011115612f4957600080fd5b612f5a826020830160208601612c03565b95945050505050565b600060208284031215612f7557600080fd5b815161225881612668565b60008251612bdc818460208701612c0356fea2646970667358221220fb749c33f6bd6cea757600064476cd6c2fc0ce4c4bac3f7bc8c6a6b4f173232e64736f6c63430008110033";

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
