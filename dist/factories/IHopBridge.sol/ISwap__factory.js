"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISwap__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint8",
                name: "tokenIndexFrom",
                type: "uint8",
            },
            {
                internalType: "uint8",
                name: "tokenIndexTo",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "dx",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minDy",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "swap",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var ISwap__factory = /** @class */ (function () {
    function ISwap__factory() {
    }
    ISwap__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ISwap__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ISwap__factory.abi = _abi;
    return ISwap__factory;
}());
exports.ISwap__factory = ISwap__factory;