"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAcrossSpokePool__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "address",
                name: "originToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "relayerFeePct",
                type: "uint64",
            },
            {
                internalType: "uint32",
                name: "quoteTimestamp",
                type: "uint32",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var IAcrossSpokePool__factory = /** @class */ (function () {
    function IAcrossSpokePool__factory() {
    }
    IAcrossSpokePool__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IAcrossSpokePool__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IAcrossSpokePool__factory.abi = _abi;
    return IAcrossSpokePool__factory;
}());
exports.IAcrossSpokePool__factory = IAcrossSpokePool__factory;