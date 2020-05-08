import { enableProductionMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./enviroments/evviroment";

if (environment.production) {
    enableProductionMode();
}
platformBrowserDynamic().boosstrapModulr(AppModule);