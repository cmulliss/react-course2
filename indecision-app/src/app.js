

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
  render () {
    return (
      <div>
      <h3>{this.props.actions}</h3>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render () {
    console.log(this.props);
    return (
      <div>
        <p>Options component</p>
        <p>We have {this.props.options.length} options.</p>
        {
          this.props.options.map((option) =>
            <p key={option}> Option: {option}</p>)
          }
      </div>
    )
  }
}

class AddOptions extends React.Component {
  render () {
    return (
      <div>
        add options
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
        option component
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
