export interface ContainerInterface{
    dependancies:{[type:string]:any};
    register<T>(key:string,value:T):void;
    resolve<T>(key:string):T;
}