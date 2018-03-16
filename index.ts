import * as fs from 'fs';
import * as path from 'path';
const p = (newPath: string): string => path.join(__dirname, newPath);
const months: Array < [string, number] > = [
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
const deleteFolderRecursive = (path) => {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

for (let i: number = 0; i < 12; i++) {
    let month = p(`${i+1}-${months[i][0]}`);
    if (!fs.existsSync(month)) {
        fs.mkdirSync(month);
        // deleteFolderRecursive(month)
    }
    for (let j: number = 0; j < months[i][1]; j++) {
        fs.closeSync(fs.openSync(path.join(month, `${j+1}-${months[i][0]}-2018.md`), 'w'));
        fs.writeFileSync(path.join(month, `${j+1}-${months[i][0]}-2018.md`), `
# Today's time-table:

## Today I am thinking of studying the following topics:

1. 
2. 
3.
4.

## Today is ${j+1}-${month[i][0]}-2018. And I today I did the following as part of my NEET preparation. (Time Wise:)

1. **6AM - 7AM** : 

2. **7AM - 8AM** : 

3. **8AM - 9AM** : 

4. **9AM - 10AM** : 

5. **10AM - 11AM** : 

6. **11AM - 12AM** : 

7. **12PM - 1PM** : 

8. **1PM - 2PM** : 

9. **2PM - 3PM** : 

10. **3PM - 4PM** : 

11. **4PM - 5PM** : 

12. **5PM - 6PM** : 

13. **6PM - 7PM** : 

14. **7PM - 8PM** : 

15. **8PM - 9PM** : 

16. **9PM - 10PM** : 

17. **10PM - 11PM** : 

18. **11PM - 12PM** : 

19. **12AM - 1AM** : 


## Today's Conclusion:
        `)
    }
}