import {useDispatch, useSelector} from "react-redux";
import {setClickedPiece, setPlayableSquares} from "../redux/GameSlice/GameSlice";


export const GameTable = () => {
    const pattern = useSelector(state => state.game.pattern);
    const pieces = useSelector(state => state.game.pieces);
    const currentClickedPiece = useSelector(state => state.game.clickedPiece);
    const dispatch = useDispatch();

    let keyIndex = 0;

    const handleClick = (color, sqCoords) => {
        let clickedPiece = findPieceByCoords(sqCoords);
        dispatch(setClickedPiece(clickedPiece));
        dispatch(setPlayableSquares(clickedPiece));
    }

    const findPieceByCoords = (coords) => {
        let square = pieces.white.find(piece => JSON.stringify(piece.patternCords) === coords)
            || pieces.black.find(piece => JSON.stringify(piece.patternCords) === coords);
        return square;
    }

    return (
        <div className={`gameTable container d-flex pt-4`}>
            <div className={`boardWrapper w-75`}>
                {pattern.map((row) => {
                    keyIndex++;
                    return (
                        <div key={keyIndex} className={`boardRow row m-0`}>
                            {row.map((square) => {
                                keyIndex++
                                return (
                                    <div key={keyIndex}
                                         className={`boardSquare col p-0 d-flex h-100 ${(square.cords[0] + square.cords[1]) % 2 === 0 ? `bg-light` : `bg-secondary`}`}>
                                        {
                                            pieces.white.find(piece => JSON.stringify(piece.patternCords) === JSON.stringify(square.cords))
                                                ?
                                                <img className={`piece w-75 m-auto`} alt={`white`}
                                                     src={`/images/white.png`}
                                                     onClick={(e) => {
                                                         document.querySelector('.selectedPiece')?.classList.remove('selectedPiece')
                                                         e.currentTarget.classList.toggle('selectedPiece');
                                                         handleClick('white', JSON.stringify(square.cords));
                                                     }}/>
                                                : pieces.black.find(piece => JSON.stringify(piece.patternCords) === JSON.stringify(square.cords))
                                                    ?
                                                    <img className={`piece w-75 m-auto`} alt={`black`}
                                                         src={`/images/black.png`}
                                                         onClick={(e) => {
                                                             document.querySelector('.selectedPiece')?.classList.remove('selectedPiece')
                                                             e.currentTarget.classList.toggle('selectedPiece');
                                                             handleClick('black', JSON.stringify(square.cords));
                                                         }}/>
                                                    : '\u00A0'
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    )
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
        </div>
    );
}


/*
    {pattern.map((value) => {
                return (
                    <div>
                        {value.map((val) => (
                            <div>
                                {val}
                            </div>
                        ))}
                    </div>
                )
            })
            }
*/
