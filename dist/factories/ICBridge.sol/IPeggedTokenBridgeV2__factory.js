"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPeggedTokenBridgeV2__factory = void 0;
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
                name: "_toChainId",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "_toAccount",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64",
            },
        ],
        name: "burn",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
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
                name: "_toChainId",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "_toAccount",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64",
            },
        ],
        name: "burnFrom",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IPeggedTokenBridgeV2__factory = /** @class */ (function () {
    function IPeggedTokenBridgeV2__factory() {
    }
    IPeggedTokenBridgeV2__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IPeggedTokenBridgeV2__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IPeggedTokenBridgeV2__factory.abi = _abi;
    return IPeggedTokenBridgeV2__factory;
}());
exports.IPeggedTokenBridgeV2__factory = IPeggedTokenBridgeV2__factory;
