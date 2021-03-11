Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/src/hello.json]
{
  "hello": "world"
}

//// [/src/src/index.ts]
import hello from "./hello.json"

export default hello.hello

//// [/src/tsconfig_withFiles.json]
{
  "compilerOptions": {
    "composite": true, "sourceMap": true,
    "moduleResolution": "node",
    "module": "commonjs",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "outDir": "dist",
    "skipDefaultLibCheck": true
  },
  "files": [
    "src/index.ts", "src/hello.json"
  ]
}

//// [/src/tsconfig_withInclude.json]


//// [/src/tsconfig_withIncludeAndFiles.json]


//// [/src/tsconfig_withIncludeOfJson.json]




Output::
/lib/tsc --b src/tsconfig_withFiles.json --verbose --explainFiles
[[90m12:01:00 AM[0m] Projects in this build: 
    * src/tsconfig_withFiles.json

[[90m12:01:00 AM[0m] Project 'src/tsconfig_withFiles.json' is out of date because output file 'src/dist/src/index.js' does not exist

[[90m12:01:00 AM[0m] Building project '/src/tsconfig_withFiles.json'...

lib/lib.d.ts
  Default library
src/src/hello.json
  Imported via "./hello.json" from file 'src/src/index.ts'
  Part of 'files' list in tsconfig.json
src/src/index.ts
  Part of 'files' list in tsconfig.json
exitCode:: ExitStatus.Success


//// [/src/dist/src/hello.json]
{
    "hello": "world"
}


//// [/src/dist/src/index.d.ts]
declare const _default: string;
export default _default;


//// [/src/dist/src/index.js]
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var hello_json_1 = __importDefault(require("./hello.json"));
exports["default"] = hello_json_1["default"].hello;
//# sourceMappingURL=index.js.map

//// [/src/dist/src/index.js.map]
{"version":3,"file":"index.js","sourceRoot":"","sources":["../../src/index.ts"],"names":[],"mappings":";;;;;AAAA,4DAAgC;AAEhC,qBAAe,uBAAK,CAAC,KAAK,CAAA"}

//// [/src/dist/tsconfig_withFiles.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../src/hello.json","../src/index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","signature":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"6651571919-{\n  \"hello\": \"world\"\n}","signature":"-17173785019-export const hello: string;\r\n","affectsGlobalScope":true},{"version":"-27703454282-import hello from \"./hello.json\"\n\nexport default hello.hello","signature":"-1680156224-declare const _default: string;\r\nexport default _default;\r\n","affectsGlobalScope":false}],"options":{"composite":true,"sourceMap":true,"moduleResolution":2,"module":1,"resolveJsonModule":true,"esModuleInterop":true,"allowSyntheticDefaultImports":true,"outDir":"./","skipDefaultLibCheck":true,"explainFiles":true,"configFilePath":"../tsconfig_withFiles.json"},"fileIdsList":[[1]],"referencedMap":[[2,0]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[0,1,2]},"version":"FakeTSVersion"}

//// [/src/dist/tsconfig_withFiles.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../src/hello.json": {
        "version": "6651571919-{\n  \"hello\": \"world\"\n}",
        "signature": "-17173785019-export const hello: string;\r\n",
        "affectsGlobalScope": true
      },
      "../src/index.ts": {
        "version": "-27703454282-import hello from \"./hello.json\"\n\nexport default hello.hello",
        "signature": "-1680156224-declare const _default: string;\r\nexport default _default;\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "composite": true,
      "sourceMap": true,
      "moduleResolution": 2,
      "module": 1,
      "resolveJsonModule": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "outDir": "./",
      "skipDefaultLibCheck": true,
      "explainFiles": true,
      "configFilePath": "../tsconfig_withFiles.json"
    },
    "referencedMap": {
      "../src/index.ts": [
        "../src/hello.json"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../src/hello.json",
      "../src/index.ts"
    ]
  },
  "version": "FakeTSVersion"
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b src/tsconfig_withFiles.json --verbose --explainFiles
[[90m12:04:00 AM[0m] Projects in this build: 
    * src/tsconfig_withFiles.json

[[90m12:04:00 AM[0m] Project 'src/tsconfig_withFiles.json' is up to date because newest input 'src/src/index.ts' is older than oldest output 'src/dist/src/index.js'

exitCode:: ExitStatus.Success


