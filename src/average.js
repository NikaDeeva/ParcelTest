export function average(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0){
       alert('Error');
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
module.exports = average;