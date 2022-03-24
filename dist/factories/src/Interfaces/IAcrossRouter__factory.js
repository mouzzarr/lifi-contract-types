"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAcrossRouter__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "l1Recipient",
                type: "address",
            },
            {
                internalType: "address",
                name: "l2Token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "slowRelayFeePct",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "instantRelayFeePct",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "quoteTimestamp",
                type: "uint64",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var IAcrossRouter__factory = /** @class */ (function () {
    function IAcrossRouter__factory() {
    }
    IAcrossRouter__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IAcrossRouter__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IAcrossRouter__factory.abi = _abi;
    return IAcrossRouter__factory;
}());
exports.IAcrossRouter__factory = IAcrossRouter__factory;
