console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};
const template =(
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
    <form>
        <input type="text" name="option"></input>
        <button>Add Option</button>
    </form>
    </div>
)
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

