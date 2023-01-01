import {createSlice} from "@reduxjs/toolkit";
import {playableControl, updatePatternViaMove} from "./helpers";


export const GameSlice = createSlice({
    name: 'game',
    initialState: {
        pattern: [
            [{cords:[0,0],status:'empty'},{cords:[0,1],status:'empty'},{cords:[0,2],status:'empty'},{cords:[0,3],status:'empty'},{cords:[0,4],status:'empty'},{cords:[0,5],status:'empty'},{cords:[0,6],status:'empty'},{cords:[0,7],status:'empty'}],
            [{cords:[1,0],status:'white'},{cords:[1,1],status:'white'},{cords:[1,2],status:'white'},{cords:[1,3],status:'white'},{cords:[1,4],status:'white'},{cords:[1,5],status:'white'},{cords:[1,6],status:'white'},{cords:[1,7],status:'white'}],
            [{cords:[2,0],status:'white'},{cords:[2,1],status:'white'},{cords:[2,2],status:'white'},{cords:[2,3],status:'white'},{cords:[2,4],status:'white'},{cords:[2,5],status:'white'},{cords:[2,6],status:'white'},{cords:[2,7],status:'white'}],
            [{cords:[3,0],status:'empty'},{cords:[3,1],status:'empty'},{cords:[3,2],status:'empty'},{cords:[3,3],status:'empty'},{cords:[3,4],status:'empty'},{cords:[3,5],status:'empty'},{cords:[3,6],status:'empty'},{cords:[3,7],status:'empty'}],
            [{cords:[4,0],status:'empty'},{cords:[4,1],status:'empty'},{cords:[4,2],status:'empty'},{cords:[4,3],status:'empty'},{cords:[4,4],status:'empty'},{cords:[4,5],status:'empty'},{cords:[4,6],status:'empty'},{cords:[4,7],status:'empty'}],
            [{cords:[5,0],status:'black'},{cords:[5,1],status:'black'},{cords:[5,2],status:'black'},{cords:[5,3],status:'black'},{cords:[5,4],status:'black'},{cords:[5,5],status:'black'},{cords:[5,6],status:'black'},{cords:[5,7],status:'black'}],
            [{cords:[6,0],status:'black'},{cords:[6,1],status:'black'},{cords:[6,2],status:'black'},{cords:[6,3],status:'black'},{cords:[6,4],status:'black'},{cords:[6,5],status:'black'},{cords:[6,6],status:'black'},{cords:[6,7],status:'black'}],
            [{cords:[7,0],status:'empty'},{cords:[7,1],status:'empty'},{cords:[7,2],status:'empty'},{cords:[7,3],status:'empty'},{cords:[7,4],status:'empty'},{cords:[7,5],status:'empty'},{cords:[7,6],status:'empty'},{cords:[7,7],status:'empty'}]
        ],
        clickedPieceCords: [],
        movableColor: 'white',
        beatablePieces: [],
        isGameEnded: false
    },
    reducers: {
        setClickedPieceCords: (state,action) => {
            state.clickedPieceCords = action.payload;
        },
        setIsGameEnded: (state,action) => {
            state.isGameEnded = action.payload;
        },
        setPlayableSquares: (state,action) => {

            // Setting current coordinates of piece.
            var currentSquareCord = action.payload;

            // Setting patterns square playable.
            var control = playableControl(currentSquareCord, state.pattern, state.movableColor);

            state.pattern = control.gamePattern
            state.beatablePieces = control.beatablePieces
        },movePiece: (state, action) => {
            var updatedPattern = updatePatternViaMove(state.pattern, state.clickedPieceCords, action.payload,state.movableColor,state.beatablePieces);
            state.pattern = updatedPattern.pattern;
            state.movableColor = updatedPattern.color;

        }
    },
})


export const {setClickedPieceCords,setPlayableSquares, movePiece, setIsGameEnded} = GameSlice.actions;
export default GameSlice.reducer;