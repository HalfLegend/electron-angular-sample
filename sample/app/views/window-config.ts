import {ElegularWindowConfig} from "elegular";
let windowConfig: ElegularWindowConfig[] = [{
    windowId: "main",
    angularModulePath: __dirname + "/main-window/main-window.module.js",
    isMainWindow: true,
    isOpenDevTool: true,
    isUseSystemJS: true,
    windowOptions: {
        width: 800,
        height: 800,
        frame: true,
        alwaysOnTop: false
    }
}];
// let windowConfig: AngularWindowModuleConfig[] = [{
//     modulePath: __dirname + "/main-window/main-window.module.js",
//     isMainWindow: true,
//     isOpenDevTool: false,
//     windowOptions: {
//         width: 120,
//         height: 120,
//         frame: false,
//         transparent: true,
//         skipTaskbar: true,
//         alwaysOnTop:true
//     }
// }];
export {windowConfig};