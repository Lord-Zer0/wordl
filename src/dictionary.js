class Dictionary {
    Constructor() {
        this.db = []
    }

    loadWordsIntoDictionary(wordlist) {
        for (let index = 0; index < wordlist.length; index++) {
            this.db[index] = wordlist[index];
        }
    }

    loadWordData(filename) {
        
    }
   
}

export default Dictionary;