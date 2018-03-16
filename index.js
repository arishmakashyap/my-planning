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
        fs.writeFileSync(path.join(month, j + 1 + "-" + months[i][0] + "-2018.md"), "\n# Today's time-table:\n\n## Today I am thinking of studying the following topics:\n\n1. \n2. \n3.\n4.\n\n## Today is " + (j + 1) + "-" + month[i][0] + "-2018. And I today I did the following as part of my NEET preparation. (Time Wise:)\n\n1. **6AM - 7AM** : \n\n2. **7AM - 8AM** : \n\n3. **8AM - 9AM** : \n\n4. **9AM - 10AM** : \n\n5. **10AM - 11AM** : \n\n6. **11AM - 12AM** : \n\n7. **12PM - 1PM** : \n\n8. **1PM - 2PM** : \n\n9. **2PM - 3PM** : \n\n10. **3PM - 4PM** : \n\n11. **4PM - 5PM** : \n\n12. **5PM - 6PM** : \n\n13. **6PM - 7PM** : \n\n14. **7PM - 8PM** : \n\n15. **8PM - 9PM** : \n\n16. **9PM - 10PM** : \n\n17. **10PM - 11PM** : \n\n18. **11PM - 12PM** : \n\n19. **12AM - 1AM** : \n\n\n## Today's Conclusion:\n        ");
    }
}
