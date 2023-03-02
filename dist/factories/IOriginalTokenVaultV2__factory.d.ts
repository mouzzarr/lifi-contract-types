import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOriginalTokenVaultV2, IOriginalTokenVaultV2Interface } from "../IOriginalTokenVaultV2";
export declare class IOriginalTokenVaultV2__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "_mintChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "address";
            readonly name: "_mintAccount";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "_mintChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "address";
            readonly name: "_mintAccount";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }];
        readonly name: "depositNative";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "recordId";
            readonly type: "bytes32";
        }];
        readonly name: "records";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_request";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_sigs";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "_signers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_powers";
            readonly type: "uint256[]";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IOriginalTokenVaultV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOriginalTokenVaultV2;
}
