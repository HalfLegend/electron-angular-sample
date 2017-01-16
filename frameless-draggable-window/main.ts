import {ElegularApplication} from "elegular";
import {windowConfig} from "./app/views/window-config";
ElegularApplication.registerAngularWindowModuleConfig(...windowConfig);
ElegularApplication.runApplication();