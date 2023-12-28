import { ContainerInterface } from "./ContainerInterface";

export class Container implements ContainerInterface {

    dependancies: { [type: string]: any; } = {};
    register<T>(key: string, value: T): void {
        this.dependancies[key] = value;
    }

    resolve<T>(key: string): T {
        return this.dependancies[key];
    }
}