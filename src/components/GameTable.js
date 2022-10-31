import {useSelector} from "react-redux";


export const GameTable = () => {
    const pattern = useSelector(state => state.game.pattern);
    const pieces = useSelector(state => state.game.pieces);
    console.log(pattern);
    let keyIndex = 0;


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
                                         className={`boardSquare col d-flex h-100 ${(square.cords[0] + square.cords[1]) % 2 === 0 ? `bg-light` : `bg-secondary`}`}>
                                        {
                                            pieces.white.find(piece => JSON.stringify(piece.patternCords) === JSON.stringify(square.cords))
                                                ? <img className={`w-50 m-auto`} alt={`white`} src={`/images/white.png`}/>
                                                : pieces.black.find(piece => JSON.stringify(piece.patternCords) === JSON.stringify(square.cords))
                                                    ? <img className={`w-50 m-auto`} alt={`black`} src={`/images/black.png`}/>
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
