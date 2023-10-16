import React from "react";
import TableRow from "./TableContent/TableRow";
import Details from "./TableContent/Details";
import axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
    filteredUsers: [],
    typeFirstName: "",
    activeUserIndex: 2
  }


  componentDidMount() {
    axios.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
      .then((respone) => {
        this.setState({ users: respone.data })
        console.log(respone.data);
      })
  }

  changeActiveIndex = (index) => {
    this.setState({ activeUserIndex: index })
  }

  changeFirstName = (e) => {
    var typeFirstName = e.target.value
    console.log(e.target.value);
    var filteredUsers = this.state.users.filter((user, i) => {
      if (user.firstName.toLowerCase().includes(typeFirstName.toLowerCase())) {
        return true;
      }
    })
    this.setState({ filteredUsers, typeFirstName });
  }

  render() {
    return (
      <>
        <main>
          <div id="table-section">
            <form action="/">
              <img src='./img/search-icon.svg' alt="Search Icon" />
              <input type="text" placeholder="Enter something" name="search-box" id="search-box"
                onChange={(e) => { this.changeFirstName(e) }}
                value={this.state.typeFirstName}
              />
            </form>
            <div id="table-wrapper">
              <div id="table-headers">
                <table>
                  <thead>
                    <tr>
                      <th className="column1">Id</th>
                      <th className="column2">FirstName</th>
                      <th className="column3">LastName</th>
                      <th className="column4">Email</th>
                      <th className="column5">Phone</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div id="table-data">
                <table>
                  <tbody>
                    {this.state.filteredUsers.length > 0 || this.state.typeFirstName !== "" ?
                      this.state.filteredUsers.map((user, i) => {
                        return <TableRow
                        changeActiveIndex= { this.changeActiveIndex}
                          id={user.id}
                          activeUserIndex={this.state.activeUserIndex}
                          index={i}
                          firstName={user.firstName}
                          lastName={user.lastName}
                          email={user.email}
                          phone={user.phone}
                        />
                      })
                      :
                      this.state.users.map((user, i) => {
                        return <TableRow
                          changeActiveIndex= { this.changeActiveIndex}
                          id={user.id}
                          activeUserIndex={this.state.activeUserIndex}
                          index={i}
                          firstName={user.firstName}
                          lastName={user.lastName}
                          email={user.email}
                          phone={user.phone}
                        />
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {this.state.users.length > 0 ? <Details
            ActiveUserDetails={this.state.users[this.state.activeUserIndex]}
          /> : ""}
        </main>
      </>
    )
  }
}

export default App;
