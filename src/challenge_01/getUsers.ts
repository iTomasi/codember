const getUsers = async () => {
  try {
    const users = await Deno.readTextFile(`${Deno.cwd()}/src/challenge_01/users.txt`)

    return {
      data: users
    }
  }

  catch(e) {
    console.log(e)
    console.log('getUsers() Error')
    return { error: 'Please check your users.txt file' }
  }
}

export default getUsers