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
exports.DeployScript__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "IS_SCRIPT",
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
        name: "run",
        outputs: [
            {
                internalType: "contract GetGasFacet",
                name: "deployed",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "constructorArgs",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "vm",
        outputs: [
            {
                internalType: "contract Vm",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252600b81526a11d95d11d85cd19858d95d60aa1b60208201529051634bca482160e11b8152600080516020620033ed8339815191529063979490429062000090906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d691906200057d565b60018190556040516001625e79b760e01b031981526004810191909152600080516020620033ed8339815191529063ffa18649906024016020604051808303816000875af11580156200012d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000153919062000597565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f414444524553530000000000000000006044820152600090600080516020620033ed8339815191529063350d56bf906064016020604051808303816000875af1158015620001f1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000217919062000597565b60405163f877cb1960e01b815260206004820152600a6024820152691111541313d654d0531560b21b6044820152909150600090600080516020620033ed8339815191529063f877cb19906064016000604051808303816000875af115801562000285573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002af919081019062000605565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af11580156200031b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000345919081019062000605565b6006906200035490826200074c565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b6044820152600080516020620033ed8339815191529063f877cb19906064016000604051808303816000875af1158015620003ba573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003e4919081019062000605565b600790620003f390826200074c565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b6044820152600080516020620033ed8339815191529063f877cb19906064016000604051808303816000875af11580156200045d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000487919081019062000605565b6008906200049690826200074c565b508083604051602001620004ac92919062000818565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa1580156200052d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000553919062000597565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200084b915050565b6000602082840312156200059057600080fd5b5051919050565b600060208284031215620005aa57600080fd5b81516001600160a01b0381168114620005c257600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620005fc578181015183820152602001620005e2565b50506000910152565b6000602082840312156200061857600080fd5b81516001600160401b03808211156200063057600080fd5b818401915084601f8301126200064557600080fd5b8151818111156200065a576200065a620005c9565b604051601f8201601f19908116603f01168101908382118183101715620006855762000685620005c9565b816040528281528760208487010111156200069f57600080fd5b620006b2836020830160208801620005df565b979650505050505050565b600181811c90821680620006d257607f821691505b602082108103620006f357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074757600081815260208120601f850160051c81016020861015620007225750805b601f850160051c820191505b8181101562000743578281556001016200072e565b5050505b505050565b81516001600160401b03811115620007685762000768620005c9565b6200078081620007798454620006bd565b84620006f9565b602080601f831160018114620007b857600084156200079f5750858301515b600019600386901b1c1916600185901b17855562000743565b600085815260208120601f198616915b82811015620007e957888601518255948401946001909101908401620007c8565b5085821015620008085787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600083516200082c818460208801620005df565b83519083019062000842818360208801620005df565b01949350505050565b612b92806200085b6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf47146100a1575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100936100be565b604051610082929190610345565b6000546100ae9060ff1681565b6040519015158152602001610082565b6001546040517fce817d470000000000000000000000000000000000000000000000000000000081526004810191909152600090606090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561012e57600080fd5b505af1158015610142573d6000803e3d6000fd5b5050505061016860035473ffffffffffffffffffffffffffffffffffffffff163b151590565b1561019c57505060035460408051602081019091526000815273ffffffffffffffffffffffffffffffffffffffff90911691565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a91906101d1602082016102d4565b6020820181038252601f19601f820116604052506040518363ffffffff1660e01b815260040161020292919061037c565b6020604051808303816000875af1158015610221573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102459190610395565b91507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156102b857600080fd5b505af11580156102cc573d6000803e3d6000fd5b505050509091565b61278a806103d383390190565b6000815180845260005b81811015610307576020818501810151868301820152016102eb565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600061037460408301846102e1565b949350505050565b82815260406020820152600061037460408301846102e1565b6000602082840312156103a757600080fd5b815173ffffffffffffffffffffffffffffffffffffffff811681146103cb57600080fd5b939250505056fe608060405234801561001057600080fd5b5061276a806100206000396000f3fe6080604052600436106100295760003560e01c80633461c1441461002e578063fd750f8414610043575b600080fd5b61004161003c3660046121a2565b610056565b005b61004161005136600461223c565b610259565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476122a0565b905085806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61020b88600001518960c00151898933610453565b60c08901526102198861059b565b50479050600082821161022d576000610237565b61023783836122a0565b9050801561024b5761024b600085836107d6565b505060009092555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102d4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102e534476122a0565b90508380610100015115610325576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b846103488160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561037f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103bd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103fa576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040c86608001518760c0015161080c565b6104158661059b565b504790506000828211610429576000610433565b61043383836122a0565b9050801561044757610447600085836107d6565b50506000909255505050565b60008280820361048f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561049e6001856122a0565b8181106104ad576104ad6122b3565b90506020028101906104bf91906122e2565b6104d0906080810190606001612320565b905060006104dd82610982565b905073ffffffffffffffffffffffffffffffffffffffff82166105075761050434826122a0565b90505b60006105138888610a3b565b905061051f8888610b47565b61052c8a89898985610ba8565b60008261053885610982565b61054291906122a0565b90508981101561058d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60007fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da1604080518082018252601581527f534552564943455f4645455f434f4c4c4543544f520000000000000000000000602082015290516105fd919061235f565b90815260405190819003602001902054608083015173ffffffffffffffffffffffffffffffffffffffff909116915061064a9073ffffffffffffffffffffffffffffffffffffffff161590565b156106e75760c082015160a08301516040517fdef656690000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff91821660248201529083169163def65669916044016000604051808303818588803b1580156106c957600080fd5b505af11580156106dd573d6000803e3d6000fd5b505050505061079b565b6106fa8260800151828460c00151610f5a565b608082015160c083015160a08401516040517f04204ceb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152602481019290925282166044820152908216906304204ceb90606401600060405180830381600087803b15801561078257600080fd5b505af1158015610796573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516107ca91906123bb565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610802576107fd8383836110a5565b505050565b6107fd82826111d4565b73ffffffffffffffffffffffffffffffffffffffff82166108655780341015610861576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b8060000361089f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561090c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093091906124ce565b905081811015610976576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610584565b6107fd833330856112fe565b600073ffffffffffffffffffffffffffffffffffffffff821615610a33576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2e91906124ce565b610a35565b475b92915050565b60608160008167ffffffffffffffff811115610a5957610a59611f11565b604051908082528060200260200182016040528015610a82578160200160208202803683370190505b5090506000805b83811015610b3c57868682818110610aa357610aa36122b3565b9050602002810190610ab591906122e2565b610ac6906080810190606001612320565b9150610ad182610982565b838281518110610ae357610ae36122b3565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b345734838281518110610b1c57610b1c6122b3565b60200260200101818151610b3091906122a0565b9052505b600101610a89565b509095945050505050565b60005b818110156107fd576000838383818110610b6657610b666122b3565b9050602002810190610b7891906122e2565b610b81906124e7565b90508060c0015115610b9f57610b9f8160400151826080015161080c565b50600101610b4a565b838383838260018114610e755760008585610bc46001856122a0565b818110610bd357610bd36122b3565b9050602002810190610be591906122e2565b610bf6906080810190606001612320565b9050600089815b81811015610da157368d8d83818110610c1857610c186122b3565b9050602002810190610c2a91906122e2565b9050610c59610c3f6060830160408401612320565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610cbc5750610cbc610c726040830160208401612320565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610cd35750610cd3610c726020830183612320565b8015610d585750610d58610cea60a083018361258c565b610cf9916004916000916125f8565b610d0291612622565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610d8e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d988f82611518565b50600101610bfd565b505060005b610db16001856122a0565b811015610e6d576000888883818110610dcc57610dcc6122b3565b9050602002810190610dde91906122e2565b610def906080810190606001612320565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e6457858281518110610e3657610e366122b3565b6020026020010151610e4782610982565b610e5191906122a0565b92508215610e6457610e648188856107d6565b50600101610da6565b505050610f4e565b8760005b81811015610f4b57368b8b83818110610e9457610e946122b3565b9050602002810190610ea691906122e2565b9050610ebb610c3f6060830160408401612320565b80610ed45750610ed4610c726040830160208401612320565b8015610eeb5750610eeb610c726020830183612320565b8015610f025750610f02610cea60a083018361258c565b610f38576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f428d82611518565b50600101610e79565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f7a57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fc7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa15801561103d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106191906124ce565b90508181101561109f5761109f848461109a847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6122a0565b61182e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166110f2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561115f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061118391906124ce565b9050808211156111c9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610584565b61109f8484846119aa565b73ffffffffffffffffffffffffffffffffffffffff8216611221576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611264576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610584565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146112be576040519150601f19603f3d011682016040523d82523d6000602084013e6112c3565b606091505b50509050806107fd576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661134b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611398576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611409573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142d91906124ce565b905061143b82868686611a00565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156114ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114cf91906124ce565b6114d991906122a0565b14611510576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61152e6115286020830183612320565b3b151590565b611564576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036115a4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006115b9610c3f6060850160408601612320565b6115c45760006115ca565b82608001355b905060006115e66115e16060860160408701612320565b610982565b905060006115fd6115e16080870160608801612320565b9050826000036116345761163461161a6060870160408801612320565b61162a6040880160208901612320565b8760800135610f5a565b846080013582101561167f576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610584565b60008061168f6020880188612320565b73ffffffffffffffffffffffffffffffffffffffff16856116b360a08a018a61258c565b6040516116c192919061266a565b60006040518083038185875af1925050503d80600081146116fe576040519150601f19603f3d011682016040523d82523d6000602084013e611703565b606091505b50915091508161174e57600061171882611a5e565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610584919061267a565b60006117636115e160808a0160608b01612320565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961179460208b018b612320565b6117a460608c0160408d01612320565b6117b460808d0160608e01612320565b8c608001358987116117c657866117d0565b6117d08a886122a0565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156118a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118c991906124ce565b6118d3919061268d565b60405173ffffffffffffffffffffffffffffffffffffffff851660248201526044810182905290915061109f9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611adc565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107fd9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611928565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261109f9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611928565b6060604482511015611aa357505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611abf6004808551611ab791906122a0565b859190611be8565b905080806020019051810190611ad591906126a0565b9392505050565b6000611b3e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d029092919063ffffffff16565b8051909150156107fd5780806020019051810190611b5c9190612717565b6107fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610584565b606081611bf681601f61268d565b1015611c2e576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c38828461268d565b84511015611c72576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611c915760405191506000825260208201604052611cf9565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611cca578051835260209283019201611cb2565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611d118484600085611d19565b949350505050565b606082471015611dab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610584565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611dd4919061235f565b60006040518083038185875af1925050503d8060008114611e11576040519150601f19603f3d011682016040523d82523d6000602084013e611e16565b606091505b5091509150611e2787838387611e32565b979650505050505050565b60608315611ec8578251600003611ec15773ffffffffffffffffffffffffffffffffffffffff85163b611ec1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610584565b5081611d11565b611d118383815115611edd5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610584919061267a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f6457611f64611f11565b60405290565b60405160e0810167ffffffffffffffff81118282101715611f6457611f64611f11565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611fd457611fd4611f11565b604052919050565b600067ffffffffffffffff821115611ff657611ff6611f11565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261203357600080fd5b813561204661204182611fdc565b611f8d565b81815284602083860101111561205b57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461209c57600080fd5b919050565b80151581146120af57600080fd5b50565b803561209c816120a1565b600061014082840312156120d057600080fd5b6120d8611f40565b905081358152602082013567ffffffffffffffff808211156120f957600080fd5b61210585838601612022565b6020840152604084013591508082111561211e57600080fd5b5061212b84828501612022565b60408301525061213d60608301612078565b606082015261214e60808301612078565b608082015261215f60a08301612078565b60a082015260c082013560c082015260e082013560e08201526101006121868184016120b2565b908201526101206121988382016120b2565b9082015292915050565b6000806000604084860312156121b757600080fd5b833567ffffffffffffffff808211156121cf57600080fd5b6121db878388016120bd565b945060208601359150808211156121f157600080fd5b818601915086601f83011261220557600080fd5b81358181111561221457600080fd5b8760208260051b850101111561222957600080fd5b6020830194508093505050509250925092565b60006020828403121561224e57600080fd5b813567ffffffffffffffff81111561226557600080fd5b611d11848285016120bd565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a3557610a35612271565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261231657600080fd5b9190910192915050565b60006020828403121561233257600080fd5b611ad582612078565b60005b8381101561235657818101518382015260200161233e565b50506000910152565b6000825161231681846020870161233b565b6000815180845261238981602086016020860161233b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526123e4610160850183612371565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261241f8382612371565b9250506060850151612449608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124bc8187018315159052565b90950151151593019290925250919050565b6000602082840312156124e057600080fd5b5051919050565b600060e082360312156124f957600080fd5b612501611f6a565b61250a83612078565b815261251860208401612078565b602082015261252960408401612078565b604082015261253a60608401612078565b60608201526080830135608082015260a083013567ffffffffffffffff81111561256357600080fd5b61256f36828601612022565b60a08301525061258160c084016120b2565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125c157600080fd5b83018035915067ffffffffffffffff8211156125dc57600080fd5b6020019150368190038213156125f157600080fd5b9250929050565b6000808585111561260857600080fd5b8386111561261557600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126625780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611ad56020830184612371565b80820180821115610a3557610a35612271565b6000602082840312156126b257600080fd5b815167ffffffffffffffff8111156126c957600080fd5b8201601f810184136126da57600080fd5b80516126e861204182611fdc565b8181528560208385010111156126fd57600080fd5b61270e82602083016020860161233b565b95945050505050565b60006020828403121561272957600080fd5b8151611ad5816120a156fea264697066735822122039a4eea55f74ed486a06d644d3a8c500730dd9961551ba93928b45cdf5c084bc64736f6c63430008110033a264697066735822122051fd4c405b826b3aa5651c6d229df01d0c71f1ddb0e70a6a1d190e3b18f1461e64736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
var isSuperArgs = function (xs) { return xs.length > 1; };
var DeployScript__factory = /** @class */ (function (_super) {
    __extends(DeployScript__factory, _super);
    function DeployScript__factory() {
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
    DeployScript__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    DeployScript__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    DeployScript__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    DeployScript__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    DeployScript__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    DeployScript__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    DeployScript__factory.bytecode = _bytecode;
    DeployScript__factory.abi = _abi;
    return DeployScript__factory;
}(ethers_1.ContractFactory));
exports.DeployScript__factory = DeployScript__factory;
