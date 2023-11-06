const getMecenas = async () => {
  try {
    const readFile = await Deno.readTextFile(Deno.cwd() + '/src/2022/challenge_05/mecenas.txt')

    const data = JSON.parse(readFile)

    return {
      data
    }
  }

  catch(e) {
    console.log(e)
    console.log('getMecenas() Error')
    return { error: 'Cant read mecenas.txt file' }
  }
}

export default getMecenas