"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITransactionManager__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "receivingChainTxManagerAddress",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "user",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "router",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "initiator",
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
                                name: "sendingChainFallback",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "receivingAddress",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "callTo",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "sendingChainId",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "receivingChainId",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "callDataHash",
                                type: "bytes32",
                            },
                            {
                                internalType: "bytes32",
                                name: "transactionId",
                                type: "bytes32",
                            },
                        ],
                        internalType: "struct ITransactionManager.InvariantTransactionData",
                        name: "invariantData",
                        type: "tuple",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "expiry",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "encryptedCallData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "encodedBid",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "bidSignature",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "encodedMeta",
                        type: "bytes",
                    },
                ],
                internalType: "struct ITransactionManager.PrepareArgs",
                name: "args",
                type: "tuple",
            },
        ],
        name: "prepare",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "receivingChainTxManagerAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "user",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "router",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "initiator",
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
                        name: "sendingChainFallback",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receivingAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "callTo",
                        type: "address",
                    },
                    {
                        internalType: "bytes32",
                        name: "callDataHash",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes32",
                        name: "transactionId",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "sendingChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "receivingChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "expiry",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "preparedBlockNumber",
                        type: "uint256",
                    },
                ],
                internalType: "struct ITransactionManager.TransactionData",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
];
var ITransactionManager__factory = /** @class */ (function () {
    function ITransactionManager__factory() {
    }
    ITransactionManager__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ITransactionManager__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ITransactionManager__factory.abi = _abi;
    return ITransactionManager__factory;
}());
exports.ITransactionManager__factory = ITransactionManager__factory;
