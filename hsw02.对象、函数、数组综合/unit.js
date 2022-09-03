const issue = require('./issue').default;
const example = require('./example').default;

let wrong = 0;
let result = example.find((item, index) => {
    let obj = issue.fnc(item[0], item[1])
    wrong = index;
    return !(
        obj?.name == item[0] &&
        obj?.getName() == item[0] &&
        obj?.arr == item[1] &&
        obj?.findMaxValue() == item[2]
    )
})

console.log(!result ? `全部通过！` : `错误！检查第${wrong + 1}个用例！`);