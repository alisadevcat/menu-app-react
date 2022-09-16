import { createSlice } from '@reduxjs/toolkit';

 const branchesSlice = createSlice({
    name: 'branches',
    initialState:[],
    reducers:{
        get: (state)=>{

        }
    }
})

export default branchesSlice.reducer;
// export const { addTodo, deleteTodo, toggleTodoCompleted } = todosSlice.actions;
