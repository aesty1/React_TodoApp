import React from 'react';
import './search-panel.css';

class SearchPanel extends React.Component {
  state = {
    label: ''
  }
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    }, () => {
      this.props.searchItem(this.state.label)
    });
    
    if(e.value === '') {
      this.props.searchItem('')
    }
  }
  render () {
    return (
      <input type="text"
          className="form-control search-input"
          placeholder="type to search" 
          onChange={this.onLabelChange}/>
    );  
      
    
  }
  
};

export default SearchPanel;
