import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface DexManagerFacetInterface extends utils.Interface {
    functions: {
        "addDex(address)": FunctionFragment;
        "approvedDexs()": FunctionFragment;
        "batchAddDex(address[])": FunctionFragment;
        "batchRemoveDex(address[])": FunctionFragment;
        "removeDex(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addDex" | "approvedDexs" | "batchAddDex" | "batchRemoveDex" | "removeDex"): FunctionFragment;
    encodeFunctionData(functionFragment: "addDex", values: [string]): string;
    encodeFunctionData(functionFragment: "approvedDexs", values?: undefined): string;
    encodeFunctionData(functionFragment: "batchAddDex", values: [string[]]): string;
    encodeFunctionData(functionFragment: "batchRemoveDex", values: [string[]]): string;
    encodeFunctionData(functionFragment: "removeDex", values: [string]): string;
    decodeFunctionResult(functionFragment: "addDex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvedDexs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchAddDex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchRemoveDex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeDex", data: BytesLike): Result;
    events: {};
}
export interface DexManagerFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DexManagerFacetInterface;
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
        addDex(_dex: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approvedDexs(overrides?: CallOverrides): Promise<[string[]]>;
        batchAddDex(_dexs: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchRemoveDex(_dexs: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeDex(_dex: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addDex(_dex: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approvedDexs(overrides?: CallOverrides): Promise<string[]>;
    batchAddDex(_dexs: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchRemoveDex(_dexs: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeDex(_dex: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addDex(_dex: string, overrides?: CallOverrides): Promise<void>;
        approvedDexs(overrides?: CallOverrides): Promise<string[]>;
        batchAddDex(_dexs: string[], overrides?: CallOverrides): Promise<void>;
        batchRemoveDex(_dexs: string[], overrides?: CallOverrides): Promise<void>;
        removeDex(_dex: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        addDex(_dex: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approvedDexs(overrides?: CallOverrides): Promise<BigNumber>;
        batchAddDex(_dexs: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchRemoveDex(_dexs: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeDex(_dex: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addDex(_dex: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approvedDexs(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchAddDex(_dexs: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchRemoveDex(_dexs: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeDex(_dex: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
