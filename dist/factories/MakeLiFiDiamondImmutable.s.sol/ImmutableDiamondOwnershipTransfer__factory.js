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
exports.ImmutableDiamondOwnershipTransfer__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "transferOwnershipToZeroAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x6080604052348015600f57600080fd5b5061012f8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806358819abf14602d575b600080fd5b60336035565b005b603d6000603f565b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff8481169182179093556040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350505056fea26469706673582212204883e9eacd6a6b1d82acbdc4450704ddcb0266494d1888c97b6cce417ba1a1d264736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ImmutableDiamondOwnershipTransfer__factory = /** @class */ (function (_super) {
    __extends(ImmutableDiamondOwnershipTransfer__factory, _super);
    function ImmutableDiamondOwnershipTransfer__factory() {
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
    ImmutableDiamondOwnershipTransfer__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ImmutableDiamondOwnershipTransfer__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ImmutableDiamondOwnershipTransfer__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ImmutableDiamondOwnershipTransfer__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ImmutableDiamondOwnershipTransfer__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ImmutableDiamondOwnershipTransfer__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ImmutableDiamondOwnershipTransfer__factory.bytecode = _bytecode;
    ImmutableDiamondOwnershipTransfer__factory.abi = _abi;
    return ImmutableDiamondOwnershipTransfer__factory;
}(ethers_1.ContractFactory));
exports.ImmutableDiamondOwnershipTransfer__factory = ImmutableDiamondOwnershipTransfer__factory;
