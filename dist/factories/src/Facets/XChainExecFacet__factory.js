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
exports.XChainExecFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "ContractCallNotAllowed",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidContract",
        type: "error",
    },
    {
        inputs: [],
        name: "NativeAssetTransferFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "NativeValueWithERC",
        type: "error",
    },
    {
        inputs: [],
        name: "NoSwapFromZeroBalance",
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
        name: "ReentrancyError",
        type: "error",
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
                name: "bridge",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "bridgeData",
                type: "string",
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
                internalType: "bool",
                name: "hasSourceSwap",
                type: "bool",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "hasDestinationCall",
                type: "bool",
            },
        ],
        name: "LiFiTransferStarted",
        type: "event",
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
                internalType: "address",
                name: "transferredAssetId",
                type: "address",
            },
            {
                internalType: "address payable",
                name: "receiver",
                type: "address",
            },
        ],
        name: "swapAndCompleteBridgeTokens",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50611dab806100206000396000f3fe60806040526004361061001e5760003560e01c8063254692d214610023575b600080fd5b61003661003136600461177d565b610038565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180825560009081908190889088906100cd9082611871565b8181106100dc576100dc611888565b90506020028101906100ee91906118b7565b6100ff9060808101906060016118f5565b905073ffffffffffffffffffffffffffffffffffffffff81161561012d576101268161029e565b9150610144565b346101378261029e565b6101419190611871565b91505b73ffffffffffffffffffffffffffffffffffffffff861615610215576101698661029e565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015290935060009073ffffffffffffffffffffffffffffffffffffffff88169063dd62ed3e90604401602060405180830381865afa1580156101df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102039190611912565b905061020f8782610357565b5061022c565b3461021f8761029e565b6102299190611871565b92505b6102406102388a611a6f565b89898861037d565b600061024b8761029e565b9050838111156102695761026987876102648785611871565b61078e565b60006102748361029e565b90508381111561028d5761028d83886102648785611871565b505060009093555050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82161561034f576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034a9190611912565b610351565b475b92915050565b610379828273ffffffffffffffffffffffffffffffffffffffff8216156107c4565b5050565b828282816001811461063757600061039585856108df565b9050600085856103a6600186611871565b8181106103b5576103b5611888565b90506020028101906103c791906118b7565b6103d89060808101906060016118f5565b905060008060005b8a81101561052857368c8c838181106103fb576103fb611888565b905060200281019061040d91906118b7565b905060008061042260408401602085016118f5565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff16801561048e575060008061046360208401846118f5565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b80156104d35750600160006104a660a0840184611b1b565b6104b591600891600091611b87565b6104be91611bb1565b815260208101919091526040016000205460ff165b610509576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d5161051590826109a9565b508061052081611bed565b9150506103e0565b5060005b610537600187611871565b81101561062d57600089898381811061055257610552611888565b905060200281019061056491906118b7565b6105759060808101906060016118f5565b90508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036105b0575061061b565b6105b98161029e565b92508582815181106105cd576105cd611888565b602002602001015183116105e15782610606565b8582815181106105f3576105f3611888565b6020026020010151836106069190611871565b935083156106195761061981898661078e565b505b8061062581611bed565b91505061052c565b5050505050610784565b60005b86811015610782573688888381811061065557610655611888565b905060200281019061066791906118b7565b905060008061067c60408401602085016118f5565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1680156106e857506000806106bd60208401846118f5565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b801561072d57506001600061070060a0840184611b1b565b61070f91600891600091611b87565b61071891611bb1565b815260208101919091526040016000205460ff165b610763576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b895161076f90826109a9565b508061077a81611bed565b91505061063a565b505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156107ba576107b5838383610c86565b505050565b6107b58282610cde565b816000036107fe576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b801561083d578134146107b5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3415610874576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061087f8461029e565b905061088d84333086610dc5565b82816108988661029e565b6108a29190611871565b146108d9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60608160008167ffffffffffffffff8111156108fd576108fd61192b565b604051908082528060200260200182016040528015610926578160200160208202803683370190505b50905060005b828110156109a05761097186868381811061094957610949611888565b905060200281019061095b91906118b7565b61096c9060808101906060016118f5565b61029e565b82828151811061098357610983611888565b60209081029190910101528061099881611bed565b91505061092c565b50949350505050565b6109bf6109b960208301836118f5565b3b151590565b6109f5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610a35576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080610a4860608501604086016118f5565b90506000610a5c60808601606087016118f5565b90506000610a698361029e565b90506000610a768361029e565b90506000868310610a88576000610a92565b610a928388611871565b905073ffffffffffffffffffffffffffffffffffffffff851615610ae157610aca85610ac460408b0160208c016118f5565b89610e6b565b8015610adc57610adc85333084610dc5565b610ae5565b8695505b600080610af560208b018b6118f5565b73ffffffffffffffffffffffffffffffffffffffff1688610b1960a08d018d611b1b565b604051610b27929190611c25565b60006040518083038185875af1925050503d8060008114610b64576040519150601f19603f3d011682016040523d82523d6000602084013e610b69565b606091505b509150915081610bbd576000610b7e82610fa7565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb49190611c61565b60405180910390fd5b6000610bc88761029e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c610bf960208e018e6118f5565b8d6040016020810190610c0c91906118f5565b8a8e8a8711610c1b5786610c25565b610c258b88611871565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cd3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107b5838383611025565b73ffffffffffffffffffffffffffffffffffffffff8216610d2b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610d85576040519150601f19603f3d011682016040523d82523d6000602084013e610d8a565b606091505b50509050806107b5576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610e12576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e5f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108d9848484846110f9565b73ffffffffffffffffffffffffffffffffffffffff8316610e8b57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ed8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610f4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f729190611912565b9050818110156108d9576108d984847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611157565b6060604482511015610fec57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061100860048085516110009190611871565b8591906112d9565b90508080602001905181019061101e9190611cb2565b9392505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b59084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611452565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526108d99085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611077565b8015806111f757506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156111d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f59190611912565b155b611283576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610bb4565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b59084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611077565b6060816112e781601f611d29565b101561134f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152606401610bb4565b6113598284611d29565b845110156113c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152606401610bb4565b6060821580156113e257604051915060008252602082016040526109a0565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561141b578051835260209283019201611403565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0166040525050949350505050565b60006114b4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661155e9092919063ffffffff16565b8051909150156107b557808060200190518101906114d29190611d41565b6107b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610bb4565b606061156d8484600085611575565b949350505050565b606082471015611607576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610bb4565b843b61166f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610bb4565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516116989190611d63565b60006040518083038185875af1925050503d80600081146116d5576040519150601f19603f3d011682016040523d82523d6000602084013e6116da565b606091505b50915091506116ea8282866116f5565b979650505050505050565b6060831561170457508161101e565b8251156117145782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb49190611c61565b73ffffffffffffffffffffffffffffffffffffffff8116811461176a57600080fd5b50565b803561177881611748565b919050565b60008060008060006080868803121561179557600080fd5b853567ffffffffffffffff808211156117ad57600080fd5b90870190610100828a0312156117c257600080fd5b909550602087013590808211156117d857600080fd5b818801915088601f8301126117ec57600080fd5b8135818111156117fb57600080fd5b8960208260051b850101111561181057600080fd5b6020830196508095505050506118286040870161176d565b91506118366060870161176d565b90509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561188357611883611842565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418336030181126118eb57600080fd5b9190910192915050565b60006020828403121561190757600080fd5b813561101e81611748565b60006020828403121561192457600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff8111828210171561197e5761197e61192b565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156119cb576119cb61192b565b604052919050565b600067ffffffffffffffff8211156119ed576119ed61192b565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611a2a57600080fd5b8135611a3d611a38826119d3565b611984565b818152846020838601011115611a5257600080fd5b816020850160208301376000918101602001919091529392505050565b60006101008236031215611a8257600080fd5b611a8a61195a565b82358152602083013567ffffffffffffffff811115611aa857600080fd5b611ab436828601611a19565b602083015250611ac66040840161176d565b6040820152611ad76060840161176d565b6060820152611ae86080840161176d565b6080820152611af960a0840161176d565b60a082015260c083013560c082015260e083013560e082015280915050919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b5057600080fd5b83018035915067ffffffffffffffff821115611b6b57600080fd5b602001915036819003821315611b8057600080fd5b9250929050565b60008085851115611b9757600080fd5b83861115611ba457600080fd5b5050820193919092039150565b80356020831015610351577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611c1e57611c1e611842565b5060010190565b8183823760009101908152919050565b60005b83811015611c50578181015183820152602001611c38565b838111156108d95750506000910152565b6020815260008251806020840152611c80816040850160208701611c35565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600060208284031215611cc457600080fd5b815167ffffffffffffffff811115611cdb57600080fd5b8201601f81018413611cec57600080fd5b8051611cfa611a38826119d3565b818152856020838501011115611d0f57600080fd5b611d20826020830160208601611c35565b95945050505050565b60008219821115611d3c57611d3c611842565b500190565b600060208284031215611d5357600080fd5b8151801515811461101e57600080fd5b600082516118eb818460208701611c3556fea2646970667358221220d356c49dac6625eecc36b2d09405fabd2147f5bfbc78656058a2a7d218a27ed764736f6c634300080d0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var XChainExecFacet__factory = /** @class */ (function (_super) {
    __extends(XChainExecFacet__factory, _super);
    function XChainExecFacet__factory() {
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
    XChainExecFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    XChainExecFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    XChainExecFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    XChainExecFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    XChainExecFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    XChainExecFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    XChainExecFacet__factory.bytecode = _bytecode;
    XChainExecFacet__factory.abi = _abi;
    return XChainExecFacet__factory;
}(ethers_1.ContractFactory));
exports.XChainExecFacet__factory = XChainExecFacet__factory;