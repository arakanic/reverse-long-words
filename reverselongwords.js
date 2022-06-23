// The following function takes in a string of one or more words, and returns the same string, but with words longer than seven characters reversed.

function sevenWords(string) {
    return string.split(" ")
      .map(word => {
        return word.length > 7 ? word.split("").reverse().join("") : word
    }).join(" ")
  }
