import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TaskSchema {
  _id: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

interface TasksState {
  tasks: TaskSchema[];
  isFetching: boolean;
  inProgress: boolean;
}

const initialState: TasksState = {
  tasks: [],
  isFetching: false,
  inProgress: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isFetching = true;
    });

    builder.addCase(
      fetchTasks.fulfilled,
      (state, action: PayloadAction<TaskSchema[]>) => {
        state.isFetching = false;
        state.tasks = action.payload;
      }
    );
  },
});

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  try {
    const response = await fetch('/api/tasks');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});

export default tasksSlice.reducer;
