// Creating a student1 object
const student1 = {
  registration: '12342',
  name: 'Bijen',
  age: 23,
  marks: 98
};

//prints all the keys in student1 object
for (const key in student1) {
  console.log(key + ': ' + student1[key]);
}

// Creating a student2 object
const student2 = {
  registration: '17342',
  name: 'Sujen',
  age: 27
};
//This sets the enumerable attribute of marks property to false
Object.defineProperty(student2, 'marks', {
  value: 97,
  configurable: true,
  writable: false,
  enumerable: false
});

//To print whether enumerable or not
console.log(student2.propertyIsEnumerable('registration')); // Expected true
console.log(student2.propertyIsEnumerable('name')); // Expected true
console.log(student2.propertyIsEnumerable('age')); // Expected true
console.log(student2.propertyIsEnumerable('marks')); // Expected false

// This will not print the property whose enumerable property is set to false
for (const key in student2) {
  console.log(key + ': ' + student2[key]); // Expected registration, name, age but not marks;
}
