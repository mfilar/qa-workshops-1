// Addressing object elements
// Members of objects can be addressed using the brackets operator [],
// very much like arrays, but just like many other object oriented languages,
// the period . operator can also be used


// With the following object defined:
const person = {
  name: {
    first: "Mccarty",
    last: "Cummings"
  },
  age: 39,
  isActive: false,
  company: "Ultrimax",
  email: "mccarty.cummings@ultrimax.us",
  phone: "+1 (821) 480-2080",
  friends: [
    {
      id: 0,
      name: "Gill Parker"
    },
    {
      id: 1,
      name: "Nelson Keith"
    },
    {
      id: 2,
      name: "Rhodes Diaz"
    }
  ]
};


// ------------------------------------------------------------------
// TODO#1: get the full name of the person (should be first name then the space and the last name

let fullName;

/**
 * Test
 * Do not modify lines below
 */
console.log('#1', fullName);
if (fullName === "Mccarty Cummings") console.log("#1 Yaay,  🎉");



// ------------------------------------------------------------------
// TODO#2: get the name of the second friend

let secondFriend;

/**
 * Test
 * Do not modify lines below
 */
console.log('#2', secondFriend);
if (secondFriend === "Nelson Keith") console.log("#2 Yaay,  🎉");
