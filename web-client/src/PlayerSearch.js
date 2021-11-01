import React, { Component, Fragment } from 'react';

class PlayerSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      print: false,
      data: '',
      selectValue: ''
    };
  }

  setPrint() {
    this.setState({ print: true });
  }

  getData = (val) => {
    console.warn(val.target.value)
    this.setState({ data: val.target.value })
    this.setState({ print: false });
  }

  printSearch = () => {
    return (
      <div class="border border-3 p-5">
        <p>You are searching player by {this.state.selectValue} [{this.state.data}]</p>
      </div>
    )
  }

  getSelectValue = (e) => {
    this.setState({ selectValue: e.target.value })
    this.setState({ print: false });
  }



  render() {
    const options = [
      {
        label: "Username",
        value: "username"
      },
      {
        label: "Email",
        value: "email"
      },
      {
        label: "Experiance",
        value: "experiance"
      },
      {
        label: "Level",
        value: "level"
      }
    ]
    return (
      <Fragment>
        <div className="row mb-5 mt-5" id="formSearch">
          <div className="col-12 col-md-6">
            <h5 class="text-center" id="judulForm">Search Player</h5>
            <select class="form-select"
              value={this.state.selectValue}
              onChange={this.getSelectValue}
              defaultValue="Choose..." >
                <option>--pilih--</option>
              {options.map((option) => <option value={option.value}>{option.label}</option>)}
            </select>
            <input class="form-control" type="text" onChange={this.getData} />
            <button class="btn btn-primary" onClick={() => this.setPrint()} >Search </button>
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            {this.state.print ? this.printSearch() : null}

          </div>
        </div>
      </Fragment>
    );
  }
}

export default PlayerSearch;