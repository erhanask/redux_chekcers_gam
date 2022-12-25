import {current} from "@reduxjs/toolkit";

export const playableControl = (currentCords, pattern, movableColor) => {

    var beatablePieces = [];
    var gamePattern = cleanPlayables(pattern);
    var oppositeColor = movableColor === 'white' ? 'black' : 'white';
    for (let i = 0; i < gamePattern.length; i++) {
        gamePattern[i].forEach((square, index) => {
            // one square back control (x - 1 check)
            if (square.cords[0] === (currentCords[0] - 1) && square.cords[1] === currentCords[1]) {

                if (square.status === 'empty' || square.status === 'playable') {
                    square.status = 'playable'
                } else if (square.status === oppositeColor && typeof gamePattern[i - 1] !== 'undefined' && (gamePattern[i - 1][index].status === 'empty' || gamePattern[i - 1][index].status === 'playable')) {
                    beatablePieces.push(square.cords);
                    gamePattern[i - 1][index].status = 'playable';
                }

            }

            //one square forward control (x + 1 check)
            if (square.cords[0] === (currentCords[0] + 1) && square.cords[1] === currentCords[1]) {

                if (square.status === 'empty' || square.status === 'playable') {
                    square.status = 'playable'
                } else if (square.status === oppositeColor && typeof gamePattern[i + 1] !== 'undefined' && (gamePattern[i + 1][index].status === 'empty' || gamePattern[i + 1][index].status === 'playable')) {
                    beatablePieces.push(square.cords);
                    gamePattern[i + 1][index].status = 'playable';
                }

            }


            //one square right control (y + 1 check)
            if (square.cords[1] === (currentCords[1] - 1) && square.cords[0] === currentCords[0]) {

                if (square.status === 'empty' || square.status === 'playable') {
                    square.status = 'playable'
                } else if (square.status === oppositeColor && typeof gamePattern[i][index - 1] !== 'undefined' && (gamePattern[i][index - 1].status === 'empty' || gamePattern[i][index - 1].status === 'playable')) {
                    beatablePieces.push(square.cords);
                    gamePattern[i][index - 1].status = 'playable';
                }

            }

            //one square left control (y - 1 check)
            if (square.cords[1] === (currentCords[1] + 1) && square.cords[0] === currentCords[0]) {

                if (square.status === 'empty' || square.status === 'playable') {
                    square.status = 'playable'
                } else if (square.status === oppositeColor && typeof gamePattern[i][index + 1] !== 'undefined' && (gamePattern[i][index + 1].status === 'empty' || gamePattern[i][index + 1].status === 'playable')) {
                    beatablePieces.push(square.cords);
                    gamePattern[i][index + 1].status = 'playable';
                }

            }

        });
    }


    return {'gamePattern': gamePattern, 'beatablePieces': beatablePieces};
}

export const cleanPlayables = (pattern) => {

    for (let i = 0; i < pattern.length; i++) {
        pattern[i].forEach((square, index) => {
            square.status = square.status === 'playable' ? 'empty' : square.status;
        });
    }

    return pattern;
}

