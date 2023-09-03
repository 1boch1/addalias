// input:
/*
tablesNames = ['Fruits', 'Foods', ...]
tablesAttributes = [['color', 'weight', ...], ['calories', 'type', ...]]
afterSelectQuery = "FROM ..."
*/

function query_formatting(tablesNames, tablesAttributes, afterSelectQuery) {
    let query_select = "SELECT ";

    for (let i in tablesAttributes) {
        for (let col of tablesNames[i]) {
            query_select +=
                tablesNames[i] +
                "." +
                col +
                " as " +
                tablesNames[i] +
                "_" +
                col +
                ", ";
        }
    }

    query_select = query_select.trim();
    query_select = query_select.substring(0, query_select.length - 1);

    const query = query_select + " " + afterSelectQuery;

    return query;
}

module.exports = query_formatting;
