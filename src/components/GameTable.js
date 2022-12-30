import {useDispatch, useSelector} from "react-redux";
import {setClickedPieceCords, setPlayableSquares, movePiece} from "../redux/GameSlice/GameSlice";


export const GameTable = () => {
    const pattern = useSelector(state => state.game.pattern);
    const movableColor = useSelector(state => state.game.movableColor);
    const dispatch = useDispatch();

    let keyIndex = 0;

    const handlePieceClick = (e, color, sqCoords) => {
        dispatch(setClickedPieceCords(sqCoords));
        document.querySelector('.selectedPiece')?.classList.remove('selectedPiece');
        e.currentTarget.classList.toggle('selectedPiece');
        dispatch(setPlayableSquares(sqCoords));
    }
    const handleSuperClick = (e, color, sqCoords) => {
        console.log(e,color,sqCoords);
    }

    const handleSquareClick = (e, square) => {
        if (square.status === 'playable') {
            console.log('square');
            console.log(square);
            dispatch(movePiece(square.cords))
            console.log(e.currentTarget.classList, square);
        }
    }

    return (<div className={`gameTable container d-flex pt-4`}>
        <div className={`boardWrapper w-100`}>
            {pattern.map((row) => {
                keyIndex++;
                return (<div key={keyIndex} className={`boardRow row m-0`}>
                    {row.map((square) => {
                        keyIndex++
                        return (<div key={keyIndex} onClick={(e) => {
                                handleSquareClick(e, square)
                            }}
                                     data-status={square.status}
                                     className={`boardSquare col p-0 d-flex h-100 ${square.cords} ${(square.cords[0] + square.cords[1]) % 2 === 0 ? `bg-light` : `bg-secondary`} ${square.status === `playable` ? `bg-playable` : ``}`}>
                                {square.status !== 'empty' && square.status !== 'playable' ?
                                    <img className={`piece m-auto`} alt={square.status}
                                         src={`/images/${square.status}.png`}
                                         onClick={(e) => {
                                             console.log(square.status.split("_")[1]);
                                             // with example, if square status equals the current users color this conditions makes able to be played.
                                             if (movableColor === square.status) {
                                                 handlePieceClick(e, square.status, square.cords);
                                             } else if (movableColor === square.status.split("_")[1]) {
                                                 handleSuperClick(e, square.status, square.cords);
                                             }
                                         }}/> : '\u00A0'}
                            </div>)
                    })}
                </div>)
            })}
        </div>
        <div className={`infoWrapper w-25`}>
            <div>
                <p>White Plays</p>
                <img className={`w-50`} alt={`white`} src={`/images/white.png`}/>
            </div>
            <div>
                <p>Black Plays</p>
                <img className={`w-50`} alt={`black`} src={`/images/black.png`}/>
            </div>
        </div>
    </div>);
}


// {pieces.white.find(piece => JSON.stringify(piece.patternCords) === JSON.stringify(square.cords)) ?
//     <img className={`piece w-75 m-auto`} alt={`white`}
//          src={`/images/white.png`}
//          onClick={(e) => {
//              if (moveableColor === 'white') {
//                  handlePieceClick(e, 'white', JSON.stringify(square.cords));
//              }
//          }}/> : pieces.black.find(piece => JSON.stringify(piece.patternCords) === JSON.stringify(square.cords)) ?
//         <img className={`piece w-75 m-auto`} alt={`black`}
//              src={`/images/black.png`}
//              onClick={(e) => {
//                  if (moveableColor === 'black') {
//                      handlePieceClick(e, 'moveableColor', JSON.stringify(square.cords));
//                  }
//              }}/> : '\u00A0'}