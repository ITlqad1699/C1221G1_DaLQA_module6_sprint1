drop database if exists invoice;
create database invoice;
CREATE TABLE type_of_invoice(
 type_of_invoice_id  	INT PRIMARY KEY AUTO_INCREMENT,
 type_of_invoice_name   VARCHAR(45)
);

create table invoice(
	invoice_id varchar(45) primary key,
    customer_id varchar(45),
    employee_id varchar(45),
    
);
