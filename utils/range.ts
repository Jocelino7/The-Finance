function range(start:number, end:number, step = 1) {
    const result = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
    }
    return result;
}
export {range}