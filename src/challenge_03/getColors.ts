const getColors = async () => {
  try {
    const readTxt = await Deno.readTextFile(Deno.cwd() + '/src/challenge_03/colors.txt')

    const data = JSON.parse(readTxt)

    return {
      data
    }
  }

  catch(e) {
    console.log(e)
    console.log('getColors() Error')
    return { error: 'Can not read colors.txt file' }
  }
}

export default getColors