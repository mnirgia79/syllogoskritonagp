<!DOCTYPE html>
<html lang="el">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Σύλλογος Κρητών Αγίας Παρασκευής</title>
    <meta name="description"
        content="Η επίσημη ιστοσελίδα του Συλλόγου Κρητών Αγίας Παρασκευής - Διατηρώντας την παράδοση ζωντανή.">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;700&display=swap"
        rel="stylesheet">

    <!-- Main CSS -->
    <link rel="stylesheet" href="css/style.css">

    <!-- Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>

<body>

    <header>
        <nav class="navbar">
            <a href="index.php" class="logo">Σύλλογος Κρητών</a>

            <ul class="nav-links">
                <li><a href="index.php"
                        class="<?php echo basename($_SERVER['PHP_SELF']) == 'index.php' ? 'active' : ''; ?>">Αρχική</a>
                </li>
                <li><a href="#about">Ο Σύλλογος</a></li>
                <li><a href="#events">Εκδηλώσεις</a></li>
                <li><a href="#multimedia">Πολυμέσα</a></li>
                <li><a href="#contact" class="cta-button">Επικοινωνία</a></li>
            </ul>

            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>