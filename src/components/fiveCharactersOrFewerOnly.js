const fiveCharactersOrFewerOnly = (arr) => {
    const result  = arr.filter(x => x.length > 5)
    return result
}

export default fiveCharactersOrFewerOnly;