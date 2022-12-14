const issue = require('./issue').default;
const example = require('./example').default;

let wrong = 0;
let result = example.find((item, index) => {
    wrong = index;
    return issue.fnc(...(item.slice(0,-1))) != item[item.length - 1]
})

console.log(!result ? `全部通过！` : `错误！检查第${wrong + 1}个用例！`);