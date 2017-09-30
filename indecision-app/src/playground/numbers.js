const numbers = [55, 101, 1000];

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
      <div>
        { 
          numbers.map((number) => {
            return <p key={number}> Number: <li>{number * 2}</li> </p>;
          })
        }
</div>

render();
  );
  ReactDOM.render(template, appRoot);


