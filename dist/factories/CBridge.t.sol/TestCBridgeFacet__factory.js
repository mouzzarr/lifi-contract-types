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
exports.TestCBridgeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
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
                internalType: "address",
                name: "_dex",
                type: "address",
            },
        ],
        name: "addDex",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_signature",
                type: "bytes4",
            },
        ],
        name: "setFunctionApprovalBySignature",
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
var _bytecode = "0x60a06040523480156200001157600080fd5b5060405162002ca538038062002ca5833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612c03620000a2600039600081816107fa0152818161086701526109220152612c036000f3fe60806040526004361061003f5760003560e01c8063482c6a8514610044578063536db26614610059578063ae0b91e514610079578063c561c1481461008c575b600080fd5b610057610052366004612588565b6100ac565b005b34801561006557600080fd5b50610057610074366004612634565b6102f1565b61005761008736600461264f565b6102fd565b34801561009857600080fd5b506100576100a73660046126c7565b610547565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610127576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101383447612738565b905086806101000151610177576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361024d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361028a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61029f8a600001518b60c001518b8b336105c5565b60c08b01526102ae8a8861070d565b50479150600090508282116102c45760006102ce565b6102ce8383612738565b905080156102e2576102e2600085836109bc565b50506000909255505050505050565b6102fa816109f2565b50565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610378576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103893447612738565b905084806101000151156103c9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610407576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8661042a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610461576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361049f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104dc576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104ee88608001518960c00151610adf565b61050688610501368a90038a018a61274b565b61070d565b504791506000905082821161051c576000610526565b6105268383612738565b9050801561053a5761053a600085836109bc565b5050600090925550505050565b6102fa817fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b600082808203610601576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610610600185612738565b81811061061f5761061f612767565b90506020028101906106319190612796565b610642906080810190606001612634565b9050600061064f82610c55565b905073ffffffffffffffffffffffffffffffffffffffff8216610679576106763482612738565b90505b60006106858888610d0e565b90506106918888610e1a565b61069e8a89898985610e7b565b6000826106aa85610c55565b6106b49190612738565b9050898110156106ff576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b8160e001514667ffffffffffffffff1603610754576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff1661085d5760c082015160a083015160e0840151602084015184516040517f3f2e5fc300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff94851660048201526024810186905267ffffffffffffffff938416604482015292909116606483015263ffffffff1660848201527f000000000000000000000000000000000000000000000000000000000000000090911691633f2e5fc39160a4016000604051808303818588803b15801561083f57600080fd5b505af1158015610853573d6000803e3d6000fd5b5050505050610981565b61089082608001517f00000000000000000000000000000000000000000000000000000000000000008460c0015161122d565b60a0820151608083015160c084015160e0850151602085015185516040517fa5977fbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff96871660048201529486166024860152604485019390935267ffffffffffffffff918216606485015216608483015263ffffffff1660a48201527f00000000000000000000000000000000000000000000000000000000000000009091169063a5977fbb9060c401600060405180830381600087803b15801561096857600080fd5b505af115801561097c573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109b09190612842565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109e8576109e3838383611378565b505050565b6109e382826114a7565b6109fb816115d1565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610a4f575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b73ffffffffffffffffffffffffffffffffffffffff8216610b385780341015610b34576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610b72576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610bdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c039190612955565b905081811015610c49576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106f6565b6109e38333308561166f565b600073ffffffffffffffffffffffffffffffffffffffff821615610d06576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610cdd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d019190612955565b610d08565b475b92915050565b60608160008167ffffffffffffffff811115610d2c57610d2c612282565b604051908082528060200260200182016040528015610d55578160200160208202803683370190505b5090506000805b83811015610e0f57868682818110610d7657610d76612767565b9050602002810190610d889190612796565b610d99906080810190606001612634565b9150610da482610c55565b838281518110610db657610db6612767565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e075734838281518110610def57610def612767565b60200260200101818151610e039190612738565b9052505b600101610d5c565b509095945050505050565b60005b818110156109e3576000838383818110610e3957610e39612767565b9050602002810190610e4b9190612796565b610e549061296e565b90508060c0015115610e7257610e7281604001518260800151610adf565b50600101610e1d565b8383838382600181146111485760008585610e97600185612738565b818110610ea657610ea6612767565b9050602002810190610eb89190612796565b610ec9906080810190606001612634565b9050600089815b8181101561107457368d8d83818110610eeb57610eeb612767565b9050602002810190610efd9190612796565b9050610f2c610f126060830160408401612634565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f8f5750610f8f610f456040830160208401612634565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fa65750610fa6610f456020830183612634565b801561102b575061102b610fbd60a0830183612a13565b610fcc91600491600091612a7f565b610fd591612aa9565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611061576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61106b8f82611889565b50600101610ed0565b505060005b611084600185612738565b81101561114057600088888381811061109f5761109f612767565b90506020028101906110b19190612796565b6110c2906080810190606001612634565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111375785828151811061110957611109612767565b602002602001015161111a82610c55565b6111249190612738565b92508215611137576111378188856109bc565b50600101611079565b505050611221565b8760005b8181101561121e57368b8b8381811061116757611167612767565b90506020028101906111799190612796565b905061118e610f126060830160408401612634565b806111a757506111a7610f456040830160208401612634565b80156111be57506111be610f456020830183612634565b80156111d557506111d5610fbd60a0830183612a13565b61120b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112158d82611889565b5060010161114c565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661124d57505050565b73ffffffffffffffffffffffffffffffffffffffff821661129a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611310573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113349190612955565b90508181101561137257611372848461136d847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612738565b611b9f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166113c5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611432573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114569190612955565b90508082111561149c576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106f6565b611372848484611d1b565b73ffffffffffffffffffffffffffffffffffffffff82166114f4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611537576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106f6565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611591576040519150601f19603f3d011682016040523d82523d6000602084013e611596565b606091505b50509050806109e3576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661161e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b6000036102fa576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166116bc576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611709576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561177a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179e9190612955565b90506117ac82868686611d71565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561181c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118409190612955565b61184a9190612738565b14611881576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61189f6118996020830183612634565b3b151590565b6118d5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611915576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061192a610f126060850160408601612634565b61193557600061193b565b82608001355b905060006119576119526060860160408701612634565b610c55565b9050600061196e6119526080870160608801612634565b9050826000036119a5576119a561198b6060870160408801612634565b61199b6040880160208901612634565b876080013561122d565b84608001358210156119f0576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106f6565b600080611a006020880188612634565b73ffffffffffffffffffffffffffffffffffffffff1685611a2460a08a018a612a13565b604051611a32929190612af1565b60006040518083038185875af1925050503d8060008114611a6f576040519150601f19603f3d011682016040523d82523d6000602084013e611a74565b606091505b509150915081611abf576000611a8982611dcf565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f69190612b01565b6000611ad461195260808a0160608b01612634565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b0560208b018b612634565b611b1560608c0160408d01612634565b611b2560808d0160608e01612634565b8c60800135898711611b375786611b41565b611b418a88612738565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611c16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3a9190612955565b611c449190612b14565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506113729085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611e4d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109e39084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611c99565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113729085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611c99565b6060604482511015611e1457505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611e306004808551611e289190612738565b859190611f59565b905080806020019051810190611e469190612b27565b9392505050565b6000611eaf826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166120739092919063ffffffff16565b8051909150156109e35780806020019051810190611ecd9190612b9e565b6109e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106f6565b606081611f6781601f612b14565b1015611f9f576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611fa98284612b14565b84511015611fe3576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015612002576040519150600082526020820160405261206a565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561203b578051835260209283019201612023565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060612082848460008561208a565b949350505050565b60608247101561211c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106f6565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516121459190612bbb565b60006040518083038185875af1925050503d8060008114612182576040519150601f19603f3d011682016040523d82523d6000602084013e612187565b606091505b5091509150612198878383876121a3565b979650505050505050565b606083156122395782516000036122325773ffffffffffffffffffffffffffffffffffffffff85163b612232576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106f6565b5081612082565b612082838381511561224e5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f69190612b01565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156122d5576122d5612282565b60405290565b60405160e0810167ffffffffffffffff811182821017156122d5576122d5612282565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561234557612345612282565b604052919050565b600067ffffffffffffffff82111561236757612367612282565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126123a457600080fd5b81356123b76123b28261234d565b6122fe565b8181528460208386010111156123cc57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461240d57600080fd5b919050565b80151581146102fa57600080fd5b803561240d81612412565b6000610140828403121561243e57600080fd5b6124466122b1565b905081358152602082013567ffffffffffffffff8082111561246757600080fd5b61247385838601612393565b6020840152604084013591508082111561248c57600080fd5b5061249984828501612393565b6040830152506124ab606083016123e9565b60608201526124bc608083016123e9565b60808201526124cd60a083016123e9565b60a082015260c082013560c082015260e082013560e08201526101006124f4818401612420565b90820152610120612506838201612420565b9082015292915050565b60006040828403121561252257600080fd5b6040516040810167ffffffffffffffff828210818311171561254657612546612282565b816040528293508435915063ffffffff8216821461256357600080fd5b908252602084013590808216821461257a57600080fd5b506020919091015292915050565b6000806000806080858703121561259e57600080fd5b843567ffffffffffffffff808211156125b657600080fd5b6125c28883890161242b565b955060208701359150808211156125d857600080fd5b818701915087601f8301126125ec57600080fd5b8135818111156125fb57600080fd5b8860208260051b850101111561261057600080fd5b6020830195508094505050506126298660408701612510565b905092959194509250565b60006020828403121561264657600080fd5b611e46826123e9565b600080828403606081121561266357600080fd5b833567ffffffffffffffff81111561267a57600080fd5b6126868682870161242b565b93505060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0820112156126b957600080fd5b506020830190509250929050565b6000602082840312156126d957600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611e4657600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610d0857610d08612709565b60006040828403121561275d57600080fd5b611e468383612510565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126127ca57600080fd5b9190910192915050565b60005b838110156127ef5781810151838201526020016127d7565b50506000910152565b600081518084526128108160208601602086016127d4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261286b6101608501836127f8565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526128a683826127f8565b92505060608501516128d0608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129438187018315159052565b90950151151593019290925250919050565b60006020828403121561296757600080fd5b5051919050565b600060e0823603121561298057600080fd5b6129886122db565b612991836123e9565b815261299f602084016123e9565b60208201526129b0604084016123e9565b60408201526129c1606084016123e9565b60608201526080830135608082015260a083013567ffffffffffffffff8111156129ea57600080fd5b6129f636828601612393565b60a083015250612a0860c08401612420565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612a4857600080fd5b83018035915067ffffffffffffffff821115612a6357600080fd5b602001915036819003821315612a7857600080fd5b9250929050565b60008085851115612a8f57600080fd5b83861115612a9c57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612ae95780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611e4660208301846127f8565b80820180821115610d0857610d08612709565b600060208284031215612b3957600080fd5b815167ffffffffffffffff811115612b5057600080fd5b8201601f81018413612b6157600080fd5b8051612b6f6123b28261234d565b818152856020838501011115612b8457600080fd5b612b958260208301602086016127d4565b95945050505050565b600060208284031215612bb057600080fd5b8151611e4681612412565b600082516127ca8184602087016127d456fea26469706673582212204c02c4c4e920ba8572d26e04ebf6737e6af15060162e734a622a1338e431ed5164736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TestCBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(TestCBridgeFacet__factory, _super);
    function TestCBridgeFacet__factory() {
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
    TestCBridgeFacet__factory.prototype.deploy = function (_cBridge, overrides) {
        return _super.prototype.deploy.call(this, _cBridge, overrides || {});
    };
    TestCBridgeFacet__factory.prototype.getDeployTransaction = function (_cBridge, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _cBridge, overrides || {});
    };
    TestCBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TestCBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TestCBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TestCBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TestCBridgeFacet__factory.bytecode = _bytecode;
    TestCBridgeFacet__factory.abi = _abi;
    return TestCBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.TestCBridgeFacet__factory = TestCBridgeFacet__factory;
