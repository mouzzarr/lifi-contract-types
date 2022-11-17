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
exports.SynapseFacet__factory = void 0;
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
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
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
                name: "_synapse",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_chainId",
                type: "uint256",
            },
        ],
        name: "initSynapse",
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
                        name: "to",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "chainId",
                        type: "uint256",
                    },
                    {
                        internalType: "contract IERC20",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct SynapseFacet.SynapseData",
                name: "_synapseData",
                type: "tuple",
            },
        ],
        name: "startBridgeTokensViaSynapse",
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
                        name: "to",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "chainId",
                        type: "uint256",
                    },
                    {
                        internalType: "contract IERC20",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct SynapseFacet.SynapseData",
                name: "_synapseData",
                type: "tuple",
            },
        ],
        name: "swapAndStartBridgeTokensViaSynapse",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506116c6806100206000396000f3fe6080604052600436106100345760003560e01c806352b456c514610039578063bc77233b1461004e578063d6a9008114610061575b600080fd5b61004c61004736600461137d565b610081565b005b61004c61005c3660046112d1565b6101c3565b34801561006d57600080fd5b5061004c61007c36600461120c565b610376565b600061009360608301604084016111ef565b6001600160a01b03161461012c5760006100bb6100b660608401604085016111ef565b6103c5565b90506100dc6100d060608401604085016111ef565b3330856060013561045a565b6060820180359082906100f6906100b690604087016111ef565b61010091906115d3565b146101265760405162461bcd60e51b815260040161011d906114a8565b60405180910390fd5b50610150565b80606001353410156101505760405162461bcd60e51b815260040161011d906114a8565b6101598161046c565b81600001517f3b254a352757de129783dc1fcdea65d20e49fc091f974551e1dcb4afbf1fdc4683602001518460400151856060015186608001518760a001518860e001518960c00151426040516101b7989796959493929190611450565b60405180910390a25050565b60006101d560608301604084016111ef565b6001600160a01b0316146102955760006101f86100b660608401604085016111ef565b905060005b60ff811684111561024c57855161023a90868660ff85168181106102235761022361164c565b90506020028101906102359190611522565b610673565b8061024481611616565b9150506101fd565b50606082018035908290610267906100b690604087016111ef565b61027191906115d3565b101561028f5760405162461bcd60e51b815260040161011d906114a8565b50610301565b4760005b60ff81168411156102d15785516102bf90868660ff85168181106102235761022361164c565b806102c981611616565b915050610299565b5060608201356102e182476115d3565b10156102ff5760405162461bcd60e51b815260040161011d906114a8565b505b61030a8161046c565b83600001517f3b254a352757de129783dc1fcdea65d20e49fc091f974551e1dcb4afbf1fdc4685602001518660400151876060015188608001518960a001518a60e001518b60c0015142604051610368989796959493929190611450565b60405180910390a250505050565b7f77c8cc40e3ba8e4859695ecaf64a4799013c020090179bef3eec2ac2dbbcbe0161039f6108a4565b80546001600160a01b0319166001600160a01b0393909316929092178255600190910155565b60006001600160a01b03821615610452576040516370a0823160e01b81523060048201526001600160a01b038316906370a082319060240160206040518083038186803b15801561041557600080fd5b505afa158015610429573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044d91906113cc565b610454565b475b92915050565b6104668484848461092d565b50505050565b7f77c8cc40e3ba8e4859695ecaf64a4799013c020090179bef3eec2ac2dbbcbe0160006104c07f77c8cc40e3ba8e4859695ecaf64a4799013c020090179bef3eec2ac2dbbcbe01546001600160a01b031690565b90508260200135826001015414156105255760405162461bcd60e51b815260206004820152602260248201527f43616e6e6f742062726964676520746f207468652073616d65206e6574776f72604482015261359760f11b606482015260840161011d565b61054561053860608501604086016111ef565b6001600160a01b03161590565b156105d9576001600160a01b03811663ce0b63ce61056660208601866111ef565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260208601356024820152606086013560448201526064015b600060405180830381600087803b1580156105bc57600080fd5b505af11580156105d0573d6000803e3d6000fd5b50505050505050565b6105f76105ec60608501604086016111ef565b828560600135610998565b6001600160a01b0381166390d2507461061360208601866111ef565b602086013561062860608801604089016111ef565b60405160e085901b6001600160e01b03191681526001600160a01b03938416600482015260248101929092529091166044820152606086013560648201526084016105a2565b505050565b6080810135806106c55760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f7420737761702066726f6d20302062616c616e63652e0000000000604482015260640161011d565b6000806106db6100b660808601606087016111ef565b905060006106ef60608601604087016111ef565b90506001600160a01b0381161561073b5761071a8161071460408801602089016111ef565b86610a4d565b83610724826103c5565b1015610736576107368133308761045a565b61073f565b8392505b60008061074f60208801886111ef565b6001600160a01b03168561076660a08a018a6114d4565b604051610774929190611411565b60006040518083038185875af1925050503d80600081146107b1576040519150601f19603f3d011682016040523d82523d6000602084013e6107b6565b606091505b5091509150816107e75760006107cb82610b0c565b90508060405162461bcd60e51b815260040161011d919061143d565b836107fb6100b660808a0160608b016111ef565b61080591906115d3565b93507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861083660208a018a6111ef565b61084660608b0160408c016111ef565b61085660808c0160608d016111ef565b604080519485526001600160a01b0393841660208601529183168483015290911660608301526080820189905260a082018790524260c0830152519081900360e00190a15050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b0316331461092b5760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b606482015260840161011d565b565b6040516001600160a01b03808516602483015283166044820152606481018290526104669085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610b8a565b6001600160a01b0383166109ab57505050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e9060440160206040518083038186803b1580156109f657600080fd5b505afa158015610a0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2e91906113cc565b90508015610a4257610a4284846000610c5c565b610466848484610d80565b6001600160a01b038316610a6057505050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e9060440160206040518083038186803b158015610aab57600080fd5b505afa158015610abf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae391906113cc565b905081811015610466578015610aff57610aff84846000610c5c565b6104668484600019610c5c565b6060604482511015610b5157505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000610b6d6004808551610b6591906115d3565b859190610e41565b905080806020019051810190610b83919061125a565b9392505050565b6000610bdf826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f4e9092919063ffffffff16565b80519091501561066e5780806020019051810190610bfd9190611238565b61066e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161011d565b801580610ce55750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015610cab57600080fd5b505afa158015610cbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce391906113cc565b155b610d505760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606482015260840161011d565b6040516001600160a01b03831660248201526044810182905261066e90849063095ea7b360e01b90606401610961565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e9060440160206040518083038186803b158015610dcc57600080fd5b505afa158015610de0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0491906113cc565b610e0e91906115bb565b6040516001600160a01b03851660248201526044810182905290915061046690859063095ea7b360e01b90606401610961565b606081610e4f81601f6115bb565b1015610e8e5760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b604482015260640161011d565b610e9882846115bb565b84511015610edc5760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b604482015260640161011d565b606082158015610efb5760405191506000825260208201604052610f45565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610f34578051835260209283019201610f1c565b5050858452601f01601f1916604052505b50949350505050565b6060610f5d8484600085610f65565b949350505050565b606082471015610fc65760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161011d565b843b6110145760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161011d565b600080866001600160a01b031685876040516110309190611421565b60006040518083038185875af1925050503d806000811461106d576040519150601f19603f3d011682016040523d82523d6000602084013e611072565b606091505b509150915061108282828661108d565b979650505050505050565b6060831561109c575081610b83565b8251156110ac5782518084602001fd5b8160405162461bcd60e51b815260040161011d919061143d565b80356110d181611678565b919050565b600082601f8301126110e757600080fd5b81356110fa6110f582611593565b611562565b81815284602083860101111561110f57600080fd5b816020850160208301376000918101602001919091529392505050565b6000610100828403121561113f57600080fd5b611147611538565b905081358152602082013567ffffffffffffffff81111561116757600080fd5b611173848285016110d6565b602083015250611185604083016110c6565b6040820152611196606083016110c6565b60608201526111a7608083016110c6565b60808201526111b860a083016110c6565b60a082015260c082013560c082015260e082013560e082015292915050565b6000608082840312156111e957600080fd5b50919050565b60006020828403121561120157600080fd5b8135610b8381611678565b6000806040838503121561121f57600080fd5b823561122a81611678565b946020939093013593505050565b60006020828403121561124a57600080fd5b81518015158114610b8357600080fd5b60006020828403121561126c57600080fd5b815167ffffffffffffffff81111561128357600080fd5b8201601f8101841361129457600080fd5b80516112a26110f582611593565b8181528560208385010111156112b757600080fd5b6112c88260208301602086016115ea565b95945050505050565b60008060008060c085870312156112e757600080fd5b843567ffffffffffffffff808211156112ff57600080fd5b61130b8883890161112c565b9550602087013591508082111561132157600080fd5b818701915087601f83011261133557600080fd5b81358181111561134457600080fd5b8860208260051b850101111561135957600080fd5b60208301955080945050505061137286604087016111d7565b905092959194509250565b60008060a0838503121561139057600080fd5b823567ffffffffffffffff8111156113a757600080fd5b6113b38582860161112c565b9250506113c384602085016111d7565b90509250929050565b6000602082840312156113de57600080fd5b5051919050565b600081518084526113fd8160208601602086016115ea565b601f01601f19169290920160200192915050565b8183823760009101908152919050565b600082516114338184602087016115ea565b9190910192915050565b602081526000610b8360208301846113e5565b60006101008083526114648184018c6113e5565b6001600160a01b039a8b166020850152988a1660408401525050948716606086015292909516608084015260a083015260c082019390935260e00191909152919050565b60208082526012908201527111549497d253959053125117d05353d5539560721b604082015260600190565b6000808335601e198436030181126114eb57600080fd5b83018035915067ffffffffffffffff82111561150657600080fd5b60200191503681900382131561151b57600080fd5b9250929050565b6000823560be1983360301811261143357600080fd5b604051610100810167ffffffffffffffff8111828210171561155c5761155c611662565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561158b5761158b611662565b604052919050565b600067ffffffffffffffff8211156115ad576115ad611662565b50601f01601f191660200190565b600082198211156115ce576115ce611636565b500190565b6000828210156115e5576115e5611636565b500390565b60005b838110156116055781810151838201526020016115ed565b838111156104665750506000910152565b600060ff821660ff81141561162d5761162d611636565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461168d57600080fd5b5056fea2646970667358221220732184f6b956772de1a4c74735b58e49c5adef6148087ea2045f2025be2f46bd64736f6c63430008070033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var SynapseFacet__factory = /** @class */ (function (_super) {
    __extends(SynapseFacet__factory, _super);
    function SynapseFacet__factory() {
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
    SynapseFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    SynapseFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    SynapseFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SynapseFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SynapseFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    SynapseFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    SynapseFacet__factory.bytecode = _bytecode;
    SynapseFacet__factory.abi = _abi;
    return SynapseFacet__factory;
}(ethers_1.ContractFactory));
exports.SynapseFacet__factory = SynapseFacet__factory;