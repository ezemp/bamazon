var mysql = require("mysql");
var inquirer = require("inquirer");
var fs = require("fs");
var cli = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected to Bamazon DB")
    tableDisplay();
});

function tableDisplay() {
    connection.query("SELECT * FROM products", function(err,res){
        if(err) throw err
        var table = new cli({
            head: ['Item ID', "Product Name", "Department Name", "Price", "Current Stock"],
        });
        for (var i = 0; i < res.length; i++){
            table.push([res[i].itemId, res[i].productName, res[i].departmentName, res[i].price, res[i].stockQuantity])  
        }
        console.log(table.toString());
        inquirer.prompt([
            { 
                type: "input",
                name:"inId",
                message:"Please enter the item ID of the product you wish to purchase."
            },
            {
                type: "input",
                name:"qty",
                message: "How many do you wish to purchase? Enter Numerically."              
            }
        ]).then(function(res){
            var custId = parseFloat(res.inId)
            var custQty = parseFloat(res.qty)
            updateDatabase(custId, custQty)
        })
})
};

function updateDatabase(custId, custQty){
    connection.query("SELECT * FROM products WHERE itemId = " + custId, function(err, res){
        if(err) throw err
        if (res[0].stockQuantity < custQty){
            console.log("Unfortunately, we do not have enough stock to fulfill that order. Please check back soon!")
            more();
        }
       else{
           var totalPrice = res[0].price * custQty
           console.log("Order Confirmed. \nYour total is " + totalPrice + ".\nThank you for shopping with us.")
           connection.query("UPDATE Products SET stockQuantity = stockQuantity - " + custQty +" WHERE itemId = " + custId)
           more();
       }
    })
};


function more() {
    inquirer.prompt([
    {
        type: "confirm",
        message:"Would you like to continue shopping?",
        name: "continue",
        default:"true"
    }
]).then(function(res){
    if(res.continue = true){
        tableDisplay()
    }
    else if(res.continue = false){
        console.log("Have a nice day.")
        connection.end();
    }
}
)
}



















// function purchaseChoice(prod){
//     inquirer.prompt([
//         {
//         name: "Please enter the item ID you wish to purchase4"

//         }])
// }
