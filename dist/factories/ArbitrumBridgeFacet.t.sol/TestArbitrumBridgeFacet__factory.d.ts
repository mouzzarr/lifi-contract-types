import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TestArbitrumBridgeFacet, TestArbitrumBridgeFacetInterface } from "../../ArbitrumBridgeFacet.t.sol/TestArbitrumBridgeFacet";
declare type TestArbitrumBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestArbitrumBridgeFacet__factory extends ContractFactory {
    constructor(...args: TestArbitrumBridgeFacetConstructorParams);
    deploy(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestArbitrumBridgeFacet>;
    getDeployTransaction(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestArbitrumBridgeFacet;
    connect(signer: Signer): TestArbitrumBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002fb638038062002fb6833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051612ee8620000ce60003960006112300152600081816113ac01526114250152612ee86000f3fe60806040526004361061003f5760003560e01c80633cc9517b14610044578063536db26614610059578063c561c14814610079578063c9851d0b14610099575b600080fd5b610057610052366004612823565b6100ac565b005b34801561006557600080fd5b506100576100743660046128cf565b610363565b34801561008557600080fd5b506100576100943660046128ec565b61036f565b6100576100a736600461292e565b6103ed565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610127576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061013834476129ac565b905086806101000151610177576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361024d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361028a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061029e604089013560208a01356129bf565b6102a99089356129d6565b905060006102b734476129ac565b90506102cf8c600001518d60c001518d8d338761064d565b60c08d015260808c015173ffffffffffffffffffffffffffffffffffffffff1661030957818c60c00181815161030591906129ac565b9052505b61031e8c8a8461031985476129ac565b6107c5565b50479350600092505050828211610336576000610340565b61034083836129ac565b905080156103545761035460008583610979565b50506000909255505050505050565b61036c816109af565b50565b61036c817fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610468576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061047934476129ac565b905084806101000151156104b9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156104f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8661051a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610551576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361058f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105cc576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006105e0604089013560208a01356129bf565b6105eb9089356129d6565b90506105ff89608001518a60c00151610a9c565b61060b898983346107c5565b50479250600091505082821161062257600061062c565b61062c83836129ac565b905080156106405761064060008583610979565b5050600090925550505050565b600083808203610689576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866106986001856129ac565b8181106106a7576106a76129e9565b90506020028101906106b99190612a18565b6106ca9060808101906060016128cf565b905060006106d782610c12565b905073ffffffffffffffffffffffffffffffffffffffff8216610701576106fe34826129ac565b90505b600061070d8989610ccb565b90506107198989610dd7565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610754818b8b85610e38565b60008361076086610c12565b61076a91906129ac565b90508b8110156107b5576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b836107e88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561081f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361085d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361089a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006108be866080015173ffffffffffffffffffffffffffffffffffffffff161590565b90506000816108cd57846108dc565b60c08701516108dc90866129d6565b905080841015610918576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b811561092e5761092987878761122e565b610939565b61093987878761135d565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1876040516109689190612ac4565b60405180910390a150505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156109a5576109a0838383611534565b505050565b6109a08282611663565b6109b88161178d565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610a0c575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b73ffffffffffffffffffffffffffffffffffffffff8216610af55780341015610af1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610b2f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc09190612bd7565b905081811015610c06576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016107ac565b6109a08333308561182b565b600073ffffffffffffffffffffffffffffffffffffffff821615610cc3576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbe9190612bd7565b610cc5565b475b92915050565b60608160008167ffffffffffffffff811115610ce957610ce9612574565b604051908082528060200260200182016040528015610d12578160200160208202803683370190505b5090506000805b83811015610dcc57868682818110610d3357610d336129e9565b9050602002810190610d459190612a18565b610d569060808101906060016128cf565b9150610d6182610c12565b838281518110610d7357610d736129e9565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610dc45734838281518110610dac57610dac6129e9565b60200260200101818151610dc091906129ac565b9052505b600101610d19565b509095945050505050565b60005b818110156109a0576000838383818110610df657610df66129e9565b9050602002810190610e089190612a18565b610e1190612bf0565b90508060c0015115610e2f57610e2f81604001518260800151610a9c565b50600101610dda565b6020840151604085015184918491849083600181146111475760008686610e606001856129ac565b818110610e6f57610e6f6129e9565b9050602002810190610e819190612a18565b610e929060808101906060016128cf565b9050600089815b8181101561103f57368d8d83818110610eb457610eb46129e9565b9050602002810190610ec69190612a18565b9050610ef5610edb60608301604084016128cf565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f585750610f58610f0e60408301602084016128cf565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f6f5750610f6f610f0e60208301836128cf565b8015610ff45750610ff4610f8660a0830183612c95565b610f9591600491600091612d01565b610f9e91612d2b565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61102a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516110369082611a45565b50600101610e99565b505060005b61104f6001856129ac565b81101561113f57600089898381811061106a5761106a6129e9565b905060200281019061107c9190612a18565b61108d9060808101906060016128cf565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611136578682815181106110d4576110d46129e9565b60200260200101516110e582610c12565b6110ef91906129ac565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611116576000611118565b865b9050831561113457611134828a61112f84886129ac565b610979565b505b50600101611044565b505050611222565b8760005b8181101561121f57368b8b83818110611166576111666129e9565b90506020028101906111789190612a18565b905061118d610edb60608301604084016128cf565b806111a657506111a6610f0e60408301602084016128cf565b80156111bd57506111bd610f0e60208301836128cf565b80156111d457506111d4610f8660a0830183612c95565b61120a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516112169082611a45565b5060010161114b565b50505b50505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e6e8a6a828560c0015161127a91906129d6565b60a086015160c08701516040805160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff90931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e482015260006101048201526101240160206040518083038185885af1158015611332573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906113579190612bd7565b50505050565b60808301516040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808316600483015261142392917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa1580156113f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114199190612d73565b8560c00151611d5b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d2ce7d658285608001518660a001518760c0015187602001358860400135896000013560405160200161149f91815260406020820181905260009082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b81526004016114cf96959493929190612d90565b60006040518083038185885af11580156114ed573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526113579190810190612e17565b73ffffffffffffffffffffffffffffffffffffffff8316611581576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156115ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116129190612bd7565b905080821115611658576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016107ac565b611357848484611ea0565b73ffffffffffffffffffffffffffffffffffffffff82166116b0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156116f3576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016107ac565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461174d576040519150601f19603f3d011682016040523d82523d6000602084013e611752565b606091505b50509050806109a0576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166117da576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b60000361036c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611878576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166118c5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061195a9190612bd7565b905061196882868686611f74565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156119d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119fc9190612bd7565b611a0691906129ac565b14611a3d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611a5b611a5560208301836128cf565b3b151590565b611a91576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611ad1576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611ae6610edb60608501604086016128cf565b611af1576000611af7565b82608001355b90506000611b13611b0e60608601604087016128cf565b610c12565b90506000611b2a611b0e60808701606088016128cf565b905082600003611b6157611b61611b4760608701604088016128cf565b611b5760408801602089016128cf565b8760800135611d5b565b8460800135821015611bac576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016107ac565b600080611bbc60208801886128cf565b73ffffffffffffffffffffffffffffffffffffffff1685611be060a08a018a612c95565b604051611bee929190612e60565b60006040518083038185875af1925050503d8060008114611c2b576040519150601f19603f3d011682016040523d82523d6000602084013e611c30565b606091505b509150915081611c7b576000611c4582611fd2565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ac9190612e70565b6000611c90611b0e60808a0160608b016128cf565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611cc160208b018b6128cf565b611cd160608c0160408d016128cf565b611ce160808d0160608e016128cf565b8c60800135898711611cf35786611cfd565b611cfd8a886129ac565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611d7b57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611dc8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611e3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e629190612bd7565b905081811015611357576113578484611e9b847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6129ac565b612050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109a09084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261214e565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113579085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611ef2565b606060448251101561201757505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000612033600480855161202b91906129ac565b85919061225a565b9050808060200190518101906120499190612e17565b9392505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156120c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120eb9190612bd7565b6120f591906129d6565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506113579085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611ef2565b60006121b0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166123749092919063ffffffff16565b8051909150156109a057808060200190518101906121ce9190612e83565b6109a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016107ac565b60608161226881601f6129d6565b10156122a0576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6122aa82846129d6565b845110156122e4576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015612303576040519150600082526020820160405261236b565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561233c578051835260209283019201612324565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060612383848460008561238b565b949350505050565b60608247101561241d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016107ac565b73ffffffffffffffffffffffffffffffffffffffff85163b61249b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016107ac565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516124c49190612ea0565b60006040518083038185875af1925050503d8060008114612501576040519150601f19603f3d011682016040523d82523d6000602084013e612506565b606091505b5091509150612516828286612521565b979650505050505050565b60608315612530575081612049565b8251156125405782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ac9190612e70565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156125c7576125c7612574565b60405290565b60405160e0810167ffffffffffffffff811182821017156125c7576125c7612574565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561263757612637612574565b604052919050565b600067ffffffffffffffff82111561265957612659612574565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261269657600080fd5b81356126a96126a48261263f565b6125f0565b8181528460208386010111156126be57600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461036c57600080fd5b8035612708816126db565b919050565b801515811461036c57600080fd5b80356127088161270d565b6000610140828403121561273957600080fd5b6127416125a3565b905081358152602082013567ffffffffffffffff8082111561276257600080fd5b61276e85838601612685565b6020840152604084013591508082111561278757600080fd5b5061279484828501612685565b6040830152506127a6606083016126fd565b60608201526127b7608083016126fd565b60808201526127c860a083016126fd565b60a082015260c082013560c082015260e082013560e08201526101006127ef81840161271b565b9082015261012061280183820161271b565b9082015292915050565b60006060828403121561281d57600080fd5b50919050565b60008060008060a0858703121561283957600080fd5b843567ffffffffffffffff8082111561285157600080fd5b61285d88838901612726565b9550602087013591508082111561287357600080fd5b818701915087601f83011261288757600080fd5b81358181111561289657600080fd5b8860208260051b85010111156128ab57600080fd5b6020830195508094505050506128c4866040870161280b565b905092959194509250565b6000602082840312156128e157600080fd5b8135612049816126db565b6000602082840312156128fe57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461204957600080fd5b6000806080838503121561294157600080fd5b823567ffffffffffffffff81111561295857600080fd5b61296485828601612726565b925050612974846020850161280b565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610cc557610cc561297d565b8082028115828204841417610cc557610cc561297d565b80820180821115610cc557610cc561297d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612a4c57600080fd5b9190910192915050565b60005b83811015612a71578181015183820152602001612a59565b50506000910152565b60008151808452612a92816020860160208601612a56565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612aed610160850183612a7a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612b288382612a7a565b9250506060850151612b52608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612bc58187018315159052565b90950151151593019290925250919050565b600060208284031215612be957600080fd5b5051919050565b600060e08236031215612c0257600080fd5b612c0a6125cd565b612c13836126fd565b8152612c21602084016126fd565b6020820152612c32604084016126fd565b6040820152612c43606084016126fd565b60608201526080830135608082015260a083013567ffffffffffffffff811115612c6c57600080fd5b612c7836828601612685565b60a083015250612c8a60c0840161271b565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612cca57600080fd5b83018035915067ffffffffffffffff821115612ce557600080fd5b602001915036819003821315612cfa57600080fd5b9250929050565b60008085851115612d1157600080fd5b83861115612d1e57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612d6b5780818660040360031b1b83161692505b505092915050565b600060208284031215612d8557600080fd5b8151612049816126db565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015284606083015283608083015260c060a0830152612ddb60c0830184612a7a565b98975050505050505050565b6000612df56126a48461263f565b9050828152838383011115612e0957600080fd5b612049836020830184612a56565b600060208284031215612e2957600080fd5b815167ffffffffffffffff811115612e4057600080fd5b8201601f81018413612e5157600080fd5b61238384825160208401612de7565b8183823760009101908152919050565b6020815260006120496020830184612a7a565b600060208284031215612e9557600080fd5b81516120498161270d565b60008251612a4c818460208701612a5656fea26469706673582212207a66949c2ab1d523abe995a5fef68ec7b5300731968d01704b03bef8b4ec391d64736f6c63430008110033";
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
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TestArbitrumBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestArbitrumBridgeFacet;
}
export {};