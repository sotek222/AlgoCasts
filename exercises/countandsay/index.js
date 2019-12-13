// --- Directions
// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count - and - say 
// sequence.You can do so recursively, in other words from the previous member read off 
// the digits, counting the number of digits in groups of the same digit.
// --- Examples
// countAndSay(2) --> "11"
// countAndSay(3) --> "21"
// countAndSay(4) --> "1211"
// countAndSay(5) --> "111221"
// countAndSay(6) --> "312211"

function countAndSay(n){
  return buildResp(n, "1");
};

function buildResp(n, resp){
  if(n === 1){
    return resp;
  };

  let counter = 1;
  let newResp = "";

  for(let i = 0; i < resp.length; i++){
    if(resp[i] === resp[i + 1]){
      counter++;
    } else {
      newResp += counter + resp[i];
      counter = 1;
    };
  };
  return buildResp(n - 1, newResp);
};

module.exports = countAndSay;