<?php
require_once __DIR__ . '/../includes/db_connect.php';
require_once 'auth_check.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    try {
        $stmt = $conn->prepare("DELETE FROM announcements WHERE id = :id");
        $stmt->execute([':id' => $id]);
    } catch (PDOException $e) {
        die("Error deleting: " . $e->getMessage());
    }
}

header("Location: index.php");
exit();
?>