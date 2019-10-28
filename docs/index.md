# Pre Core JS

## Getting started

- Download and install the [Webstorm Trial](https://www.jetbrains.com/webstorm/download/#section=mac)
- Create a new empty project and create two files `index.html` and `index.js` and paste the content below. 

**index.html**
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div>
    Hello World
</div>
<script src="index.js" type="text/javascript"></script>
</body>
</html>
``` 
**index.js**
```js
console.log('Hello World');
```

- If you hover on the top right corner of the `index.html`, you will see the following image

![Screenshot](images/001.png)

- Click on the **Chrome** browser on that link.
- Then, open the **Chrome Dev Tools** using `Ctrl Shift J` (on Windows) or `Ctrl Option J` (on Mac);
- Click on the `Console` tab and you should see the "Hello World". 

## Practicing with Strings, Arrays and Numbers

 - Practice `non-deprecated` (watch out for the thumbs down sign) , relevant prototype methods only. 
 - Methods will be under <Entity>.prototype.<method name> where Entity is String | Number | Array. e.g.
```js
// slice is a method available under String.prototype.slice and can be used as:
const str = 'John Doe';
console.log(str.slice(0, 3));
``` 
 - Strings: [Reference MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype)
 - Numbers: [Number MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype)
 - Arrays: [Array Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
 - Practice examples, and gain an understanding about the utility methods. 
 - Store the examples that **you type** in .js files within a repository. You should push the same repository to github and share the link.
 - The entire exercise will take you 7 hours overall. Again, **type out the code**. Reading it will not be enough. 
 
