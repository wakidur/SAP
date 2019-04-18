import { Observer } from "./observer";
import { ProductModel } from "./product.model";

export class ProductUI implements Observer {
    constructor(private model: ProductModel) {
        this.model.attach(this); // add ProductUI to the observe list
        this.renderUI();
    }

    renderUI() {
        console.log('calling renderUI');
        this.draw();
    }

    draw() {
        console.log('callin draw');
    }

    update() {
        console.log('calling update');
        this.renderUI(); // rerender the UI when uadate() is called
    }
}