import {useSelector} from "react-redux";


export const GameTable = () => {
    const pattern = useSelector(state => state.game.pattern);
    console.log(pattern);
    let keyIndex = 0;


    return (
        <div className={`gameTable`}>
            <div className={`boardWraper`}>
                {
                    pattern.map((row) => {
                        keyIndex++;
                        return (
                            <div key={keyIndex} className={`boardRow row`}>
                                {row.map((square) => {
                                    keyIndex++
                                    return (
                                        <div key={keyIndex} className={`boardSquare col ${(square.cords[0]+square.cords[1]) % 2 === 0 ? `bg-light`:`bg-dark`}`}>
                                            {square.cords}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
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
