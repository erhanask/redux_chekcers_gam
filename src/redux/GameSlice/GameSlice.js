import {createSlice, current} from "@reduxjs/toolkit";
import {cleanPlayables} from "./helpers";

const playableControl = (currentCords, pattern) => {

    var gamePattern = cleanPlayables(pattern);

    for (let i = 0;i < gamePattern.length; i++) {
        gamePattern[i].forEach((square, index) => {
            // one square back control (x - 1 check)
            if(square.cords[0] === (currentCords[0] - 1)  && square.cords[1] === currentCords[1]) {
                square.status = square.status === 'empty' || square.status === 'playable' ? 'playable':square.status;
            }

            //one square forward control (x + 1 check)
            if(square.cords[0] === (currentCords[0] + 1)  && square.cords[1] === currentCords[1]) {
                square.status = square.status === 'empty' || square.status === 'playable' ? 'playable':square.status;
            }
            //one square right control (y + 1 check)
            if(square.cords[1] === (currentCords[1] - 1)  && square.cords[0] === currentCords[0]) {
                square.status = square.status === 'empty' || square.status === 'playable' ? 'playable':square.status;
            }
            //one square left control (y - 1 check)
            if(square.cords[1] === (currentCords[1] + 1)  && square.cords[0] === currentCords[0]) {
                square.status = square.status === 'empty' || square.status === 'playable' ? 'playable':square.status;
            }
        });
    }


    return gamePattern;
}

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
        pieces: {
            white: [
                {id:1,patternCords: [1,0], super: false, status: 'playable'},
                {id:2,patternCords: [1,1], super: false, status: 'playable'},
                {id:3,patternCords: [1,2], super: false, status: 'playable'},
                {id:4,patternCords: [1,3], super: false, status: 'playable'},
                {id:5,patternCords: [1,4], super: false, status: 'playable'},
                {id:6,patternCords: [1,5], super: false, status: 'playable'},
                {id:7,patternCords: [1,6], super: false, status: 'playable'},
                {id:8,patternCords: [1,7], super: false, status: 'playable'},
                {id:9,patternCords: [2,0], super: false, status: 'playable'},
                {id:10,patternCords: [2,1], super: false, status: 'playable'},
                {id:11,patternCords: [2,2], super: false, status: 'playable'},
                {id:12,patternCords: [2,3], super: false, status: 'playable'},
                {id:13,patternCords: [2,4], super: false, status: 'playable'},
                {id:14,patternCords: [2,5], super: false, status: 'playable'},
                {id:15,patternCords: [2,6], super: false, status: 'playable'},
                {id:16,patternCords: [2,7], super: false, status: 'playable'}],
            black: [
                {id:1,patternCords: [5,0], super: false, status: 'playable'},
                {id:2,patternCords: [5,1], super: false, status: 'playable'},
                {id:3,patternCords: [5,2], super: false, status: 'playable'},
                {id:4,patternCords: [5,3], super: false, status: 'playable'},
                {id:5,patternCords: [5,4], super: false, status: 'playable'},
                {id:6,patternCords: [5,5], super: false, status: 'playable'},
                {id:7,patternCords: [5,6], super: false, status: 'playable'},
                {id:8,patternCords: [5,7], super: false, status: 'playable'},
                {id:9,patternCords: [6,0], super: false, status: 'playable'},
                {id:10,patternCords: [6,1], super: false, status: 'playable'},
                {id:11,patternCords: [6,2], super: false, status: 'playable'},
                {id:12,patternCords: [6,3], super: false, status: 'playable'},
                {id:13,patternCords: [6,4], super: false, status: 'playable'},
                {id:14,patternCords: [6,5], super: false, status: 'playable'},
                {id:15,patternCords: [6,6], super: false, status: 'playable'},
                {id:16,patternCords: [6,7], super: false, status: 'playable'}
            ],
        },
        clickedPiece: {},
        moveableColor: 'white',
        playerStatus: 'selecting',
    },
    reducers: {
        setClickedPiece: (state,action) => {
            state.clickedPiece = action.payload;
            console.log('clicked function.');
            console.log(state.clickedPiece);
        },setPlayableSquares: (state,action) => {
            // Setting current coordinates of piece.
            var currentSquareCord = action.payload.patternCords;

            // Setting patterns square playable.
            var playableCords = playableControl(currentSquareCord, state.pattern)
            state.pattern = playableCords
            state.playerStatus = 'playing'
            console.log('status');
            console.log(state.playerStatus);
            console.log('pattern');
            console.log(current(state.pattern));
        },movePiece: (state, action) => {
            console.log('burada şimdi');
        }
    },
})


export const {setClickedPiece,setPlayableSquares, movePiece} = GameSlice.actions;
export default GameSlice.reducer;