import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface AxelarExecutorInterface extends utils.Interface {
    functions: {
        "execute(bytes32,string,string,bytes)": FunctionFragment;
        "executeWithToken(bytes32,string,string,bytes,string,uint256)": FunctionFragment;
        "gateway()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAxelarGateway(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "execute" | "executeWithToken" | "gateway" | "owner" | "renounceOwnership" | "setAxelarGateway" | "transferOwnership"): FunctionFragment;
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
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAxelarGateway", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeWithToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAxelarGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "AxelarExecutionComplete(address,bytes4)": EventFragment;
        "AxelarExecutionFailed(address,bytes4,address)": EventFragment;
        "AxelarGatewaySet(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AxelarExecutionComplete"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AxelarExecutionFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AxelarGatewaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface AxelarExecutionCompleteEventObject {
    callTo: string;
    selector: string;
}
export declare type AxelarExecutionCompleteEvent = TypedEvent<[
    string,
    string
], AxelarExecutionCompleteEventObject>;
export declare type AxelarExecutionCompleteEventFilter = TypedEventFilter<AxelarExecutionCompleteEvent>;
export interface AxelarExecutionFailedEventObject {
    callTo: string;
    selector: string;
    recoveryAddress: string;
}
export declare type AxelarExecutionFailedEvent = TypedEvent<[
    string,
    string,
    string
], AxelarExecutionFailedEventObject>;
export declare type AxelarExecutionFailedEventFilter = TypedEventFilter<AxelarExecutionFailedEvent>;
export interface AxelarGatewaySetEventObject {
    gateway: string;
}
export declare type AxelarGatewaySetEvent = TypedEvent<[
    string
], AxelarGatewaySetEventObject>;
export declare type AxelarGatewaySetEventFilter = TypedEventFilter<AxelarGatewaySetEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface AxelarExecutor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AxelarExecutorInterface;
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
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAxelarGateway(_gateway: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    execute(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeWithToken(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, tokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gateway(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAxelarGateway(_gateway: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        execute(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        executeWithToken(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, tokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        gateway(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAxelarGateway(_gateway: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AxelarExecutionComplete(address,bytes4)"(callTo?: PromiseOrValue<string> | null, selector?: null): AxelarExecutionCompleteEventFilter;
        AxelarExecutionComplete(callTo?: PromiseOrValue<string> | null, selector?: null): AxelarExecutionCompleteEventFilter;
        "AxelarExecutionFailed(address,bytes4,address)"(callTo?: PromiseOrValue<string> | null, selector?: null, recoveryAddress?: null): AxelarExecutionFailedEventFilter;
        AxelarExecutionFailed(callTo?: PromiseOrValue<string> | null, selector?: null, recoveryAddress?: null): AxelarExecutionFailedEventFilter;
        "AxelarGatewaySet(address)"(gateway?: PromiseOrValue<string> | null): AxelarGatewaySetEventFilter;
        AxelarGatewaySet(gateway?: PromiseOrValue<string> | null): AxelarGatewaySetEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        execute(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeWithToken(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, tokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gateway(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAxelarGateway(_gateway: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        execute(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeWithToken(commandId: PromiseOrValue<BytesLike>, sourceChain: PromiseOrValue<string>, sourceAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, tokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAxelarGateway(_gateway: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}