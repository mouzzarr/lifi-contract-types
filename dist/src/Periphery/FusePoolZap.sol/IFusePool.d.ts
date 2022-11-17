import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IFusePoolInterface extends utils.Interface {
    functions: {
        "cTokensByUnderlying(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cTokensByUnderlying"): FunctionFragment;
    encodeFunctionData(functionFragment: "cTokensByUnderlying", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "cTokensByUnderlying", data: BytesLike): Result;
    events: {};
}
export interface IFusePool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFusePoolInterface;
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
        cTokensByUnderlying(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
    };
    cTokensByUnderlying(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        cTokensByUnderlying(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        cTokensByUnderlying(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        cTokensByUnderlying(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
