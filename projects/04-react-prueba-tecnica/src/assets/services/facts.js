const FACT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
    return fetch(FACT)
    .then(res => res.json())
    .then(data => data.fact)
}