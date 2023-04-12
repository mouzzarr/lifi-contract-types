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
exports.GenericSwapFacet__factory = void 0;
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
        inputs: [
            {
                internalType: "uint256",
                name: "minAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "receivedAmount",
                type: "uint256",
            },
        ],
        name: "CumulativeSlippageTooHigh",
        type: "error",
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
        name: "InvalidContract",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidReceiver",
        type: "error",
    },
    {
        inputs: [],
        name: "NativeAssetTransferFailed",
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
        name: "SliceOutOfBounds",
        type: "error",
    },
    {
        inputs: [],
        name: "SliceOverflow",
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
                internalType: "string",
                name: "integrator",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "referrer",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "fromAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "toAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fromAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "toAmount",
                type: "uint256",
            },
        ],
        name: "LiFiSwappedGeneric",
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
        name: "LiFiTransferRecovered",
        type: "event",
    },
    {
        anonymous: false,
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
                        name: "bridge",
                        type: "string",
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
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "minAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "hasSourceSwaps",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "hasDestinationCall",
                        type: "bool",
                    },
                ],
                indexed: false,
                internalType: "struct ILiFi.BridgeData",
                name: "bridgeData",
                type: "tuple",
            },
        ],
        name: "LiFiTransferStarted",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_transactionId",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "_integrator",
                type: "string",
            },
            {
                internalType: "string",
                name: "_referrer",
                type: "string",
            },
            {
                internalType: "address payable",
                name: "_receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256",
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
                    {
                        internalType: "bool",
                        name: "requiresDeposit",
                        type: "bool",
                    },
                ],
                internalType: "struct LibSwap.SwapData[]",
                name: "_swapData",
                type: "tuple[]",
            },
        ],
        name: "swapTokensGeneric",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061222c806100206000396000f3fe60806040526004361061001e5760003560e01c80634630a0d814610023575b600080fd5b610036610031366004611b5c565b610038565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181558460006100c43447611c7c565b905073ffffffffffffffffffffffffffffffffffffffff8716610113576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006101228d8888888c61025b565b905060008686610133600182611c7c565b81811061014257610142611c8f565b90506020028101906101549190611cbe565b610165906080810190606001611cfc565b9050610172818a846103a3565b8d7f93517b7c6f32856737008edf37cf2542b55d27d83fa299aa216f55a982a6ee1d8e8e8e8e8c8c60008181106101ab576101ab611c8f565b90506020028101906101bd9190611cbe565b6101ce906060810190604001611cfc565b878e8e60008181106101e2576101e2611c8f565b90506020028101906101f49190611cbe565b608001358a60405161020d989796959493929190611d62565b60405180910390a2504790506000828211610229576000610233565b6102338383611c7c565b9050801561024757610247600085836103a3565b505060009092555050505050505050505050565b600082808203610297576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856102a6600185611c7c565b8181106102b5576102b5611c8f565b90506020028101906102c79190611cbe565b6102d8906080810190606001611cfc565b905060006102e5826103d9565b905073ffffffffffffffffffffffffffffffffffffffff821661030f5761030c3482611c7c565b90505b600061031b8888610492565b9050610327888861059e565b6103348a898989856105ff565b600082610340856103d9565b61034a9190611c7c565b905089811015610395576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156103cf576103ca8383836109b1565b505050565b6103ca8282610ae6565b600073ffffffffffffffffffffffffffffffffffffffff82161561048a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610461573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104859190611dc7565b61048c565b475b92915050565b60608160008167ffffffffffffffff8111156104b0576104b0611de0565b6040519080825280602002602001820160405280156104d9578160200160208202803683370190505b5090506000805b83811015610593578686828181106104fa576104fa611c8f565b905060200281019061050c9190611cbe565b61051d906080810190606001611cfc565b9150610528826103d9565b83828151811061053a5761053a611c8f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661058b573483828151811061057357610573611c8f565b602002602001018181516105879190611c7c565b9052505b6001016104e0565b509095945050505050565b60005b818110156103ca5760008383838181106105bd576105bd611c8f565b90506020028101906105cf9190611cbe565b6105d890611f3c565b90508060c00151156105f6576105f681604001518260800151610c10565b506001016105a1565b8383838382600181146108cc576000858561061b600185611c7c565b81811061062a5761062a611c8f565b905060200281019061063c9190611cbe565b61064d906080810190606001611cfc565b9050600089815b818110156107f857368d8d8381811061066f5761066f611c8f565b90506020028101906106819190611cbe565b90506106b06106966060830160408401611cfc565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061071357506107136106c96040830160208401611cfc565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561072a575061072a6106c96020830183611cfc565b80156107af57506107af61074160a0830183611fe1565b61075091600491600091612046565b61075991612070565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6107e5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107ef8f82610d86565b50600101610654565b505060005b610808600185611c7c565b8110156108c457600088888381811061082357610823611c8f565b90506020028101906108359190611cbe565b610846906080810190606001611cfc565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108bb5785828151811061088d5761088d611c8f565b602002602001015161089e826103d9565b6108a89190611c7c565b925082156108bb576108bb8188856103a3565b506001016107fd565b5050506109a5565b8760005b818110156109a257368b8b838181106108eb576108eb611c8f565b90506020028101906108fd9190611cbe565b90506109126106966060830160408401611cfc565b8061092b575061092b6106c96040830160208401611cfc565b801561094257506109426106c96020830183611cfc565b8015610959575061095961074160a0830183611fe1565b61098f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109998d82610d86565b506001016108d0565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166109fe576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610a6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8f9190611dc7565b905080821115610ad5576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161038c565b610ae084848461109c565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610b33576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610b76576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161038c565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610bd0576040519150601f19603f3d011682016040523d82523d6000602084013e610bd5565b606091505b50509050806103ca576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c695780341015610c65576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610ca3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610d10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d349190611dc7565b905081811015610d7a576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161038c565b6103ca83333085611170565b610d9c610d966020830183611cfc565b3b151590565b610dd2576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610e12576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610e276106966060850160408601611cfc565b610e32576000610e38565b82608001355b90506000610e54610e4f6060860160408701611cfc565b6103d9565b90506000610e6b610e4f6080870160608801611cfc565b905082600003610ea257610ea2610e886060870160408801611cfc565b610e986040880160208901611cfc565b876080013561138a565b8460800135821015610eed576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161038c565b600080610efd6020880188611cfc565b73ffffffffffffffffffffffffffffffffffffffff1685610f2160a08a018a611fe1565b604051610f2f9291906120b8565b60006040518083038185875af1925050503d8060008114610f6c576040519150601f19603f3d011682016040523d82523d6000602084013e610f71565b606091505b509150915081610fbc576000610f86826114cf565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038c91906120ec565b6000610fd1610e4f60808a0160608b01611cfc565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961100260208b018b611cfc565b61101260608c0160408d01611cfc565b61102260808d0160608e01611cfc565b8c60800135898711611034578661103e565b61103e8a88611c7c565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103ca9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261154d565b73ffffffffffffffffffffffffffffffffffffffff84166111bd576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661120a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561127b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129f9190611dc7565b90506112ad82868686611659565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561131d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113419190611dc7565b61134b9190611c7c565b14611382576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166113aa57505050565b73ffffffffffffffffffffffffffffffffffffffff82166113f7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa15801561146d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114919190611dc7565b905081811015610ae057610ae084846114ca847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c7c565b6116b7565b606060448251101561151457505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061153060048085516115289190611c7c565b8591906117b5565b905080806020019051810190611546919061213d565b9392505050565b60006115af826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166118cf9092919063ffffffff16565b8051909150156103ca57808060200190518101906115cd91906121b4565b6103ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161038c565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ae09085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016110ee565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561172e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117529190611dc7565b61175c91906121d1565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610ae09085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016110ee565b6060816117c381601f6121d1565b10156117fb576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61180582846121d1565b8451101561183f576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561185e57604051915060008252602082016040526118c6565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561189757805183526020928301920161187f565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606118de84846000856118e6565b949350505050565b606082471015611978576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161038c565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516119a191906121e4565b60006040518083038185875af1925050503d80600081146119de576040519150601f19603f3d011682016040523d82523d6000602084013e6119e3565b606091505b50915091506119f4878383876119ff565b979650505050505050565b60608315611a95578251600003611a8e5773ffffffffffffffffffffffffffffffffffffffff85163b611a8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161038c565b50816118de565b6118de8383815115611aaa5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038c91906120ec565b60008083601f840112611af057600080fd5b50813567ffffffffffffffff811115611b0857600080fd5b602083019150836020828501011115611b2057600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611b4957600080fd5b50565b8035611b5781611b27565b919050565b600080600080600080600080600060c08a8c031215611b7a57600080fd5b8935985060208a013567ffffffffffffffff80821115611b9957600080fd5b611ba58d838e01611ade565b909a50985060408c0135915080821115611bbe57600080fd5b611bca8d838e01611ade565b909850965060608c01359150611bdf82611b27565b90945060808b0135935060a08b01359080821115611bfc57600080fd5b818c0191508c601f830112611c1057600080fd5b813581811115611c1f57600080fd5b8d60208260051b8501011115611c3457600080fd5b6020830194508093505050509295985092959850929598565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561048c5761048c611c4d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611cf257600080fd5b9190910192915050565b600060208284031215611d0e57600080fd5b813561154681611b27565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60c081526000611d7660c083018a8c611d19565b8281036020840152611d8981898b611d19565b73ffffffffffffffffffffffffffffffffffffffff978816604085015295909616606083015250608081019290925260a09091015295945050505050565b600060208284031215611dd957600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611e3257611e32611de0565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611e7f57611e7f611de0565b604052919050565b600067ffffffffffffffff821115611ea157611ea1611de0565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611ede57600080fd5b8135611ef1611eec82611e87565b611e38565b818152846020838601011115611f0657600080fd5b816020850160208301376000918101602001919091529392505050565b8015158114611b4957600080fd5b8035611b5781611f23565b600060e08236031215611f4e57600080fd5b611f56611e0f565b611f5f83611b4c565b8152611f6d60208401611b4c565b6020820152611f7e60408401611b4c565b6040820152611f8f60608401611b4c565b60608201526080830135608082015260a083013567ffffffffffffffff811115611fb857600080fd5b611fc436828601611ecd565b60a083015250611fd660c08401611f31565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261201657600080fd5b83018035915067ffffffffffffffff82111561203157600080fd5b602001915036819003821315611b2057600080fd5b6000808585111561205657600080fd5b8386111561206357600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156120b05780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60005b838110156120e35781810151838201526020016120cb565b50506000910152565b602081526000825180602084015261210b8160408501602087016120c8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60006020828403121561214f57600080fd5b815167ffffffffffffffff81111561216657600080fd5b8201601f8101841361217757600080fd5b8051612185611eec82611e87565b81815285602083850101111561219a57600080fd5b6121ab8260208301602086016120c8565b95945050505050565b6000602082840312156121c657600080fd5b815161154681611f23565b8082018082111561048c5761048c611c4d565b60008251611cf28184602087016120c856fea2646970667358221220816685d2f3e4b2b45f49da9679d5210e070c13bec00c718f006b09e91091a21264736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var GenericSwapFacet__factory = /** @class */ (function (_super) {
    __extends(GenericSwapFacet__factory, _super);
    function GenericSwapFacet__factory() {
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
    GenericSwapFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    GenericSwapFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    GenericSwapFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    GenericSwapFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    GenericSwapFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    GenericSwapFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    GenericSwapFacet__factory.bytecode = _bytecode;
    GenericSwapFacet__factory.abi = _abi;
    return GenericSwapFacet__factory;
}(ethers_1.ContractFactory));
exports.GenericSwapFacet__factory = GenericSwapFacet__factory;
