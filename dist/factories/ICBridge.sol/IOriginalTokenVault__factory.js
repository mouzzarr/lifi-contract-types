"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOriginalTokenVault__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "_mintChainId",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "_mintAccount",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "_mintChainId",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "_mintAccount",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64",
            },
        ],
        name: "depositNative",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var IOriginalTokenVault__factory = /** @class */ (function () {
    function IOriginalTokenVault__factory() {
    }
    IOriginalTokenVault__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IOriginalTokenVault__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IOriginalTokenVault__factory.abi = _abi;
    return IOriginalTokenVault__factory;
}());
exports.IOriginalTokenVault__factory = IOriginalTokenVault__factory;
