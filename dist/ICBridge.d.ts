import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ICBridgeInterface extends utils.Interface {
    functions: {
        "send(address,address,uint256,uint64,uint64,uint32)": FunctionFragment;
        "sendNative(address,uint256,uint64,uint64,uint32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "send" | "sendNative"): FunctionFragment;
    encodeFunctionData(functionFragment: "send", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "sendNative", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendNative", data: BytesLike): Result;
    events: {};
}
export interface ICBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICBridgeInterface;
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
        send(_receiver: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendNative(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    send(_receiver: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendNative(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        send(_receiver: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        sendNative(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        send(_receiver: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendNative(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        send(_receiver: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendNative(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
