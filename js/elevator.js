// PADARYTI SU Math.abs()
function elevator1(left, right, call){
    return Math.abs(call - right) > Math.abs(call - left) ? "left" : "right";
  }
  

function elevator(left, right, call) {
    if (right === left) return 'right';
    if (right === call) return 'right';
    if (left === call && right !== call) return 'left';
    if (call < left && left < right) return 'left';
    if (call < right && right <= left) return 'right';
    if (call > right && right > left) return 'right';
    if (call > left && left > right) return 'left';
    if (call === 1 && (left + right) === 2) return 'right';

}
console.log(elevator(0, 1, 0)); // => "left"
console.log(elevator(0, 1, 1)); // => "right"
console.log(elevator(0, 1, 2)); // => "right"
console.log('-------');
console.log(elevator(0, 0, 0)); // => "right"
console.log(elevator(0, 2, 1)); // => "right" 
console.log(elevator(2, 0, 1)); // => "right" 
console.log(elevator(1, 2, 0)); // => "left" 