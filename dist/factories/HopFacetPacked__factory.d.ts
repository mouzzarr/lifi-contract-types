import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacetPacked, HopFacetPackedInterface } from "../HopFacetPacked";
declare type HopFacetPackedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HopFacetPacked__factory extends ContractFactory {
    constructor(...args: HopFacetPackedConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HopFacetPacked>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HopFacetPacked;
    connect(signer: Signer): HopFacetPacked__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611f35806100206000396000f3fe60806040526004361061007b5760003560e01c806379ded16f1161004e57806379ded16f14610100578063a634768614610113578063c5ae0fe614610133578063d713306d1461014857600080fd5b8063161be5421461008057806318f4637d1461008a578063229a9e31146100aa578063298e5108146100e0575b600080fd5b61008861015b565b005b34801561009657600080fd5b506100886100a5366004611893565b61031b565b3480156100b657600080fd5b506100ca6100c536600461192f565b61036e565b6040516100d79190611a23565b60405180910390f35b3480156100ec57600080fd5b506100ca6100fb366004611a3d565b610711565b61008861010e36600461192f565b610b65565b34801561011f57600080fd5b5061008861012e366004611a3d565b610bad565b34801561013f57600080fd5b50610088610c04565b610088610156366004611b1e565b610df3565b60783610156101f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f63616c6c44617461206c656e67746820736d616c6c6572207468616e2072657160448201527f756972656400000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610319610203600c6004366000611c2a565b61020c91611c54565b7fffffffffffffffff0000000000000000000000000000000000000000000000001661023d601c600c366000611c2a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250610281935060309250601c91503690611c2a565b61028a91611c9c565b60601c61029c60346030366000611c2a565b6102a591611ce2565b60e01c6102b760446034366000611c2a565b6102c091611d28565b60801c6102d260546044366000611c2a565b6102db91611d28565b60801c6102ed60646054366000611c2a565b6102f691611d28565b60801c61030860786064366000611c2a565b61031191611c9c565b60601c610e09565b565b6103638989898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508b92508a9150899050888888610fa3565b505050505050505050565b606063ffffffff861115610404576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff8511156104a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f626f6e6465724665652076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e743132380000000000000000000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff841115610544576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f616d6f756e744f75744d696e2076616c75652070617373656420746f6f20626960448201527f6720746f2066697420696e2075696e743132380000000000000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff8311156105e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f64657374696e6174696f6e416d6f756e744f75744d696e2076616c756520706160448201527f7373656420746f6f2062696720746f2066697420696e2075696e74313238000060648201526084016101e8565b7f161be542000000000000000000000000000000000000000000000000000000008a6106108a8c611d28565b604080517fffffffff0000000000000000000000000000000000000000000000000000000094851660208201527fffffffffffffffff0000000000000000000000000000000000000000000000009390931660248401527fffffffffffffffffffffffffffffffff00000000000000000000000000000000918216602c8401527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060609b8c1b8116603c85015260e09a909a1b9093166050830152608097881b8116605483015295871b861660648201529390951b909316607483015290941b90921660848401528051607881850301815260989093019052509392505050565b606063ffffffff8811156107a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff861115610847576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e743132380000000000000000000000000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff8511156108e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f626f6e6465724665652076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e743132380000000000000000000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff841115610987576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f616d6f756e744f75744d696e2076616c75652070617373656420746f6f20626960448201527f6720746f2066697420696e2075696e743132380000000000000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff831115610a27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f64657374696e6174696f6e416d6f756e744f75744d696e2076616c756520706160448201527f7373656420746f6f2062696720746f2066697420696e2075696e74313238000060648201526084016101e8565b7fc5ae0fe6000000000000000000000000000000000000000000000000000000008c610a538c8e611d28565b604080517fffffffff0000000000000000000000000000000000000000000000000000000094851660208201527fffffffffffffffff0000000000000000000000000000000000000000000000009390931660248401527fffffffffffffffffffffffffffffffff00000000000000000000000000000000918216602c8401527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060609d8e1b8116603c85015260e09c909c1b9093166050830152988b1b8a166054820152608097881b8916606882015295871b8816607887015293861b8716608886015250931b9093166098820152931b90911660a88301528051609c81840301815260bc90920190529392505050565b6103638989898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508b92508a9150899050888888610e09565b610bf78b8b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508d92508c91508b90508a8a8a8a8a61112e565b5050505050505050505050565b609c361015610c95576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f63616c6c44617461206c656e67746820736d616c6c6572207468616e2072657160448201527f756972656400000000000000000000000000000000000000000000000000000060648201526084016101e8565b610319610ca7600c6004366000611c2a565b610cb091611c54565b7fffffffffffffffff00000000000000000000000000000000000000000000000016610ce1601c600c366000611c2a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250610d25935060309250601c91503690611c2a565b610d2e91611c9c565b60601c610d4060346030366000611c2a565b610d4991611ce2565b60e01c610d5b60486034366000611c2a565b610d6491611c9c565b60601c610d7660586048366000611c2a565b610d7f91611d28565b60801c610d9160686058366000611c2a565b610d9a91611d28565b60801c610dac60786068366000611c2a565b610db591611d28565b60801c610dc760886078366000611c2a565b610dd091611d28565b60801c610de2609c6088366000611c2a565b610deb91611c9c565b60601c61112e565b610e018686868686866112d6565b505050505050565b6000610e17426104b0611d6e565b6040517feea0d7b20000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff89811660248301523460448301819052606483018990526084830188905260a4830184905260c4830187905260e4830184905292935084169163eea0d7b291610104016000604051808303818588803b158015610eb557600080fd5b505af1158015610ec9573d6000803e3d6000fd5b505060408051610140810182528d815281518083018352600381527f686f7000000000000000000000000000000000000000000000000000000000006020828101919091528201528082018d90526000606082018190526080820181905273ffffffffffffffffffffffffffffffffffffffff8d1660a08301523460c083015260e082018c9052610100820181905261012082015290517fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f19450610f909350909150611dae565b60405180910390a1505050505050505050565b610faf84333086611466565b6000610fbd426104b0611d6e565b6040517fdeace8f50000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff8981166024830152604482018790526064820186905260848201839052600060a4830181905260c48301529192509083169063deace8f59060e401600060405180830381600087803b15801561105457600080fd5b505af1158015611068573d6000803e3d6000fd5b505060408051610140810182528c815281518083018352600381527f686f7000000000000000000000000000000000000000000000000000000000006020828101919091528201528082018c905260006060820181905273ffffffffffffffffffffffffffffffffffffffff8a811660808401528c1660a083015260c0820189905260e082018b9052610100820181905261012082015290517fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f19350610f909250611dae565b61113a86333088611466565b6000611148426104b0611d6e565b6040517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481018a905273ffffffffffffffffffffffffffffffffffffffff8b8116602483015260448201899052606482018890526084820187905260a4820183905260c4820186905260e482018390529192509083169063eea0d7b29061010401600060405180830381600087803b1580156111e757600080fd5b505af11580156111fb573d6000803e3d6000fd5b505060408051610140810182528e815281518083018352600381527f686f7000000000000000000000000000000000000000000000000000000000006020828101919091528201528082018e905260006060820181905273ffffffffffffffffffffffffffffffffffffffff8c811660808401528e1660a083015260c082018b905260e082018d9052610100820181905261012082015290517fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f193506112c19250611dae565b60405180910390a15050505050505050505050565b60006112e4426104b0611d6e565b6040517fdeace8f50000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff878116602483015234604483018190526064830187905260848301849052600060a4840181905260c484015292935084169163deace8f59160e4016000604051808303818588803b15801561137a57600080fd5b505af115801561138e573d6000803e3d6000fd5b505060408051610140810182528b815281518083018352600381527f686f7000000000000000000000000000000000000000000000000000000000006020828101919091528201528082018b90526000606082018190526080820181905273ffffffffffffffffffffffffffffffffffffffff8b1660a08301523460c083015260e082018a9052610100820181905261012082015290517fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f194506114559350909150611dae565b60405180910390a150505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526114fb908590611501565b50505050565b6000611563826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166116129092919063ffffffff16565b80519091501561160d57808060200190518101906115819190611ec1565b61160d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016101e8565b505050565b60606116218484600085611629565b949350505050565b6060824710156116bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016101e8565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516116e49190611ee3565b60006040518083038185875af1925050503d8060008114611721576040519150601f19603f3d011682016040523d82523d6000602084013e611726565b606091505b509150915061173787838387611742565b979650505050505050565b606083156117d85782516000036117d15773ffffffffffffffffffffffffffffffffffffffff85163b6117d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101e8565b5081611621565b61162183838151156117ed5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e89190611a23565b60008083601f84011261183357600080fd5b50813567ffffffffffffffff81111561184b57600080fd5b60208301915083602082850101111561186357600080fd5b9250929050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461188e57600080fd5b919050565b60008060008060008060008060006101008a8c0312156118b257600080fd5b8935985060208a013567ffffffffffffffff8111156118d057600080fd5b6118dc8c828d01611821565b90995097506118ef905060408b0161186a565b955060608a0135945061190460808b0161186a565b935060a08a0135925060c08a0135915061192060e08b0161186a565b90509295985092959850929598565b60008060008060008060008060006101008a8c03121561194e57600080fd5b8935985060208a013567ffffffffffffffff81111561196c57600080fd5b6119788c828d01611821565b909950975061198b905060408b0161186a565b955060608a0135945060808a0135935060a08a0135925060c08a0135915061192060e08b0161186a565b60005b838110156119d05781810151838201526020016119b8565b50506000910152565b600081518084526119f18160208601602086016119b5565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611a3660208301846119d9565b9392505050565b60008060008060008060008060008060006101408c8e031215611a5f57600080fd5b8b359a5060208c013567ffffffffffffffff811115611a7d57600080fd5b611a898e828f01611821565b909b509950611a9c905060408d0161186a565b975060608c01359650611ab160808d0161186a565b955060a08c0135945060c08c0135935060e08c013592506101008c01359150611add6101208d0161186a565b90509295989b509295989b9093969950565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060008060c08789031215611b3757600080fd5b86359550602087013567ffffffffffffffff80821115611b5657600080fd5b818901915089601f830112611b6a57600080fd5b813581811115611b7c57611b7c611aef565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611bc257611bc2611aef565b816040528281528c6020848701011115611bdb57600080fd5b826020860160208301376000602084830101528099505050505050611c026040880161186a565b93506060870135925060808701359150611c1e60a0880161186a565b90509295509295509295565b60008085851115611c3a57600080fd5b83861115611c4757600080fd5b5050820193919092039150565b7fffffffffffffffff0000000000000000000000000000000000000000000000008135818116916008851015611c945780818660080360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015611c945760149490940360031b84901b1690921692915050565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611c945760049490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff000000000000000000000000000000008135818116916010851015611c945760109490940360031b84901b1690921692915050565b80820180821115611da8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b602081528151602082015260006020830151610140806040850152611dd76101608501836119d9565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611e1283826119d9565b9250506060850151611e3c608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611eaf8187018315159052565b90950151151593019290925250919050565b600060208284031215611ed357600080fd5b81518015158114611a3657600080fd5b60008251611ef58184602087016119b5565b919091019291505056fea26469706673582212204de3319e6153f9668af4c825102cc2e209b2a013db83db00f2372e8f8b7cdb3564736f6c63430008110033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
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
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
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
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bonderFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "encoder_startBridgeTokensViaHopL2ERC20Packed";
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
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bonderFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "encoder_startBridgeTokensViaHopL2NativePacked";
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
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "startBridgeTokensViaHopL1ERC20Min";
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
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "startBridgeTokensViaHopL1NativeMin";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bonderFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "startBridgeTokensViaHopL2ERC20Min";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startBridgeTokensViaHopL2ERC20Packed";
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
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bonderFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "startBridgeTokensViaHopL2NativeMin";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startBridgeTokensViaHopL2NativePacked";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): HopFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopFacetPacked;
}
export {};