import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodo, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  // type definition 定義 connect 應該接收一個會 return object 的 function
  // 但 redux-thunk 則是使 action creater 可以 return function
  // 因此這裡只能將 fetchTodo 給予 Function type 作為權宜之計
  fetchTodo: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  state = {
    fetching: false
  };
  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  onBtnClick = (): void => {
    this.props.fetchTodo();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <p onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </p>
      );
    });
  }

  render() {
    return (
      <div>
        {this.state.fetching ? (
          <button disabled>Now Loading...</button>
        ) : (
          <button onClick={this.onBtnClick}>Fetch</button>
        )}

        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos
});

export const App = connect(
  mapStateToProps,
  { fetchTodo, deleteTodo }
)(_App);
