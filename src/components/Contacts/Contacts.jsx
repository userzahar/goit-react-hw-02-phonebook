
import { Component } from "react";
export class Contacts extends Component {
    render() {
        return <>
            <h2>Contacts</h2>
            <ul>
                {this.props.list()}
            </ul>
        </>
    }
}