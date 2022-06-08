2.SELECT ord_no, ord_date, purch_amt FROM orders WHERE saleman_id LIKE 5001

3.SELECT salesman.name, salesman.city, customers.cust_name FROM salesman INNER JOIN  customers ON salesman.city = customers.city