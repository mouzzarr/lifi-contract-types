import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PackedEncoderDecoderFacet, PackedEncoderDecoderFacetInterface } from "../PackedEncoderDecoderFacet";
declare type PackedEncoderDecoderFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PackedEncoderDecoderFacet__factory extends ContractFactory {
    constructor(...args: PackedEncoderDecoderFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PackedEncoderDecoderFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PackedEncoderDecoderFacet;
    connect(signer: Signer): PackedEncoderDecoderFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612103806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063bd6d15ca1161005b578063bd6d15ca146100ef578063be8a84ac14610110578063fc1ebe3e14610131578063fc852c5a1461014457600080fd5b80632b9a1e111461008d5780633b34963c146100b657806345afb090146100c95780639861ca26146100dc575b600080fd5b6100a061009b366004611b23565b610157565b6040516100ad9190611bff565b60405180910390f35b6100a06100c4366004611c19565b6104c5565b6100a06100d7366004611b23565b610974565b6100a06100ea366004611c19565b610bf7565b6101026100fd366004611c83565b610fd8565b6040516100ad929190611dea565b61012361011e366004611c83565b611330565b6040516100ad929190611e55565b61010261013f366004611c83565b61158a565b610123610152366004611c83565b611886565b606063ffffffff60e084013511156101f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084015b60405180910390fd5b6fffffffffffffffffffffffffffffffff60c0840135111561029a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e743132380000000000000000000000000000000000000060648201526084016101ed565b63ffffffff6102af6040840160208501611e92565b67ffffffffffffffff161115610347576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e74333200000000000000000000000000000000000000000060648201526084016101ed565b7ff68486970000000000000000000000000000000000000000000000000000000083356103776040860186611ebc565b61038091611f21565b61039060c0870160a08801611f8e565b60601b60e080880135901b6103ab60a0890160808a01611f8e565b60601b60c089013560801b6103c660408a0160208b01611e92565b60e01b6103d660208b018b611fab565b6040517fffffffff00000000000000000000000000000000000000000000000000000000998a1660208201527fffffffffffffffff00000000000000000000000000000000000000000000000090981660248901527fffffffffffffffffffffffffffffffff00000000000000000000000000000000968716602c8901527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000958616603c89015293881660508801529390911660548601529290921660688401528316607883015260e01b91909116607c8201526080015b604051602081830303815290604052905092915050565b606063ffffffff60e0840135111561055f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016101ed565b6fffffffffffffffffffffffffffffffff60c08401351115610603576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e743132380000000000000000000000000000000000000060648201526084016101ed565b6fffffffffffffffffffffffffffffffff823511156106a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f626f6e6465724665652076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e743132380000000000000000000000000000000060648201526084016101ed565b6fffffffffffffffffffffffffffffffff60208301351115610748576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f616d6f756e744f75744d696e2076616c75652070617373656420746f6f20626960448201527f6720746f2066697420696e2075696e743132380000000000000000000000000060648201526084016101ed565b6fffffffffffffffffffffffffffffffff606083013511156107ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f64657374696e6174696f6e416d6f756e744f75744d696e2076616c756520706160448201527f7373656420746f6f2062696720746f2066697420696e2075696e74313238000060648201526084016101ed565b7fc5ae0fe600000000000000000000000000000000000000000000000000000000833561081c6040860186611ebc565b61082591611f21565b61083560c0870160a08801611f8e565b60601b60e080880135901b61085060a0890160808a01611f8e565b60601b8860c0013560801b886000013560801b896020013560801b8a6060013560801b8b60a00160208101906108869190611f8e565b6040517fffffffff000000000000000000000000000000000000000000000000000000009b8c1660208201527fffffffffffffffff000000000000000000000000000000000000000000000000909a1660248b01527fffffffffffffffffffffffffffffffff00000000000000000000000000000000988916602c8b01527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000978816603c8b015299909516605089015292851660548801529085166068870152841660788601528316608885015291909116609883015260609290921b9190911660a882015260bc016104ae565b606063ffffffff60e08401351115610a0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016101ed565b63ffffffff610a236040840160208501611e92565b67ffffffffffffffff161115610abb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e74333200000000000000000000000000000000000000000060648201526084016101ed565b7e78afb6000000000000000000000000000000000000000000000000000000008335610aea6040860186611ebc565b610af391611f21565b610b0360c0870160a08801611f8e565b60601b60e080880135901b610b1e6040880160208901611e92565b60e01b610b2e6020890189611fab565b6040517fffffffff0000000000000000000000000000000000000000000000000000000097881660208201527fffffffffffffffff00000000000000000000000000000000000000000000000090961660248701527fffffffffffffffffffffffffffffffff00000000000000000000000000000000909416602c8601527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000909216603c850152841660508401528316605483015260e01b919091166058820152605c016104ae565b606063ffffffff60e08401351115610c91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016101ed565b6fffffffffffffffffffffffffffffffff82351115610d32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f626f6e6465724665652076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e743132380000000000000000000000000000000060648201526084016101ed565b6fffffffffffffffffffffffffffffffff60208301351115610dd6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f616d6f756e744f75744d696e2076616c75652070617373656420746f6f20626960448201527f6720746f2066697420696e2075696e743132380000000000000000000000000060648201526084016101ed565b6fffffffffffffffffffffffffffffffff60608301351115610e7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f64657374696e6174696f6e416d6f756e744f75744d696e2076616c756520706160448201527f7373656420746f6f2062696720746f2066697420696e2075696e74313238000060648201526084016101ed565b7f161be542000000000000000000000000000000000000000000000000000000008335610eaa6040860186611ebc565b610eb391611f21565b610ec360c0870160a08801611f8e565b60601b8660e0013560e01b866000013560801b876020013560801b886060013560801b8960a0016020810190610ef99190611f8e565b6040517fffffffff00000000000000000000000000000000000000000000000000000000998a1660208201527fffffffffffffffff00000000000000000000000000000000000000000000000090981660248901527fffffffffffffffffffffffffffffffff00000000000000000000000000000000968716602c8901527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000958616603c89015297909316605087015290841660548601528316606485015291909116607483015260609290921b9190911660848201526098016104ae565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526110796040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b609c83101561110a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e67746800000000000000000000000000000000000000000000000060648201526084016101ed565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526111ab6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6111b9600c60048789611fd1565b6111c291611ffb565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526111f4601c600c8789611fd1565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505050604083015261123b6030601c8789611fd1565b61124491612041565b60601c60a083015261125a603460308789611fd1565b61126391612087565b60e090811c9083015261127a604860348789611fd1565b61128391612041565b60601c6080830152611299605860488789611fd1565b6112a291611f21565b60801c60c08301526112b8606860588789611fd1565b6112c191611f21565b60801c81526112d4607860688789611fd1565b6112dd91611f21565b60801c60208201526112f3608860788789611fd1565b6112fc91611f21565b60801c6060820152611312609c60888789611fd1565b61131b91612041565b60601c60a082015290925090505b9250929050565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290526101208301829052835180850190945281845283015290603c831015611422576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e67746800000000000000000000000000000000000000000000000060648201526084016101ed565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290526101208301829052835180850190945281845283015290611491600c60048789611fd1565b61149a91611ffb565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526114cc601c600c8789611fd1565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060408301526115136030601c8789611fd1565b61151c91612041565b60601c60a0830152611532603460308789611fd1565b61153b91612087565b60e090811c90830152611552603860348789611fd1565b61155b91612087565b60e01c6020820152611571603c60388789611fd1565b61157a91612087565b60e01c8152909590945092505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915261162b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b60788310156116bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e67746800000000000000000000000000000000000000000000000060648201526084016101ed565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915261175d6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b61176b600c60048789611fd1565b61177491611ffb565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526117a6601c600c8789611fd1565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060408301526117ed6030601c8789611fd1565b6117f691612041565b60601c60a083015261180c603460308789611fd1565b61181591612087565b60e090811c9083015261182c604460348789611fd1565b61183591611f21565b60801c8152611848605460448789611fd1565b61185191611f21565b60801c6020820152611867606460548789611fd1565b61187091611f21565b60801c6060820152611312607860648789611fd1565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526040805180820190915260008082526020820152606083101561197d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f6461746120706173736564206973206e6f742074686520636f7272656374206c60448201527f656e67746800000000000000000000000000000000000000000000000000000060648201526084016101ed565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290528351808501909452818452830152906119ec600c60048789611fd1565b6119f591611ffb565b7fffffffffffffffff000000000000000000000000000000000000000000000000168252611a27601c600c8789611fd1565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506040830152611a6e6030601c8789611fd1565b611a7791612041565b60601c60a0830152611a8d603460308789611fd1565b611a9691612087565b60e090811c90830152611aad604860348789611fd1565b611ab691612041565b60601c6080830152611acc605860488789611fd1565b611ad591611f21565b60801c60c0830152611aeb605c60588789611fd1565b611af491612087565b60e01c60208201526115716060605c8789611fd1565b60006101408284031215611b1d57600080fd5b50919050565b6000808284036060811215611b3757600080fd5b833567ffffffffffffffff811115611b4e57600080fd5b611b5a86828701611b0a565b93505060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215611b8d57600080fd5b506020830190509250929050565b6000815180845260005b81811015611bc157602081850181015186830182015201611ba5565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081526000611c126020830184611b9b565b9392505050565b60008082840360e0811215611c2d57600080fd5b833567ffffffffffffffff811115611c4457600080fd5b611c5086828701611b0a565b93505060c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215611b8d57600080fd5b60008060208385031215611c9657600080fd5b823567ffffffffffffffff80821115611cae57600080fd5b818501915085601f830112611cc257600080fd5b813581811115611cd157600080fd5b866020828501011115611ce357600080fd5b60209290920196919550909350505050565b6000610140825184526020830151816020860152611d1582860182611b9b565b91505060408301518482036040860152611d2f8282611b9b565b9150506060830151611d59606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080830151611d81608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a0830151611da960a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e085015261010080840151611dd28287018215159052565b50506101209283015115159390920192909252919050565b60e081526000611dfd60e0830185611cf5565b905082516020830152602083015160408301526040830151606083015260608301516080830152608083015160a083015273ffffffffffffffffffffffffffffffffffffffff60a08401511660c08301529392505050565b606081526000611e686060830185611cf5565b905063ffffffff835116602083015267ffffffffffffffff60208401511660408301529392505050565b600060208284031215611ea457600080fd5b813567ffffffffffffffff81168114611c1257600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ef157600080fd5b83018035915067ffffffffffffffff821115611f0c57600080fd5b60200191503681900382131561132957600080fd5b7fffffffffffffffffffffffffffffffff000000000000000000000000000000008135818116916010851015611f615780818660100360031b1b83161692505b505092915050565b73ffffffffffffffffffffffffffffffffffffffff81168114611f8b57600080fd5b50565b600060208284031215611fa057600080fd5b8135611c1281611f69565b600060208284031215611fbd57600080fd5b813563ffffffff81168114611c1257600080fd5b60008085851115611fe157600080fd5b83861115611fee57600080fd5b5050820193919092039150565b7fffffffffffffffff0000000000000000000000000000000000000000000000008135818116916008851015611f615760089490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015611f615760149490940360031b84901b1690921692915050565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611f615760049490940360031b84901b169092169291505056fea2646970667358221220533b0ae0e565faf3e6bd998e666e644df000debba38103dab6f1647f50c72a1564736f6c63430008110033";
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
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "decode_startBridgeTokensViaCBridgeERC20Packed";
        readonly outputs: readonly [{
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "maxSlippage";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "decode_startBridgeTokensViaCBridgeNativePacked";
        readonly outputs: readonly [{
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "maxSlippage";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "decode_startBridgeTokensViaHopL2ERC20Packed";
        readonly outputs: readonly [{
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "bonderFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOutMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationDeadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "contract IHopBridge";
                readonly name: "hopBridge";
                readonly type: "address";
            }];
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "decode_startBridgeTokensViaHopL2NativePacked";
        readonly outputs: readonly [{
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "bonderFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOutMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationDeadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "contract IHopBridge";
                readonly name: "hopBridge";
                readonly type: "address";
            }];
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "maxSlippage";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly name: "_cBridgeData";
            readonly type: "tuple";
        }];
        readonly name: "encode_startBridgeTokensViaCBridgeERC20Packed";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "maxSlippage";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly name: "_cBridgeData";
            readonly type: "tuple";
        }];
        readonly name: "encode_startBridgeTokensViaCBridgeNativePacked";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "bonderFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOutMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationDeadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "contract IHopBridge";
                readonly name: "hopBridge";
                readonly type: "address";
            }];
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly name: "_hopData";
            readonly type: "tuple";
        }];
        readonly name: "encode_startBridgeTokensViaHopL2ERC20Packed";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "bonderFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOutMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationDeadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "contract IHopBridge";
                readonly name: "hopBridge";
                readonly type: "address";
            }];
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly name: "_hopData";
            readonly type: "tuple";
        }];
        readonly name: "encode_startBridgeTokensViaHopL2NativePacked";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): PackedEncoderDecoderFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PackedEncoderDecoderFacet;
}
export {};