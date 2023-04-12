import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { FusePoolZap, FusePoolZapInterface } from "../../FusePoolZap.sol/FusePoolZap";
declare type FusePoolZapConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FusePoolZap__factory extends ContractFactory {
    constructor(...args: FusePoolZapConstructorParams);
    deploy(_fusePoolDirectory: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FusePoolZap>;
    getDeployTransaction(_fusePoolDirectory: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FusePoolZap;
    connect(signer: Signer): FusePoolZap__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161155e38038061155e83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516114cd6100916000396000818160c6015261063201526114cd6000f3fe6080604052600436106100295760003560e01c80637f31d7671461002e578063fe47068d14610050575b600080fd5b34801561003a57600080fd5b5061004e6100493660046112fd565b610063565b005b61004e61005e36600461133e565b6105cf565b73ffffffffffffffffffffffffffffffffffffffff8316158061013357506040517f1e1c6a0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301527f00000000000000000000000000000000000000000000000000000000000000001690631e1c6a0790602401602060405180830381865afa15801561010d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101319190611362565b155b15610187576040517fbf6f485400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024015b60405180910390fd5b806000036101c1576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f31ff47fa00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152600091908516906331ff47fa90602401602060405180830381865afa158015610231573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102559190611384565b905073ffffffffffffffffffffffffffffffffffffffff81166102bc576040517f80855e9e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260240161017e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610329573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034d91906113a1565b905061035b84333086610b3a565b61037d73ffffffffffffffffffffffffffffffffffffffff8516836000610d54565b61039e73ffffffffffffffffffffffffffffffffffffffff85168385610d54565b6040517fa0712d680000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff83169063a0712d68906024016020604051808303816000875af115801561040b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042f91906113a1565b506040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600090829073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561049f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c391906113a1565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015291900360248201819052915073ffffffffffffffffffffffffffffffffffffffff84169063a9059cbb906044016020604051808303816000875af115801561053b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055f9190611362565b508273ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fd7879fe88ac1f070dbb9697d39e6b022615c004aad3a6ab63c2423d30bde8223836040516105bf91815260200190565b60405180910390a3505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116158061069f57506040517f1e1c6a0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f00000000000000000000000000000000000000000000000000000000000000001690631e1c6a0790602401602060405180830381865afa158015610679573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069d9190611362565b155b156106ee576040517fbf6f485400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8216600482015260240161017e565b34600003610728576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f31ff47fa0000000000000000000000000000000000000000000000000000000081526000600482018190529073ffffffffffffffffffffffffffffffffffffffff8316906331ff47fa90602401602060405180830381865afa158015610796573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ba9190611384565b905073ffffffffffffffffffffffffffffffffffffffff811661080c576040517f80855e9e0000000000000000000000000000000000000000000000000000000081526000600482015260240161017e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610879573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089d91906113a1565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f1249c58b000000000000000000000000000000000000000000000000000000001790529051919250600091829173ffffffffffffffffffffffffffffffffffffffff8616913491610920916113de565b60006040518083038185875af1925050503d806000811461095d576040519150601f19603f3d011682016040523d82523d6000602084013e610962565b606091505b506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529193509150600090849073ffffffffffffffffffffffffffffffffffffffff8716906370a0823190602401602060405180830381865afa1580156109d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fb91906113a1565b03905082158015610a0a575080155b15610a4357816040517f95428dd500000000000000000000000000000000000000000000000000000000815260040161017e9190611444565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810182905273ffffffffffffffffffffffffffffffffffffffff86169063a9059cbb906044016020604051808303816000875af1158015610ab6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ada9190611362565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fd7879fe88ac1f070dbb9697d39e6b022615c004aad3a6ab63c2423d30bde8223836040516105bf91815260200190565b73ffffffffffffffffffffffffffffffffffffffff8416610b87576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bd4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610c45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6991906113a1565b9050610c7782868686610f59565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610ce7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0b91906113a1565b610d159190611457565b14610d4c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b801580610df457506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610dce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df291906113a1565b155b610e80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161017e565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610f549084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610fbd565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610fb79085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610ed2565b50505050565b600061101f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166110c99092919063ffffffff16565b805190915015610f54578080602001905181019061103d9190611362565b610f54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161017e565b60606110d884846000856110e0565b949350505050565b606082471015611172576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161017e565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161119b91906113de565b60006040518083038185875af1925050503d80600081146111d8576040519150601f19603f3d011682016040523d82523d6000602084013e6111dd565b606091505b50915091506111ee878383876111f9565b979650505050505050565b6060831561128f5782516000036112885773ffffffffffffffffffffffffffffffffffffffff85163b611288576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161017e565b50816110d8565b6110d883838151156112a45781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017e9190611444565b73ffffffffffffffffffffffffffffffffffffffff811681146112fa57600080fd5b50565b60008060006060848603121561131257600080fd5b833561131d816112d8565b9250602084013561132d816112d8565b929592945050506040919091013590565b60006020828403121561135057600080fd5b813561135b816112d8565b9392505050565b60006020828403121561137457600080fd5b8151801515811461135b57600080fd5b60006020828403121561139657600080fd5b815161135b816112d8565b6000602082840312156113b357600080fd5b5051919050565b60005b838110156113d55781810151838201526020016113bd565b50506000910152565b600082516113f08184602087016113ba565b9190910192915050565b600081518084526114128160208601602086016113ba565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061135b60208301846113fa565b81810381811115611491577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9291505056fea2646970667358221220ec61cd5aab2b5e5f64fa09e672d61fa3c56c038343af30a3af325785fa19fd5664736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_fusePoolDirectory";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "InvalidPoolAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "InvalidSupplyToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "MintingError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroAmount";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "fToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "ZappedIn";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_pool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_supplyToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "zapIn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_pool";
            readonly type: "address";
        }];
        readonly name: "zapIn";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): FusePoolZapInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FusePoolZap;
}
export {};
