import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAxelarExecutable, IAxelarExecutableInterface } from "../../../../../@axelar-network/axelar-cgp-solidity/contracts/interfaces/IAxelarExecutable";
export declare class IAxelarExecutable__factory {
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IAxelarExecutableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAxelarExecutable;
}
