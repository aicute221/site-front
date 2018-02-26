
/**
 * 根据传入的毫miao时间戳，返回改时间所在的年份
 * @param timestemp
 * @return number
 */
function getYear(timestemp){
    // TODO
    var date = new Date(timestemp);
    //var day = timestemp/(1000*60*60*24);
    return date.getFullYear()
}

consoleResult(1, getYear(1519478029242) == 2018);


/**
 * 如果date1 早于 date2，返回true，否则，返回 false
 * @param date1
 * @param date2
 * @return boolean
 */
function timeBefore(date1, date2){
    // TODO
    var t1 = date1.getTime();
    var t2 = date2.getTime();

    return t1<t2
}

consoleResult(2, timeBefore(new Date(1), new Date(2)) === true);

/**
 * 返回日期的字符串格式，要求格式为 "2018-02-12 03:04:57"
 * @param date
 * @return string
 */
function format(date){
    // TODO
    var d = f(date.getFullYear(), 4) + '-' + f(date.getMonth() + 1, 2) + '-' + f(date.getDate(), 2)
        + " " + f(date.getHours(), 2) + ":" + f(date.getMinutes(), 2) + ":" + f(date.getSeconds())
    console.log(d);
    return d;
}
var f = function(number, n){
    number += "";
    var offset = n - number.length;
    for(var i = 0; i < offset; i ++){
        number = "0" + number;
    }
    return number;
}

consoleResult(3, format(new Date(1519478029242)) == "2018-02-24 21:13:49");


function consoleResult(number, result){
    console.log("题目" + number + ": ", result ? "通过":"未通过");
}