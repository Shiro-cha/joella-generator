import { ModelTypeInterface } from "../core/model/ModelTypeInterface";

export class Recipient implements ModelTypeInterface{
    private name:string|null =null;
    private type:string|null =null;
    private children:Recipient[] = [];

    public getName():string|null{
        return this.name;
    }
    public setName(name:string|null):Recipient{
        this.name = name;
        return this;
    }

    public getType():string|null{
        return this.type;
    }
    public setType(type:string|null):Recipient{
        this.type = type;
        return this;
    }

    public getChildren():Recipient[]{
        return this.children;
    }
    public addChildren(children:Recipient):Recipient{
        if(this.children && this.children.length >= 0){
            this.children.push(children);
        }
        return this;
    }
    public removeChildren(child:Recipient):Recipient{
        if(Array.isArray(this.children)){
            const childIndex = this.children.indexOf(child);
            if (childIndex !== -1) {
                this.children.splice(childIndex,1);
            }
        }
        return this;
    }
    
    getInstance(): ModelTypeInterface {
        
        return this;
    }
}