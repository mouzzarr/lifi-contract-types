import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IAnyswapRouterInterface extends utils.Interface {
    functions: {
        "anySwapOut(address,address,uint256,uint256)": FunctionFragment;
        "anySwapOutNative(address,address,uint256)": FunctionFragment;
        "anySwapOutUnderlying(address,address,uint256,uint256)": FunctionFragment;
        "wNATIVE()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "anySwapOut" | "anySwapOutNative" | "anySwapOutUnderlying" | "wNATIVE"): FunctionFragment;
    encodeFunctionData(functionFragment: "anySwapOut", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "anySwapOutNative", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "anySwapOutUnderlying", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "wNATIVE", values?: undefined): string;
    decodeFunctionResult(functionFragment: "anySwapOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "anySwapOutNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "anySwapOutUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wNATIVE", data: BytesLike): Result;
    events: {};
}
export interface IAnyswapRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAnyswapRouterInterface;
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
        anySwapOut(token: string, to: string, amount: BigNumberish, toChainID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        anySwapOutNative(token: string, to: string, toChainID: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        anySwapOutUnderlying(token: string, to: string, amount: BigNumberish, toChainID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wNATIVE(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    anySwapOut(token: string, to: string, amount: BigNumberish, toChainID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    anySwapOutNative(token: string, to: string, toChainID: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    anySwapOutUnderlying(token: string, to: string, amount: BigNumberish, toChainID: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wNATIVE(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        anySwapOut(token: string, to: string, amount: BigNumberish, toChainID: BigNumberish, overrides?: CallOverrides): Promise<void>;
        anySwapOutNative(token: string, to: string, toChainID: BigNumberish, overrides?: CallOverrides): Promise<void>;
        anySwapOutUnderlying(token: string, to: string, amount: BigNumberish, toChainID: BigNumberish, overrides?: CallOverrides): Promise<void>;
        wNATIVE(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        anySwapOut(token: string, to: string, amount: BigNumberish, toChainID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        anySwapOutNative(token: string, to: string, toChainID: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        anySwapOutUnderlying(token: string, to: string, amount: BigNumberish, toChainID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wNATIVE(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        anySwapOut(token: string, to: string, amount: BigNumberish, toChainID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        anySwapOutNative(token: string, to: string, toChainID: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        anySwapOutUnderlying(token: string, to: string, amount: BigNumberish, toChainID: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wNATIVE(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
