function match(str) {
    // for循环
    for(let i in str) {
        if(str.charAt(i) === 'a') {
            return true;
        }
    }

    // indexOf
    // if(str.indexOf('a') > 0) return true;

    // 正则
    // let reg = /a/;
    // if(reg.test(str)) return true;

    return false;
}

console.log(match('I am yux'));
console.log(match('123456'));