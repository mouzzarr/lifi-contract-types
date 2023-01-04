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
exports.ArbitrumBridgeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IGatewayRouter",
                name: "_gatewayRouter",
                type: "address",
            },
            {
                internalType: "contract IGatewayRouter",
                name: "_inbox",
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
                        internalType: "uint256",
                        name: "maxSubmissionCost",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxGasPrice",
                        type: "uint256",
                    },
                ],
                internalType: "struct ArbitrumBridgeFacet.ArbitrumData",
                name: "_arbitrumData",
                type: "tuple",
            },
        ],
        name: "startBridgeTokensViaArbitrumBridge",
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
                        internalType: "uint256",
                        name: "maxSubmissionCost",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxGasPrice",
                        type: "uint256",
                    },
                ],
                internalType: "struct ArbitrumBridgeFacet.ArbitrumData",
                name: "_arbitrumData",
                type: "tuple",
            },
        ],
        name: "swapAndStartBridgeTokensViaArbitrumBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x60c06040523480156200001157600080fd5b50604051620029e6380380620029e6833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051612918620000ce6000396000610f790152600081816110ce015261114701526129186000f3fe6080604052600436106100295760003560e01c80633cc9517b1461002e578063c9851d0b14610043575b600080fd5b61004161003c366004612305565b610056565b005b6100416100513660046123b1565b6102f3565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761242f565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101758160a001516001600160a01b03161590565b156101ac576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101ea576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610227576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061023b604089013560208a0135612442565b610246908935612459565b90506000610254344761242f565b905061026c8c600001518d60c001518d8d3387610546565b60c08d015260808c01516001600160a01b031661029957818c60c001818151610295919061242f565b9052505b6102ae8c8a846102a9854761242f565b6106a4565b504793506000925050508282116102c65760006102d0565b6102d0838361242f565b905080156102e4576102e46000858361083e565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161036e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061037f344761242f565b905084806101000151156103bf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103fd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866104138160a001516001600160a01b03161590565b1561044a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610488576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104c5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006104d9604089013560208a0135612442565b6104e4908935612459565b90506104f889608001518a60c00151610867565b610504898983346106a4565b50479250600091505082821161051b576000610525565b610525838361242f565b90508015610539576105396000858361083e565b5050600090925550505050565b600083808203610582576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000868661059160018561242f565b8181106105a0576105a061246c565b90506020028101906105b2919061249b565b6105c39060808101906060016124d9565b905060006105d0826109c3565b90506001600160a01b0382166105ed576105ea348261242f565b90505b60006105f98989610a62565b90506106058989610b61565b604080516060810182528c81526001600160a01b0389166020820152908101879052610633818b8b85610bc2565b60008361063f866109c3565b610649919061242f565b90508b811015610694576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b836106ba8160a001516001600160a01b03161590565b156106f1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361072f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361076c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061078386608001516001600160a01b03161590565b905060008161079257846107a1565b60c08701516107a19086612459565b9050808410156107dd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81156107f3576107ee878787610f77565b6107fe565b6107fe87878761108c565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18760405161082d9190612546565b60405180910390a150505050505050565b6001600160a01b0383161561085d5761085883838361122b565b505050565b6108588282611340565b6001600160a01b0382166108b357803410156108af576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036108ed576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa15801561094d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109719190612614565b9050818110156109b7576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161068b565b61085883333085611450565b60006001600160a01b03821615610a5a576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa158015610a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a559190612614565b610a5c565b475b92915050565b60608160008167ffffffffffffffff811115610a8057610a8061209c565b604051908082528060200260200182016040528015610aa9578160200160208202803683370190505b5090506000805b83811015610b5657868682818110610aca57610aca61246c565b9050602002810190610adc919061249b565b610aed9060808101906060016124d9565b9150610af8826109c3565b838281518110610b0a57610b0a61246c565b60209081029190910101526001600160a01b038216610b4e5734838281518110610b3657610b3661246c565b60200260200101818151610b4a919061242f565b9052505b600101610ab0565b509095945050505050565b60005b81811015610858576000838383818110610b8057610b8061246c565b9050602002810190610b92919061249b565b610b9b9061262d565b90508060c0015115610bb957610bb981604001518260800151610867565b50600101610b64565b602084015160408501518491849184908360018114610e905760008686610bea60018561242f565b818110610bf957610bf961246c565b9050602002810190610c0b919061249b565b610c1c9060808101906060016124d9565b9050600089815b81811015610daf57368d8d83818110610c3e57610c3e61246c565b9050602002810190610c50919061249b565b9050610c72610c6560608301604084016124d9565b6001600160a01b03161590565b80610cc85750610cc8610c8b60408301602084016124d9565b6001600160a01b031660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610cdf5750610cdf610c8b60208301836124d9565b8015610d645750610d64610cf660a08301836126d2565b610d059160049160009161273e565b610d0e91612768565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610d9a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610da69082611636565b50600101610c23565b505060005b610dbf60018561242f565b811015610e88576000898983818110610dda57610dda61246c565b9050602002810190610dec919061249b565b610dfd9060808101906060016124d9565b9050836001600160a01b0316816001600160a01b031614610e7f57868281518110610e2a57610e2a61246c565b6020026020010151610e3b826109c3565b610e45919061242f565b925060006001600160a01b03821615610e5f576000610e61565b865b90508315610e7d57610e7d828a610e78848861242f565b61083e565b505b50600101610db4565b505050610f6b565b8760005b81811015610f6857368b8b83818110610eaf57610eaf61246c565b9050602002810190610ec1919061249b565b9050610ed6610c6560608301604084016124d9565b80610eef5750610eef610c8b60408301602084016124d9565b8015610f065750610f06610c8b60208301836124d9565b8015610f1d5750610f1d610cf660a08301836126d2565b610f53576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c51610f5f9082611636565b50600101610e94565b50505b50505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636e6e8a6a828560c00151610fb69190612459565b60a086015160c08701516040805160e086901b7fffffffff000000000000000000000000000000000000000000000000000000001681526001600160a01b0390931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e482015260006101048201526101240160206040518083038185885af1158015611061573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906110869190612614565b50505050565b60808301516040517fbda009fe0000000000000000000000000000000000000000000000000000000081526001600160a01b03808316600483015261114592917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa158015611117573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113b91906127b0565b8560c00151611932565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d2ce7d658285608001518660a001518760c001518760200135886040013589600001356040516020016111b491815260406020820181905260009082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b81526004016111e4969594939291906127cd565b60006040518083038185885af1158015611202573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f191682016040526110869190810190612847565b6001600160a01b03831661126b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156112cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ef9190612614565b905080821115611335576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161068b565b611086848484611a50565b6001600160a01b038216611380576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156113c3576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161068b565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611410576040519150601f19603f3d011682016040523d82523d6000602084013e611415565b606091505b5050905080610858576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038416611490576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b0382166114d0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b03838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611534573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115589190612614565b905061156682868686611af9565b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152849183918516906370a0823190602401602060405180830381865afa1580156115c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ed9190612614565b6115f7919061242f565b1461162e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61164c61164660208301836124d9565b3b151590565b611682576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036116c2576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006116d7610c6560608501604086016124d9565b6116e25760006116e8565b82608001355b905060006117046116ff60608601604087016124d9565b6109c3565b9050600061171b6116ff60808701606088016124d9565b9050826000036117525761175261173860608701604088016124d9565b61174860408801602089016124d9565b8760800135611932565b846080013582101561179d576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161068b565b6000806117ad60208801886124d9565b6001600160a01b0316856117c460a08a018a6126d2565b6040516117d2929190612890565b60006040518083038185875af1925050503d806000811461180f576040519150601f19603f3d011682016040523d82523d6000602084013e611814565b606091505b50915091508161185f57600061182982611b4a565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068b91906128a0565b60006118746116ff60808a0160608b016124d9565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896118a560208b018b6124d9565b6118b560608c0160408d016124d9565b6118c560808d0160608e016124d9565b8c608001358987116118d757866118e1565b6118e18a8861242f565b604080519687526001600160a01b0395861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6001600160a01b03831661194557505050565b6001600160a01b038216611985576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156119ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a129190612614565b905081811015611086576110868484611a4b847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61242f565b611bc8565b6040516001600160a01b0383166024820152604481018290526108589084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611cac565b6040516001600160a01b03808516602483015283166044820152606481018290526110869085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a95565b6060604482511015611b8f57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611bab6004808551611ba3919061242f565b859190611dab565b905080806020019051810190611bc19190612847565b9392505050565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611c32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c569190612614565b611c609190612459565b6040516001600160a01b0385166024820152604481018290529091506110869085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611a95565b6000611d01826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611ea79092919063ffffffff16565b8051909150156108585780806020019051810190611d1f91906128b3565b610858576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161068b565b606081611db981601f612459565b1015611df1576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611dfb8284612459565b84511015611e35576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e545760405191506000825260208201604052611e9e565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611e8d578051835260209283019201611e75565b5050858452601f01601f1916604052505b50949350505050565b6060611eb68484600085611ebe565b949350505050565b606082471015611f50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161068b565b600080866001600160a01b03168587604051611f6c91906128d0565b60006040518083038185875af1925050503d8060008114611fa9576040519150601f19603f3d011682016040523d82523d6000602084013e611fae565b606091505b5091509150611fbf87838387611fca565b979650505050505050565b6060831561205357825160000361204c576001600160a01b0385163b61204c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161068b565b5081611eb6565b611eb683838151156120685781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068b91906128a0565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120ef576120ef61209c565b60405290565b60405160e0810167ffffffffffffffff811182821017156120ef576120ef61209c565b604051601f8201601f1916810167ffffffffffffffff811182821017156121415761214161209c565b604052919050565b600067ffffffffffffffff8211156121635761216361209c565b50601f01601f191660200190565b600082601f83011261218257600080fd5b813561219561219082612149565b612118565b8181528460208386010111156121aa57600080fd5b816020850160208301376000918101602001919091529392505050565b6001600160a01b03811681146121dc57600080fd5b50565b80356121ea816121c7565b919050565b80151581146121dc57600080fd5b80356121ea816121ef565b6000610140828403121561221b57600080fd5b6122236120cb565b905081358152602082013567ffffffffffffffff8082111561224457600080fd5b61225085838601612171565b6020840152604084013591508082111561226957600080fd5b5061227684828501612171565b604083015250612288606083016121df565b6060820152612299608083016121df565b60808201526122aa60a083016121df565b60a082015260c082013560c082015260e082013560e08201526101006122d18184016121fd565b908201526101206122e38382016121fd565b9082015292915050565b6000606082840312156122ff57600080fd5b50919050565b60008060008060a0858703121561231b57600080fd5b843567ffffffffffffffff8082111561233357600080fd5b61233f88838901612208565b9550602087013591508082111561235557600080fd5b818701915087601f83011261236957600080fd5b81358181111561237857600080fd5b8860208260051b850101111561238d57600080fd5b6020830195508094505050506123a686604087016122ed565b905092959194509250565b600080608083850312156123c457600080fd5b823567ffffffffffffffff8111156123db57600080fd5b6123e785828601612208565b9250506123f784602085016122ed565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a5c57610a5c612400565b8082028115828204841417610a5c57610a5c612400565b80820180821115610a5c57610a5c612400565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126124cf57600080fd5b9190910192915050565b6000602082840312156124eb57600080fd5b8135611bc1816121c7565b60005b838110156125115781810151838201526020016124f9565b50506000910152565b600081518084526125328160208601602086016124f6565b601f01601f19169290920160200192915050565b60208152815160208201526000602083015161014080604085015261256f61016085018361251a565b91506040850151601f1985840301606086015261258c838261251a565b92505060608501516125a960808601826001600160a01b03169052565b5060808501516001600160a01b03811660a08601525060a08501516001600160a01b03811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126028187018315159052565b90950151151593019290925250919050565b60006020828403121561262657600080fd5b5051919050565b600060e0823603121561263f57600080fd5b6126476120f5565b612650836121df565b815261265e602084016121df565b602082015261266f604084016121df565b6040820152612680606084016121df565b60608201526080830135608082015260a083013567ffffffffffffffff8111156126a957600080fd5b6126b536828601612171565b60a0830152506126c760c084016121fd565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261270757600080fd5b83018035915067ffffffffffffffff82111561272257600080fd5b60200191503681900382131561273757600080fd5b9250929050565b6000808585111561274e57600080fd5b8386111561275b57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127a85780818660040360031b1b83161692505b505092915050565b6000602082840312156127c257600080fd5b8151611bc1816121c7565b60006001600160a01b03808916835280881660208401525085604083015284606083015283608083015260c060a083015261280b60c083018461251a565b98975050505050505050565b600061282561219084612149565b905082815283838301111561283957600080fd5b611bc18360208301846124f6565b60006020828403121561285957600080fd5b815167ffffffffffffffff81111561287057600080fd5b8201601f8101841361288157600080fd5b611eb684825160208401612817565b8183823760009101908152919050565b602081526000611bc1602083018461251a565b6000602082840312156128c557600080fd5b8151611bc1816121ef565b600082516124cf8184602087016124f656fea2646970667358221220299c0e2e4e1954f4b61888548a6e3834a981182a157f28fcad4feef65a4c29eb64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ArbitrumBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(ArbitrumBridgeFacet__factory, _super);
    function ArbitrumBridgeFacet__factory() {
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
    ArbitrumBridgeFacet__factory.prototype.deploy = function (_gatewayRouter, _inbox, overrides) {
        return _super.prototype.deploy.call(this, _gatewayRouter, _inbox, overrides || {});
    };
    ArbitrumBridgeFacet__factory.prototype.getDeployTransaction = function (_gatewayRouter, _inbox, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _gatewayRouter, _inbox, overrides || {});
    };
    ArbitrumBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ArbitrumBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ArbitrumBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ArbitrumBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ArbitrumBridgeFacet__factory.bytecode = _bytecode;
    ArbitrumBridgeFacet__factory.abi = _abi;
    return ArbitrumBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.ArbitrumBridgeFacet__factory = ArbitrumBridgeFacet__factory;
