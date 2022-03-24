import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface OpticsRouterFacetInterface extends utils.Interface {
    functions: {
        "batchEnrollRemoteRouters(uint32[],address[])": FunctionFragment;
        "batchSetRoutes(uint32[],address[])": FunctionFragment;
        "enrollRemoteRouter(uint32,address)": FunctionFragment;
        "handle(uint32,bytes32,bytes)": FunctionFragment;
        "handle(uint32,uint32,bytes32,bytes)": FunctionFragment;
        "remoteCall(uint32,address,bytes)": FunctionFragment;
        "routeByDomain(uint32)": FunctionFragment;
        "routerByDomain(uint32)": FunctionFragment;
        "setRoute(uint32,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "batchEnrollRemoteRouters" | "batchSetRoutes" | "enrollRemoteRouter" | "handle(uint32,bytes32,bytes)" | "handle(uint32,uint32,bytes32,bytes)" | "remoteCall" | "routeByDomain" | "routerByDomain" | "setRoute"): FunctionFragment;
    encodeFunctionData(functionFragment: "batchEnrollRemoteRouters", values: [BigNumberish[], string[]]): string;
    encodeFunctionData(functionFragment: "batchSetRoutes", values: [BigNumberish[], string[]]): string;
    encodeFunctionData(functionFragment: "enrollRemoteRouter", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "handle(uint32,bytes32,bytes)", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "handle(uint32,uint32,bytes32,bytes)", values: [BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "remoteCall", values: [BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "routeByDomain", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "routerByDomain", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRoute", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "batchEnrollRemoteRouters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchSetRoutes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrollRemoteRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle(uint32,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle(uint32,uint32,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remoteCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routeByDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routerByDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoute", data: BytesLike): Result;
    events: {
        "LocalCall(uint32,address,address)": EventFragment;
        "RemoteCall(uint32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LocalCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoteCall"): EventFragment;
}
export interface LocalCallEventObject {
    origin: number;
    callee: string;
    home: string;
}
export declare type LocalCallEvent = TypedEvent<[
    number,
    string,
    string
], LocalCallEventObject>;
export declare type LocalCallEventFilter = TypedEventFilter<LocalCallEvent>;
export interface RemoteCallEventObject {
    domain: number;
    callee: string;
    sender: string;
}
export declare type RemoteCallEvent = TypedEvent<[
    number,
    string,
    string
], RemoteCallEventObject>;
export declare type RemoteCallEventFilter = TypedEventFilter<RemoteCallEvent>;
export interface OpticsRouterFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OpticsRouterFacetInterface;
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
        batchEnrollRemoteRouters(domains: BigNumberish[], routers: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchSetRoutes(domains: BigNumberish[], homes: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        enrollRemoteRouter(domain: BigNumberish, router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "handle(uint32,bytes32,bytes)"(origin: BigNumberish, sender: BytesLike, message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "handle(uint32,uint32,bytes32,bytes)"(origin: BigNumberish, arg1: BigNumberish, sender: BytesLike, message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        remoteCall(domain: BigNumberish, callee: string, callData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        routeByDomain(domain: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        routerByDomain(domain: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        setRoute(domain: BigNumberish, home: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    batchEnrollRemoteRouters(domains: BigNumberish[], routers: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchSetRoutes(domains: BigNumberish[], homes: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    enrollRemoteRouter(domain: BigNumberish, router: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "handle(uint32,bytes32,bytes)"(origin: BigNumberish, sender: BytesLike, message: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "handle(uint32,uint32,bytes32,bytes)"(origin: BigNumberish, arg1: BigNumberish, sender: BytesLike, message: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    remoteCall(domain: BigNumberish, callee: string, callData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    routeByDomain(domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
    routerByDomain(domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
    setRoute(domain: BigNumberish, home: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        batchEnrollRemoteRouters(domains: BigNumberish[], routers: string[], overrides?: CallOverrides): Promise<void>;
        batchSetRoutes(domains: BigNumberish[], homes: string[], overrides?: CallOverrides): Promise<void>;
        enrollRemoteRouter(domain: BigNumberish, router: string, overrides?: CallOverrides): Promise<void>;
        "handle(uint32,bytes32,bytes)"(origin: BigNumberish, sender: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        "handle(uint32,uint32,bytes32,bytes)"(origin: BigNumberish, arg1: BigNumberish, sender: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        remoteCall(domain: BigNumberish, callee: string, callData: BytesLike, overrides?: CallOverrides): Promise<void>;
        routeByDomain(domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
        routerByDomain(domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setRoute(domain: BigNumberish, home: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LocalCall(uint32,address,address)"(origin?: null, callee?: string | null, home?: null): LocalCallEventFilter;
        LocalCall(origin?: null, callee?: string | null, home?: null): LocalCallEventFilter;
        "RemoteCall(uint32,address,address)"(domain?: null, callee?: string | null, sender?: null): RemoteCallEventFilter;
        RemoteCall(domain?: null, callee?: string | null, sender?: null): RemoteCallEventFilter;
    };
    estimateGas: {
        batchEnrollRemoteRouters(domains: BigNumberish[], routers: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchSetRoutes(domains: BigNumberish[], homes: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        enrollRemoteRouter(domain: BigNumberish, router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "handle(uint32,bytes32,bytes)"(origin: BigNumberish, sender: BytesLike, message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "handle(uint32,uint32,bytes32,bytes)"(origin: BigNumberish, arg1: BigNumberish, sender: BytesLike, message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        remoteCall(domain: BigNumberish, callee: string, callData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        routeByDomain(domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        routerByDomain(domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setRoute(domain: BigNumberish, home: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        batchEnrollRemoteRouters(domains: BigNumberish[], routers: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchSetRoutes(domains: BigNumberish[], homes: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        enrollRemoteRouter(domain: BigNumberish, router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "handle(uint32,bytes32,bytes)"(origin: BigNumberish, sender: BytesLike, message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "handle(uint32,uint32,bytes32,bytes)"(origin: BigNumberish, arg1: BigNumberish, sender: BytesLike, message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        remoteCall(domain: BigNumberish, callee: string, callData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        routeByDomain(domain: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        routerByDomain(domain: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setRoute(domain: BigNumberish, home: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
