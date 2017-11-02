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
    </div>
)

let count = 0;
const addOne = () => {
    count++;
//console.log(count++);
//replace with call to function
renderCounterApp();
};
const minusOne = () => {
   count--;
   renderCounterApp();   
    };
    
    const reset = () => {
        count = 0;
        renderCounterApp();        
        };

const appRoot = document.getElementById('app');

//needs no arguments
// grab templateTwo and paste here
// then paste reactDom.render in here too
// call function
const renderCounterApp = () => {
    const templateTwo = (
        <div>
           <h1>Count: {count}</h1>
           <button onClick={addOne}>+1</button>
           <button onClick={minusOne}>-1</button>
           <button onClick={reset}>reset</button>
        </div>
      );
      ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
