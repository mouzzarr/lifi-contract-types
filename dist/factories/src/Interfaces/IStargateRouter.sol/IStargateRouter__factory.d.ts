import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IStargateRouter, IStargateRouterInterface } from "../../../../src/Interfaces/IStargateRouter.sol/IStargateRouter";
export declare class IStargateRouter__factory {
    static readonly abi: {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IStargateRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStargateRouter;
}
