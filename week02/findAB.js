function match(str) {
    let findA = false;
    // for循环
    for(let c of str) {
        if(c === 'a') {
            findA = true;
        } else if(findA && c === 'b') {
            return true;
        } else {
            findA = false;
        }
    }

    return false;
}

console.log(match('I am yux'));
console.log(match('1234ab56'));