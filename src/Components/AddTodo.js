import React from 'react';
import { addAction } from '../Actions';
import { connect } from 'react-redux';

class AddToDo extends React.Component {
  state = {
    item: ''
  };

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { add } = this.props;
    const { item } = this.state;
    add(item);
  };

  render() {
    const { item } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>ADD ITEM</h3>
        <hr />
        <input type='text' onChange={this.handleChange} value={item} />
        <input type='submit' value='Add' />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: item => dispatch(addAction(item))
});

export default connect(
  null,
  mapDispatchToProps
)(AddToDo);
