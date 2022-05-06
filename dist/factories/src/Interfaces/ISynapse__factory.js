"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISynapse__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
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
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "depositETH",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var ISynapse__factory = /** @class */ (function () {
    function ISynapse__factory() {
    }
    ISynapse__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ISynapse__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ISynapse__factory.abi = _abi;
    return ISynapse__factory;
}());
exports.ISynapse__factory = ISynapse__factory;
