import Handlebars from 'handlebars';
const users = [
    { name: "Олексій", age: 30, city: "Київ" },
    { name: "Марина", age: 25, city: "Львів" },
    { name: "Іван", age: 35, city: "Одеса" },
];
const templateSource = ` <ul>
        {{#each this}}
        <li>{{name}}, {{age}} років, {{city}}</li>
        {{/each}}
    </ul>`;
    const template = Handlebars.compile(templateSource);
    document.querySelector('#app').innerHTML = template(users);
    const filteredData = (query) => {
const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
document.querySelector('#app').innerHTML = template(filteredUsers);
    }
    document.querySelector('#search').addEventListener('input', (e) => {
filteredData(e.target.value);
    })