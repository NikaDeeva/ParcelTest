import Handlebars from 'handlebars';

const users = [
  { name: "Олексій", age: 30, city: "Київ" },
  { name: "Марина", age: 25, city: "Львів" },
  { name: "Іван", age: 35, city: "Одеса" },
];

const templateSource = `
  <ul>
      {{#each this}}
      <li>{{name}}, {{age}} років, {{city}}</li>
      {{/each}}
  </ul>`;

const template = Handlebars.compile(templateSource);

document.getElementById('app').innerHTML = template(users);

const filterDataName = (query) => {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );
  document.getElementById('app').innerHTML = template(filteredUsers);
};

document.getElementById('search-name').addEventListener('input', (e) => {
  filterDataName(e.target.value);
//   if (filteredUsers.length === 0) return alert('This user does not exist');
});
const filterDataAge = (query) => {
    const filteredUsers = users.filter(user =>
        user.age.toString().includes(query)
    );
    document.getElementById('app').innerHTML = template(filteredUsers);
  };
  
  document.getElementById('search-age').addEventListener('input', (e) => {
    filterDataAge(e.target.value);
    // if (filteredUsers.length === 0) return alert('This user does not exist');
  });
  const filterDataCity = (query) => {
    const filteredUsers = users.filter(user =>
      user.city.toLowerCase().includes(query.toLowerCase())
    );
    document.getElementById('app').innerHTML = template(filteredUsers);
  };
  
  document.getElementById('search-city').addEventListener('input', (e) => {
    filterDataCity(e.target.value);
    // if (filteredUsers.length === 0) return alert('This user does not exist');
  });