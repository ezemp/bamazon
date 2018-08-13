DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
itemId INT NOT NULL,
productName VARCHAR(50),
departmentName VARCHAR(50),
price DECIMAL(4,2) NOT NULL,
stockQuantity INT NOT NULL) ;

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity) VALUES 
(
1,
'Nvidia Titan V',
'Computer Parts',
10.99,
4
);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity) VALUES 
(2,
'Yamaha Digital Piano',
'Music',
99.99,
10);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity) VALUES 
(3,
'Monster Hunter: World',
'Games and Entertainnment',
59.99,
25);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity) VALUES 
(4,
'Down Pillow',
'Home',
47.99,
100);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity) VALUES 
(5,
'Bath Towel',
'Home',
24.99,
100);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity) VALUES 
(6,
'Computer keyboard',
'Computer Accessories',
99.99,
250);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity) VALUES 
(7,
'Computer Mouse',
'Computer Accessories',
99.99,
250);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity) VALUES 
(8,
'Kibbles n Bits',
'Pet Care',
44.99,
1000);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity) VALUES 
(9,
'Dog Leash',
'Pet Care',
9.99,
1500);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity) VALUES 
(10,
'Final Fantasy 7',
'Games and Entertainment',
19.99,
1500);


