<?php 
$servername = "localhost";
$username = "root";
$password = "1234";

try {
        $conn = new PDO("mysql:host=$servername;dbname=test", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully"; 
    }
catch(PDOException $e)
    {
        echo "Connection failed: " . $e->getMessage();
    }

print_r(json_decode([{"id":1,"name":"Ao Somi 2","price":"60000","img":"https://static.hotdeal.vn/images/1412/1412366/400x500/318494-ao-so-mi-nu-dai-tay-no-vien-co-noi-bat.jpg","quantity":1,"$$hashKey":"object:14"},{"id":2,"name":"Ao Somi 3","price":"70000","img":"https://static.hotdeal.vn/images/1412/1412366/400x500/318494-ao-so-mi-nu-dai-tay-no-vien-co-noi-bat.jpg","quantity":1,"$$hashKey":"object:15"}]));
 /* if (isset($_POST)) {
	 $YourPostData = file_get_contents("php://input");
	 $request = json_decode($YourPostData);
     echo $request->product;
	 foreach ($request->product as $value) {
	 	$query = 'insert into product(name, price, quantity) values('. $value->name .', 1, 2)';
        $conn->exec($query);
	 }
}
*/