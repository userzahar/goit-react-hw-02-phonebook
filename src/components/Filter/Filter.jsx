import { InputStyled } from "components/Form/StyledInput";
import { LabelStyled } from "./FilterStyled";

const { Component } = require("react");

export class Filter extends Component {

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
        this.props.filterData({ filter: target.value });
    }

    render() {
        return <>
            <LabelStyled htmlFor="filter">Find Contacts By Name </LabelStyled>
            <InputStyled type="text" id="filter" name="filter" onChange={this.handleChange} />
        </>
    }
}

