
let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    renderText();
}

const renderText = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'hide details' : 'show details'}
            </button>
            {visibility && (
                <div>
                <h1>Hello Cherry</h1>
                </div>
            )};
        </div>
    );

ReactDOM.render(jsx, document.getElementById('app'));
};
renderText();


 