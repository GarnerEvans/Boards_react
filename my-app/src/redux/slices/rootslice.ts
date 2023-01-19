import { createSlice } from '@reduxjs/toolkit';

const rootslice = createSlice({
    name: "root",
    initialState: {
        name: 'name',
        boardLength: 'boardLength',
        width: 'width',
        waveType: 'waveType'
       
    },
    reducers: { //listens to see if something changes. all asking for individual changes. make copies
        chooseName: (state, action) => { state.name = action.payload},
        chooseLength: (state, action) => { state.boardLength = action.payload},
        chooseWidth: (state, action) => { state.width = action.payload},
        choosewaveType: (state, action) => { state.waveType = action.payload},
        
    }
})

// Export Reducer
export const reducer = rootslice.reducer;
export const { chooseName, chooseLength, chooseWidth, choosewaveType } = rootslice.actions;