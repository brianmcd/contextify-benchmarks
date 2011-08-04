var vm = require('vm');

var start = Date.now();
for (var i = 0; i < 20000; i++) {
    (function () {
        var context = vm.createContext({ x : 1});
        vm.createScript("x++;").runInContext(context);        
     })();
}
var end = Date.now();
console.log("run_scripts_multiple_contexts: vm elapsed time: " + ((end - start)/1000) + " seconds.");

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


