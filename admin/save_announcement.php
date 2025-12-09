<?php
require_once __DIR__ . '/../includes/db_connect.php';
require_once 'auth_check.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $content = $_POST['content'];
    $event_date = $_POST['event_date'];
    $type = $_POST['type'] ?? 'event';
    $image_path = null;

    // Handle File Upload
    // Handle File Upload
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $target_dir = __DIR__ . "/../uploads/";

        // Ensure directory exists
        if (!file_exists($target_dir)) {
            mkdir($target_dir, 0777, true);
        }

        $file_extension = strtolower(pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION));
        $allowed_extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

        if (in_array($file_extension, $allowed_extensions)) {
            $new_filename = uniqid() . '.' . $file_extension;
            $target_file = $target_dir . $new_filename;

            if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
                $image_path = "uploads/" . $new_filename;
            } else {
                die("Error: Failed to move uploaded file. Check permissions for $target_dir");
            }
        } else {
            die("Error: Invalid file type. Only JPG, JPEG, PNG, GIF, and WEBP are allowed.");
        }
    } elseif (isset($_FILES['image']) && $_FILES['image']['error'] != UPLOAD_ERR_NO_FILE) {
        die("File upload error code: " . $_FILES['image']['error']);
    }

    try {
        if (isset($_POST['id']) && !empty($_POST['id'])) {
            // Update
            $id = $_POST['id'];
            $sql = "UPDATE announcements SET title = :title, type = :type, content = :content, event_date = :event_date";
            if ($image_path) {
                $sql .= ", image_path = :image_path";
            }
            $sql .= " WHERE id = :id";

            $stmt = $conn->prepare($sql);
            $params = [
                ':title' => $title,
                ':type' => $type,
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
            $sql = "INSERT INTO announcements (title, type, content, event_date, image_path) VALUES (:title, :type, :content, :event_date, :image_path)";
            $stmt = $conn->prepare($sql);
            $stmt->execute([
                ':title' => $title,
                ':type' => $type,
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