"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IThorSwap__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "vault",
                type: "address",
            },
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "memo",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "expiration",
                type: "uint256",
            },
        ],
        name: "depositWithExpiry",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var IThorSwap__factory = /** @class */ (function () {
    function IThorSwap__factory() {
    }
    IThorSwap__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IThorSwap__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IThorSwap__factory.abi = _abi;
    return IThorSwap__factory;
}());
exports.IThorSwap__factory = IThorSwap__factory;
