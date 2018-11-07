
import * as ts from "typescript";
import * as llvm from "llvm-node";
import {Scope} from "./scope";

export class Context {
    public typeChecker: ts.TypeChecker;
    public llvmContext: llvm.LLVMContext;
    public llvmModule: llvm.Module;
    public scope: Scope = new Scope();

    public constructor(typeChecker: ts.TypeChecker) {
        this.typeChecker = typeChecker;
        this.llvmContext = new llvm.LLVMContext();
        this.llvmModule = new llvm.Module("test", this.llvmContext);
    }
}
