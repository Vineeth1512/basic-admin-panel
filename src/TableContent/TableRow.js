import React from "react";
import "./TableData.css"


// Update the path accordingly
class TableData extends React.Component {

    render() {
        return (
            <>
                <tr className={`data-row  ${this.props.index === this.props.activeUserIndex ? "active" : ""}`}
                 onClick={() => { this.props.changeActiveIndex(this.props.index) }}
                >
                    <td className="column1">{this.props.id}</td>
                    <td className="column2">{this.props.firstName}</td>
                    <td className="column3">{this.props.lastName}</td>
                    <td className="column4">{this.props.email}</td>
                    <td className="column5">{this.props.phone}</td>
                </tr>
            </>
        )
    }
}
export default TableData;