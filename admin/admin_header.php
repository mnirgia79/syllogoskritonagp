<?php require_once 'auth_check.php'; ?>
<!DOCTYPE html>
<html lang="el">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Διαχείριση - Σύλλογος Κρητών</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: #f4f6f8;
            margin: 0;
            padding: 0;
        }

        .admin-nav {
            background: #004e80;
            color: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .admin-nav h1 {
            margin: 0;
            font-size: 1.2rem;
        }

        .admin-container {
            max-width: 1000px;
            margin: 2rem auto;
            padding: 0 1rem;
        }

        .card {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .btn {
            padding: 0.5rem 1rem;
            background: #004e80;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }

        .btn-danger {
            background: #e74c3c;
        }

        .btn-secondary {
            background: #95a5a6;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }

        th,
        td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #eee;
        }

        th {
            font-weight: 600;
            color: #555;
        }

        .actions {
            display: flex;
            gap: 0.5rem;
        }

        .form-group {
            margin-bottom: 1rem;
        }

        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        input[type="text"],
        input[type="date"],
        textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-family: inherit;
        }

        textarea {
            height: 150px;
        }

        .preview-img {
            max-width: 100px;
            max-height: 100px;
            object-fit: cover;
            border-radius: 4px;
        }
    </style>
</head>

<body>
    <nav class="admin-nav">
        <h1>Διαχείριση Περιεχομένου</h1>
        <div>
            <span style="margin-right: 15px;">👤 <?php echo htmlspecialchars($_SESSION['username'] ?? 'User'); ?></span>
            <a href="../index.php" target="_blank"
                style="color: white; text-decoration: none; margin-right: 15px;">Προβολή Site</a>
            <a href="logout.php" style="color: #ffcccb; text-decoration: none;">Έξοδος</a>
        </div>
    </nav>
    <div class="admin-container">