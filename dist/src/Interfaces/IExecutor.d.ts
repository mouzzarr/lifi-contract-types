import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace LibSwap {
    type SwapDataStruct = {
        callTo: PromiseOrValue<string>;
        approveTo: PromiseOrValue<string>;
        sendingAssetId: PromiseOrValue<string>;
        receivingAssetId: PromiseOrValue<string>;
        fromAmount: PromiseOrValue<BigNumberish>;
        callData: PromiseOrValue<BytesLike>;
        requiresDeposit: PromiseOrValue<boolean>;
    };
    type SwapDataStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber,
        string,
        boolean
    ] & {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumber;
        callData: string;
        requiresDeposit: boolean;
    };
}
export interface IExecutorInterface extends utils.Interface {
    functions: {
        "swapAndCompleteBridgeTokens(bytes32,(address,address,address,address,uint256,bytes,bool)[],address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "swapAndCompleteBridgeTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "swapAndCompleteBridgeTokens", values: [
        PromiseOrValue<BytesLike>,
        LibSwap.SwapDataStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "swapAndCompleteBridgeTokens", data: BytesLike): Result;
    events: {};
}
export interface IExecutor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IExecutorInterface;
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
        swapAndCompleteBridgeTokens(_transactionId: PromiseOrValue<BytesLike>, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    swapAndCompleteBridgeTokens(_transactionId: PromiseOrValue<BytesLike>, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swapAndCompleteBridgeTokens(_transactionId: PromiseOrValue<BytesLike>, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        swapAndCompleteBridgeTokens(_transactionId: PromiseOrValue<BytesLike>, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swapAndCompleteBridgeTokens(_transactionId: PromiseOrValue<BytesLike>, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
