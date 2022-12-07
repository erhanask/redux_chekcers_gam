export const cleanPlayables = (pattern) => {

    for (let i = 0;i < pattern.length; i++) {
        pattern[i].forEach((square, index) => {
            square.status = square.status === 'playable' ? 'empty' : square.status ;
        });
    }

    return pattern


}