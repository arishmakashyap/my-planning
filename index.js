"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var p = function (newPath) { return path.join(__dirname, newPath); };
var months = [
    ["January", 31],
    ["February", 28],
    ["March", 31],
    ["April", 30],
    ["May", 31],
    ["June", 30],
    ["July", 31],
    ["August", 31],
    ["September", 30],
    ["October", 31],
    ["November", 30],
    ["December", 31]
];
var deleteFolderRecursive = function (path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            }
            else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
for (var i = 0; i < 12; i++) {
    var month = p(i + 1 + "-" + months[i][0]);
    if (!fs.existsSync(month)) {
        fs.mkdirSync(month);
        // deleteFolderRecursive(month)
    }
    for (var j = 0; j < months[i][1]; j++) {
        fs.closeSync(fs.openSync(path.join(month, j + 1 + "-" + months[i][0] + "-2018.md"), 'w'));
        fs.writeFileSync(path.join(month, j + 1 + "-" + months[i][0] + "-2018.md"), "\n# Today's time-table:\n\n## Today I am thinking of studying the following topics:\n\n1. \n2. \n3.\n4.\n\n## Today is " + (j + 1) + "-" + month[i][0] + "-2018. And I today I did the following as part of my NEET preparation. (Time Wise:)\n\n1. **6AM - 7AM** : \n<br/>\n2. **7AM - 8AM** : \n<br/>\n3. **8AM - 9AM** : \n<br/>\n4. **9AM - 10AM** : \n<br/>\n5. **10AM - 11AM** : \n<br/>\n6. **11AM - 12AM** : \n<br/>\n7. **12PM - 1PM** : \n<br/>\n8. **1PM - 2PM** : \n<br/>\n9. **2PM - 3PM** : \n<br/>\n10. **3PM - 4PM** : \n<br/>\n11. **4PM - 5PM** : \n<br/>\n12. **5PM - 6PM** : \n<br/>\n13. **6PM - 7PM** : \n<br/>\n14. **7PM - 8PM** : \n<br/>\n15. **8PM - 9PM** : \n<br/>\n16. **9PM - 10PM** : \n<br/>\n17. **10PM - 11PM** : \n<br/>\n18. **11PM - 12PM** : \n<br/>\n19. **12AM - 1AM** : \n<br/>\n\n## Today's Conclusion:\n        ");
    }
}
