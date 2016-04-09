var Employee = React.createClass({
  getInitialState() {
    return {
      employee: this.props.employee
    }
  },

  render() {
    return (
      <tr>
        <td>{this.state.employee.name}</td>
        <td>{this.state.employee.email}</td>
        <td>{this.state.employee.manager ? '✔' : ''}</td>
      </tr>
    );
  }
}); 

