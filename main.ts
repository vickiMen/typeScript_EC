const identityRevealer = (superHero) => {
    return 'My real name is ' + superHero.identity
}

interface SuperHero {
    identity: string,
    superPowers: Array<string>,
    isVillian: boolean
}

const spiderman: SuperHero =  {
    identity: 'Peter Parker',
    superPowers: ['Wall Crawling', 'Webbing', 'Spidey Sense', 'Sense of Humor', 'Nerdiness'],
    isVillian: false
}

console.log(identityRevealer(spiderman))