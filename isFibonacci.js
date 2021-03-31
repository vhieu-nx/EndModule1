function isFibonacci(number) {
    let arr = [1, 2, 3, 5, 8, 13];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
            return true;
        }
    }
    return false;
}

let number = prompt("Nhập vào số muốn check có phải trong dãy fibonaci hay ko");
if (isFibonacci(number)) {
    alert(true)
} else {
    alert(false)
}

