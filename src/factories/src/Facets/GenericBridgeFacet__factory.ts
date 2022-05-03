/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GenericBridgeFacet,
  GenericBridgeFacetInterface,
} from "../../../src/Facets/GenericBridgeFacet";

const _abi = [
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
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "assetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct GenericBridgeFacet.BridgeData",
        name: "_bridgeData",
        type: "tuple",
      },
    ],
    name: "startBridgeTokensGeneric",
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
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "assetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct GenericBridgeFacet.BridgeData",
        name: "_bridgeData",
        type: "tuple",
      },
    ],
    name: "swapAndStartBridgeTokensGeneric",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611a0e806100206000396000f3fe6080604052600436106100295760003560e01c8063cc512aad1461002e578063f72fa0cb14610043575b600080fd5b61004161003c36600461116d565b610056565b005b61004161005136600461140b565b610261565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560006100e7604084016020850161152c565b905073ffffffffffffffffffffffffffffffffffffffff8116610143573483351461013e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101ac565b600061014e8261041b565b905061015d82333087356104d4565b8335816101698461041b565b6101739190611576565b146101aa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b6101bd6101b88461158d565b610580565b83357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c46101ed6020870187611599565b6101fd6060890160408a0161152c565b61020d60808a0160608b0161152c565b61021d60a08b0160808c0161152c565b61022d60c08c0160a08d0161152c565b8b60e001358c60c001356000806040516102509a999897969594939291906115fe565b60405180910390a250600090555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102dc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155602082015160006102f08261041b565b905060005b60ff811686111561034457875161033290888860ff851681811061031b5761031b611725565b905060200281019061032d9190611754565b610692565b8061033c81611792565b9150506102f5565b506000816103518461041b565b61035b9190611576565b905080600003610397576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8085526103a385610580565b87600001517f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c489602001518a604001518b606001518c608001518d60a001518e60e001518f60c001516001600060405161040599989796959493929190611809565b60405180910390a2505060009091555050505050565b600073ffffffffffffffffffffffffffffffffffffffff8216156104cc576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156104a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c791906118d9565b6104ce565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8416610521576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661056e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61057a8484848461091c565b50505050565b6105978160200151826040015183600001516109da565b60006105bb826020015173ffffffffffffffffffffffffffffffffffffffff161590565b6105c65760006105c9565b81515b9050600080836040015173ffffffffffffffffffffffffffffffffffffffff168385606001516040516105fc91906118f2565b60006040518083038185875af1925050503d8060008114610639576040519150601f19603f3d011682016040523d82523d6000602084013e61063e565b606091505b50915091508161057a57600061065382610b16565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106899190611904565b60405180910390fd5b6106a86106a2602083018361152c565b3b151590565b6106de576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361071e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080610731606085016040860161152c565b90506000610745608086016060870161152c565b905060006107528361041b565b9050600061075f8361041b565b9050600086831061077157600061077b565b61077b8388611576565b905073ffffffffffffffffffffffffffffffffffffffff8516156107ca576107b3856107ad60408b0160208c0161152c565b896109da565b80156107c5576107c5853330846104d4565b6107ce565b8695505b6000806107de60208b018b61152c565b73ffffffffffffffffffffffffffffffffffffffff168861080260a08d018d611599565b604051610810929190611917565b60006040518083038185875af1925050503d806000811461084d576040519150601f19603f3d011682016040523d82523d6000602084013e610852565b606091505b50915091508161086757600061065382610b16565b7f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388b61089660208d018d61152c565b6108a660608e0160408f0161152c565b898d896108b28d61041b565b6108bc9190611576565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261057a9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610b94565b73ffffffffffffffffffffffffffffffffffffffff83166109fa57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a47576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610abd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae191906118d9565b90508181101561057a5761057a84847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610ca5565b6060604482511015610b5b57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000610b776004808551610b6f9190611576565b859190610e27565b905080806020019051810190610b8d9190611927565b9392505050565b6000610bf6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610f839092919063ffffffff16565b805190915015610ca05780806020019051810190610c14919061199e565b610ca0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610689565b505050565b801580610d4557506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610d1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4391906118d9565b155b610dd1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610689565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610ca09084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610976565b606081610e3581601f6119c0565b1015610e9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152606401610689565b610ea782846119c0565b84511015610f11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152606401610689565b606082158015610f305760405191506000825260208201604052610f7a565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610f69578051835260209283019201610f51565b5050858452601f01601f1916604052505b50949350505050565b6060610f928484600085610f9a565b949350505050565b60608247101561102c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610689565b843b611094576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610689565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110bd91906118f2565b60006040518083038185875af1925050503d80600081146110fa576040519150601f19603f3d011682016040523d82523d6000602084013e6110ff565b606091505b509150915061110f82828661111a565b979650505050505050565b60608315611129575081610b8d565b8251156111395782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106899190611904565b6000806040838503121561118057600080fd5b823567ffffffffffffffff8082111561119857600080fd5b9084019061010082870312156111ad57600080fd5b909250602084013590808211156111c357600080fd5b508301608081860312156111d657600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611234576112346111e1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611263576112636111e1565b604052919050565b600067ffffffffffffffff821115611285576112856111e1565b50601f01601f191660200190565b60006112a66112a18461126b565b61123a565b90508281528383830111156112ba57600080fd5b828260208301376000602084830101529392505050565b600082601f8301126112e257600080fd5b610b8d83833560208501611293565b803573ffffffffffffffffffffffffffffffffffffffff8116811461131557600080fd5b919050565b60008083601f84011261132c57600080fd5b50813567ffffffffffffffff81111561134457600080fd5b6020830191508360208260051b850101111561135f57600080fd5b9250929050565b60006080828403121561137857600080fd5b6040516080810167ffffffffffffffff828210818311171561139c5761139c6111e1565b81604052829350843583526113b3602086016112f1565b60208401526113c4604086016112f1565b604084015260608501359150808211156113dd57600080fd5b508301601f810185136113ef57600080fd5b6113fe85823560208401611293565b6060830152505092915050565b6000806000806060858703121561142157600080fd5b843567ffffffffffffffff8082111561143957600080fd5b90860190610100828903121561144e57600080fd5b611456611210565b8235815260208301358281111561146c57600080fd5b6114788a8286016112d1565b60208301525061148a604084016112f1565b604082015261149b606084016112f1565b60608201526114ac608084016112f1565b60808201526114bd60a084016112f1565b60a082015260c083013560c082015260e083013560e08201528096505060208701359150808211156114ee57600080fd5b6114fa8883890161131a565b9095509350604087013591508082111561151357600080fd5b5061152087828801611366565b91505092959194509250565b60006020828403121561153e57600080fd5b610b8d826112f1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561158857611588611547565b500390565b60006104ce3683611366565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126115ce57600080fd5b83018035915067ffffffffffffffff8211156115e957600080fd5b60200191503681900382131561135f57600080fd5b600061016080835261163c818401600781527f67656e6572696300000000000000000000000000000000000000000000000000602082015260400190565b905082810380602085015260008252602081016040850152508b60208201528b8d6040830137600060408d830101526040601f19601f8e011682010191505061169d606083018b73ffffffffffffffffffffffffffffffffffffffff169052565b73ffffffffffffffffffffffffffffffffffffffff8916608083015273ffffffffffffffffffffffffffffffffffffffff881660a083015273ffffffffffffffffffffffffffffffffffffffff871660c08301528560e08301528461010083015261170d61012083018515159052565b8215156101408301529b9a5050505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4183360301811261178857600080fd5b9190910192915050565b600060ff821660ff81036117a8576117a8611547565b60010192915050565b60005b838110156117cc5781810151838201526020016117b4565b8381111561057a5750506000910152565b600081518084526117f58160208601602086016117b1565b601f01601f19169290920160200192915050565b6000610160808352611847818401600781527f67656e6572696300000000000000000000000000000000000000000000000000602082015260400190565b9050828103806020850152600082526020810160408501525061186d602082018d6117dd565b91505073ffffffffffffffffffffffffffffffffffffffff808b166060840152808a16608084015280891660a084015280881660c0840152508560e0830152846101008301528315156101208301526118cb61014083018415159052565b9a9950505050505050505050565b6000602082840312156118eb57600080fd5b5051919050565b600082516117888184602087016117b1565b602081526000610b8d60208301846117dd565b8183823760009101908152919050565b60006020828403121561193957600080fd5b815167ffffffffffffffff81111561195057600080fd5b8201601f8101841361196157600080fd5b805161196f6112a18261126b565b81815285602083850101111561198457600080fd5b6119958260208301602086016117b1565b95945050505050565b6000602082840312156119b057600080fd5b81518015158114610b8d57600080fd5b600082198211156119d3576119d3611547565b50019056fea2646970667358221220f66da79bac1ea33b3a410209e13197dcf2b92c98976740b2599aa032b2c2328b64736f6c634300080d0033";

type GenericBridgeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GenericBridgeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GenericBridgeFacet__factory extends ContractFactory {
  constructor(...args: GenericBridgeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GenericBridgeFacet> {
    return super.deploy(overrides || {}) as Promise<GenericBridgeFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GenericBridgeFacet {
    return super.attach(address) as GenericBridgeFacet;
  }
  override connect(signer: Signer): GenericBridgeFacet__factory {
    return super.connect(signer) as GenericBridgeFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GenericBridgeFacetInterface {
    return new utils.Interface(_abi) as GenericBridgeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenericBridgeFacet {
    return new Contract(address, _abi, signerOrProvider) as GenericBridgeFacet;
  }
}