export const updatePatternViaMove = (pattern, clickedPiece, clickedSquare, color, beatablePieces) => {
    console.log(current(pattern), current(clickedPiece), clickedSquare, {'beatables': current(beatablePieces)});
    var clickedSquareXminus = [clickedSquare[0] - 1, clickedSquare[1]];
    var clickedSquareYminus = [clickedSquare[0], clickedSquare[1] - 1];
    var clickedSquareXplus = [clickedSquare[0] + 1, clickedSquare[1]];
    var clickedSquareYplus = [clickedSquare[0], clickedSquare[1] + 1];
    var changeColor = true;
    //Setting super pre string for last row click.
    if ((color === 'black' && clickedSquare[0] === 0) || (color === 'white' && clickedSquare[0] === 7)) {
        color = 'super_' + color;
    }

    for (let i = 0; i < pattern.length; i++) {
        pattern[i].forEach((square, index) => {

            //Setting status of clicked square
            if (JSON.stringify(square.cords) === JSON.stringify(clickedSquare)) {
                if (square.status.includes('super'))
                    square.status = 'super_'+color;
                else
                    square.status = color;
            }

            //Setting status of beated square
            for (let j = 0; j < beatablePieces.length; j++) {

                if (JSON.stringify(beatablePieces[j]) === JSON.stringify(square.cords)
                    &&
                    (JSON.stringify(beatablePieces[j]) === JSON.stringify(clickedSquareXminus)
                        || JSON.stringify(beatablePieces[j]) === JSON.stringify(clickedSquareYminus)
                        || JSON.stringify(beatablePieces[j]) === JSON.stringify(clickedSquareXplus)
                        || JSON.stringify(beatablePieces[j]) === JSON.stringify(clickedSquareYplus))) {
                    square.status = 'empty';
                    changeColor = false
                }
            }

            //Cleaning clicked pieces first coords
            if (square.cords[0] === clickedPiece[0] && square.cords[1] === clickedPiece[1]) {
                square.status = 'empty'
            }
        });
    }

    return {pattern: cleanPlayables(pattern), color: changeColor ? color === 'white' ? 'black' : 'white' : color};
}

export const superPlayableControl = (currentCords, pattern, movableColor) => {

    var beatablePieces = [];
    var gamePattern = cleanPlayables(pattern);
    var oppositeColor = movableColor === 'white' ? 'black' : 'white';
    for (let i = 0; i < gamePattern.length; i++) {
        gamePattern[i].forEach((square, index) => {
            // one square back control (x - 1 check)
            if (square.cords[0] === (currentCords[0] - 1) && square.cords[1] === currentCords[1]) {

                if (square.status === 'empty' || square.status === 'playable') {
                    square.status = 'playable'
                } else if (square.status === oppositeColor && typeof gamePattern[i - 1] !== 'undefined' && (gamePattern[i - 1][index].status === 'empty' || gamePattern[i - 1][index].status === 'playable')) {
                    beatablePieces.push(square.cords);
                    gamePattern[i - 1][index].status = 'playable';
                }

            }

            //one square forward control (x + 1 check)
            if (square.cords[0] === (currentCords[0] + 1) && square.cords[1] === currentCords[1]) {

                if (square.status === 'empty' || square.status === 'playable') {
                    square.status = 'playable'
                } else if (square.status === oppositeColor && typeof gamePattern[i + 1] !== 'undefined' && (gamePattern[i + 1][index].status === 'empty' || gamePattern[i + 1][index].status === 'playable')) {
                    beatablePieces.push(square.cords);
                    gamePattern[i + 1][index].status = 'playable';
                }

            }


            //one square right control (y + 1 check)
            if (square.cords[1] === (currentCords[1] - 1) && square.cords[0] === currentCords[0]) {

                if (square.status === 'empty' || square.status === 'playable') {
                    square.status = 'playable'
                } else if (square.status === oppositeColor && typeof gamePattern[i][index - 1] !== 'undefined' && (gamePattern[i][index - 1].status === 'empty' || gamePattern[i][index - 1].status === 'playable')) {
                    beatablePieces.push(square.cords);
                    gamePattern[i][index - 1].status = 'playable';
                }

            }

            //one square left control (y - 1 check)
            if (square.cords[1] === (currentCords[1] + 1) && square.cords[0] === currentCords[0]) {

                if (square.status === 'empty' || square.status === 'playable') {
                    square.status = 'playable'
                } else if (square.status === oppositeColor && typeof gamePattern[i][index + 1] !== 'undefined' && (gamePattern[i][index + 1].status === 'empty' || gamePattern[i][index + 1].status === 'playable')) {
                    beatablePieces.push(square.cords);
                    gamePattern[i][index + 1].status = 'playable';
                }

            }

        });
    }


    return {'gamePattern': gamePattern, 'beatablePieces': beatablePieces};
}
