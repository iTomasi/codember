import getWords from './getWords.ts'

async function init () {
  const { error, data } = await getWords()

  if (error !== undefined) {
    console.log(error)
    return
  } else if (data === undefined) {
    console.log('wtf?')
    return
  }

  const split = data.split(' ')
  const count: Record<string, number> = {}

  split.forEach((word) => {
    if (typeof count[word] !== 'number') {
      count[word] = 1
      return
    }

    count[word] += 1
  })

  const entries = Object.entries(count)

  const output = entries.reduce((acc, [word, quantity]) => {
    acc += `${word}${quantity}`
    return acc
  }, '')

  console.log(output)
}

init()