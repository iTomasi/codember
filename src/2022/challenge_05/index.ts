import getMecenas from './getMecenas.ts'

async function init() {
  const { error, data } = await getMecenas()

  if (error) {
    console.log(error)
    return
  }

  else if (!data) {
    console.log('Wtf?')
    return
  }

  const recursive = (arr: Array<string>): any => {
    let theIndex = -1
    const filter = arr.filter((mecena, index) => {
      if (mecena === 'X') return false

      theIndex = index
      return true
    })

    if (filter.length === 1) {
      return `${filter[0]}-${theIndex}`
    }

    let eliminated = false

    const map = arr.map((mecena) => {
      if (mecena === 'X') return 'X'
      else if (eliminated && mecena !== 'X') {
        eliminated = false
        return 'X'
      }

      eliminated = true
      return mecena
    })

    if (eliminated) {
      const findIndex = map.findIndex((mecena) => mecena !== 'X')!

      map[findIndex] = 'X'
    }

    return recursive(map)
  }

  const response = recursive(data)

  console.log(response)
}

init()