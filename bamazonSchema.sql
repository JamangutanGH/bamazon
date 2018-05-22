DROP DATABASE IF EXISTS BamazonDB;
CREATE database BamazonDB;

USE BamazonDB;
/*id int NOT NULL AUTO_ENCREMENT,*/
CREATE TABLE products
(
    id int NOT NULL, 
    Item_ID VARCHAR(100) NULL,
    Product_Name VARCHAR(100) NULL,
    Department_Name VARCHAR(100) NULL,
    Customer_Price INT NULL,
    Stock_Quantity INT NUll,
    PRIMARY KEY (id)
);

INSERT INTO products (Item_ID,Product_Name, Department_Name,Customer_Price,Stock_Quantity)
VALUES ("Vextract","Vanilla Extract", "Grocery", 10.00, 100);
INSERT INTO products (Item_ID,Product_Name, Department_Name,Customer_Price,Stock_Quantity)
VALUES ("BrnSug","Brown Sugar", "Grocery", 8.00, 80);
INSERT INTO products (Item_ID,Product_Name, Department_Name,Customer_Price,Stock_Quantity)
VALUES ("ChocMilk","Chocolate Milk", "Grocery", 5.00, 40);

INSERT INTO products (Item_ID,Product_Name, Department_Name,Customer_Price,Stock_Quantity)
VALUES ("ScntCandle","Scented Candles", "Home", 7.00, 100);
INSERT INTO products (Item_ID,Product_Name, Department_Name,Customer_Price,Stock_Quantity)
VALUES ("LtBlb","Light Bulb", "Home", 3.00, 80);
INSERT INTO products (Item_ID,Product_Name, Department_Name,Customer_Price,Stock_Quantity)
VALUES ("PicFrm","Picture Frame", "Home", 9.00, 30);

INSERT INTO products (Item_ID,Product_Name, Department_Name,Customer_Price,Stock_Quantity)
VALUES ("Stplr","Stapler", "Office", 9.00, 50);
INSERT INTO products (Item_ID,Product_Name, Department_Name,Customer_Price,Stock_Quantity)
VALUES ("Pn10Pk","Pens, 10 Pack", "Office", 3.00, 1000);
INSERT INTO products (Item_ID,Product_Name, Department_Name,Customer_Price,Stock_Quantity)
VALUES ("Bndr3Ring","3-Ring Binder", "Office", 11.00, 25);
INSERT INTO products (Item_ID,Product_Name, Department_Name,Customer_Price,Stock_Quantity)
VALUES ("BopBop","Bops", "Office", 1000.00, 1);

select * from products ;