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
        var request = new XMLHttpRequest;
        var self = this;

        // Handles the response recieved from sending the request
        request.onload = function() {
            if (request.response) {
                this.db = self.CSVToArray(request.response);
                console.log(this.db);
            }
        }

        request.open('GET', 'data/' + filename);
        request.responseType = 'text';

        request.send();
    }

    CSVToArray = (csv, delimiter = ',') => {
        var rows = csv.split('\r\n');
        var result = [];
        
        for (var i = 1; i < rows.length; i++) {
            var obj = [];
            if(rows[i] == undefined || rows[i].trim() == "") {
                continue;
            }

            var words = rows[i].split(delimiter);
            //console.log(words);
            obj = words[0];
            result.push(obj);
        }
        return result;
    }

    printWords() {
        let dict = this.db;
        return dict;
    }
   
}

export default Dictionary;