"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPool__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "token",
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
var IPool__factory = /** @class */ (function () {
    function IPool__factory() {
    }
    IPool__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IPool__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IPool__factory.abi = _abi;
    return IPool__factory;
}());
exports.IPool__factory = IPool__factory;
