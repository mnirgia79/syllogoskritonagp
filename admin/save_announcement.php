<?php
require_once __DIR__ . '/../includes/db_connect.php';
require_once 'auth_check.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $content = $_POST['content'];
    $event_date = $_POST['event_date'];
    $image_path = null;

    // Handle File Upload
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $target_dir = "../uploads/";
        $file_extension = pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION);
        $new_filename = uniqid() . '.' . $file_extension;
        $target_file = $target_dir . $new_filename;

        if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
            $image_path = "uploads/" . $new_filename;
        }
    }

    try {
        if (isset($_POST['id']) && !empty($_POST['id'])) {
            // Update
            $id = $_POST['id'];
            $sql = "UPDATE announcements SET title = :title, content = :content, event_date = :event_date";
            if ($image_path) {
                $sql .= ", image_path = :image_path";
            }
            $sql .= " WHERE id = :id";

            $stmt = $conn->prepare($sql);
            $params = [
                ':title' => $title,
                ':content' => $content,
                ':event_date' => $event_date,
                ':id' => $id
            ];
            if ($image_path) {
                $params[':image_path'] = $image_path;
            }
            $stmt->execute($params);

        } else {
            // Insert
            $sql = "INSERT INTO announcements (title, content, event_date, image_path) VALUES (:title, :content, :event_date, :image_path)";
            $stmt = $conn->prepare($sql);
            $stmt->execute([
                ':title' => $title,
                ':content' => $content,
                ':event_date' => $event_date,
                ':image_path' => $image_path
            ]);
        }

        header("Location: index.php");
        exit();

    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>