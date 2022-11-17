import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IAxelarExecutableInterface extends utils.Interface {
    functions: {
        "execute(bytes32,string,string,bytes)": FunctionFragment;
        "executeWithToken(bytes32,string,string,bytes,string,uint256)": FunctionFragment;
        "gateway()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "execute" | "executeWithToken" | "gateway"): FunctionFragment;
    encodeFunctionData(functionFragment: "execute", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "executeWithToken", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeWithToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
    events: {};
}
export interface IAxelarExecutable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAxelarExecutableInterface;
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
        execute(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeWithToken(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, tokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gateway(overrides?: CallOverrides): Promise<[string]>;
    };
    execute(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeWithToken(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, tokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gateway(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        execute(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        executeWithToken(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, tokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        gateway(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        execute(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeWithToken(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, tokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gateway(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        execute(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeWithToken(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, tokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
