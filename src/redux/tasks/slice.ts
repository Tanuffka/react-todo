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
  isCreating: boolean;
  removingTaskId: string | null;
  editingTaskId: string | null;
}

const initialState: TasksState = {
  tasks: [],
  isFetching: false,
  isCreating: false,
  removingTaskId: null,
  editingTaskId: null,
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
      state.isCreating = true;
    });

    builder.addCase(createTask.rejected, (state) => {
      state.isCreating = false;
    });

    builder.addCase(
      createTask.fulfilled,
      (state, action: PayloadAction<TaskSchema>) => {
        state.isCreating = false;
        state.tasks = [action.payload, ...state.tasks];
      }
    );

    // remove Task
    builder.addCase(removeTask.pending, (state, action) => {
      state.removingTaskId = action.meta.arg;
    });

    builder.addCase(removeTask.rejected, (state) => {
      state.removingTaskId = null;
    });

    builder.addCase(
      removeTask.fulfilled,
      (state, action: PayloadAction<TaskSchema>) => {
        const filteredTasks = state.tasks.filter(
          (task) => task._id !== action.payload._id
        );
        state.removingTaskId = null;
        state.tasks = filteredTasks;
      }
    );

    // edit task
    builder.addCase(editTask.pending, (state, action) => {
      state.editingTaskId = action.meta.arg._id;
    });

    builder.addCase(editTask.rejected, (state) => {
      state.editingTaskId = null;
    });

    builder.addCase(
      editTask.fulfilled,
      (state, action: PayloadAction<TaskSchema>) => {
        const updatedTasks = state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            return action.payload;
          }
          return task;
        });
        state.editingTaskId = null;
        state.tasks = updatedTasks;
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

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async ({
    _id,
    description,
    completed,
  }: Pick<TaskSchema, '_id' | 'description' | 'completed'>) => {
    try {
      const response = await fetch(`/api/tasks/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, completed }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export default tasksSlice.reducer;
