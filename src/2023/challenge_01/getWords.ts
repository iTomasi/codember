import path from 'node:path'
const getWords = async () => {
  try {
    const read = await Deno.readTextFile(path.join(Deno.cwd(), 'src', '2023', 'challenge_01', 'words.txt'))

    const textLower = read.trim().toLowerCase()

    return { data: textLower }
  } catch (e) {
    console.log(e)
    console.log('getWords() Error')
    return { error: e?.message ?? 'Unknown Error' }
  }
}

export default getWords
