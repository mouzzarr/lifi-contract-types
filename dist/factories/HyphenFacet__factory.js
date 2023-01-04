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
exports.HyphenFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IHyphenRouter",
                name: "_router",
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
        name: "startBridgeTokensViaHyphen",
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
        name: "swapAndStartBridgeTokensViaHyphen",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x60a06040523480156200001157600080fd5b506040516200287538038062002875833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516127d3620000a26000396000818161067d015281816106f701526107b101526127d36000f3fe6080604052600436106100295760003560e01c80638bf6ef991461002e5780639feb673114610043575b600080fd5b61004161003c36600461216f565b610056565b005b6100416100513660046121a4565b610290565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761226d565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104d3565b61025087610653565b5047915060009050828211610266576000610270565b610270838361226d565b905080156102845761028460008583610853565b50506000909255505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161030b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031c344761226d565b90508580610100015161035b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610399576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103bc8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610431576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048389600001518a60c001518a8a33610884565b60c08a015261049189610653565b50479150600090508282116104a75760006104b1565b6104b1838361226d565b905080156104c5576104c560008583610853565b505060009092555050505050565b73ffffffffffffffffffffffffffffffffffffffff821661052c5780341015610528576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610566576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f79190612280565b905081811015610642576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61064e833330856109c7565b505050565b608081015173ffffffffffffffffffffffffffffffffffffffff1615610765576106a681608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610be1565b60e0810151608082015160a083015160c08401516040517f55d7359500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016946355d735959461072e9491939092600401612299565b600060405180830381600087803b15801561074857600080fd5b505af115801561075c573d6000803e3d6000fd5b50505050610819565b60c081015160a082015160e08301516040517fea36842100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363ea3684219390926107e692600401612312565b6000604051808303818588803b1580156107ff57600080fd5b505af1158015610813573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161084891906123c1565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff83161561087a5761064e838383610d2c565b61064e8282610e5b565b6000828082036108c0576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108cf60018561226d565b8181106108de576108de6124b6565b90506020028101906108f091906124e5565b610901906080810190606001612523565b9050600061090e82610f85565b905073ffffffffffffffffffffffffffffffffffffffff821661093857610935348261226d565b90505b6000610944888861103e565b9050610950888861114a565b61095d8a898989856111ab565b60008261096985610f85565b610973919061226d565b9050898110156109b9576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610639565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a14576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a61576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610ad2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af69190612280565b9050610b048286868661155d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b989190612280565b610ba2919061226d565b14610bd9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c0157505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c4e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610cc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce89190612280565b905081811015610d2657610d268484610d21847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61226d565b61161b565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d79576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a9190612280565b905080821115610e50576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610639565b610d26848484611719565b73ffffffffffffffffffffffffffffffffffffffff8216610ea8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610eeb576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610639565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f45576040519150601f19603f3d011682016040523d82523d6000602084013e610f4a565b606091505b505090508061064e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611036576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561100d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110319190612280565b611038565b475b92915050565b60608160008167ffffffffffffffff81111561105c5761105c611f1a565b604051908082528060200260200182016040528015611085578160200160208202803683370190505b5090506000805b8381101561113f578686828181106110a6576110a66124b6565b90506020028101906110b891906124e5565b6110c9906080810190606001612523565b91506110d482610f85565b8382815181106110e6576110e66124b6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611137573483828151811061111f5761111f6124b6565b60200260200101818151611133919061226d565b9052505b60010161108c565b509095945050505050565b60005b8181101561064e576000838383818110611169576111696124b6565b905060200281019061117b91906124e5565b6111849061253e565b90508060c00151156111a2576111a2816040015182608001516104d3565b5060010161114d565b83838383826001811461147857600085856111c760018561226d565b8181106111d6576111d66124b6565b90506020028101906111e891906124e5565b6111f9906080810190606001612523565b9050600089815b818110156113a457368d8d8381811061121b5761121b6124b6565b905060200281019061122d91906124e5565b905061125c6112426060830160408401612523565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112bf57506112bf6112756040830160208401612523565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112d657506112d66112756020830183612523565b801561135b575061135b6112ed60a08301836125e3565b6112fc9160049160009161264f565b61130591612679565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611391576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61139b8f8261176f565b50600101611200565b505060005b6113b460018561226d565b8110156114705760008888838181106113cf576113cf6124b6565b90506020028101906113e191906124e5565b6113f2906080810190606001612523565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461146757858281518110611439576114396124b6565b602002602001015161144a82610f85565b611454919061226d565b9250821561146757611467818885610853565b506001016113a9565b505050611551565b8760005b8181101561154e57368b8b83818110611497576114976124b6565b90506020028101906114a991906124e5565b90506114be6112426060830160408401612523565b806114d757506114d76112756040830160208401612523565b80156114ee57506114ee6112756020830183612523565b801561150557506115056112ed60a08301836125e3565b61153b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115458d8261176f565b5060010161147c565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d269085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a85565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611692573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b69190612280565b6116c091906126c1565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610d269085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115b7565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261064e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115b7565b61178561177f6020830183612523565b3b151590565b6117bb576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036117fb576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118106112426060850160408601612523565b61181b576000611821565b82608001355b9050600061183d6118386060860160408701612523565b610f85565b905060006118546118386080870160608801612523565b90508260000361188b5761188b6118716060870160408801612523565b6118816040880160208901612523565b8760800135610be1565b84608001358210156118d6576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610639565b6000806118e66020880188612523565b73ffffffffffffffffffffffffffffffffffffffff168561190a60a08a018a6125e3565b6040516119189291906126d4565b60006040518083038185875af1925050503d8060008114611955576040519150601f19603f3d011682016040523d82523d6000602084013e61195a565b606091505b5091509150816119a557600061196f82611b91565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063991906126e4565b60006119ba61183860808a0160608b01612523565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119eb60208b018b612523565b6119fb60608c0160408d01612523565b611a0b60808d0160608e01612523565b8c60800135898711611a1d5786611a27565b611a278a8861226d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611ae7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c0f9092919063ffffffff16565b80519091501561064e5780806020019051810190611b0591906126f7565b61064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610639565b6060604482511015611bd657505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611bf26004808551611bea919061226d565b859190611c26565b905080806020019051810190611c089190612714565b9392505050565b6060611c1e8484600085611d22565b949350505050565b606081611c3481601f6126c1565b1015611c6c576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c7682846126c1565b84511015611cb0576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611ccf5760405191506000825260208201604052611d19565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d08578051835260209283019201611cf0565b5050858452601f01601f1916604052505b50949350505050565b606082471015611db4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610639565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ddd919061278b565b60006040518083038185875af1925050503d8060008114611e1a576040519150601f19603f3d011682016040523d82523d6000602084013e611e1f565b606091505b5091509150611e3087838387611e3b565b979650505050505050565b60608315611ed1578251600003611eca5773ffffffffffffffffffffffffffffffffffffffff85163b611eca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610639565b5081611c1e565b611c1e8383815115611ee65781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063991906126e4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f6d57611f6d611f1a565b60405290565b60405160e0810167ffffffffffffffff81118282101715611f6d57611f6d611f1a565b604051601f8201601f1916810167ffffffffffffffff81118282101715611fbf57611fbf611f1a565b604052919050565b600067ffffffffffffffff821115611fe157611fe1611f1a565b50601f01601f191660200190565b600082601f83011261200057600080fd5b813561201361200e82611fc7565b611f96565b81815284602083860101111561202857600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461206957600080fd5b919050565b801515811461207c57600080fd5b50565b80356120698161206e565b6000610140828403121561209d57600080fd5b6120a5611f49565b905081358152602082013567ffffffffffffffff808211156120c657600080fd5b6120d285838601611fef565b602084015260408401359150808211156120eb57600080fd5b506120f884828501611fef565b60408301525061210a60608301612045565b606082015261211b60808301612045565b608082015261212c60a08301612045565b60a082015260c082013560c082015260e082013560e082015261010061215381840161207f565b9082015261012061216583820161207f565b9082015292915050565b60006020828403121561218157600080fd5b813567ffffffffffffffff81111561219857600080fd5b611c1e8482850161208a565b6000806000604084860312156121b957600080fd5b833567ffffffffffffffff808211156121d157600080fd5b6121dd8783880161208a565b945060208601359150808211156121f357600080fd5b818601915086601f83011261220757600080fd5b81358181111561221657600080fd5b8760208260051b850101111561222b57600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156110385761103861223e565b60006020828403121561229257600080fd5b5051919050565b848152600073ffffffffffffffffffffffffffffffffffffffff808616602084015280851660408401525082606083015260a0608083015261230860a08301600481527f4c49464900000000000000000000000000000000000000000000000000000000602082015260400190565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152816020820152606060408201526000611c1e60608301600481527f4c49464900000000000000000000000000000000000000000000000000000000602082015260400190565b60005b8381101561238c578181015183820152602001612374565b50506000910152565b600081518084526123ad816020860160208601612371565b601f01601f19169290920160200192915050565b6020815281516020820152600060208301516101408060408501526123ea610160850183612395565b91506040850151601f198584030160608601526124078382612395565b9250506060850151612431608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124a48187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261251957600080fd5b9190910192915050565b60006020828403121561253557600080fd5b611c0882612045565b600060e0823603121561255057600080fd5b612558611f73565b61256183612045565b815261256f60208401612045565b602082015261258060408401612045565b604082015261259160608401612045565b60608201526080830135608082015260a083013567ffffffffffffffff8111156125ba57600080fd5b6125c636828601611fef565b60a0830152506125d860c0840161207f565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261261857600080fd5b83018035915067ffffffffffffffff82111561263357600080fd5b60200191503681900382131561264857600080fd5b9250929050565b6000808585111561265f57600080fd5b8386111561266c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126b95780818660040360031b1b83161692505b505092915050565b808201808211156110385761103861223e565b8183823760009101908152919050565b602081526000611c086020830184612395565b60006020828403121561270957600080fd5b8151611c088161206e565b60006020828403121561272657600080fd5b815167ffffffffffffffff81111561273d57600080fd5b8201601f8101841361274e57600080fd5b805161275c61200e82611fc7565b81815285602083850101111561277157600080fd5b612782826020830160208601612371565b95945050505050565b6000825161251981846020870161237156fea26469706673582212203fa81d685cb52a299d0a5c625b062c5ded44d64e0973875d9a6438bca6d8f91164736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var HyphenFacet__factory = /** @class */ (function (_super) {
    __extends(HyphenFacet__factory, _super);
    function HyphenFacet__factory() {
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
    HyphenFacet__factory.prototype.deploy = function (_router, overrides) {
        return _super.prototype.deploy.call(this, _router, overrides || {});
    };
    HyphenFacet__factory.prototype.getDeployTransaction = function (_router, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _router, overrides || {});
    };
    HyphenFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    HyphenFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    HyphenFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    HyphenFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    HyphenFacet__factory.bytecode = _bytecode;
    HyphenFacet__factory.abi = _abi;
    return HyphenFacet__factory;
}(ethers_1.ContractFactory));
exports.HyphenFacet__factory = HyphenFacet__factory;
