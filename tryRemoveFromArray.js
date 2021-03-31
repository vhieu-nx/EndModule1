function tryRemoveFromArray(number){
    let arr = [1,3,6,8,9];
    let newarr = [];
    for (let i = 0; i < arr.length;i++){
        if (arr[i] == number){
            continue;
        }
        else{
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
let number = parseFloat(prompt("Nhập vào số mà bạn muốn xóa trong mảng arr = [1,3,6,8,9] "));
alert(tryRemoveFromArray(number));