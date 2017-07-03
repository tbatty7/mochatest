Unit Testing with Mocha and Chai

It is useful to install Mocha in the folder you want to work out of by first going to that folder in the bash shell and then running this command:

npm init

This will cause a bunch of text to pop up in the bash shell, which you will need to go through.  It is a good idea to change the option of “main” to app.js if you create a file with the name of app.js in your folder as your test file.
When you have hit enter for all the fields, it will ask you to answer yes, at which point you can hit ctrl+C to exit.  (This might delete the package.js file on your computer, so you might need to open it first with sublime and then save it)
After the package.js file has been created, open it with sublime if you have not done so yet, and change the field that says “test” and change the value of it to what is showing highlighted below:

  "scripts": {
    "test": "mocha || true"
  },

Save and close that file
Then, to install Mocha, run this command in the bash shell:

npm install --save-dev mocha

This will create another folder in your folder that is called “node_modules”.
Mocha also expects you to create a folder in your containing folder called “test”.
Create a file in the main folder called anything you want, like app.js
Create a file in the test folder called “apptest.js”.  You can name this whatever you want.
(The other example was to use the name first.js in the main folder and firstTest.js in the test folder.)
You want to mimic the structure of the root folder (aka. Main containing folder) with what is in the test folder.  So whatever you name the file.js in the main folder, in the test folder you should name it testFile.js and if, in the main folder, you the file you wanted to test in another folder named “example”, you would want to mimic that folder in the test folder, so you would have a folder in the test folder called “example” as well, and then put the file name of testFile.js if file.js was the name of the file in the example folder.

The app.js file (the one to be tested)
First in this file, type   module.exports   you do not need to use var to declare it because it is not a real object.  The command module.exports is unique syntax that tells Mocha to export the functions you are going to put into this object because they are the functions to be tested.  Then put a function or an object of functions after it like this:

Example of just one function:

module.exports = function() {
	return “Hello World!”;
}

Example of object with multiple functions:

module.exports = {
	sayHello: function(){
		return "Hello World!";
	},
	addNumbers: function(value1, value2){
		return value1 + value2;
	}
}

The testApp.js file (the one in the test folder)
This is the file you use the Chai syntax in.  The first assertion imports Chai into the file:

const assert = require('chai').assert;

This brings in the assert portion of Chai.  It assigns “assert” as a variable that has the functionality of assert in Chai.
You also need to put a second similar line to connect this sheet to the file you are testing.  It looks like this:

const app = require('../app');

Then, under that, you use the describe() command to define what you are testing.  The first parameter of the describe function is a string with a name to represent the name of the file or function you are testing.  You can put whatever you want there and it will not adversely affect anything.  It will be the name that comes up in the command prompt when you run the test.  The second part is a function with an “it()” function in it.  The it() command tells you what it expects to find.  The first parameter is a string that explains what it is testing for, the second parameter is a function that tests for it using syntax from the Chai library (both assert and .equal() are a part of the Chai library).  All the commands in the Chai library can be found at this website: chailjs.com/api/assert/ .  The syntax looks like this:

	describe('App', function(){
		it('sayHello should return Hello World!', function(){
			assert.equal(app(), "Hello World!");
		});
	});

The equal() function has as the first parameter the name of the file without the .js extension, as well as the () because there is only one function in that file.  The second parameter is the string that it expects to find as the result of the function inside the app.js file.

Running the test
Then when you go to your bash prompt, you can type this:

npm run test

This will show on the bash prompt if it succeeded or failed.

Expanding the test
The test file can be expanded to run multiple tests on each function in the app.js folder when the app.js folder holds more than one function in an object as was shown earlier.  The test file code would look like this:

const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe('App', function(){

	describe('sayHello()', function(){
		it('sayHello should return Hello World!', function(){
			// let result = app.sayHello();
			assert.equal(sayHelloResult, "Hello World!");
		});

		it('sayHello should return type string', function(){
			// let result = app.sayHello();
			assert.typeOf(sayHelloResult, 'string');
		});	
	})


	describe('addNumbers()', function(){
		it('addNumbers should be above 5', function(){
			// let result = app.addNumbers(5,5);
			assert.isAbove(addNumbersResult, 5);
		});

		it('addNumbers should return type number', function(){
			// let result = app.addNumbers();
			assert.typeOf(addNumbersResult, 'number');
		});
	});

});
 
This shows you can nest describe() statements inside other describe() statements, as well as have more than one it() in a describe() statement.
The example above runs 4 tests for 2 different functions.  The containing describe() statement has the name of the file and the nested describe() statements have the names of the functions in the app.js file.  Note the variables at the top are used in the assert commands instead of the file name.  That is because the app.js file has more than one function in it now.  So they are accessed like a method with the object.method() syntax where the object is the app.js file name without the file extension.
