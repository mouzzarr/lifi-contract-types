import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CBridgeFacetPacked, CBridgeFacetPackedInterface } from "../CBridgeFacetPacked";
declare type CBridgeFacetPackedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CBridgeFacetPacked__factory extends ContractFactory {
    constructor(...args: CBridgeFacetPackedConstructorParams);
    deploy(_cBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CBridgeFacetPacked>;
    getDeployTransaction(_cBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CBridgeFacetPacked;
    connect(signer: Signer): CBridgeFacetPacked__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161178738038061178783398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516116f561009260003960008181610a450152610c0301526116f56000f3fe6080604052600436106100645760003560e01c80634f716c06116100435780634f716c06146100bc578063c11562a5146100dc578063f6848697146100fc57600080fd5b806278afb61461006957806315010a931461007357806345ec9b86146100a9575b600080fd5b610071610111565b005b34801561007f57600080fd5b5061009361008e366004611226565b61029b565b6040516100a09190611338565b60405180910390f35b6100716100b7366004611352565b61059b565b3480156100c857600080fd5b506100936100d7366004611352565b6105b1565b3480156100e857600080fd5b506100716100f7366004611226565b610801565b34801561010857600080fd5b5061007161081b565b603c3610156101a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f63616c6c44617461206c656e67746820736d616c6c6572207468616e2072657160448201527f756972656400000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102996101b9600c60043660006113da565b6101c291611404565b7fffffffffffffffff000000000000000000000000000000000000000000000000166101f3601c600c3660006113da565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250610237935060309250601c915036906113da565b6102409161144c565b60601c610252603460303660006113da565b61025b91611492565b60e01c61026d603860343660006113da565b61027691611492565b60e01c610288603c60383660006113da565b61029191611492565b60e01c6109d4565b565b606063ffffffff67ffffffffffffffff8716111561033b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e7433320000000000000000606482015260840161019e565b6fffffffffffffffffffffffffffffffff8411156103db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e7431323800000000000000000000000000000000000000606482015260840161019e565b63ffffffff67ffffffffffffffff84161115610479576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e743332000000000000000000000000000000000000000000606482015260840161019e565b7ff684869700000000000000000000000000000000000000000000000000000000896104a48a6114d8565b604080517fffffffff0000000000000000000000000000000000000000000000000000000094851660208201527fffffffffffffffff0000000000000000000000000000000000000000000000009390931660248401527fffffffffffffffffffffffffffffffff00000000000000000000000000000000918216602c8401527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060609b8c1b8116603c85015260e09a8b1b85166050850152988b1b9098166054830152608096871b16606882015293871b811660788501529190951b16607c820152825180820390950185520190525092915050565b6105a98686868686866109d4565b505050505050565b606063ffffffff67ffffffffffffffff85161115610651576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e7433320000000000000000606482015260840161019e565b63ffffffff67ffffffffffffffff841611156106ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e743332000000000000000000000000000000000000000000606482015260840161019e565b7e78afb60000000000000000000000000000000000000000000000000000000087610719886114d8565b6040517fffffffff0000000000000000000000000000000000000000000000000000000093841660208201527fffffffffffffffff00000000000000000000000000000000000000000000000090921660248301527fffffffffffffffffffffffffffffffff0000000000000000000000000000000016602c8201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606088901b16603c82015260e086811b8316605083015285811b8316605483015284901b919091166058820152605c0160405160208183030381529060405290509695505050505050565b6108118888888888888888610b7f565b5050505050505050565b60603610156108ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f63616c6c44617461206c656e67746820736d616c6c6572207468616e2072657160448201527f7569726564000000000000000000000000000000000000000000000000000000606482015260840161019e565b6102996108be600c60043660006113da565b6108c791611404565b7fffffffffffffffff000000000000000000000000000000000000000000000000166108f8601c600c3660006113da565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525061093c935060309250601c915036906113da565b6109459161144c565b60601c610957603460303660006113da565b61096091611492565b60e01c610972604860343660006113da565b61097b9161144c565b60601c61098d605860483660006113da565b61099691611528565b60801c6109a8605c60583660006113da565b6109b191611492565b60e01c6109c36060605c3660006113da565b6109cc91611492565b60e01c610b7f565b6040517f3f2e5fc300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152346024830181905267ffffffffffffffff80871660448501528516606484015263ffffffff841660848401527f000000000000000000000000000000000000000000000000000000000000000090911691633f2e5fc3919060a4016000604051808303818588803b158015610a8b57600080fd5b505af1158015610a9f573d6000803e3d6000fd5b505060408051610140810182528a815281518083018352600781527f63627269646765000000000000000000000000000000000000000000000000006020828101919091528201528082018a90526000606082018190526080820181905273ffffffffffffffffffffffffffffffffffffffff8a1660a08301523460c083015267ffffffffffffffff891660e0830152610100820181905261012082015290517fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f19450610b6f935090915061156e565b60405180910390a1505050505050565b610b8b84333086610d3c565b6040517fa5977fbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015285811660248301526044820185905267ffffffffffffffff80881660648401528416608483015263ffffffff831660a48301527f0000000000000000000000000000000000000000000000000000000000000000169063a5977fbb9060c401600060405180830381600087803b158015610c4757600080fd5b505af1158015610c5b573d6000803e3d6000fd5b505060408051610140810182528b815281518083018352600781527f63627269646765000000000000000000000000000000000000000000000000006020828101919091528201528082018b905260006060820181905273ffffffffffffffffffffffffffffffffffffffff89811660808401528b1660a083015260c0820188905267ffffffffffffffff8a1660e0830152610100820181905261012082015290517fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f19350610d2a925061156e565b60405180910390a15050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052610dd1908590610dd7565b50505050565b6000610e39826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610ee89092919063ffffffff16565b805190915015610ee35780806020019051810190610e579190611681565b610ee3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161019e565b505050565b6060610ef78484600085610eff565b949350505050565b606082471015610f91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161019e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610fba91906116a3565b60006040518083038185875af1925050503d8060008114610ff7576040519150601f19603f3d011682016040523d82523d6000602084013e610ffc565b606091505b509150915061100d87838387611018565b979650505050505050565b606083156110ae5782516000036110a75773ffffffffffffffffffffffffffffffffffffffff85163b6110a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161019e565b5081610ef7565b610ef783838151156110c35781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019e9190611338565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261113757600080fd5b813567ffffffffffffffff80821115611152576111526110f7565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611198576111986110f7565b816040528381528660208588010111156111b157600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146111f557600080fd5b919050565b803567ffffffffffffffff811681146111f557600080fd5b803563ffffffff811681146111f557600080fd5b600080600080600080600080610100898b03121561124357600080fd5b88359750602089013567ffffffffffffffff81111561126157600080fd5b61126d8b828c01611126565b97505061127c60408a016111d1565b955061128a60608a016111fa565b945061129860808a016111d1565b935060a089013592506112ad60c08a016111fa565b91506112bb60e08a01611212565b90509295985092959890939650565b60005b838110156112e55781810151838201526020016112cd565b50506000910152565b600081518084526113068160208601602086016112ca565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061134b60208301846112ee565b9392505050565b60008060008060008060c0878903121561136b57600080fd5b86359550602087013567ffffffffffffffff81111561138957600080fd5b61139589828a01611126565b9550506113a4604088016111d1565b93506113b2606088016111fa565b92506113c0608088016111fa565b91506113ce60a08801611212565b90509295509295509295565b600080858511156113ea57600080fd5b838611156113f757600080fd5b5050820193919092039150565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156114445780818660080360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156114445760149490940360031b84901b1690921692915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156114445760049490940360031b84901b1690921692915050565b6000815160208301517fffffffffffffffffffffffffffffffff00000000000000000000000000000000808216935060108310156115205780818460100360031b1b83161693505b505050919050565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156114445760109490940360031b84901b1690921692915050565b6020815281516020820152600060208301516101408060408501526115976101608501836112ee565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526115d283826112ee565b92505060608501516115fc608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061166f8187018315159052565b90950151151593019290925250919050565b60006020828403121561169357600080fd5b8151801515811461134b57600080fd5b600082516116b58184602087016112ca565b919091019291505056fea2646970667358221220b9b46defb102d4a0df55329dfc2ba3068fb1840aa12820dcd2e9d560ad6b5c3864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ICBridge";
            readonly name: "_cBridge";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "destinationChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "maxSlippage";
            readonly type: "uint32";
        }];
        readonly name: "encoder_startBridgeTokensViaCBridgeERC20Packed";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "destinationChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "maxSlippage";
            readonly type: "uint32";
        }];
        readonly name: "encoder_startBridgeTokensViaCBridgeNativePacked";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "destinationChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "maxSlippage";
            readonly type: "uint32";
        }];
        readonly name: "startBridgeTokensViaCBridgeERC20Min";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startBridgeTokensViaCBridgeERC20Packed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "destinationChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "maxSlippage";
            readonly type: "uint32";
        }];
        readonly name: "startBridgeTokensViaCBridgeNativeMin";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startBridgeTokensViaCBridgeNativePacked";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): CBridgeFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CBridgeFacetPacked;
}
export {};
