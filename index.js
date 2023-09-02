// the query must not contain attributes ot tables named: SELECT/select/JOIN/join

// es: SELECT column1, column2, column3 FROM table INNER JOIN table2 WHERE condition

function query_formatting(query) {
    const regex = /(?:FROM|JOIN|from|join)\s+(\w+)/gi;
    const matches = [];

    let match = "";

    while ((match = regex.exec(query)) !== null) {
        matches.push(match[1]);
    }

    // ["table", "table2"]

    let selectIndex = query.indexOf("SELECT");

    if (selectIndex == -1) {
        selectIndex = query.indexOf("select");

        if (selectIndex == -1) return "";
    }

    const afterSelect = query.substring(selectIndex + "SELECT".length); // " column1, column2, column3 FROM table INNER JOIN table2 WHERE condition"
    let columns_dirty = afterSelect.split(","); // [" column1" | " column2" | " column3 FROM table INNER JOIN table2 WHERE condition"]

    let columns = [];

    for (let word of columns_dirty) {
        word = word.trim();

        let splitted = word.split(" ");

        if (splitted.length > 1) {
            columns.push(splitted[0]);
            break;
        }

        columns.push(word);
    }
}

const inputString =
    "SELECT column1, column2, column3 FROM table INNER JOIN table2 WHERE condition";
query_formatting(inputString);
