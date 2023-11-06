import getColors from './getColors.ts'

async function init() {
  const { error, data } = await getColors()

  if (error) {
    console.log(error)
    return
  }

  else if (!data) {
    console.log('Wtf?')
    return
  }

  const references: Array<any> = []

  let mode = 0
  let color_1 = ''
  let color_2 = ''
  let count = 1

  data.forEach((color: any, index: number) => {
    if (index < 2) {
      if (index === 0) color_1 = color
      else if (index === 1) {
        color_2 = color

        if (color_2 !== color_1) ++count
      }
      return
    }

    if (!color_2) color_2 = color

    if (color_1 !== color_2) ++count

    if ((index + mode) % 2 === 0 && color_1 !== color) {
      mode = mode === 0 ? 1 : 0
      references.push({
        count: count - 1,
        color: color_2
      })

      color_1 = color_2
      color_2 = color

      count = 2
    }

    else if ((index + mode) % 2 !== 0 && color_2 !== color) {
      mode = mode === 0 ? 1 : 0
      references.push({
        count: count - 1,
        color: color_1
      })
      color_1 = color
      color_2 = ''

      count = 2
    }

    if (index === data.length - 1) {
      references.push({
        count: (count === 1 && color_1 !== color_2) ? 2 : count,
        color
      })
    }
  })

  references.sort((a: any, b: any) => b.count - a.count)
  const maxCount = references[0]

  const filter = references.filter((value) => value.count === maxCount.count)

  const res = filter.at(-1)

  console.log(res)
}

init()