import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacet, HopFacetInterface } from "../HopFacet";
declare type HopFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HopFacet__factory extends ContractFactory {
    constructor(...args: HopFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HopFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HopFacet;
    connect(signer: Signer): HopFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612ece806100206000396000f3fe60806040526004361061003f5760003560e01c80633961d1ed1461004457806367fdd71e14610066578063e55f811014610086578063fa904c1214610099575b600080fd5b34801561005057600080fd5b5061006461005f36600461246e565b6100ac565b005b34801561007257600080fd5b506100646100813660046124a1565b610209565b6100646100943660046127ee565b61043e565b6100646100a736600461289a565b610683565b6100b46108cd565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b9547f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b89060ff16610131576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661017e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917fcf56a25ddc5c325bc2d2557f7eee90d061f2e19b7294a6ef738f86f2c3d9280c910160405180910390a2505050565b6102116108cd565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b9547f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b89060ff161561028f576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b828110156103d05760008484838181106102ae576102ae612912565b90506040020160200160208101906102c69190612941565b73ffffffffffffffffffffffffffffffffffffffff1603610313576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83838281811061032557610325612912565b905060400201602001602081019061033d9190612941565b82600086868581811061035257610352612912565b6103689260206040909202019081019150612941565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055806103c88161298b565b915050610292565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f5910f57b2fdae9f2f45a1d913c63f55985d0f77d120de8aab63e686ff670dde39061043190859085906129c3565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104b9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006104ca3447612a32565b905086806101000151610509576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610547576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861056a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105a1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036105df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361061c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106318a600001518b60c001518b8b33610942565b60c08b01526106408a88610a8a565b5047915060009050828211610656576000610660565b6106608383612a32565b905080156106745761067460008583610d0a565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106fe576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061070f3447612a32565b9050848061010001511561074f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061012001511561078d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866107b08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156107e7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610825576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610862576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087488608001518960c00151610d40565b61088c88610887368a90038a018a612a45565b610a8a565b50479150600090508282116108a25760006108ac565b6108ac8383612a32565b905080156108c0576108c060008583610d0a565b5050600090925550505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610940576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60008280820361097e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561098d600185612a32565b81811061099c5761099c612912565b90506020028101906109ae9190612a61565b6109bf906080810190606001612941565b905060006109cc82610eb6565b905073ffffffffffffffffffffffffffffffffffffffff82166109f6576109f33482612a32565b90505b6000610a028888610f6f565b9050610a0e888861107b565b610a1b8a898989856110dc565b600082610a2785610eb6565b610a319190612a32565b905089811015610a7c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff80821660009081527f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b8602081905260409091205460c086015191921690610aee908490839061148e565b600073ffffffffffffffffffffffffffffffffffffffff841615610b13576000610b19565b8560c001515b905046600103610bec5760e086015160a087015160c0880151606088015160808901516040517fdeace8f5000000000000000000000000000000000000000000000000000000008152600481019590955273ffffffffffffffffffffffffffffffffffffffff9384166024860152604485019290925260648401526084830152600060a4830181905260c483015283169063deace8f590839060e4016000604051808303818588803b158015610bce57600080fd5b505af1158015610be2573d6000803e3d6000fd5b5050505050610ccb565b60e086015160a087015160c0880151875160208901516040808b015160608c015160808d015192517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019890985273ffffffffffffffffffffffffffffffffffffffff968716602489015260448801959095526064870193909352608486019190915260a485019190915260c484019190915260e483015283169063eea0d7b2908390610104016000604051808303818588803b158015610cb157600080fd5b505af1158015610cc5573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610cfa9190612b0d565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610d3657610d318383836115d9565b505050565b610d318282611708565b73ffffffffffffffffffffffffffffffffffffffff8216610d995780341015610d95576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610dd3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610e40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e649190612c20565b905081811015610eaa576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a73565b610d3183333085611832565b600073ffffffffffffffffffffffffffffffffffffffff821615610f67576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610f3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f629190612c20565b610f69565b475b92915050565b60608160008167ffffffffffffffff811115610f8d57610f8d612516565b604051908082528060200260200182016040528015610fb6578160200160208202803683370190505b5090506000805b8381101561107057868682818110610fd757610fd7612912565b9050602002810190610fe99190612a61565b610ffa906080810190606001612941565b915061100582610eb6565b83828151811061101757611017612912565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611068573483828151811061105057611050612912565b602002602001018181516110649190612a32565b9052505b600101610fbd565b509095945050505050565b60005b81811015610d3157600083838381811061109a5761109a612912565b90506020028101906110ac9190612a61565b6110b590612c39565b90508060c00151156110d3576110d381604001518260800151610d40565b5060010161107e565b8383838382600181146113a957600085856110f8600185612a32565b81811061110757611107612912565b90506020028101906111199190612a61565b61112a906080810190606001612941565b9050600089815b818110156112d557368d8d8381811061114c5761114c612912565b905060200281019061115e9190612a61565b905061118d6111736060830160408401612941565b73ffffffffffffffffffffffffffffffffffffffff161590565b806111f057506111f06111a66040830160208401612941565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561120757506112076111a66020830183612941565b801561128c575061128c61121e60a0830183612cde565b61122d91600491600091612d4a565b61123691612d74565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6112c2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112cc8f82611a4c565b50600101611131565b505060005b6112e5600185612a32565b8110156113a157600088888381811061130057611300612912565b90506020028101906113129190612a61565b611323906080810190606001612941565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113985785828151811061136a5761136a612912565b602002602001015161137b82610eb6565b6113859190612a32565b9250821561139857611398818885610d0a565b506001016112da565b505050611482565b8760005b8181101561147f57368b8b838181106113c8576113c8612912565b90506020028101906113da9190612a61565b90506113ef6111736060830160408401612941565b8061140857506114086111a66040830160208401612941565b801561141f575061141f6111a66020830183612941565b8015611436575061143661121e60a0830183612cde565b61146c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114768d82611a4c565b506001016113ad565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166114ae57505050565b73ffffffffffffffffffffffffffffffffffffffff82166114fb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611571573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115959190612c20565b9050818110156115d3576115d384846115ce847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612a32565b611d62565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611626576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611693573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b79190612c20565b9050808211156116fd576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a73565b6115d3848484611ede565b73ffffffffffffffffffffffffffffffffffffffff8216611755576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611798576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a73565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146117f2576040519150601f19603f3d011682016040523d82523d6000602084013e6117f7565b606091505b5050905080610d31576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661187f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166118cc576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561193d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119619190612c20565b905061196f82868686611f34565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156119df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a039190612c20565b611a0d9190612a32565b14611a44576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611a62611a5c6020830183612941565b3b151590565b611a98576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611ad8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611aed6111736060850160408601612941565b611af8576000611afe565b82608001355b90506000611b1a611b156060860160408701612941565b610eb6565b90506000611b31611b156080870160608801612941565b905082600003611b6857611b68611b4e6060870160408801612941565b611b5e6040880160208901612941565b876080013561148e565b8460800135821015611bb3576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a73565b600080611bc36020880188612941565b73ffffffffffffffffffffffffffffffffffffffff1685611be760a08a018a612cde565b604051611bf5929190612dbc565b60006040518083038185875af1925050503d8060008114611c32576040519150601f19603f3d011682016040523d82523d6000602084013e611c37565b606091505b509150915081611c82576000611c4c82611f92565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a739190612dcc565b6000611c97611b1560808a0160608b01612941565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611cc860208b018b612941565b611cd860608c0160408d01612941565b611ce860808d0160608e01612941565b8c60800135898711611cfa5786611d04565b611d048a88612a32565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611dd9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dfd9190612c20565b611e079190612ddf565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506115d39085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612010565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610d319084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611e5c565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526115d39085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611e5c565b6060604482511015611fd757505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611ff36004808551611feb9190612a32565b85919061211c565b9050808060200190518101906120099190612df2565b9392505050565b6000612072826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166122369092919063ffffffff16565b805190915015610d3157808060200190518101906120909190612e69565b610d31576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a73565b60608161212a81601f612ddf565b1015612162576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61216c8284612ddf565b845110156121a6576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060821580156121c5576040519150600082526020820160405261222d565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156121fe5780518352602092830192016121e6565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060612245848460008561224d565b949350505050565b6060824710156122df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a73565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516123089190612e86565b60006040518083038185875af1925050503d8060008114612345576040519150601f19603f3d011682016040523d82523d6000602084013e61234a565b606091505b509150915061235b87838387612366565b979650505050505050565b606083156123fc5782516000036123f55773ffffffffffffffffffffffffffffffffffffffff85163b6123f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a73565b5081612245565b61224583838151156124115781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a739190612dcc565b803573ffffffffffffffffffffffffffffffffffffffff8116811461246957600080fd5b919050565b6000806040838503121561248157600080fd5b61248a83612445565b915061249860208401612445565b90509250929050565b600080602083850312156124b457600080fd5b823567ffffffffffffffff808211156124cc57600080fd5b818501915085601f8301126124e057600080fd5b8135818111156124ef57600080fd5b8660208260061b850101111561250457600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561256957612569612516565b60405290565b60405160e0810167ffffffffffffffff8111828210171561256957612569612516565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156125d9576125d9612516565b604052919050565b600067ffffffffffffffff8211156125fb576125fb612516565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261263857600080fd5b813561264b612646826125e1565b612592565b81815284602083860101111561266057600080fd5b816020850160208301376000918101602001919091529392505050565b801515811461268b57600080fd5b50565b80356124698161267d565b600061014082840312156126ac57600080fd5b6126b4612545565b905081358152602082013567ffffffffffffffff808211156126d557600080fd5b6126e185838601612627565b602084015260408401359150808211156126fa57600080fd5b5061270784828501612627565b60408301525061271960608301612445565b606082015261272a60808301612445565b608082015261273b60a08301612445565b60a082015260c082013560c082015260e082013560e082015261010061276281840161268e565b9082015261012061277483820161268e565b9082015292915050565b600060a0828403121561279057600080fd5b60405160a0810181811067ffffffffffffffff821117156127b3576127b3612516565b806040525080915082358152602083013560208201526040830135604082015260608301356060820152608083013560808201525092915050565b60008060008060e0858703121561280457600080fd5b843567ffffffffffffffff8082111561281c57600080fd5b61282888838901612699565b9550602087013591508082111561283e57600080fd5b818701915087601f83011261285257600080fd5b81358181111561286157600080fd5b8860208260051b850101111561287657600080fd5b60208301955080945050505061288f866040870161277e565b905092959194509250565b60008082840360c08112156128ae57600080fd5b833567ffffffffffffffff8111156128c557600080fd5b6128d186828701612699565b93505060a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201121561290457600080fd5b506020830190509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561295357600080fd5b61200982612445565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036129bc576129bc61295c565b5060010190565b6020808252818101839052600090604080840186845b87811015612a255773ffffffffffffffffffffffffffffffffffffffff80612a0084612445565b16845280612a0f878501612445565b16848701525091830191908301906001016129d9565b5090979650505050505050565b81810381811115610f6957610f6961295c565b600060a08284031215612a5757600080fd5b612009838361277e565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612a9557600080fd5b9190910192915050565b60005b83811015612aba578181015183820152602001612aa2565b50506000910152565b60008151808452612adb816020860160208601612a9f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612b36610160850183612ac3565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612b718382612ac3565b9250506060850151612b9b608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612c0e8187018315159052565b90950151151593019290925250919050565b600060208284031215612c3257600080fd5b5051919050565b600060e08236031215612c4b57600080fd5b612c5361256f565b612c5c83612445565b8152612c6a60208401612445565b6020820152612c7b60408401612445565b6040820152612c8c60608401612445565b60608201526080830135608082015260a083013567ffffffffffffffff811115612cb557600080fd5b612cc136828601612627565b60a083015250612cd360c0840161268e565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612d1357600080fd5b83018035915067ffffffffffffffff821115612d2e57600080fd5b602001915036819003821315612d4357600080fd5b9250929050565b60008085851115612d5a57600080fd5b83861115612d6757600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612db45780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6020815260006120096020830184612ac3565b80820180821115610f6957610f6961295c565b600060208284031215612e0457600080fd5b815167ffffffffffffffff811115612e1b57600080fd5b8201601f81018413612e2c57600080fd5b8051612e3a612646826125e1565b818152856020838501011115612e4f57600080fd5b612e60826020830160208601612a9f565b95945050505050565b600060208284031215612e7b57600080fd5b81516120098161267d565b60008251612a95818460208701612a9f56fea26469706673582212201d0ac60ac3121ae17af6d68d81ac9db308af65aa62ac90fc6a8961822f68145564736f6c63430008110033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
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
        outputs?: undefined;
        stateMutability?: undefined;
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
        outputs?: undefined;
        stateMutability?: undefined;
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
    })[];
    static createInterface(): HopFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopFacet;
}
export {};
