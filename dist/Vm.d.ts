import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace Vm {
    type LogStruct = {
        topics: PromiseOrValue<BytesLike>[];
        data: PromiseOrValue<BytesLike>;
    };
    type LogStructOutput = [string[], string] & {
        topics: string[];
        data: string;
    };
}
export interface VmInterface extends utils.Interface {
    functions: {
        "accesses(address)": FunctionFragment;
        "activeFork()": FunctionFragment;
        "addr(uint256)": FunctionFragment;
        "allowCheatcodes(address)": FunctionFragment;
        "assume(bool)": FunctionFragment;
        "broadcast()": FunctionFragment;
        "broadcast(address)": FunctionFragment;
        "broadcast(uint256)": FunctionFragment;
        "chainId(uint256)": FunctionFragment;
        "clearMockedCalls()": FunctionFragment;
        "closeFile(string)": FunctionFragment;
        "coinbase(address)": FunctionFragment;
        "createFork(string)": FunctionFragment;
        "createFork(string,uint256)": FunctionFragment;
        "createFork(string,bytes32)": FunctionFragment;
        "createSelectFork(string,uint256)": FunctionFragment;
        "createSelectFork(string,bytes32)": FunctionFragment;
        "createSelectFork(string)": FunctionFragment;
        "deal(address,uint256)": FunctionFragment;
        "deriveKey(string,uint32)": FunctionFragment;
        "deriveKey(string,string,uint32)": FunctionFragment;
        "difficulty(uint256)": FunctionFragment;
        "envAddress(string)": FunctionFragment;
        "envAddress(string,string)": FunctionFragment;
        "envBool(string)": FunctionFragment;
        "envBool(string,string)": FunctionFragment;
        "envBytes(string)": FunctionFragment;
        "envBytes(string,string)": FunctionFragment;
        "envBytes32(string,string)": FunctionFragment;
        "envBytes32(string)": FunctionFragment;
        "envInt(string,string)": FunctionFragment;
        "envInt(string)": FunctionFragment;
        "envString(string,string)": FunctionFragment;
        "envString(string)": FunctionFragment;
        "envUint(string)": FunctionFragment;
        "envUint(string,string)": FunctionFragment;
        "etch(address,bytes)": FunctionFragment;
        "expectCall(address,bytes)": FunctionFragment;
        "expectCall(address,uint256,bytes)": FunctionFragment;
        "expectEmit(bool,bool,bool,bool)": FunctionFragment;
        "expectEmit(bool,bool,bool,bool,address)": FunctionFragment;
        "expectRevert(bytes4)": FunctionFragment;
        "expectRevert(bytes)": FunctionFragment;
        "expectRevert()": FunctionFragment;
        "fee(uint256)": FunctionFragment;
        "ffi(string[])": FunctionFragment;
        "getCode(string)": FunctionFragment;
        "getDeployedCode(string)": FunctionFragment;
        "getNonce(address)": FunctionFragment;
        "getRecordedLogs()": FunctionFragment;
        "isPersistent(address)": FunctionFragment;
        "label(address,string)": FunctionFragment;
        "load(address,bytes32)": FunctionFragment;
        "makePersistent(address[])": FunctionFragment;
        "makePersistent(address,address)": FunctionFragment;
        "makePersistent(address)": FunctionFragment;
        "makePersistent(address,address,address)": FunctionFragment;
        "mockCall(address,uint256,bytes,bytes)": FunctionFragment;
        "mockCall(address,bytes,bytes)": FunctionFragment;
        "parseAddress(string)": FunctionFragment;
        "parseBool(string)": FunctionFragment;
        "parseBytes(string)": FunctionFragment;
        "parseBytes32(string)": FunctionFragment;
        "parseInt(string)": FunctionFragment;
        "parseJson(string)": FunctionFragment;
        "parseJson(string,string)": FunctionFragment;
        "parseUint(string)": FunctionFragment;
        "prank(address,address)": FunctionFragment;
        "prank(address)": FunctionFragment;
        "projectRoot()": FunctionFragment;
        "readFile(string)": FunctionFragment;
        "readFileBinary(string)": FunctionFragment;
        "readLine(string)": FunctionFragment;
        "record()": FunctionFragment;
        "recordLogs()": FunctionFragment;
        "rememberKey(uint256)": FunctionFragment;
        "removeFile(string)": FunctionFragment;
        "revertTo(uint256)": FunctionFragment;
        "revokePersistent(address[])": FunctionFragment;
        "revokePersistent(address)": FunctionFragment;
        "roll(uint256)": FunctionFragment;
        "rollFork(bytes32)": FunctionFragment;
        "rollFork(uint256,uint256)": FunctionFragment;
        "rollFork(uint256)": FunctionFragment;
        "rollFork(uint256,bytes32)": FunctionFragment;
        "rpcUrl(string)": FunctionFragment;
        "rpcUrls()": FunctionFragment;
        "selectFork(uint256)": FunctionFragment;
        "setEnv(string,string)": FunctionFragment;
        "setNonce(address,uint64)": FunctionFragment;
        "sign(uint256,bytes32)": FunctionFragment;
        "snapshot()": FunctionFragment;
        "startBroadcast()": FunctionFragment;
        "startBroadcast(address)": FunctionFragment;
        "startBroadcast(uint256)": FunctionFragment;
        "startPrank(address)": FunctionFragment;
        "startPrank(address,address)": FunctionFragment;
        "stopBroadcast()": FunctionFragment;
        "stopPrank()": FunctionFragment;
        "store(address,bytes32,bytes32)": FunctionFragment;
        "toString(address)": FunctionFragment;
        "toString(uint256)": FunctionFragment;
        "toString(bytes)": FunctionFragment;
        "toString(bool)": FunctionFragment;
        "toString(int256)": FunctionFragment;
        "toString(bytes32)": FunctionFragment;
        "transact(uint256,bytes32)": FunctionFragment;
        "transact(bytes32)": FunctionFragment;
        "warp(uint256)": FunctionFragment;
        "writeFile(string,string)": FunctionFragment;
        "writeFileBinary(string,bytes)": FunctionFragment;
        "writeLine(string,string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accesses" | "activeFork" | "addr" | "allowCheatcodes" | "assume" | "broadcast()" | "broadcast(address)" | "broadcast(uint256)" | "chainId" | "clearMockedCalls" | "closeFile" | "coinbase" | "createFork(string)" | "createFork(string,uint256)" | "createFork(string,bytes32)" | "createSelectFork(string,uint256)" | "createSelectFork(string,bytes32)" | "createSelectFork(string)" | "deal" | "deriveKey(string,uint32)" | "deriveKey(string,string,uint32)" | "difficulty" | "envAddress(string)" | "envAddress(string,string)" | "envBool(string)" | "envBool(string,string)" | "envBytes(string)" | "envBytes(string,string)" | "envBytes32(string,string)" | "envBytes32(string)" | "envInt(string,string)" | "envInt(string)" | "envString(string,string)" | "envString(string)" | "envUint(string)" | "envUint(string,string)" | "etch" | "expectCall(address,bytes)" | "expectCall(address,uint256,bytes)" | "expectEmit(bool,bool,bool,bool)" | "expectEmit(bool,bool,bool,bool,address)" | "expectRevert(bytes4)" | "expectRevert(bytes)" | "expectRevert()" | "fee" | "ffi" | "getCode" | "getDeployedCode" | "getNonce" | "getRecordedLogs" | "isPersistent" | "label" | "load" | "makePersistent(address[])" | "makePersistent(address,address)" | "makePersistent(address)" | "makePersistent(address,address,address)" | "mockCall(address,uint256,bytes,bytes)" | "mockCall(address,bytes,bytes)" | "parseAddress" | "parseBool" | "parseBytes" | "parseBytes32" | "parseInt" | "parseJson(string)" | "parseJson(string,string)" | "parseUint" | "prank(address,address)" | "prank(address)" | "projectRoot" | "readFile" | "readFileBinary" | "readLine" | "record" | "recordLogs" | "rememberKey" | "removeFile" | "revertTo" | "revokePersistent(address[])" | "revokePersistent(address)" | "roll" | "rollFork(bytes32)" | "rollFork(uint256,uint256)" | "rollFork(uint256)" | "rollFork(uint256,bytes32)" | "rpcUrl" | "rpcUrls" | "selectFork" | "setEnv" | "setNonce" | "sign" | "snapshot" | "startBroadcast()" | "startBroadcast(address)" | "startBroadcast(uint256)" | "startPrank(address)" | "startPrank(address,address)" | "stopBroadcast" | "stopPrank" | "store" | "toString(address)" | "toString(uint256)" | "toString(bytes)" | "toString(bool)" | "toString(int256)" | "toString(bytes32)" | "transact(uint256,bytes32)" | "transact(bytes32)" | "warp" | "writeFile" | "writeFileBinary" | "writeLine"): FunctionFragment;
    encodeFunctionData(functionFragment: "accesses", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "activeFork", values?: undefined): string;
    encodeFunctionData(functionFragment: "addr", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "allowCheatcodes", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "assume", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "broadcast()", values?: undefined): string;
    encodeFunctionData(functionFragment: "broadcast(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "broadcast(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "chainId", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "clearMockedCalls", values?: undefined): string;
    encodeFunctionData(functionFragment: "closeFile", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "coinbase", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "createFork(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "createFork(string,uint256)", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createFork(string,bytes32)", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "createSelectFork(string,uint256)", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createSelectFork(string,bytes32)", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "createSelectFork(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "deal", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "deriveKey(string,uint32)", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "deriveKey(string,string,uint32)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "difficulty", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "envAddress(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envAddress(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envBool(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envBool(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envBytes(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envBytes(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envBytes32(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envBytes32(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envInt(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envInt(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envString(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envString(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envUint(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envUint(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "etch", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "expectCall(address,bytes)", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "expectCall(address,uint256,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "expectEmit(bool,bool,bool,bool)", values: [
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "expectEmit(bool,bool,bool,bool,address)", values: [
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "expectRevert(bytes4)", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "expectRevert(bytes)", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "expectRevert()", values?: undefined): string;
    encodeFunctionData(functionFragment: "fee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "ffi", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getCode", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDeployedCode", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getNonce", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRecordedLogs", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPersistent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "label", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "load", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "makePersistent(address[])", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "makePersistent(address,address)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "makePersistent(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "makePersistent(address,address,address)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "mockCall(address,uint256,bytes,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "mockCall(address,bytes,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "parseAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseBool", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseBytes", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseBytes32", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseInt", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJson(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJson(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseUint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "prank(address,address)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "prank(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "projectRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "readFile", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "readFileBinary", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "readLine", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "record", values?: undefined): string;
    encodeFunctionData(functionFragment: "recordLogs", values?: undefined): string;
    encodeFunctionData(functionFragment: "rememberKey", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "removeFile", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revertTo", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "revokePersistent(address[])", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "revokePersistent(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "roll", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rollFork(bytes32)", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "rollFork(uint256,uint256)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rollFork(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rollFork(uint256,bytes32)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "rpcUrl", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rpcUrls", values?: undefined): string;
    encodeFunctionData(functionFragment: "selectFork", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setEnv", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setNonce", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "sign", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "snapshot", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBroadcast()", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBroadcast(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "startBroadcast(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "startPrank(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "startPrank(address,address)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "stopBroadcast", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopPrank", values?: undefined): string;
    encodeFunctionData(functionFragment: "store", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "toString(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "toString(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "toString(bytes)", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "toString(bool)", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "toString(int256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "toString(bytes32)", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transact(uint256,bytes32)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transact(bytes32)", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "warp", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "writeFile", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "writeFileBinary", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "writeLine", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "accesses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "activeFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowCheatcodes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assume", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearMockedCalls", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coinbase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFork(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFork(string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFork(string,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSelectFork(string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSelectFork(string,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSelectFork(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deriveKey(string,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deriveKey(string,string,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "difficulty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envAddress(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envAddress(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBool(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBool(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes32(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes32(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envInt(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envInt(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envString(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envString(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envUint(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envUint(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "etch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit(bool,bool,bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit(bool,bool,bool,bool,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(bytes4)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ffi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeployedCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecordedLogs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPersistent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "label", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "load", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makePersistent(address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makePersistent(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makePersistent(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makePersistent(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCall(address,uint256,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCall(address,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseBool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJson(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJson(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prank(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prank(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "projectRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readFileBinary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readLine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "record", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recordLogs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rememberKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokePersistent(address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokePersistent(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollFork(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollFork(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollFork(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollFork(uint256,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrls", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selectFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEnv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sign", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "snapshot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPrank(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPrank(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopBroadcast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopPrank", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transact(uint256,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transact(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "warp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeFileBinary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeLine", data: BytesLike): Result;
    events: {};
}
export interface Vm extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VmInterface;
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
        accesses(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        activeFork(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addr(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowCheatcodes(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        assume(arg0: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "broadcast()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "broadcast(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "broadcast(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        chainId(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        clearMockedCalls(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        closeFile(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        coinbase(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "createFork(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "createFork(string,uint256)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "createFork(string,bytes32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "createSelectFork(string,uint256)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "createSelectFork(string,bytes32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "createSelectFork(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deal(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deriveKey(string,uint32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deriveKey(string,string,uint32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        difficulty(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envAddress(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envAddress(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envBool(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envBool(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envBytes(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envBytes(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envBytes32(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envBytes32(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envInt(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envInt(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envString(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envString(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envUint(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envUint(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        etch(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "expectCall(address,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "expectCall(address,uint256,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "expectEmit(bool,bool,bool,bool)"(arg0: PromiseOrValue<boolean>, arg1: PromiseOrValue<boolean>, arg2: PromiseOrValue<boolean>, arg3: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "expectEmit(bool,bool,bool,bool,address)"(arg0: PromiseOrValue<boolean>, arg1: PromiseOrValue<boolean>, arg2: PromiseOrValue<boolean>, arg3: PromiseOrValue<boolean>, arg4: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "expectRevert(bytes4)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "expectRevert(bytes)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "expectRevert()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fee(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ffi(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCode(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getDeployedCode(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getNonce(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRecordedLogs(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isPersistent(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        label(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        load(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "makePersistent(address[])"(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "makePersistent(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "makePersistent(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "makePersistent(address,address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "mockCall(address,uint256,bytes,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "mockCall(address,bytes,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseAddress(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseBool(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseBytes(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseBytes32(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseInt(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "parseJson(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "parseJson(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseUint(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "prank(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "prank(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        projectRoot(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        readFile(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        readFileBinary(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        readLine(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        record(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        recordLogs(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rememberKey(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeFile(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revertTo(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "revokePersistent(address[])"(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "revokePersistent(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        roll(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "rollFork(bytes32)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "rollFork(uint256,uint256)"(forkId: PromiseOrValue<BigNumberish>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "rollFork(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "rollFork(uint256,bytes32)"(forkId: PromiseOrValue<BigNumberish>, transaction: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rpcUrl(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rpcUrls(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        selectFork(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEnv(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setNonce(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sign(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        snapshot(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "startBroadcast()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "startBroadcast(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "startBroadcast(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "startPrank(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "startPrank(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopBroadcast(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopPrank(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        store(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "toString(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "toString(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "toString(bytes)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "toString(bool)"(arg0: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "toString(int256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "toString(bytes32)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "transact(uint256,bytes32)"(forkId: PromiseOrValue<BigNumberish>, txHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "transact(bytes32)"(txHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        warp(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        writeFile(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        writeFileBinary(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        writeLine(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    accesses(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    activeFork(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addr(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowCheatcodes(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    assume(arg0: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "broadcast()"(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "broadcast(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "broadcast(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    chainId(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    clearMockedCalls(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    closeFile(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    coinbase(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "createFork(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "createFork(string,uint256)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "createFork(string,bytes32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "createSelectFork(string,uint256)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "createSelectFork(string,bytes32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "createSelectFork(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deal(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deriveKey(string,uint32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deriveKey(string,string,uint32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    difficulty(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envAddress(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envAddress(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envBool(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envBool(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envBytes(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envBytes(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envBytes32(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envBytes32(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envInt(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envInt(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envString(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envString(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envUint(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envUint(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    etch(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "expectCall(address,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "expectCall(address,uint256,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "expectEmit(bool,bool,bool,bool)"(arg0: PromiseOrValue<boolean>, arg1: PromiseOrValue<boolean>, arg2: PromiseOrValue<boolean>, arg3: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "expectEmit(bool,bool,bool,bool,address)"(arg0: PromiseOrValue<boolean>, arg1: PromiseOrValue<boolean>, arg2: PromiseOrValue<boolean>, arg3: PromiseOrValue<boolean>, arg4: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "expectRevert(bytes4)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "expectRevert(bytes)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "expectRevert()"(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fee(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ffi(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCode(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getDeployedCode(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getNonce(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRecordedLogs(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isPersistent(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    label(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    load(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "makePersistent(address[])"(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "makePersistent(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "makePersistent(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "makePersistent(address,address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "mockCall(address,uint256,bytes,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "mockCall(address,bytes,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseAddress(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseBool(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseBytes(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseBytes32(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseInt(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "parseJson(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "parseJson(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseUint(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "prank(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "prank(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    projectRoot(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    readFile(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    readFileBinary(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    readLine(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    record(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    recordLogs(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rememberKey(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeFile(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revertTo(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "revokePersistent(address[])"(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "revokePersistent(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    roll(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "rollFork(bytes32)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "rollFork(uint256,uint256)"(forkId: PromiseOrValue<BigNumberish>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "rollFork(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "rollFork(uint256,bytes32)"(forkId: PromiseOrValue<BigNumberish>, transaction: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rpcUrl(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rpcUrls(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    selectFork(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEnv(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setNonce(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sign(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    snapshot(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "startBroadcast()"(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "startBroadcast(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "startBroadcast(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "startPrank(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "startPrank(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopBroadcast(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopPrank(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    store(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "toString(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "toString(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "toString(bytes)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "toString(bool)"(arg0: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "toString(int256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "toString(bytes32)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "transact(uint256,bytes32)"(forkId: PromiseOrValue<BigNumberish>, txHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "transact(bytes32)"(txHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    warp(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    writeFile(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    writeFileBinary(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    writeLine(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accesses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], string[]] & {
            reads: string[];
            writes: string[];
        }>;
        activeFork(overrides?: CallOverrides): Promise<BigNumber>;
        addr(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        allowCheatcodes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        assume(arg0: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        "broadcast()"(overrides?: CallOverrides): Promise<void>;
        "broadcast(address)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "broadcast(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        chainId(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        clearMockedCalls(overrides?: CallOverrides): Promise<void>;
        closeFile(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        coinbase(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "createFork(string)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "createFork(string,uint256)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "createFork(string,bytes32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        "createSelectFork(string,uint256)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "createSelectFork(string,bytes32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        "createSelectFork(string)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        deal(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "deriveKey(string,uint32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "deriveKey(string,string,uint32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        difficulty(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "envAddress(string)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "envAddress(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        "envBool(string)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        "envBool(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean[]>;
        "envBytes(string)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "envBytes(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        "envBytes32(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        "envBytes32(string)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "envInt(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        "envInt(string)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envString(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        "envString(string)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "envUint(string)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envUint(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        etch(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "expectCall(address,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "expectCall(address,uint256,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "expectEmit(bool,bool,bool,bool)"(arg0: PromiseOrValue<boolean>, arg1: PromiseOrValue<boolean>, arg2: PromiseOrValue<boolean>, arg3: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        "expectEmit(bool,bool,bool,bool,address)"(arg0: PromiseOrValue<boolean>, arg1: PromiseOrValue<boolean>, arg2: PromiseOrValue<boolean>, arg3: PromiseOrValue<boolean>, arg4: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "expectRevert(bytes4)"(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "expectRevert(bytes)"(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "expectRevert()"(overrides?: CallOverrides): Promise<void>;
        fee(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        ffi(arg0: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string>;
        getCode(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getDeployedCode(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getNonce(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRecordedLogs(overrides?: CallOverrides): Promise<Vm.LogStructOutput[]>;
        isPersistent(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        label(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        load(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "makePersistent(address[])"(arg0: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        "makePersistent(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "makePersistent(address)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "makePersistent(address,address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "mockCall(address,uint256,bytes,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "mockCall(address,bytes,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        parseAddress(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        parseBool(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        parseBytes(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        parseBytes32(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        parseInt(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "parseJson(string)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "parseJson(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        parseUint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "prank(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "prank(address)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        projectRoot(overrides?: CallOverrides): Promise<string>;
        readFile(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        readFileBinary(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        readLine(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        record(overrides?: CallOverrides): Promise<void>;
        recordLogs(overrides?: CallOverrides): Promise<void>;
        rememberKey(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        removeFile(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revertTo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        "revokePersistent(address[])"(arg0: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        "revokePersistent(address)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        roll(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "rollFork(bytes32)"(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "rollFork(uint256,uint256)"(forkId: PromiseOrValue<BigNumberish>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "rollFork(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "rollFork(uint256,bytes32)"(forkId: PromiseOrValue<BigNumberish>, transaction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        rpcUrl(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        rpcUrls(overrides?: CallOverrides): Promise<[string, string][]>;
        selectFork(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setEnv(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setNonce(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        sign(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[number, string, string]>;
        snapshot(overrides?: CallOverrides): Promise<BigNumber>;
        "startBroadcast()"(overrides?: CallOverrides): Promise<void>;
        "startBroadcast(address)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "startBroadcast(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "startPrank(address)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "startPrank(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        stopBroadcast(overrides?: CallOverrides): Promise<void>;
        stopPrank(overrides?: CallOverrides): Promise<void>;
        store(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "toString(address)"(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "toString(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "toString(bytes)"(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "toString(bool)"(arg0: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        "toString(int256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "toString(bytes32)"(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "transact(uint256,bytes32)"(forkId: PromiseOrValue<BigNumberish>, txHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "transact(bytes32)"(txHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        warp(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        writeFile(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        writeFileBinary(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        writeLine(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        accesses(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        activeFork(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addr(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowCheatcodes(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        assume(arg0: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "broadcast()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "broadcast(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "broadcast(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        chainId(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        clearMockedCalls(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        closeFile(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        coinbase(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "createFork(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "createFork(string,uint256)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "createFork(string,bytes32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "createSelectFork(string,uint256)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "createSelectFork(string,bytes32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "createSelectFork(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deal(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deriveKey(string,uint32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deriveKey(string,string,uint32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        difficulty(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envAddress(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envAddress(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envBool(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envBool(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envBytes(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envBytes(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envBytes32(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envBytes32(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envInt(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envInt(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envString(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envString(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envUint(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envUint(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        etch(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "expectCall(address,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "expectCall(address,uint256,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "expectEmit(bool,bool,bool,bool)"(arg0: PromiseOrValue<boolean>, arg1: PromiseOrValue<boolean>, arg2: PromiseOrValue<boolean>, arg3: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "expectEmit(bool,bool,bool,bool,address)"(arg0: PromiseOrValue<boolean>, arg1: PromiseOrValue<boolean>, arg2: PromiseOrValue<boolean>, arg3: PromiseOrValue<boolean>, arg4: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "expectRevert(bytes4)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "expectRevert(bytes)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "expectRevert()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fee(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ffi(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCode(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getDeployedCode(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getNonce(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRecordedLogs(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isPersistent(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        label(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        load(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "makePersistent(address[])"(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "makePersistent(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "makePersistent(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "makePersistent(address,address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "mockCall(address,uint256,bytes,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "mockCall(address,bytes,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseAddress(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseBool(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseBytes(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseBytes32(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseInt(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "parseJson(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "parseJson(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseUint(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "prank(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "prank(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        projectRoot(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        readFile(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        readFileBinary(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        readLine(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        record(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        recordLogs(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rememberKey(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeFile(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revertTo(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "revokePersistent(address[])"(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "revokePersistent(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        roll(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "rollFork(bytes32)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "rollFork(uint256,uint256)"(forkId: PromiseOrValue<BigNumberish>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "rollFork(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "rollFork(uint256,bytes32)"(forkId: PromiseOrValue<BigNumberish>, transaction: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rpcUrl(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rpcUrls(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        selectFork(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEnv(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setNonce(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sign(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        snapshot(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "startBroadcast()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "startBroadcast(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "startBroadcast(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "startPrank(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "startPrank(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopBroadcast(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopPrank(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        store(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "toString(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "toString(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "toString(bytes)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "toString(bool)"(arg0: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "toString(int256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "toString(bytes32)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "transact(uint256,bytes32)"(forkId: PromiseOrValue<BigNumberish>, txHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "transact(bytes32)"(txHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        warp(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        writeFile(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        writeFileBinary(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        writeLine(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accesses(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        activeFork(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addr(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowCheatcodes(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        assume(arg0: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "broadcast()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "broadcast(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "broadcast(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        chainId(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        clearMockedCalls(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        closeFile(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        coinbase(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "createFork(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "createFork(string,uint256)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "createFork(string,bytes32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "createSelectFork(string,uint256)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "createSelectFork(string,bytes32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "createSelectFork(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deal(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deriveKey(string,uint32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deriveKey(string,string,uint32)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        difficulty(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envAddress(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envAddress(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envBool(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envBool(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envBytes(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envBytes(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envBytes32(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envBytes32(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envInt(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envInt(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envString(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envString(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envUint(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envUint(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        etch(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "expectCall(address,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "expectCall(address,uint256,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "expectEmit(bool,bool,bool,bool)"(arg0: PromiseOrValue<boolean>, arg1: PromiseOrValue<boolean>, arg2: PromiseOrValue<boolean>, arg3: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "expectEmit(bool,bool,bool,bool,address)"(arg0: PromiseOrValue<boolean>, arg1: PromiseOrValue<boolean>, arg2: PromiseOrValue<boolean>, arg3: PromiseOrValue<boolean>, arg4: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "expectRevert(bytes4)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "expectRevert(bytes)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "expectRevert()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fee(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ffi(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCode(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getDeployedCode(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getNonce(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRecordedLogs(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isPersistent(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        label(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        load(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "makePersistent(address[])"(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "makePersistent(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "makePersistent(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "makePersistent(address,address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "mockCall(address,uint256,bytes,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "mockCall(address,bytes,bytes)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseAddress(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseBool(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseBytes(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseBytes32(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseInt(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "parseJson(string)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "parseJson(string,string)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseUint(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "prank(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "prank(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        projectRoot(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        readFile(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        readFileBinary(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        readLine(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        record(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        recordLogs(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rememberKey(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeFile(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revertTo(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "revokePersistent(address[])"(arg0: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "revokePersistent(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        roll(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "rollFork(bytes32)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "rollFork(uint256,uint256)"(forkId: PromiseOrValue<BigNumberish>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "rollFork(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "rollFork(uint256,bytes32)"(forkId: PromiseOrValue<BigNumberish>, transaction: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rpcUrl(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rpcUrls(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        selectFork(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEnv(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setNonce(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sign(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        snapshot(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "startBroadcast()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "startBroadcast(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "startBroadcast(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "startPrank(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "startPrank(address,address)"(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopBroadcast(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopPrank(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        store(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "toString(address)"(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "toString(uint256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "toString(bytes)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "toString(bool)"(arg0: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "toString(int256)"(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "toString(bytes32)"(arg0: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "transact(uint256,bytes32)"(forkId: PromiseOrValue<BigNumberish>, txHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "transact(bytes32)"(txHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        warp(arg0: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        writeFile(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        writeFileBinary(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        writeLine(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
