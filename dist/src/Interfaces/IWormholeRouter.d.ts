import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IWormholeRouterInterface extends utils.Interface {
    functions: {
        "transferTokens(address,uint256,uint16,bytes32,uint256,uint32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "transferTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "transferTokens", values: [
        string,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "transferTokens", data: BytesLike): Result;
    events: {};
}
export interface IWormholeRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IWormholeRouterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        transferTokens(token: string, amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, arbiterFee: BigNumberish, nonce: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    transferTokens(token: string, amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, arbiterFee: BigNumberish, nonce: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        transferTokens(token: string, amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, arbiterFee: BigNumberish, nonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        transferTokens(token: string, amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, arbiterFee: BigNumberish, nonce: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        transferTokens(token: string, amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, arbiterFee: BigNumberish, nonce: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
