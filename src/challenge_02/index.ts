import getEncryptedMessage from './getEncryptedMessage.ts'

async function init() {
  const { error, data } = await getEncryptedMessage()

  if (error) {
    console.log(error)
    return
  }

  else if (!data) {
    console.log('Wtf?')
    return
  }

  const split = data.split(' ')

  const map = split.map((value) => {
    let output = ''
    let refValue = ''

    for (let i = 0; i < value.length + 1; i++) {
      const character = value[i]

      if (
        !refValue ||
        (
          refValue.length < 3 &&
          Number(refValue) < 97
        )
      ) {
        refValue += character
        continue
      }

      output += String.fromCharCode(Number(refValue))
      refValue = ''

      i--
    }

    return output
  })

  const response = map.join(' ')

  console.log(response)
}

init()