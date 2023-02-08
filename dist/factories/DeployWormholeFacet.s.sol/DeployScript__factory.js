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
                internalType: "contract WormholeFacet",
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
var _bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252600d81526c15dbdc9b5a1bdb19519858d95d609a1b60208201529051634bca482160e11b81526000805160206200433b8339815191529063979490429062000092906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d8919062000581565b60018190556040516001625e79b760e01b0319815260048101919091526000805160206200433b8339815191529063ffa18649906024016020604051808303816000875af11580156200012f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015591906200059b565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f4144445245535300000000000000000060448201526000906000805160206200433b8339815191529063350d56bf906064016020604051808303816000875af1158015620001f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021991906200059b565b60405163f877cb1960e01b81529091506000906000805160206200433b8339815191529063f877cb1990620002699060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af115801562000289573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002b3919081019062000609565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af11580156200031f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000349919081019062000609565b60069062000358908262000750565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b60448201526000805160206200433b8339815191529063f877cb19906064016000604051808303816000875af1158015620003be573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003e8919081019062000609565b600790620003f7908262000750565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b60448201526000805160206200433b8339815191529063f877cb19906064016000604051808303816000875af115801562000461573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200048b919081019062000609565b6008906200049a908262000750565b508083604051602001620004b09291906200081c565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa15801562000531573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200055791906200059b565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200084f915050565b6000602082840312156200059457600080fd5b5051919050565b600060208284031215620005ae57600080fd5b81516001600160a01b0381168114620005c657600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000600578181015183820152602001620005e6565b50506000910152565b6000602082840312156200061c57600080fd5b81516001600160401b03808211156200063457600080fd5b818401915084601f8301126200064957600080fd5b8151818111156200065e576200065e620005cd565b604051601f8201601f19908116603f01168101908382118183101715620006895762000689620005cd565b81604052828152876020848701011115620006a357600080fd5b620006b6836020830160208801620005e3565b979650505050505050565b600181811c90821680620006d657607f821691505b602082108103620006f757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074b57600081815260208120601f850160051c81016020861015620007265750805b601f850160051c820191505b81811015620007475782815560010162000732565b5050505b505050565b81516001600160401b038111156200076c576200076c620005cd565b62000784816200077d8454620006c1565b84620006fd565b602080601f831160018114620007bc5760008415620007a35750858301515b600019600386901b1c1916600185901b17855562000747565b600085815260208120601f198616915b82811015620007ed57888601518255948401946001909101908401620007cc565b50858210156200080c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000835162000830818460208801620005e3565b83519083019062000846818360208801620005e3565b01949350505050565b613adc806200085f6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf47146100a1575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100936100be565b6040516100829291906106a5565b6000546100ae9060ff1681565b6040519015158152602001610082565b6000606060007f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff1663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801561013a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610180919081019061079d565b60405160200161019091906107e6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb1190610211908590600401610827565b6000604051808303816000875af1158015610230573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610276919081019061079d565b905060006102c4600760405160200161028f919061083a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528390610556565b6040805173ffffffffffffffffffffffffffffffffffffffff8316602082015291925001604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152908290526001547fce817d4700000000000000000000000000000000000000000000000000000000835260048301529450737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561037d57600080fd5b505af1158015610391573d6000803e3d6000fd5b505050506103b760035473ffffffffffffffffffffffffffffffffffffffff163b151590565b156103de57505060035473ffffffffffffffffffffffffffffffffffffffff169391925050565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a91906104136020820161062a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f9091011660408190526104559190899060200161093f565b6040516020818303038152906040526040518363ffffffff1660e01b815260040161048192919061096e565b6020604051808303816000875af11580156104a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c491906109ac565b94507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561053757600080fd5b505af115801561054b573d6000803e3d6000fd5b505050505050509091565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef1906105ab90869086906004016109c9565b6000604051808303816000875af11580156105ca573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610610919081019061079d565b80602001905181019061062391906109ac565b9392505050565b6130af806109f883390190565b60005b8381101561065257818101518382015260200161063a565b50506000910152565b60008151808452610673816020860160208601610637565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006106d4604083018461065b565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff80841115610726576107266106dc565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561076c5761076c6106dc565b8160405280935085815286868601111561078557600080fd5b610793866020830187610637565b5050509392505050565b6000602082840312156107af57600080fd5b815167ffffffffffffffff8111156107c657600080fd5b8201601f810184136107d757600080fd5b6106d48482516020840161070b565b600082516107f8818460208701610637565b7f2f636f6e6669672f776f726d686f6c652e6a736f6e0000000000000000000000920191825250601501919050565b602081526000610623602083018461065b565b7f2e726f75746572732e00000000000000000000000000000000000000000000008152600060096000845481600182811c91508083168061087c57607f831692505b602080841082036108b4577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b8180156108c857600181146108ff57610930565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008616888b01528785151586028b01019650610930565b60008b81526020902060005b868110156109265781548c82018b015290850190830161090b565b505087858b010196505b50949998505050505050505050565b60008351610951818460208801610637565b835190830190610965818360208801610637565b01949350505050565b8281526040602082015260006106d4604083018461065b565b73ffffffffffffffffffffffffffffffffffffffff811681146109a957600080fd5b50565b6000602082840312156109be57600080fd5b815161062381610987565b6040815260006109dc604083018561065b565b82810360208401526109ee818561065b565b9594505050505056fe60a06040523480156200001157600080fd5b50604051620030af380380620030af833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161300d620000a260003960008181610b7001528181610bd40152610ccf015261300d6000f3fe60806040526004361061005a5760003560e01c806365c958d41161004357806365c958d4146100a1578063ac3dcc95146100b4578063fbf88f03146100c757600080fd5b806313a5201b1461005f5780632290720414610081575b600080fd5b34801561006b57600080fd5b5061007f61007a3660046125d1565b6100e7565b005b34801561008d57600080fd5b5061007f61009c36600461265d565b61023c565b61007f6100af36600461292d565b6102d5565b61007f6100c2366004612973565b610511565b3480156100d357600080fd5b5061007f6100e23660046125d1565b610756565b6100ef6108cd565b7f7e906a0d60cb07599c0056400d4173f09da0e1b16416a2ae67013f2df575d4b4547f7e906a0d60cb07599c0056400d4173f09da0e1b16416a2ae67013f2df575d4b39060ff1661016c576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8160005b818110156101fc5784848281811061018a5761018a612a1f565b90506040020160200160208101906101a29190612a4e565b8360008787858181106101b7576101b7612a1f565b90506040020160000135815260200190815260200160002060006101000a81548161ffff021916908361ffff16021790555080806101f490612a98565b915050610170565b507f08872e189095d957ee9ef34bf3cc064dfdfff5d37a936bc928c3b3aab2500d7e848460405161022e929190612ad0565b60405180910390a150505050565b6102446108cd565b60007f7e906a0d60cb07599c0056400d4173f09da0e1b16416a2ae67013f2df575d4b360008481526020829052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff871690811790915590519293509185917f56465cf2b3a3cef7d0c3c0133292f4fded765d74b65b78ab526a3fa85351facb91a3505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610350576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103613447612b22565b905084806101000151156103a1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103df576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866104028160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610439576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610477576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104b4576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c688608001518960c00151610942565b6104d08888610ac2565b50479150600090508282116104e65760006104f0565b6104f08383612b22565b905080156105045761050460008583610e6d565b5050600090925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161058c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061059d3447612b22565b9050868061010001516105dc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561061a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861063d8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610674576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036106b2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106ef576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107048a600001518b60c001518b8b33610e9e565b60c08b01526107138a88610ac2565b5047915060009050828211610729576000610733565b6107338383612b22565b905080156107475761074760008583610e6d565b50506000909255505050505050565b61075e6108cd565b7f7e906a0d60cb07599c0056400d4173f09da0e1b16416a2ae67013f2df575d4b4547f7e906a0d60cb07599c0056400d4173f09da0e1b16416a2ae67013f2df575d4b39060ff16156107dc576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8160005b8181101561086c578484828181106107fa576107fa612a1f565b90506040020160200160208101906108129190612a4e565b83600087878581811061082757610827612a1f565b90506040020160000135815260200190815260200160002060006101000a81548161ffff021916908361ffff160217905550808061086490612a98565b9150506107e0565b50600182810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f7a7f93414e28b498e780e485402bc5944e6c5cb682751a0ed8be3f2fc1ec18af9061022e9086908690612ad0565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610940576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b73ffffffffffffffffffffffffffffffffffffffff821661099b5780341015610997576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036109d5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a669190612b35565b905081811015610ab1576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610abd83333085610fe1565b505050565b6000610ad18360e001516111fb565b90506000610ade466111fb565b90508161ffff16600003610b26578360e001516040517fa5dab5fe000000000000000000000000000000000000000000000000000000008152600401610aa891815260200190565b8061ffff16600003610b66576040517fa5dab5fe000000000000000000000000000000000000000000000000000000008152466004820152602401610aa8565b610b9984608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151611272565b608084015173ffffffffffffffffffffffffffffffffffffffff16610cae5760c084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690639981509f908486356020880135610c1360608a0160408b01612b4e565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815261ffff90941660048501526024840192909252604483015263ffffffff16606482015260840160206040518083038185885af1158015610c83573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610ca89190612b74565b50610db5565b608084015160c085015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691630f5287b0918587356020890135610d0e60608b0160408c01612b4e565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9096166004870152602486019490945261ffff90921660448501526064840152608483015263ffffffff1660a482015260c401600060405180830381600087803b158015610d9c57600080fd5b505af1158015610db0573d6000803e3d6000fd5b505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168460a0015173ffffffffffffffffffffffffffffffffffffffff1603610e3e5783516040518435815261ffff841691907f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161022e9190612c0c565b73ffffffffffffffffffffffffffffffffffffffff831615610e9457610abd8383836113bd565b610abd82826114ec565b600082808203610eda576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610ee9600185612b22565b818110610ef857610ef8612a1f565b9050602002810190610f0a9190612d1f565b610f1b906080810190606001612d5d565b90506000610f2882611616565b905073ffffffffffffffffffffffffffffffffffffffff8216610f5257610f4f3482612b22565b90505b6000610f5e88886116cf565b9050610f6a88886117db565b610f778a8989898561183c565b600082610f8385611616565b610f8d9190612b22565b905089811015610fd3576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610aa8565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841661102e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661107b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156110ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111109190612b35565b905061111e82868686611bee565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561118e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b29190612b35565b6111bc9190612b22565b146111f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60008181527f7e906a0d60cb07599c0056400d4173f09da0e1b16416a2ae67013f2df575d4b36020819052604082205461ffff1680830361126b576040517fa5dab5fe00000000000000000000000000000000000000000000000000000000815260048101859052602401610aa8565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff831661129257505050565b73ffffffffffffffffffffffffffffffffffffffff82166112df576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611355573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113799190612b35565b9050818110156113b7576113b784846113b2847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612b22565b611cca565b50505050565b73ffffffffffffffffffffffffffffffffffffffff831661140a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611477573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149b9190612b35565b9050808211156114e1576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610aa8565b6113b7848484611dc8565b73ffffffffffffffffffffffffffffffffffffffff8216611539576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561157c576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610aa8565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146115d6576040519150601f19603f3d011682016040523d82523d6000602084013e6115db565b606091505b5050905080610abd576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156116c7576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561169e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c29190612b35565b6116c9565b475b92915050565b60608160008167ffffffffffffffff8111156116ed576116ed612689565b604051908082528060200260200182016040528015611716578160200160208202803683370190505b5090506000805b838110156117d05786868281811061173757611737612a1f565b90506020028101906117499190612d1f565b61175a906080810190606001612d5d565b915061176582611616565b83828151811061177757611777612a1f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166117c857348382815181106117b0576117b0612a1f565b602002602001018181516117c49190612b22565b9052505b60010161171d565b509095945050505050565b60005b81811015610abd5760008383838181106117fa576117fa612a1f565b905060200281019061180c9190612d1f565b61181590612d78565b90508060c00151156118335761183381604001518260800151610942565b506001016117de565b838383838260018114611b095760008585611858600185612b22565b81811061186757611867612a1f565b90506020028101906118799190612d1f565b61188a906080810190606001612d5d565b9050600089815b81811015611a3557368d8d838181106118ac576118ac612a1f565b90506020028101906118be9190612d1f565b90506118ed6118d36060830160408401612d5d565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061195057506119506119066040830160208401612d5d565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561196757506119676119066020830183612d5d565b80156119ec57506119ec61197e60a0830183612e1d565b61198d91600491600091612e89565b61199691612eb3565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611a22576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611a2c8f82611e1e565b50600101611891565b505060005b611a45600185612b22565b811015611b01576000888883818110611a6057611a60612a1f565b9050602002810190611a729190612d1f565b611a83906080810190606001612d5d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611af857858281518110611aca57611aca612a1f565b6020026020010151611adb82611616565b611ae59190612b22565b92508215611af857611af8818885610e6d565b50600101611a3a565b505050611be2565b8760005b81811015611bdf57368b8b83818110611b2857611b28612a1f565b9050602002810190611b3a9190612d1f565b9050611b4f6118d36060830160408401612d5d565b80611b685750611b686119066040830160208401612d5d565b8015611b7f5750611b7f6119066020830183612d5d565b8015611b965750611b9661197e60a0830183612e1d565b611bcc576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611bd68d82611e1e565b50600101611b0d565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113b79085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612134565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611d41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d659190612b35565b611d6f9190612efb565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506113b79085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611c48565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610abd9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611c48565b611e34611e2e6020830183612d5d565b3b151590565b611e6a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611eaa576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611ebf6118d36060850160408601612d5d565b611eca576000611ed0565b82608001355b90506000611eec611ee76060860160408701612d5d565b611616565b90506000611f03611ee76080870160608801612d5d565b905082600003611f3a57611f3a611f206060870160408801612d5d565b611f306040880160208901612d5d565b8760800135611272565b8460800135821015611f85576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610aa8565b600080611f956020880188612d5d565b73ffffffffffffffffffffffffffffffffffffffff1685611fb960a08a018a612e1d565b604051611fc7929190612f0e565b60006040518083038185875af1925050503d8060008114612004576040519150601f19603f3d011682016040523d82523d6000602084013e612009565b606091505b50915091508161205457600061201e82612240565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa89190612f1e565b6000612069611ee760808a0160608b01612d5d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961209a60208b018b612d5d565b6120aa60608c0160408d01612d5d565b6120ba60808d0160608e01612d5d565b8c608001358987116120cc57866120d6565b6120d68a88612b22565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000612196826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166122b79092919063ffffffff16565b805190915015610abd57808060200190518101906121b49190612f31565b610abd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610aa8565b606060448251101561228557505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b60006122a160048085516122999190612b22565b8591906122ce565b90508080602001905181019061126b9190612f4e565b60606122c684846000856123e8565b949350505050565b6060816122dc81601f612efb565b1015612314576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61231e8284612efb565b84511015612358576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561237757604051915060008252602082016040526123df565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156123b0578051835260209283019201612398565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60608247101561247a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610aa8565b73ffffffffffffffffffffffffffffffffffffffff85163b6124f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610aa8565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516125219190612fc5565b60006040518083038185875af1925050503d806000811461255e576040519150601f19603f3d011682016040523d82523d6000602084013e612563565b606091505b509150915061257382828661257e565b979650505050505050565b6060831561258d57508161126b565b82511561259d5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa89190612f1e565b600080602083850312156125e457600080fd5b823567ffffffffffffffff808211156125fc57600080fd5b818501915085601f83011261261057600080fd5b81358181111561261f57600080fd5b8660208260061b850101111561263457600080fd5b60209290920196919550909350505050565b803561ffff8116811461265857600080fd5b919050565b6000806040838503121561267057600080fd5b8235915061268060208401612646565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156126dc576126dc612689565b60405290565b60405160e0810167ffffffffffffffff811182821017156126dc576126dc612689565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561274c5761274c612689565b604052919050565b600067ffffffffffffffff82111561276e5761276e612689565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126127ab57600080fd5b81356127be6127b982612754565b612705565b8181528460208386010111156127d357600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461265857600080fd5b801515811461282257600080fd5b50565b803561265881612814565b6000610140828403121561284357600080fd5b61284b6126b8565b905081358152602082013567ffffffffffffffff8082111561286c57600080fd5b6128788583860161279a565b6020840152604084013591508082111561289157600080fd5b5061289e8482850161279a565b6040830152506128b0606083016127f0565b60608201526128c1608083016127f0565b60808201526128d260a083016127f0565b60a082015260c082013560c082015260e082013560e08201526101006128f9818401612825565b9082015261012061290b838201612825565b9082015292915050565b60006060828403121561292757600080fd5b50919050565b6000806080838503121561294057600080fd5b823567ffffffffffffffff81111561295757600080fd5b61296385828601612830565b9250506126808460208501612915565b60008060008060a0858703121561298957600080fd5b843567ffffffffffffffff808211156129a157600080fd5b6129ad88838901612830565b955060208701359150808211156129c357600080fd5b818701915087601f8301126129d757600080fd5b8135818111156129e657600080fd5b8860208260051b85010111156129fb57600080fd5b602083019550809450505050612a148660408701612915565b905092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215612a6057600080fd5b61126b82612646565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612ac957612ac9612a69565b5060010190565b6020808252818101839052600090604080840186845b87811015612b15578135835261ffff612b00868401612646565b16838601529183019190830190600101612ae6565b5090979650505050505050565b818103818111156116c9576116c9612a69565b600060208284031215612b4757600080fd5b5051919050565b600060208284031215612b6057600080fd5b813563ffffffff8116811461126b57600080fd5b600060208284031215612b8657600080fd5b815167ffffffffffffffff8116811461126b57600080fd5b60005b83811015612bb9578181015183820152602001612ba1565b50506000910152565b60008151808452612bda816020860160208601612b9e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612c35610160850183612bc2565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612c708382612bc2565b9250506060850151612c9a608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612d0d8187018315159052565b90950151151593019290925250919050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612d5357600080fd5b9190910192915050565b600060208284031215612d6f57600080fd5b61126b826127f0565b600060e08236031215612d8a57600080fd5b612d926126e2565b612d9b836127f0565b8152612da9602084016127f0565b6020820152612dba604084016127f0565b6040820152612dcb606084016127f0565b60608201526080830135608082015260a083013567ffffffffffffffff811115612df457600080fd5b612e003682860161279a565b60a083015250612e1260c08401612825565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612e5257600080fd5b83018035915067ffffffffffffffff821115612e6d57600080fd5b602001915036819003821315612e8257600080fd5b9250929050565b60008085851115612e9957600080fd5b83861115612ea657600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612ef35780818660040360031b1b83161692505b505092915050565b808201808211156116c9576116c9612a69565b8183823760009101908152919050565b60208152600061126b6020830184612bc2565b600060208284031215612f4357600080fd5b815161126b81612814565b600060208284031215612f6057600080fd5b815167ffffffffffffffff811115612f7757600080fd5b8201601f81018413612f8857600080fd5b8051612f966127b982612754565b818152856020838501011115612fab57600080fd5b612fbc826020830160208601612b9e565b95945050505050565b60008251612d53818460208701612b9e56fea264697066735822122026a8d632d0bcbb422f865f700e6637f4e88c35c965ce547b592068299bd3698664736f6c63430008110033a264697066735822122072e73e38c86e53d630bb5c3a3f8314be994c66e4f81fa04ad63d8b0d0a6c98e864736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
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