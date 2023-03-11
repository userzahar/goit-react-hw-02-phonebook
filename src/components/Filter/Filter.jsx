const { Component } = require("react");

export class Filter extends Component {
    state = {
        filter: ''
    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
        this.props.filterData({ filter: target.value });
    }

    render() {
        return <label htmlFor=""><p>Find Contacts By Name</p>
            <input type="text" name="filter" onChange={this.handleChange} /></label>
    }
}