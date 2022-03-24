import type { BaseContract, BigNumberish, BytesLike, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace IDiamondCut {
    type FacetCutStruct = {
        facetAddress: string;
        action: BigNumberish;
        functionSelectors: BytesLike[];
    };
    type FacetCutStructOutput = [string, number, string[]] & {
        facetAddress: string;
        action: number;
        functionSelectors: string[];
    };
}
export interface LibDiamondInterface extends utils.Interface {
    functions: {};
    events: {
        "DiamondCut(tuple[],address,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DiamondCut"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface DiamondCutEventObject {
    _diamondCut: IDiamondCut.FacetCutStructOutput[];
    _init: string;
    _calldata: string;
}
export declare type DiamondCutEvent = TypedEvent<[
    IDiamondCut.FacetCutStructOutput[],
    string,
    string
], DiamondCutEventObject>;
export declare type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface LibDiamond extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LibDiamondInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "DiamondCut(tuple[],address,bytes)"(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
        DiamondCut(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
