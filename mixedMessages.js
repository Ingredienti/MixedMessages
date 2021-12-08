const names = ['idiot', 'son of a bitch', 'asshole', 'weirdo', 'rapist', 'motherfucker', 'fucker', 'cunt']

const selectRandom = (arr) => {

    const randomNames = []

    while (randomNames.length < 3) {
        const random = Math.floor(Math.random() * arr.length)

        if (randomNames.every(element => element !== arr[random]))
            randomNames.push(arr[random])
        else
            continue
    }
}

selectRandom(names)

