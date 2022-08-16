import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface AxelarFacetInterface extends utils.Interface {
    functions: {
        "executeCallViaAxelar(string,string,address,bytes)": FunctionFragment;
        "executeCallWithTokenViaAxelar(string,string,string,uint256,address,bytes)": FunctionFragment;
        "initAxelar(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "executeCallViaAxelar" | "executeCallWithTokenViaAxelar" | "initAxelar"): FunctionFragment;
    encodeFunctionData(functionFragment: "executeCallViaAxelar", values: [string, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeCallWithTokenViaAxelar", values: [string, string, string, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "initAxelar", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "executeCallViaAxelar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeCallWithTokenViaAxelar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initAxelar", data: BytesLike): Result;
    events: {};
}
export interface AxelarFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AxelarFacetInterface;
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
        executeCallViaAxelar(destinationChain: string, destinationAddress: string, callTo: string, callData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeCallWithTokenViaAxelar(destinationChain: string, destinationAddress: string, symbol: string, amount: BigNumberish, callTo: string, callData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initAxelar(_gateway: string, _gasReceiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    executeCallViaAxelar(destinationChain: string, destinationAddress: string, callTo: string, callData: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeCallWithTokenViaAxelar(destinationChain: string, destinationAddress: string, symbol: string, amount: BigNumberish, callTo: string, callData: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initAxelar(_gateway: string, _gasReceiver: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        executeCallViaAxelar(destinationChain: string, destinationAddress: string, callTo: string, callData: BytesLike, overrides?: CallOverrides): Promise<void>;
        executeCallWithTokenViaAxelar(destinationChain: string, destinationAddress: string, symbol: string, amount: BigNumberish, callTo: string, callData: BytesLike, overrides?: CallOverrides): Promise<void>;
        initAxelar(_gateway: string, _gasReceiver: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        executeCallViaAxelar(destinationChain: string, destinationAddress: string, callTo: string, callData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeCallWithTokenViaAxelar(destinationChain: string, destinationAddress: string, symbol: string, amount: BigNumberish, callTo: string, callData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initAxelar(_gateway: string, _gasReceiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        executeCallViaAxelar(destinationChain: string, destinationAddress: string, callTo: string, callData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeCallWithTokenViaAxelar(destinationChain: string, destinationAddress: string, symbol: string, amount: BigNumberish, callTo: string, callData: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initAxelar(_gateway: string, _gasReceiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
