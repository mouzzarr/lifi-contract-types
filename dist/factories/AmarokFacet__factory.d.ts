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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002c0338038062002c03833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612b61620000a26000396000818161071e01528181610773015261087c0152612b616000f3fe6080604052600436106100295760003560e01c806383f319171461002e5780638dc9932d14610043575b600080fd5b61004161003c36600461246f565b610056565b005b61004161005136600461252e565b6102b3565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476125ca565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88610219816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610250576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61025a8a88610520565b6102748a600001518b60c001518b8b338c60400135610574565b60c08b01526102838a88610714565b5047915050818111156102a5576102a56000846102a085856125ca565b610995565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161032e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061033f34476125ca565b905061034a856125dd565b80610100015115610387576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610390866125dd565b60a081015173ffffffffffffffffffffffffffffffffffffffff166103e1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610465876125dd565b608081015173ffffffffffffffffffffffffffffffffffffffff166104b6576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c86104c2896125dd565b88610520565b6104e56104db60a08a0160808b016125e9565b8960c001356109cb565b6104f76104f1896125dd565b88610714565b504791505081811115610514576105146000846102a085856125ca565b50506000909155505050565b610120820151151560006105348380612604565b905011151514610570576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6000838082036105b0576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866105bf6001856125ca565b8181106105ce576105ce612670565b90506020028101906105e0919061269f565b6105f19060808101906060016125e9565b905060006105fe82610b3d565b905073ffffffffffffffffffffffffffffffffffffffff82166106285761062534826125ca565b90505b60006106348989610bf6565b90506106408989610d02565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261067b818b8b85610d6f565b60008361068786610b3d565b61069191906125ca565b905073ffffffffffffffffffffffffffffffffffffffff85166106bb576106b888826125ca565b90505b8b811015610704576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b61074782608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151611160565b61075760e0820160c083016126dd565b156108655773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166393f18ac56107a860c0840160a085016126fa565b6107b860408501602086016125e9565b85608001518560800160208101906107d091906125e9565b86604001358860c001516107e491906125ca565b60608801356107f38980612604565b8a604001356040518a63ffffffff1660e01b815260040161081c99989796959493929190612769565b6020604051808303816000875af115801561083b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085f91906127db565b5061095a565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016638aac16ba60408301356108b660c0850160a086016126fa565b6108c660408601602087016125e9565b86608001518660800160208101906108de91906125e9565b60c089015160608901356108f28a80612604565b6040518a63ffffffff1660e01b81526004016109159897969594939291906127f4565b60206040518083038185885af1158015610933573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061095891906127db565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161098991906128ca565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109c1576109bc8383836112a3565b505050565b6109bc8282611425565b80600003610a05576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a5a5780341015610570576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610ac7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aeb91906127db565b905081811015610b31576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106fb565b6109bc8333308561154f565b600073ffffffffffffffffffffffffffffffffffffffff821615610bee576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610bc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be991906127db565b610bf0565b475b92915050565b60608160008167ffffffffffffffff811115610c1457610c146121e9565b604051908082528060200260200182016040528015610c3d578160200160208202803683370190505b5090506000805b83811015610cf757868682818110610c5e57610c5e612670565b9050602002810190610c70919061269f565b610c819060808101906060016125e9565b9150610c8c82610b3d565b838281518110610c9e57610c9e612670565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cef5734838281518110610cd757610cd7612670565b60200260200101818151610ceb91906125ca565b9052505b600101610c44565b509095945050505050565b60005b818110156109bc5736838383818110610d2057610d20612670565b9050602002810190610d32919061269f565b9050610d4460e0820160c083016126dd565b15610d6657610d66610d5c60608301604084016125e9565b82608001356109cb565b50600101610d05565b6020840151604085015184918491849083600181146110795760008686610d976001856125ca565b818110610da657610da6612670565b9050602002810190610db8919061269f565b610dc99060808101906060016125e9565b9050600089815b81811015610f7657368d8d83818110610deb57610deb612670565b9050602002810190610dfd919061269f565b9050610e2c610e1260608301604084016125e9565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e8f5750610e8f610e4560408301602084016125e9565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ea65750610ea6610e4560208301836125e9565b8015610f2b5750610f2b610ebd60a0830183612604565b610ecc916004916000916129dd565b610ed591612a07565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f61576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610f6d9082611769565b50600101610dd0565b505060005b610f866001856125ca565b811015611071576000898983818110610fa157610fa1612670565b9050602002810190610fb3919061269f565b610fc49060808101906060016125e9565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110685786828151811061100b5761100b612670565b602002602001015161101c82610b3d565b61102691906125ca565b9250600073ffffffffffffffffffffffffffffffffffffffff82161561104d57600061104f565b865b9050831561106657611066828a6102a084886125ca565b505b50600101610f7b565b505050611154565b8760005b8181101561115157368b8b8381811061109857611098612670565b90506020028101906110aa919061269f565b90506110bf610e1260608301604084016125e9565b806110d857506110d8610e4560408301602084016125e9565b80156110ef57506110ef610e4560208301836125e9565b80156111065750611106610ebd60a0830183612604565b61113c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516111489082611769565b5060010161107d565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661118057505050565b73ffffffffffffffffffffffffffffffffffffffff82166111cd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611242573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126691906127db565b10156109bc5761127883836000611a7f565b6109bc83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a7f565b73ffffffffffffffffffffffffffffffffffffffff83166112f0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661133d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156113aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ce91906127db565b905080821115611414576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106fb565b61141f848484611c7f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611472576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114b5576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106fb565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461150f576040519150601f19603f3d011682016040523d82523d6000602084013e611514565b606091505b50509050806109bc576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661159c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115e9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561165a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167e91906127db565b905061168c82868686611cd5565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156116fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172091906127db565b61172a91906125ca565b14611761576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61177f61177960208301836125e9565b3b151590565b6117b5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036117f5576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061180a610e1260608501604086016125e9565b61181557600061181b565b82608001355b9050600061183761183260608601604087016125e9565b610b3d565b9050600061184e61183260808701606088016125e9565b9050826000036118855761188561186b60608701604088016125e9565b61187b60408801602089016125e9565b8760800135611160565b84608001358210156118d0576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106fb565b6000806118e060208801886125e9565b73ffffffffffffffffffffffffffffffffffffffff168561190460a08a018a612604565b604051611912929190612a4f565b60006040518083038185875af1925050503d806000811461194f576040519150601f19603f3d011682016040523d82523d6000602084013e611954565b606091505b50915091508161199f57600061196982611d33565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fb9190612a5f565b60006119b461183260808a0160608b016125e9565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119e560208b018b6125e9565b6119f560608c0160408d016125e9565b611a0560808d0160608e016125e9565b8c60800135898711611a175786611a21565b611a218a886125ca565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611b1f57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611af9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b1d91906127db565b155b611bab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016106fb565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109bc9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611db1565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109bc9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611bfd565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261141f9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611bfd565b6060604482511015611d7857505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611d946004808551611d8c91906125ca565b859190611ec0565b905080806020019051810190611daa9190612a72565b9392505050565b6000611e13826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611fda9092919063ffffffff16565b9050805160001480611e34575080806020019051810190611e349190612ae9565b6109bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106fb565b606081611ece81601f612b06565b1015611f06576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611f108284612b06565b84511015611f4a576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611f695760405191506000825260208201604052611fd1565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611fa2578051835260209283019201611f8a565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611fe98484600085611ff1565b949350505050565b606082471015612083576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106fb565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120ac9190612b19565b60006040518083038185875af1925050503d80600081146120e9576040519150601f19603f3d011682016040523d82523d6000602084013e6120ee565b606091505b50915091506120ff8783838761210a565b979650505050505050565b606083156121a05782516000036121995773ffffffffffffffffffffffffffffffffffffffff85163b612199576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106fb565b5081611fe9565b611fe983838151156121b55781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fb9190612a5f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561223c5761223c6121e9565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612289576122896121e9565b604052919050565b600067ffffffffffffffff8211156122ab576122ab6121e9565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126122e857600080fd5b81356122fb6122f682612291565b612242565b81815284602083860101111561231057600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461235157600080fd5b919050565b801515811461236457600080fd5b50565b803561235181612356565b6000610140828403121561238557600080fd5b61238d612218565b905081358152602082013567ffffffffffffffff808211156123ae57600080fd5b6123ba858386016122d7565b602084015260408401359150808211156123d357600080fd5b506123e0848285016122d7565b6040830152506123f26060830161232d565b60608201526124036080830161232d565b608082015261241460a0830161232d565b60a082015260c082013560c082015260e082013560e082015261010061243b818401612367565b9082015261012061244d838201612367565b9082015292915050565b600060e0828403121561246957600080fd5b50919050565b6000806000806060858703121561248557600080fd5b843567ffffffffffffffff8082111561249d57600080fd5b6124a988838901612372565b955060208701359150808211156124bf57600080fd5b818701915087601f8301126124d357600080fd5b8135818111156124e257600080fd5b8860208260051b85010111156124f757600080fd5b60208301955080945050604087013591508082111561251557600080fd5b5061252287828801612457565b91505092959194509250565b6000806040838503121561254157600080fd5b823567ffffffffffffffff8082111561255957600080fd5b90840190610140828703121561256e57600080fd5b9092506020840135908082111561258457600080fd5b5061259185828601612457565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610bf057610bf061259b565b6000610bf03683612372565b6000602082840312156125fb57600080fd5b611daa8261232d565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261263957600080fd5b83018035915067ffffffffffffffff82111561265457600080fd5b60200191503681900382131561266957600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126126d357600080fd5b9190910192915050565b6000602082840312156126ef57600080fd5b8135611daa81612356565b60006020828403121561270c57600080fd5b813563ffffffff81168114611daa57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061010063ffffffff8c16835273ffffffffffffffffffffffffffffffffffffffff808c166020850152808b166040850152808a166060850152508760808401528660a08401528060c08401526127c48184018688612720565b9150508260e08301529a9950505050505050505050565b6000602082840312156127ed57600080fd5b5051919050565b63ffffffff89168152600073ffffffffffffffffffffffffffffffffffffffff808a16602084015280891660408401528088166060840152508560808301528460a083015260e060c083015261284e60e083018486612720565b9a9950505050505050505050565b60005b8381101561287757818101518382015260200161285f565b50506000910152565b6000815180845261289881602086016020860161285c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526128f3610160850183612880565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261292e8382612880565b9250506060850151612958608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129cb8187018315159052565b90950151151593019290925250919050565b600080858511156129ed57600080fd5b838611156129fa57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612a475780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611daa6020830184612880565b600060208284031215612a8457600080fd5b815167ffffffffffffffff811115612a9b57600080fd5b8201601f81018413612aac57600080fd5b8051612aba6122f682612291565b818152856020838501011115612acf57600080fd5b612ae082602083016020860161285c565b95945050505050565b600060208284031215612afb57600080fd5b8151611daa81612356565b80820180821115610bf057610bf061259b565b600082516126d381846020870161285c56fea2646970667358221220f92dcbbe20b46be418d102761f15531a7e946fc6aadb626cdb77e8c2ba3c3b3264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_connextHandler";
            readonly type: "address";
            readonly internalType: "contract IConnextHandler";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAmarok";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_amarokData";
            readonly type: "tuple";
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly components: readonly [{
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "slippageTol";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "delegate";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "destChainDomainId";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAmarok";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_amarokData";
            readonly type: "tuple";
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly components: readonly [{
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "slippageTol";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "delegate";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "destChainDomainId";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): AmarokFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AmarokFacet;
}
export {};
