

class IndecisionApp extends React.Component {
  render () {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['one', 'two', 'three', 'four'];
    const actions = 'Action stuff here';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action actions={actions}/>
        <Options options={options}/>
        <AddOptions />
      </div>
    )
  }
}
class Header extends React.Component {
  render () {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )  
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render () {
    return (
      <div>
      <h3>{this.props.actions}</h3>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}
class Options extends React.Component {
  handleRemoveAll() {
    alert('Remove all options');
  }
  render () {
    console.log(this.props);
    return (
      <div>
        <p>Options component</p>
        <button onClick={this.handleRemoveAll}>Remove All Options</button>
       {/*} <p>We have {this.props.options.length} options.</p>
        <p>The second option is: {this.props.options[1]}</p> */}
        {
         this.props.options.map((option) => <Option key={option} optionText={option} />
         )
          }
      </div>
    )
  }
}
class AddOptions extends React.Component {
  render () {
    return (
      <div>
       <p>add options</p>
      </div>
    )
  }
}
class Option extends React.Component {
 handleAddOption() {
      e.preventDefault();

      const option = e.target.elements.option.value;
  }
  render () {
    return (
      <div>
        <li>Option: {this.props.optionText}</li>
        <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button onClick={this.handleAddOption}>Add Option</button>
      </form>
      </div>
    )
  }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
