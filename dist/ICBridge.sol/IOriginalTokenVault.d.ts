import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IOriginalTokenVaultInterface extends utils.Interface {
    functions: {
        "deposit(address,uint256,uint64,address,uint64)": FunctionFragment;
        "depositNative(uint256,uint64,address,uint64)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deposit" | "depositNative"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "depositNative", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositNative", data: BytesLike): Result;
    events: {};
}
export interface IOriginalTokenVault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOriginalTokenVaultInterface;
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
        deposit(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _mintChainId: PromiseOrValue<BigNumberish>, _mintAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositNative(_amount: PromiseOrValue<BigNumberish>, _mintChainId: PromiseOrValue<BigNumberish>, _mintAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    deposit(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _mintChainId: PromiseOrValue<BigNumberish>, _mintAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositNative(_amount: PromiseOrValue<BigNumberish>, _mintChainId: PromiseOrValue<BigNumberish>, _mintAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        deposit(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _mintChainId: PromiseOrValue<BigNumberish>, _mintAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        depositNative(_amount: PromiseOrValue<BigNumberish>, _mintChainId: PromiseOrValue<BigNumberish>, _mintAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        deposit(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _mintChainId: PromiseOrValue<BigNumberish>, _mintAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositNative(_amount: PromiseOrValue<BigNumberish>, _mintChainId: PromiseOrValue<BigNumberish>, _mintAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deposit(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _mintChainId: PromiseOrValue<BigNumberish>, _mintAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositNative(_amount: PromiseOrValue<BigNumberish>, _mintChainId: PromiseOrValue<BigNumberish>, _mintAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
