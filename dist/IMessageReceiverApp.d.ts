import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IMessageReceiverAppInterface extends utils.Interface {
    functions: {
        "executeMessage(bytes,uint64,bytes,address)": FunctionFragment;
        "executeMessage(address,uint64,bytes,address)": FunctionFragment;
        "executeMessageWithTransfer(address,address,uint256,uint64,bytes,address)": FunctionFragment;
        "executeMessageWithTransferFallback(address,address,uint256,uint64,bytes,address)": FunctionFragment;
        "executeMessageWithTransferRefund(address,uint256,bytes,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "executeMessage(bytes,uint64,bytes,address)" | "executeMessage(address,uint64,bytes,address)" | "executeMessageWithTransfer" | "executeMessageWithTransferFallback" | "executeMessageWithTransferRefund"): FunctionFragment;
    encodeFunctionData(functionFragment: "executeMessage(bytes,uint64,bytes,address)", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "executeMessage(address,uint64,bytes,address)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "executeMessageWithTransfer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "executeMessageWithTransferFallback", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "executeMessageWithTransferRefund", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "executeMessage(bytes,uint64,bytes,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMessage(address,uint64,bytes,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMessageWithTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMessageWithTransferFallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMessageWithTransferRefund", data: BytesLike): Result;
    events: {};
}
export interface IMessageReceiverApp extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMessageReceiverAppInterface;
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
        "executeMessage(bytes,uint64,bytes,address)"(_sender: PromiseOrValue<BytesLike>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "executeMessage(address,uint64,bytes,address)"(_sender: PromiseOrValue<string>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeMessageWithTransfer(_sender: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeMessageWithTransferFallback(_sender: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    "executeMessage(bytes,uint64,bytes,address)"(_sender: PromiseOrValue<BytesLike>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "executeMessage(address,uint64,bytes,address)"(_sender: PromiseOrValue<string>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeMessageWithTransfer(_sender: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeMessageWithTransferFallback(_sender: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        "executeMessage(bytes,uint64,bytes,address)"(_sender: PromiseOrValue<BytesLike>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        "executeMessage(address,uint64,bytes,address)"(_sender: PromiseOrValue<string>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        executeMessageWithTransfer(_sender: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        executeMessageWithTransferFallback(_sender: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        "executeMessage(bytes,uint64,bytes,address)"(_sender: PromiseOrValue<BytesLike>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "executeMessage(address,uint64,bytes,address)"(_sender: PromiseOrValue<string>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeMessageWithTransfer(_sender: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeMessageWithTransferFallback(_sender: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        "executeMessage(bytes,uint64,bytes,address)"(_sender: PromiseOrValue<BytesLike>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "executeMessage(address,uint64,bytes,address)"(_sender: PromiseOrValue<string>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeMessageWithTransfer(_sender: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeMessageWithTransferFallback(_sender: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _srcChainId: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
