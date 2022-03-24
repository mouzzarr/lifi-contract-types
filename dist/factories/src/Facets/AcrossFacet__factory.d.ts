import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AcrossFacet, AcrossFacetInterface } from "../../../src/Facets/AcrossFacet";
declare type AcrossFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacet__factory extends ContractFactory {
    constructor(...args: AcrossFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AcrossFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacet;
    connect(signer: Signer): AcrossFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611629806100206000396000f3fe60806040526004361061004a5760003560e01c80632034339f1461004f578063277635e71461007157806358db067e1461009157806385f7c181146100b1578063a28decf4146100c4575b600080fd5b34801561005b57600080fd5b5061006f61006a3660046110de565b6100d7565b005b34801561007d57600080fd5b5061006f61008c3660046110f9565b61010e565b34801561009d57600080fd5b5061006f6100ac3660046110de565b610153565b61006f6100bf3660046111c5565b61018d565b61006f6100d2366004611272565b610345565b6000805160206115d48339815191526100ee61046c565b80546001600160a01b0319166001600160a01b0392909216919091179055565b6000805160206115d483398151915261012561046c565b80546001600160a01b039384166001600160a01b031991821617825560019091018054929093169116179055565b6000805160206115d483398151915261016a61046c565b60010180546001600160a01b0319166001600160a01b0392909216919091179055565b600061019c60208301836110de565b6001600160a01b0316146102645760006101c16101bc60208401846110de565b6104f5565b905060005b60ff811684111561021557855161020390868660ff85168181106101ec576101ec6115a7565b90506020028101906101fe919061147d565b61058a565b8061020d81611571565b9150506101c6565b5060208201803590829061022d906101bc90866110de565b610237919061152e565b101561025e5760405162461bcd60e51b815260040161025590611403565b60405180910390fd5b506102d0565b4760005b60ff81168411156102a057855161028e90868660ff85168181106101ec576101ec6115a7565b8061029881611571565b915050610268565b5060208201356102b0824761152e565b10156102ce5760405162461bcd60e51b815260040161025590611403565b505b6102d981610778565b83600001517f3b254a352757de129783dc1fcdea65d20e49fc091f974551e1dcb4afbf1fdc4685602001518660400151876060015188608001518960a001518a60e001518b60c00151426040516103379897969594939291906113ab565b60405180910390a250505050565b600061035460208301836110de565b6001600160a01b0316146103d65760006103746101bc60208401846110de565b905061039261038660208401846110de565b3330856020013561096f565b6020820180359082906103a9906101bc90866110de565b6103b3919061152e565b146103d05760405162461bcd60e51b815260040161025590611403565b506103f9565b806020013534146103f95760405162461bcd60e51b815260040161025590611403565b61040281610778565b81600001517f3b254a352757de129783dc1fcdea65d20e49fc091f974551e1dcb4afbf1fdc4683602001518460400151856060015186608001518760a001518860e001518960c00151426040516104609897969594939291906113ab565b60405180910390a25050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146104f35760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b6064820152608401610255565b565b60006001600160a01b03821615610582576040516370a0823160e01b81523060048201526001600160a01b038316906370a082319060240160206040518083038186803b15801561054557600080fd5b505afa158015610559573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057d91906112b8565b610584565b475b92915050565b608081018035906000906105a5906101bc90606086016110de565b905060006105b960608501604086016110de565b90506001600160a01b038116151580156105da5750826105d8826104f5565b105b156105eb576105eb8133308661096f565b6001600160a01b03811615610614576106148161060e60408701602088016110de565b85610981565b60008061062460208701876110de565b6001600160a01b03163461063b60a089018961142f565b604051610649929190611327565b60006040518083038185875af1925050503d8060008114610686576040519150601f19603f3d011682016040523d82523d6000602084013e61068b565b606091505b5091509150816106bc5760006106a082610a40565b90508060405162461bcd60e51b81526004016102559190611398565b836106d06101bc6080890160608a016110de565b6106da919061152e565b93507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388761070b60208901896110de565b61071b60608a0160408b016110de565b61072b60808b0160608c016110de565b604080519485526001600160a01b0393841660208601529183168483015290911660608301526080820188905260a082018790524260c0830152519081900360e00190a150505050505050565b6000805160206115d4833981519152600061079660208401846110de565b6001600160a01b03161415806107ce575060018101546001600160a01b03166107c260208401846110de565b6001600160a01b031614155b156108b1576107f86107e360208401846110de565b82546001600160a01b03166020850135610981565b80546001600160a01b031663c2d9dca961081860608501604086016110de565b61082560208601866110de565b602086013561083a60808801606089016112d1565b61084a60a0890160808a016112d1565b61085a60c08a0160a08b016112d1565b6040518763ffffffff1660e01b815260040161087b96959493929190611353565b600060405180830381600087803b15801561089557600080fd5b505af11580156108a9573d6000803e3d6000fd5b505050505050565b80546001600160a01b031663c2d9dca960208401356108d660608601604087016110de565b6108e360208701876110de565b60208701356108f86080890160608a016112d1565b61090860a08a0160808b016112d1565b61091860c08b0160a08c016112d1565b6040518863ffffffff1660e01b815260040161093996959493929190611353565b6000604051808303818588803b15801561095257600080fd5b505af1158015610966573d6000803e3d6000fd5b50505050505050565b61097b84848484610abe565b50505050565b6001600160a01b03831661099457505050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e9060440160206040518083038186803b1580156109df57600080fd5b505afa1580156109f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1791906112b8565b90508181101561097b578015610a3357610a3384846000610b29565b61097b8484600019610b29565b6060604482511015610a8557505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000610aa16004808551610a99919061152e565b859190610c52565b905080806020019051810190610ab7919061114e565b9392505050565b6040516001600160a01b038085166024830152831660448201526064810182905261097b9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610d5f565b801580610bb25750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015610b7857600080fd5b505afa158015610b8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb091906112b8565b155b610c1d5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610255565b6040516001600160a01b038316602482015260448101829052610c4d90849063095ea7b360e01b90606401610af2565b505050565b606081610c6081601f611516565b1015610c9f5760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610255565b610ca98284611516565b84511015610ced5760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610255565b606082158015610d0c5760405191506000825260208201604052610d56565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610d45578051835260209283019201610d2d565b5050858452601f01601f1916604052505b50949350505050565b6000610db4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e319092919063ffffffff16565b805190915015610c4d5780806020019051810190610dd2919061112c565b610c4d5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610255565b6060610e408484600085610e48565b949350505050565b606082471015610ea95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610255565b843b610ef75760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610255565b600080866001600160a01b03168587604051610f139190611337565b60006040518083038185875af1925050503d8060008114610f50576040519150601f19603f3d011682016040523d82523d6000602084013e610f55565b606091505b5091509150610f65828286610f70565b979650505050505050565b60608315610f7f575081610ab7565b825115610f8f5782518084602001fd5b8160405162461bcd60e51b81526004016102559190611398565b80356001600160a01b0381168114610fc057600080fd5b919050565b600082601f830112610fd657600080fd5b8135610fe9610fe4826114ee565b6114bd565b818152846020838601011115610ffe57600080fd5b816020850160208301376000918101602001919091529392505050565b600060c0828403121561102d57600080fd5b50919050565b6000610100828403121561104657600080fd5b61104e611493565b905081358152602082013567ffffffffffffffff81111561106e57600080fd5b61107a84828501610fc5565b60208301525061108c60408301610fa9565b604082015261109d60608301610fa9565b60608201526110ae60808301610fa9565b60808201526110bf60a08301610fa9565b60a082015260c082013560c082015260e082013560e082015292915050565b6000602082840312156110f057600080fd5b610ab782610fa9565b6000806040838503121561110c57600080fd5b61111583610fa9565b915061112360208401610fa9565b90509250929050565b60006020828403121561113e57600080fd5b81518015158114610ab757600080fd5b60006020828403121561116057600080fd5b815167ffffffffffffffff81111561117757600080fd5b8201601f8101841361118857600080fd5b8051611196610fe4826114ee565b8181528560208385010111156111ab57600080fd5b6111bc826020830160208601611545565b95945050505050565b60008060008061010085870312156111dc57600080fd5b843567ffffffffffffffff808211156111f457600080fd5b61120088838901611033565b9550602087013591508082111561121657600080fd5b818701915087601f83011261122a57600080fd5b81358181111561123957600080fd5b8860208260051b850101111561124e57600080fd5b602083019550809450505050611267866040870161101b565b905092959194509250565b60008060e0838503121561128557600080fd5b823567ffffffffffffffff81111561129c57600080fd5b6112a885828601611033565b925050611123846020850161101b565b6000602082840312156112ca57600080fd5b5051919050565b6000602082840312156112e357600080fd5b813567ffffffffffffffff81168114610ab757600080fd5b60008151808452611313816020860160208601611545565b601f01601f19169290920160200192915050565b8183823760009101908152919050565b60008251611349818460208701611545565b9190910192915050565b6001600160a01b039687168152949095166020850152604084019290925267ffffffffffffffff9081166060840152908116608083015290911660a082015260c00190565b602081526000610ab760208301846112fb565b60006101008083526113bf8184018c6112fb565b6001600160a01b039a8b166020850152988a1660408401525050948716606086015292909516608084015260a083015260c082019390935260e00191909152919050565b60208082526012908201527111549497d253959053125117d05353d5539560721b604082015260600190565b6000808335601e1984360301811261144657600080fd5b83018035915067ffffffffffffffff82111561146157600080fd5b60200191503681900382131561147657600080fd5b9250929050565b6000823560be1983360301811261134957600080fd5b604051610100810167ffffffffffffffff811182821017156114b7576114b76115bd565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156114e6576114e66115bd565b604052919050565b600067ffffffffffffffff821115611508576115086115bd565b50601f01601f191660200190565b6000821982111561152957611529611591565b500190565b60008282101561154057611540611591565b500390565b60005b83811015611560578181015183820152602001611548565b8381111561097b5750506000910152565b600060ff821660ff81141561158857611588611591565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfec2f0b34693bd32d5a7baf53803100a174650293fd2f4c4bad2415c582c046d46a2646970667358221220dd82fb7fe32b015fa5c8bd3fd2aab0181ebb0222f24890fdef8af7e0320c71e564736f6c63430008070033";
    static readonly abi: ({
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
    static createInterface(): AcrossFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacet;
}
export {};
