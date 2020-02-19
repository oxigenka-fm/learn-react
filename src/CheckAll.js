import React from 'react';

class CheckAll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };
  }

  onClick() {
    this.props.toggleCompleted();
  }

  render() {
    return (
      <div>
        <input id="toggle-all" className="toggle-all" onClick={this.onClick} checked={this.props.checked} type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    );
  }
}

export default CheckAll;
