import { ModelTypeInterface } from "../core/model/ModelTypeInterface";
import { Recipient } from "./Recipient";

export class Structure implements ModelTypeInterface{
    private name:string|null = null;
    private contents:Recipient[]|null =[];




    public getName():string|null{
        return this.name;
    }
    public setName(name:string|null):Structure{
        this.name = name;

        return this;
    }

    public getContent():Recipient[]|null{
        return this.contents;
    }
    public addContent(content:Recipient):Structure{
        if(Array.isArray(this.contents)){
            this.contents.push(content);
        }
        return this;
    }

    public removeContent(content:Recipient):Structure {
        
        if(Array.isArray(this.contents)){
            const contentIndex = this.contents.indexOf(content);
            if (contentIndex !== -1) {
                this.contents.splice(contentIndex,1);
            }
        }
        return this;
    }

    getInstance(): ModelTypeInterface {
        return this;
    }
}