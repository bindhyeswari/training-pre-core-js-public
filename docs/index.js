// Constructor: function that is used with the new keyword
// Standards / Coding BP: Constructors are capitalized functions
function Person(name) {
  this.name = name;
}

// Person()
//  Invoke the function and return the output
// new Person()
// 1. Creates a new object
// 2. Sets the parent of the new object to Person.prototype
// 3. Invokes the function Person with the this keyword pointing to the new object

const parent = Person.prototype;

const mahantesh = new Person('Mahantesh');
// Check that the parent of mahantesh object actually points to parent
console.log((Object.getPrototypeOf(mahantesh) === parent));
// Check that the function Person is invoked with this pointing to the new object
console.log(mahantesh.name);


// Translate the code const mahantesh = new Person(); into Object.create
const krithika = Object.create(parent);
console.log((Object.getPrototypeOf(krithika) === parent));
// Invoke the Person function with this keyword pointing to the new object
// todo: read up on call works
Person.call(krithika, 'Krithika');
console.log(krithika.name);

