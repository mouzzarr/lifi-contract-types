import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface PeripheryRegistryFacetInterface extends utils.Interface {
    functions: {
        "getPeripheryContract(string)": FunctionFragment;
        "registerPeripheryContract(string,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getPeripheryContract" | "registerPeripheryContract"): FunctionFragment;
    encodeFunctionData(functionFragment: "getPeripheryContract", values: [string]): string;
    encodeFunctionData(functionFragment: "registerPeripheryContract", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "getPeripheryContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerPeripheryContract", data: BytesLike): Result;
    events: {};
}
export interface PeripheryRegistryFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PeripheryRegistryFacetInterface;
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
        getPeripheryContract(_name: string, overrides?: CallOverrides): Promise<[string]>;
        registerPeripheryContract(_name: string, _contractAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getPeripheryContract(_name: string, overrides?: CallOverrides): Promise<string>;
    registerPeripheryContract(_name: string, _contractAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getPeripheryContract(_name: string, overrides?: CallOverrides): Promise<string>;
        registerPeripheryContract(_name: string, _contractAddress: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getPeripheryContract(_name: string, overrides?: CallOverrides): Promise<BigNumber>;
        registerPeripheryContract(_name: string, _contractAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getPeripheryContract(_name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerPeripheryContract(_name: string, _contractAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}