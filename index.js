// Create an object
person = {
    name: 'Anders',
    age: 51,
    city: 'Hallsberg'
};

// Modify object properties
person.age = 52;
person.email = 'anders.stenhammar@gmail.com';

// Access object properties && Loop through Object Properties
for(prop in person){
    console.log(`${prop}: ${person[prop]}`);
}

// Object with methods
car = {
    make: 'Mazda',
    model: 'M2 Hybrid',
    year: 2022,
    color: 'Red',
    automatic: true,
    showInfo(){
        console.log(
            this.make,
            this.model,
            this.year,
            this.color
        );
    }
};

car.showInfo();

// Object with nested properties
student = {
    name: 'Ludwig',
    age: 23,
    grades: {
        math: 'A',
        history: 'B',
        science: 'C',
        biology: 'B'
    }
};

// Modify nested property
student.grades.science = 'D';
console.log(student.grades.science);

// Array of objects
let books = [
    book = {
        title: 'Bilbo',
        author: 'JRR Tolkien'
    },
    book = {
        title: 'Dr No',
        author: 'Ian Fleming'
    },
    book = {
        title: 'War of the worlds',
        author: 'HG Wells'
    },
    book = {
        title: '20 000 leagues under the sea',
        author: 'Jules Verne'
    }
];

// Loop through array of objects
for(book in books){
    console.log(`Title: ${books[book].title} Author: ${books[book].author}`);
}