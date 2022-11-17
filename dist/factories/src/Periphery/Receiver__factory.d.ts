import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Receiver, ReceiverInterface } from "../../../src/Periphery/Receiver";
declare type ReceiverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Receiver__factory extends ContractFactory {
    constructor(...args: ReceiverConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Receiver>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Receiver;
    connect(signer: Signer): Receiver__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162001f3e38038062001f3e8339810160408190526200003491620000f2565b600080546001600160a01b038087166001600160a01b0319928316178355600280548783169084168117909155600380549287169290931691909117909155600483905560405190917f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab91a260405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a25050505062000144565b80516001600160a01b0381168114620000ed57600080fd5b919050565b600080600080608085870312156200010957600080fd5b6200011485620000d5565b93506200012460208601620000d5565b92506200013460408601620000d5565b6060959095015193969295505050565b611dea80620001546000396000f3fe6080604052600436106100d25760003560e01c80637200b8291161007f578063bcf225e611610059578063bcf225e6146101f3578063c34c08e514610217578063e30c397814610237578063f2fde38b1461025757600080fd5b80637200b8291461019e5780638da5cb5b146101b3578063ab8236f3146101d357600080fd5b80633184cc22116100b05780633184cc221461014b5780634f91bc2b1461016b57806351b78b471461017e57600080fd5b80630517cb76146100d757806323452b9c146101145780632e1445791461012b575b600080fd5b3480156100e357600080fd5b506002546100f7906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561012057600080fd5b50610129610277565b005b34801561013757600080fd5b506101296101463660046115f2565b610327565b34801561015757600080fd5b50610129610166366004611633565b6103e8565b610129610179366004611790565b61045f565b34801561018a57600080fd5b50610129610199366004611904565b6105b1565b3480156101aa57600080fd5b50610129610657565b3480156101bf57600080fd5b506000546100f7906001600160a01b031681565b3480156101df57600080fd5b506101296101ee366004611921565b610716565b3480156101ff57600080fd5b5061020960045481565b60405190815260200161010b565b34801561022357600080fd5b506003546100f7906001600160a01b031681565b34801561024357600080fd5b506001546100f7906001600160a01b031681565b34801561026357600080fd5b50610129610272366004611904565b6108f5565b6000546001600160a01b031633146102bb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546001600160a01b03166102fd576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6000546001600160a01b0316331461036b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b0383166103cf576040516001600160a01b038316908290600081818185875af1925050503d80600081146103c2576040519150601f19603f3d011682016040523d82523d6000602084013e6103c7565b606091505b505050505050565b6103e36001600160a01b0384168383610a1f565b505050565b6000546001600160a01b0316331461042c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600481905560405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104da576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556001600160a01b038316610500576104fb85858585346000610ac8565b6105a7565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201526000906001600160a01b0385169063dd62ed3e90604401602060405180830381865afa158015610566573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058a91906119c5565b90506105968482610d01565b6105a586868686856000610ac8565b505b6000905550505050565b6000546001600160a01b031633146105f5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040517f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab90600090a250565b6001546001600160a01b031633811461069c576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610791576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556002546001600160a01b031633146107d9576040517f1aba923d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806000848060200190518101906107f29190611a65565b935050925092506004545a10156108d6576001600160a01b038716610867576040516001600160a01b038216908790600081818185875af1925050503d806000811461085a576040519150601f19603f3d011682016040523d82523d6000602084013e61085f565b606091505b50505061087b565b61087b6001600160a01b0388168288610a1f565b604080516001600160a01b03808a1682528316602082015290810187905242606082015283907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a25050506108e9565b6108e5838389848a6001610ac8565b5050505b60009055505050505050565b6000546001600160a01b03163314610939576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038116610979576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336001600160a01b038216036109bb576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6040516001600160a01b0383166024820152604481018290526103e39084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610e62565b60008082610ad7576000610adb565b6004545b90506001600160a01b038616610bbc576003546001600160a01b0316634f91bc2b85835a610b099190611bfc565b908b8b8b8b6040518763ffffffff1660e01b8152600401610b2d9493929190611c41565b6000604051808303818589803b158015610b4657600080fd5b5088f19450505050508015610b59575060015b610bb3576040516001600160a01b038616908590600081818185875af1925050503d8060008114610ba6576040519150601f19603f3d011682016040523d82523d6000602084013e610bab565b606091505b505050610c9e565b60019150610c9e565b6003548690610bd9906001600160a01b0380841691166000610f61565b600354610bf3906001600160a01b038381169116876110c9565b6003546001600160a01b0316634f91bc2b835a610c109190611bfc565b8b8b8b8b6040518663ffffffff1660e01b8152600401610c339493929190611c41565b600060405180830381600088803b158015610c4d57600080fd5b5087f193505050508015610c5f575060015b610c7c57610c776001600160a01b0382168787610a1f565b610c81565b600192505b600354610c9c906001600160a01b0383811691166000610f61565b505b81610cf757604080516001600160a01b0380891682528716602082015290810185905242606082015288907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a25b5050505050505050565b6001600160a01b038216610d4d5780341015610d49576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610d87576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610de7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0b91906119c5565b905081811015610e56576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6103e3833330856111b3565b6000610eb7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113919092919063ffffffff16565b8051909150156103e35780806020019051810190610ed59190611d55565b6103e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610e4d565b801580610ff457506040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610fce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff291906119c5565b155b611080576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610e4d565b6040516001600160a01b0383166024820152604481018290526103e39084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610a64565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611133573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115791906119c5565b6111619190611d72565b6040516001600160a01b0385166024820152604481018290529091506111ad9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610a64565b50505050565b6001600160a01b0384166111f3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038216611233576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b03838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611297573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112bb91906119c5565b90506112c9828686866113aa565b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152849183918516906370a0823190602401602060405180830381865afa15801561132c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061135091906119c5565b61135a9190611bfc565b146103c7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60606113a084846000856113fb565b90505b9392505050565b6040516001600160a01b03808516602483015283166044820152606481018290526111ad9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610a64565b60608247101561148d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610e4d565b6001600160a01b0385163b6114fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610e4d565b600080866001600160a01b0316858760405161151a9190611d85565b60006040518083038185875af1925050503d8060008114611557576040519150601f19603f3d011682016040523d82523d6000602084013e61155c565b606091505b509150915061156c828286611577565b979650505050505050565b606083156115865750816113a3565b8251156115965782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4d9190611da1565b6001600160a01b03811681146115df57600080fd5b50565b80356115ed816115ca565b919050565b60008060006060848603121561160757600080fd5b8335611612816115ca565b92506020840135611622816115ca565b929592945050506040919091013590565b60006020828403121561164557600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561169e5761169e61164c565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156116cd576116cd61164c565b604052919050565b600067ffffffffffffffff8211156116ef576116ef61164c565b5060051b60200190565b600067ffffffffffffffff8211156117135761171361164c565b50601f01601f191660200190565b600082601f83011261173257600080fd5b8135611745611740826116f9565b6116a4565b81815284602083860101111561175a57600080fd5b816020850160208301376000918101602001919091529392505050565b80151581146115df57600080fd5b80356115ed81611777565b600080600080608085870312156117a657600080fd5b84359350602085013567ffffffffffffffff808211156117c557600080fd5b818701915087601f8301126117d957600080fd5b81356117e7611740826116d5565b8082825260208201915060208360051b86010192508a83111561180957600080fd5b602085015b838110156118d657848135111561182457600080fd5b8035860160e0601f19828f0301121561183c57600080fd5b61184461167b565b611850602083016115e2565b815261185e604083016115e2565b602082015261186f606083016115e2565b6040820152611880608083016115e2565b606082015260a0820135608082015260c0820135878111156118a157600080fd5b6118b08f602083860101611721565b60a0830152506118c260e08301611785565b60c08201528452506020928301920161180e565b5080975050505050506118eb604086016115e2565b91506118f9606086016115e2565b905092959194509250565b60006020828403121561191657600080fd5b81356113a3816115ca565b60008060008060008060c0878903121561193a57600080fd5b863561ffff8116811461194c57600080fd5b9550602087013567ffffffffffffffff8082111561196957600080fd5b6119758a838b01611721565b9650604089013595506060890135915061198e826115ca565b9093506080880135925060a088013590808211156119ab57600080fd5b506119b889828a01611721565b9150509295509295509295565b6000602082840312156119d757600080fd5b5051919050565b80516115ed816115ca565b60005b83811015611a045781810151838201526020016119ec565b50506000910152565b600082601f830112611a1e57600080fd5b8151611a2c611740826116f9565b818152846020838601011115611a4157600080fd5b611a528260208301602087016119e9565b949350505050565b80516115ed81611777565b60008060008060808587031215611a7b57600080fd5b84519350602085015167ffffffffffffffff80821115611a9a57600080fd5b818701915087601f830112611aae57600080fd5b8151611abc611740826116d5565b8082825260208201915060208360051b86010192508a831115611ade57600080fd5b602085015b83811015611baa57805185811115611afa57600080fd5b860160e0818e03601f19011215611b1057600080fd5b611b1861167b565b611b24602083016119de565b8152611b32604083016119de565b6020820152611b43606083016119de565b6040820152611b54608083016119de565b606082015260a0820151608082015260c082015187811115611b7557600080fd5b611b848f602083860101611a0d565b60a083015250611b9660e08301611a5a565b60c082015284525060209283019201611ae3565b508097505050505050611bbf604086016119de565b91506118f9606086016119de565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611c0f57611c0f611bcd565b92915050565b60008151808452611c2d8160208601602086016119e9565b601f01601f19169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015611d1f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a8403018552815180516001600160a01b039081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e089860181905290611cf382870182611c15565b91505060c0808301519250611d0b8187018415159052565b509587019593505090850190600101611c6f565b50506001600160a01b038a1660408901529550611d3d945050505050565b6001600160a01b038316606083015295945050505050565b600060208284031215611d6757600080fd5b81516113a381611777565b80820180821115611c0f57611c0f611bcd565b60008251611d978184602087016119e9565b9190910192915050565b6020815260006113a36020830184611c1556fea264697066735822122045f9764cc1d76aa2d3a4e7ac193b92d2d627cb9a08ba092a153ba604cc8318cb64736f6c63430008110033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Receiver;
}
export {};
