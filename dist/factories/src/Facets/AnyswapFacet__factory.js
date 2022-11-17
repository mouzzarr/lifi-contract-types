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
exports.AnyswapFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "CannotBridgeToSameNetwork",
        type: "error",
    },
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
        name: "NoSwapDataProvided",
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
        inputs: [],
        name: "TokenAddressIsZero",
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
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "router",
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
                        internalType: "uint256",
                        name: "toChainId",
                        type: "uint256",
                    },
                ],
                internalType: "struct AnyswapFacet.AnyswapData",
                name: "_anyswapData",
                type: "tuple",
            },
        ],
        name: "startBridgeTokensViaAnyswap",
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
                        internalType: "address",
                        name: "router",
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
                        internalType: "uint256",
                        name: "toChainId",
                        type: "uint256",
                    },
                ],
                internalType: "struct AnyswapFacet.AnyswapData",
                name: "_anyswapData",
                type: "tuple",
            },
        ],
        name: "swapAndStartBridgeTokensViaAnyswap",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50612569806100206000396000f3fe6080604052600436106100295760003560e01c806373bbd5c61461002e578063e18a8fdb14610043575b600080fd5b61004161003c366004611e95565b610056565b005b610041610051366004611f41565b610248565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155815173ffffffffffffffffffffffffffffffffffffffff16610123576040517fdc2e5e8d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013761012f86612019565b8585336103b5565b604083015281516020830151600091829161015291906104b9565b9150915061016184838361064e565b86357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c461019160208a018a6120c5565b6101a160608c0160408d0161212a565b8a8a60008181106101b4576101b4612147565b90506020028101906101c69190612176565b6101d790606081019060400161212a565b6101e760a08e0160808f0161212a565b8a606001518d8d60008181106101ff576101ff612147565b90506020028101906102119190612176565b608001358c60800151600160006040516102349a999897969594939291906121b4565b60405180910390a250506000905550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556000806102ef6102da602086018661212a565b6102ea604087016020880161212a565b6104b9565b9150915080610306576103068285604001356108cc565b61031f610318368690038601866122cb565b838361064e565b84357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c461034f60208801886120c5565b61035f60608a0160408b0161212a565b8661037060a08c0160808d0161212a565b61038060808c0160608d0161212a565b8b604001358c608001356000806040516103a39a999897969594939291906121b4565b60405180910390a25050600090555050565b6000828082036103f1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610400600182612316565b81811061040f5761040f612147565b90506020028101906104219190612176565b61043290608081019060600161212a565b9050600061043f826108f2565b905061044d888888886109ab565b6000610458836108f2565b90508181116104675780610471565b6104718282612316565b9150816000036104ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50979650505050505050565b60008073ffffffffffffffffffffffffffffffffffffffff8416610509576040517fdc2e5e8d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff16636f307dc36040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610556573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057a919061232d565b91508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16638fd903f56040518163ffffffff1660e01b81526004016020604051808303816000875af11580156105e0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610604919061232d565b73ffffffffffffffffffffffffffffffffffffffff1614905080158161063e575073ffffffffffffffffffffffffffffffffffffffff8216155b15610647578391505b9250929050565b8260800151460361068b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b801561073e57602083015160408085015185516060870151608088015193517fa5e5657100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9283166004820152908216602482015260448101939093529092169163a5e56571916064016000604051808303818588803b15801561072057600080fd5b505af1158015610734573d6000803e3d6000fd5b5050505050505050565b6107518284602001518560400151610dbb565b8173ffffffffffffffffffffffffffffffffffffffff16836000015173ffffffffffffffffffffffffffffffffffffffff161461083657602083015183516060850151604080870151608088015191517fedbdf5e200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff948516600482015292841660248401526044830152606482015291169063edbdf5e290608401600060405180830381600087803b15801561081957600080fd5b505af115801561082d573d6000803e3d6000fd5b50505050505050565b602083015183516060850151604080870151608088015191517f241dc2df00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff948516600482015292841660248401526044830152606482015291169063241dc2df90608401600060405180830381600087803b15801561081957600080fd5b505050565b6108ee828273ffffffffffffffffffffffffffffffffffffffff821615610efd565b5050565b600073ffffffffffffffffffffffffffffffffffffffff8216156109a3576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561097a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099e919061234a565b6109a5565b475b92915050565b8282828160018114610c655760006109c38585611012565b9050600085856109d4600186612316565b8181106109e3576109e3612147565b90506020028101906109f59190612176565b610a0690608081019060600161212a565b905060008060005b8a811015610b5657368c8c83818110610a2957610a29612147565b9050602002810190610a3b9190612176565b9050600080610a50604084016020850161212a565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610abc5750600080610a91602084018461212a565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610b01575060016000610ad460a08401846120c5565b610ae391600891600091612363565b610aec9161238d565b815260208101919091526040016000205460ff165b610b37576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d51610b4390826110dc565b5080610b4e816123c9565b915050610a0e565b5060005b610b65600187612316565b811015610c5b576000898983818110610b8057610b80612147565b9050602002810190610b929190612176565b610ba390608081019060600161212a565b90508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610bde5750610c49565b610be7816108f2565b9250858281518110610bfb57610bfb612147565b60200260200101518311610c0f5782610c34565b858281518110610c2157610c21612147565b602002602001015183610c349190612316565b93508315610c4757610c478189866113b9565b505b80610c53816123c9565b915050610b5a565b5050505050610734565b60005b86811015610db05736888883818110610c8357610c83612147565b9050602002810190610c959190612176565b9050600080610caa604084016020850161212a565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610d165750600080610ceb602084018461212a565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610d5b575060016000610d2e60a08401846120c5565b610d3d91600891600091612363565b610d469161238d565b815260208101919091526040016000205460ff165b610d91576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8951610d9d90826110dc565b5080610da8816123c9565b915050610c68565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ddb57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e28576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610e9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec2919061234a565b905081811015610ef757610ef784847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6113ea565b50505050565b81600003610f37576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015610f76578134146108c7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3415610fad576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610fb8846108f2565b9050610fc6843330866115cc565b8281610fd1866108f2565b610fdb9190612316565b14610ef7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608160008167ffffffffffffffff81111561103057611030611d4d565b604051908082528060200260200182016040528015611059578160200160208202803683370190505b50905060005b828110156110d3576110a486868381811061107c5761107c612147565b905060200281019061108e9190612176565b61109f90608081019060600161212a565b6108f2565b8282815181106110b6576110b6612147565b6020908102919091010152806110cb816123c9565b91505061105f565b50949350505050565b6110f26110ec602083018361212a565b3b151590565b611128576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611168576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008061117b606085016040860161212a565b9050600061118f608086016060870161212a565b9050600061119c836108f2565b905060006111a9836108f2565b905060008683106111bb5760006111c5565b6111c58388612316565b905073ffffffffffffffffffffffffffffffffffffffff851615611214576111fd856111f760408b0160208c0161212a565b89610dbb565b801561120f5761120f853330846115cc565b611218565b8695505b60008061122860208b018b61212a565b73ffffffffffffffffffffffffffffffffffffffff168861124c60a08d018d6120c5565b60405161125a929190612401565b60006040518083038185875af1925050503d8060008114611297576040519150601f19603f3d011682016040523d82523d6000602084013e61129c565b606091505b5091509150816112f05760006112b182611672565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e7919061243d565b60405180910390fd5b60006112fb876108f2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c61132c60208e018e61212a565b8d604001602081019061133f919061212a565b8a8e8a871161134e5786611358565b6113588b88612316565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156113e0576108c78383836116f0565b6108c78282611748565b80158061148a57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611464573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611488919061234a565b155b611516576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016112e7565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108c79084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261182f565b73ffffffffffffffffffffffffffffffffffffffff8416611619576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611666576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ef78484848461193b565b60606044825110156116b757505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b60006116d360048085516116cb9190612316565b859190611999565b9050808060200190518101906116e99190612470565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff831661173d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108c7838383611af4565b73ffffffffffffffffffffffffffffffffffffffff8216611795576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146117ef576040519150601f19603f3d011682016040523d82523d6000602084013e6117f4565b606091505b50509050806108c7576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611891826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611b4a9092919063ffffffff16565b8051909150156108c757808060200190518101906118af91906124e7565b6108c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016112e7565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ef79085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611568565b6060816119a781601f612509565b1015611a0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f7700000000000000000000000000000000000060448201526064016112e7565b611a198284612509565b84511015611a83576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e647300000000000000000000000000000060448201526064016112e7565b606082158015611aa257604051915060008252602082016040526110d3565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611adb578051835260209283019201611ac3565b5050858452601f01601f19166040525050949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108c79084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611568565b6060611b598484600085611b61565b949350505050565b606082471015611bf3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016112e7565b843b611c5b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016112e7565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611c849190612521565b60006040518083038185875af1925050503d8060008114611cc1576040519150601f19603f3d011682016040523d82523d6000602084013e611cc6565b606091505b5091509150611cd6828286611ce1565b979650505050505050565b60608315611cf05750816116e9565b825115611d005782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e7919061243d565b60006101008284031215611d4757600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611da057611da0611d4d565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611dcf57611dcf611d4d565b604052919050565b73ffffffffffffffffffffffffffffffffffffffff81168114611df957600080fd5b50565b8035611e0781611dd7565b919050565b600060a08284031215611e1e57600080fd5b60405160a0810181811067ffffffffffffffff82111715611e4157611e41611d4d565b6040529050808235611e5281611dd7565b81526020830135611e6281611dd7565b6020820152604083810135908201526060830135611e7f81611dd7565b6060820152608092830135920191909152919050565b60008060008060e08587031215611eab57600080fd5b843567ffffffffffffffff80821115611ec357600080fd5b611ecf88838901611d34565b95506020870135915080821115611ee557600080fd5b818701915087601f830112611ef957600080fd5b813581811115611f0857600080fd5b8860208260051b8501011115611f1d57600080fd5b602083019550809450505050611f368660408701611e0c565b905092959194509250565b60008082840360c0811215611f5557600080fd5b833567ffffffffffffffff811115611f6c57600080fd5b611f7886828701611d34565b93505060a0601f1982011215611f8d57600080fd5b506020830190509250929050565b600067ffffffffffffffff821115611fb557611fb5611d4d565b50601f01601f191660200190565b600082601f830112611fd457600080fd5b8135611fe7611fe282611f9b565b611da6565b818152846020838601011115611ffc57600080fd5b816020850160208301376000918101602001919091529392505050565b6000610100823603121561202c57600080fd5b612034611d7c565b82358152602083013567ffffffffffffffff81111561205257600080fd5b61205e36828601611fc3565b60208301525061207060408401611dfc565b604082015261208160608401611dfc565b606082015261209260808401611dfc565b60808201526120a360a08401611dfc565b60a082015260c083013560c082015260e083013560e082015280915050919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126120fa57600080fd5b83018035915067ffffffffffffffff82111561211557600080fd5b60200191503681900382131561064757600080fd5b60006020828403121561213c57600080fd5b81356116e981611dd7565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418336030181126121aa57600080fd5b9190910192915050565b6000610160808352600781840152507f616e7973776170000000000000000000000000000000000000000000000000006101808301526101a0806020840152600081840152506101c08060408401528b81840152506101e08b8d8285013760008c840182015273ffffffffffffffffffffffffffffffffffffffff8b166060840152601f19601f8d0116830101905073ffffffffffffffffffffffffffffffffffffffff8916608083015273ffffffffffffffffffffffffffffffffffffffff881660a083015273ffffffffffffffffffffffffffffffffffffffff871660c08301528560e0830152846101008301526122b361012083018515159052565b8215156101408301529b9a5050505050505050505050565b600060a082840312156122dd57600080fd5b6116e98383611e0c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015612328576123286122e7565b500390565b60006020828403121561233f57600080fd5b81516116e981611dd7565b60006020828403121561235c57600080fd5b5051919050565b6000808585111561237357600080fd5b8386111561238057600080fd5b5050820193919092039150565b803560208310156109a5577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036123fa576123fa6122e7565b5060010190565b8183823760009101908152919050565b60005b8381101561242c578181015183820152602001612414565b83811115610ef75750506000910152565b602081526000825180602084015261245c816040850160208701612411565b601f01601f19169190910160400192915050565b60006020828403121561248257600080fd5b815167ffffffffffffffff81111561249957600080fd5b8201601f810184136124aa57600080fd5b80516124b8611fe282611f9b565b8181528560208385010111156124cd57600080fd5b6124de826020830160208601612411565b95945050505050565b6000602082840312156124f957600080fd5b815180151581146116e957600080fd5b6000821982111561251c5761251c6122e7565b500190565b600082516121aa81846020870161241156fea264697066735822122082444c2156f90ecfc8b1771aeb597b2790f7d08eabd22be61d4c29ca566cef2e64736f6c634300080d0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var AnyswapFacet__factory = /** @class */ (function (_super) {
    __extends(AnyswapFacet__factory, _super);
    function AnyswapFacet__factory() {
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
    AnyswapFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    AnyswapFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    AnyswapFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    AnyswapFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    AnyswapFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    AnyswapFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    AnyswapFacet__factory.bytecode = _bytecode;
    AnyswapFacet__factory.abi = _abi;
    return AnyswapFacet__factory;
}(ethers_1.ContractFactory));
exports.AnyswapFacet__factory = AnyswapFacet__factory;