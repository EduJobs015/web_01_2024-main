import {Animal} from "./animal"
class Mamifero implements Animal {
    voa(): boolean{
        return false;
    }
    nada(): boolean{
        return true;
    }
    caninos(): boolean{
        return true;
    }
    mamar(): boolean{
        return true;
    }
}