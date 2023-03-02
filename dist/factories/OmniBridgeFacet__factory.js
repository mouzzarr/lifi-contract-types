"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OmniBridgeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IOmniBridge",
                name: "_foreignOmniBridge",
                type: "address",
            },
            {
                internalType: "contract IOmniBridge",
                name: "_wethOmniBridge",
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
        ],
        name: "startBridgeTokensViaOmniBridge",
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
        ],
        name: "swapAndStartBridgeTokensViaOmniBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x60c06040523480156200001157600080fd5b506040516200287b3803806200287b833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a0516127ad620000ce60003960006106c101526000818161072e01526107b801526127ad6000f3fe6080604052600436106100295760003560e01c8063782621d81461002e5780639572678214610043575b600080fd5b61004161003c3660046121e5565b610056565b005b61004161005136600461221a565b610290565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476122e3565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104d3565b61025087610653565b5047915060009050828211610266576000610270565b61027083836122e3565b905080156102845761028460008583610851565b50506000909255505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161030b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031c34476122e3565b90508580610100015161035b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610399576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103bc8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610431576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048389600001518a60c001518a8a33610882565b60c08a015261049189610653565b50479150600090508282116104a75760006104b1565b6104b183836122e3565b905080156104c5576104c560008583610851565b505060009092555050505050565b73ffffffffffffffffffffffffffffffffffffffff821661052c5780341015610528576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610566576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f791906122f6565b905081811015610642576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61064e833330856109c5565b505050565b608081015173ffffffffffffffffffffffffffffffffffffffff166107245760c081015160a08201516040517ff52cbf0e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169163f52cbf0e916024016000604051808303818588803b15801561070657600080fd5b505af115801561071a573d6000803e3d6000fd5b5050505050610817565b61075781608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610bdf565b608081015160a082015160c08301516040517fad58bdd100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015260448201527f00000000000000000000000000000000000000000000000000000000000000009091169063ad58bdd190606401600060405180830381600087803b1580156107fe57600080fd5b505af1158015610812573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f181604051610846919061237d565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316156108785761064e838383610d2a565b61064e8282610e59565b6000828082036108be576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108cd6001856122e3565b8181106108dc576108dc612490565b90506020028101906108ee91906124bf565b6108ff9060808101906060016124fd565b9050600061090c82610f83565b905073ffffffffffffffffffffffffffffffffffffffff82166109365761093334826122e3565b90505b6000610942888861103c565b905061094e8888611148565b61095b8a898989856111a9565b60008261096785610f83565b61097191906122e3565b9050898110156109b7576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610639565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a12576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a5f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610ad0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af491906122f6565b9050610b028286868661155b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9691906122f6565b610ba091906122e3565b14610bd7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bff57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c4c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610cc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce691906122f6565b905081811015610d2457610d248484610d1f847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6122e3565b611637565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d77576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610de4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0891906122f6565b905080821115610e4e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610639565b610d24848484611735565b73ffffffffffffffffffffffffffffffffffffffff8216610ea6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ee9576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610639565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f43576040519150601f19603f3d011682016040523d82523d6000602084013e610f48565b606091505b505090508061064e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611034576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561100b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102f91906122f6565b611036565b475b92915050565b60608160008167ffffffffffffffff81111561105a5761105a611f54565b604051908082528060200260200182016040528015611083578160200160208202803683370190505b5090506000805b8381101561113d578686828181106110a4576110a4612490565b90506020028101906110b691906124bf565b6110c79060808101906060016124fd565b91506110d282610f83565b8382815181106110e4576110e4612490565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611135573483828151811061111d5761111d612490565b6020026020010181815161113191906122e3565b9052505b60010161108a565b509095945050505050565b60005b8181101561064e57600083838381811061116757611167612490565b905060200281019061117991906124bf565b61118290612518565b90508060c00151156111a0576111a0816040015182608001516104d3565b5060010161114b565b83838383826001811461147657600085856111c56001856122e3565b8181106111d4576111d4612490565b90506020028101906111e691906124bf565b6111f79060808101906060016124fd565b9050600089815b818110156113a257368d8d8381811061121957611219612490565b905060200281019061122b91906124bf565b905061125a61124060608301604084016124fd565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112bd57506112bd61127360408301602084016124fd565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112d457506112d461127360208301836124fd565b801561135957506113596112eb60a08301836125bd565b6112fa91600491600091612629565b61130391612653565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61138f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113998f8261178b565b506001016111fe565b505060005b6113b26001856122e3565b81101561146e5760008888838181106113cd576113cd612490565b90506020028101906113df91906124bf565b6113f09060808101906060016124fd565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114655785828151811061143757611437612490565b602002602001015161144882610f83565b61145291906122e3565b9250821561146557611465818885610851565b506001016113a7565b50505061154f565b8760005b8181101561154c57368b8b8381811061149557611495612490565b90506020028101906114a791906124bf565b90506114bc61124060608301604084016124fd565b806114d557506114d561127360408301602084016124fd565b80156114ec57506114ec61127360208301836124fd565b801561150357506115036112eb60a08301836125bd565b611539576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115438d8261178b565b5060010161147a565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d249085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611aa1565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156116ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d291906122f6565b6116dc919061269b565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610d249085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115b5565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261064e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115b5565b6117a161179b60208301836124fd565b3b151590565b6117d7576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611817576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061182c61124060608501604086016124fd565b61183757600061183d565b82608001355b9050600061185961185460608601604087016124fd565b610f83565b9050600061187061185460808701606088016124fd565b9050826000036118a7576118a761188d60608701604088016124fd565b61189d60408801602089016124fd565b8760800135610bdf565b84608001358210156118f2576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610639565b60008061190260208801886124fd565b73ffffffffffffffffffffffffffffffffffffffff168561192660a08a018a6125bd565b6040516119349291906126ae565b60006040518083038185875af1925050503d8060008114611971576040519150601f19603f3d011682016040523d82523d6000602084013e611976565b606091505b5091509150816119c157600061198b82611bad565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063991906126be565b60006119d661185460808a0160608b016124fd565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a0760208b018b6124fd565b611a1760608c0160408d016124fd565b611a2760808d0160608e016124fd565b8c60800135898711611a395786611a43565b611a438a886122e3565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b03826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c2b9092919063ffffffff16565b80519091501561064e5780806020019051810190611b2191906126d1565b61064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610639565b6060604482511015611bf257505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c0e6004808551611c0691906122e3565b859190611c42565b905080806020019051810190611c2491906126ee565b9392505050565b6060611c3a8484600085611d5c565b949350505050565b606081611c5081601f61269b565b1015611c88576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c92828461269b565b84511015611ccc576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611ceb5760405191506000825260208201604052611d53565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d24578051835260209283019201611d0c565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611dee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610639565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e179190612765565b60006040518083038185875af1925050503d8060008114611e54576040519150601f19603f3d011682016040523d82523d6000602084013e611e59565b606091505b5091509150611e6a87838387611e75565b979650505050505050565b60608315611f0b578251600003611f045773ffffffffffffffffffffffffffffffffffffffff85163b611f04576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610639565b5081611c3a565b611c3a8383815115611f205781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063991906126be565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fa757611fa7611f54565b60405290565b60405160e0810167ffffffffffffffff81118282101715611fa757611fa7611f54565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561201757612017611f54565b604052919050565b600067ffffffffffffffff82111561203957612039611f54565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261207657600080fd5b81356120896120848261201f565b611fd0565b81815284602083860101111561209e57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120df57600080fd5b919050565b80151581146120f257600080fd5b50565b80356120df816120e4565b6000610140828403121561211357600080fd5b61211b611f83565b905081358152602082013567ffffffffffffffff8082111561213c57600080fd5b61214885838601612065565b6020840152604084013591508082111561216157600080fd5b5061216e84828501612065565b604083015250612180606083016120bb565b6060820152612191608083016120bb565b60808201526121a260a083016120bb565b60a082015260c082013560c082015260e082013560e08201526101006121c98184016120f5565b908201526101206121db8382016120f5565b9082015292915050565b6000602082840312156121f757600080fd5b813567ffffffffffffffff81111561220e57600080fd5b611c3a84828501612100565b60008060006040848603121561222f57600080fd5b833567ffffffffffffffff8082111561224757600080fd5b61225387838801612100565b9450602086013591508082111561226957600080fd5b818601915086601f83011261227d57600080fd5b81358181111561228c57600080fd5b8760208260051b85010111156122a157600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611036576110366122b4565b60006020828403121561230857600080fd5b5051919050565b60005b8381101561232a578181015183820152602001612312565b50506000910152565b6000815180845261234b81602086016020860161230f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526123a6610160850183612333565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526123e18382612333565b925050606085015161240b608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061247e8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126124f357600080fd5b9190910192915050565b60006020828403121561250f57600080fd5b611c24826120bb565b600060e0823603121561252a57600080fd5b612532611fad565b61253b836120bb565b8152612549602084016120bb565b602082015261255a604084016120bb565b604082015261256b606084016120bb565b60608201526080830135608082015260a083013567ffffffffffffffff81111561259457600080fd5b6125a036828601612065565b60a0830152506125b260c084016120f5565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125f257600080fd5b83018035915067ffffffffffffffff82111561260d57600080fd5b60200191503681900382131561262257600080fd5b9250929050565b6000808585111561263957600080fd5b8386111561264657600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126935780818660040360031b1b83161692505b505092915050565b80820180821115611036576110366122b4565b8183823760009101908152919050565b602081526000611c246020830184612333565b6000602082840312156126e357600080fd5b8151611c24816120e4565b60006020828403121561270057600080fd5b815167ffffffffffffffff81111561271757600080fd5b8201601f8101841361272857600080fd5b80516127366120848261201f565b81815285602083850101111561274b57600080fd5b61275c82602083016020860161230f565b95945050505050565b600082516124f381846020870161230f56fea2646970667358221220c37308276ca7746a8cadd8eb47e51c10659a28cef6802665d32c4a13e40d998f64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var OmniBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(OmniBridgeFacet__factory, _super);
    function OmniBridgeFacet__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    OmniBridgeFacet__factory.prototype.deploy = function (_foreignOmniBridge, _wethOmniBridge, overrides) {
        return _super.prototype.deploy.call(this, _foreignOmniBridge, _wethOmniBridge, overrides || {});
    };
    OmniBridgeFacet__factory.prototype.getDeployTransaction = function (_foreignOmniBridge, _wethOmniBridge, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _foreignOmniBridge, _wethOmniBridge, overrides || {});
    };
    OmniBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    OmniBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    OmniBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    OmniBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    OmniBridgeFacet__factory.bytecode = _bytecode;
    OmniBridgeFacet__factory.abi = _abi;
    return OmniBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.OmniBridgeFacet__factory = OmniBridgeFacet__factory;
