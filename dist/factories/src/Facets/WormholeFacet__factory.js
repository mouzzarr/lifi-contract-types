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
exports.WormholeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "bridge",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "chainId",
                type: "uint64",
            },
        ],
        name: "Inited",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "LiFiTransferCompleted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "string",
                name: "integrator",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "referrer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sendingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "LiFiTransferConfirmed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "string",
                name: "integrator",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "referrer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sendingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "LiFiTransferRefunded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "string",
                name: "integrator",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "referrer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sendingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "LiFiTransferStarted",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newRouter",
                type: "address",
            },
        ],
        name: "changeWormholeRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_wormholeRouter",
                type: "address",
            },
        ],
        name: "initWormhole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "transactionId",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "integrator",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "referrer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receivingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct ILiFi.LiFiData",
                name: "_lifiData",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "toChainId",
                        type: "uint16",
                    },
                    {
                        internalType: "uint32",
                        name: "nonce",
                        type: "uint32",
                    },
                ],
                internalType: "struct WormholeFacet.WormholeData",
                name: "_wormholeData",
                type: "tuple",
            },
        ],
        name: "startBridgeTokensViaWormhole",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "transactionId",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "integrator",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "referrer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receivingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct ILiFi.LiFiData",
                name: "_lifiData",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "callTo",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "approveTo",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receivingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "fromAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct LibSwap.SwapData[]",
                name: "_swapData",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "toChainId",
                        type: "uint16",
                    },
                    {
                        internalType: "uint32",
                        name: "nonce",
                        type: "uint32",
                    },
                ],
                internalType: "struct WormholeFacet.WormholeData",
                name: "_wormholeData",
                type: "tuple",
            },
        ],
        name: "swapAndStartBridgeTokensViaWormhole",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061142e806100206000396000f3fe60806040526004361061003f5760003560e01c80632c4e0ccc146100445780639081b8691461004457806390a6259914610066578063e2ea2b1914610079575b600080fd5b34801561005057600080fd5b5061006461005f366004610f76565b61008c565b005b61006461007436600461102a565b6100d5565b6100646100873660046110d6565b610237565b7ffa6ac87476d86fd4b0d4dd698eea8ab3feb975d02a087fbaa25457a8b2cc39f26100b561032c565b80546001600160a01b0319166001600160a01b0392909216919091179055565b60006100e482600001516103b5565b905060005b60ff811684111561013857855161012690868660ff851681811061010f5761010f6113cc565b905060200281019061012191906112a2565b61044a565b8061013081611396565b9150506100e9565b5081602001518161014c84600001516103b5565b6101569190611353565b101561017d5760405162461bcd60e51b815260040161017490611228565b60405180910390fd5b60008161018d84600001516103b5565b6101979190611353565b9050600081116101b95760405162461bcd60e51b815260040161017490611228565b602083018190526101c983610638565b85600001517f3b254a352757de129783dc1fcdea65d20e49fc091f974551e1dcb4afbf1fdc468760200151886040015189606001518a608001518b60a001518c60e001518d60c00151426040516102279897969594939291906111d0565b60405180910390a2505050505050565b600061024e6102496020840184610f76565b6103b5565b905061026c6102606020840184610f76565b33308560200135610780565b602082018035908290610283906102499086610f76565b61028d9190611353565b146102aa5760405162461bcd60e51b815260040161017490611228565b6102c16102bc36849003840184611130565b610638565b82600001517f3b254a352757de129783dc1fcdea65d20e49fc091f974551e1dcb4afbf1fdc4684602001518560400151866060015187608001518860a001518960e001518a60c001514260405161031f9897969594939291906111d0565b60405180910390a2505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146103b35760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b6064820152608401610174565b565b60006001600160a01b03821615610442576040516370a0823160e01b81523060048201526001600160a01b038316906370a082319060240160206040518083038186803b15801561040557600080fd5b505afa158015610419573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043d919061114c565b610444565b475b92915050565b60808101803590600090610465906102499060608601610f76565b905060006104796060850160408601610f76565b90506001600160a01b0381161515801561049a575082610498826103b5565b105b156104ab576104ab81333086610780565b6001600160a01b038116156104d4576104d4816104ce6040870160208801610f76565b85610792565b6000806104e46020870187610f76565b6001600160a01b0316346104fb60a0890189611254565b604051610509929190611191565b60006040518083038185875af1925050503d8060008114610546576040519150601f19603f3d011682016040523d82523d6000602084013e61054b565b606091505b50915091508161057c57600061056082610851565b90508060405162461bcd60e51b815260040161017491906111bd565b836105906102496080890160608a01610f76565b61059a9190611353565b93507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38876105cb6020890189610f76565b6105db60608a0160408b01610f76565b6105eb60808b0160608c01610f76565b604080519485526001600160a01b0393841660208601529183168483015290911660608301526080820188905260a082018790524260c0830152519081900360e00190a150505050505050565b60007ffa6ac87476d86fd4b0d4dd698eea8ab3feb975d02a087fbaa25457a8b2cc39f29050816060015161ffff164614156106c05760405162461bcd60e51b815260206004820152602260248201527f43616e6e6f742062726964676520746f207468652073616d65206e6574776f72604482015261359760f11b6064820152608401610174565b8151815460208401516106dd92916001600160a01b031690610792565b80548251602084015160608501516040808701516080880151915162f5287b60e41b81526001600160a01b039586166004820152602481019490945261ffff909216604484015290831660648301526000608483015263ffffffff1660a4820152911690630f5287b09060c401600060405180830381600087803b15801561076457600080fd5b505af1158015610778573d6000803e3d6000fd5b505050505050565b61078c848484846108cf565b50505050565b6001600160a01b0383166107a557505050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e9060440160206040518083038186803b1580156107f057600080fd5b505afa158015610804573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610828919061114c565b90508181101561078c578015610844576108448484600061093a565b61078c848460001961093a565b606060448251101561089657505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b60006108b260048085516108aa9190611353565b859190610a63565b9050808060200190518101906108c89190610fb3565b9392505050565b6040516001600160a01b038085166024830152831660448201526064810182905261078c9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610b70565b8015806109c35750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561098957600080fd5b505afa15801561099d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c1919061114c565b155b610a2e5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610174565b6040516001600160a01b038316602482015260448101829052610a5e90849063095ea7b360e01b90606401610903565b505050565b606081610a7181601f61133b565b1015610ab05760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610174565b610aba828461133b565b84511015610afe5760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610174565b606082158015610b1d5760405191506000825260208201604052610b67565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610b56578051835260209283019201610b3e565b5050858452601f01601f1916604052505b50949350505050565b6000610bc5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610c429092919063ffffffff16565b805190915015610a5e5780806020019051810190610be39190610f91565b610a5e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610174565b6060610c518484600085610c59565b949350505050565b606082471015610cba5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610174565b843b610d085760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610174565b600080866001600160a01b03168587604051610d2491906111a1565b60006040518083038185875af1925050503d8060008114610d61576040519150601f19603f3d011682016040523d82523d6000602084013e610d66565b606091505b5091509150610d76828286610d81565b979650505050505050565b60608315610d905750816108c8565b825115610da05782518084602001fd5b8160405162461bcd60e51b815260040161017491906111bd565b80356001600160a01b0381168114610dd157600080fd5b919050565b600082601f830112610de757600080fd5b8135610dfa610df582611313565b6112e2565b818152846020838601011115610e0f57600080fd5b816020850160208301376000918101602001919091529392505050565b60006101008284031215610e3f57600080fd5b610e476112b8565b905081358152602082013567ffffffffffffffff811115610e6757600080fd5b610e7384828501610dd6565b602083015250610e8560408301610dba565b6040820152610e9660608301610dba565b6060820152610ea760808301610dba565b6080820152610eb860a08301610dba565b60a082015260c082013560c082015260e082013560e082015292915050565b600060a08284031215610ee957600080fd5b60405160a0810181811067ffffffffffffffff82111715610f0c57610f0c6113e2565b604052905080610f1b83610dba565b815260208301356020820152610f3360408401610dba565b6040820152606083013561ffff81168114610f4d57600080fd5b6060820152608083013563ffffffff81168114610f6957600080fd5b6080919091015292915050565b600060208284031215610f8857600080fd5b6108c882610dba565b600060208284031215610fa357600080fd5b815180151581146108c857600080fd5b600060208284031215610fc557600080fd5b815167ffffffffffffffff811115610fdc57600080fd5b8201601f81018413610fed57600080fd5b8051610ffb610df582611313565b81815285602083850101111561101057600080fd5b61102182602083016020860161136a565b95945050505050565b60008060008060e0858703121561104057600080fd5b843567ffffffffffffffff8082111561105857600080fd5b61106488838901610e2c565b9550602087013591508082111561107a57600080fd5b818701915087601f83011261108e57600080fd5b81358181111561109d57600080fd5b8860208260051b85010111156110b257600080fd5b6020830195508094505050506110cb8660408701610ed7565b905092959194509250565b60008082840360c08112156110ea57600080fd5b833567ffffffffffffffff81111561110157600080fd5b61110d86828701610e2c565b93505060a0601f198201121561112257600080fd5b506020830190509250929050565b600060a0828403121561114257600080fd5b6108c88383610ed7565b60006020828403121561115e57600080fd5b5051919050565b6000815180845261117d81602086016020860161136a565b601f01601f19169290920160200192915050565b8183823760009101908152919050565b600082516111b381846020870161136a565b9190910192915050565b6020815260006108c86020830184611165565b60006101008083526111e48184018c611165565b6001600160a01b039a8b166020850152988a1660408401525050948716606086015292909516608084015260a083015260c082019390935260e00191909152919050565b60208082526012908201527111549497d253959053125117d05353d5539560721b604082015260600190565b6000808335601e1984360301811261126b57600080fd5b83018035915067ffffffffffffffff82111561128657600080fd5b60200191503681900382131561129b57600080fd5b9250929050565b6000823560be198336030181126111b357600080fd5b604051610100810167ffffffffffffffff811182821017156112dc576112dc6113e2565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561130b5761130b6113e2565b604052919050565b600067ffffffffffffffff82111561132d5761132d6113e2565b50601f01601f191660200190565b6000821982111561134e5761134e6113b6565b500190565b600082821015611365576113656113b6565b500390565b60005b8381101561138557818101518382015260200161136d565b8381111561078c5750506000910152565b600060ff821660ff8114156113ad576113ad6113b6565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220531ddf48990f86d83757f88525b7869b375b629a78d20c163a9cc8fcd334569d64736f6c63430008070033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var WormholeFacet__factory = /** @class */ (function (_super) {
    __extends(WormholeFacet__factory, _super);
    function WormholeFacet__factory() {
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
    WormholeFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    WormholeFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    WormholeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    WormholeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    WormholeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    WormholeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    WormholeFacet__factory.bytecode = _bytecode;
    WormholeFacet__factory.abi = _abi;
    return WormholeFacet__factory;
}(ethers_1.ContractFactory));
exports.WormholeFacet__factory = WormholeFacet__factory;
