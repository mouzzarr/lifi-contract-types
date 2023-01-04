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
exports.AxelarFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IAxelarGateway",
                name: "_gateway",
                type: "address",
            },
            {
                internalType: "contract IAxelarGasService",
                name: "_gasService",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "InvalidAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidDestinationChain",
        type: "error",
    },
    {
        inputs: [],
        name: "NativeAssetNotSupported",
        type: "error",
    },
    {
        inputs: [],
        name: "NoTransferToNullAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "NullAddrIsNotAValidSpender",
        type: "error",
    },
    {
        inputs: [],
        name: "NullAddrIsNotAnERC20Token",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyContractOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "RecoveryAddressCannotBeZero",
        type: "error",
    },
    {
        inputs: [],
        name: "ReentrancyError",
        type: "error",
    },
    {
        inputs: [],
        name: "SymbolDoesNotExist",
        type: "error",
    },
    {
        inputs: [],
        name: "TokenNotSupported",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "chainID",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "chainName",
                type: "string",
            },
        ],
        name: "ChainNameRegistered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "destinationChain",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "callTo",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "callData",
                type: "bytes",
            },
        ],
        name: "LifiXChainTXStarted",
        type: "event",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "destinationChain",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "destinationAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "callTo",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct AxelarFacet.AxelarCallParameters",
                name: "params",
                type: "tuple",
            },
        ],
        name: "executeCallViaAxelar",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "destinationChain",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "destinationAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "callTo",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct AxelarFacet.AxelarCallParameters",
                name: "params",
                type: "tuple",
            },
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
                name: "recoveryAddress",
                type: "address",
            },
        ],
        name: "executeCallWithTokenViaAxelar",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_chainId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
        ],
        name: "setChainName",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60c06040523480156200001157600080fd5b5060405162001ec938038062001ec9833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051611de3620000e66000396000818161083c0152610d9c015260008181610290015281816103670152818161051601526109080152611de36000f3fe6080604052600436106100345760003560e01c806313045b0f14610039578063733499c91461004e578063aeb116de1461006e575b600080fd5b61004c6100473660046115f5565b610081565b005b34801561005a57600080fd5b5061004c610069366004611661565b610602565b61004c61007c3660046116dd565b610686565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b8054600019016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815573ffffffffffffffffffffffffffffffffffffffff821661012f576040517fb897c40100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661017c576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b826000036101b6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610203573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261022b9190810190611765565b6040517f935b13f60000000000000000000000000000000000000000000000000000000081529091507fc7ba6016a551f7f07fd4821271b8773baf38cf0831912878e266bac50e0e4a9c9060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063935b13f6906102c5908690600401611833565b602060405180830381865afa1580156102e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103069190611846565b905073ffffffffffffffffffffffffffffffffffffffff8116610355576040517f3dd1b30500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610361813330896109ef565b61038c817f000000000000000000000000000000000000000000000000000000000000000088610c09565b50600061039f6060890160408a01611863565b856103ad60608b018b611880565b6040516020016103c094939291906118ec565b60408051601f19818403018152918152893560009081526020859052908120805492935090916103ef9061193c565b80601f016020809104026020016040519081016040528092919081815260200182805461041b9061193c565b80156104685780601f1061043d57610100808354040283529160200191610468565b820191906000526020600020905b81548152906001019060200180831161044b57829003601f168201915b5050505050905080516000036104aa576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006104c46104bf60408c0160208d01611863565b610d36565b905034156104d9576104d98282878b87610d5f565b6040517fb541708400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063b541708490610553908590859088908b908f90600401611989565b600060405180830381600087803b15801561056d57600080fd5b505af1158015610581573d6000803e3d6000fd5b506105969250505060608b0160408c01611863565b73ffffffffffffffffffffffffffffffffffffffff168a357f996a41bee9ee9168b98274120b734982197c51aedd142b1fb9e5fa103f25459f6105dc60608e018e611880565b6040516105ea929190611a14565b60405180910390a35050600090935550505050505050565b61060a610e18565b60008381527fc7ba6016a551f7f07fd4821271b8773baf38cf0831912878e266bac50e0e4a9c60208190526040909120610645838583611a6e565b50837faee789c00c07f41c3444062965abd9376826f41fdbb884ac42b5d4bd0b26d2d38484604051610678929190611a14565b60405180910390a250505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b8054600019016106e3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181557fc7ba6016a551f7f07fd4821271b8773baf38cf0831912878e266bac50e0e4a9c600061071a6060850160408601611863565b6107276060860186611880565b60405160200161073993929190611b2f565b60408051601f19818403018152918152853560009081526020859052908120805492935090916107689061193c565b80601f01602080910402602001604051908101604052809291908181526020018280546107949061193c565b80156107e15780601f106107b6576101008083540402835291602001916107e1565b820191906000526020600020905b8154815290600101906020018083116107c457829003601f168201915b505050505090508051600003610823576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006108386104bf6040880160208901611863565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630c93e3bb3430858588336040518763ffffffff1660e01b815260040161089c959493929190611b6e565b6000604051808303818588803b1580156108b557600080fd5b505af11580156108c9573d6000803e3d6000fd5b50506040517f1c92115f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169350631c92115f92506109449150859085908890600401611bda565b600060405180830381600087803b15801561095e57600080fd5b505af1158015610972573d6000803e3d6000fd5b50610987925050506060870160408801611863565b73ffffffffffffffffffffffffffffffffffffffff1686357f996a41bee9ee9168b98274120b734982197c51aedd142b1fb9e5fa103f25459f6109cd60608a018a611880565b6040516109db929190611a14565b60405180910390a350506000909255505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a3c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a89576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610afa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1e9190611c1d565b9050610b2c82868686610e8d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc09190611c1d565b610bca9190611c65565b14610c01576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c2957505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c76576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610cec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d109190611c1d565b905081811015610d3057610d308484610d2b84600019611c65565b610f4b565b50505050565b6060610d5973ffffffffffffffffffffffffffffffffffffffff83166014611049565b92915050565b6040517fc62c200200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063c62c2002903490610ddf9030908a908a9088908b908b903390600401611c78565b6000604051808303818588803b158015610df857600080fd5b505af1158015610e0c573d6000803e3d6000fd5b50505050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e8b576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d309085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611298565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610fc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe69190611c1d565b610ff09190611cff565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610d309085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610ee7565b60606000611058836002611d12565b611063906002611cff565b67ffffffffffffffff81111561107b5761107b611712565b6040519080825280601f01601f1916602001820160405280156110a5576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106110dc576110dc611d29565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061113f5761113f611d29565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600061117b846002611d12565b611186906001611cff565b90505b6001811115611223577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106111c7576111c7611d29565b1a60f81b8282815181106111dd576111dd611d29565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c9361121c81611d58565b9050611189565b508315611291576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064015b60405180910390fd5b9392505050565b60006112fa826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113a99092919063ffffffff16565b8051909150156113a457808060200190518101906113189190611d6f565b6113a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401611288565b505050565b60606113b884846000856113c0565b949350505050565b606082471015611452576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401611288565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161147b9190611d91565b60006040518083038185875af1925050503d80600081146114b8576040519150601f19603f3d011682016040523d82523d6000602084013e6114bd565b606091505b50915091506114ce878383876114d9565b979650505050505050565b6060831561156f5782516000036115685773ffffffffffffffffffffffffffffffffffffffff85163b611568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611288565b50816113b8565b6113b883838151156115845781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112889190611833565b6000608082840312156115ca57600080fd5b50919050565b73ffffffffffffffffffffffffffffffffffffffff811681146115f257600080fd5b50565b6000806000806080858703121561160b57600080fd5b843567ffffffffffffffff81111561162257600080fd5b61162e878288016115b8565b945050602085013561163f816115d0565b9250604085013591506060850135611656816115d0565b939692955090935050565b60008060006040848603121561167657600080fd5b83359250602084013567ffffffffffffffff8082111561169557600080fd5b818601915086601f8301126116a957600080fd5b8135818111156116b857600080fd5b8760208285010111156116ca57600080fd5b6020830194508093505050509250925092565b6000602082840312156116ef57600080fd5b813567ffffffffffffffff81111561170657600080fd5b6113b8848285016115b8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60005b8381101561175c578181015183820152602001611744565b50506000910152565b60006020828403121561177757600080fd5b815167ffffffffffffffff8082111561178f57600080fd5b818401915084601f8301126117a357600080fd5b8151818111156117b5576117b5611712565b604051601f8201601f19908116603f011681019083821181831017156117dd576117dd611712565b816040528281528760208487010111156117f657600080fd5b6114ce836020830160208801611741565b6000815180845261181f816020860160208601611741565b601f01601f19169290920160200192915050565b6020815260006112916020830184611807565b60006020828403121561185857600080fd5b8151611291816115d0565b60006020828403121561187557600080fd5b8135611291816115d0565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126118b557600080fd5b83018035915067ffffffffffffffff8211156118d057600080fd5b6020019150368190038213156118e557600080fd5b9250929050565b60007fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808760601b168352808660601b166014840152508284602884013750600091016028019081529392505050565b600181811c9082168061195057607f821691505b6020821081036115ca577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60a08152600061199c60a0830188611807565b82810360208401526119ae8188611807565b905082810360408401526119c28187611807565b905082810360608401526119d68186611807565b9150508260808301529695505050505050565b818352818160208501375060006020828401015260006020601f19601f840116840101905092915050565b6020815260006113b86020830184866119e9565b601f8211156113a457600081815260208120601f850160051c81016020861015611a4f5750805b601f850160051c820191505b81811015610c0157828155600101611a5b565b67ffffffffffffffff831115611a8657611a86611712565b611a9a83611a94835461193c565b83611a28565b6000601f841160018114611ace5760008515611ab65750838201355b600019600387901b1c1916600186901b178355611b28565b600083815260209020601f19861690835b82811015611aff5786850135825560209485019460019092019101611adf565b5086821015611b1c5760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008460601b168152818360148301376000910160140190815292915050565b600073ffffffffffffffffffffffffffffffffffffffff808816835260a06020840152611b9e60a0840188611807565b8381036040850152611bb08188611807565b90508381036060850152611bc48187611807565b9250508084166080840152509695505050505050565b606081526000611bed6060830186611807565b8281036020840152611bff8186611807565b90508281036040840152611c138185611807565b9695505050505050565b600060208284031215611c2f57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610d5957610d59611c36565b600073ffffffffffffffffffffffffffffffffffffffff808a16835260e06020840152611ca860e084018a611807565b8381036040850152611cba818a611807565b90508381036060850152611cce8189611807565b90508381036080850152611ce28188611807565b60a0850196909652509290921660c0909101525095945050505050565b80820180821115610d5957610d59611c36565b8082028115828204841417610d5957610d59611c36565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081611d6757611d67611c36565b506000190190565b600060208284031215611d8157600080fd5b8151801515811461129157600080fd5b60008251611da3818460208701611741565b919091019291505056fea26469706673582212202f05136fbbee1134555aef7cbc55a1aa12af0b3bc64918382834b8e2f773f09064736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var AxelarFacet__factory = /** @class */ (function (_super) {
    __extends(AxelarFacet__factory, _super);
    function AxelarFacet__factory() {
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
    AxelarFacet__factory.prototype.deploy = function (_gateway, _gasService, overrides) {
        return _super.prototype.deploy.call(this, _gateway, _gasService, overrides || {});
    };
    AxelarFacet__factory.prototype.getDeployTransaction = function (_gateway, _gasService, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _gateway, _gasService, overrides || {});
    };
    AxelarFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    AxelarFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    AxelarFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    AxelarFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    AxelarFacet__factory.bytecode = _bytecode;
    AxelarFacet__factory.abi = _abi;
    return AxelarFacet__factory;
}(ethers_1.ContractFactory));
exports.AxelarFacet__factory = AxelarFacet__factory;
