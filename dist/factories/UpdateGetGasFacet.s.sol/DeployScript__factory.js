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
        inputs: [
            {
                internalType: "bytes4",
                name: "code",
                type: "bytes4",
            },
        ],
        name: "fromCode",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "run",
        outputs: [
            {
                internalType: "address[]",
                name: "facets",
                type: "address[]",
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
var _bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604051634bca482160e11b815260206004820152600b60248201526a505249564154455f4b455960a81b6044820152600080516020620021ed833981519152906397949042906064016020604051808303816000875af115801562000088573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ae9190620005f3565b600490815560408051636c98507360e11b81529051600080516020620021ed8339815191529263d930a0e692808201926000929091829003018183875af1158015620000fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620001289190810190620006c5565b600590620001379082620007a9565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b6044820152600080516020620021ed8339815191529063f877cb19906064016000604051808303816000875af11580156200019d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620001c79190810190620006c5565b600690620001d69082620007a9565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b6044820152600080516020620021ed8339815191529063f877cb19906064016000604051808303816000875af115801562000240573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200026a9190810190620006c5565b600790620002799082620007a9565b50604051637ed1ec7d60e01b815260206004820152600f60248201526e1554d157d1115197d112505353d391608a1b6044820152600090600080516020620021ed83398151915290637ed1ec7d906064016020604051808303816000875af1158015620002ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000310919062000875565b90506005600660076040516020016200032c9392919062000914565b604051602081830303815290604052600890816200034b9190620007a9565b506040516360f9bb1160e01b8152600080516020620021ed833981519152906360f9bb1190620003819060089060040162000973565b6000604051808303816000875af1158015620003a1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003cb9190810190620006c5565b600990620003da9082620007a9565b5080620004c857620004c26040518060400160405280601781526020017f2e4c6946694469616d6f6e64496d6d757461626c655631000000000000000000815250600980546200042a906200071a565b80601f016020809104026020016040519081016040528092919081815260200182805462000458906200071a565b8015620004a95780601f106200047d57610100808354040283529160200191620004a9565b820191906000526020600020905b8154815290600101906020018083116200048b57829003601f168201915b50505050506200055460201b620008251790919060201c565b62000500565b620005006040518060400160405280600c81526020016b0b931a519a511a585b5bdb9960a21b815250600980546200042a906200071a565b60008054610100600160a81b0319166101006001600160a01b039384168102919091179182905560028054919092049092166001600160a01b03199283168117909155600380549092161790555062000a91565b6040516385940ef160e01b8152600090600080516020620021ed833981519152906385940ef1906200058d908690869060040162000a34565b6000604051808303816000875af1158015620005ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620005d79190810190620006c5565b806020019051810190620005ec919062000a66565b9392505050565b6000602082840312156200060657600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200064057818101518382015260200162000626565b50506000910152565b60006001600160401b03808411156200066657620006666200060d565b604051601f8501601f19908116603f011681019082821181831017156200069157620006916200060d565b81604052809350858152868686011115620006ab57600080fd5b620006bb86602083018762000623565b5050509392505050565b600060208284031215620006d857600080fd5b81516001600160401b03811115620006ef57600080fd5b8201601f810184136200070157600080fd5b620007128482516020840162000649565b949350505050565b600181811c908216806200072f57607f821691505b6020821081036200075057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620007a457600081815260208120601f850160051c810160208610156200077f5750805b601f850160051c820191505b81811015620007a0578281556001016200078b565b5050505b505050565b81516001600160401b03811115620007c557620007c56200060d565b620007dd81620007d684546200071a565b8462000756565b602080601f831160018114620008155760008415620007fc5750858301515b600019600386901b1c1916600185901b178555620007a0565b600085815260208120601f198616915b82811015620008465788860151825594840194600190910190840162000825565b5085821015620008655787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200088857600080fd5b81518015158114620005ec57600080fd5b60008154620008a8816200071a565b60018281168015620008c35760018114620008d9576200090a565b60ff19841687528215158302870194506200090a565b8560005260208060002060005b85811015620009015781548a820152908401908201620008e6565b50505082870194505b5050505092915050565b600062000922828662000899565b6c2f6465706c6f796d656e74732f60981b815262000944600d82018662000899565b9050601760f91b81526200095c600182018562000899565b633539b7b760e11b81526004019695505050505050565b600060208083526000845462000989816200071a565b80848701526040600180841660008114620009ad5760018114620009c857620009f8565b60ff1985168984015283151560051b890183019550620009f8565b896000528660002060005b85811015620009f05781548b8201860152908301908801620009d3565b8a0184019650505b509398975050505050505050565b6000815180845262000a2081602086016020860162000623565b601f01601f19169290920160200192915050565b60408152600062000a49604083018562000a06565b828103602084015262000a5d818562000a06565b95945050505050565b60006020828403121562000a7957600080fd5b81516001600160a01b0381168114620005ec57600080fd5b61174c8062000aa16000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632c0ad2ad146100515780633a7684631461007a578063c0406226146100ba578063f8ccbf47146100cf575b600080fd5b61006461005f366004610c46565b6100ec565b6040516100719190610cd8565b60405180910390f35b610095737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100c26102f1565b6040516100719190610ceb565b6000546100dc9060ff1681565b6040519015158152602001610071565b60408051600a808252818301909252606091600091906020820181803683370190505090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061014557610145610d74565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106101a8576101a8610d74565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060005b60048110156102ea5761020b60108583600481106101fa576101fa610d74565b6102069291901a610e01565b6108fb565b82610217836002610e23565b610222906002610e3a565b8151811061023257610232610d74565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610284601085836004811061027857610278610d74565b6102069291901a610e4d565b82610290836002610e23565b61029b906003610e3a565b815181106102ab576102ab610d74565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506102e381610e6f565b90506101da565b5092915050565b606060006103c76040518060400160405280600c81526020017f2e476574476173466163657400000000000000000000000000000000000000008152506009805461033b90610ea7565b80601f016020809104026020016040519081016040528092919081815260200182805461036790610ea7565b80156103b45780601f10610389576101008083540402835291602001916103b4565b820191906000526020600020905b81548152906001019060200180831161039757829003601f168201915b505050505061082590919063ffffffff16565b600480546040517fce817d4700000000000000000000000000000000000000000000000000000000815291820152909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561043157600080fd5b505af1158015610445573d6000803e3d6000fd5b50506003546040517fadfca15e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152909116925063adfca15e9150602401600060405180830381865afa1580156104b9573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104ff9190810190610f6d565b516000036106e35760408051606081810190925273ffffffffffffffffffffffffffffffffffffffff8316815260019060208101600081526020016105796040518060400160405280600b81526020017f476574476173466163657400000000000000000000000000000000000000000081525085610950565b90528154600181018355600092835260209283902082516002928302909101805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117825594840151939490939284927fffffffffffffffffffffff0000000000000000000000000000000000000000001690911790740100000000000000000000000000000000000000009084908111156106325761063261100c565b021790555060408201518051610652916001840191602090910190610b54565b50506002546040517f1f931c1c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169150631f931c1c906106af9060019060009060040161103b565b600060405180830381600087803b1580156106c957600080fd5b505af11580156106dd573d6000803e3d6000fd5b50505050505b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352ef6b2c6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610750573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107969190810190611481565b91507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561080957600080fd5b505af115801561081d573d6000803e3d6000fd5b505050505090565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef19061087a9086908690600401611510565b6000604051808303816000875af1158015610899573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526108df919081019061153e565b8060200190518101906108f291906115f0565b90505b92915050565b600060098260ff161161091c5761091382603061160d565b60f81b92915050565b8160ff16600a111580156109345750600f8260ff1611155b1561004c57600a61094683606161160d565b6109139190611626565b6040805160038082526080820190925260609160009190816020015b606081526020019060019003908161096c5790505090506040518060400160405280601d81526020017f736372697074732f636f6e74726163742d73656c6563746f72732e7368000000815250816000815181106109cc576109cc610d74565b602002602001018190525083816001815181106109eb576109eb610d74565b6020026020010181905250606060005b8451811015610a5c5781610a27868381518110610a1a57610a1a610d74565b60200260200101516100ec565b604051602001610a3892919061163f565b60405160208183030381529060405291508080610a5490610e6f565b9150506109fb565b508082600281518110610a7157610a71610d74565b60209081029190910101526040517f89160467000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d90638916046790610acf908690600401611696565b6000604051808303816000875af1158015610aee573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b34919081019061153e565b905080806020019051810190610b4a9190610f6d565b9695505050505050565b82805482825590600052602060002090600701600890048101928215610bf05791602002820160005b83821115610bbe57835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302610b7d565b8015610bee5782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610bbe565b505b50610bfc929150610c00565b5090565b5b80821115610bfc5760008155600101610c01565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610c4357600080fd5b50565b600060208284031215610c5857600080fd5b8135610c6381610c15565b9392505050565b60005b83811015610c85578181015183820152602001610c6d565b50506000910152565b60008151808452610ca6816020860160208601610c6a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006108f26020830184610c8e565b6020808252825182820181905260009190848201906040850190845b81811015610d3957835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610d07565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff831680610e1457610e14610da3565b8060ff84160491505092915050565b80820281158282048414176108f5576108f5610dd2565b808201808211156108f5576108f5610dd2565b600060ff831680610e6057610e60610da3565b8060ff84160691505092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610ea057610ea0610dd2565b5060010190565b600181811c90821680610ebb57607f821691505b602082108103610ef4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610f4157610f41610d45565b604052919050565b600067ffffffffffffffff821115610f6357610f63610d45565b5060051b60200190565b60006020808385031215610f8057600080fd5b825167ffffffffffffffff811115610f9757600080fd5b8301601f81018513610fa857600080fd5b8051610fbb610fb682610f49565b610efa565b81815260059190911b82018301908381019087831115610fda57600080fd5b928401925b82841015611001578351610ff281610c15565b82529284019290840190610fdf565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60608152600060608201845480825260808401915060808160051b8501018660005260208060002060005b8481101561142d578784037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80018652815473ffffffffffffffffffffffffffffffffffffffff81168552606085019060a01c60ff16600381106110f2577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b858501526060604086015260018381018054808452600091825260208083209401905b80600784011015611246578454611150838260e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff0000000000000000000000000000000000000000000000000000000060c082901b81168a85015260a082901b81166040850152608082901b811660608501526111c760808501828460601b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b6111fa60a08501828460401b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff00000000000000000000000000000000000000000000000000000000828b1b8216811660c086015291161660e0830152938301936008929092019161010090910190611115565b935493808310156112885761127f828660e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b91830191908701905b808310156112c25760c085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156112fc5760a085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561133657608085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561137057606085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156113aa57604085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156113e25784881b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b80831015611414577fffffffff0000000000000000000000000000000000000000000000000000000085168252908701905b5098860198965050506002929092019150600101611066565b505073ffffffffffffffffffffffffffffffffffffffff87169086015284810360408601526000815260208101611001565b73ffffffffffffffffffffffffffffffffffffffff81168114610c4357600080fd5b6000602080838503121561149457600080fd5b825167ffffffffffffffff8111156114ab57600080fd5b8301601f810185136114bc57600080fd5b80516114ca610fb682610f49565b81815260059190911b820183019083810190878311156114e957600080fd5b928401925b828410156110015783516115018161145f565b825292840192908401906114ee565b6040815260006115236040830185610c8e565b82810360208401526115358185610c8e565b95945050505050565b60006020828403121561155057600080fd5b815167ffffffffffffffff8082111561156857600080fd5b818401915084601f83011261157c57600080fd5b81518181111561158e5761158e610d45565b6115bf60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610efa565b91508082528560208285010111156115d657600080fd5b6115e7816020840160208601610c6a565b50949350505050565b60006020828403121561160257600080fd5b8151610c638161145f565b60ff81811683821601908111156108f5576108f5610dd2565b60ff82811682821603908111156108f5576108f5610dd2565b60008351611651818460208801610c6a565b835190830190611665818360208801610c6a565b7f20000000000000000000000000000000000000000000000000000000000000009101908152600101949350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611709577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08886030184526116f7858351610c8e565b945092850192908501906001016116bd565b509297965050505050505056fea264697066735822122029fd90cd214123a3f76381ed4a8c6cc489dd729a8c7fc2e5bd1a1a30e6a552f164736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
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
