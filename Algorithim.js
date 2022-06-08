function frequencyOfWords(book) {
  word = book.split(" ");
  result = {};
  for (let x = 0; x < book.length; x++) {
    if (result[word[x]] == undefined) {
      result[word[x]] = 1;
    } else {
      result[word[x]]++;
    }
  }
  console.log(result);
}

frequencyOfWords(
  "I want a pizza but not just any pizza , I want pineapple pizza"
);
frequencyOfWords("Please give me a salad and some a a a a a a ");

frequencyOfWords("chicken sandwich chicken sandwich");
