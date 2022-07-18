import React from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends React.Component {
  state = {
    button: '',
    styleAll: 'btn btn-info',
    styleActive : 'btn btn-outline-secondary',
    styleDone: 'btn btn-outline-secondary'
  }
  onButtonAllClick = (target) => {
    
    this.setState({
        button: "onButtonAllClick",
        styleAll: 'btn btn-info',
        styleActive : 'btn btn-outline-secondary',
        styleDone: 'btn btn-outline-secondary'
    })
    this.props.onButtonClick(this.state.button)
  }
  onButtonActiveClick = (target) => {
    
    this.setState({
      button: "onButtonActiveClick",
      styleAll: 'btn btn-outline-secondary',
      styleActive : 'btn btn-info',
      styleDone: 'btn btn-outline-secondary'
    })
    this.props.onButtonClick(this.state.button)
  }
  onButtonDoneClick = (target) => {
    
    this.setState({
      button: "onButtonDoneClick",
      styleAll: 'btn btn-outline-secondary',
      styleActive : 'btn btn-outline-secondary',
      styleDone: 'btn btn-info'
    })
    this.props.onButtonClick(this.state.button)
  }
  render() {
     return (
      <div className="btn-group">
        <button type="button"
                className={this.state.styleAll}
                onClick={this.onButtonAllClick}>
                        All</button>
        <button type="button"
                className={this.state.styleActive}
                onClick={this.onButtonActiveClick}>
                        Active</button>
        <button type="button"
                className={this.state.styleDone}
                onClick={this.onButtonDoneClick}>
                        Done</button>
      </div>
  );
  }
}

export default ItemStatusFilter;
