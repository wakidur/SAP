import { Subject } from "./subject";

export class ProductModel extends Subject  {
    private titleValue = "";
    private makeValue = "";

    
    public get title() : string {
        return this.titleValue;
    };

    
    public set title(v : string) {
        this.titleValue = v;
        this.notify;
    }

    
    public get make() : string {
        return this.makeValue;
    }

    
    public set make(v : string) {
        this.makeValue = v;
        this.notify;
    }
    
    
    
    
} 