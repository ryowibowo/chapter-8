import React, { Component, Fragment } from 'react';

class PlayerCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      printPlayer: false,
      username: '',
      email: '',
      password: '',
      experiance: '',
      lvl: ''
    };
  }

  // function
  getUsername = (val) => {
    this.setState({ username: val.target.value })
    this.setState({ printPlayer: false });
  }

  getEmail = (val) => {
    this.setState({ email: val.target.value })
    this.setState({ printPlayer: false });
  }

  getPassword = (val) => {
    this.setState({ password: val.target.value })
    this.setState({ printPlayer: false });
  }

  getExperiance = (val) => {
    this.setState({ experiance: val.target.value })
    this.setState({ printPlayer: false });
  }

  getLevel = (val) => {
    this.setState({ level: val.target.value })
    this.setState({ printPlayer: false });
  }

  setPrintPlayer() {
    this.setState({ printPlayer: true });
  }

  printCreatePlayerData = () => {
    return (
      <div class="border border-3 p-5">
        <h4 class="mb-4"> Successfully created a player:</h4>
        <p> Username : {this.state.username} </p>
        <p> Email : {this.state.email} </p>
        <p> Password : {this.state.password} </p>
        <p> Experiance : {this.state.experiance} </p>
        <p> Level : {this.state.level} </p>
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        {/* Create player - start */}
        
        <div class="row mt-5 d-flex" id="formCreate">
          <div class="col-12 col-md-6">
            <h5 class="text-center" id="judulForm">Create Player</h5>
            <form id="form">
              <div class="mb-3">
                <label for="username" class="form-label">Username</label> <br />
                <input type="text" onChange={this.getUsername} name="username" class="form-control" id="username" placeholder="Masukkan username" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label> <br />
                <input type="text" onChange={this.getEmail} name="email" class="form-control" id="email"
                  placeholder="Masukkan email" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label> <br />
                <input type="password" onChange={this.getPassword} name="password" class="form-control" id="password" placeholder="Masukkan password" />
              </div>
              <div class="mb-3">
                <label for="experiance" class="form-label">Experiance</label> <br />
                <input type="text" onChange={this.getExperiance} name="experiance" class="form-control" id="experiance"
                  placeholder="Masukkan experiance" />
              </div>
              <div class="mb-3">
                <label for="level" class="form-label">Level</label> <br />
                <input type="text" onChange={this.getLevel} name="level" class="form-control" id="level"
                  placeholder="Masukkan level" />
              </div>
            </form>
            <div class="mb-3">
              <button class="btn btn-primary" onClick={() => this.setPrintPlayer()}>Create Player</button>
            </div>
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            {this.state.printPlayer ? this.printCreatePlayerData() : null}
          </div>
        </div>
        {/* Create player - end */}
      </Fragment>
    );
  }
}

export default PlayerCreate;