import React from 'react';
import { connect } from 'react-redux';

class Completed extends React.Component {
  state = {
    list: [],
    flag: true
  };

  static getDerivedStateFromProps(props, state) {
    if (state.flag) {
      if (props.todos !== state.list) {
        return {
          list: props.todos.filter(t => t.completed)
        };
      }
    }

    return null;
  }

  handleDelete = id => {
    const { list } = this.state;
    const newList = list.filter(item => item.id !== id);
    this.setState({ list: newList, flag: false });
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <h3>COMPLETED</h3>
        <hr />
        <ul>
          {list.map(item => (
            <li
              style={{
                textDecoration: 'line-through',
                listStyleType: 'none'
              }}
              key={item.id}
            >
              <input type='checkbox' defaultChecked={true} /> {item.text}
              <button>Edit</button>
              <button onClick={() => this.handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Completed);
