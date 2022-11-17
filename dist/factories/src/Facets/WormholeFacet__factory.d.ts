import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WormholeFacet, WormholeFacetInterface } from "../../../src/Facets/WormholeFacet";
declare type WormholeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WormholeFacet__factory extends ContractFactory {
    constructor(...args: WormholeFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<WormholeFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): WormholeFacet;
    connect(signer: Signer): WormholeFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061225f806100206000396000f3fe6080604052600436106100295760003560e01c806360fef3a01461002e578063ee2e420114610043575b600080fd5b61004161003c366004611a0c565b610056565b005b610041610051366004611bdf565b6101b7565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556100f26100e86040840160208501611c8c565b836040013561033c565b61010961010436849003840184611ca7565b610362565b82357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c46101396020860186611cc3565b6101496060880160408901611c8c565b6101596040880160208901611c8c565b61016960a08a0160808b01611c8c565b61017960808a0160608b01611c8c565b60408a013561018e60a08c0160808d01611d2f565b6000806040516101a79a99989796959493929190611d4a565b60405180910390a2600090555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610232576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561024961024286611ee1565b858561048a565b604083015261025782610362565b84357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c46102876020880188611cc3565b61029760608a0160408b01611c8c565b888860008181106102aa576102aa611f8d565b90506020028101906102bc9190611fbc565b6102cd906060810190604001611c8c565b6102dd60a08c0160808d01611c8c565b88606001518b8b60008181106102f5576102f5611f8d565b90506020028101906103079190611fbc565b608001358a608001516001600060405161032a9a99989796959493929190611d4a565b60405180910390a26000905550505050565b61035e828273ffffffffffffffffffffffffffffffffffffffff82161561058e565b5050565b806080015161ffff1646036103a3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ba8160200151826000015183604001516106ae565b805160208201516040808401516080850151606086015160a087015160c088015194517f0f5287b000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9687166004820152602481019490945261ffff909216604484015284166064830152608482015263ffffffff90911660a4820152911690630f5287b09060c401600060405180830381600087803b15801561046f57600080fd5b505af1158015610483573d6000803e3d6000fd5b5050505050565b6000818082036104c6576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084846104d5600182612029565b8181106104e4576104e4611f8d565b90506020028101906104f69190611fbc565b610507906080810190606001611c8c565b90506000610514826107ea565b90506105218787876108a3565b600061052c836107ea565b905081811161053b5780610545565b6105458282612029565b915081600003610581576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50925050505b9392505050565b816000036105c8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b801561060c57813414610607576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b3415610643576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061064e846107ea565b905061065c84333086610c85565b8281610667866107ea565b6106719190612029565b146106a8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166106ce57505050565b73ffffffffffffffffffffffffffffffffffffffff821661071b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610791573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b59190612040565b9050818110156106a8576106a884847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610d2b565b600073ffffffffffffffffffffffffffffffffffffffff82161561089b576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610872573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108969190612040565b61089d565b475b92915050565b81818060018114610b305760006108ba8484610f12565b9050600084846108cb600186612029565b8181106108da576108da611f8d565b90506020028101906108ec9190611fbc565b6108fd906080810190606001611c8c565b90506000805b87811015610a4b573689898381811061091e5761091e611f8d565b90506020028101906109309190611fbc565b90506000806109456040840160208501611c8c565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1680156109b157506000806109866020840184611c8c565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b80156109f65750600160006109c960a0840184611cc3565b6109d891600891600091612059565b6109e191612083565b815260208101919091526040016000205460ff165b610a2c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a51610a389082611033565b5080610a43816120bf565b915050610903565b5060005b610a5a600186612029565b811015610b27576000878783818110610a7557610a75611f8d565b9050602002810190610a879190611fbc565b610a98906080810190606001611c8c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ad35750610b15565b848281518110610ae557610ae5611f8d565b6020026020010151610af6826107ea565b610b009190612029565b92508215610b1357610b13813385611307565b505b80610b1f816120bf565b915050610a4f565b50505050610c7d565b60005b84811015610c7b5736868683818110610b4e57610b4e611f8d565b9050602002810190610b609190611fbc565b9050600080610b756040840160208501611c8c565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610be15750600080610bb66020840184611c8c565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610c26575060016000610bf960a0840184611cc3565b610c0891600891600091612059565b610c1191612083565b815260208101919091526040016000205460ff165b610c5c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8751610c689082611033565b5080610c73816120bf565b915050610b33565b505b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610cd2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d1f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106a884848484611338565b801580610dcb57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610da5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc99190612040565b155b610e5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106079084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611396565b60608160008167ffffffffffffffff811115610f3057610f30611a67565b604051908082528060200260200182016040528015610f59578160200160208202803683370190505b50905060005b8281101561102a576000868683818110610f7b57610f7b611f8d565b9050602002810190610f8d9190611fbc565b610f9e906080810190606001611c8c565b90506000610fab826107ea565b905073ffffffffffffffffffffffffffffffffffffffff8216610ff557610fd23482612029565b848481518110610fe457610fe4611f8d565b602002602001018181525050611015565b8084848151811061100857611008611f8d565b6020026020010181815250505b50508080611022906120bf565b915050610f5f565b50949350505050565b6110496110436020830183611c8c565b3b151590565b61107f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036110bf576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806110d26060850160408601611c8c565b905060006110e66080860160608701611c8c565b905060006110f3836107ea565b90506000611100836107ea565b9050600086831061111257600061111c565b61111c8388612029565b905073ffffffffffffffffffffffffffffffffffffffff85161561116b576111548561114e60408b0160208c01611c8c565b896106ae565b80156111665761116685333084610c85565b61116f565b8695505b60008061117f60208b018b611c8c565b73ffffffffffffffffffffffffffffffffffffffff16886111a360a08d018d611cc3565b6040516111b19291906120f7565b60006040518083038185875af1925050503d80600081146111ee576040519150601f19603f3d011682016040523d82523d6000602084013e6111f3565b606091505b50915091508161123e576000611208826114a2565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e539190612133565b6000611249876107ea565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c61127a60208e018e611c8c565b8d604001602081019061128d9190611c8c565b8a8e8a871161129c57866112a6565b6112a68b88612029565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83161561132e57610607838383611519565b6106078282611571565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526106a89085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610eae565b60006113f8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166116589092919063ffffffff16565b80519091501561060757808060200190518101906114169190612166565b610607576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610e53565b60606044825110156114e757505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061150360048085516114fb9190612029565b85919061166f565b9050808060200190518101906105879190612188565b73ffffffffffffffffffffffffffffffffffffffff8316611566576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106078383836117ca565b73ffffffffffffffffffffffffffffffffffffffff82166115be576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611618576040519150601f19603f3d011682016040523d82523d6000602084013e61161d565b606091505b5050905080610607576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60606116678484600085611820565b949350505050565b60608161167d81601f6121ff565b10156116e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152606401610e53565b6116ef82846121ff565b84511015611759576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152606401610e53565b606082158015611778576040519150600082526020820160405261102a565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156117b1578051835260209283019201611799565b5050858452601f01601f19166040525050949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106079084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401610eae565b6060824710156118b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610e53565b843b61191a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610e53565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516119439190612217565b60006040518083038185875af1925050503d8060008114611980576040519150601f19603f3d011682016040523d82523d6000602084013e611985565b606091505b50915091506119958282866119a0565b979650505050505050565b606083156119af575081610587565b8251156119bf5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e539190612133565b60006101008284031215611a0657600080fd5b50919050565b600080828403610100811215611a2157600080fd5b833567ffffffffffffffff811115611a3857600080fd5b611a44868287016119f3565b93505060e0601f1982011215611a5957600080fd5b506020830190509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611ab957611ab9611a67565b60405290565b604051610100810167ffffffffffffffff81118282101715611ab957611ab9611a67565b604051601f8201601f1916810167ffffffffffffffff81118282101715611b0c57611b0c611a67565b604052919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b3857600080fd5b919050565b803561ffff81168114611b3857600080fd5b600060e08284031215611b6157600080fd5b611b69611a96565b9050611b7482611b14565b8152611b8260208301611b14565b602082015260408201356040820152611b9d60608301611b14565b6060820152611bae60808301611b3d565b608082015260a082013560a082015260c082013563ffffffff81168114611bd457600080fd5b60c082015292915050565b6000806000806101208587031215611bf657600080fd5b843567ffffffffffffffff80821115611c0e57600080fd5b611c1a888389016119f3565b95506020870135915080821115611c3057600080fd5b818701915087601f830112611c4457600080fd5b813581811115611c5357600080fd5b8860208260051b8501011115611c6857600080fd5b602083019550809450505050611c818660408701611b4f565b905092959194509250565b600060208284031215611c9e57600080fd5b61058782611b14565b600060e08284031215611cb957600080fd5b6105878383611b4f565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611cf857600080fd5b83018035915067ffffffffffffffff821115611d1357600080fd5b602001915036819003821315611d2857600080fd5b9250929050565b600060208284031215611d4157600080fd5b61058782611b3d565b6000610160808352600881840152507f776f726d686f6c650000000000000000000000000000000000000000000000006101808301526101a0806020840152600081840152506101c08060408401528b81840152506101e08b8d8285013760008c840182015273ffffffffffffffffffffffffffffffffffffffff8b166060840152601f19601f8d0116830101905073ffffffffffffffffffffffffffffffffffffffff8916608083015273ffffffffffffffffffffffffffffffffffffffff881660a083015273ffffffffffffffffffffffffffffffffffffffff871660c08301528560e0830152611e4461010083018661ffff169052565b9215156101208201529015156101409091015298975050505050505050565b600067ffffffffffffffff821115611e7d57611e7d611a67565b50601f01601f191660200190565b600082601f830112611e9c57600080fd5b8135611eaf611eaa82611e63565b611ae3565b818152846020838601011115611ec457600080fd5b816020850160208301376000918101602001919091529392505050565b60006101008236031215611ef457600080fd5b611efc611abf565b82358152602083013567ffffffffffffffff811115611f1a57600080fd5b611f2636828601611e8b565b602083015250611f3860408401611b14565b6040820152611f4960608401611b14565b6060820152611f5a60808401611b14565b6080820152611f6b60a08401611b14565b60a082015260c083013560c082015260e083013560e082015280915050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff41833603018112611ff057600080fd5b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561203b5761203b611ffa565b500390565b60006020828403121561205257600080fd5b5051919050565b6000808585111561206957600080fd5b8386111561207657600080fd5b5050820193919092039150565b8035602083101561089d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036120f0576120f0611ffa565b5060010190565b8183823760009101908152919050565b60005b8381101561212257818101518382015260200161210a565b838111156106a85750506000910152565b6020815260008251806020840152612152816040850160208701612107565b601f01601f19169190910160400192915050565b60006020828403121561217857600080fd5b8151801515811461058757600080fd5b60006020828403121561219a57600080fd5b815167ffffffffffffffff8111156121b157600080fd5b8201601f810184136121c257600080fd5b80516121d0611eaa82611e63565b8181528560208385010111156121e557600080fd5b6121f6826020830160208601612107565b95945050505050565b6000821982111561221257612212611ffa565b500190565b60008251611ff081846020870161210756fea2646970667358221220af61aecc812859e520106400539ff56d546cea19463c56f5e374eec18168d5f964736f6c634300080d0033";
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
    static createInterface(): WormholeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WormholeFacet;
}
export {};