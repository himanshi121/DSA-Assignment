//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
function twoSum(nums, target_num) {
    var map = [];
    var indexnum = [];
    
    for (var x = 0; x < nums.length; x++)
    {
    if (map[nums[x]] != null)
    {
    var index = map[nums[x]];
    indexnum[0] = index;
    indexnum[1] = x;
    break;
    }
    else
    {
    map[target_num - nums[x]] = x;
    }
    }
    return indexnum;
    }
  console.log(twoSum([10,20,10,40,50,60,70],50));

  //Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

  let numbers = [1, 2, 3, 4, 5];
  let reversedNumbers = numbers.reverse();
  
  console.log(reversedNumbers);
  // [5, 4, 3, 2, 1]
  
  console.log(numbers);
  // [5, 4, 3, 2, 1]

  //Q3. Write a program to check if two strings are a rotation of each other?

  function areRotEq(str1, str2) {
    for (var a = 0; a < str1.length; a++) {
      if (str1.charAt(a) != str2.charAt(str2.length - (a + 1))) {
        return false;
      }
    }
    return true;
  }
  console.log(areRotEq("abcd", "dcba"));

  //Q4. Write a program to print the first non-repeated character from a string?
  
  function find_FirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
   
    for (var x = 0; x < arra1.length; x++) {
      ctr = 0;
   
      for (var y = 0; y < arra1.length; y++) 
      {
        if (arra1[x] === arra1[y]) {
          ctr+= 1;
        }
      }
   
      if (ctr < 2) {
        result = arra1[x];
        break;
      }
    }
    return result;
  }
  console.log(find_FirstNotRepeatedChar('abacddbec'));

  //Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

  function towerOfHanoi(n, fromRod, toRod, auxRod) {
    let steps = [];
    function move(n, fromRod, toRod, auxRod) {
      if (n === 1) {
        steps.push(`Move disk 1 from rod ${fromRod} to rod ${toRod}`);
        return;
      }
      move(n - 1, fromRod, auxRod, toRod);
      steps.push(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`);
      move(n - 1, auxRod, toRod, fromRod);
    }
    move(n, fromRod, toRod, auxRod);
    return steps;
  }
  let n = 3;
  let fromRod = 'A';
  let toRod = 'C';
  let auxRod = 'B';
  let steps = towerOfHanoi(n, fromRod, toRod, auxRod);
  console.log(steps);
    

  
  //Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

  function postfixToPrefix(expression) {
    let stack = [];
    let result = [];
    for (let i = expression.length - 1; i >= 0; i--) {
      let character = expression[i];
      if (!isOperator(character)) {
        stack.push(character);
      } else {
        let operand1 = stack.pop();
        let operand2 = stack.pop();
        let operator = character;
        let temp = operator + operand1 + operand2;
        stack.push(temp);
      }
    }
    return stack.pop();
  }
  
  function isOperator(character) {
    return character === '+' || character === '-' || character === '*' || character === '/';
  }
  let postfixExpression = "ABC/-AK/L-*";
  let prefixExpression = postfixToPrefix(postfixExpression);
  console.log(prefixExpression);

  //Q.7 Write a program to convert prefix expression to infix expression.
    
  function prefixToInfix(expression) {
    let stack = [];
    for (let i = expression.length - 1; i >= 0; i--) {
      let item = expression[i];
      if (!isOperator(item)) {
        stack.push(item);
      } else {
        let operand1 = stack.pop();
        let operand2 = stack.pop();
        let result = '(' + operand1 + item + operand2 + ')';
        stack.push(result);
      }
    }
    return stack.pop();
  }
  
  function isOperator(ch) {
    return ch === '+' || ch === '-' || ch === '*' || ch === '/';
  }
  let expression = '*-A/BC-/AKL';
  let infixExpression = prefixToInfix(expression);
  console.log(infixExpression);

  //Q8. Write a program to check if all the brackets are closed in a given code snippet.

  function checkBrackets(code) {
    let stack = [];
    let map = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    for (let i = 0; i < code.length; i++) {
      let char = code[i];
      if (char in map) {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        let last = stack.pop();
        if (map[last] !== char) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  let code = 'function foo() { return 0; }';
  let result = checkBrackets(code);
  console.log(result);

  //Q9. Write a program to reverse a stack.
  function reverseStack(stack) {
    if (stack.length === 0) {
      return;
    }
    let last = getAndRemoveLast(stack);
    reverseStack(stack);
    stack.push(last);
  }
  
  function getAndRemoveLast(stack) {
    let result = stack.pop();
    if (stack.length === 0) {
      return result;
    }
    let last = getAndRemoveLast(stack);
    stack.push(result);
    return last;
  }
  let stack = [1, 2, 3, 4, 5];
  reverseStack(stack);
  console.log(stack);

  //Q10. Write a program to find the smallest number using a stack.

  function findSmallest(array) {
    let stack = [];
    let min = Number.MAX_VALUE;
    for (let i = 0; i < array.length; i++) {
      let num = array[i];
      stack.push(num);
      if (num < min) {
        min = num;
      }
    }
    return min;
  }
  let array = [3, 1, 4, 2, 5];
  let results = findSmallest(array);
  console.log(results);