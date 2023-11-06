const getEncryptedMessage = async () => {
  try {
    const readTxt = await Deno.readTextFile(Deno.cwd() + '/src/2022/challenge_02/encrypted.txt')

    return {
      data: readTxt.trim()
    }
  }

  catch(e) {
    console.log(e)
    console.log('getEncryptedMessage() Error')
    return { error: 'Can not read encrypted.txt file' }
  }

}

export default getEncryptedMessage