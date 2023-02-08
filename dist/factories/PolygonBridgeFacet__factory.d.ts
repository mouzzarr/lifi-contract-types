import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PolygonBridgeFacet, PolygonBridgeFacetInterface } from "../PolygonBridgeFacet";
declare type PolygonBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolygonBridgeFacet__factory extends ContractFactory {
    constructor(...args: PolygonBridgeFacetConstructorParams);
    deploy(_rootChainManager: PromiseOrValue<string>, _erc20Predicate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PolygonBridgeFacet>;
    getDeployTransaction(_rootChainManager: PromiseOrValue<string>, _erc20Predicate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PolygonBridgeFacet;
    connect(signer: Signer): PolygonBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620029e3380380620029e3833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a05161290b620000d860003960006107f10152600081816106cb0152818161077801526108a9015261290b6000f3fe6080604052600436106100295760003560e01c8063af62c7d61461002e578063b4f3758114610043575b600080fd5b61004161003c3660046122eb565b610056565b005b610041610051366004612320565b610290565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476123e9565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104d3565b61025087610653565b5047915060009050828211610266576000610270565b61027083836123e9565b90508015610284576102846000858361094e565b50506000909255505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161030b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031c34476123e9565b90508580610100015161035b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610399576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103bc8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610431576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048389600001518a60c001518a8a3361097f565b60c08a015261049189610653565b50479150600090508282116104a75760006104b1565b6104b183836123e9565b905080156104c5576104c56000858361094e565b505060009092555050505050565b73ffffffffffffffffffffffffffffffffffffffff821661052c5780341015610528576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610566576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f791906123fc565b905081811015610642576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61064e83333085610ac2565b505050565b6000610677826080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561072e5760c082015160a08301516040517f4faa8a2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000090911691634faa8a26916024016000604051808303818588803b15801561071057600080fd5b505af1158015610724573d6000803e3d6000fd5b5050505050610913565b60808201516040517fea60c7c400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169063ea60c7c490602401602060405180830381865afa1580156107c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e59190612415565b905061081a82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610cdc565b60008260c0015160405160200161083391815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905260a085015160808601517fe3dec8fb00000000000000000000000000000000000000000000000000000000845291935073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263e3dec8fb926108df929186906004016124a0565b600060405180830381600087803b1580156108f957600080fd5b505af115801561090d573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161094291906124e2565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109755761064e838383610e27565b61064e8282610f56565b6000828082036109bb576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856109ca6001856123e9565b8181106109d9576109d96125f5565b90506020028101906109eb9190612624565b6109fc906080810190606001612662565b90506000610a0982611080565b905073ffffffffffffffffffffffffffffffffffffffff8216610a3357610a3034826123e9565b90505b6000610a3f8888611139565b9050610a4b8888611245565b610a588a898989856112a6565b600082610a6485611080565b610a6e91906123e9565b905089811015610ab4576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610639565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610b0f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b5c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610bcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf191906123fc565b9050610bff82868686611658565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610c6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9391906123fc565b610c9d91906123e9565b14610cd4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cfc57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d49576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610dbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de391906123fc565b905081811015610e2157610e218484610e1c847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6123e9565b611734565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610e74576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610ee1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0591906123fc565b905080821115610f4b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610639565b610e21848484611832565b73ffffffffffffffffffffffffffffffffffffffff8216610fa3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610fe6576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610639565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611040576040519150601f19603f3d011682016040523d82523d6000602084013e611045565b606091505b505090508061064e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611131576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611108573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112c91906123fc565b611133565b475b92915050565b60608160008167ffffffffffffffff81111561115757611157612051565b604051908082528060200260200182016040528015611180578160200160208202803683370190505b5090506000805b8381101561123a578686828181106111a1576111a16125f5565b90506020028101906111b39190612624565b6111c4906080810190606001612662565b91506111cf82611080565b8382815181106111e1576111e16125f5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611232573483828151811061121a5761121a6125f5565b6020026020010181815161122e91906123e9565b9052505b600101611187565b509095945050505050565b60005b8181101561064e576000838383818110611264576112646125f5565b90506020028101906112769190612624565b61127f9061267f565b90508060c001511561129d5761129d816040015182608001516104d3565b50600101611248565b83838383826001811461157357600085856112c26001856123e9565b8181106112d1576112d16125f5565b90506020028101906112e39190612624565b6112f4906080810190606001612662565b9050600089815b8181101561149f57368d8d83818110611316576113166125f5565b90506020028101906113289190612624565b905061135761133d6060830160408401612662565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113ba57506113ba6113706040830160208401612662565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113d157506113d16113706020830183612662565b801561145657506114566113e860a0830183612724565b6113f791600491600091612790565b611400916127ba565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61148c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114968f82611888565b506001016112fb565b505060005b6114af6001856123e9565b81101561156b5760008888838181106114ca576114ca6125f5565b90506020028101906114dc9190612624565b6114ed906080810190606001612662565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461156257858281518110611534576115346125f5565b602002602001015161154582611080565b61154f91906123e9565b925082156115625761156281888561094e565b506001016114a4565b50505061164c565b8760005b8181101561164957368b8b83818110611592576115926125f5565b90506020028101906115a49190612624565b90506115b961133d6060830160408401612662565b806115d257506115d26113706040830160208401612662565b80156115e957506115e96113706020830183612662565b801561160057506116006113e860a0830183612724565b611636576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116408d82611888565b50600101611577565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e219085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b9e565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156117ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cf91906123fc565b6117d99190612802565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610e219085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016116b2565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261064e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016116b2565b61189e6118986020830183612662565b3b151590565b6118d4576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611914576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061192961133d6060850160408601612662565b61193457600061193a565b82608001355b905060006119566119516060860160408701612662565b611080565b9050600061196d6119516080870160608801612662565b9050826000036119a4576119a461198a6060870160408801612662565b61199a6040880160208901612662565b8760800135610cdc565b84608001358210156119ef576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610639565b6000806119ff6020880188612662565b73ffffffffffffffffffffffffffffffffffffffff1685611a2360a08a018a612724565b604051611a31929190612815565b60006040518083038185875af1925050503d8060008114611a6e576040519150601f19603f3d011682016040523d82523d6000602084013e611a73565b606091505b509150915081611abe576000611a8882611caa565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106399190612825565b6000611ad361195160808a0160608b01612662565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b0460208b018b612662565b611b1460608c0160408d01612662565b611b2460808d0160608e01612662565b8c60800135898711611b365786611b40565b611b408a886123e9565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611c00826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d289092919063ffffffff16565b80519091501561064e5780806020019051810190611c1e9190612838565b61064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610639565b6060604482511015611cef57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611d0b6004808551611d0391906123e9565b859190611d3f565b905080806020019051810190611d219190612855565b9392505050565b6060611d378484600085611e59565b949350505050565b606081611d4d81601f612802565b1015611d85576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d8f8284612802565b84511015611dc9576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611de85760405191506000825260208201604052611e50565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611e21578051835260209283019201611e09565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611eeb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610639565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f1491906128c3565b60006040518083038185875af1925050503d8060008114611f51576040519150601f19603f3d011682016040523d82523d6000602084013e611f56565b606091505b5091509150611f6787838387611f72565b979650505050505050565b606083156120085782516000036120015773ffffffffffffffffffffffffffffffffffffffff85163b612001576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610639565b5081611d37565b611d37838381511561201d5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106399190612825565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120a4576120a4612051565b60405290565b60405160e0810167ffffffffffffffff811182821017156120a4576120a4612051565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561211457612114612051565b604052919050565b600067ffffffffffffffff82111561213657612136612051565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261217357600080fd5b81356121866121818261211c565b6120cd565b81815284602083860101111561219b57600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146121da57600080fd5b50565b80356121e8816121b8565b919050565b80151581146121da57600080fd5b80356121e8816121ed565b6000610140828403121561221957600080fd5b612221612080565b905081358152602082013567ffffffffffffffff8082111561224257600080fd5b61224e85838601612162565b6020840152604084013591508082111561226757600080fd5b5061227484828501612162565b604083015250612286606083016121dd565b6060820152612297608083016121dd565b60808201526122a860a083016121dd565b60a082015260c082013560c082015260e082013560e08201526101006122cf8184016121fb565b908201526101206122e18382016121fb565b9082015292915050565b6000602082840312156122fd57600080fd5b813567ffffffffffffffff81111561231457600080fd5b611d3784828501612206565b60008060006040848603121561233557600080fd5b833567ffffffffffffffff8082111561234d57600080fd5b61235987838801612206565b9450602086013591508082111561236f57600080fd5b818601915086601f83011261238357600080fd5b81358181111561239257600080fd5b8760208260051b85010111156123a757600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611133576111336123ba565b60006020828403121561240e57600080fd5b5051919050565b60006020828403121561242757600080fd5b8151611d21816121b8565b60005b8381101561244d578181015183820152602001612435565b50506000910152565b6000815180845261246e816020860160208601612432565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff8086168352808516602084015250606060408301526124d96060830184612456565b95945050505050565b60208152815160208201526000602083015161014080604085015261250b610160850183612456565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125468382612456565b9250506060850151612570608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125e38187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261265857600080fd5b9190910192915050565b60006020828403121561267457600080fd5b8135611d21816121b8565b600060e0823603121561269157600080fd5b6126996120aa565b6126a2836121dd565b81526126b0602084016121dd565b60208201526126c1604084016121dd565b60408201526126d2606084016121dd565b60608201526080830135608082015260a083013567ffffffffffffffff8111156126fb57600080fd5b61270736828601612162565b60a08301525061271960c084016121fb565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261275957600080fd5b83018035915067ffffffffffffffff82111561277457600080fd5b60200191503681900382131561278957600080fd5b9250929050565b600080858511156127a057600080fd5b838611156127ad57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127fa5780818660040360031b1b83161692505b505092915050565b80820180821115611133576111336123ba565b8183823760009101908152919050565b602081526000611d216020830184612456565b60006020828403121561284a57600080fd5b8151611d21816121ed565b60006020828403121561286757600080fd5b815167ffffffffffffffff81111561287e57600080fd5b8201601f8101841361288f57600080fd5b805161289d6121818261211c565b8181528560208385010111156128b257600080fd5b6124d9826020830160208601612432565b6000825161265881846020870161243256fea2646970667358221220641dd8d7c9878b348892652b9ca5933e65a115e874174f713594cd308063f84864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IRootChainManager";
            readonly name: "_rootChainManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_erc20Predicate";
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
        }];
        readonly name: "startBridgeTokensViaPolygonBridge";
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
        }];
        readonly name: "swapAndStartBridgeTokensViaPolygonBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): PolygonBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolygonBridgeFacet;
}
export {};