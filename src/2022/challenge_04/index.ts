interface IFirstArg {
  min: number,
  max: number,
  index: number
}

function init({ min, max, index }: IFirstArg) {
  const minMax = (max - min) + 1
  let validPasswordCount = 0
  let passwordOutput = ''

  for (let i = 0; i < minMax; i++) {
    const password = (min + i).toString()

    if (!password.includes('55')) continue

    let isPasswordValid = true
    let prevNumber = 0

    for (let j = 0; j < password.length; j++) {
      const num = Number(password[j])

      if (j === 0) {
        prevNumber = num
        continue
      }

      if (prevNumber > num) {
        isPasswordValid = false
        break
      }

      prevNumber = num
    }

    if (!isPasswordValid) continue

    ++validPasswordCount

    if (index === validPasswordCount - 1) passwordOutput = password
  }

  console.log({
    validPasswordCount,
    passwordOutput
  })
}

init({
  min: 11098,
  max: 98123,
  index: 55
})