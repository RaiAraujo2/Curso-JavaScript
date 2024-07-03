const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    hobbies: ["reading", "coding", "playing guitar"],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};

//Para transformar em json usamos a interface JSON
const string_pessoa = '{"name":"John Doe","age":30,"occupation":"Software Engineer","hobbies":["reading","coding","playing guitar"],"address":{"street":"123 Main St","city":"New York","country":"USA"}}'

const s_json_pessoa = JSON.stringify(person)

const o_json_pessoa = JSON.parse(string_pessoa)

console.log(person)
console.log(s_json_pessoa)
console.log(o_json_pessoa)