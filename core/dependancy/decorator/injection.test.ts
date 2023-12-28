import { describe, expect, it } from "bun:test";
import { Recipient } from "../../../model/Recipient";
import { injectable, getDependancies } from "./Injection";


class MyClass {
    constructor(
        private myProprety:Recipient,
        private myOtherProprety:string,
    ) {

    }
    @injectable()
    myMethod(myProprety:string){

    }

    myMethod2(myProprety:string){

    }
}

describe('Verification of the dependancie injection',()=>{

    const dependancies = getDependancies(MyClass);
    it('Should get an array',()=>{
        expect(dependancies).toBeArray();
    });

    it('Should have myProprety key',()=>{
        expect(dependancies).toContain("myProprety");
    });

    it('Should have myOtherProprety key',()=>{
        expect(dependancies).toContain("myOtherProprety");
    });

    it('Should 2 for size',()=>{
        expect(dependancies).toBeArrayOfSize(2);
    });
});
