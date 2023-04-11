import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CircleBridgeFacet, CircleBridgeFacetInterface } from "../CircleBridgeFacet";
declare type CircleBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CircleBridgeFacet__factory extends ContractFactory {
    constructor(...args: CircleBridgeFacetConstructorParams);
    deploy(_tokenMessenger: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CircleBridgeFacet>;
    getDeployTransaction(_tokenMessenger: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CircleBridgeFacet;
    connect(signer: Signer): CircleBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002a2d38038062002a2d833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612940620000ed6000396000818161024e015281816102db0152818161050501528181610768015261086701526000818161078901526107ce01526129406000f3fe6080604052600436106100295760003560e01c806302d452ab1461002e578063e9017dc514610050575b600080fd5b34801561003a57600080fd5b5061004e610049366004612104565b610063565b005b61004e61005e3660046123c7565b610324565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556100eb83612473565b80610100015115610128576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013184612473565b8061012001511561016e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61017785612473565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101c8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610206576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610243576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024c86612473565b7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102d6576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103047f00000000000000000000000000000000000000000000000000000000000000008960c001356105e3565b61031661031089612473565b88610763565b505060009093555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161039f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103b034476124ae565b9050868061010001516103ef576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561042d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104508160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610487576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104c5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610502576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b897f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461058d576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105a28c600001518d60c001518d8d3361090e565b60c08d01526105b18c8a610763565b50479350505050818111156105d5576105d56000846105d085856124ae565b610a51565b505060009091555050505050565b8060000361061d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106765780341015610672576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156106e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070791906124c1565b905081811015610752576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61075e83333085610a82565b505050565b6107b27f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008460c00151610c9c565b60c082015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636fd3504e9061080260208501856124da565b60a086015160405160e085901b7fffffffff00000000000000000000000000000000000000000000000000000000168152600481019390935263ffffffff909116602483015273ffffffffffffffffffffffffffffffffffffffff90811660448301527f00000000000000000000000000000000000000000000000000000000000000001660648201526084016020604051808303816000875af11580156108ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d29190612500565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109029190612598565b60405180910390a15050565b60008280820361094a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856109596001856124ae565b818110610968576109686126ab565b905060200281019061097a91906126da565b61098b906080810190606001612718565b9050600061099882610ddf565b905073ffffffffffffffffffffffffffffffffffffffff82166109c2576109bf34826124ae565b90505b60006109ce8888610e98565b90506109da8888610fa4565b6109e78a89898985611011565b6000826109f385610ddf565b6109fd91906124ae565b905089811015610a43576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610749565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a785761075e8383836113c3565b61075e8282611545565b73ffffffffffffffffffffffffffffffffffffffff8416610acf576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b1c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb191906124c1565b9050610bbf8286868661166f565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610c2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5391906124c1565b610c5d91906124ae565b14610c94576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cbc57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d09576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da291906124c1565b101561075e57610db48383600061174b565b61075e83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61174b565b600073ffffffffffffffffffffffffffffffffffffffff821615610e90576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610e67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8b91906124c1565b610e92565b475b92915050565b60608160008167ffffffffffffffff811115610eb657610eb6612159565b604051908082528060200260200182016040528015610edf578160200160208202803683370190505b5090506000805b83811015610f9957868682818110610f0057610f006126ab565b9050602002810190610f1291906126da565b610f23906080810190606001612718565b9150610f2e82610ddf565b838281518110610f4057610f406126ab565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f915734838281518110610f7957610f796126ab565b60200260200101818151610f8d91906124ae565b9052505b600101610ee6565b509095945050505050565b60005b8181101561075e5736838383818110610fc257610fc26126ab565b9050602002810190610fd491906126da565b9050610fe660e0820160c08301612733565b1561100857611008610ffe6060830160408401612718565b82608001356105e3565b50600101610fa7565b8383838382600181146112de576000858561102d6001856124ae565b81811061103c5761103c6126ab565b905060200281019061104e91906126da565b61105f906080810190606001612718565b9050600089815b8181101561120a57368d8d83818110611081576110816126ab565b905060200281019061109391906126da565b90506110c26110a86060830160408401612718565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061112557506111256110db6040830160208401612718565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561113c575061113c6110db6020830183612718565b80156111c157506111c161115360a0830183612750565b611162916004916000916127bc565b61116b916127e6565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6111f7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112018f826118cd565b50600101611066565b505060005b61121a6001856124ae565b8110156112d6576000888883818110611235576112356126ab565b905060200281019061124791906126da565b611258906080810190606001612718565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146112cd5785828151811061129f5761129f6126ab565b60200260200101516112b082610ddf565b6112ba91906124ae565b925082156112cd576112cd818885610a51565b5060010161120f565b5050506113b7565b8760005b818110156113b457368b8b838181106112fd576112fd6126ab565b905060200281019061130f91906126da565b90506113246110a86060830160408401612718565b8061133d575061133d6110db6040830160208401612718565b801561135457506113546110db6020830183612718565b801561136b575061136b61115360a0830183612750565b6113a1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113ab8d826118cd565b506001016112e2565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611410576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661145d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156114ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ee91906124c1565b905080821115611534576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610749565b61153f848484611be3565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611592576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156115d5576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610749565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461162f576040519150601f19603f3d011682016040523d82523d6000602084013e611634565b606091505b505090508061075e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261153f9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c39565b8015806117eb57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156117c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117e991906124c1565b155b611877576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610749565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261075e9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016116c9565b6118e36118dd6020830183612718565b3b151590565b611919576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611959576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061196e6110a86060850160408601612718565b61197957600061197f565b82608001355b9050600061199b6119966060860160408701612718565b610ddf565b905060006119b26119966080870160608801612718565b9050826000036119e9576119e96119cf6060870160408801612718565b6119df6040880160208901612718565b8760800135610c9c565b8460800135821015611a34576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610749565b600080611a446020880188612718565b73ffffffffffffffffffffffffffffffffffffffff1685611a6860a08a018a612750565b604051611a7692919061282e565b60006040518083038185875af1925050503d8060008114611ab3576040519150601f19603f3d011682016040523d82523d6000602084013e611ab8565b606091505b509150915081611b03576000611acd82611d45565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610749919061283e565b6000611b1861199660808a0160608b01612718565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b4960208b018b612718565b611b5960608c0160408d01612718565b611b6960808d0160608e01612718565b8c60800135898711611b7b5786611b85565b611b858a886124ae565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261075e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016116c9565b6000611c9b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611dc39092919063ffffffff16565b80519091501561075e5780806020019051810190611cb99190612851565b61075e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610749565b6060604482511015611d8a57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611da66004808551611d9e91906124ae565b859190611dda565b905080806020019051810190611dbc919061286e565b9392505050565b6060611dd28484600085611ef4565b949350505050565b606081611de881601f6128e5565b1015611e20576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e2a82846128e5565b84511015611e64576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e835760405191506000825260208201604052611eeb565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611ebc578051835260209283019201611ea4565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611f86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610749565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611faf91906128f8565b60006040518083038185875af1925050503d8060008114611fec576040519150601f19603f3d011682016040523d82523d6000602084013e611ff1565b606091505b50915091506120028783838761200d565b979650505050505050565b606083156120a357825160000361209c5773ffffffffffffffffffffffffffffffffffffffff85163b61209c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610749565b5081611dd2565b611dd283838151156120b85781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610749919061283e565b6000602082840312156120fe57600080fd5b50919050565b6000806040838503121561211757600080fd5b823567ffffffffffffffff81111561212e57600080fd5b8301610140818603121561214157600080fd5b915061215084602085016120ec565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156121ac576121ac612159565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156121f9576121f9612159565b604052919050565b600067ffffffffffffffff82111561221b5761221b612159565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261225857600080fd5b813561226b61226682612201565b6121b2565b81815284602083860101111561228057600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146122c157600080fd5b919050565b80151581146122d457600080fd5b50565b80356122c1816122c6565b600061014082840312156122f557600080fd5b6122fd612188565b905081358152602082013567ffffffffffffffff8082111561231e57600080fd5b61232a85838601612247565b6020840152604084013591508082111561234357600080fd5b5061235084828501612247565b6040830152506123626060830161229d565b60608201526123736080830161229d565b608082015261238460a0830161229d565b60a082015260c082013560c082015260e082013560e08201526101006123ab8184016122d7565b908201526101206123bd8382016122d7565b9082015292915050565b600080600080606085870312156123dd57600080fd5b843567ffffffffffffffff808211156123f557600080fd5b612401888389016122e2565b9550602087013591508082111561241757600080fd5b818701915087601f83011261242b57600080fd5b81358181111561243a57600080fd5b8860208260051b850101111561244f57600080fd5b60208301955080945050505061246886604087016120ec565b905092959194509250565b6000610e9236836122e2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610e9257610e9261247f565b6000602082840312156124d357600080fd5b5051919050565b6000602082840312156124ec57600080fd5b813563ffffffff81168114611dbc57600080fd5b60006020828403121561251257600080fd5b815167ffffffffffffffff81168114611dbc57600080fd5b60005b8381101561254557818101518382015260200161252d565b50506000910152565b6000815180845261256681602086016020860161252a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526125c161016085018361254e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125fc838261254e565b9250506060850151612626608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126998187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261270e57600080fd5b9190910192915050565b60006020828403121561272a57600080fd5b611dbc8261229d565b60006020828403121561274557600080fd5b8135611dbc816122c6565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261278557600080fd5b83018035915067ffffffffffffffff8211156127a057600080fd5b6020019150368190038213156127b557600080fd5b9250929050565b600080858511156127cc57600080fd5b838611156127d957600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128265780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611dbc602083018461254e565b60006020828403121561286357600080fd5b8151611dbc816122c6565b60006020828403121561288057600080fd5b815167ffffffffffffffff81111561289757600080fd5b8201601f810184136128a857600080fd5b80516128b661226682612201565b8181528560208385010111156128cb57600080fd5b6128dc82602083016020860161252a565b95945050505050565b80820180821115610e9257610e9261247f565b6000825161270e81846020870161252a56fea264697066735822122009027e403588dde2111fc372757615b8d58b7dfb63ef890d7f20b2ee93280e5d64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ITokenMessenger";
            readonly name: "_tokenMessenger";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_usdc";
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
        readonly name: "InvalidSendingToken";
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
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
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
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
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
                readonly internalType: "uint32";
                readonly name: "dstDomain";
                readonly type: "uint32";
            }];
            readonly internalType: "struct CircleBridgeFacet.CircleBridgeData";
            readonly name: "_circleBridgeData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaCircleBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
                readonly internalType: "uint32";
                readonly name: "dstDomain";
                readonly type: "uint32";
            }];
            readonly internalType: "struct CircleBridgeFacet.CircleBridgeData";
            readonly name: "_circleBridgeData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaCircleBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): CircleBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CircleBridgeFacet;
}
export {};
