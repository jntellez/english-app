export const sortByAlphabet = data => {
    const filteredWords = data.map(item => item).sort((x, y) => x.word.localeCompare(y.word))
    return filteredWords
}

export const reverseArray = data => {
    const filteredWords = data.map(item => item).reverse()
    return filteredWords
}

export const longer = data => {
    const filteredArray = []
    for(let i = 1; filteredArray.length < data.length; i++) {
        data.forEach(item => item.word.length === i && filteredArray.push(item))
    }
    return filteredArray.reverse()
}

export const applyFilters = (...filters) => data => {
    let filteredData = data
    filters.forEach(fn => filteredData = fn(filteredData))  
    return filters.length > 0 ? filteredData : data
}