"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibSwap__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "dex",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "fromAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "toAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fromAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "toAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "AssetSwapped",
        type: "event",
    },
];
var _bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203abc11fadcda932246275ca9ccc792f66da8c50a9b81bbfffd0ade88b5e4a0c564736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var LibSwap__factory = /** @class */ (function (_super) {
    __extends(LibSwap__factory, _super);
    function LibSwap__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    LibSwap__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    LibSwap__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    LibSwap__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LibSwap__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LibSwap__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    LibSwap__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    LibSwap__factory.bytecode = _bytecode;
    LibSwap__factory.abi = _abi;
    return LibSwap__factory;
}(ethers_1.ContractFactory));
exports.LibSwap__factory = LibSwap__factory;
