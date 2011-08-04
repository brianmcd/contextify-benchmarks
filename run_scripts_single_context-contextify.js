var Contextify = require('contextify');

var context = Contextify({x : 0});
var start = Date.now();
for (var i = 0; i < 200000; i++) {
    (function () {
        context.run("x++;");
     })();
}
var end = Date.now();
console.log("run_scripts_single_context: contextify elapsed time: " + ((end - start)/1000) + " seconds.");

if (global.gc != undefined) {
    for (var j = 0; j < 50; j++) {
        gc();
    }
    var finalMemUse = process.memoryUsage(),
        finalRSS = finalMemUse.rss/1048576,
        finalVSize = finalMemUse.vsize/1048576,
        finalHeapTotal = finalMemUse.heapTotal/1048576,
        finalHeapUsed = finalMemUse.heapUsed/1048576;
    console.log('\tFinal memory usage: ');
    console.log("\tRSS: " + finalRSS);
    console.log("\tVSize: " + finalVSize);
    console.log("\tHeapTotal: " + finalHeapTotal);
    console.log("\tHeapUsed: " + finalHeapUsed);
}
