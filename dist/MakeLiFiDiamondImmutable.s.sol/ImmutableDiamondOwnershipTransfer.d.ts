import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface ImmutableDiamondOwnershipTransferInterface extends utils.Interface {
    functions: {
        "transferOwnershipToZeroAddress()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "transferOwnershipToZeroAddress"): FunctionFragment;
    encodeFunctionData(functionFragment: "transferOwnershipToZeroAddress", values?: undefined): string;
    decodeFunctionResult(functionFragment: "transferOwnershipToZeroAddress", data: BytesLike): Result;
    events: {};
}
export interface ImmutableDiamondOwnershipTransfer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ImmutableDiamondOwnershipTransferInterface;
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
        transferOwnershipToZeroAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    transferOwnershipToZeroAddress(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        transferOwnershipToZeroAddress(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        transferOwnershipToZeroAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        transferOwnershipToZeroAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
