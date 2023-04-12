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
exports.WithdrawFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "required",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
            },
        ],
        name: "InsufficientBalance",
        type: "error",
    },
    {
        inputs: [],
        name: "NativeAssetTransferFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "NoTransferToNullAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "NotAContract",
        type: "error",
    },
    {
        inputs: [],
        name: "NullAddrIsNotAnERC20Token",
        type: "error",
    },
    {
        inputs: [],
        name: "UnAuthorized",
        type: "error",
    },
    {
        inputs: [],
        name: "WithdrawFailed",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_assetAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "LogWithdraw",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "_callTo",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_callData",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "_assetAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "executeCallAndWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_assetAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610b7e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631458d7ad1461003b578063d9caed1214610050575b600080fd5b61004e610049366004610973565b610063565b005b61004e61005e366004610a24565b6101a6565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100a9576100a96101fc565b6000863b1515806100e6576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff16878760405161010d929190610a65565b6000604051808303816000865af19150503d806000811461014a576040519150601f19603f3d011682016040523d82523d6000602084013e61014f565b606091505b5090925050811561016a5761016585858561029c565b61019c565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101ec576101ec6101fc565b6101f783838361029c565b505050565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610299576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b600073ffffffffffffffffffffffffffffffffffffffff8316156102c057826102c2565b335b90506102cf848284610328565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff83161561034f576101f7838383610359565b6101f78282610493565b73ffffffffffffffffffffffffffffffffffffffff83166103a6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610413573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104379190610a75565b905080821115610482576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61048d8484846105bd565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166104e0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610523576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610479565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461057d576040519150601f19603f3d011682016040523d82523d6000602084013e610582565b606091505b50509050806101f7576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401526101f792869291600091610688918516908490610732565b8051909150156101f757808060200190518101906106a69190610a8e565b6101f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610479565b60606107418484600085610749565b949350505050565b6060824710156107db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610479565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108049190610adb565b60006040518083038185875af1925050503d8060008114610841576040519150601f19603f3d011682016040523d82523d6000602084013e610846565b606091505b509150915061085787838387610862565b979650505050505050565b606083156108f85782516000036108f15773ffffffffffffffffffffffffffffffffffffffff85163b6108f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610479565b5081610741565b610741838381511561090d5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104799190610af7565b73ffffffffffffffffffffffffffffffffffffffff8116811461029957600080fd5b803561096e81610941565b919050565b60008060008060008060a0878903121561098c57600080fd5b863561099781610941565b9550602087013567ffffffffffffffff808211156109b457600080fd5b818901915089601f8301126109c857600080fd5b8135818111156109d757600080fd5b8a60208285010111156109e957600080fd5b6020830197508096505050506040870135610a0381610941565b9250610a1160608801610963565b9150608087013590509295509295509295565b600080600060608486031215610a3957600080fd5b8335610a4481610941565b92506020840135610a5481610941565b929592945050506040919091013590565b8183823760009101908152919050565b600060208284031215610a8757600080fd5b5051919050565b600060208284031215610aa057600080fd5b81518015158114610ab057600080fd5b9392505050565b60005b83811015610ad2578181015183820152602001610aba565b50506000910152565b60008251610aed818460208701610ab7565b9190910192915050565b6020815260008251806020840152610b16816040850160208701610ab7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220b19f8adae6b456918f71d590a57079f73abeff2462dcb013d426b04a68dfc69964736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var WithdrawFacet__factory = /** @class */ (function (_super) {
    __extends(WithdrawFacet__factory, _super);
    function WithdrawFacet__factory() {
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
    WithdrawFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    WithdrawFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    WithdrawFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    WithdrawFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    WithdrawFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    WithdrawFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    WithdrawFacet__factory.bytecode = _bytecode;
    WithdrawFacet__factory.abi = _abi;
    return WithdrawFacet__factory;
}(ethers_1.ContractFactory));
exports.WithdrawFacet__factory = WithdrawFacet__factory;
