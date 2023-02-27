function canConstruct(ransomNote: string, magazine: string): boolean {
  const noteArray = ransomNote.split('')
  const magazineArray = magazine.split('')

  for (let i = 0; i < noteArray.length; i++) {
    const index = magazineArray.indexOf(noteArray[i])
    if (index === -1) {
      return false //we haven't found the letter in the magazine, so we can't make the note
    }
    magazineArray.splice(index, 1) //remove the letter from the magazine
  }

  return true
}
