/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GenericSwapFacet,
  GenericSwapFacetInterface,
} from "../../../src/Facets/GenericSwapFacet";

const _abi = [
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
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
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
        name: "fromAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "toAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toAmount",
        type: "uint256",
      },
    ],
    name: "LiFiSwappedGeneric",
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
    ],
    name: "swapTokensGeneric",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611c5d806100206000396000f3fe60806040526004361061001e5760003560e01c8063a4baa10c14610023575b600080fd5b61003661003136600461161b565b610038565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560006100cd6100c5866117ef565b8585336101e4565b9050600084846100de6001826118ca565b8181106100ed576100ed6118e1565b90506020028101906100ff9190611910565b61011090608081019060600161194e565b905061011d8133846102e8565b85357f5575cf3fc102f1c1470603a0cf871dad0c96ea2afe544e11452343d8eb6b239961014d6020890189611969565b61015d60608b0160408c0161194e565b89896000818110610170576101706118e1565b90506020028101906101829190611910565b61019390606081019060400161194e565b868b8b60008181106101a7576101a76118e1565b90506020028101906101b99190611910565b60800135896040516101d197969594939291906119d5565b60405180910390a2505060009055505050565b600082808203610220576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561022f6001826118ca565b81811061023e5761023e6118e1565b90506020028101906102509190611910565b61026190608081019060600161194e565b9050600061026e8261031e565b905061027c888888886103d7565b60006102878361031e565b905081811161029657806102a0565b6102a082826118ca565b9150816000036102dc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156103145761030f8383836107e8565b505050565b61030f8282610840565b600073ffffffffffffffffffffffffffffffffffffffff8216156103cf576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156103a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ca9190611a3e565b6103d1565b475b92915050565b82828281600181146106915760006103ef8585610927565b9050600085856104006001866118ca565b81811061040f5761040f6118e1565b90506020028101906104219190611910565b61043290608081019060600161194e565b905060008060005b8a81101561058257368c8c83818110610455576104556118e1565b90506020028101906104679190611910565b905060008061047c604084016020850161194e565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1680156104e857506000806104bd602084018461194e565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b801561052d57506001600061050060a0840184611969565b61050f91600891600091611a57565b61051891611a81565b815260208101919091526040016000205460ff165b610563576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d5161056f90826109f1565b508061057a81611abd565b91505061043a565b5060005b6105916001876118ca565b8110156106875760008989838181106105ac576105ac6118e1565b90506020028101906105be9190611910565b6105cf90608081019060600161194e565b90508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361060a5750610675565b6106138161031e565b9250858281518110610627576106276118e1565b6020026020010151831161063b5782610660565b85828151811061064d5761064d6118e1565b60200260200101518361066091906118ca565b93508315610673576106738189866102e8565b505b8061067f81611abd565b915050610586565b50505050506107de565b60005b868110156107dc57368888838181106106af576106af6118e1565b90506020028101906106c19190611910565b90506000806106d6604084016020850161194e565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1680156107425750600080610717602084018461194e565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b801561078757506001600061075a60a0840184611969565b61076991600891600091611a57565b61077291611a81565b815260208101919091526040016000205460ff165b6107bd576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89516107c990826109f1565b50806107d481611abd565b915050610694565b505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610835576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030f838383610cce565b73ffffffffffffffffffffffffffffffffffffffff821661088d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146108e7576040519150601f19603f3d011682016040523d82523d6000602084013e6108ec565b606091505b505090508061030f576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608160008167ffffffffffffffff811115610945576109456116be565b60405190808252806020026020018201604052801561096e578160200160208202803683370190505b50905060005b828110156109e8576109b9868683818110610991576109916118e1565b90506020028101906109a39190611910565b6109b490608081019060600161194e565b61031e565b8282815181106109cb576109cb6118e1565b6020908102919091010152806109e081611abd565b915050610974565b50949350505050565b610a07610a01602083018361194e565b3b151590565b610a3d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610a7d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080610a90606085016040860161194e565b90506000610aa4608086016060870161194e565b90506000610ab18361031e565b90506000610abe8361031e565b90506000868310610ad0576000610ada565b610ada83886118ca565b905073ffffffffffffffffffffffffffffffffffffffff851615610b2957610b1285610b0c60408b0160208c0161194e565b89610d84565b8015610b2457610b2485333084610ec6565b610b2d565b8695505b600080610b3d60208b018b61194e565b73ffffffffffffffffffffffffffffffffffffffff1688610b6160a08d018d611969565b604051610b6f929190611af5565b60006040518083038185875af1925050503d8060008114610bac576040519150601f19603f3d011682016040523d82523d6000602084013e610bb1565b606091505b509150915081610c05576000610bc682610f6c565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfc9190611b31565b60405180910390fd5b6000610c108761031e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c610c4160208e018e61194e565b8d6040016020810190610c54919061194e565b8a8e8a8711610c635786610c6d565b610c6d8b886118ca565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261030f9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610fea565b73ffffffffffffffffffffffffffffffffffffffff8316610da457505050565b73ffffffffffffffffffffffffffffffffffffffff8216610df1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610e67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8b9190611a3e565b905081811015610ec057610ec084847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6110f6565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8416610f13576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f60576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ec084848484611278565b6060604482511015610fb157505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000610fcd6004808551610fc591906118ca565b8591906112d6565b905080806020019051810190610fe39190611b64565b9392505050565b600061104c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114319092919063ffffffff16565b80519091501561030f578080602001905181019061106a9190611bdb565b61030f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610bfc565b80158061119657506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611170573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111949190611a3e565b155b611222576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610bfc565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261030f9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610d20565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ec09085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610d20565b6060816112e481601f611bfd565b101561134c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152606401610bfc565b6113568284611bfd565b845110156113c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152606401610bfc565b6060821580156113df57604051915060008252602082016040526109e8565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611418578051835260209283019201611400565b5050858452601f01601f19166040525050949350505050565b60606114408484600085611448565b949350505050565b6060824710156114da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610bfc565b843b611542576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610bfc565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161156b9190611c15565b60006040518083038185875af1925050503d80600081146115a8576040519150601f19603f3d011682016040523d82523d6000602084013e6115ad565b606091505b50915091506115bd8282866115c8565b979650505050505050565b606083156115d7575081610fe3565b8251156115e75782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfc9190611b31565b60008060006040848603121561163057600080fd5b833567ffffffffffffffff8082111561164857600080fd5b90850190610100828803121561165d57600080fd5b9093506020850135908082111561167357600080fd5b818601915086601f83011261168757600080fd5b81358181111561169657600080fd5b8760208260051b85010111156116ab57600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611711576117116116be565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611740576117406116be565b604052919050565b600067ffffffffffffffff821115611762576117626116be565b50601f01601f191660200190565b600082601f83011261178157600080fd5b813561179461178f82611748565b611717565b8181528460208386010111156117a957600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117ea57600080fd5b919050565b6000610100823603121561180257600080fd5b61180a6116ed565b82358152602083013567ffffffffffffffff81111561182857600080fd5b61183436828601611770565b602083015250611846604084016117c6565b6040820152611857606084016117c6565b6060820152611868608084016117c6565b608082015261187960a084016117c6565b60a082015260c083013560c082015260e083013560e082015280915050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156118dc576118dc61189b565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4183360301811261194457600080fd5b9190910192915050565b60006020828403121561196057600080fd5b610fe3826117c6565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261199e57600080fd5b83018035915067ffffffffffffffff8211156119b957600080fd5b6020019150368190038213156119ce57600080fd5b9250929050565b60c081528660c0820152868860e0830137600060e088830181019190915273ffffffffffffffffffffffffffffffffffffffff96871660208301529486166040820152929094166060830152608082015260a0810192909252601f909201601f19160101919050565b600060208284031215611a5057600080fd5b5051919050565b60008085851115611a6757600080fd5b83861115611a7457600080fd5b5050820193919092039150565b803560208310156103d1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611aee57611aee61189b565b5060010190565b8183823760009101908152919050565b60005b83811015611b20578181015183820152602001611b08565b83811115610ec05750506000910152565b6020815260008251806020840152611b50816040850160208701611b05565b601f01601f19169190910160400192915050565b600060208284031215611b7657600080fd5b815167ffffffffffffffff811115611b8d57600080fd5b8201601f81018413611b9e57600080fd5b8051611bac61178f82611748565b818152856020838501011115611bc157600080fd5b611bd2826020830160208601611b05565b95945050505050565b600060208284031215611bed57600080fd5b81518015158114610fe357600080fd5b60008219821115611c1057611c1061189b565b500190565b60008251611944818460208701611b0556fea264697066735822122077e2a1c6558ac9fb181d5a821346a5e502c5af9b3dd7f97b14e105eb4e2e490864736f6c634300080d0033";

type GenericSwapFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GenericSwapFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GenericSwapFacet__factory extends ContractFactory {
  constructor(...args: GenericSwapFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GenericSwapFacet> {
    return super.deploy(overrides || {}) as Promise<GenericSwapFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GenericSwapFacet {
    return super.attach(address) as GenericSwapFacet;
  }
  override connect(signer: Signer): GenericSwapFacet__factory {
    return super.connect(signer) as GenericSwapFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GenericSwapFacetInterface {
    return new utils.Interface(_abi) as GenericSwapFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenericSwapFacet {
    return new Contract(address, _abi, signerOrProvider) as GenericSwapFacet;
  }
}
