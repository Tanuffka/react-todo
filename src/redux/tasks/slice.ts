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
    // fetch tasks
    builder.addCase(fetchTasks.pending, (state) => {
      state.isFetching = true;
    });

    builder.addCase(fetchTasks.rejected, (state) => {
      state.isFetching = false;
    });

    builder.addCase(
      fetchTasks.fulfilled,
      (state, action: PayloadAction<TaskSchema[]>) => {
        state.isFetching = false;
        state.tasks = action.payload;
      }
    );

    // create task
    builder.addCase(createTask.pending, (state) => {
      state.inProgress = true;
    });

    builder.addCase(createTask.rejected, (state) => {
      state.inProgress = false;
    });

    builder.addCase(
      createTask.fulfilled,
      (state, action: PayloadAction<TaskSchema>) => {
        state.inProgress = false;
        state.tasks = [action.payload, ...state.tasks];
      }
    );

    // remove Task
    builder.addCase(removeTask.pending, (state) => {
      state.inProgress = true;
    });

    builder.addCase(removeTask.rejected, (state) => {
      state.inProgress = false;
    });

    builder.addCase(
      removeTask.fulfilled,
      (state, action: PayloadAction<TaskSchema>) => {
        state.inProgress = false;
        const filteredTasks = state.tasks.filter(
          (task) => task._id !== action.payload._id
        );
        state.tasks = filteredTasks;
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

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async (description: string) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const removeTask = createAsyncThunk(
  'tasks/removeTask',
  async (id: string) => {
    {
      try {
        const response = await fetch(`/api/tasks/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  }
);

export default tasksSlice.reducer;
