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
exports.Setter__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "message",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_message",
                type: "string",
            },
        ],
        name: "setMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061040d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063368b87721461003b578063e21f37ce14610050575b600080fd5b61004e61004936600461010e565b61006e565b005b610058610080565b6040516100659190610180565b60405180910390f35b600061007b8284836102bc565b505050565b6000805461008d9061021b565b80601f01602080910402602001604051908101604052809291908181526020018280546100b99061021b565b80156101065780601f106100db57610100808354040283529160200191610106565b820191906000526020600020905b8154815290600101906020018083116100e957829003601f168201915b505050505081565b6000806020838503121561012157600080fd5b823567ffffffffffffffff8082111561013957600080fd5b818501915085601f83011261014d57600080fd5b81358181111561015c57600080fd5b86602082850101111561016e57600080fd5b60209290920196919550909350505050565b600060208083528351808285015260005b818110156101ad57858101830151858201604001528201610191565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600181811c9082168061022f57607f821691505b602082108103610268577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561007b57600081815260208120601f850160051c810160208610156102955750805b601f850160051c820191505b818110156102b4578281556001016102a1565b505050505050565b67ffffffffffffffff8311156102d4576102d46101ec565b6102e8836102e2835461021b565b8361026e565b6000601f84116001811461033a57600085156103045750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556103d0565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156103895786850135825560209485019460019092019101610369565b50868210156103c4577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b505050505056fea2646970667358221220358749d58565b20e3eeb212a67c5082abfb5b60d9a3c5e1ab89e467208f4e2e264736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var Setter__factory = /** @class */ (function (_super) {
    __extends(Setter__factory, _super);
    function Setter__factory() {
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
    Setter__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Setter__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Setter__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Setter__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Setter__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Setter__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Setter__factory.bytecode = _bytecode;
    Setter__factory.abi = _abi;
    return Setter__factory;
}(ethers_1.ContractFactory));
exports.Setter__factory = Setter__factory;