import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RelayerCelerIM, RelayerCelerIMInterface } from "../RelayerCelerIM";
declare type RelayerCelerIMConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RelayerCelerIM__factory extends ContractFactory {
    constructor(...args: RelayerCelerIMConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _cBridgeMessageBusAddress: PromiseOrValue<string>, _diamondAddress: PromiseOrValue<string>, _executorAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RelayerCelerIM>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _cBridgeMessageBusAddress: PromiseOrValue<string>, _diamondAddress: PromiseOrValue<string>, _executorAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RelayerCelerIM;
    connect(signer: Signer): RelayerCelerIM__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200394e3803806200394e8339810160408190526200003491620000a5565b600080546001600160a01b039586166001600160a01b031991821617909155600280549486169482169490941790935560038054928516928416929092179091556004805491909316911617905562000102565b80516001600160a01b0381168114620000a057600080fd5b919050565b60008060008060808587031215620000bc57600080fd5b620000c78562000088565b9350620000d76020860162000088565b9250620000e76040860162000088565b9150620000f76060860162000088565b905092959194509250565b61383c80620001126000396000f3fe6080604052600436106101125760003560e01c80637200b829116100a5578063c2aad68f11610074578063d9caed1211610059578063d9caed121461032f578063e30c39781461034f578063f2fde38b1461037c57600080fd5b8063c2aad68f146102ef578063c34c08e51461030257600080fd5b80637200b8291461025d57806375b4c005146102725780637cd2bffc146102af5780638da5cb5b146102c257600080fd5b806326eb8b06116100e157806326eb8b061461019e5780632b71cb25146101be5780633d62fd4d146102105780636a60c3b71461023057600080fd5b80630bcb49821461011e5780630d19e519146101475780631c3c0ea81461016957806323452b9c1461018957600080fd5b3661011957005b600080fd5b61013161012c366004612cc0565b61039c565b60405161013e9190612d63565b60405180910390f35b34801561015357600080fd5b50610167610162366004612da4565b610480565b005b34801561017557600080fd5b50610167610184366004612e29565b6109ed565b34801561019557600080fd5b50610167610aad565b3480156101aa57600080fd5b506101676101b9366004612e29565b610b77565b3480156101ca57600080fd5b506002546101eb9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161013e565b34801561021c57600080fd5b5061016761022b366004612e29565b610c37565b34801561023c57600080fd5b506003546101eb9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026957600080fd5b50610167610cf7565b6102856102803660046130c9565b610ddd565b6040805192835273ffffffffffffffffffffffffffffffffffffffff90911660208301520161013e565b6101316102bd3660046131f5565b611982565b3480156102ce57600080fd5b506000546101eb9073ffffffffffffffffffffffffffffffffffffffff1681565b6101676102fd36600461328c565b611a0f565b34801561030e57600080fd5b506004546101eb9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561033b57600080fd5b5061016761034a366004613308565b611afc565b34801561035b57600080fd5b506001546101eb9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561038857600080fd5b50610167610397366004612e29565b611c58565b60025460009073ffffffffffffffffffffffffffffffffffffffff1633146103f0576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806103ff85870187613349565b935050509150610410888289611db6565b6040805173ffffffffffffffffffffffffffffffffffffffff808b1682528316602082015290810188905242606082015282907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a26001925050505b95945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104d1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166382980dc46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610557573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057b91906134ee565b73ffffffffffffffffffffffffffffffffffffffff16141580156106485750600254604080517fdfa2dbaf000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808b1693169163dfa2dbaf9160048083019260209291908290030181865afa15801561060b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062f91906134ee565b73ffffffffffffffffffffffffffffffffffffffff1614155b80156106fd5750600254604080517f95b12c27000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808b169316916395b12c279160048083019260209291908290030181865afa1580156106c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e491906134ee565b73ffffffffffffffffffffffffffffffffffffffff1614155b80156107b25750600254604080517fd8257d17000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808b1693169163d8257d179160048083019260209291908290030181865afa158015610775573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079991906134ee565b73ffffffffffffffffffffffffffffffffffffffff1614155b80156108675750600254604080517fc66a9c5a000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808b1693169163c66a9c5a9160048083019260209291908290030181865afa15801561082a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084e91906134ee565b73ffffffffffffffffffffffffffffffffffffffff1614155b1561089e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8673ffffffffffffffffffffffffffffffffffffffff1686866040516108c592919061350b565b6000604051808303816000865af19150503d8060008114610902576040519150601f19603f3d011682016040523d82523d6000602084013e610907565b606091505b509091505080156109b257600073ffffffffffffffffffffffffffffffffffffffff8416156109365783610938565b335b9050610945858285611db6565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099856040516109a491815260200190565b60405180910390a3506109e4565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a3e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f3e3c5e6d5b512eaa5d5a80669846cfbaf8bde70fc6f7a3be9828cffc9ba5f1db90600090a250565b60005473ffffffffffffffffffffffffffffffffffffffff163314610afe576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610b4d576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610bc8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f2f45394278fc43c32e8e8b251c5aff1b3767fd8acf2d6d0ab39b3ac9fc0ab09b90600090a250565b60005473ffffffffffffffffffffffffffffffffffffffff163314610c88576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f141784b8d1b0a4dd321cfc3c665bcbb9db3deca1527ecc67be54f6b6c68d6ca990600090a250565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610d49576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600354600090819073ffffffffffffffffffffffffffffffffffffffff163314610e33576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018360a001516006811115610e4b57610e4b612d34565b036110de57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166382980dc46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ebd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee191906134ee565b9050610f05846080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610fd35760c084015160a085015160e0860151602086015186516040517f3f2e5fc300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff94851660048201526024810186905267ffffffffffffffff938416604482015292909116606483015263ffffffff16608482015290831691633f2e5fc39160a4016000604051808303818588803b158015610fb557600080fd5b505af1158015610fc9573d6000803e3d6000fd5b50505050506110b6565b610fe68460800151828660c00151611dec565b60a0840151608085015160c086015160e0870151602087015187516040517fa5977fbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff96871660048201529486166024860152604485019390935267ffffffffffffffff918216606485015216608483015263ffffffff1660a48201529082169063a5977fbb9060c401600060405180830381600087803b15801561109d57600080fd5b505af11580156110b1573d6000803e3d6000fd5b505050505b6110d78460a0015185608001518660c001518760e001518760200151611f37565b915061197b565b60028360a0015160068111156110f6576110f6612d34565b0361128457600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d8257d176040518163ffffffff1660e01b8152600401602060405180830381865afa158015611168573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061118c91906134ee565b90506111a18460800151828660c00151611dec565b608084015160c085015160e086015160a087015160208701516040517f2346362400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945267ffffffffffffffff928316604485015290841660648401521660848201529082169063234636249060a401600060405180830381600087803b15801561124b57600080fd5b505af115801561125f573d6000803e3d6000fd5b505050506110d78460a0015185608001518660c001518760e001518760200151611fea565b60038360a00151600681111561129c5761129c612d34565b0361141857600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dfa2dbaf6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561130e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061133291906134ee565b90506113478460800151828660c00151611dec565b608084015160c085015160a086015160208601516040517fde790c7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff94851660048201526024810193909352908316604483015267ffffffffffffffff1660648201529082169063de790c7e90608401600060405180830381600087803b1580156113e457600080fd5b505af11580156113f8573d6000803e3d6000fd5b505050506110d78460a0015185608001518660c001518660200151612083565b60048360a00151600681111561143057611430612d34565b0361169957600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c66a9c5a6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c691906134ee565b90506114ea846080015173ffffffffffffffffffffffffffffffffffffffff161590565b156115b25760c084015160e085015160a086015160208601516040517ea95fd70000000000000000000000000000000000000000000000000000000081526004810185905267ffffffffffffffff938416602482015273ffffffffffffffffffffffffffffffffffffffff92831660448201529216606483015283169162a95fd79160840160206040518083038185885af115801561158d573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906110d7919061351b565b6115c58460800151828660c00151611dec565b608084015160c085015160e086015160a087015160208701516040517f2346362400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945267ffffffffffffffff928316604485015290841660648401521660848201529082169063234636249060a4015b6020604051808303816000875af1158015611675573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d7919061351b565b60058360a0015160068111156116b1576116b1612d34565b036117f157600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395b12c276040518163ffffffff1660e01b8152600401602060405180830381865afa158015611723573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174791906134ee565b905061175c8460800151828660c00151611dec565b608084015160c085015160e086015160a087015160208701516040517fa002930100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945267ffffffffffffffff928316604485015290841660648401521660848201529082169063a00293019060a401611656565b60068360a00151600681111561180957611809612d34565b0361194957600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395b12c276040518163ffffffff1660e01b8152600401602060405180830381865afa15801561187b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189f91906134ee565b90506118b48460800151828660c00151611dec565b608084015160c085015160e086015160a087015160208701516040517f9e422c3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945267ffffffffffffffff9283166044850152908416606484015216608482015290821690639e422c339060a401611656565b6040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9250929050565b60025460009073ffffffffffffffffffffffffffffffffffffffff1633146119d6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008080806119e787890189613349565b93509350935093506119fd84848d858e8661212b565b5060019b9a5050505050505050505050565b60035473ffffffffffffffffffffffffffffffffffffffff163314611a60576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002546040517f4289fbb300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690634289fbb3903490611ac2908a908a908a908a908a908a90600401613534565b6000604051808303818588803b158015611adb57600080fd5b505af1158015611aef573d6000803e3d6000fd5b5050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611b4d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316611bcb5760405173ffffffffffffffffffffffffffffffffffffffff8316908290600081818185875af1925050503d8060008114611bbe576040519150601f19603f3d011682016040523d82523d6000602084013e611bc3565b606091505b505050611bec565b611bec73ffffffffffffffffffffffffffffffffffffffff8416838361241a565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d127209983604051611c4b91815260200190565b60405180910390a3505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611ca9576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611cf6576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611d45576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff831615611de257611ddd8383836124ee565b505050565b611ddd8282612622565b73ffffffffffffffffffffffffffffffffffffffff8316611e0c57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611e59576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611ecf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ef3919061351b565b905081811015611f3157611f318484611f2c847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6135e9565b61274c565b50505050565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b8216602084015287811b8216603484015286901b166048820152605c81018490527fffffffffffffffff00000000000000000000000000000000000000000000000060c084811b8216607c84015283811b8216608484015246901b16608c8201526000906094015b60405160208183030381529060405280519060200120905095945050505050565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b8216602084015286811b82166034840152604883018690527fffffffffffffffff00000000000000000000000000000000000000000000000060c086811b821660688601529189901b909216607084015283811b8216608484015246901b16608c820152600090609401611fc9565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b8216602084015285811b821660348401526048830185905286901b1660688201527fffffffffffffffff00000000000000000000000000000000000000000000000060c083811b8216607c84015246901b166084820152600090608c016040516020818303038152906040528051906020012090505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff851661227c57600480546040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911691634f91bc2b9186916121a5918c918c918c918c9101613670565b6000604051808303818588803b1580156121be57600080fd5b505af1935050505080156121d0575060015b6122745760008273ffffffffffffffffffffffffffffffffffffffff168460405160006040518083038185875af1925050503d806000811461222e576040519150601f19603f3d011682016040523d82523d6000602084013e612233565b606091505b505090508061226e576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506123ac565b5060016123ac565b60045485906122a69073ffffffffffffffffffffffffffffffffffffffff8084169116600061284a565b6004546122cd9073ffffffffffffffffffffffffffffffffffffffff83811691168661274c565b600480546040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911691634f91bc2b91612328918c918c918c918c9101613670565b600060405180830381600087803b15801561234257600080fd5b505af1925050508015612353575060015b61237d5761237873ffffffffffffffffffffffffffffffffffffffff8216848661241a565b612382565b600191505b6004546123aa9073ffffffffffffffffffffffffffffffffffffffff8381169116600061284a565b505b806109e4576040805173ffffffffffffffffffffffffffffffffffffffff80881682528416602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a250505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611ddd9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526129cc565b73ffffffffffffffffffffffffffffffffffffffff831661253b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156125a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125cc919061351b565b905080821115612617576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b611f3184848461241a565b73ffffffffffffffffffffffffffffffffffffffff821661266f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156126b2576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161260e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461270c576040519150601f19603f3d011682016040523d82523d6000602084013e612711565b606091505b5050905080611ddd576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156127c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127e7919061351b565b6127f191906137a7565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150611f319085907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161246c565b8015806128ea57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156128c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128e8919061351b565b155b612976576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161260e565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611ddd9084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161246c565b6000612a2e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16612ad89092919063ffffffff16565b805190915015611ddd5780806020019051810190612a4c91906137ba565b611ddd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161260e565b60606121238484600085856000808673ffffffffffffffffffffffffffffffffffffffff168587604051612b0c91906137d7565b60006040518083038185875af1925050503d8060008114612b49576040519150601f19603f3d011682016040523d82523d6000602084013e612b4e565b606091505b5091509150612b5f87838387612b6a565b979650505050505050565b60608315612c00578251600003612bf95773ffffffffffffffffffffffffffffffffffffffff85163b612bf9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161260e565b5081612123565b6121238383815115612c155781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161260e91906137f3565b73ffffffffffffffffffffffffffffffffffffffff81168114612c6b57600080fd5b50565b8035612c7981612c49565b919050565b60008083601f840112612c9057600080fd5b50813567ffffffffffffffff811115612ca857600080fd5b60208301915083602082850101111561197b57600080fd5b600080600080600060808688031215612cd857600080fd5b8535612ce381612c49565b945060208601359350604086013567ffffffffffffffff811115612d0657600080fd5b612d1288828901612c7e565b9094509250506060860135612d2681612c49565b809150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6020810160038310612d9e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60008060008060008060a08789031215612dbd57600080fd5b8635612dc881612c49565b9550602087013567ffffffffffffffff811115612de457600080fd5b612df089828a01612c7e565b9096509450506040870135612e0481612c49565b92506060870135612e1481612c49565b80925050608087013590509295509295509295565b600060208284031215612e3b57600080fd5b8135612e4681612c49565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715612e9f57612e9f612e4d565b60405290565b604051610140810167ffffffffffffffff81118282101715612e9f57612e9f612e4d565b60405160e0810167ffffffffffffffff81118282101715612e9f57612e9f612e4d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612f3357612f33612e4d565b604052919050565b600082601f830112612f4c57600080fd5b813567ffffffffffffffff811115612f6657612f66612e4d565b612f9760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612eec565b818152846020838601011115612fac57600080fd5b816020850160208301376000918101602001919091529392505050565b8015158114612c6b57600080fd5b8035612c7981612fc9565b803563ffffffff81168114612c7957600080fd5b803567ffffffffffffffff81168114612c7957600080fd5b803560078110612c7957600080fd5b600060c0828403121561302f57600080fd5b613037612e7c565b905061304282612fe2565b815261305060208301612ff6565b6020820152604082013567ffffffffffffffff8082111561307057600080fd5b61307c85838601612f3b565b6040840152606084013591508082111561309557600080fd5b506130a284828501612f3b565b606083015250608082013560808201526130be60a0830161300e565b60a082015292915050565b600080604083850312156130dc57600080fd5b823567ffffffffffffffff808211156130f457600080fd5b90840190610140828703121561310957600080fd5b613111612ea5565b8235815260208301358281111561312757600080fd5b61313388828601612f3b565b60208301525060408301358281111561314b57600080fd5b61315788828601612f3b565b60408301525061316960608401612c6e565b606082015261317a60808401612c6e565b608082015261318b60a08401612c6e565b60a082015260c083013560c082015260e083013560e08201526101006131b2818501612fd7565b908201526101206131c4848201612fd7565b90820152935060208501359150808211156131de57600080fd5b506131eb8582860161301d565b9150509250929050565b600080600080600080600060c0888a03121561321057600080fd5b873561321b81612c49565b9650602088013561322b81612c49565b95506040880135945061324060608901612ff6565b9350608088013567ffffffffffffffff81111561325c57600080fd5b6132688a828b01612c7e565b90945092505060a088013561327c81612c49565b8091505092959891949750929550565b60008060008060008060a087890312156132a557600080fd5b86356132b081612c49565b95506020870135945060408701356132c781612c49565b935060608701359250608087013567ffffffffffffffff8111156132ea57600080fd5b6132f689828a01612c7e565b979a9699509497509295939492505050565b60008060006060848603121561331d57600080fd5b833561332881612c49565b9250602084013561333881612c49565b929592945050506040919091013590565b6000806000806080858703121561335f57600080fd5b84359350602085013567ffffffffffffffff8082111561337e57600080fd5b818701915087601f83011261339257600080fd5b8135818111156133a4576133a4612e4d565b6133b360208260051b01612eec565b8082825260208201915060208360051b86010192508a8311156133d557600080fd5b602085015b838110156134c05784813511156133f057600080fd5b8035860160e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828f0301121561342657600080fd5b61342e612ec9565b61343a60208301612c6e565b815261344860408301612c6e565b602082015261345960608301612c6e565b604082015261346a60808301612c6e565b606082015260a0820135608082015260c08201358781111561348b57600080fd5b61349a8f602083860101612f3b565b60a0830152506134ac60e08301612fd7565b60c0820152845250602092830192016133da565b5080975050505050506134d560408601612c6e565b91506134e360608601612c6e565b905092959194509250565b60006020828403121561350057600080fd5b8151612e4681612c49565b8183823760009101908152919050565b60006020828403121561352d57600080fd5b5051919050565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015280871660408401525084606083015260a060808301528260a0830152828460c0840137600060c0848401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501168301019050979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156135fc576135fc6135ba565b92915050565b60005b8381101561361d578181015183820152602001613605565b50506000910152565b6000815180845261363e816020860160208601613602565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b8381101561375b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e08986018190529061372f82870182613626565b91505060c08083015192506137478187018415159052565b50958701959350509085019060010161369e565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550613786945050505050565b73ffffffffffffffffffffffffffffffffffffffff83166060830152610477565b808201808211156135fc576135fc6135ba565b6000602082840312156137cc57600080fd5b8151612e4681612fc9565b600082516137e9818460208701613602565b9190910192915050565b602081526000612e46602083018461362656fea2646970667358221220a18fc1fc6001ebd5d2083f3d70219685a79c10f1cfbf13ebd8228780daac075d64736f6c63430008110033";
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
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): RelayerCelerIMInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RelayerCelerIM;
}
export {};
