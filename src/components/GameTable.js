import GamePattern from "./GamePattern";


export const GameTable = () => {

    return (
        <div className={`gameTable container d-flex pt-4`}>
            <div className={`boardWrapper mx-auto w-75`}>
                <GamePattern />
            </div>
        </div>
    );
}

