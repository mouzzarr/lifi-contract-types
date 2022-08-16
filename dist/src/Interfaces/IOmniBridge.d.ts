import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IOmniBridgeInterface extends utils.Interface {
    functions: {
        "relayTokens(address,address,uint256)": FunctionFragment;
        "wrapAndRelayTokens(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "relayTokens" | "wrapAndRelayTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "wrapAndRelayTokens", values: [string]): string;
    decodeFunctionResult(functionFragment: "relayTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrapAndRelayTokens", data: BytesLike): Result;
    events: {};
}
export interface IOmniBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOmniBridgeInterface;
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
        relayTokens(token: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wrapAndRelayTokens(receiver: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    relayTokens(token: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wrapAndRelayTokens(receiver: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        relayTokens(token: string, receiver: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        wrapAndRelayTokens(receiver: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        relayTokens(token: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wrapAndRelayTokens(receiver: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        relayTokens(token: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wrapAndRelayTokens(receiver: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
