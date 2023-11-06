import getUsers from './getUsers.ts'

const fieldsRequired: { [key: string]: true } = {
  usr: true,
  eme: true,
  psw: true,
  age: true,
  loc: true,
  fll: true
}

const fieldsQuantity = Object.keys(fieldsRequired).length

async function init() {
  const { error, data } = await getUsers()

  if (error) {
    console.log(error)
    return
  }

  else if (!data) {
    console.log('wtf?')
    return
  }

  const split = data.split(/\n/g)

  let user: {[key: string]: string} = {}

  const formatUsers = split.reduce((acc: Array<any>, theValue) => {
    if (!theValue) {
      const userObjectKeys = Object.keys(user)

      if (userObjectKeys.length === fieldsQuantity) acc.push(user)

      user = {}
      return acc
    }

    const splitData = theValue.trim().split(' ')

    splitData.forEach((data) => {
      const [key, value] = data.trim().split(':')

      const keyLower = key.toLowerCase()

      if (!fieldsRequired[keyLower]) return

      const trimValue = value.trim()

      if (!trimValue) return

      user[keyLower] = trimValue
    })

    return acc
  }, [])

  const totalAccounts = formatUsers.length
  const lastAccount = formatUsers.at(-1)

  console.log({
    totalAccounts,
    lastAccountUsername: lastAccount.usr
  })
}

init()