# Implement a curyying

[Problemlink](https://www.algochurn.com/frontend/implement-currying)

# Learning and Resources:

1.  [Closures](https://youtu.be/Q4UWFGRVOpQ?si=yp3LIfZRj3kF9qiS)

2.  [Currying1](https://dev.to/darkmavis1980/a-practical-example-on-how-to-use-currying-in-javascript-1ae9)

3.  [Currying2](https://www.geeksforgeeks.org/what-is-currying-function-in-javascript/)

4.  sum(a)(b)(c) \
 \_ \_ \
 x(b)(c) \
 \_\_
y(c) \
 break down into sub parts and observe a recursive pattern
<Details>

Closure:- gives access to the lexical enivironment or scope of a function to its inner function

```javascript
function outer(a) {
  return function inner() {
    console.log(a + 5);
  };
}

const inner = outer(5);
inner();
```

Why It Matters: Closures are useful for maintaining state in asynchronous code and creating private variables.
React event handlers we use closures

Currying:- breaking down a function which has multiple paramets to a chain of functions having single parameter each is
dependent on one other .and is a closure

```javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = add(5); // returns a function that adds 5
console.log(addFive(6)); //
```

Why It Matters: Currying allows for creating specialized functions and enables partial application, making functions more flexible and composable in functional programming paradigms.

</Details>
