# SAN Examples

```js
const data = ['info', 'meta', 'check', 'mets'];

// Context and this

// Fat arrow function pick up the local context outside the function

// predicate function args -> boolean

// Change this to a function object and see what happens
const predicate  = (str, index, arr) => {
  // console.log(index);
  // console.log(arr);
  console.log(this);
  return str.startsWith('me');
};

const predicateFatArrow = str => str.startsWith('me');

console.log(data.find(predicate, {
  name: 'Mahantesh'
}));

console.log(data.findIndex(predicateFatArrow));

// console.log(data.find('meta')); // will throw error
```
