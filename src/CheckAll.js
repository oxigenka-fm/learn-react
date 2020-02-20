import React from 'react';

export default class CheckAll extends React.Component {
  constructor(props) {
    super(props);

    this.toggleAllCompleted = this.toggleAllCompleted.bind(this);
  }

  toggleAllCompleted(event) {
    this.props.toggleAllCompleted(!this.props.isChecked);
  }

  render() {
    return (
      <div>
        <input id="toggle-all" className="toggle-all" onChange={this.toggleAllCompleted} checked={this.props.isChecked} type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    );
  }
}
