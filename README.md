# addalias

`addalias` is a Node.js utility that simplifies the construction of SQL `SELECT` queries by automatically generating column aliases based on table and column names. This tool is particularly useful when dealing with complex queries involving multiple tables and columns, ensuring that each column is uniquely identifiable in the final query.

## Features

- Automatically generates column aliases in the format `tableName_columnName`.
- Constructs a well-formatted `SELECT` query with given table and column information.
- Easy to integrate into your Node.js applications.

## Installation

To use `addalias`, first install it via npm:

```bash
npm install addalias
```

## Usage

To use the `addalias` function, require it in your Node.js application and call it with your table names, column attributes, and the part of the query following `SELECT`.

### Example

```javascript
const query_formatting = require('addalias');

// Example input
const tablesNames = ['Fruits', 'Foods'];
const tablesAttributes = [['color', 'weight'], ['calories', 'type']];
const afterSelectQuery = "FROM Fruits JOIN Foods ON Fruits.id = Foods.fruit_id";

// Generate the SQL query
const sqlQuery = query_formatting(tablesNames, tablesAttributes, afterSelectQuery);

console.log(sqlQuery);
```

### Output

```
SELECT Fruits.color as Fruits_color, Fruits.weight as Fruits_weight, Foods.calories as Foods_calories, Foods.type as Foods_type FROM Fruits JOIN Foods ON Fruits.id = Foods.fruit_id
```

## Function Signature

```javascript
query_formatting(tablesNames, tablesAttributes, afterSelectQuery)
```

### Parameters

- `tablesNames` (Array of Strings): An array of table names.
- `tablesAttributes` (Array of Arrays of Strings): A 2D array where each inner array contains column names corresponding to the tables in `tablesNames`.
- `afterSelectQuery` (String): The part of the SQL query that follows the `SELECT` clause, typically including `FROM`, `JOIN`, `WHERE`, etc.

### Returns

- (String): A SQL `SELECT` query with formatted column aliases.
