function fabonacci(len) {
    
    let arr = [0, 1]
    if(len<2)
    {return arr} 
    for (var i = 2; i < len; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    console.log(arr)
    return arr
}
fabonacci(2);
