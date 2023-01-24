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
exports.LibBytes__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "AddressOutOfBounds",
        type: "error",
    },
    {
        inputs: [],
        name: "SliceOutOfBounds",
        type: "error",
    },
    {
        inputs: [],
        name: "SliceOverflow",
        type: "error",
    },
    {
        inputs: [],
        name: "UintOutOfBounds",
        type: "error",
    },
];
var _bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b98ca003ee0b8a0599e09f418c83fe4c7bcbd6c3cb73314703f8bb2ed64ceca764736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var LibBytes__factory = /** @class */ (function (_super) {
    __extends(LibBytes__factory, _super);
    function LibBytes__factory() {
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
    LibBytes__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    LibBytes__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    LibBytes__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LibBytes__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LibBytes__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    LibBytes__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    LibBytes__factory.bytecode = _bytecode;
    LibBytes__factory.abi = _abi;
    return LibBytes__factory;
}(ethers_1.ContractFactory));
exports.LibBytes__factory = LibBytes__factory;
