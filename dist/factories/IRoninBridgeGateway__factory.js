"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRoninBridgeGateway__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "recipientAddr",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "tokenAddr",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "enum IRoninBridgeGateway.Standard",
                                name: "erc",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256",
                                name: "id",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quantity",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct IRoninBridgeGateway.Info",
                        name: "info",
                        type: "tuple",
                    },
                ],
                internalType: "struct IRoninBridgeGateway.Request",
                name: "_request",
                type: "tuple",
            },
        ],
        name: "requestDepositFor",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var IRoninBridgeGateway__factory = /** @class */ (function () {
    function IRoninBridgeGateway__factory() {
    }
    IRoninBridgeGateway__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IRoninBridgeGateway__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IRoninBridgeGateway__factory.abi = _abi;
    return IRoninBridgeGateway__factory;
}());
exports.IRoninBridgeGateway__factory = IRoninBridgeGateway__factory;