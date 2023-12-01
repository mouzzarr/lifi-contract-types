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
exports.LiFuelFeeCollector__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_owner",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "batchWithdrawFees",
        inputs: [
            {
                name: "tokenAddresses",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "cancelOwnershipTransfer",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "collectNativeGasFees",
        inputs: [
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "collectTokenGasFees",
        inputs: [
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "feeAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "confirmOwnershipTransfer",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "pendingOwner",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "_newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "withdrawFees",
        inputs: [
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "FeesWithdrawn",
        inputs: [
            {
                name: "token",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "GasFeesCollected",
        inputs: [
            {
                name: "token",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "chainId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "receiver",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "feeAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferRequested",
        inputs: [
            {
                name: "_from",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "previousOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "InsufficientBalance",
        inputs: [
            {
                name: "required",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "balance",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "InvalidAmount",
        inputs: [],
    },
    {
        type: "error",
        name: "NativeAssetTransferFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "NewOwnerMustNotBeSelf",
        inputs: [],
    },
    {
        type: "error",
        name: "NoNullOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "NoPendingOwnershipTransfer",
        inputs: [],
    },
    {
        type: "error",
        name: "NoTransferToNullAddress",
        inputs: [],
    },
    {
        type: "error",
        name: "NotEnoughNativeForFees",
        inputs: [],
    },
    {
        type: "error",
        name: "NotPendingOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "NullAddrIsNotAnERC20Token",
        inputs: [],
    },
    {
        type: "error",
        name: "TransferFailure",
        inputs: [],
    },
    {
        type: "error",
        name: "UnAuthorized",
        inputs: [],
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5060405161168038038061168083398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6115ed806100936000396000f3fe6080604052600436106100965760003560e01c80638da5cb5b11610069578063def656691161004e578063def656691461017d578063e30c397814610190578063f2fde38b146101bd57600080fd5b80638da5cb5b14610107578063a7aa0de71461015d57600080fd5b8063164e68de1461009b5780631eacd35f146100bd57806323452b9c146100dd5780637200b829146100f2575b600080fd5b3480156100a757600080fd5b506100bb6100b6366004611379565b6101dd565b005b3480156100c957600080fd5b506100bb6100d836600461139b565b610297565b3480156100e957600080fd5b506100bb61030f565b3480156100fe57600080fd5b506100bb6103d9565b34801561011357600080fd5b506000546101349073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561016957600080fd5b506100bb6101783660046113e1565b6104bf565b6100bb61018b366004611456565b610605565b34801561019c57600080fd5b506001546101349073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101c957600080fd5b506100bb6101d8366004611379565b610672565b60005473ffffffffffffffffffffffffffffffffffffffff16331461022e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610239826107d0565b9050610246823383610889565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200160405180910390a35050565b6102a184846108bf565b8073ffffffffffffffffffffffffffffffffffffffff16828573ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de568660405161030191815260200190565b60405180910390a450505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610360576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103af576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461042b576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610510576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806000805b828110156105fe5761054c85858381811061053257610532611482565b90506020020160208101906105479190611379565b6107d0565b915061057f85858381811061056357610563611482565b90506020020160208101906105789190611379565b3384610889565b3385858381811061059257610592611482565b90506020020160208101906105a79190611379565b73ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa8846040516105ee91815260200190565b60405180910390a3600101610515565b5050505050565b8073ffffffffffffffffffffffffffffffffffffffff1682600073ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de563460405161066691815260200190565b60405180910390a45050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106c3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610710576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361075f576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b600073ffffffffffffffffffffffffffffffffffffffff821615610881576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610858573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087c91906114b1565b610883565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316156108b5576108b0838383610a3a565b505050565b6108b08282610bbc565b806000036108f9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610952578034101561094e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e391906114b1565b905081811015610a2e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6108b083333085610ce6565b73ffffffffffffffffffffffffffffffffffffffff8316610a87576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ad4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610b41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6591906114b1565b905080821115610bab576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a25565b610bb6848484610f00565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c09576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610c4c576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a25565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610ca6576040519150601f19603f3d011682016040523d82523d6000602084013e610cab565b606091505b50509050806108b0576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610d33576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d80576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610df1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1591906114b1565b9050610e2382868686610fd4565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb791906114b1565b610ec191906114ca565b14610ef8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108b09084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611032565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610bb69085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610f52565b6000611094826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166111419092919063ffffffff16565b90508051600014806110b55750808060200190518101906110b59190611504565b6108b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a25565b60606111508484600085611158565b949350505050565b6060824710156111ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a25565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611213919061154a565b60006040518083038185875af1925050503d8060008114611250576040519150601f19603f3d011682016040523d82523d6000602084013e611255565b606091505b509150915061126687838387611271565b979650505050505050565b606083156113075782516000036113005773ffffffffffffffffffffffffffffffffffffffff85163b611300576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a25565b5081611150565b611150838381511561131c5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a259190611566565b803573ffffffffffffffffffffffffffffffffffffffff8116811461137457600080fd5b919050565b60006020828403121561138b57600080fd5b61139482611350565b9392505050565b600080600080608085870312156113b157600080fd5b6113ba85611350565b935060208501359250604085013591506113d660608601611350565b905092959194509250565b600080602083850312156113f457600080fd5b823567ffffffffffffffff8082111561140c57600080fd5b818501915085601f83011261142057600080fd5b81358181111561142f57600080fd5b8660208260051b850101111561144457600080fd5b60209290920196919550909350505050565b6000806040838503121561146957600080fd5b8235915061147960208401611350565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156114c357600080fd5b5051919050565b81810381811115610883577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561151657600080fd5b8151801515811461139457600080fd5b60005b83811015611541578181015183820152602001611529565b50506000910152565b6000825161155c818460208701611526565b9190910192915050565b6020815260008251806020840152611585816040850160208701611526565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122083cdb75f243fcf50e1cbd536a3d3667cd8c1d6150f74c9a9fb0e5a9c2ecdf56764736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var LiFuelFeeCollector__factory = /** @class */ (function (_super) {
    __extends(LiFuelFeeCollector__factory, _super);
    function LiFuelFeeCollector__factory() {
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
    LiFuelFeeCollector__factory.prototype.deploy = function (_owner, overrides) {
        return _super.prototype.deploy.call(this, _owner, overrides || {});
    };
    LiFuelFeeCollector__factory.prototype.getDeployTransaction = function (_owner, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _owner, overrides || {});
    };
    LiFuelFeeCollector__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LiFuelFeeCollector__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LiFuelFeeCollector__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    LiFuelFeeCollector__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    LiFuelFeeCollector__factory.bytecode = _bytecode;
    LiFuelFeeCollector__factory.abi = _abi;
    return LiFuelFeeCollector__factory;
}(ethers_1.ContractFactory));
exports.LiFuelFeeCollector__factory = LiFuelFeeCollector__factory;
