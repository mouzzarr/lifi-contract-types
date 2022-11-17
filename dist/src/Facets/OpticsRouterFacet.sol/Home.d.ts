import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface HomeInterface extends utils.Interface {
    functions: {
        "dispatch(uint32,bytes32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "dispatch"): FunctionFragment;
    encodeFunctionData(functionFragment: "dispatch", values: [BigNumberish, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "dispatch", data: BytesLike): Result;
    events: {};
}
export interface Home extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HomeInterface;
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
        dispatch(_destinationDomain: BigNumberish, _recipientAddress: BytesLike, _messageBody: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    dispatch(_destinationDomain: BigNumberish, _recipientAddress: BytesLike, _messageBody: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        dispatch(_destinationDomain: BigNumberish, _recipientAddress: BytesLike, _messageBody: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        dispatch(_destinationDomain: BigNumberish, _recipientAddress: BytesLike, _messageBody: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        dispatch(_destinationDomain: BigNumberish, _recipientAddress: BytesLike, _messageBody: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}