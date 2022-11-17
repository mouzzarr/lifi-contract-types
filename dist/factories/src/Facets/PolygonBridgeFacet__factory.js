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
exports.PolygonBridgeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IRootChainManager",
                name: "_rootChainManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "_erc20Predicate",
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
        name: "startBridgeTokensViaPolygonBridge",
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
        name: "swapAndStartBridgeTokensViaPolygonBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x60c06040523480156200001157600080fd5b506040516200288738038062002887833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a0516127af620000d86000396000610776015260008181610650015281816106fd015261081001526127af6000f3fe6080604052600436106100295760003560e01c8063af62c7d61461002e578063b4f3758114610043575b600080fd5b61004161003c3660046121cb565b610056565b005b610041610051366004612200565b610254565b33600061006334476122c9565b905082806101000151156100a3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156100e1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610179576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155608087015160c088015161020c9190610458565b610215876105d8565b60009081905547935091505082821161022f576000610239565b61023983836122c9565b9050801561024d5761024d600085836108b5565b5050505050565b33600061026134476122c9565b9050848061010001516102a0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156102de576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103018160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610338576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610376576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103f1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155885160c08a015161040991908a8a336108e6565b60c08a0152610417896105d8565b60009081905547935091505082821161043157600061043b565b61043b83836122c9565b9050801561044f5761044f600085836108b5565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166104b157803410156104ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036104eb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610558573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057c91906122dc565b9050818110156105c7576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6105d383333085610a29565b505050565b60006105fc826080015173ffffffffffffffffffffffffffffffffffffffff161590565b156106b35760c082015160a08301516040517f4faa8a2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000090911691634faa8a26916024016000604051808303818588803b15801561069557600080fd5b505af11580156106a9573d6000803e3d6000fd5b505050505061087a565b60808201516040517fea60c7c400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169063ea60c7c490602401602060405180830381865afa158015610746573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076a91906122f5565b905061079f82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610c43565b60008260c001516040516020016107b891815260200190565b60408051601f198184030181529082905260a085015160808601517fe3dec8fb00000000000000000000000000000000000000000000000000000000845291935073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263e3dec8fb9261084692918690600401612362565b600060405180830381600087803b15801561086057600080fd5b505af1158015610874573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108a991906123a4565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108dc576105d3838383610d8e565b6105d38282610ebd565b600082808203610922576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856109316001856122c9565b81811061094057610940612499565b905060200281019061095291906124c8565b610963906080810190606001612506565b9050600061097082610fe7565b905073ffffffffffffffffffffffffffffffffffffffff821661099a5761099734826122c9565b90505b60006109a688886110a0565b90506109b288886111ac565b6109bf8a8989898561120d565b6000826109cb85610fe7565b6109d591906122c9565b905089811015610a1b576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016105be565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a76576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ac3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5891906122dc565b9050610b66828686866115bf565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610bd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfa91906122dc565b610c0491906122c9565b14610c3b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c6357505050565b73ffffffffffffffffffffffffffffffffffffffff8216610cb0576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610d26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4a91906122dc565b905081811015610d8857610d888484610d83847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6122c9565b61167d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ddb576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6c91906122dc565b905080821115610eb2576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105be565b610d8884848461177b565b73ffffffffffffffffffffffffffffffffffffffff8216610f0a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f4d576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105be565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610fa7576040519150601f19603f3d011682016040523d82523d6000602084013e610fac565b606091505b50509050806105d3576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611098576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561106f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109391906122dc565b61109a565b475b92915050565b60608160008167ffffffffffffffff8111156110be576110be611f6d565b6040519080825280602002602001820160405280156110e7578160200160208202803683370190505b5090506000805b838110156111a15786868281811061110857611108612499565b905060200281019061111a91906124c8565b61112b906080810190606001612506565b915061113682610fe7565b83828151811061114857611148612499565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611199573483828151811061118157611181612499565b6020026020010181815161119591906122c9565b9052505b6001016110ee565b509095945050505050565b60005b818110156105d35760008383838181106111cb576111cb612499565b90506020028101906111dd91906124c8565b6111e690612523565b90508060c00151156112045761120481604001518260800151610458565b506001016111af565b8383838382600181146114da57600085856112296001856122c9565b81811061123857611238612499565b905060200281019061124a91906124c8565b61125b906080810190606001612506565b9050600089815b8181101561140657368d8d8381811061127d5761127d612499565b905060200281019061128f91906124c8565b90506112be6112a46060830160408401612506565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061132157506113216112d76040830160208401612506565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561133857506113386112d76020830183612506565b80156113bd57506113bd61134f60a08301836125c8565b61135e91600491600091612634565b6113679161265e565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6113f3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113fd8f826117d1565b50600101611262565b505060005b6114166001856122c9565b8110156114d257600088888381811061143157611431612499565b905060200281019061144391906124c8565b611454906080810190606001612506565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114c95785828151811061149b5761149b612499565b60200260200101516114ac82610fe7565b6114b691906122c9565b925082156114c9576114c98188856108b5565b5060010161140b565b5050506115b3565b8760005b818110156115b057368b8b838181106114f9576114f9612499565b905060200281019061150b91906124c8565b90506115206112a46060830160408401612506565b8061153957506115396112d76040830160208401612506565b801561155057506115506112d76020830183612506565b8015611567575061156761134f60a08301836125c8565b61159d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115a78d826117d1565b506001016114de565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d889085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611ae7565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156116f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061171891906122dc565b61172291906126a6565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610d889085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611619565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105d39084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611619565b6117e76117e16020830183612506565b3b151590565b61181d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361185d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118726112a46060850160408601612506565b61187d576000611883565b82608001355b9050600061189f61189a6060860160408701612506565b610fe7565b905060006118b661189a6080870160608801612506565b9050826000036118ed576118ed6118d36060870160408801612506565b6118e36040880160208901612506565b8760800135610c43565b8460800135821015611938576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105be565b6000806119486020880188612506565b73ffffffffffffffffffffffffffffffffffffffff168561196c60a08a018a6125c8565b60405161197a9291906126b9565b60006040518083038185875af1925050503d80600081146119b7576040519150601f19603f3d011682016040523d82523d6000602084013e6119bc565b606091505b509150915081611a075760006119d182611bf3565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105be91906126c9565b6000611a1c61189a60808a0160608b01612506565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a4d60208b018b612506565b611a5d60608c0160408d01612506565b611a6d60808d0160608e01612506565b8c60800135898711611a7f5786611a89565b611a898a886122c9565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b49826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c719092919063ffffffff16565b8051909150156105d35780806020019051810190611b6791906126dc565b6105d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105be565b6060604482511015611c3857505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c546004808551611c4c91906122c9565b859190611c88565b905080806020019051810190611c6a91906126f9565b9392505050565b6060611c808484600085611d84565b949350505050565b606081611c9681601f6126a6565b1015611cce576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611cd882846126a6565b84511015611d12576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d315760405191506000825260208201604052611d7b565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d6a578051835260209283019201611d52565b5050858452601f01601f1916604052505b50949350505050565b606082471015611e16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105be565b73ffffffffffffffffffffffffffffffffffffffff85163b611e94576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105be565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ebd9190612767565b60006040518083038185875af1925050503d8060008114611efa576040519150601f19603f3d011682016040523d82523d6000602084013e611eff565b606091505b5091509150611f0f828286611f1a565b979650505050505050565b60608315611f29575081611c6a565b825115611f395782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105be91906126c9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fc057611fc0611f6d565b60405290565b60405160e0810167ffffffffffffffff81118282101715611fc057611fc0611f6d565b604051601f8201601f1916810167ffffffffffffffff8111828210171561201257612012611f6d565b604052919050565b600067ffffffffffffffff82111561203457612034611f6d565b50601f01601f191660200190565b600082601f83011261205357600080fd5b81356120666120618261201a565b611fe9565b81815284602083860101111561207b57600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146120ba57600080fd5b50565b80356120c881612098565b919050565b80151581146120ba57600080fd5b80356120c8816120cd565b600061014082840312156120f957600080fd5b612101611f9c565b905081358152602082013567ffffffffffffffff8082111561212257600080fd5b61212e85838601612042565b6020840152604084013591508082111561214757600080fd5b5061215484828501612042565b604083015250612166606083016120bd565b6060820152612177608083016120bd565b608082015261218860a083016120bd565b60a082015260c082013560c082015260e082013560e08201526101006121af8184016120db565b908201526101206121c18382016120db565b9082015292915050565b6000602082840312156121dd57600080fd5b813567ffffffffffffffff8111156121f457600080fd5b611c80848285016120e6565b60008060006040848603121561221557600080fd5b833567ffffffffffffffff8082111561222d57600080fd5b612239878388016120e6565b9450602086013591508082111561224f57600080fd5b818601915086601f83011261226357600080fd5b81358181111561227257600080fd5b8760208260051b850101111561228757600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561109a5761109a61229a565b6000602082840312156122ee57600080fd5b5051919050565b60006020828403121561230757600080fd5b8151611c6a81612098565b60005b8381101561232d578181015183820152602001612315565b50506000910152565b6000815180845261234e816020860160208601612312565b601f01601f19169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff80861683528085166020840152506060604083015261239b6060830184612336565b95945050505050565b6020815281516020820152600060208301516101408060408501526123cd610160850183612336565b91506040850151601f198584030160608601526123ea8382612336565b9250506060850151612414608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124878187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126124fc57600080fd5b9190910192915050565b60006020828403121561251857600080fd5b8135611c6a81612098565b600060e0823603121561253557600080fd5b61253d611fc6565b612546836120bd565b8152612554602084016120bd565b6020820152612565604084016120bd565b6040820152612576606084016120bd565b60608201526080830135608082015260a083013567ffffffffffffffff81111561259f57600080fd5b6125ab36828601612042565b60a0830152506125bd60c084016120db565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125fd57600080fd5b83018035915067ffffffffffffffff82111561261857600080fd5b60200191503681900382131561262d57600080fd5b9250929050565b6000808585111561264457600080fd5b8386111561265157600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561269e5780818660040360031b1b83161692505b505092915050565b8082018082111561109a5761109a61229a565b8183823760009101908152919050565b602081526000611c6a6020830184612336565b6000602082840312156126ee57600080fd5b8151611c6a816120cd565b60006020828403121561270b57600080fd5b815167ffffffffffffffff81111561272257600080fd5b8201601f8101841361273357600080fd5b80516127416120618261201a565b81815285602083850101111561275657600080fd5b61239b826020830160208601612312565b600082516124fc81846020870161231256fea26469706673582212202dcc9079953fcdafb8fc618a2955fa70ed5e8f307890e5e502599e58e44c3af564736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var PolygonBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(PolygonBridgeFacet__factory, _super);
    function PolygonBridgeFacet__factory() {
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
    PolygonBridgeFacet__factory.prototype.deploy = function (_rootChainManager, _erc20Predicate, overrides) {
        return _super.prototype.deploy.call(this, _rootChainManager, _erc20Predicate, overrides || {});
    };
    PolygonBridgeFacet__factory.prototype.getDeployTransaction = function (_rootChainManager, _erc20Predicate, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _rootChainManager, _erc20Predicate, overrides || {});
    };
    PolygonBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    PolygonBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    PolygonBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    PolygonBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    PolygonBridgeFacet__factory.bytecode = _bytecode;
    PolygonBridgeFacet__factory.abi = _abi;
    return PolygonBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.PolygonBridgeFacet__factory = PolygonBridgeFacet__factory;
