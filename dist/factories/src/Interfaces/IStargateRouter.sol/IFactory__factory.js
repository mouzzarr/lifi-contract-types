"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFactory__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "getPool",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var IFactory__factory = /** @class */ (function () {
    function IFactory__factory() {
    }
    IFactory__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IFactory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IFactory__factory.abi = _abi;
    return IFactory__factory;
}());
exports.IFactory__factory = IFactory__factory;
