import {useDispatch, useSelector} from "react-redux";
import {movePiece, setClickedPieceCords, setIsGameEnded, setPlayableSquares} from "../redux/GameSlice/GameSlice";
import {checkGameEnd} from "../redux/GameSlice/helpers";


const GamePattern = () => {
    let keyIndex = 0;
    const pattern = useSelector(state => state.game.pattern);
    const isGameEnded = useSelector(state => state.game.isGameEnded);
    const handleSquareClick = (e, square) => {
        if (square.status === 'playable') {
            dispatch(movePiece(square.cords))
            dispatch(setIsGameEnded(checkGameEnd(pattern)));
        }
    }

    const handlePieceClick = (e, color, sqCoords) => {
        dispatch(setClickedPieceCords(sqCoords));
        document.querySelector('.selectedPiece')?.classList.remove('selectedPiece');
        e.currentTarget.classList.toggle('selectedPiece');
        dispatch(setPlayableSquares(sqCoords));
    }

    const movableColor = useSelector(state => state.game.movableColor);
    const dispatch = useDispatch();

    if (isGameEnded) {
        return (
          <div className={`alert alert-danger m-0`}>
              <span onClick={window.location.reload}>Game is ended click to play again.</span>
          </div>
        );
    }
    return (
        pattern.map((row) => {
                keyIndex++;
                return (<div key={keyIndex} className={`boardRow row m-0`}>
                    {row.map((square) => {
                        keyIndex++
                        return (
                            <div key={keyIndex} onClick={(e) => {
                                handleSquareClick(e, square)
                            }}
                                 data-status={square.status}
                                 className={`boardSquare col p-0 d-flex h-100 ${square.cords} ${(square.cords[0] + square.cords[1]) % 2 === 0 ? `bg-light` : `bg-secondary`} ${square.status === `playable` ? `bg-playable` : ``}`}>
                                {
                                    square.status !== 'empty' && square.status !== 'playable' ?
                                        <img className={`piece m-auto`} alt={square.status}
                                             src={`/images/${square.status}.png`}
                                             onClick={(e) => {
                                                 if (movableColor === square.status) {
                                                     handlePieceClick(e, square.status, square.cords);
                                                 }
                                             }}/> : '\u00A0'
                                }
                            </div>
                        )
                    })}
                </div>)
            })
    )
}

export default GamePattern;