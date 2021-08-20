// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Tolu',
//     age: 24
// };
// better to allow ts infer

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Tolu',
//     age: 24,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Tolu',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// the push method is an exception that works on a tuple

// person.role = [0, 'admin', user];
// will not work to add another thing to tuple

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !ERROR
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}