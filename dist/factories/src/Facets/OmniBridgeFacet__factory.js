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
var _bytecode = "0x60c06040523480156200001157600080fd5b506040516200273d3803806200273d833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a05161266f620000ce60003960006106460152600081816106b3015261073d015261266f6000f3fe6080604052600436106100295760003560e01c8063782621d81461002e5780639572678214610043575b600080fd5b61004161003c3660046120e3565b610056565b005b610041610051366004612118565b610254565b33600061006334476121e1565b905082806101000151156100a3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156100e1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610179576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155608087015160c088015161020c9190610458565b610215876105d8565b60009081905547935091505082821161022f576000610239565b61023983836121e1565b9050801561024d5761024d600085836107d6565b5050505050565b33600061026134476121e1565b9050848061010001516102a0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156102de576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103018160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610338576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610376576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103f1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155885160c08a015161040991908a8a33610807565b60c08a0152610417896105d8565b60009081905547935091505082821161043157600061043b565b61043b83836121e1565b9050801561044f5761044f600085836107d6565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166104b157803410156104ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036104eb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610558573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057c91906121f4565b9050818110156105c7576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6105d38333308561094a565b505050565b608081015173ffffffffffffffffffffffffffffffffffffffff166106a95760c081015160a08201516040517ff52cbf0e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169163f52cbf0e916024016000604051808303818588803b15801561068b57600080fd5b505af115801561069f573d6000803e3d6000fd5b505050505061079c565b6106dc81608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610b64565b608081015160a082015160c08301516040517fad58bdd100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015260448201527f00000000000000000000000000000000000000000000000000000000000000009091169063ad58bdd190606401600060405180830381600087803b15801561078357600080fd5b505af1158015610797573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516107cb919061225d565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316156107fd576105d3838383610caf565b6105d38282610dde565b600082808203610843576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108526001856121e1565b81811061086157610861612352565b90506020028101906108739190612381565b6108849060808101906060016123bf565b9050600061089182610f08565b905073ffffffffffffffffffffffffffffffffffffffff82166108bb576108b834826121e1565b90505b60006108c78888610fc1565b90506108d388886110cd565b6108e08a8989898561112e565b6000826108ec85610f08565b6108f691906121e1565b90508981101561093c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016105be565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610997576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109e4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7991906121f4565b9050610a87828686866114e0565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610af7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1b91906121f4565b610b2591906121e1565b14610b5c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b8457505050565b73ffffffffffffffffffffffffffffffffffffffff8216610bd1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610c47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6b91906121f4565b905081811015610ca957610ca98484610ca4847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6121e1565b61159e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cfc576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610d69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8d91906121f4565b905080821115610dd3576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105be565b610ca984848461169c565b73ffffffffffffffffffffffffffffffffffffffff8216610e2b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610e6e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105be565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610ec8576040519150601f19603f3d011682016040523d82523d6000602084013e610ecd565b606091505b50509050806105d3576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610fb9576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610f90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb491906121f4565b610fbb565b475b92915050565b60608160008167ffffffffffffffff811115610fdf57610fdf611e8e565b604051908082528060200260200182016040528015611008578160200160208202803683370190505b5090506000805b838110156110c25786868281811061102957611029612352565b905060200281019061103b9190612381565b61104c9060808101906060016123bf565b915061105782610f08565b83828151811061106957611069612352565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110ba57348382815181106110a2576110a2612352565b602002602001018181516110b691906121e1565b9052505b60010161100f565b509095945050505050565b60005b818110156105d35760008383838181106110ec576110ec612352565b90506020028101906110fe9190612381565b611107906123da565b90508060c00151156111255761112581604001518260800151610458565b506001016110d0565b8383838382600181146113fb576000858561114a6001856121e1565b81811061115957611159612352565b905060200281019061116b9190612381565b61117c9060808101906060016123bf565b9050600089815b8181101561132757368d8d8381811061119e5761119e612352565b90506020028101906111b09190612381565b90506111df6111c560608301604084016123bf565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061124257506112426111f860408301602084016123bf565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561125957506112596111f860208301836123bf565b80156112de57506112de61127060a083018361247f565b61127f916004916000916124eb565b61128891612515565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611314576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61131e8f826116f2565b50600101611183565b505060005b6113376001856121e1565b8110156113f357600088888381811061135257611352612352565b90506020028101906113649190612381565b6113759060808101906060016123bf565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113ea578582815181106113bc576113bc612352565b60200260200101516113cd82610f08565b6113d791906121e1565b925082156113ea576113ea8188856107d6565b5060010161132c565b5050506114d4565b8760005b818110156114d157368b8b8381811061141a5761141a612352565b905060200281019061142c9190612381565b90506114416111c560608301604084016123bf565b8061145a575061145a6111f860408301602084016123bf565b801561147157506114716111f860208301836123bf565b8015611488575061148861127060a083018361247f565b6114be576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114c88d826116f2565b506001016113ff565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ca99085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a08565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611615573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163991906121f4565b611643919061255d565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610ca99085907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161153a565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105d39084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161153a565b61170861170260208301836123bf565b3b151590565b61173e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361177e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006117936111c560608501604086016123bf565b61179e5760006117a4565b82608001355b905060006117c06117bb60608601604087016123bf565b610f08565b905060006117d76117bb60808701606088016123bf565b90508260000361180e5761180e6117f460608701604088016123bf565b61180460408801602089016123bf565b8760800135610b64565b8460800135821015611859576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105be565b60008061186960208801886123bf565b73ffffffffffffffffffffffffffffffffffffffff168561188d60a08a018a61247f565b60405161189b929190612570565b60006040518083038185875af1925050503d80600081146118d8576040519150601f19603f3d011682016040523d82523d6000602084013e6118dd565b606091505b5091509150816119285760006118f282611b14565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105be9190612580565b600061193d6117bb60808a0160608b016123bf565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961196e60208b018b6123bf565b61197e60608c0160408d016123bf565b61198e60808d0160608e016123bf565b8c608001358987116119a057866119aa565b6119aa8a886121e1565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611a6a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611b929092919063ffffffff16565b8051909150156105d35780806020019051810190611a889190612593565b6105d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105be565b6060604482511015611b5957505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611b756004808551611b6d91906121e1565b859190611ba9565b905080806020019051810190611b8b91906125b0565b9392505050565b6060611ba18484600085611ca5565b949350505050565b606081611bb781601f61255d565b1015611bef576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611bf9828461255d565b84511015611c33576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611c525760405191506000825260208201604052611c9c565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611c8b578051835260209283019201611c73565b5050858452601f01601f1916604052505b50949350505050565b606082471015611d37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105be565b73ffffffffffffffffffffffffffffffffffffffff85163b611db5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105be565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611dde9190612627565b60006040518083038185875af1925050503d8060008114611e1b576040519150601f19603f3d011682016040523d82523d6000602084013e611e20565b606091505b5091509150611e30828286611e3b565b979650505050505050565b60608315611e4a575081611b8b565b825115611e5a5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105be9190612580565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611ee157611ee1611e8e565b60405290565b60405160e0810167ffffffffffffffff81118282101715611ee157611ee1611e8e565b604051601f8201601f1916810167ffffffffffffffff81118282101715611f3357611f33611e8e565b604052919050565b600067ffffffffffffffff821115611f5557611f55611e8e565b50601f01601f191660200190565b600082601f830112611f7457600080fd5b8135611f87611f8282611f3b565b611f0a565b818152846020838601011115611f9c57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611fdd57600080fd5b919050565b8015158114611ff057600080fd5b50565b8035611fdd81611fe2565b6000610140828403121561201157600080fd5b612019611ebd565b905081358152602082013567ffffffffffffffff8082111561203a57600080fd5b61204685838601611f63565b6020840152604084013591508082111561205f57600080fd5b5061206c84828501611f63565b60408301525061207e60608301611fb9565b606082015261208f60808301611fb9565b60808201526120a060a08301611fb9565b60a082015260c082013560c082015260e082013560e08201526101006120c7818401611ff3565b908201526101206120d9838201611ff3565b9082015292915050565b6000602082840312156120f557600080fd5b813567ffffffffffffffff81111561210c57600080fd5b611ba184828501611ffe565b60008060006040848603121561212d57600080fd5b833567ffffffffffffffff8082111561214557600080fd5b61215187838801611ffe565b9450602086013591508082111561216757600080fd5b818601915086601f83011261217b57600080fd5b81358181111561218a57600080fd5b8760208260051b850101111561219f57600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610fbb57610fbb6121b2565b60006020828403121561220657600080fd5b5051919050565b60005b83811015612228578181015183820152602001612210565b50506000910152565b6000815180845261224981602086016020860161220d565b601f01601f19169290920160200192915050565b602081528151602082015260006020830151610140806040850152612286610160850183612231565b91506040850151601f198584030160608601526122a38382612231565b92505060608501516122cd608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206123408187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123b557600080fd5b9190910192915050565b6000602082840312156123d157600080fd5b611b8b82611fb9565b600060e082360312156123ec57600080fd5b6123f4611ee7565b6123fd83611fb9565b815261240b60208401611fb9565b602082015261241c60408401611fb9565b604082015261242d60608401611fb9565b60608201526080830135608082015260a083013567ffffffffffffffff81111561245657600080fd5b61246236828601611f63565b60a08301525061247460c08401611ff3565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124b457600080fd5b83018035915067ffffffffffffffff8211156124cf57600080fd5b6020019150368190038213156124e457600080fd5b9250929050565b600080858511156124fb57600080fd5b8386111561250857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156125555780818660040360031b1b83161692505b505092915050565b80820180821115610fbb57610fbb6121b2565b8183823760009101908152919050565b602081526000611b8b6020830184612231565b6000602082840312156125a557600080fd5b8151611b8b81611fe2565b6000602082840312156125c257600080fd5b815167ffffffffffffffff8111156125d957600080fd5b8201601f810184136125ea57600080fd5b80516125f8611f8282611f3b565b81815285602083850101111561260d57600080fd5b61261e82602083016020860161220d565b95945050505050565b600082516123b581846020870161220d56fea26469706673582212200b71b1cfbbe68b03f90c939b12ffe115af11d83c8319fc0b5a721021c05d119964736f6c63430008110033";
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
