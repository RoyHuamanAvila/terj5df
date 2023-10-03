import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newGuest: {
        first_name: "",
        last_name: "",
      },
      guests: [],
    };
  }

  handleChangeFirstName = (e) => {
    this.setState({
      newGuest: {
        ...this.state.newGuest,
        first_name: e.target.value,
      },
    });
  };

  handleChangeLastName = (e) => {
    this.setState({
      newGuest: { ...this.state.newGuest, last_name: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      guests: this.state.guests.concat(this.state.newGuest),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="first-name"
                  value={this.state.newGuest.first_name}
                  onChange={this.handleChangeFirstName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  name="last-name"
                  value={this.state.newGuest.last_name}
                  onChange={this.handleChangeLastName}
                />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">
                  Agregar Invitado
                </button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.guests.map((guest, index) => (
                  <tr key={index}>
                    <td>{guest.first_name}</td>
                    <td>{guest.last_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
