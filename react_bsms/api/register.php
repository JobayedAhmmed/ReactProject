<?php



include("db_connection.php");

// echo "Hello";

$data = file_get_contents("php://input");
// echo $data;

$data = json_decode($data);

if (($data->fullname) && ($data->fullname != '')) {

    $fullname = $data->fullname;
    $email = $data->email;
    $mobile = $data->mobile;
    $massage = $data->massage;

    $result = mysqli_query($db_conn, "SELECT * FROM  order_list WHERE email = '$email'");


    if (mysqli_num_rows($result) > 0) {
        echo json_encode("Try with different Email Address");
    } else {
        $resultInsert = mysqli_query($db_conn, "INSERT INTO order_list (fullname, email, mobile,massage) VALUES ('$fullname','$email','$mobile','$massage')");

        echo json_encode("Registration Completed.");
    }
} else {
    echo json_encode("All Field must be filled");
}
