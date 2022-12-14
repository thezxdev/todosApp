import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../store';

interface todosInterface {
  id: string;
  completed: boolean;
  description: string;
  title: string;
}

interface todoState {
  selectedTodo?: todosInterface;
  todos: todosInterface[];
  isLoading: boolean;
  message: string;
}

const initialState: todoState = {
  todos: [],
  isLoading: false,
  message: '',
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    updateTodo: ( state, action: PayloadAction<todosInterface> ) => {
      state.todos = state.todos.map( todo => {
        return ( todo.id === action.payload.id )
          ? todo = action.payload
          : todo
      });
    },
    deleteTodo: ( state, action: PayloadAction<string> ) => {
      state.todos = state.todos.filter( todo => todo.id !== action.payload );
    },
    setTodo: ( state, action: PayloadAction<todosInterface> ) => {
      const todo: todosInterface = {
        ...action.payload
      }
      state.todos.push( action.payload );
    },
    setTodos: ( state, action: PayloadAction<todosInterface[]> ) => {
      state.todos = action.payload
    },
    setActiveTodo: ( state, action: PayloadAction<todosInterface> ) => {
      state.selectedTodo = action.payload;
    },
    setIsLoading: ( state ) => {
      state.isLoading = !state.isLoading;
    },
    clearActiveTodo: ( state ) => {
      state.selectedTodo = undefined;
    }
  }
});
// Action creators are generated for each case reducer function
export const {
  clearActiveTodo,
  deleteTodo,
  setActiveTodo,
  setIsLoading,
  setTodo,
  setTodos,
  updateTodo,
} = todosSlice.actions;