import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GnosisBridgeFacet, GnosisBridgeFacetInterface } from "../GnosisBridgeFacet";
declare type GnosisBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GnosisBridgeFacet__factory extends ContractFactory {
    constructor(...args: GnosisBridgeFacetConstructorParams);
    deploy(_xDaiBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GnosisBridgeFacet>;
    getDeployTransaction(_xDaiBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GnosisBridgeFacet;
    connect(signer: Signer): GnosisBridgeFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620029ca380380620029ca833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161292f6200009b600039600081816108b20152610922015261292f6000f3fe6080604052600436106100295760003560e01c806302cba4a31461002e578063a9d0550f14610043575b600080fd5b61004161003c366004612367565b610056565b005b61004161005136600461239c565b61036f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612465565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86606467ffffffffffffffff16808260e001511461027f576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102fe576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610320736b175474e89094c44da98b954eedeac495271d0f8c60c00151610718565b6103298b610898565b505050505050506000479050600082821161034557600061034f565b61034f8383612465565b9050801561036357610363600085836109e2565b50506000909255505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103ea576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100840151849061042c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061012001511561046a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8561048d8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104c4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610502576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361053f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86606467ffffffffffffffff16808260e0015114610589576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610608576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000899003610643576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b736b175474e89094c44da98b954eedeac495271d0f8a8a610665600182612465565b81811061067457610674612478565b905060200281019061068691906124a7565b6106979060808101906060016124e5565b73ffffffffffffffffffffffffffffffffffffffff16146106e4576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106f98b600001518c60c001518c8c33610a13565b60c08c01526107078b610898565b505060009095555050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610771578034101561076d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036107ab576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610818573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083c9190612500565b905081811015610887576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61089383333085610b56565b505050565b6108db736b175474e89094c44da98b954eedeac495271d0f7f00000000000000000000000000000000000000000000000000000000000000008360c00151610d70565b60a081015160c08201516040517f01e4f53a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016926301e4f53a926109769260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b15801561099057600080fd5b505af11580156109a4573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516109d79190612587565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff831615610a0957610893838383610ebb565b6108938282610fea565b600082808203610a4f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610a5e600185612465565b818110610a6d57610a6d612478565b9050602002810190610a7f91906124a7565b610a909060808101906060016124e5565b90506000610a9d82611114565b905073ffffffffffffffffffffffffffffffffffffffff8216610ac757610ac43482612465565b90505b6000610ad388886111cd565b9050610adf88886112d9565b610aec8a8989898561133a565b600082610af885611114565b610b029190612465565b905089811015610b48576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161087e565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610ba3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bf0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610c61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c859190612500565b9050610c93828686866116ec565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610d03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d279190612500565b610d319190612465565b14610d68576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d9057505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ddd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610e53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e779190612500565b905081811015610eb557610eb58484610eb0847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612465565b6117c8565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f08576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f999190612500565b905080821115610fdf576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161087e565b610eb58484846118c6565b73ffffffffffffffffffffffffffffffffffffffff8216611037576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561107a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161087e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110d4576040519150601f19603f3d011682016040523d82523d6000602084013e6110d9565b606091505b5050905080610893576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156111c5576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561119c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c09190612500565b6111c7565b475b92915050565b60608160008167ffffffffffffffff8111156111eb576111eb6120d6565b604051908082528060200260200182016040528015611214578160200160208202803683370190505b5090506000805b838110156112ce5786868281811061123557611235612478565b905060200281019061124791906124a7565b6112589060808101906060016124e5565b915061126382611114565b83828151811061127557611275612478565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112c657348382815181106112ae576112ae612478565b602002602001018181516112c29190612465565b9052505b60010161121b565b509095945050505050565b60005b818110156108935760008383838181106112f8576112f8612478565b905060200281019061130a91906124a7565b6113139061269a565b90508060c00151156113315761133181604001518260800151610718565b506001016112dc565b8383838382600181146116075760008585611356600185612465565b81811061136557611365612478565b905060200281019061137791906124a7565b6113889060808101906060016124e5565b9050600089815b8181101561153357368d8d838181106113aa576113aa612478565b90506020028101906113bc91906124a7565b90506113eb6113d160608301604084016124e5565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061144e575061144e61140460408301602084016124e5565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611465575061146561140460208301836124e5565b80156114ea57506114ea61147c60a083018361273f565b61148b916004916000916127ab565b611494916127d5565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611520576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61152a8f8261191c565b5060010161138f565b505060005b611543600185612465565b8110156115ff57600088888381811061155e5761155e612478565b905060200281019061157091906124a7565b6115819060808101906060016124e5565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146115f6578582815181106115c8576115c8612478565b60200260200101516115d982611114565b6115e39190612465565b925082156115f6576115f68188856109e2565b50600101611538565b5050506116e0565b8760005b818110156116dd57368b8b8381811061162657611626612478565b905060200281019061163891906124a7565b905061164d6113d160608301604084016124e5565b80611666575061166661140460408301602084016124e5565b801561167d575061167d61140460208301836124e5565b8015611694575061169461147c60a083018361273f565b6116ca576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116d48d8261191c565b5060010161160b565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610eb59085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c32565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561183f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118639190612500565b61186d919061281d565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610eb59085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611746565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108939084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611746565b61193261192c60208301836124e5565b3b151590565b611968576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036119a8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119bd6113d160608501604086016124e5565b6119c85760006119ce565b82608001355b905060006119ea6119e560608601604087016124e5565b611114565b90506000611a016119e560808701606088016124e5565b905082600003611a3857611a38611a1e60608701604088016124e5565b611a2e60408801602089016124e5565b8760800135610d70565b8460800135821015611a83576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161087e565b600080611a9360208801886124e5565b73ffffffffffffffffffffffffffffffffffffffff1685611ab760a08a018a61273f565b604051611ac5929190612830565b60006040518083038185875af1925050503d8060008114611b02576040519150601f19603f3d011682016040523d82523d6000602084013e611b07565b606091505b509150915081611b52576000611b1c82611d3e565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087e9190612840565b6000611b676119e560808a0160608b016124e5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b9860208b018b6124e5565b611ba860608c0160408d016124e5565b611bb860808d0160608e016124e5565b8c60800135898711611bca5786611bd4565b611bd48a88612465565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611c94826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611dbc9092919063ffffffff16565b8051909150156108935780806020019051810190611cb29190612853565b610893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161087e565b6060604482511015611d8357505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611d9f6004808551611d979190612465565b859190611dd3565b905080806020019051810190611db59190612870565b9392505050565b6060611dcb8484600085611eed565b949350505050565b606081611de181601f61281d565b1015611e19576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e23828461281d565b84511015611e5d576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e7c5760405191506000825260208201604052611ee4565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611eb5578051835260209283019201611e9d565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611f7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161087e565b73ffffffffffffffffffffffffffffffffffffffff85163b611ffd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161087e565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161202691906128e7565b60006040518083038185875af1925050503d8060008114612063576040519150601f19603f3d011682016040523d82523d6000602084013e612068565b606091505b5091509150612078828286612083565b979650505050505050565b60608315612092575081611db5565b8251156120a25782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087e9190612840565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612129576121296120d6565b60405290565b60405160e0810167ffffffffffffffff81118282101715612129576121296120d6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612199576121996120d6565b604052919050565b600067ffffffffffffffff8211156121bb576121bb6120d6565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126121f857600080fd5b813561220b612206826121a1565b612152565b81815284602083860101111561222057600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461226157600080fd5b919050565b801515811461227457600080fd5b50565b803561226181612266565b6000610140828403121561229557600080fd5b61229d612105565b905081358152602082013567ffffffffffffffff808211156122be57600080fd5b6122ca858386016121e7565b602084015260408401359150808211156122e357600080fd5b506122f0848285016121e7565b6040830152506123026060830161223d565b60608201526123136080830161223d565b608082015261232460a0830161223d565b60a082015260c082013560c082015260e082013560e082015261010061234b818401612277565b9082015261012061235d838201612277565b9082015292915050565b60006020828403121561237957600080fd5b813567ffffffffffffffff81111561239057600080fd5b611dcb84828501612282565b6000806000604084860312156123b157600080fd5b833567ffffffffffffffff808211156123c957600080fd5b6123d587838801612282565b945060208601359150808211156123eb57600080fd5b818601915086601f8301126123ff57600080fd5b81358181111561240e57600080fd5b8760208260051b850101111561242357600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156111c7576111c7612436565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126124db57600080fd5b9190910192915050565b6000602082840312156124f757600080fd5b611db58261223d565b60006020828403121561251257600080fd5b5051919050565b60005b8381101561253457818101518382015260200161251c565b50506000910152565b60008151808452612555816020860160208601612519565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526125b061016085018361253d565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125eb838261253d565b9250506060850151612615608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126888187018315159052565b90950151151593019290925250919050565b600060e082360312156126ac57600080fd5b6126b461212f565b6126bd8361223d565b81526126cb6020840161223d565b60208201526126dc6040840161223d565b60408201526126ed6060840161223d565b60608201526080830135608082015260a083013567ffffffffffffffff81111561271657600080fd5b612722368286016121e7565b60a08301525061273460c08401612277565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261277457600080fd5b83018035915067ffffffffffffffff82111561278f57600080fd5b6020019150368190038213156127a457600080fd5b9250929050565b600080858511156127bb57600080fd5b838611156127c857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128155780818660040360031b1b83161692505b505092915050565b808201808211156111c7576111c7612436565b8183823760009101908152919050565b602081526000611db5602083018461253d565b60006020828403121561286557600080fd5b8151611db581612266565b60006020828403121561288257600080fd5b815167ffffffffffffffff81111561289957600080fd5b8201601f810184136128aa57600080fd5b80516128b8612206826121a1565b8181528560208385010111156128cd57600080fd5b6128de826020830160208601612519565b95945050505050565b600082516124db81846020870161251956fea26469706673582212200c11f13c5d59d8de4e5e3a299ff727827e5d3babe2d4fb829d38f85504ee7d9564736f6c63430008110033";
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
