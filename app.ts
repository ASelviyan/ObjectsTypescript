//SINGULAR OBJECTS

//this variable is an object type because we a assigned an object key word to it 
const personOne: object = {} 

// The first bracket does not create a new javascript object, this is just typescripts code.
// This code tells typescript about the types of the key that will be in the object
// this is done so that typescript knows the structure of the object
const personTwo: {} = {}

//EX:
const personThree: {
    //these are key types
    name: string;
    age: number;
} = {
    name: 'Angelika',
    age: 22
};

//this code...
const personFour: object = {
    name: 'Angelika',
    age: 22
} 

//and this code are the same
//the empty brackets just mean that this variable is n object
const personFive: {} = {
    name: 'Angelika',
    age: 22
};

//THIS IS THE BETTER SYNTAX IF YOU DON'T HAVE TO SPECIFY WITH TYPESCRIPT
const person = {
    name: 'Angelika',
    age: 22
};


console.log(personThree.name)

//------------------------------------------------------------------------

//NESTED OBJECTS 

//this is the regular javascript nested object
const productJavascript = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }

  //this is would be the type pof such an object 

const productTypescript: {
    id: string;
    price: number;
    tags: string[]; //when the type is an array you let typescript know what kind of type the array is (aka string, number) and then but square brackets next to them 
    details: {
        title: string;
        description: string
    }
} =  {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
}