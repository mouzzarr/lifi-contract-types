"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CBridgeRefundTestPolygon__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        name: "log",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "log_address",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "log_bytes",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "log_bytes32",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        name: "log_int",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "val",
                type: "address",
            },
        ],
        name: "log_named_address",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "val",
                type: "bytes",
            },
        ],
        name: "log_named_bytes",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "val",
                type: "bytes32",
            },
        ],
        name: "log_named_bytes32",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "val",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
            },
        ],
        name: "log_named_decimal_int",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "val",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
            },
        ],
        name: "log_named_decimal_uint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "val",
                type: "int256",
            },
        ],
        name: "log_named_int",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "val",
                type: "string",
            },
        ],
        name: "log_named_string",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "val",
                type: "uint256",
            },
        ],
        name: "log_named_uint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        name: "log_string",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "log_uint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "logs",
        type: "event",
    },
    {
        inputs: [],
        name: "IS_TEST",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "failed",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "initCallData",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "setUp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "testCanExecuteCallAndWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "testFailExecuteCallAndWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "testFailExecuteCallAndWithdrawFromNonOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "testFailExecuteCallAndWithdrawMultiple",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60806040526000805460ff1916600117905534801561001d57600080fd5b506130778061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806394e9a90f1161005b57806394e9a90f146100af57806395c27d33146100b7578063ba414fa6146100bf578063fa7626d4146100db57600080fd5b80630a9254e41461008d5780631534faf61461009757806387786dda1461009f5780638a7319f1146100a7575b600080fd5b6100956100e8565b005b610095610396565b610095610459565b6100956104fc565b61009561092f565b610095610d00565b6100c76111a6565b604051901515815260200160405180910390f35b6000546100c79060ff1681565b6100f0611306565b600380547fffffffffffffffffffffffff000000000000000000000000000000000000000016735a9fd7c39a6c488e715437d7b1f3c823d5596ed117905560405161013a906116ea565b604051809103906000f080158015610156573d6000803e3d6000fd5b50600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905560408051600180825281830190925260009160208083019080368337019050509050631458d7ad60e01b816000815181106101d9576101d9611873565b7fffffffff0000000000000000000000000000000000000000000000000000000092909216602092830291909101909101526040517f06447d5600000000000000000000000000000000000000000000000000000000815273cb1e9fa11edd27098a6b2ff23cb6b79183ccf8ee6004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d906306447d5690602401600060405180830381600087803b15801561028457600080fd5b505af1158015610298573d6000803e3d6000fd5b50506003546004546102c6935073ffffffffffffffffffffffffffffffffffffffff91821692501683611546565b604080517f90c5013b0000000000000000000000000000000000000000000000000000000081529051737109709ecfa91a80626ff3989d68f67f5b1dd12d916390c5013b91600480830192600092919082900301818387803b15801561032b57600080fd5b505af115801561033f573d6000803e3d6000fd5b5050600354600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911790555061039390506104fc565b50565b600480546040517f1458d7ad00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911691631458d7ad9161042591733db00d1334b5fadd2a897d8a702cdcbb6f159d87916002917360bb3d364b765c497c8ce50ae0ae3f0882c5bd05918491680506f343c77630edd291016118f5565b600060405180830381600087803b15801561043f57600080fd5b505af1158015610453573d6000803e3d6000fd5b50505050565b600480546040517f1458d7ad00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911691631458d7ad91610425917388dcdc47d2f83a99cf0000fdf667a468bb958a78916002917360bb3d364b765c497c8ce50ae0ae3f0882c5bd0591733db00d1334b5fadd2a897d8a702cdcbb6f159d8791680506f343c77630edd291016118f5565b60006040518060a0016040528060628152602001612fe06062913960408051600480825260a0820190925291925060009190816020015b6060815260200190600190039081610533579050509050604051806080016040528060418152602001612f9f604191398160008151811061057657610576611873565b6020026020010181905250604051806080016040528060418152602001612f5e60419139816001815181106105ad576105ad611873565b6020026020010181905250604051806080016040528060418152602001612f1d60419139816002815181106105e4576105e4611873565b6020026020010181905250604051806080016040528060418152602001612edc604191398160038151811061061b5761061b611873565b602090810291909101015260408051600480825260a082019092526000918160200160208202803683370190505090507398e9d288743839e96a8005a6b51c770bbf7788c08160008151811061067357610673611873565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050739a66644084108a1bc23a9ccd50d6d63e53098db6816001815181106106d5576106d5611873565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505073bfa2f68bf9ad60dc3cfb1cef04730eb7fa2514248160028151811061073757610737611873565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505073d10c833f4305e1053a64bc738c550381f48104ca8160038151811061079957610799611873565b73ffffffffffffffffffffffffffffffffffffffff9290921660209283029190910182015260408051600480825260a0820190925260009290919082016080803683370190505090506a7c15da650cdcf7084000008160008151811061080157610801611873565b6020026020010181815250506a7c15da650cdcf7084000008160018151811061082c5761082c611873565b6020026020010181815250506a7c15da650cdcf7084000008160028151811061085757610857611873565b6020026020010181815250506a7c15da650cdcf7084000008160038151811061088257610882611873565b602002602001018181525050838383836040516024016108a59493929190611aef565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa21a9280000000000000000000000000000000000000000000000000000000001790526002906109289082611bed565b5050505050565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152733db00d1334b5fadd2a897d8a702cdcbb6f159d8760048201527360bb3d364b765c497c8ce50ae0ae3f0882c5bd059060009082906370a0823190602401602060405180830381865afa1580156109b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d49190611d07565b6040517f06447d5600000000000000000000000000000000000000000000000000000000815273cb1e9fa11edd27098a6b2ff23cb6b79183ccf8ee6004820152909150737109709ecfa91a80626ff3989d68f67f5b1dd12d906306447d5690602401600060405180830381600087803b158015610a5057600080fd5b505af1158015610a64573d6000803e3d6000fd5b50506040517f4049ddd200000000000000000000000000000000000000000000000000000000815260896004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9250634049ddd29150602401600060405180830381600087803b158015610ace57600080fd5b505af1158015610ae2573d6000803e3d6000fd5b5050600480546040517f1458d7ad00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169350631458d7ad9250610b89917388dcdc47d2f83a99cf0000fdf667a468bb958a78916002917360bb3d364b765c497c8ce50ae0ae3f0882c5bd0591733db00d1334b5fadd2a897d8a702cdcbb6f159d8791680506f343c77630edd291016118f5565b600060405180830381600087803b158015610ba357600080fd5b505af1158015610bb7573d6000803e3d6000fd5b5050604080517f90c5013b0000000000000000000000000000000000000000000000000000000081529051737109709ecfa91a80626ff3989d68f67f5b1dd12d93506390c5013b9250600480830192600092919082900301818387803b158015610c2057600080fd5b505af1158015610c34573d6000803e3d6000fd5b50505050680506f343c77630edd281610c4d9190611d20565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152733db00d1334b5fadd2a897d8a702cdcbb6f159d87600482015273ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610ccb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cef9190611d07565b14610cfc57610cfc611d60565b5050565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152733db00d1334b5fadd2a897d8a702cdcbb6f159d8760048201527360bb3d364b765c497c8ce50ae0ae3f0882c5bd059060009082906370a0823190602401602060405180830381865afa158015610d81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da59190611d07565b6040517f06447d5600000000000000000000000000000000000000000000000000000000815273cb1e9fa11edd27098a6b2ff23cb6b79183ccf8ee6004820152909150737109709ecfa91a80626ff3989d68f67f5b1dd12d906306447d5690602401600060405180830381600087803b158015610e2157600080fd5b505af1158015610e35573d6000803e3d6000fd5b50506040517f4049ddd200000000000000000000000000000000000000000000000000000000815260896004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9250634049ddd29150602401600060405180830381600087803b158015610e9f57600080fd5b505af1158015610eb3573d6000803e3d6000fd5b5050600480546040517f1458d7ad00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169350631458d7ad9250610f5a917388dcdc47d2f83a99cf0000fdf667a468bb958a78916002917360bb3d364b765c497c8ce50ae0ae3f0882c5bd0591733db00d1334b5fadd2a897d8a702cdcbb6f159d8791680506f343c77630edd291016118f5565b600060405180830381600087803b158015610f7457600080fd5b505af1158015610f88573d6000803e3d6000fd5b50505050680506f343c77630edd281610fa19190611d20565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152733db00d1334b5fadd2a897d8a702cdcbb6f159d87600482015273ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561101f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110439190611d07565b1461105057611050611d60565b600480546040517f1458d7ad00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911691631458d7ad916110f3917388dcdc47d2f83a99cf0000fdf667a468bb958a78916002917360bb3d364b765c497c8ce50ae0ae3f0882c5bd0591733db00d1334b5fadd2a897d8a702cdcbb6f159d8791680506f343c77630edd291016118f5565b600060405180830381600087803b15801561110d57600080fd5b505af1158015611121573d6000803e3d6000fd5b5050604080517f90c5013b0000000000000000000000000000000000000000000000000000000081529051737109709ecfa91a80626ff3989d68f67f5b1dd12d93506390c5013b9250600480830192600092919082900301818387803b15801561118a57600080fd5b505af115801561119e573d6000803e3d6000fd5b505050505050565b60008054610100900460ff16156111c65750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156113015760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c656400000000000000000000000000000000000000000000000000008284015282518083038401815260608301909352600092909161126b917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001611d8f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526112a391611dd7565b6000604051808303816000865af19150503d80600081146112e0576040519150601f19603f3d011682016040523d82523d6000602084013e6112e5565b606091505b50915050808060200190518101906112fd9190611df3565b9150505b919050565b6040517ff877cb1900000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4554485f4e4f44455f5552495f504f4c59474f4e0000000000000000000000006044820152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f877cb19906064016000604051808303816000875af11580156113a1573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526113e79190810190611e1c565b6040517fc1978d1f00000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f504f4c59474f4e5f464f524b5f4e554d424552000000000000000000000000006044820152909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f906064016020604051808303816000875af1158015611485573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a99190611d07565b6040517f71ee464d000000000000000000000000000000000000000000000000000000008152909150737109709ecfa91a80626ff3989d68f67f5b1dd12d906371ee464d906114fe9085908590600401611edc565b6020604051808303816000875af115801561151d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115419190611d07565b505050565b6040805160608101825273ffffffffffffffffffffffffffffffffffffffff8481168252600060208301818152938301859052600180548082018255915282517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf66002928302018054919093167fffffffffffffffffffffffff00000000000000000000000000000000000000008216811784559451939492939284927fffffffffffffffffffffff00000000000000000000000000000000000000000090921617907401000000000000000000000000000000000000000090849081111561163157611631611efe565b0217905550604082015180516116519160018401916020909101906116f7565b50506040517f1f931c1c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169150631f931c1c906116aa90600190600090600401611f2d565b600060405180830381600087803b1580156116c457600080fd5b505af11580156116d8573d6000803e3d6000fd5b505050506001600061154191906117a3565b610b8a8061235283390190565b828054828255906000526020600020906007016008900481019282156117935791602002820160005b8382111561176157835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302611720565b80156117915782816101000a81549063ffffffff0219169055600401602081600301049283019260010302611761565b505b5061179f9291506117c4565b5090565b508054600082556002029060005260206000209081019061039391906117d9565b5b8082111561179f57600081556001016117c5565b8082111561179f5780547fffffffffffffffffffffff0000000000000000000000000000000000000000001681556000611816600183018261181f565b506002016117d9565b50805460008255600701600890049060005260206000209081019061039391906117c4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c908216806118b657607f821691505b6020821081036118ef577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b73ffffffffffffffffffffffffffffffffffffffff861681526000602060a08184015260008754611925816118a2565b8060a087015260c0600180841660008114611947576001811461197f576119ad565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008516838a01528284151560051b8a010195506119ad565b8c6000528660002060005b858110156119a55781548b820186015290830190880161198a565b8a0184019650505b5050505073ffffffffffffffffffffffffffffffffffffffff881660408601525091506119d79050565b73ffffffffffffffffffffffffffffffffffffffff939093166060820152608001529392505050565b60005b83811015611a1b578181015183820152602001611a03565b50506000910152565b60008151808452611a3c816020860160208601611a00565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501945080840160005b83811015611ab457815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101611a82565b509495945050505050565b600081518084526020808501945080840160005b83811015611ab457815187529582019590820190600101611ad3565b608081526000611b026080830187611a24565b6020838203818501528187518084528284019150828160051b850101838a0160005b83811015611b70577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0878403018552611b5e838351611a24565b94860194925090850190600101611b24565b50508681036040880152611b84818a611a6e565b9450505050508281036060840152611b9c8185611abf565b979650505050505050565b601f82111561154157600081815260208120601f850160051c81016020861015611bce5750805b601f850160051c820191505b8181101561119e57828155600101611bda565b815167ffffffffffffffff811115611c0757611c07611844565b611c1b81611c1584546118a2565b84611ba7565b602080601f831160018114611c6e5760008415611c385750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b17855561119e565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015611cbb57888601518255948401946001909101908401611c9c565b5085821015611cf757878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215611d1957600080fd5b5051919050565b80820180821115611d5a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7fffffffff000000000000000000000000000000000000000000000000000000008316815260008251611dc9816004850160208701611a00565b919091016004019392505050565b60008251611de9818460208701611a00565b9190910192915050565b600060208284031215611e0557600080fd5b81518015158114611e1557600080fd5b9392505050565b600060208284031215611e2e57600080fd5b815167ffffffffffffffff80821115611e4657600080fd5b818401915084601f830112611e5a57600080fd5b815181811115611e6c57611e6c611844565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611eb257611eb2611844565b81604052828152876020848701011115611ecb57600080fd5b611b9c836020830160208801611a00565b604081526000611eef6040830185611a24565b90508260208301529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60608152600060608201845480825260808401915060808160051b8501018660005260208060002060005b8481101561231f578784037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80018652815473ffffffffffffffffffffffffffffffffffffffff81168552606085019060a01c60ff1660038110611fe4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b858501526060604086015260018381018054808452600091825260208083209401905b80600784011015612138578454612042838260e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff0000000000000000000000000000000000000000000000000000000060c082901b81168a85015260a082901b81166040850152608082901b811660608501526120b960808501828460601b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b6120ec60a08501828460401b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff00000000000000000000000000000000000000000000000000000000828b1b8216811660c086015291161660e0830152938301936008929092019161010090910190612007565b9354938083101561217a57612171828660e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b91830191908701905b808310156121b45760c085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156121ee5760a085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561222857608085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561226257606085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561229c57604085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156122d45784881b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015612306577fffffffff0000000000000000000000000000000000000000000000000000000085168252908701905b5098860198965050506002929092019150600101611f58565b505073ffffffffffffffffffffffffffffffffffffffff87169086015284810360408601526000815260208101611b9c56fe608060405234801561001057600080fd5b50610b6a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631458d7ad1461003b578063d9caed1214610050575b600080fd5b61004e610049366004610966565b610063565b005b61004e61005e366004610a17565b6101a6565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100a9576100a96101fc565b6000863b1515806100e6576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff16878760405161010d929190610a58565b6000604051808303816000865af19150503d806000811461014a576040519150601f19603f3d011682016040523d82523d6000602084013e61014f565b606091505b5090925050811561016a5761016585858561029c565b61019c565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101ec576101ec6101fc565b6101f783838361029c565b505050565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610299576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b600073ffffffffffffffffffffffffffffffffffffffff8316156102c057826102c2565b335b90506102cf848284610328565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff83161561034f576101f7838383610359565b6101f78282610493565b73ffffffffffffffffffffffffffffffffffffffff83166103a6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610413573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104379190610a68565b905080821115610482576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61048d8484846105bd565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166104e0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610523576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610479565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461057d576040519150601f19603f3d011682016040523d82523d6000602084013e610582565b606091505b50509050806101f7576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401526101f792869291600091610688918516908490610732565b8051909150156101f757808060200190518101906106a69190610a81565b6101f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610479565b6060610741848460008561074b565b90505b9392505050565b6060824710156107dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610479565b73ffffffffffffffffffffffffffffffffffffffff85163b61085b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610479565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108849190610ac7565b60006040518083038185875af1925050503d80600081146108c1576040519150601f19603f3d011682016040523d82523d6000602084013e6108c6565b606091505b50915091506108d68282866108e1565b979650505050505050565b606083156108f0575081610744565b8251156109005782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104799190610ae3565b73ffffffffffffffffffffffffffffffffffffffff8116811461029957600080fd5b803561096181610934565b919050565b60008060008060008060a0878903121561097f57600080fd5b863561098a81610934565b9550602087013567ffffffffffffffff808211156109a757600080fd5b818901915089601f8301126109bb57600080fd5b8135818111156109ca57600080fd5b8a60208285010111156109dc57600080fd5b60208301975080965050505060408701356109f681610934565b9250610a0460608801610956565b9150608087013590509295509295509295565b600080600060608486031215610a2c57600080fd5b8335610a3781610934565b92506020840135610a4781610934565b929592945050506040919091013590565b8183823760009101908152919050565b600060208284031215610a7a57600080fd5b5051919050565b600060208284031215610a9357600080fd5b8151801515811461074457600080fd5b60005b83811015610abe578181015183820152602001610aa6565b50506000910152565b60008251610ad9818460208701610aa3565b9190910192915050565b6020815260008251806020840152610b02816040850160208701610aa3565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220cd47441b0be65efda1ffe46c315da55e633e5b0c91f9b392a44991036195c39164736f6c634300081100338ecfc94c4687adc679807982e501651261e74c981bd4287118220eb57a0175a87e248db2e5c0f1aae531381e2c2080306df24bf0cbf45e55d6c939555b7e6afd1cdffdb895ffbef44c36d68c6e0bb7ce9b2f30e93860ede78a7cef2109afa87f96764b475a60da121dfdd7b68e692d1c6dbfa0719b01caa5faa2fbdd0c8d4591e61ce0ac807bf17703129299922d99ace508e5a1313b7932cbe8e44c1ad0c9a914fc0696a324543af4ad0a3efec2d5fdb276d38b2e633a4ba30aba1fdff8b7013ff01c12f92050a88caaa23ad57ee86ff12534205c157e5ce7ca5cd0b4db91c4d041103ce5063cb692651482738a0663be37b4ed776ab5879ca717a349cdb24d68d11c1c08890110fbf3be90061a145a9fd7c39a6c488e715437d7b1f3c823d5596ed1221460bb3d364b765c497c8ce50ae0ae3f0882c5bd052a090506f343c77630edd2322042b99ab301f0bf5e0bd9b58d16266899ae2402a1e7cb0913903c7f876b4bce5fa264697066735822122068112da226b5162be863aeb283a05aa298f9d74612c1eb14eeffc2a7d8f9a1ab64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var CBridgeRefundTestPolygon__factory = /** @class */ (function (_super) {
    __extends(CBridgeRefundTestPolygon__factory, _super);
    function CBridgeRefundTestPolygon__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    CBridgeRefundTestPolygon__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    CBridgeRefundTestPolygon__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    CBridgeRefundTestPolygon__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    CBridgeRefundTestPolygon__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    CBridgeRefundTestPolygon__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    CBridgeRefundTestPolygon__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    CBridgeRefundTestPolygon__factory.bytecode = _bytecode;
    CBridgeRefundTestPolygon__factory.abi = _abi;
    return CBridgeRefundTestPolygon__factory;
}(ethers_1.ContractFactory));
exports.CBridgeRefundTestPolygon__factory = CBridgeRefundTestPolygon__factory;