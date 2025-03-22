import Cl_padre from "./Cl_padre";

export default class Cl_hijo2 extends Cl_padre{
    constructor(atriB, atri2){
        super(atriB)
        this.atri2=atri2;
    }

    calculo(){
        return this.atribB+this.atri2
    }
}