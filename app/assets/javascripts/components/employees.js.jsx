var Employees = React.createClass({
  getInitialState() {
    return { employees: this.props.employees }
  },

  render() {
    employees = this.state.employees.map( function(employee) {
      return (
        <Employee employee={employee} key={employee.id} />
      );
    });
    return (
      <div>
        <h1>Employees</h1>
        <div id="employees">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Manager</th>
              </tr>
            </thead>
            <tbody>
              {employees}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});
