const peopleWhoBelongToTheMovieClub = (arr) => {

let result = arr.filter(function (player) {
    return player.position === 'WR'; // if player.position === 'WR', we use that player for the filtered list
});
    return result
}
export default peopleWhoBelongToTheMovieClub;