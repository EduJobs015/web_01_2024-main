import {Animal} from "./animal";
class Ave implements Animal {
    voa(): boolean{
        return true;
    }
    nada(): boolean{
        return false;
    }
    caninos(): boolean{
        return false;
    }
    mamar(): boolean{
        return false;
    }    

}