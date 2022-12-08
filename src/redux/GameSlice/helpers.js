import {current} from "@reduxjs/toolkit";

export const cleanPlayables = (pattern) => {

    for (let i = 0;i < pattern.length; i++) {
        pattern[i].forEach((square, index) => {
            square.status = square.status === 'playable' ? 'empty' : square.status ;
        });
    }

    return pattern;
}

export const updatePatternViaMove = (pattern, clickedPiece, clickedSquare) => {

    for (let i = 0;i < pattern.length; i++) {
        pattern[i].forEach((square, index) => {

            //Setting status of clicked square
            if(square.cords[0] === clickedSquare[0]  && square.cords[1] === clickedSquare[1]) {
                square.status = clickedPiece.color;
            }

            //Cleaning clicked piece
            if(square.cords[0] === clickedPiece.patternCords[0]  && square.cords[1] === clickedPiece.patternCords[1]) {
                square.status = 'empty'
            }
        });
    }

    return pattern;
}