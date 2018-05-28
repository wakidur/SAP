import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AppComponent ],
    imports: [ BrowserModule ],
    exports: [AppComponent],
    providers: [Logger],
    bootstrap: [AppComponent]
})
export class AppModule {}