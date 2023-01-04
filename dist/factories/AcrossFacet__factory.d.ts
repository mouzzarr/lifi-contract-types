import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacet, AcrossFacetInterface } from "../AcrossFacet";
declare type AcrossFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacet__factory extends ContractFactory {
    constructor(...args: AcrossFacetConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacet>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacet;
    connect(signer: Signer): AcrossFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620028b4380380620028b4833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a0516127e3620000d160003960006106910152600081816106bf01526106ea01526127e36000f3fe6080604052600436106100295760003560e01c80634eefe3a51461002e578063ba66bd9a14610043575b600080fd5b61004161003c366004612204565b610056565b005b6100416100513660046122b0565b61029b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612339565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104e5565b60c08b01526102588a8861062d565b504791506000905082821161026e576000610278565b6102788383612339565b9050801561028c5761028c6000858361083a565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610316576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103273447612339565b90508461034c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610383576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103c1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103fe576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561043c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561047a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048c88608001518960c00151610870565b6104a48861049f368a90038a018a61234c565b61062d565b50479150600090508282116104ba5760006104c4565b6104c48383612339565b905080156104d8576104d86000858361083a565b5050600090925550505050565b600082808203610521576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610530600185612339565b81811061053f5761053f612368565b90506020028101906105519190612397565b6105629060808101906060016123d5565b9050600061056f826109e6565b905073ffffffffffffffffffffffffffffffffffffffff8216610599576105963482612339565b90505b60006105a58888610a9f565b90506105b18888610bab565b6105be8a89898985610c0c565b6000826105ca856109e6565b6105d49190612339565b90508981101561061f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b8160e00151460361066a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff8116159081156106b557507f00000000000000000000000000000000000000000000000000000000000000006106e8565b6106e884608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610fbe565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634922897883610730576000610736565b8560c001515b60a087015160c088015160e0808a0151895160208b01516040519388901b7fffffffff0000000000000000000000000000000000000000000000000000000016845273ffffffffffffffffffffffffffffffffffffffff958616600485015294891660248401526044830193909352606482015267ffffffffffffffff909116608482015263ffffffff90911660a482015260c4016000604051808303818588803b1580156107e457600080fd5b505af11580156107f8573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161082c9190612440565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83161561086657610861838383611109565b505050565b6108618282611238565b73ffffffffffffffffffffffffffffffffffffffff82166108c957803410156108c5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610903576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610970573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109949190612535565b9050818110156109da576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610616565b61086183333085611362565b600073ffffffffffffffffffffffffffffffffffffffff821615610a97576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a929190612535565b610a99565b475b92915050565b60608160008167ffffffffffffffff811115610abd57610abd611f39565b604051908082528060200260200182016040528015610ae6578160200160208202803683370190505b5090506000805b83811015610ba057868682818110610b0757610b07612368565b9050602002810190610b199190612397565b610b2a9060808101906060016123d5565b9150610b35826109e6565b838281518110610b4757610b47612368565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b985734838281518110610b8057610b80612368565b60200260200101818151610b949190612339565b9052505b600101610aed565b509095945050505050565b60005b81811015610861576000838383818110610bca57610bca612368565b9050602002810190610bdc9190612397565b610be59061254e565b90508060c0015115610c0357610c0381604001518260800151610870565b50600101610bae565b838383838260018114610ed95760008585610c28600185612339565b818110610c3757610c37612368565b9050602002810190610c499190612397565b610c5a9060808101906060016123d5565b9050600089815b81811015610e0557368d8d83818110610c7c57610c7c612368565b9050602002810190610c8e9190612397565b9050610cbd610ca360608301604084016123d5565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d205750610d20610cd660408301602084016123d5565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d375750610d37610cd660208301836123d5565b8015610dbc5750610dbc610d4e60a08301836125f3565b610d5d9160049160009161265f565b610d6691612689565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610df2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dfc8f8261157c565b50600101610c61565b505060005b610e15600185612339565b811015610ed1576000888883818110610e3057610e30612368565b9050602002810190610e429190612397565b610e539060808101906060016123d5565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ec857858281518110610e9a57610e9a612368565b6020026020010151610eab826109e6565b610eb59190612339565b92508215610ec857610ec881888561083a565b50600101610e0a565b505050610fb2565b8760005b81811015610faf57368b8b83818110610ef857610ef8612368565b9050602002810190610f0a9190612397565b9050610f1f610ca360608301604084016123d5565b80610f385750610f38610cd660408301602084016123d5565b8015610f4f5750610f4f610cd660208301836123d5565b8015610f665750610f66610d4e60a08301836125f3565b610f9c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fa68d8261157c565b50600101610edd565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fde57505050565b73ffffffffffffffffffffffffffffffffffffffff821661102b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156110a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c59190612535565b9050818110156111035761110384846110fe847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612339565b611892565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611156576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156111c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e79190612535565b90508082111561122d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610616565b6111038484846119f0565b73ffffffffffffffffffffffffffffffffffffffff8216611285576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156112c8576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610616565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611322576040519150601f19603f3d011682016040523d82523d6000602084013e611327565b606091505b5050905080610861576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166113af576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166113fc576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561146d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114919190612535565b905061149f82868686611a46565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561150f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115339190612535565b61153d9190612339565b14611574576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61159261158c60208301836123d5565b3b151590565b6115c8576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611608576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061161d610ca360608501604086016123d5565b61162857600061162e565b82608001355b9050600061164a61164560608601604087016123d5565b6109e6565b9050600061166161164560808701606088016123d5565b9050826000036116985761169861167e60608701604088016123d5565b61168e60408801602089016123d5565b8760800135610fbe565b84608001358210156116e3576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610616565b6000806116f360208801886123d5565b73ffffffffffffffffffffffffffffffffffffffff168561171760a08a018a6125f3565b6040516117259291906126d1565b60006040518083038185875af1925050503d8060008114611762576040519150601f19603f3d011682016040523d82523d6000602084013e611767565b606091505b5091509150816117b257600061177c82611aa4565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061691906126e1565b60006117c761164560808a0160608b016123d5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896117f860208b018b6123d5565b61180860608c0160408d016123d5565b61181860808d0160608e016123d5565b8c6080013589871161182a5786611834565b6118348a88612339565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611909573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061192d9190612535565b61193791906126f4565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506111039085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b22565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108619084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161198c565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111039085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161198c565b6060604482511015611ae957505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611b056004808551611afd9190612339565b859190611c2e565b905080806020019051810190611b1b9190612707565b9392505050565b6000611b84826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d2a9092919063ffffffff16565b8051909150156108615780806020019051810190611ba2919061277e565b610861576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610616565b606081611c3c81601f6126f4565b1015611c74576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c7e82846126f4565b84511015611cb8576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611cd75760405191506000825260208201604052611d21565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d10578051835260209283019201611cf8565b5050858452601f01601f1916604052505b50949350505050565b6060611d398484600085611d41565b949350505050565b606082471015611dd3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610616565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611dfc919061279b565b60006040518083038185875af1925050503d8060008114611e39576040519150601f19603f3d011682016040523d82523d6000602084013e611e3e565b606091505b5091509150611e4f87838387611e5a565b979650505050505050565b60608315611ef0578251600003611ee95773ffffffffffffffffffffffffffffffffffffffff85163b611ee9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610616565b5081611d39565b611d398383815115611f055781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061691906126e1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f8c57611f8c611f39565b60405290565b60405160e0810167ffffffffffffffff81118282101715611f8c57611f8c611f39565b604051601f8201601f1916810167ffffffffffffffff81118282101715611fde57611fde611f39565b604052919050565b600067ffffffffffffffff82111561200057612000611f39565b50601f01601f191660200190565b600082601f83011261201f57600080fd5b813561203261202d82611fe6565b611fb5565b81815284602083860101111561204757600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461208857600080fd5b919050565b801515811461209b57600080fd5b50565b80356120888161208d565b600061014082840312156120bc57600080fd5b6120c4611f68565b905081358152602082013567ffffffffffffffff808211156120e557600080fd5b6120f18583860161200e565b6020840152604084013591508082111561210a57600080fd5b506121178482850161200e565b60408301525061212960608301612064565b606082015261213a60808301612064565b608082015261214b60a08301612064565b60a082015260c082013560c082015260e082013560e082015261010061217281840161209e565b9082015261012061218483820161209e565b9082015292915050565b6000604082840312156121a057600080fd5b6040516040810167ffffffffffffffff82821081831117156121c4576121c4611f39565b816040528293508435915080821682146121dd57600080fd5b508152602083013563ffffffff811681146121f757600080fd5b6020919091015292915050565b6000806000806080858703121561221a57600080fd5b843567ffffffffffffffff8082111561223257600080fd5b61223e888389016120a9565b9550602087013591508082111561225457600080fd5b818701915087601f83011261226857600080fd5b81358181111561227757600080fd5b8860208260051b850101111561228c57600080fd5b6020830195508094505050506122a5866040870161218e565b905092959194509250565b60008082840360608112156122c457600080fd5b833567ffffffffffffffff8111156122db57600080fd5b6122e7868287016120a9565b9350506040601f19820112156122fc57600080fd5b506020830190509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a9957610a9961230a565b60006040828403121561235e57600080fd5b611b1b838361218e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123cb57600080fd5b9190910192915050565b6000602082840312156123e757600080fd5b611b1b82612064565b60005b8381101561240b5781810151838201526020016123f3565b50506000910152565b6000815180845261242c8160208601602086016123f0565b601f01601f19169290920160200192915050565b602081528151602082015260006020830151610140806040850152612469610160850183612414565b91506040850151601f198584030160608601526124868382612414565b92505060608501516124b0608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125238187018315159052565b90950151151593019290925250919050565b60006020828403121561254757600080fd5b5051919050565b600060e0823603121561256057600080fd5b612568611f92565b61257183612064565b815261257f60208401612064565b602082015261259060408401612064565b60408201526125a160608401612064565b60608201526080830135608082015260a083013567ffffffffffffffff8111156125ca57600080fd5b6125d63682860161200e565b60a0830152506125e860c0840161209e565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261262857600080fd5b83018035915067ffffffffffffffff82111561264357600080fd5b60200191503681900382131561265857600080fd5b9250929050565b6000808585111561266f57600080fd5b8386111561267c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126c95780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611b1b6020830184612414565b80820180821115610a9957610a9961230a565b60006020828403121561271957600080fd5b815167ffffffffffffffff81111561273057600080fd5b8201601f8101841361274157600080fd5b805161274f61202d82611fe6565b81815285602083850101111561276457600080fd5b6127758260208301602086016123f0565b95945050505050565b60006020828403121561279057600080fd5b8151611b1b8161208d565b600082516123cb8184602087016123f056fea264697066735822122004db7103a928e18a98580654dac2fadf7a37530096c6ea21d8396a3d742e57fb64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IAcrossSpokePool";
            readonly name: "_spokePool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_wrappedNative";
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
        readonly name: "QuoteTimeout";
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
                readonly internalType: "uint64";
                readonly name: "relayerFeePct";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint32";
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
            }];
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly name: "_acrossData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaAcross";
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
                readonly internalType: "uint64";
                readonly name: "relayerFeePct";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint32";
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
            }];
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly name: "_acrossData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaAcross";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): AcrossFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacet;
}
export {};
