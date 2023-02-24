import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AxelarFacet, AxelarFacetInterface } from "../AxelarFacet";
declare type AxelarFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AxelarFacet__factory extends ContractFactory {
    constructor(...args: AxelarFacetConstructorParams);
    deploy(_gateway: PromiseOrValue<string>, _gasService: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AxelarFacet>;
    getDeployTransaction(_gateway: PromiseOrValue<string>, _gasService: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AxelarFacet;
    connect(signer: Signer): AxelarFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b506040516200206d3803806200206d833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051611f87620000e6600039600081816108d20152610e500152600081816102cc015281816103a301528181610570015261099e0152611f876000f3fe6080604052600436106100345760003560e01c806313045b0f14610039578063733499c91461004e578063aeb116de1461006e575b600080fd5b61004c6100473660046116c7565b610081565b005b34801561005a57600080fd5b5061004c610069366004611733565b61065c565b61004c61007c3660046117af565b6106e0565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815573ffffffffffffffffffffffffffffffffffffffff821661014d576040517fb897c40100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661019a576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b826000036101d4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610221573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526102679190810190611837565b6040517f935b13f60000000000000000000000000000000000000000000000000000000081529091507fc7ba6016a551f7f07fd4821271b8773baf38cf0831912878e266bac50e0e4a9c9060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063935b13f690610301908690600401611941565b602060405180830381865afa15801561031e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103429190611954565b905073ffffffffffffffffffffffffffffffffffffffff8116610391576040517f3dd1b30500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61039d81333089610a85565b6103c8817f000000000000000000000000000000000000000000000000000000000000000088610c9f565b5060006103db6060890160408a01611971565b856103e960608b018b61198e565b6040516020016103fc94939291906119fa565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181528935600090815260208590529081208054929350909161044990611a4a565b80601f016020809104026020016040519081016040528092919081815260200182805461047590611a4a565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b505050505090508051600003610504576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061051e61051960408c0160208d01611971565b610dea565b90503415610533576105338282878b87610e13565b6040517fb541708400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063b5417084906105ad908590859088908b908f90600401611a97565b600060405180830381600087803b1580156105c757600080fd5b505af11580156105db573d6000803e3d6000fd5b506105f09250505060608b0160408c01611971565b73ffffffffffffffffffffffffffffffffffffffff168a357f996a41bee9ee9168b98274120b734982197c51aedd142b1fb9e5fa103f25459f61063660608e018e61198e565b604051610644929190611b40565b60405180910390a35050600090935550505050505050565b610664610ecc565b60008381527fc7ba6016a551f7f07fd4821271b8773baf38cf0831912878e266bac50e0e4a9c6020819052604090912061069f838583611b9a565b50837faee789c00c07f41c3444062965abd9376826f41fdbb884ac42b5d4bd0b26d2d384846040516106d2929190611b40565b60405180910390a250505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161075b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181557fc7ba6016a551f7f07fd4821271b8773baf38cf0831912878e266bac50e0e4a9c60006107926060850160408601611971565b61079f606086018661198e565b6040516020016107b193929190611cb5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152853560009081526020859052908120805492935090916107fe90611a4a565b80601f016020809104026020016040519081016040528092919081815260200182805461082a90611a4a565b80156108775780601f1061084c57610100808354040283529160200191610877565b820191906000526020600020905b81548152906001019060200180831161085a57829003601f168201915b5050505050905080516000036108b9576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006108ce6105196040880160208901611971565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630c93e3bb3430858588336040518763ffffffff1660e01b8152600401610932959493929190611cf4565b6000604051808303818588803b15801561094b57600080fd5b505af115801561095f573d6000803e3d6000fd5b50506040517f1c92115f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169350631c92115f92506109da9150859085908890600401611d60565b600060405180830381600087803b1580156109f457600080fd5b505af1158015610a08573d6000803e3d6000fd5b50610a1d925050506060870160408801611971565b73ffffffffffffffffffffffffffffffffffffffff1686357f996a41bee9ee9168b98274120b734982197c51aedd142b1fb9e5fa103f25459f610a6360608a018a61198e565b604051610a71929190611b40565b60405180910390a350506000909255505050565b73ffffffffffffffffffffffffffffffffffffffff8416610ad2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b1f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb49190611da3565b9050610bc282868686610f41565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610c32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c569190611da3565b610c609190611deb565b14610c97576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cbf57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d0c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610d82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da69190611da3565b905081811015610de457610de48484610ddf847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611deb565b61101d565b50505050565b6060610e0d73ffffffffffffffffffffffffffffffffffffffff8316601461111b565b92915050565b6040517fc62c200200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063c62c2002903490610e939030908a908a9088908b908b903390600401611dfe565b6000604051808303818588803b158015610eac57600080fd5b505af1158015610ec0573d6000803e3d6000fd5b50505050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610f3f576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610de49085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261136a565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611094573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b89190611da3565b6110c29190611e85565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610de49085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610f9b565b6060600061112a836002611e98565b611135906002611e85565b67ffffffffffffffff81111561114d5761114d6117e4565b6040519080825280601f01601f191660200182016040528015611177576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106111ae576111ae611eaf565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061121157611211611eaf565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600061124d846002611e98565b611258906001611e85565b90505b60018111156112f5577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061129957611299611eaf565b1a60f81b8282815181106112af576112af611eaf565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c936112ee81611ede565b905061125b565b508315611363576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064015b60405180910390fd5b9392505050565b60006113cc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661147b9092919063ffffffff16565b80519091501561147657808060200190518101906113ea9190611f13565b611476576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161135a565b505050565b606061148a8484600085611492565b949350505050565b606082471015611524576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161135a565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161154d9190611f35565b60006040518083038185875af1925050503d806000811461158a576040519150601f19603f3d011682016040523d82523d6000602084013e61158f565b606091505b50915091506115a0878383876115ab565b979650505050505050565b6060831561164157825160000361163a5773ffffffffffffffffffffffffffffffffffffffff85163b61163a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161135a565b508161148a565b61148a83838151156116565781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135a9190611941565b60006080828403121561169c57600080fd5b50919050565b73ffffffffffffffffffffffffffffffffffffffff811681146116c457600080fd5b50565b600080600080608085870312156116dd57600080fd5b843567ffffffffffffffff8111156116f457600080fd5b6117008782880161168a565b9450506020850135611711816116a2565b9250604085013591506060850135611728816116a2565b939692955090935050565b60008060006040848603121561174857600080fd5b83359250602084013567ffffffffffffffff8082111561176757600080fd5b818601915086601f83011261177b57600080fd5b81358181111561178a57600080fd5b87602082850101111561179c57600080fd5b6020830194508093505050509250925092565b6000602082840312156117c157600080fd5b813567ffffffffffffffff8111156117d857600080fd5b61148a8482850161168a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60005b8381101561182e578181015183820152602001611816565b50506000910152565b60006020828403121561184957600080fd5b815167ffffffffffffffff8082111561186157600080fd5b818401915084601f83011261187557600080fd5b815181811115611887576118876117e4565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156118cd576118cd6117e4565b816040528281528760208487010111156118e657600080fd5b6115a0836020830160208801611813565b6000815180845261190f816020860160208601611813565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061136360208301846118f7565b60006020828403121561196657600080fd5b8151611363816116a2565b60006020828403121561198357600080fd5b8135611363816116a2565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126119c357600080fd5b83018035915067ffffffffffffffff8211156119de57600080fd5b6020019150368190038213156119f357600080fd5b9250929050565b60007fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808760601b168352808660601b166014840152508284602884013750600091016028019081529392505050565b600181811c90821680611a5e57607f821691505b60208210810361169c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60a081526000611aaa60a08301886118f7565b8281036020840152611abc81886118f7565b90508281036040840152611ad081876118f7565b90508281036060840152611ae481866118f7565b9150508260808301529695505050505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208152600061148a602083018486611af7565b601f82111561147657600081815260208120601f850160051c81016020861015611b7b5750805b601f850160051c820191505b81811015610c9757828155600101611b87565b67ffffffffffffffff831115611bb257611bb26117e4565b611bc683611bc08354611a4a565b83611b54565b6000601f841160018114611c185760008515611be25750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355611cae565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b82811015611c675786850135825560209485019460019092019101611c47565b5086821015611ca2577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008460601b168152818360148301376000910160140190815292915050565b600073ffffffffffffffffffffffffffffffffffffffff808816835260a06020840152611d2460a08401886118f7565b8381036040850152611d3681886118f7565b90508381036060850152611d4a81876118f7565b9250508084166080840152509695505050505050565b606081526000611d7360608301866118f7565b8281036020840152611d8581866118f7565b90508281036040840152611d9981856118f7565b9695505050505050565b600060208284031215611db557600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610e0d57610e0d611dbc565b600073ffffffffffffffffffffffffffffffffffffffff808a16835260e06020840152611e2e60e084018a6118f7565b8381036040850152611e40818a6118f7565b90508381036060850152611e5481896118f7565b90508381036080850152611e6881886118f7565b60a0850196909652509290921660c0909101525095945050505050565b80820180821115610e0d57610e0d611dbc565b8082028115828204841417610e0d57610e0d611dbc565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081611eed57611eed611dbc565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b600060208284031215611f2557600080fd5b8151801515811461136357600080fd5b60008251611f47818460208701611813565b919091019291505056fea264697066735822122094debd00adea345fac0a37bea4d0e9ebf01723bc46c7ec43d5a2779d72454feb64736f6c63430008110033";
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
        inputs: never[];
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
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): AxelarFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AxelarFacet;
}
export {};
