import {ElegularWindowConfig} from "elegular";
let windowConfig: ElegularWindowConfig[] = [{
    windowId: "main",
    angularModulePath: __dirname + "/main-window/main-window.module.js",
    isMainWindow: true,
    isOpenDevTool: false,
    isUseSystemJS: true,
    windowOptions: {
        width: 100,
        height: 100,
        frame: false,
        alwaysOnTop: true,
        transparent:true
    }
}];
export {windowConfig};