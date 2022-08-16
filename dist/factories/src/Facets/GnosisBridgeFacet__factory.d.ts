import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GnosisBridgeFacet, GnosisBridgeFacetInterface } from "../../../src/Facets/GnosisBridgeFacet";
declare type GnosisBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GnosisBridgeFacet__factory extends ContractFactory {
    constructor(...args: GnosisBridgeFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GnosisBridgeFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GnosisBridgeFacet;
    connect(signer: Signer): GnosisBridgeFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506126f8806100206000396000f3fe6080604052600436106100345760003560e01c8063644ca12314610039578063c274c0f01461004e578063fdef3d3d1461006e575b600080fd5b61004c610047366004611fe8565b610081565b005b34801561005a57600080fd5b5061004c610069366004612094565b610358565b61004c61007c3660046120e8565b6104cb565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181557f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed9677547f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed96769074010000000000000000000000000000000000000000900467ffffffffffffffff1660c0870135146101a2576040517f06de6c6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181015473ffffffffffffffffffffffffffffffffffffffff166101cd6080880160608901612142565b73ffffffffffffffffffffffffffffffffffffffff161461021a576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61022e610226876121db565b868633610783565b6020840181905260000361026e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61027783610887565b85357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c46102a76020890189612287565b6102b760608b0160408c01612142565b898960008181106102ca576102ca6122f3565b90506020028101906102dc9190612322565b6102ed906060810190604001612142565b6102fd60a08d0160808e01612142565b89518c8c600081610310576103106122f3565b90506020028101906103229190612322565b608001358e60c00135600160006040516103459a99989796959493929190612360565b60405180910390a2506000905550505050565b610360610990565b73ffffffffffffffffffffffffffffffffffffffff83166103ad576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed9676805473ffffffffffffffffffffffffffffffffffffffff8581167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216821783557f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed9677805467ffffffffffffffff86167401000000000000000000000000000000000000000081027fffffffff000000000000000000000000000000000000000000000000000000009092169388169384179190911790915560408051938452602084019290925282820152517f6ff9bfef0f7480f6e8c2bbe9de2d11a36ce5888c07c4f74a04dca21a806b91d89181900360600190a150505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610546576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181557f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed9677547f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed96769074010000000000000000000000000000000000000000900467ffffffffffffffff1660c0850135146105ec576040517f06de6c6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181015473ffffffffffffffffffffffffffffffffffffffff166106176080860160608701612142565b73ffffffffffffffffffffffffffffffffffffffff1614610664576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82602001356000036106a2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018101546106cb9073ffffffffffffffffffffffffffffffffffffffff166020850135610a60565b6106e26106dd36859003850185612477565b610887565b83357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c46107126020870187612287565b6107226060890160408a01612142565b61073260808a0160608b01612142565b61074260a08b0160808c01612142565b61074f60208b018b612142565b8a602001358c60c001356000806040516107729a99989796959493929190612360565b60405180910390a250600090555050565b6000828082036107bf576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856107ce6001826124c2565b8181106107dd576107dd6122f3565b90506020028101906107ef9190612322565b610800906080810190606001612142565b9050600061080d82610a86565b905061081b88888888610b3f565b600061082683610a86565b9050818111610835578061083f565b61083f82826124c2565b91508160000361087b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50979650505050505050565b7f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed9677547f037bd635972188e604bcaab17e73ebf3422cdec992e595e369233b4f21ed96768054602084015191926108fa9273ffffffffffffffffffffffffffffffffffffffff918216929190911690610f50565b8054825160208401516040517f01e4f53a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff928316600482015260248101919091529116906301e4f53a90604401600060405180830381600087803b15801561097457600080fd5b505af1158015610988573d6000803e3d6000fd5b505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610a5e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201527f657200000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b565b610a82828273ffffffffffffffffffffffffffffffffffffffff821615611092565b5050565b600073ffffffffffffffffffffffffffffffffffffffff821615610b37576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3291906124d9565b610b39565b475b92915050565b8282828160018114610df9576000610b5785856111ac565b905060008585610b686001866124c2565b818110610b7757610b776122f3565b9050602002810190610b899190612322565b610b9a906080810190606001612142565b905060008060005b8a811015610cea57368c8c83818110610bbd57610bbd6122f3565b9050602002810190610bcf9190612322565b9050600080610be46040840160208501612142565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610c505750600080610c256020840184612142565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610c95575060016000610c6860a0840184612287565b610c77916008916000916124f2565b610c809161251c565b815260208101919091526040016000205460ff165b610ccb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d51610cd79082611276565b5080610ce281612558565b915050610ba2565b5060005b610cf96001876124c2565b811015610def576000898983818110610d1457610d146122f3565b9050602002810190610d269190612322565b610d37906080810190606001612142565b90508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610d725750610ddd565b610d7b81610a86565b9250858281518110610d8f57610d8f6122f3565b60200260200101518311610da35782610dc8565b858281518110610db557610db56122f3565b602002602001015183610dc891906124c2565b93508315610ddb57610ddb81898661154a565b505b80610de781612558565b915050610cee565b5050505050610f46565b60005b86811015610f445736888883818110610e1757610e176122f3565b9050602002810190610e299190612322565b9050600080610e3e6040840160208501612142565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610eaa5750600080610e7f6020840184612142565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610eef575060016000610ec260a0840184612287565b610ed1916008916000916124f2565b610eda9161251c565b815260208101919091526040016000205460ff165b610f25576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8951610f319082611276565b5080610f3c81612558565b915050610dfc565b505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f7057505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fbd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611033573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061105791906124d9565b90508181101561108c5761108c84847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61157b565b50505050565b816000036110cc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156111105781341461110b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b3415611147576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061115284610a86565b90506111608433308661175d565b828161116b86610a86565b61117591906124c2565b1461108c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608160008167ffffffffffffffff8111156111ca576111ca611ede565b6040519080825280602002602001820160405280156111f3578160200160208202803683370190505b50905060005b8281101561126d5761123e868683818110611216576112166122f3565b90506020028101906112289190612322565b611239906080810190606001612142565b610a86565b828281518110611250576112506122f3565b60209081029190910101528061126581612558565b9150506111f9565b50949350505050565b61128c6112866020830183612142565b3b151590565b6112c2576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611302576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806113156060850160408601612142565b905060006113296080860160608701612142565b9050600061133683610a86565b9050600061134383610a86565b9050600086831061135557600061135f565b61135f83886124c2565b905073ffffffffffffffffffffffffffffffffffffffff8516156113ae576113978561139160408b0160208c01612142565b89610f50565b80156113a9576113a98533308461175d565b6113b2565b8695505b6000806113c260208b018b612142565b73ffffffffffffffffffffffffffffffffffffffff16886113e660a08d018d612287565b6040516113f4929190612590565b60006040518083038185875af1925050503d8060008114611431576040519150601f19603f3d011682016040523d82523d6000602084013e611436565b606091505b50915091508161148157600061144b82611803565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5591906125cc565b600061148c87610a86565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6114bd60208e018e612142565b8d60400160208101906114d09190612142565b8a8e8a87116114df57866114e9565b6114e98b886124c2565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156115715761110b838383611881565b61110b82826118d9565b80158061161b57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156115f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061161991906124d9565b155b6116a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610a55565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261110b9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119c0565b73ffffffffffffffffffffffffffffffffffffffff84166117aa576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166117f7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61108c84848484611acc565b606060448251101561184857505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611864600480855161185c91906124c2565b859190611b2a565b90508080602001905181019061187a91906125ff565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff83166118ce576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61110b838383611c85565b73ffffffffffffffffffffffffffffffffffffffff8216611926576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611980576040519150601f19603f3d011682016040523d82523d6000602084013e611985565b606091505b505090508061110b576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611a22826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cdb9092919063ffffffff16565b80519091501561110b5780806020019051810190611a409190612676565b61110b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a55565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261108c9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016116f9565b606081611b3881601f612698565b1015611ba0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152606401610a55565b611baa8284612698565b84511015611c14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152606401610a55565b606082158015611c33576040519150600082526020820160405261126d565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611c6c578051835260209283019201611c54565b5050858452601f01601f19166040525050949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261110b9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016116f9565b6060611cea8484600085611cf2565b949350505050565b606082471015611d84576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a55565b843b611dec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a55565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e1591906126b0565b60006040518083038185875af1925050503d8060008114611e52576040519150601f19603f3d011682016040523d82523d6000602084013e611e57565b606091505b5091509150611e67828286611e72565b979650505050505050565b60608315611e8157508161187a565b825115611e915782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5591906125cc565b60006101008284031215611ed857600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611f3157611f31611ede565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611f6057611f60611ede565b604052919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f8c57600080fd5b919050565b600060408284031215611fa357600080fd5b6040516040810181811067ffffffffffffffff82111715611fc657611fc6611ede565b604052905080611fd583611f68565b8152602083013560208201525092915050565b60008060008060808587031215611ffe57600080fd5b843567ffffffffffffffff8082111561201657600080fd5b61202288838901611ec5565b9550602087013591508082111561203857600080fd5b818701915087601f83011261204c57600080fd5b81358181111561205b57600080fd5b8860208260051b850101111561207057600080fd5b6020830195508094505050506120898660408701611f91565b905092959194509250565b6000806000606084860312156120a957600080fd5b6120b284611f68565b92506120c060208501611f68565b9150604084013567ffffffffffffffff811681146120dd57600080fd5b809150509250925092565b60008082840360608112156120fc57600080fd5b833567ffffffffffffffff81111561211357600080fd5b61211f86828701611ec5565b9350506040601f198201121561213457600080fd5b506020830190509250929050565b60006020828403121561215457600080fd5b61187a82611f68565b600067ffffffffffffffff82111561217757612177611ede565b50601f01601f191660200190565b600082601f83011261219657600080fd5b81356121a96121a48261215d565b611f37565b8181528460208386010111156121be57600080fd5b816020850160208301376000918101602001919091529392505050565b600061010082360312156121ee57600080fd5b6121f6611f0d565b82358152602083013567ffffffffffffffff81111561221457600080fd5b61222036828601612185565b60208301525061223260408401611f68565b604082015261224360608401611f68565b606082015261225460808401611f68565b608082015261226560a08401611f68565b60a082015260c083013560c082015260e083013560e082015280915050919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122bc57600080fd5b83018035915067ffffffffffffffff8211156122d757600080fd5b6020019150368190038213156122ec57600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4183360301811261235657600080fd5b9190910192915050565b6000610160808352600681840152507f676e6f73697300000000000000000000000000000000000000000000000000006101808301526101a0806020840152600081840152506101c08060408401528b81840152506101e08b8d8285013760008c840182015273ffffffffffffffffffffffffffffffffffffffff8b166060840152601f19601f8d0116830101905073ffffffffffffffffffffffffffffffffffffffff8916608083015273ffffffffffffffffffffffffffffffffffffffff881660a083015273ffffffffffffffffffffffffffffffffffffffff871660c08301528560e08301528461010083015261245f61012083018515159052565b8215156101408301529b9a5050505050505050505050565b60006040828403121561248957600080fd5b61187a8383611f91565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156124d4576124d4612493565b500390565b6000602082840312156124eb57600080fd5b5051919050565b6000808585111561250257600080fd5b8386111561250f57600080fd5b5050820193919092039150565b80356020831015610b39577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361258957612589612493565b5060010190565b8183823760009101908152919050565b60005b838110156125bb5781810151838201526020016125a3565b8381111561108c5750506000910152565b60208152600082518060208401526125eb8160408501602087016125a0565b601f01601f19169190910160400192915050565b60006020828403121561261157600080fd5b815167ffffffffffffffff81111561262857600080fd5b8201601f8101841361263957600080fd5b80516126476121a48261215d565b81815285602083850101111561265c57600080fd5b61266d8260208301602086016125a0565b95945050505050565b60006020828403121561268857600080fd5b8151801515811461187a57600080fd5b600082198211156126ab576126ab612493565b500190565b600082516123568184602087016125a056fea2646970667358221220ac83b109f0e5a99ac9874011a63f6fa9721b252b0d630d5105cc82a49a9abf5064736f6c634300080d0033";
    static readonly abi: ({
        inputs: never[];
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
    static createInterface(): GnosisBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GnosisBridgeFacet;
}
export {};
