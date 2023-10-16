import React from "react";
import "./TableData.css"
class Details extends React.Component {


    render() {
        console.log(this.props.ActiveUserDetails)
        return (
            <>
                <div id="info-wrapper">


                    <h1>Details</h1>
                    <p>Click on a table item to get detailed information</p>
                    <div id="info-content">
                        <div><b>User selected:</b>
                            {this.props.ActiveUserDetails.firstName} {this.props.ActiveUserDetails.lastName}
                        </div>
                        <div>
                            <b>Description: </b>
                            <textarea cols="50" rows="5" readonly>
                                {this.props.ActiveUserDetails.description}
                            </textarea>
                        </div>
                        <div><b>Address:</b>
                            {this.props.ActiveUserDetails.address.streetAddress}
                        </div>
                        <div><b>City:</b>
                            {this.props.ActiveUserDetails.address.city}
                        </div>
                        <div><b>State:</b>
                            {this.props.ActiveUserDetails.address.state}
                        </div>
                        <div><b>Zip:</b>
                            {this.props.ActiveUserDetails.address.zip}
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default Details;