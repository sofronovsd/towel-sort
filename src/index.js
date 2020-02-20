// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix instanceof Array) {
        let flag = false;
        for (let i = 0; i < matrix.length; i++) {
            let el = matrix[i];
            if (el instanceof Array) {
                let temp = [];
                for (let j = 0; j < el.length; j++) {
                    temp.push(el[j]);
                }
                if (flag) {
                    temp = temp.reverse();
                }
                for (let x of temp) {
                    result.push(x);
                }
                flag = !flag;
            } else {
                result.push(el);
            }
        }
    }
    return result;
}
