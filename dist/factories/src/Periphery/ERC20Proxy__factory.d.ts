import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Proxy, ERC20ProxyInterface } from "../../../src/Periphery/ERC20Proxy";
declare type ERC20ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20Proxy__factory extends ContractFactory {
    constructor(...args: ERC20ProxyConstructorParams);
    deploy(_owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20Proxy>;
    getDeployTransaction(_owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20Proxy;
    connect(signer: Signer): ERC20Proxy__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161082138038061082183398101604081905261002f91610167565b61003833610047565b61004181610097565b50610197565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b031633146100f65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b03811661015b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100ed565b61016481610047565b50565b60006020828403121561017957600080fd5b81516001600160a01b038116811461019057600080fd5b9392505050565b61067b806101a66000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063715018a611610050578063715018a6146100d75780638da5cb5b146100df578063f2fde38b1461010757600080fd5b806315dacbea14610077578063454bbd291461008c578063536fff6c1461009f575b600080fd5b61008a610085366004610576565b61011a565b005b61008a61009a3660046105cf565b61020b565b6100c26100ad366004610606565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b61008a61031b565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ce565b61008a610115366004610606565b6103a8565b3360009081526001602052604090205460ff16610163576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301528381166024830152604482018390528516906323b872dd906064016020604051808303816000875af11580156101e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102049190610628565b5050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610291576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660008181526001602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527f5fe3a0cb9aeae856eac34445ace9544f3e15c21fa6f9bffeca60d662a690ca1b910160405180910390a25050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461039c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610288565b6103a660006104d8565b565b60005473ffffffffffffffffffffffffffffffffffffffff163314610429576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610288565b73ffffffffffffffffffffffffffffffffffffffff81166104cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610288565b6104d5816104d8565b50565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461057157600080fd5b919050565b6000806000806080858703121561058c57600080fd5b6105958561054d565b93506105a36020860161054d565b92506105b16040860161054d565b9396929550929360600135925050565b80151581146104d557600080fd5b600080604083850312156105e257600080fd5b6105eb8361054d565b915060208301356105fb816105c1565b809150509250929050565b60006020828403121561061857600080fd5b6106218261054d565b9392505050565b60006020828403121561063a57600080fd5b8151610621816105c156fea2646970667358221220f4c584c7203bcd768702b0a6be22e9a287069b000632cb280f09b4250b2f23c064736f6c634300080d0033";
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
    })[];
    static createInterface(): ERC20ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Proxy;
}
export {};
