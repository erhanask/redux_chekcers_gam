import {createSlice} from "@reduxjs/toolkit";


export const GameSlice = createSlice({
    name: 'game',
    initialState: {
        pattern: [
            [{cords:[0,0],status:'empty'},{cords:[0,1],status:'empty'},{cords:[0,2],status:'empty'},{cords:[0,3],status:'empty'},{cords:[0,4],status:'empty'},{cords:[0,5],status:'empty'},{cords:[0,6],status:'empty'},{cords:[0,7],status:'empty'}],
            [{cords:[1,0],status:'empty'},{cords:[1,1],status:'empty'},{cords:[1,2],status:'empty'},{cords:[1,3],status:'empty'},{cords:[1,4],status:'empty'},{cords:[1,5],status:'empty'},{cords:[1,6],status:'empty'},{cords:[1,7],status:'empty'}],
            [{cords:[2,0],status:'empty'},{cords:[2,1],status:'empty'},{cords:[2,2],status:'empty'},{cords:[2,3],status:'empty'},{cords:[2,4],status:'empty'},{cords:[2,5],status:'empty'},{cords:[2,6],status:'empty'},{cords:[2,7],status:'empty'}],
            [{cords:[3,0],status:'empty'},{cords:[3,1],status:'empty'},{cords:[3,2],status:'empty'},{cords:[3,3],status:'empty'},{cords:[3,4],status:'empty'},{cords:[3,5],status:'empty'},{cords:[3,6],status:'empty'},{cords:[3,7],status:'empty'}],
            [{cords:[4,0],status:'empty'},{cords:[4,1],status:'empty'},{cords:[4,2],status:'empty'},{cords:[4,3],status:'empty'},{cords:[4,4],status:'empty'},{cords:[4,5],status:'empty'},{cords:[4,6],status:'empty'},{cords:[4,7],status:'empty'}],
            [{cords:[5,0],status:'empty'},{cords:[5,1],status:'empty'},{cords:[5,2],status:'empty'},{cords:[5,3],status:'empty'},{cords:[5,4],status:'empty'},{cords:[5,5],status:'empty'},{cords:[5,6],status:'empty'},{cords:[5,7],status:'empty'}],
            [{cords:[6,0],status:'empty'},{cords:[6,1],status:'empty'},{cords:[6,2],status:'empty'},{cords:[6,3],status:'empty'},{cords:[6,4],status:'empty'},{cords:[6,5],status:'empty'},{cords:[6,6],status:'empty'},{cords:[6,7],status:'empty'}],
            [{cords:[7,0],status:'empty'},{cords:[7,1],status:'empty'},{cords:[7,2],status:'empty'},{cords:[7,3],status:'empty'},{cords:[7,4],status:'empty'},{cords:[7,5],status:'empty'},{cords:[7,6],status:'empty'},{cords:[7,7],status:'empty'}]
        ],
        pieces: {
            white: [
                {id:1,patternCords: [1,0],super: false},
                {id:2,patternCords: [1,1],super: false},
                {id:3,patternCords: [1,2],super: false},
                {id:4,patternCords: [1,3],super: false},
                {id:5,patternCords: [1,4],super: false},
                {id:6,patternCords: [1,5],super: false},
                {id:7,patternCords: [1,6],super: false},
                {id:8,patternCords: [1,7],super: false},
                {id:9,patternCords: [2,0],super: false},
                {id:10,patternCords: [2,1],super: false},
                {id:11,patternCords: [2,2],super: false},
                {id:12,patternCords: [2,3],super: false},
                {id:13,patternCords: [2,4],super: false},
                {id:14,patternCords: [2,5],super: false},
                {id:15,patternCords: [2,6],super: false},
                {id:16,patternCords: [2,7],super: false}],
            black: [
                {id:1,patternCords: [5,0],super: false},
                {id:2,patternCords: [5,1],super: false},
                {id:3,patternCords: [5,2],super: false},
                {id:4,patternCords: [5,3],super: false},
                {id:5,patternCords: [5,4],super: false},
                {id:6,patternCords: [5,5],super: false},
                {id:7,patternCords: [5,6],super: false},
                {id:8,patternCords: [5,7],super: false},
                {id:9,patternCords: [6,0],super: false},
                {id:10,patternCords: [6,1],super: false},
                {id:11,patternCords: [6,2],super: false},
                {id:12,patternCords: [6,3],super: false},
                {id:13,patternCords: [6,4],super: false},
                {id:14,patternCords: [6,5],super: false},
                {id:15,patternCords: [6,6],super: false},
                {id:16,patternCords: [6,7],super: false}
            ],
        },
        clickedPiece: {}
    },
    reducers: {
        setClickedPiece: (state,action) => {
            state.clickedPiece = action.payload;
            console.log(state.clickedPiece);
        }
    },
})


export const {setClickedPiece} = GameSlice.actions;
export default GameSlice.reducer;