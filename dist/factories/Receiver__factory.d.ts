import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Receiver, ReceiverInterface } from "../Receiver";
declare type ReceiverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Receiver__factory extends ContractFactory {
    constructor(...args: ReceiverConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Receiver>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Receiver;
    connect(signer: Signer): Receiver__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620027d4380380620027d4833981016040819052620000349162000134565b600080546001600160a01b038088166001600160a01b031992831617835560028054888316908416811790915560058054888416908516179055600380549287169290931691909117909155600483905560405190917f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab91a26040516001600160a01b038416907fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a260405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250505050506200019b565b80516001600160a01b03811681146200012f57600080fd5b919050565b600080600080600060a086880312156200014d57600080fd5b620001588662000117565b9450620001686020870162000117565b9350620001786040870162000117565b9250620001886060870162000117565b9150608086015190509295509295909350565b61262980620001ab6000396000f3fe6080604052600436106101125760003560e01c80637aacd8f8116100a5578063bcf225e611610074578063e30c397811610059578063e30c39781461031f578063f2fde38b1461034c578063fd614f411461036c57600080fd5b8063bcf225e6146102ce578063c34c08e5146102f257600080fd5b80637aacd8f8146102345780638199c105146102615780638da5cb5b14610281578063ab8236f3146102ae57600080fd5b80633184cc22116100e15780633184cc22146101cc5780634f91bc2b146101ec57806351b78b47146101ff5780637200b8291461021f57600080fd5b80630517cb761461011e5780631c3c0ea81461017557806323452b9c146101975780632e144579146101ac57600080fd5b3661011957005b600080fd5b34801561012a57600080fd5b5060025461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018157600080fd5b50610195610190366004611c72565b61038c565b005b3480156101a357600080fd5b5061019561044c565b3480156101b857600080fd5b506101956101c7366004611c96565b610516565b3480156101d857600080fd5b506101956101e7366004611cd7565b61060b565b6101956101fa366004611e70565b61068f565b34801561020b57600080fd5b5061019561021a366004611c72565b6107fb565b34801561022b57600080fd5b506101956108bb565b34801561024057600080fd5b5060055461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026d57600080fd5b5061019561027c366004611c72565b6109a1565b34801561028d57600080fd5b5060005461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102ba57600080fd5b506101956102c9366004612002565b610a61565b3480156102da57600080fd5b506102e460045481565b60405190815260200161016c565b3480156102fe57600080fd5b5060035461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561032b57600080fd5b5060015461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561035857600080fd5b50610195610367366004611c72565b610b70565b34801561037857600080fd5b506101956103873660046120a6565b610cce565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103dd576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f3e3c5e6d5b512eaa5d5a80669846cfbaf8bde70fc6f7a3be9828cffc9ba5f1db90600090a250565b60005473ffffffffffffffffffffffffffffffffffffffff16331461049d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166104ec576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610567576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166105e55760405173ffffffffffffffffffffffffffffffffffffffff8316908290600081818185875af1925050503d80600081146105d8576040519150601f19603f3d011682016040523d82523d6000602084013e6105dd565b606091505b505050505050565b61060673ffffffffffffffffffffffffffffffffffffffff84168383610dd6565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461065c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600481905560405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161070a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815573ffffffffffffffffffffffffffffffffffffffff831661073d5761073885858585346000610eaa565b6107f1565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff85169063dd62ed3e90604401602060405180830381865afa1580156107b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d49190612129565b90506107e084826112b1565b6107ef86868686856000610eaa565b505b6000905550505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461084c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab90600090a250565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461090d576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146109f2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a250565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610adc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560025473ffffffffffffffffffffffffffffffffffffffff163314610b31576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080600084806020019051810190610b4a9190612308565b93505092509250610b60838389848a6001610eaa565b5050600090915550505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610bc1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610c0e576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610c5d576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610d49576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560055473ffffffffffffffffffffffffffffffffffffffff163314610d9e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008083806020019051810190610db59190612375565b91509150610dc8898389848c6000610eaa565b505060009055505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106069084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261142c565b600081610eb8576000610ebc565b6004545b905073ffffffffffffffffffffffffffffffffffffffff851661109557818015610ee55750805a105b15610fae5760405173ffffffffffffffffffffffffffffffffffffffff8516908490600081818185875af1925050503d8060008114610f40576040519150601f19603f3d011682016040523d82523d6000602084013e610f45565b606091505b50506040805173ffffffffffffffffffffffffffffffffffffffff8089168252871660208201529081018590524260608201528891507f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2506105dd565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b84835a610fd991906123f6565b908a8a8a8a6040518763ffffffff1660e01b8152600401610ffd9493929190612459565b6000604051808303818589803b15801561101657600080fd5b5088f19450505050508015611029575060015b6110905760405173ffffffffffffffffffffffffffffffffffffffff8516908490600081818185875af1925050503d8060008114611083576040519150601f19603f3d011682016040523d82523d6000602084013e611088565b606091505b5050506112a8565b6112a8565b60035485906110bf9073ffffffffffffffffffffffffffffffffffffffff80841691166000611538565b6003546110e69073ffffffffffffffffffffffffffffffffffffffff8381169116866116ba565b8280156110f25750815a105b1561117f5761111873ffffffffffffffffffffffffffffffffffffffff82168686610dd6565b6040805173ffffffffffffffffffffffffffffffffffffffff80891682528716602082015290810185905242606082015288907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a250506105dd565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b835a6111a991906123f6565b8a8a8a8a6040518663ffffffff1660e01b81526004016111cc9493929190612459565b600060405180830381600088803b1580156111e657600080fd5b5087f1935050505080156111f8575060015b61127e5761121d73ffffffffffffffffffffffffffffffffffffffff82168686610dd6565b6040805173ffffffffffffffffffffffffffffffffffffffff80891682528716602082015290810185905242606082015288907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b6003546112a69073ffffffffffffffffffffffffffffffffffffffff83811691166000611538565b505b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661130a5780341015611306576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003611344576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156113b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d59190612129565b905081811015611420576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610606833330856117be565b600061148e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166119d09092919063ffffffff16565b80519091501561060657808060200190518101906114ac9190612594565b610606576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401611417565b8015806115d857506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156115b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d69190612129565b155b611664576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401611417565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106069084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610e28565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611731573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117559190612129565b61175f91906125b1565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506117b89085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610e28565b50505050565b73ffffffffffffffffffffffffffffffffffffffff841661180b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611858576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156118c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ed9190612129565b90506118fb828686866119e7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561196b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198f9190612129565b61199991906123f6565b146105dd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60606119df8484600085611a45565b949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526117b89085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610e28565b606082471015611ad7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401611417565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611b0091906125c4565b60006040518083038185875af1925050503d8060008114611b3d576040519150601f19603f3d011682016040523d82523d6000602084013e611b42565b606091505b5091509150611b5387838387611b5e565b979650505050505050565b60608315611bf4578251600003611bed5773ffffffffffffffffffffffffffffffffffffffff85163b611bed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611417565b50816119df565b6119df8383815115611c095781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141791906125e0565b73ffffffffffffffffffffffffffffffffffffffff81168114611c5f57600080fd5b50565b8035611c6d81611c3d565b919050565b600060208284031215611c8457600080fd5b8135611c8f81611c3d565b9392505050565b600080600060608486031215611cab57600080fd5b8335611cb681611c3d565b92506020840135611cc681611c3d565b929592945050506040919091013590565b600060208284031215611ce957600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611d4257611d42611cf0565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d8f57611d8f611cf0565b604052919050565b600067ffffffffffffffff821115611db157611db1611cf0565b5060051b60200190565b600067ffffffffffffffff821115611dd557611dd5611cf0565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611e1257600080fd5b8135611e25611e2082611dbb565b611d48565b818152846020838601011115611e3a57600080fd5b816020850160208301376000918101602001919091529392505050565b8015158114611c5f57600080fd5b8035611c6d81611e57565b60008060008060808587031215611e8657600080fd5b84359350602085013567ffffffffffffffff80821115611ea557600080fd5b818701915087601f830112611eb957600080fd5b8135611ec7611e2082611d97565b8082825260208201915060208360051b86010192508a831115611ee957600080fd5b602085015b83811015611fd4578481351115611f0457600080fd5b8035860160e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828f03011215611f3a57600080fd5b611f42611d1f565b611f4e60208301611c62565b8152611f5c60408301611c62565b6020820152611f6d60608301611c62565b6040820152611f7e60808301611c62565b606082015260a0820135608082015260c082013587811115611f9f57600080fd5b611fae8f602083860101611e01565b60a083015250611fc060e08301611e65565b60c082015284525060209283019201611eee565b508097505050505050611fe960408601611c62565b9150611ff760608601611c62565b905092959194509250565b60008060008060008060c0878903121561201b57600080fd5b863561ffff8116811461202d57600080fd5b9550602087013567ffffffffffffffff8082111561204a57600080fd5b6120568a838b01611e01565b9650604089013595506060890135915061206f82611c3d565b9093506080880135925060a0880135908082111561208c57600080fd5b5061209989828a01611e01565b9150509295509295509295565b60008060008060008060c087890312156120bf57600080fd5b863595506020870135945060408701356120d881611c3d565b935060608701356120e881611c3d565b9250608087013563ffffffff8116811461210157600080fd5b915060a087013567ffffffffffffffff81111561211d57600080fd5b61209989828a01611e01565b60006020828403121561213b57600080fd5b5051919050565b8051611c6d81611c3d565b60005b83811015612168578181015183820152602001612150565b50506000910152565b600082601f83011261218257600080fd5b8151612190611e2082611dbb565b8181528460208386010111156121a557600080fd5b6119df82602083016020870161214d565b8051611c6d81611e57565b600082601f8301126121d257600080fd5b815160206121e2611e2083611d97565b82815260059290921b8401810191818101908684111561220157600080fd5b8286015b848110156122fd57805167ffffffffffffffff808211156122265760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d0301121561225f5760008081fd5b612267611d1f565b612272888501612142565b81526040612281818601612142565b898301526060612292818701612142565b82840152608091506122a5828701612142565b818401525060a0808601518284015260c0915081860151858111156122ca5760008081fd5b6122d88f8c838a0101612171565b8285015250506122e98386016121b6565b908201528652505050918301918301612205565b509695505050505050565b6000806000806080858703121561231e57600080fd5b84519350602085015167ffffffffffffffff81111561233c57600080fd5b612348878288016121c1565b935050604085015161235981611c3d565b606086015190925061236a81611c3d565b939692955090935050565b6000806040838503121561238857600080fd5b825167ffffffffffffffff81111561239f57600080fd5b6123ab858286016121c1565b92505060208301516123bc81611c3d565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115612409576124096123c7565b92915050565b6000815180845261242781602086016020860161214d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015612544577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e0898601819052906125188287018261240f565b91505060c08083015192506125308187018415159052565b509587019593505090850190600101612487565b505073ffffffffffffffffffffffffffffffffffffffff8a166040890152955061256f945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b6000602082840312156125a657600080fd5b8151611c8f81611e57565b80820180821115612409576124096123c7565b600082516125d681846020870161214d565b9190910192915050565b602081526000611c8f602083018461240f56fea26469706673582212206950e5aae4847bdaf34a40fed54e4a5ad7d94fba04a6ce328b2189047b872d0464736f6c63430008110033";
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
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Receiver;
}
export {};
