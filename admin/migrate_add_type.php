<?php
require_once __DIR__ . '/../includes/db_connect.php';

try {
    // Add 'type' column to announcements table
    $sql = "ALTER TABLE announcements ADD COLUMN type ENUM('event', 'announcement') NOT NULL DEFAULT 'event' AFTER title";
    $conn->exec($sql);
    echo "Column 'type' added successfully.";
} catch (PDOException $e) {
    if ($e->getCode() == '42S21') { // Duplicate column name error code
        echo "Column 'type' already exists.";
    } else {
        echo "Error: " . $e->getMessage();
    }
}
?>