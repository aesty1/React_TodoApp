import React from "react";
import "./item-add-form.css";

class itemAddForm extends React.Component {
    state = {
        label: ""
    }
    onLabelChange = (e) => {

        this.setState({
            label: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.label.length !== 0) {
            this.props.addForm(this.state.label);
            this.setState({
                label: ''
            });
        }
        
        
    }
    render() {
        return (
            <form className="item-add-form"
            onSubmit={this.onSubmit}>
                <input 
                type="text"
                className="form-control search-input"
                onChange={this.onLabelChange}
                placeholder="Add todo item"
                value={this.state.label}></input>
                <button
                 className="btn btn-info"
                 >Add item</button>
            </form>
        )
        
    }
    
}

export default itemAddForm;