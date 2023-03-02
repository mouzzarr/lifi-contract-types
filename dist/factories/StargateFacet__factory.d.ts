import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { StargateFacet, StargateFacetInterface } from "../StargateFacet";
declare type StargateFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StargateFacet__factory extends ContractFactory {
    constructor(...args: StargateFacetConstructorParams);
    deploy(_router: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<StargateFacet>;
    getDeployTransaction(_router: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): StargateFacet;
    connect(signer: Signer): StargateFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200364238038062003642833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516135a0620000a260003960008181610ad601528181610e360152610e6101526135a06000f3fe6080604052600436106100655760003560e01c8063d35794fd11610043578063d35794fd146100bf578063d7556c1e146100df578063df76ed59146100f257600080fd5b80633b00e8071461006a57806377967e1f1461007f5780637f4445a41461009f575b600080fd5b61007d610078366004612b9e565b61012b565b005b34801561008b57600080fd5b5061007d61009a366004612c47565b61038d565b3480156100ab57600080fd5b5061007d6100ba366004612cc5565b610659565b3480156100cb57600080fd5b5061007d6100da366004612cfa565b61076a565b61007d6100ed366004612d1d565b610861565b3480156100fe57600080fd5b5061011261010d366004612ddc565b610ad1565b6040805192835260208301919091520160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101a6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101b73447612e48565b905084806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8561021a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610251576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361028f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102cc576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866102ef816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610326576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103308888610bff565b61034288608001518960c00151610c56565b61034c8888610dd2565b504791506000905082821161036257600061036c565b61036c8383612e48565b905080156103805761038060008583610fef565b5050600090925550505050565b610395611020565b7f83b07c830ea42e55e83cc925486be76c4ced61b97ffad85cef986433f3feff16547f83b07c830ea42e55e83cc925486be76c4ced61b97ffad85cef986433f3feff149060ff1615610413576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b8481101561055357600086868381811061043257610432612e5b565b6104489260206040909202019081019150612e8a565b73ffffffffffffffffffffffffffffffffffffffff1603610495576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8585828181106104a7576104a7612e5b565b90506040020160200160208101906104bf9190612ea7565b8260008888858181106104d4576104d4612e5b565b6104ea9260206040909202019081019150612e8a565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff929092169190911790558061054b81612ec2565b915050610416565b5060005b828110156105e65783838281811061057157610571612e5b565b90506040020160200160208101906105899190612ea7565b8260010160008686858181106105a1576105a1612e5b565b90506040020160000135815260200190815260200160002060006101000a81548161ffff021916908361ffff16021790555080806105de90612ec2565b915050610557565b506002810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556040517f070204c201d1cfb91a6dcf31f4972094e550a2edb59b91e2dd5c9021d1d2a8e69061064a908790879087908790612efa565b60405180910390a15050505050565b610661611020565b7f83b07c830ea42e55e83cc925486be76c4ced61b97ffad85cef986433f3feff16547f83b07c830ea42e55e83cc925486be76c4ced61b97ffad85cef986433f3feff149060ff166106de576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000818152602083815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff871690811790915591519182527fb3eab88df94df52e6a9f967bcedec6146ea912090310f84c14d98ab90f3dec8091015b60405180910390a2505050565b610772611020565b7f83b07c830ea42e55e83cc925486be76c4ced61b97ffad85cef986433f3feff16547f83b07c830ea42e55e83cc925486be76c4ced61b97ffad85cef986433f3feff149060ff166107ef576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600083815260018201602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff8616908117909155915191825284917fa51f0b4ec175b5bcd05e1dfff3bac4a47454a5b2bae58e440c736a77f6117cb7910161075d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016108dc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006108ed3447612e48565b90508680610100015161092c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761094f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610986576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036109c4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610a01576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88610a24816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610a5b576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a658a88610bff565b610a7f8a600001518b60c001518b8b338c60600135611095565b60c08b0152610a8e8a88610dd2565b5047915060009050828211610aa4576000610aae565b610aae8383612e48565b90508015610ac257610ac260008583610fef565b50506000909255505050505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630a512369610b1986611208565b6001610b2860a0880188612fb5565b610b3560c08a018a612fb5565b604080516060810182528c820135815260006020820152815133741400000000000000000000000000000000000000001860148201526034810183528183015290517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152610bb397969594939291906004016130fa565b6040805180830381865afa158015610bcf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf39190613156565b915091505b9250929050565b61012082015115156000610c1660c0840184612fb5565b905011151514610c52576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610cab5780341015610c52576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003610ce5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610d52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d76919061317a565b905081811015610dc1576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610dcd8333308561129c565b505050565b81610df5816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610e2c576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e5f83608001517f00000000000000000000000000000000000000000000000000000000000000008560c001516114b6565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639fbf10fc8360600135610ead8660e00151611208565b610eba8760800151611601565b8635610ecc60a0890160808a01612e8a565b8960c00151896020013560405180606001604052808c60400135815260200160008152602001610f3f8e60a00151604080517414000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff9390931692909218601483015260348201905290565b9052610f4e60a08d018d612fb5565b610f5b60c08f018f612fb5565b6040518d63ffffffff1660e01b8152600401610f819b9a99989796959493929190613193565b6000604051808303818588803b158015610f9a57600080fd5b505af1158015610fae573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610fe29190613226565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83161561101657610dcd838383611685565b610dcd82826117b4565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314611093576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000838082036110d1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866110e0600185612e48565b8181106110ef576110ef612e5b565b90506020028101906111019190613339565b611112906080810190606001612e8a565b9050600061111f826118de565b905073ffffffffffffffffffffffffffffffffffffffff8216611149576111463482612e48565b90505b60006111558989611997565b90506111618989611aa3565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261119c818b8b85611b04565b6000836111a8866118de565b6111b29190612e48565b90508b8110156111f8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610db8565b9c9b505050505050505050505050565b60008181527f83b07c830ea42e55e83cc925486be76c4ced61b97ffad85cef986433f3feff1560205260408120547f83b07c830ea42e55e83cc925486be76c4ced61b97ffad85cef986433f3feff149061ffff16808303611295576040517f7c152fe300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff84166112e9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611336576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156113a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113cb919061317a565b90506113d982868686611efa565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611449573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146d919061317a565b6114779190612e48565b146114ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166114d657505050565b73ffffffffffffffffffffffffffffffffffffffff8216611523576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611599573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115bd919061317a565b9050818110156115fb576115fb84846115f6847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612e48565b611fd6565b50505050565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f83b07c830ea42e55e83cc925486be76c4ced61b97ffad85cef986433f3feff146020819052604082205461ffff16808303611295576040517f59c6452900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166116d2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561173f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611763919061317a565b9050808211156117a9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610db8565b6115fb8484846120d4565b73ffffffffffffffffffffffffffffffffffffffff8216611801576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611844576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610db8565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461189e576040519150601f19603f3d011682016040523d82523d6000602084013e6118a3565b606091505b5050905080610dcd576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82161561198f576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611966573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198a919061317a565b611991565b475b92915050565b60608160008167ffffffffffffffff8111156119b5576119b56128ec565b6040519080825280602002602001820160405280156119de578160200160208202803683370190505b5090506000805b83811015611a98578686828181106119ff576119ff612e5b565b9050602002810190611a119190613339565b611a22906080810190606001612e8a565b9150611a2d826118de565b838281518110611a3f57611a3f612e5b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611a905734838281518110611a7857611a78612e5b565b60200260200101818151611a8c9190612e48565b9052505b6001016119e5565b509095945050505050565b60005b81811015610dcd576000838383818110611ac257611ac2612e5b565b9050602002810190611ad49190613339565b611add90613377565b90508060c0015115611afb57611afb81604001518260800151610c56565b50600101611aa6565b602084015160408501518491849184908360018114611e135760008686611b2c600185612e48565b818110611b3b57611b3b612e5b565b9050602002810190611b4d9190613339565b611b5e906080810190606001612e8a565b9050600089815b81811015611d0b57368d8d83818110611b8057611b80612e5b565b9050602002810190611b929190613339565b9050611bc1611ba76060830160408401612e8a565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611c245750611c24611bda6040830160208401612e8a565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611c3b5750611c3b611bda6020830183612e8a565b8015611cc05750611cc0611c5260a0830183612fb5565b611c619160049160009161341c565b611c6a91613446565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611cf6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51611d02908261212a565b50600101611b65565b505060005b611d1b600185612e48565b811015611e0b576000898983818110611d3657611d36612e5b565b9050602002810190611d489190613339565b611d59906080810190606001612e8a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611e0257868281518110611da057611da0612e5b565b6020026020010151611db1826118de565b611dbb9190612e48565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611de2576000611de4565b865b90508315611e0057611e00828a611dfb8488612e48565b610fef565b505b50600101611d10565b505050611eee565b8760005b81811015611eeb57368b8b83818110611e3257611e32612e5b565b9050602002810190611e449190613339565b9050611e59611ba76060830160408401612e8a565b80611e725750611e72611bda6040830160208401612e8a565b8015611e895750611e89611bda6020830183612e8a565b8015611ea05750611ea0611c5260a0830183612fb5565b611ed6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c51611ee2908261212a565b50600101611e17565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526115fb9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612440565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561204d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612071919061317a565b61207b919061348e565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506115fb9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611f54565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610dcd9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611f54565b61214061213a6020830183612e8a565b3b151590565b612176576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036121b6576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006121cb611ba76060850160408601612e8a565b6121d65760006121dc565b82608001355b905060006121f86121f36060860160408701612e8a565b6118de565b9050600061220f6121f36080870160608801612e8a565b9050826000036122465761224661222c6060870160408801612e8a565b61223c6040880160208901612e8a565b87608001356114b6565b8460800135821015612291576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610db8565b6000806122a16020880188612e8a565b73ffffffffffffffffffffffffffffffffffffffff16856122c560a08a018a612fb5565b6040516122d39291906134a1565b60006040518083038185875af1925050503d8060008114612310576040519150601f19603f3d011682016040523d82523d6000602084013e612315565b606091505b50915091508161236057600061232a8261254c565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db891906134b1565b60006123756121f360808a0160608b01612e8a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896123a660208b018b612e8a565b6123b660608c0160408d01612e8a565b6123c660808d0160608e01612e8a565b8c608001358987116123d857866123e2565b6123e28a88612e48565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60006124a2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166125c39092919063ffffffff16565b805190915015610dcd57808060200190518101906124c091906134c4565b610dcd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610db8565b606060448251101561259157505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b60006125ad60048085516125a59190612e48565b8591906125da565b90508080602001905181019061129591906134e1565b60606125d284846000856126f4565b949350505050565b6060816125e881601f61348e565b1015612620576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61262a828461348e565b84511015612664576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561268357604051915060008252602082016040526126eb565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156126bc5780518352602092830192016126a4565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015612786576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610db8565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516127af9190613558565b60006040518083038185875af1925050503d80600081146127ec576040519150601f19603f3d011682016040523d82523d6000602084013e6127f1565b606091505b50915091506128028783838761280d565b979650505050505050565b606083156128a357825160000361289c5773ffffffffffffffffffffffffffffffffffffffff85163b61289c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610db8565b50816125d2565b6125d283838151156128b85781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db891906134b1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561293f5761293f6128ec565b60405290565b60405160e0810167ffffffffffffffff8111828210171561293f5761293f6128ec565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156129af576129af6128ec565b604052919050565b600067ffffffffffffffff8211156129d1576129d16128ec565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112612a0e57600080fd5b8135612a21612a1c826129b7565b612968565b818152846020838601011115612a3657600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114612a7557600080fd5b50565b8035612a8381612a53565b919050565b8015158114612a7557600080fd5b8035612a8381612a88565b60006101408284031215612ab457600080fd5b612abc61291b565b905081358152602082013567ffffffffffffffff80821115612add57600080fd5b612ae9858386016129fd565b60208401526040840135915080821115612b0257600080fd5b50612b0f848285016129fd565b604083015250612b2160608301612a78565b6060820152612b3260808301612a78565b6080820152612b4360a08301612a78565b60a082015260c082013560c082015260e082013560e0820152610100612b6a818401612a96565b90820152610120612b7c838201612a96565b9082015292915050565b600060e08284031215612b9857600080fd5b50919050565b60008060408385031215612bb157600080fd5b823567ffffffffffffffff80821115612bc957600080fd5b612bd586838701612aa1565b93506020850135915080821115612beb57600080fd5b50612bf885828601612b86565b9150509250929050565b60008083601f840112612c1457600080fd5b50813567ffffffffffffffff811115612c2c57600080fd5b6020830191508360208260061b8501011115610bf857600080fd5b60008060008060408587031215612c5d57600080fd5b843567ffffffffffffffff80821115612c7557600080fd5b612c8188838901612c02565b90965094506020870135915080821115612c9a57600080fd5b50612ca787828801612c02565b95989497509550505050565b803561ffff81168114612a8357600080fd5b60008060408385031215612cd857600080fd5b8235612ce381612a53565b9150612cf160208401612cb3565b90509250929050565b60008060408385031215612d0d57600080fd5b82359150612cf160208401612cb3565b60008060008060608587031215612d3357600080fd5b843567ffffffffffffffff80821115612d4b57600080fd5b612d5788838901612aa1565b95506020870135915080821115612d6d57600080fd5b818701915087601f830112612d8157600080fd5b813581811115612d9057600080fd5b8860208260051b8501011115612da557600080fd5b602083019550809450506040870135915080821115612dc357600080fd5b50612dd087828801612b86565b91505092959194509250565b60008060408385031215612def57600080fd5b82359150602083013567ffffffffffffffff811115612e0d57600080fd5b612bf885828601612b86565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561199157611991612e19565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215612e9c57600080fd5b813561129581612a53565b600060208284031215612eb957600080fd5b61129582612cb3565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612ef357612ef3612e19565b5060010190565b60408082528181018590526000908660608401835b88811015612f5f578235612f2281612a53565b73ffffffffffffffffffffffffffffffffffffffff168252602061ffff612f4a858301612cb3565b16908301529183019190830190600101612f0f565b5084810360208681019190915286825291508690820160005b87811015612fa7578235825261ffff612f92858501612cb3565b16828501529184019190840190600101612f78565b509998505050505050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612fea57600080fd5b83018035915067ffffffffffffffff82111561300557600080fd5b602001915036819003821315610bf857600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60005b8381101561307e578181015183820152602001613066565b50506000910152565b6000815180845261309f816020860160208601613063565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b805182526020810151602083015260006040820151606060408501526125d26060850182613087565b61ffff8816815260ff8716602082015260a06040820152600061312160a08301878961301a565b828103606084015261313481868861301a565b9050828103608084015261314881856130d1565b9a9950505050505050505050565b6000806040838503121561316957600080fd5b505080516020909101519092909150565b60006020828403121561318c57600080fd5b5051919050565b600061012061ffff808f168452808e166020850152508b604084015273ffffffffffffffffffffffffffffffffffffffff8b1660608401528960808401528860a08401528060c08401526131e9818401896130d1565b905082810360e08401526131fe81878961301a565b905082810361010084015261321481858761301a565b9e9d5050505050505050505050505050565b60208152815160208201526000602083015161014080604085015261324f610160850183613087565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261328a8382613087565b92505060608501516132b4608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206133278187018315159052565b90950151151593019290925250919050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261336d57600080fd5b9190910192915050565b600060e0823603121561338957600080fd5b613391612945565b61339a83612a78565b81526133a860208401612a78565b60208201526133b960408401612a78565b60408201526133ca60608401612a78565b60608201526080830135608082015260a083013567ffffffffffffffff8111156133f357600080fd5b6133ff368286016129fd565b60a08301525061341160c08401612a96565b60c082015292915050565b6000808585111561342c57600080fd5b8386111561343957600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156134865780818660040360031b1b83161692505b505092915050565b8082018082111561199157611991612e19565b8183823760009101908152919050565b6020815260006112956020830184613087565b6000602082840312156134d657600080fd5b815161129581612a88565b6000602082840312156134f357600080fd5b815167ffffffffffffffff81111561350a57600080fd5b8201601f8101841361351b57600080fd5b8051613529612a1c826129b7565b81815285602083850101111561353e57600080fd5b61354f826020830160208601613063565b95945050505050565b6000825161336d81846020870161306356fea2646970667358221220bff5ef51f5c301d661c77b21e2142da094adbd1a72e3f456c93b8b14513905d164736f6c63430008110033";
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): StargateFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StargateFacet;
}
export {};
