"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HopBridge__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "relayerFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "send",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "relayer",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "relayerFee",
                type: "uint256",
            },
        ],
        name: "sendToL2",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var HopBridge__factory = /** @class */ (function () {
    function HopBridge__factory() {
    }
    HopBridge__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    HopBridge__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    HopBridge__factory.abi = _abi;
    return HopBridge__factory;
}());
exports.HopBridge__factory = HopBridge__factory;
