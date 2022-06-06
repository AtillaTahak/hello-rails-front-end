import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const projectAction = createAsyncThunk('project/ReduxProjects', async () => {
  const req = await fetch('https://gentle-anchorage-05317.herokuapp.com/api/v1/message');
  const projects = req.json();
  return projects;
});

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (elements) => {
    elements.addCase(projectAction.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    elements.addCase(projectAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    elements.addCase(projectAction.rejected, (state) => {
      state.loading = false;
      state.error = 'Error fetching user data';
    });
  },
});

export default projectSlice.reducer;
