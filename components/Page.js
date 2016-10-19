import React, { Component } from 'react'

export default class Page extends Component {
  constructor() {
    super();
    this.state = {
      login: {}
    }
  }
  handleLogin(userName, password) {
    this.props.handleLogin(userName, password)
  }
  changeLogin(event) {
    this.state.login.userName = event.target.value
    this.setState({ login : this.state.login })
  }
  changePassword(event) {
    this.state.login.password = event.target.value
    this.setState({ login : this.state.login })
  }
  render() {
    const { fetching, isValid, isLogged } = this.props
    const inputStyle = (isValid ? {} : {border: '1px solid red'} );
    const buttonSymbols = (fetching ?  
                            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> : 
                            <span>Login &rarr;</span> );
    return (
      <div>
        {isLogged ?
        <div className="col-md-2 col-md-offset-1 text-center"> 
          <span className="glyphicon glyphicon-ok" aria-hidden="true" style={{color: 'green'}}></span>
          Successfully logged 
        </div>:
        <div className="col-md-2 col-md-offset-1 text-center">
          <span style={{ color: 'orange'}} className="glyphicon glyphicon-fire" aria-hidden="true"></span>
          Login
          <br /> 
          <input style={inputStyle} type="text" placeholder="Login" onChange={(e) => this.changeLogin(e)}/>
          <br /> 
          <input type="password" placeholder="Password" onChange={(e) => this.changePassword(e)}/> 
          <br /> 
          <button className="btn btn-default" 
                  onClick = {this.handleLogin.bind(this, this.state.login.userName, this.state.login.password)}
                  style={{borderRadius: '20px', color: 'blue', width: 80}}>
            {buttonSymbols}
          </button>
        </div>}
      </div>  
    );
  }
}
