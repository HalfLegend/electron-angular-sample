
import * as gulp from "gulp";

gulp.task("M-ElectronAngular", function () {
    gulp.src(["../../elegular/!(node_modules)/**/*.?(js|ts|js.map|html)", "../../elegular/*.?(js|ts|js.map)"]).pipe(gulp.dest("node_modules/elegular"));
});