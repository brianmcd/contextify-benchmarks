var Contextify = require('contextify');

var initialMemUse = process.memoryUsage(),
    initialRSS = initialMemUse.rss/1048576,
    initialVSize = initialMemUse.vsize/1048576,
    initialHeapTotal = initialMemUse.heapTotal/1048576,
    initialHeapUsed = initialMemUse.heapUsed/1048576;
console.log('\tInitial memory usage: ');
console.log("\tRSS: " + initialRSS);
console.log("\tVSize: " + initialVSize);
console.log("\tHeapTotal: " + initialHeapTotal);
console.log("\tHeapUsed: " + initialHeapUsed);
var start = Date.now();
for (var i = 0; i < 20000; i++) {
    (function () {
        var context = Contextify();
     })();
}
var end = Date.now();
console.log("create_contexts: contextify elapsed time: " + ((end - start)/1000) + " seconds.");

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
