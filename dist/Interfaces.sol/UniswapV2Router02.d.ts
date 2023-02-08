import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface UniswapV2Router02Interface extends utils.Interface {
    functions: {
        "getAmountsIn(uint256,address[])": FunctionFragment;
        "getAmountsOut(uint256,address[])": FunctionFragment;
        "swapETHForExactTokens(uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForETH(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapTokensForExactETH(uint256,uint256,address[],address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAmountsIn" | "getAmountsOut" | "swapETHForExactTokens" | "swapExactTokensForETH" | "swapExactTokensForTokens" | "swapTokensForExactETH"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAmountsIn", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getAmountsOut", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "swapETHForExactTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETH", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapTokensForExactETH", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "getAmountsIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapETHForExactTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensForExactETH", data: BytesLike): Result;
    events: {};
}
export interface UniswapV2Router02 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UniswapV2Router02Interface;
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
        getAmountsIn(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getAmountsIn(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAmountsIn(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        getAmountsIn(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAmountsIn(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}