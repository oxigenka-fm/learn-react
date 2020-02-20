import React from 'react';

export default class CheckAll extends React.Component {
  onChange() {
    // TODO: find out why no THIS defined here!!!
    console.log(this.props);
    this.props.toggleAllCompleted();
  }

  render() {
    return (
      <div>
        <input id="toggle-all" className="toggle-all" onChange={this.onChange} defaultChecked={this.props.isChecked} type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    );
  }
}
