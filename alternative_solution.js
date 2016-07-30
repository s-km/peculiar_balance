/* Main function
   The runtime of this solution is O((log(n))^2)
   since all of the power_of_3 helpers run at O(log(n))
   and balance is called log(n) times in the worst case.
*/

function answer(weight) {
  return balance([weight], []); // Note: this returns both sides of the scale as the answer rather than a sequence of assignments but it's trivial to convert it.
}

// Recursive balance function

function balance(left, right) {
  const diff = Math.abs(sum(left) - sum(right));
  const smaller = sum(left) < sum(right) ? left : right;
  
  if (diff === 0)
    return [left, right];
  else if (is_power_of_3(diff))
    smaller.push(diff);
  else if (diff <= next_power_of_3(diff) / 2)
    smaller.push(prev_power_of_3(diff));
  else
    smaller.push(next_power_of_3(diff));
    
  return balance(left, right);
}

// Helpers for balance

function sum(array) {
  sum.reduce((a, b) => a + b, 0);
}

function prev_power_of_3(diff) {
  return get_bounding_powers_of_3(diff)[0];
}

function next_power_of_3(diff) {
  return get_bounding_powers_of_3(diff)[1];
}

function is_power_of_3(diff) {
  return diff === get_bounding_powers_of_3(diff)[1];
}

function get_bounding_powers_of_3(diff) {
  let n = 0;
  let current_power_of_3 = null;
  let last_power_of_3 = null;
  do {
    last_power_of_3 = current_power_of_3;
    current_power_of_3 = Math.pow(3, n);
    n++;
  } while (current_power_of_3 < diff);
  return [last_power_of_3 || current_power_of_3, current_power_of_3];
}
  
