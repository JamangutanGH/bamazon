var inquirer = require('inquirer');
var mysql = require('mysql');
// requiring inquirer and my sql
//setting local host connection req
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "BamazonDB"
});
//connection to provided host/port/referenced DB
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id #" + connection.threadId);
    product_list();

});

function product_list() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        var rowEntry = ``;
        res.forEach(function (row) {
            rowEntry = `|${row.id}_-${row.Item_ID}| Product Name:${row.Product_Name} Department:${row.Department_Name} Customer Price:$${row.Customer_Price} Stock:${row.Stock_Quantity}`
            console.log(rowEntry);
        });
        connection.end();
        console.log("-------------------------------------------------");

    });
    
}

function selectedProduct() {
    inquirer.prompt([{
        message: "Type the Product id for Purchase",
        type: "input",
        name: "idx"

    }]).then(function (selection) {
      connection.query("SELECT *  FROM products WHERE id=?", [selection.id], function (err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].id);
              }
        });
      
        
    });
};
selectedProduct();
// start();
// function start() {    
//     inquirer.prompt([{
//         name: "action",
//         message: "Welcome to Bamazon:",
//         choices: ["id-Name-Price1", "idNamePrice2", "idNamePrice3"],
//         type: "list"
//     }]).then(function (response) {
//         switch (response.action) {
//             case "id-Name-Price1":
//                 selectItem();
//                 break;
//             default:
//                 break;
//         }
//     });
// //once an product is selected, prompt purchase ID/count 
// function selectItem() {
//     inquirer.prompt([{
//         name: "prodNumb",
//         message: "enter product number"
//     }, {
//         name: "prodCount",
//         message: "How many would you like?"
//     }]).then(function (answers) {
//         var orderNumb = answers.prodNumb;
//         var orderCount = answers.prodCount;
//         console.log(`|${orderCount}|OF-Product:#${orderNumb}**|ORDERED|`);

//         start();
//     });
//      //compare order to data base
//         //search key by orderNumb
//         //compare orderCount with invCount
//         //(T-F)->Order
// };

// function start(){
//     inquirer.prompt([
//         {

//         }
//     ]).then(function (){

//     });
// };