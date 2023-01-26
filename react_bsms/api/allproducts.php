<?php
include('db_connection.php');

$sql = "SELECT * FROM products";
$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $products['id'] = $row['id'];
    $products['product_name'] = $row['product_name'];
    $products['product_details'] = $row['product_details'];
    $products['product_price'] = $row['product_price'];
    $products['product_image'] = $row['product_image'];
    $products['product_category'] = $row['product_category'];
    $myproducts['pr'][] = $products;
}

echo json_encode(['success' => "Yes", 'datas' => $myproducts]);
