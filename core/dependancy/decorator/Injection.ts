import { Container } from "../container/Container";

export function injectable():Function {

    return injectionHandler;
}
function injectionHandler(target:any){

    const container = new Container();
    const dependancies = getDependancies(target);
    dependancies.forEach(dependancy => {
        // console.log(typeof dependancy);

    });
}

export function getDependancies(target:any){
    // const targetInstance = new target();
    console.log(target);

    const dependancies = Object.getOwnPropertyNames(target);
    dependancies.forEach(element => {
        // console.log(element);
    });



    return dependancies;
}
