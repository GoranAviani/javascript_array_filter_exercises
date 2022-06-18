const peopleWhoBelongToTheMovieClub = (arr) => {

    const result = arr.filter(x => x.member === true)
    return result
}
export default peopleWhoBelongToTheMovieClub;