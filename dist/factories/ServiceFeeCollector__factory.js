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
exports.ServiceFeeCollector__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
        name: "InvalidAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "NativeAssetTransferFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "NewOwnerMustNotBeSelf",
        type: "error",
    },
    {
        inputs: [],
        name: "NoNullOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "NoPendingOwnershipTransfer",
        type: "error",
    },
    {
        inputs: [],
        name: "NoTransferToNullAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "NotEnoughNativeForFees",
        type: "error",
    },
    {
        inputs: [],
        name: "NotPendingOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "NullAddrIsNotAnERC20Token",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferFailure",
        type: "error",
    },
    {
        inputs: [],
        name: "UnAuthorized",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "FeesWithdrawn",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "feeAmount",
                type: "uint256",
            },
        ],
        name: "GasFeesCollected",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "feeAmount",
                type: "uint256",
            },
        ],
        name: "InsuranceFeesCollected",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
        ],
        name: "OwnershipTransferRequested",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "tokenAddresses",
                type: "address[]",
            },
        ],
        name: "batchWithdrawFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "cancelOwnershipTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "feeAmount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
        ],
        name: "collectNativeGasFees",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "feeAmount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
        ],
        name: "collectNativeInsuranceFees",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "feeAmount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
        ],
        name: "collectTokenGasFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "feeAmount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
        ],
        name: "collectTokenInsuranceFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "confirmOwnershipTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
    {
        inputs: [],
        name: "pendingOwner",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "_newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
        ],
        name: "withdrawFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5060405161193938038061193983398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6118a6806100936000396000f3fe6080604052600436106100bc5760003560e01c8063a7aa0de711610074578063def656691161004e578063def65669146101d6578063e30c3978146101e9578063f2fde38b1461021657600080fd5b8063a7aa0de714610183578063c6aabf84146101a3578063dd343700146101c357600080fd5b806323452b9c116100a557806323452b9c146101035780637200b829146101185780638da5cb5b1461012d57600080fd5b806304204ceb146100c1578063164e68de146100e3575b600080fd5b3480156100cd57600080fd5b506100e16100dc36600461159f565b610236565b005b3480156100ef57600080fd5b506100e16100fe3660046115db565b6102ac565b34801561010f57600080fd5b506100e1610366565b34801561012457600080fd5b506100e1610430565b34801561013957600080fd5b5060005461015a9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561018f57600080fd5b506100e161019e36600461162c565b610516565b3480156101af57600080fd5b506100e16101be36600461159f565b61064b565b6100e16101d136600461170f565b6106b4565b6100e16101e436600461170f565b6107d1565b3480156101f557600080fd5b5060015461015a9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561022257600080fd5b506100e16102313660046115db565b6108ee565b6102408383610a4c565b8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f210b115d53f0b6b33d55bde55dafbe7cb8596c936f73ffa55c2b758e68f250078460405161029f91815260200190565b60405180910390a3505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102fd576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061030882610bcc565b9050610315823383610c85565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200160405180910390a35050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103b7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610406576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610482576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610567576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516000805b828110156106455761059784828151811061058a5761058a61173b565b6020026020010151610bcc565b91506105bd8482815181106105ae576105ae61173b565b60200260200101513384610c85565b3373ffffffffffffffffffffffffffffffffffffffff168482815181106105e6576105e661173b565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa88460405161063591815260200190565b60405180910390a360010161056d565b50505050565b6106558383610a4c565b8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f3d6c2b3381a1d543f3272a61e4fb9b05f25e654572839e269a091b0d2308ec2d8460405161029f91815260200190565b813410156106ee576040517f840a2adf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006106fa833461176a565b9050801561078657604051600090339083908381818185875af1925050503d8060008114610744576040519150601f19603f3d011682016040523d82523d6000602084013e610749565b606091505b5050905080610784576040517ff7e6817a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b60405183815273ffffffffffffffffffffffffffffffffffffffff8316906000907f3d6c2b3381a1d543f3272a61e4fb9b05f25e654572839e269a091b0d2308ec2d9060200161029f565b8134101561080b576040517f840a2adf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610817833461176a565b905080156108a357604051600090339083908381818185875af1925050503d8060008114610861576040519150601f19603f3d011682016040523d82523d6000602084013e610866565b606091505b50509050806108a1576040517ff7e6817a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b60405183815273ffffffffffffffffffffffffffffffffffffffff8316906000907f210b115d53f0b6b33d55bde55dafbe7cb8596c936f73ffa55c2b758e68f250079060200161029f565b60005473ffffffffffffffffffffffffffffffffffffffff16331461093f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661098c576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036109db576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff8216610aa55780341015610aa1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610adf576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7091906117a4565b905081811015610bbb576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610bc783333085610cb6565b505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610c7d576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7891906117a4565b610c7f565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff831615610cac57610bc7838383610ed0565b610bc78282610fff565b73ffffffffffffffffffffffffffffffffffffffff8416610d03576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d50576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610dc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de591906117a4565b9050610df382868686611129565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8791906117a4565b610e91919061176a565b14610ec8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f1d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fae91906117a4565b905080821115610ff4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610bb2565b610645848484611205565b73ffffffffffffffffffffffffffffffffffffffff821661104c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561108f576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610bb2565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110e9576040519150601f19603f3d011682016040523d82523d6000602084013e6110ee565b606091505b5050905080610bc7576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526106459085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261125b565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610bc79084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611183565b60006112bd826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113679092919063ffffffff16565b805190915015610bc757808060200190518101906112db91906117bd565b610bc7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610bb2565b6060611376848460008561137e565b949350505050565b606082471015611410576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610bb2565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114399190611803565b60006040518083038185875af1925050503d8060008114611476576040519150601f19603f3d011682016040523d82523d6000602084013e61147b565b606091505b509150915061148c87838387611497565b979650505050505050565b6060831561152d5782516000036115265773ffffffffffffffffffffffffffffffffffffffff85163b611526576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610bb2565b5081611376565b61137683838151156115425781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb2919061181f565b803573ffffffffffffffffffffffffffffffffffffffff8116811461159a57600080fd5b919050565b6000806000606084860312156115b457600080fd5b6115bd84611576565b9250602084013591506115d260408501611576565b90509250925092565b6000602082840312156115ed57600080fd5b6115f682611576565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602080838503121561163f57600080fd5b823567ffffffffffffffff8082111561165757600080fd5b818501915085601f83011261166b57600080fd5b81358181111561167d5761167d6115fd565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810181811085821117156116c0576116c06115fd565b6040529182528482019250838101850191888311156116de57600080fd5b938501935b82851015611703576116f485611576565b845293850193928501926116e3565b98975050505050505050565b6000806040838503121561172257600080fd5b8235915061173260208401611576565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b81810381811115610c7f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156117b657600080fd5b5051919050565b6000602082840312156117cf57600080fd5b815180151581146115f657600080fd5b60005b838110156117fa5781810151838201526020016117e2565b50506000910152565b600082516118158184602087016117df565b9190910192915050565b602081526000825180602084015261183e8160408501602087016117df565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220a240cdc37a2b7d5c8b81905e6a2cee243be096dd12bd4fd2f565485299e99dac64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ServiceFeeCollector__factory = /** @class */ (function (_super) {
    __extends(ServiceFeeCollector__factory, _super);
    function ServiceFeeCollector__factory() {
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
    ServiceFeeCollector__factory.prototype.deploy = function (_owner, overrides) {
        return _super.prototype.deploy.call(this, _owner, overrides || {});
    };
    ServiceFeeCollector__factory.prototype.getDeployTransaction = function (_owner, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _owner, overrides || {});
    };
    ServiceFeeCollector__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ServiceFeeCollector__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ServiceFeeCollector__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ServiceFeeCollector__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ServiceFeeCollector__factory.bytecode = _bytecode;
    ServiceFeeCollector__factory.abi = _abi;
    return ServiceFeeCollector__factory;
}(ethers_1.ContractFactory));
exports.ServiceFeeCollector__factory = ServiceFeeCollector__factory;
