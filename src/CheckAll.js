import React from 'react';

class CheckAll extends React.Component {
  onChange() {
    // TODO: find out why no THIS defined here!!!
    console.log(this.props);
    this.props.toggleAllCompleted();
  }

  render() {
    return (
      <div>
        <input id="toggle-all" className="toggle-all" onChange={this.onChange} checked={this.props.checked} type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    );
  }
}

export default CheckAll;
