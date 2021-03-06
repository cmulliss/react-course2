console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const user = {
    name: 'Motley',
    age: 18,
    location: 'Ice Floe'
};

const template = (
  <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
      <ol>
          <li>Item One</li>
          <li>Item Two</li>
      </ol>
  </div>
);

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
const templateTwo = (
  <div>
      <h1>{user.name ? user.name : 'no name'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
