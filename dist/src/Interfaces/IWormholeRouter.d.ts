import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface IWormholeRouterInterface extends utils.Interface {
    functions: {
        "transferTokens(address,uint256,uint16,bytes32,uint256,uint32)": FunctionFragment;
        "wrapAndTransferETH(uint16,bytes32,uint256,uint32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "transferTokens" | "wrapAndTransferETH"): FunctionFragment;
    encodeFunctionData(functionFragment: "transferTokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "wrapAndTransferETH", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "transferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrapAndTransferETH", data: BytesLike): Result;
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
        transferTokens(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, recipientChain: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, arbiterFee: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        wrapAndTransferETH(recipientChain: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, arbiterFee: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    transferTokens(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, recipientChain: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, arbiterFee: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    wrapAndTransferETH(recipientChain: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, arbiterFee: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        transferTokens(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, recipientChain: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, arbiterFee: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        wrapAndTransferETH(recipientChain: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, arbiterFee: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        transferTokens(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, recipientChain: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, arbiterFee: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        wrapAndTransferETH(recipientChain: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, arbiterFee: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        transferTokens(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, recipientChain: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, arbiterFee: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        wrapAndTransferETH(recipientChain: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, arbiterFee: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
