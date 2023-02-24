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
                internalType: "contract LiFiDiamond",
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
var _bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604051634bca482160e11b815260206004820152600b60248201526a505249564154455f4b455960a81b604482015260008051602062002065833981519152906397949042906064016020604051808303816000875af115801562000088573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ae9190620005f3565b600490815560408051636c98507360e11b81529051600080516020620020658339815191529263d930a0e692808201926000929091829003018183875af1158015620000fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620001289190810190620006c5565b600590620001379082620007a9565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b6044820152600080516020620020658339815191529063f877cb19906064016000604051808303816000875af11580156200019d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620001c79190810190620006c5565b600690620001d69082620007a9565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b6044820152600080516020620020658339815191529063f877cb19906064016000604051808303816000875af115801562000240573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200026a9190810190620006c5565b600790620002799082620007a9565b50604051637ed1ec7d60e01b815260206004820152600f60248201526e1554d157d1115197d112505353d391608a1b60448201526000906000805160206200206583398151915290637ed1ec7d906064016020604051808303816000875af1158015620002ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000310919062000875565b90506005600660076040516020016200032c9392919062000914565b604051602081830303815290604052600890816200034b9190620007a9565b506040516360f9bb1160e01b815260008051602062002065833981519152906360f9bb1190620003819060089060040162000973565b6000604051808303816000875af1158015620003a1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003cb9190810190620006c5565b600990620003da9082620007a9565b5080620004c857620004c26040518060400160405280601781526020017f2e4c6946694469616d6f6e64496d6d757461626c655631000000000000000000815250600980546200042a906200071a565b80601f016020809104026020016040519081016040528092919081815260200182805462000458906200071a565b8015620004a95780601f106200047d57610100808354040283529160200191620004a9565b820191906000526020600020905b8154815290600101906020018083116200048b57829003601f168201915b50505050506200055460201b62000a021790919060201c565b62000500565b620005006040518060400160405280600c81526020016b0b931a519a511a585b5bdb9960a21b815250600980546200042a906200071a565b60008054610100600160a81b0319166101006001600160a01b039384168102919091179182905560028054919092049092166001600160a01b03199283168117909155600380549092161790555062000a91565b6040516385940ef160e01b815260009060008051602062002065833981519152906385940ef1906200058d908690869060040162000a34565b6000604051808303816000875af1158015620005ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620005d79190810190620006c5565b806020019051810190620005ec919062000a66565b9392505050565b6000602082840312156200060657600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200064057818101518382015260200162000626565b50506000910152565b60006001600160401b03808411156200066657620006666200060d565b604051601f8501601f19908116603f011681019082821181831017156200069157620006916200060d565b81604052809350858152868686011115620006ab57600080fd5b620006bb86602083018762000623565b5050509392505050565b600060208284031215620006d857600080fd5b81516001600160401b03811115620006ef57600080fd5b8201601f810184136200070157600080fd5b620007128482516020840162000649565b949350505050565b600181811c908216806200072f57607f821691505b6020821081036200075057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620007a457600081815260208120601f850160051c810160208610156200077f5750805b601f850160051c820191505b81811015620007a0578281556001016200078b565b5050505b505050565b81516001600160401b03811115620007c557620007c56200060d565b620007dd81620007d684546200071a565b8462000756565b602080601f831160018114620008155760008415620007fc5750858301515b600019600386901b1c1916600185901b178555620007a0565b600085815260208120601f198616915b82811015620008465788860151825594840194600190910190840162000825565b5085821015620008655787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200088857600080fd5b81518015158114620005ec57600080fd5b60008154620008a8816200071a565b60018281168015620008c35760018114620008d9576200090a565b60ff19841687528215158302870194506200090a565b8560005260208060002060005b85811015620009015781548a820152908401908201620008e6565b50505082870194505b5050505092915050565b600062000922828662000899565b6c2f6465706c6f796d656e74732f60981b815262000944600d82018662000899565b9050601760f91b81526200095c600182018562000899565b633539b7b760e11b81526004019695505050505050565b600060208083526000845462000989816200071a565b80848701526040600180841660008114620009ad5760018114620009c857620009f8565b60ff1985168984015283151560051b890183019550620009f8565b896000528660002060005b85811015620009f05781548b8201860152908301908801620009d3565b8a0184019650505b509398975050505050505050565b6000815180845262000a2081602086016020860162000623565b601f01601f19169290920160200192915050565b60408152600062000a49604083018562000a06565b828103602084015262000a5d818562000a06565b95945050505050565b60006020828403121562000a7957600080fd5b81516001600160a01b0381168114620005ec57600080fd5b6115c48062000aa16000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632c0ad2ad146100515780633a7684631461007a578063c0406226146100ba578063f8ccbf47146100d0575b600080fd5b61006461005f366004610bfb565b6100ed565b6040516100719190610cb2565b60405180910390f35b610095737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100c26102f2565b604051610071929190610cc5565b6000546100dd9060ff1681565b6040519015158152602001610071565b60408051600a808252818301909252606091600091906020820181803683370190505090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061014657610146610d2b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106101a9576101a9610d2b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060005b60048110156102eb5761020c60108583600481106101fb576101fb610d2b565b6102079291901a610db8565b610ad8565b82610218836002610dda565b610223906002610df1565b8151811061023357610233610d2b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610285601085836004811061027957610279610d2b565b6102079291901a610e04565b82610291836002610dda565b61029c906003610df1565b815181106102ac576102ac610d2b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506102e481610e26565b90506101db565b5092915050565b6040517f350d56bf00000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f435245415445335f464143544f52595f4144445245535300000000000000000060448201526000906060908290737109709ecfa91a80626ff3989d68f67f5b1dd12d9063350d56bf906064016020604051808303816000875af1158015610392573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b69190610e83565b600480546040517fffa18649000000000000000000000000000000000000000000000000000000008152918201529091507f332162310a09babde187afb0b5991cca781448e72616621bb36870caf69b3c299060009073ffffffffffffffffffffffffffffffffffffffff8416906350f1c46490737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ffa18649906024016020604051808303816000875af1158015610468573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048c9190610e83565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff909116600482015260248101859052604401602060405180830381865afa1580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190610e83565b600480546040517fce817d4700000000000000000000000000000000000000000000000000000000815291820152909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561058a57600080fd5b505af115801561059e573d6000803e3d6000fd5b50505050803b61064c578273ffffffffffffffffffffffffffffffffffffffff1663cdcb760a83604051806020016105d590610b2d565b6020820181038252601f19601f820116604052506040518363ffffffff1660e01b8152600401610606929190610ea0565b6020604051808303816000875af1158015610625573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106499190610e83565b90505b600054610100900473ffffffffffffffffffffffffffffffffffffffff163b610721576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604c60248201527f4572726f7220696e20736372697074202d20636865636b206966206469616d6f60448201527f6e64496d6d757461626c65206973206465706c6f79656420756e64657220737460648201527f6f72656420616464726573730000000000000000000000000000000000000000608482015260a40160405180910390fd5b6040805160048152602481018252602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f58819abf00000000000000000000000000000000000000000000000000000000179052825160018082528185019094529192600092918281019080368337019050509050631f931c1c60e01b816000815181106107b4576107b4610d2b565b7fffffffff00000000000000000000000000000000000000000000000000000000929092166020928302919091018201526040805160608101825260008082526002938201848152928201859052600180548082018255915281519084027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff909316928317825593519294909384927fffffffffffffffffffffff0000000000000000000000000000000000000000009091161790740100000000000000000000000000000000000000009084908111156108cc576108cc610eb9565b0217905550604082015180516108ec916001840191602090910190610b3a565b50506002546040517f1f931c1c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169150631f931c1c9061094a9060019087908790600401610ee8565b600060405180830381600087803b15801561096457600080fd5b505af1158015610978573d6000803e3d6000fd5b5050604080517f76eadd360000000000000000000000000000000000000000000000000000000081529051737109709ecfa91a80626ff3989d68f67f5b1dd12d93506376eadd369250600480830192600092919082900301818387803b1580156109e157600080fd5b505af11580156109f5573d6000803e3d6000fd5b5050505050505050509091565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef190610a579086908690600401611315565b6000604051808303816000875af1158015610a76573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610abc9190810190611343565b806020019051810190610acf9190610e83565b90505b92915050565b600060098260ff1611610af957610af082603061140e565b60f81b92915050565b8160ff16600a11158015610b115750600f8260ff1611155b1561004c57600a610b2383606161140e565b610af09190611427565b61014e8061144183390190565b82805482825590600052602060002090600701600890048101928215610bd65791602002820160005b83821115610ba457835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302610b63565b8015610bd45782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610ba4565b505b50610be2929150610be6565b5090565b5b80821115610be25760008155600101610be7565b600060208284031215610c0d57600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610c3d57600080fd5b9392505050565b60005b83811015610c5f578181015183820152602001610c47565b50506000910152565b60008151808452610c80816020860160208601610c44565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610acf6020830184610c68565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000610cf46040830184610c68565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff831680610dcb57610dcb610d5a565b8060ff84160491505092915050565b8082028115828204841417610ad257610ad2610d89565b80820180821115610ad257610ad2610d89565b600060ff831680610e1757610e17610d5a565b8060ff84160691505092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610e5757610e57610d89565b5060010190565b73ffffffffffffffffffffffffffffffffffffffff81168114610e8057600080fd5b50565b600060208284031215610e9557600080fd5b8151610c3d81610e5e565b828152604060208201526000610cf46040830184610c68565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60608152600060608201855480825260808401915060808160051b8501018760005260208060002060005b848110156112da578784037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80018652815473ffffffffffffffffffffffffffffffffffffffff81168552606085019060a01c60ff1660038110610f9f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b858501526060604086015260018381018054808452600091825260208083209401905b806007840110156110f3578454610ffd838260e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff0000000000000000000000000000000000000000000000000000000060c082901b81168a85015260a082901b81166040850152608082901b8116606085015261107460808501828460601b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b6110a760a08501828460401b167fffffffff00000000000000000000000000000000000000000000000000000000169052565b7fffffffff00000000000000000000000000000000000000000000000000000000828b1b8216811660c086015291161660e0830152938301936008929092019161010090910190610fc2565b935493808310156111355761112c828660e01b7fffffffff00000000000000000000000000000000000000000000000000000000169052565b91830191908701905b8083101561116f5760c085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156111a95760a085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156111e357608085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561121d57606085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561125757604085901b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b8083101561128f5784881b7fffffffff0000000000000000000000000000000000000000000000000000000016825291830191908701905b808310156112c1577fffffffff0000000000000000000000000000000000000000000000000000000085168252908701905b5098860198965050506002929092019150600101610f13565b505073ffffffffffffffffffffffffffffffffffffffff88169086015284810360408601526113098187610c68565b98975050505050505050565b6040815260006113286040830185610c68565b828103602084015261133a8185610c68565b95945050505050565b60006020828403121561135557600080fd5b815167ffffffffffffffff8082111561136d57600080fd5b818401915084601f83011261138157600080fd5b81518181111561139357611393610cfc565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156113d9576113d9610cfc565b816040528281528760208487010111156113f257600080fd5b611403836020830160208801610c44565b979650505050505050565b60ff8181168382160190811115610ad257610ad2610d89565b60ff8281168282160390811115610ad257610ad2610d8956fe6080604052348015600f57600080fd5b5061012f8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806358819abf14602d575b600080fd5b60336035565b005b603d6000603f565b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff8481169182179093556040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350505056fea26469706673582212204883e9eacd6a6b1d82acbdc4450704ddcb0266494d1888c97b6cce417ba1a1d264736f6c63430008110033a264697066735822122081f198c3e6bc5ec5611385e35476c850462eea9b1a485253d1d5dc83f0cd427a64736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
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
