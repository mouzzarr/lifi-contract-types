import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AmarokFacet, AmarokFacetInterface } from "../AmarokFacet";
declare type AmarokFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AmarokFacet__factory extends ContractFactory {
    constructor(...args: AmarokFacetConstructorParams);
    deploy(_connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AmarokFacet>;
    getDeployTransaction(_connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AmarokFacet;
    connect(signer: Signer): AmarokFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002a2b38038062002a2b833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516129906200009b60003960008181610721015261076101526129906000f3fe6080604052600436106100295760003560e01c8063123cc1171461002e578063b506907114610043575b600080fd5b61004161003c36600461229d565b610056565b005b61004161005136600461235c565b6102c6565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476123f8565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88610219816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610250576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61025a8a8861054b565b6102748a600001518b60c001518b8b338c6040013561059f565b60c08b01526102838a88610717565b50479150600090508282116102995760006102a3565b6102a383836123f8565b905080156102b7576102b760008583610879565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610341576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061035234476123f8565b905061035d8561240b565b8061010001511561039a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103a38661240b565b60a081015173ffffffffffffffffffffffffffffffffffffffff166103f4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610432576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104788761240b565b608081015173ffffffffffffffffffffffffffffffffffffffff166104c9576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104db6104d58961240b565b8861054b565b6104f86104ee60a08a0160808b01612417565b8960c001356108af565b61050a6105048961240b565b88610717565b504791506000905082821161052057600061052a565b61052a83836123f8565b9050801561053e5761053e60008583610879565b5050600090925550505050565b6101208201511515600061055f8380612432565b90501115151461059b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6000838082036105db576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866105ea6001856123f8565b8181106105f9576105f961249e565b905060200281019061060b91906124cd565b61061c906080810190606001612417565b9050600061062982610a21565b905073ffffffffffffffffffffffffffffffffffffffff82166106535761065034826123f8565b90505b600061065f8989610ada565b905061066b8989610be6565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526106a6818b8b85610c47565b6000836106b286610a21565b6106bc91906123f8565b90508b811015610707576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b61074a82608001517f00000000000000000000000000000000000000000000000000000000000000008460c0015161103d565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016638aac16ba604083013561079b60c0850160a0860161250b565b6107ab6040860160208701612417565b86608001518660800160208101906107c39190612417565b60c089015160608901356107d78a80612432565b6040518a63ffffffff1660e01b81526004016107fa989796959493929190612531565b60206040518083038185885af1158015610818573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061083d91906125cd565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161086d9190612654565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108a5576108a0838383611188565b505050565b6108a082826112b7565b73ffffffffffffffffffffffffffffffffffffffff8216610904578034101561059b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060000361093e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cf91906125cd565b905081811015610a15576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106fe565b6108a0833330856113e1565b600073ffffffffffffffffffffffffffffffffffffffff821615610ad2576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610aa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acd91906125cd565b610ad4565b475b92915050565b60608160008167ffffffffffffffff811115610af857610af8611ff4565b604051908082528060200260200182016040528015610b21578160200160208202803683370190505b5090506000805b83811015610bdb57868682818110610b4257610b4261249e565b9050602002810190610b5491906124cd565b610b65906080810190606001612417565b9150610b7082610a21565b838281518110610b8257610b8261249e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bd35734838281518110610bbb57610bbb61249e565b60200260200101818151610bcf91906123f8565b9052505b600101610b28565b509095945050505050565b60005b818110156108a0576000838383818110610c0557610c0561249e565b9050602002810190610c1791906124cd565b610c2090612767565b90508060c0015115610c3e57610c3e816040015182608001516108af565b50600101610be9565b602084015160408501518491849184908360018114610f565760008686610c6f6001856123f8565b818110610c7e57610c7e61249e565b9050602002810190610c9091906124cd565b610ca1906080810190606001612417565b9050600089815b81811015610e4e57368d8d83818110610cc357610cc361249e565b9050602002810190610cd591906124cd565b9050610d04610cea6060830160408401612417565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d675750610d67610d1d6040830160208401612417565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d7e5750610d7e610d1d6020830183612417565b8015610e035750610e03610d9560a0830183612432565b610da49160049160009161280c565b610dad91612836565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e39576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610e4590826115fb565b50600101610ca8565b505060005b610e5e6001856123f8565b811015610f4e576000898983818110610e7957610e7961249e565b9050602002810190610e8b91906124cd565b610e9c906080810190606001612417565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f4557868281518110610ee357610ee361249e565b6020026020010151610ef482610a21565b610efe91906123f8565b9250600073ffffffffffffffffffffffffffffffffffffffff821615610f25576000610f27565b865b90508315610f4357610f43828a610f3e84886123f8565b610879565b505b50600101610e53565b505050611031565b8760005b8181101561102e57368b8b83818110610f7557610f7561249e565b9050602002810190610f8791906124cd565b9050610f9c610cea6060830160408401612417565b80610fb55750610fb5610d1d6040830160208401612417565b8015610fcc5750610fcc610d1d6020830183612417565b8015610fe35750610fe3610d9560a0830183612432565b611019576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161102590826115fb565b50600101610f5a565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661105d57505050565b73ffffffffffffffffffffffffffffffffffffffff82166110aa576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611120573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114491906125cd565b90508181101561118257611182848461117d847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6123f8565b611911565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166111d5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611242573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126691906125cd565b9050808211156112ac576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106fe565b611182848484611a8d565b73ffffffffffffffffffffffffffffffffffffffff8216611304576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611347576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106fe565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146113a1576040519150601f19603f3d011682016040523d82523d6000602084013e6113a6565b606091505b50509050806108a0576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661142e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661147b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156114ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151091906125cd565b905061151e82868686611ae3565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561158e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b291906125cd565b6115bc91906123f8565b146115f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61161161160b6020830183612417565b3b151590565b611647576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611687576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061169c610cea6060850160408601612417565b6116a75760006116ad565b82608001355b905060006116c96116c46060860160408701612417565b610a21565b905060006116e06116c46080870160608801612417565b905082600003611717576117176116fd6060870160408801612417565b61170d6040880160208901612417565b876080013561103d565b8460800135821015611762576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106fe565b6000806117726020880188612417565b73ffffffffffffffffffffffffffffffffffffffff168561179660a08a018a612432565b6040516117a492919061287e565b60006040518083038185875af1925050503d80600081146117e1576040519150601f19603f3d011682016040523d82523d6000602084013e6117e6565b606091505b5091509150816118315760006117fb82611b41565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fe919061288e565b60006118466116c460808a0160608b01612417565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961187760208b018b612417565b61188760608c0160408d01612417565b61189760808d0160608e01612417565b8c608001358987116118a957866118b3565b6118b38a886123f8565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611988573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119ac91906125cd565b6119b691906128a1565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506111829085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bbf565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108a09084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a0b565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111829085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a0b565b6060604482511015611b8657505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611ba26004808551611b9a91906123f8565b859190611ccb565b905080806020019051810190611bb891906128b4565b9392505050565b6000611c21826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611de59092919063ffffffff16565b8051909150156108a05780806020019051810190611c3f919061292b565b6108a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106fe565b606081611cd981601f6128a1565b1015611d11576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d1b82846128a1565b84511015611d55576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d745760405191506000825260208201604052611ddc565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611dad578051835260209283019201611d95565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611df48484600085611dfc565b949350505050565b606082471015611e8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106fe565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611eb79190612948565b60006040518083038185875af1925050503d8060008114611ef4576040519150601f19603f3d011682016040523d82523d6000602084013e611ef9565b606091505b5091509150611f0a87838387611f15565b979650505050505050565b60608315611fab578251600003611fa45773ffffffffffffffffffffffffffffffffffffffff85163b611fa4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106fe565b5081611df4565b611df48383815115611fc05781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fe919061288e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561204757612047611ff4565b60405290565b60405160e0810167ffffffffffffffff8111828210171561204757612047611ff4565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120b7576120b7611ff4565b604052919050565b600067ffffffffffffffff8211156120d9576120d9611ff4565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261211657600080fd5b8135612129612124826120bf565b612070565b81815284602083860101111561213e57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461217f57600080fd5b919050565b801515811461219257600080fd5b50565b803561217f81612184565b600061014082840312156121b357600080fd5b6121bb612023565b905081358152602082013567ffffffffffffffff808211156121dc57600080fd5b6121e885838601612105565b6020840152604084013591508082111561220157600080fd5b5061220e84828501612105565b6040830152506122206060830161215b565b60608201526122316080830161215b565b608082015261224260a0830161215b565b60a082015260c082013560c082015260e082013560e0820152610100612269818401612195565b9082015261012061227b838201612195565b9082015292915050565b600060c0828403121561229757600080fd5b50919050565b600080600080606085870312156122b357600080fd5b843567ffffffffffffffff808211156122cb57600080fd5b6122d7888389016121a0565b955060208701359150808211156122ed57600080fd5b818701915087601f83011261230157600080fd5b81358181111561231057600080fd5b8860208260051b850101111561232557600080fd5b60208301955080945050604087013591508082111561234357600080fd5b5061235087828801612285565b91505092959194509250565b6000806040838503121561236f57600080fd5b823567ffffffffffffffff8082111561238757600080fd5b90840190610140828703121561239c57600080fd5b909250602084013590808211156123b257600080fd5b506123bf85828601612285565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610ad457610ad46123c9565b6000610ad436836121a0565b60006020828403121561242957600080fd5b611bb88261215b565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261246757600080fd5b83018035915067ffffffffffffffff82111561248257600080fd5b60200191503681900382131561249757600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261250157600080fd5b9190910192915050565b60006020828403121561251d57600080fd5b813563ffffffff81168114611bb857600080fd5b63ffffffff89168152600073ffffffffffffffffffffffffffffffffffffffff808a16602084015280891660408401528088166060840152508560808301528460a083015260e060c08301528260e08301526101008385828501376000838501820152601f9093017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910190910198975050505050505050565b6000602082840312156125df57600080fd5b5051919050565b60005b838110156126015781810151838201526020016125e9565b50506000910152565b600081518084526126228160208601602086016125e6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261267d61016085018361260a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126b8838261260a565b92505060608501516126e2608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127558187018315159052565b90950151151593019290925250919050565b600060e0823603121561277957600080fd5b61278161204d565b61278a8361215b565b81526127986020840161215b565b60208201526127a96040840161215b565b60408201526127ba6060840161215b565b60608201526080830135608082015260a083013567ffffffffffffffff8111156127e357600080fd5b6127ef36828601612105565b60a08301525061280160c08401612195565b60c082015292915050565b6000808585111561281c57600080fd5b8386111561282957600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128765780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611bb8602083018461260a565b80820180821115610ad457610ad46123c9565b6000602082840312156128c657600080fd5b815167ffffffffffffffff8111156128dd57600080fd5b8201601f810184136128ee57600080fd5b80516128fc612124826120bf565b81815285602083850101111561291157600080fd5b6129228260208301602086016125e6565b95945050505050565b60006020828403121561293d57600080fd5b8151611bb881612184565b600082516125018184602087016125e656fea264697066735822122096c5495695ca50c9958adf7bcc317f8f9c7d51d2f2fdd3deca88bcc918f8de0a64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IConnextHandler";
            readonly name: "_connextHandler";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetNotSupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
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
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
        readonly type: "error";
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
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "relayerFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "slippageTol";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "delegate";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "destChainDomainId";
                readonly type: "uint32";
            }];
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly name: "_amarokData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaAmarok";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "relayerFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "slippageTol";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "delegate";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "destChainDomainId";
                readonly type: "uint32";
            }];
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly name: "_amarokData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaAmarok";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): AmarokFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AmarokFacet;
}
export {};
