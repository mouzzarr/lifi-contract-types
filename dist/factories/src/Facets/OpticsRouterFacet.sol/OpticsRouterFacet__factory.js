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
exports.OpticsRouterFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "reason",
                type: "string",
            },
        ],
        name: "CallError",
        type: "error",
    },
    {
        inputs: [],
        name: "NoRemoteRouter",
        type: "error",
    },
    {
        inputs: [],
        name: "Unauthorized",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint32",
                name: "origin",
                type: "uint32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "callee",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "home",
                type: "address",
            },
        ],
        name: "LocalCall",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint32",
                name: "domain",
                type: "uint32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "callee",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RemoteCall",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint32[]",
                name: "domains",
                type: "uint32[]",
            },
            {
                internalType: "address[]",
                name: "routers",
                type: "address[]",
            },
        ],
        name: "batchEnrollRemoteRouters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32[]",
                name: "domains",
                type: "uint32[]",
            },
            {
                internalType: "contract Home[]",
                name: "homes",
                type: "address[]",
            },
        ],
        name: "batchSetRoutes",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "domain",
                type: "uint32",
            },
            {
                internalType: "address",
                name: "router",
                type: "address",
            },
        ],
        name: "enrollRemoteRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "origin",
                type: "uint32",
            },
            {
                internalType: "bytes32",
                name: "sender",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "message",
                type: "bytes",
            },
        ],
        name: "handle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "origin",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
            {
                internalType: "bytes32",
                name: "sender",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "message",
                type: "bytes",
            },
        ],
        name: "handle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "domain",
                type: "uint32",
            },
            {
                internalType: "address",
                name: "callee",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
            },
        ],
        name: "remoteCall",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "domain",
                type: "uint32",
            },
        ],
        name: "routeByDomain",
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
                internalType: "uint32",
                name: "domain",
                type: "uint32",
            },
        ],
        name: "routerByDomain",
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
                internalType: "uint32",
                name: "domain",
                type: "uint32",
            },
            {
                internalType: "contract Home",
                name: "home",
                type: "address",
            },
        ],
        name: "setRoute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610ed0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063814208781161006657806381420878146100e6578063a41b0fc81461013e578063ab2dc3f514610151578063b59f1e2b14610164578063bbad2a4b1461017757600080fd5b806339b6a70d1461009857806356d5d475146100ad578063746ae084146100c0578063800d00b5146100d3575b600080fd5b6100ab6100a63660046109fc565b6101aa565b005b6100ab6100bb366004610bc1565b610263565b6100ab6100ce366004610afa565b6103f6565b6100ab6100e1366004610afa565b610431565b6101226100f4366004610adf565b63ffffffff166000908152600080516020610e7b83398151915260205260409020546001600160a01b031690565b6040516001600160a01b03909116815260200160405180910390f35b6100ab61014c366004610b31565b61047c565b6100ab61015f366004610c18565b6105d8565b6100ab6101723660046109fc565b6105e9565b610122610185366004610adf565b63ffffffff166000908152600080516020610e5b833981519152602052604090205490565b6101b26106ab565b600080516020610e7b83398151915260005b60ff811685111561025b5783838260ff168181106101e4576101e4610e16565b90506020020160208101906101f991906109df565b6001600160a01b0316600183016000888860ff861681811061021d5761021d610e16565b90506020020160208101906102329190610adf565b63ffffffff1681526020810191909152604001600020558061025381610de0565b9150506101c4565b505050505050565b63ffffffff83166000908152600080516020610e5b8339815191526020526040902054600080516020610e7b8339815191529083146102b4576040516282b42960e81b815260040160405180910390fd5b60006102c08382610734565b905060006102de60148086516102d69190610d9d565b869190610799565b90506001600160a01b038216301415610309576040516282b42960e81b815260040160405180910390fd5b600080836001600160a01b0316836040516103249190610cd8565b6000604051808303816000865af19150503d8060008114610361576040519150601f19603f3d011682016040523d82523d6000602084013e610366565b606091505b5091509150816103a157600061037b826108a6565b9050806040516325d2be2360e21b81526004016103989190610cf4565b60405180910390fd5b6040805163ffffffff8a1681526001600160a01b0389811660208301528616917fe54e6aec4f0cda479559ac0bc3585e0c3b7e9196c2ea360867ebf926c7ef7ed9910160405180910390a25050505050505050565b6103fe6106ab565b63ffffffff919091166000908152600080516020610e5b833981519152602052604090206001600160a01b039091169055565b6104396106ab565b63ffffffff919091166000908152600080516020610e7b8339815191526020526040902080546001600160a01b0319166001600160a01b03909216919091179055565b63ffffffff84166000908152600080516020610e5b8339815191526020526040902054600080516020610e7b833981519152906104cc5760405163797c682560e01b815260040160405180910390fd5b63ffffffff851660009081526020828152604080832054600185018352928190205490516001600160a01b039093169263fa31de0192899291610515918a918a918a9101610cac565b6040516020818303038152906040526040518463ffffffff1660e01b815260040161054293929190610d07565b600060405180830381600087803b15801561055c57600080fd5b505af1158015610570573d6000803e3d6000fd5b5050505063ffffffff8516600081815260208381526040918290205482519384526001600160a01b03908116918401919091528616917fa567a7c4b1f606f27e5d945de99b404eee1b97d58557e358901ed4679eb7eef9910160405180910390a25050505050565b6105e3848383610263565b50505050565b6105f16106ab565b600080516020610e7b83398151915260005b60ff811685111561025b5783838260ff1681811061062357610623610e16565b905060200201602081019061063891906109df565b826000888860ff861681811061065057610650610e16565b90506020020160208101906106659190610adf565b63ffffffff168152602081019190915260400160002080546001600160a01b0319166001600160a01b0392909216919091179055806106a381610de0565b915050610603565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146107325760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b6064820152608401610398565b565b6000610741826014610d85565b835110156107895760405162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b6044820152606401610398565b500160200151600160601b900490565b6060816107a781601f610d85565b10156107e65760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610398565b6107f08284610d85565b845110156108345760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610398565b606082158015610853576040519150600082526020820160405261089d565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561088c578051835260209283019201610874565b5050858452601f01601f1916604052505b50949350505050565b60606044825110156108eb57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061090760048085516108ff9190610d9d565b859190610799565b90508080602001905181019061091d9190610a68565b9392505050565b60008083601f84011261093657600080fd5b50813567ffffffffffffffff81111561094e57600080fd5b6020830191508360208260051b850101111561096957600080fd5b9250929050565b600082601f83011261098157600080fd5b813561099461098f82610d5d565b610d2c565b8181528460208386010111156109a957600080fd5b816020850160208301376000918101602001919091529392505050565b803563ffffffff811681146109da57600080fd5b919050565b6000602082840312156109f157600080fd5b813561091d81610e42565b60008060008060408587031215610a1257600080fd5b843567ffffffffffffffff80821115610a2a57600080fd5b610a3688838901610924565b90965094506020870135915080821115610a4f57600080fd5b50610a5c87828801610924565b95989497509550505050565b600060208284031215610a7a57600080fd5b815167ffffffffffffffff811115610a9157600080fd5b8201601f81018413610aa257600080fd5b8051610ab061098f82610d5d565b818152856020838501011115610ac557600080fd5b610ad6826020830160208601610db4565b95945050505050565b600060208284031215610af157600080fd5b61091d826109c6565b60008060408385031215610b0d57600080fd5b610b16836109c6565b91506020830135610b2681610e42565b809150509250929050565b60008060008060608587031215610b4757600080fd5b610b50856109c6565b93506020850135610b6081610e42565b9250604085013567ffffffffffffffff80821115610b7d57600080fd5b818701915087601f830112610b9157600080fd5b813581811115610ba057600080fd5b886020828501011115610bb257600080fd5b95989497505060200194505050565b600080600060608486031215610bd657600080fd5b610bdf846109c6565b925060208401359150604084013567ffffffffffffffff811115610c0257600080fd5b610c0e86828701610970565b9150509250925092565b60008060008060808587031215610c2e57600080fd5b610c37856109c6565b9350610c45602086016109c6565b925060408501359150606085013567ffffffffffffffff811115610c6857600080fd5b610c7487828801610970565b91505092959194509250565b60008151808452610c98816020860160208601610db4565b601f01601f19169290920160200192915050565b6bffffffffffffffffffffffff198460601b168152818360148301376000910160140190815292915050565b60008251610cea818460208701610db4565b9190910192915050565b60208152600061091d6020830184610c80565b63ffffffff84168152826020820152606060408201526000610ad66060830184610c80565b604051601f8201601f1916810167ffffffffffffffff81118282101715610d5557610d55610e2c565b604052919050565b600067ffffffffffffffff821115610d7757610d77610e2c565b50601f01601f191660200190565b60008219821115610d9857610d98610e00565b500190565b600082821015610daf57610daf610e00565b500390565b60005b83811015610dcf578181015183820152602001610db7565b838111156105e35750506000910152565b600060ff821660ff811415610df757610df7610e00565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610e5757600080fd5b5056feaa634c5796dfc39f31cdc2292fae5cae1ae54b472a1ba98023d0c96daadc8bc3aa634c5796dfc39f31cdc2292fae5cae1ae54b472a1ba98023d0c96daadc8bc2a26469706673582212204fa3f8d850a14b192076d7f54432fe7dd8847daa0f276cee938c4a8a9632af7e64736f6c63430008070033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var OpticsRouterFacet__factory = /** @class */ (function (_super) {
    __extends(OpticsRouterFacet__factory, _super);
    function OpticsRouterFacet__factory() {
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
    OpticsRouterFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    OpticsRouterFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    OpticsRouterFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    OpticsRouterFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    OpticsRouterFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    OpticsRouterFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    OpticsRouterFacet__factory.bytecode = _bytecode;
    OpticsRouterFacet__factory.abi = _abi;
    return OpticsRouterFacet__factory;
}(ethers_1.ContractFactory));
exports.OpticsRouterFacet__factory = OpticsRouterFacet__factory;
