<?php require_once 'includes/header.php'; ?>

<!-- Hero Section -->
<section class="hero">
    <div class="hero-content">
        <h1>Καλώς ήρθατε στο Σύλλογο Κρητών <br> Αγίας Παρασκευής</h1>
        <p>Ένα ταξίδι στην παράδοση, τη μουσική και την ιστορία της Κρήτης.</p>
        <a href="#events" class="btn-primary">Δείτε τις Εκδηλώσεις μας</a>
    </div>
</section>

<!-- About Section -->
<section id="about" class="section">
    <div class="container">
        <h2 class="section-title">Σχετικά με εμάς</h2>
        <div style="text-align: center; max-width: 800px; margin: 0 auto; line-height: 1.8;">
            <p>
                Ο Σύλλογος Κρητών Αγίας Παρασκευής ιδρύθηκε με σκοπό τη διατήρηση και διάδοση της πλούσιας πολιτιστικής
                κληρονομιάς της Κρήτης.
                Μέσα από χορευτικά μαθήματα, πολιτιστικές εκδηλώσεις και κοινωνικές δράσεις, φέρνουμε τους Κρητικούς και
                τους φίλους της Κρήτης πιο κοντά.
            </p>
        </div>
    </div>
</section>

<?php
// Fetch latest 3 events
try {
    require_once 'includes/db_connect.php';
    $stmt_events = $conn->query("SELECT * FROM announcements WHERE type = 'event' ORDER BY event_date DESC LIMIT 3");
    $events = $stmt_events->fetchAll(PDO::FETCH_ASSOC);

    $stmt_announcements = $conn->query("SELECT * FROM announcements WHERE type = 'announcement' ORDER BY created_at DESC LIMIT 3");
    $recent_announcements = $stmt_announcements->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    $events = [];
    $recent_announcements = [];
}
?>

<!-- Events Section -->
<section id="events" class="section" style="background-color: var(--light-gray);">
    <div class="container">
        <h2 class="section-title">Εκδηλώσεις</h2>

        <?php if (count($events) > 0): ?>
            <div class="grid">
                <?php foreach ($events as $ann): ?>
                    <article class="card">
                        <div class="card-image"
                            style="background-image: url('<?php echo $ann['image_path'] ? htmlspecialchars($ann['image_path']) : 'https://images.unsplash.com/photo-1543050097-eb63b272f3d6?q=80&w=1968&auto=format&fit=crop'; ?>');">
                        </div>
                        <div class="card-content">
                            <div class="card-date">
                                <?php
                                setlocale(LC_TIME, 'el_GR.UTF-8');
                                echo date("d/m/Y", strtotime($ann['event_date']));
                                ?>
                            </div>
                            <h3 class="card-title"><?php echo htmlspecialchars($ann['title']); ?></h3>
                            <p><?php echo mb_substr(strip_tags($ann['content']), 0, 100) . '...'; ?></p>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        <?php else: ?>
            <p style="text-align: center;">Δεν υπάρχουν ακόμη προγραμματισμένες εκδηλώσεις.</p>
        <?php endif; ?>
    </div>
</section>

<!-- Announcements Section -->
<section id="announcements" class="section">
    <div class="container">
        <h2 class="section-title">Νέα & Ανακοινώσεις</h2>

        <?php if (count($recent_announcements) > 0): ?>
            <div class="grid">
                <?php foreach ($recent_announcements as $ann): ?>
                    <article class="card">
                        <!-- Announcements might need a different default image, or no image if desired. Using same style for consistency. -->
                        <div class="card-image"
                            style="background-image: url('<?php echo $ann['image_path'] ? htmlspecialchars($ann['image_path']) : 'https://images.unsplash.com/photo-1505567745926-ba89000d255a?q=80&w=2071&auto=format&fit=crop'; ?>');">
                        </div>
                        <div class="card-content">
                            <div class="card-date">
                                <?php
                                setlocale(LC_TIME, 'el_GR.UTF-8');
                                echo date("d/m/Y", strtotime($ann['event_date']));
                                ?>
                            </div>
                            <h3 class="card-title"><?php echo htmlspecialchars($ann['title']); ?></h3>
                            <p><?php echo mb_substr(strip_tags($ann['content']), 0, 100) . '...'; ?></p>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        <?php else: ?>
            <p style="text-align: center;">Δεν υπάρχουν πρόσφατες ανακοινώσεις.</p>
        <?php endif; ?>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section">
    <div class="container">
        <h2 class="section-title">Επικοινωνία</h2>
        <div style="max-width: 600px; margin: 0 auto; text-align: center;">
            <p style="margin-bottom: 2rem;">Ενδιαφέρεστε να γίνετε μέλος ή έχετε κάποια ερώτηση; Επικοινωνήστε μαζί μας.
            </p>
            <p>Email: info@syllogoskritonagp.gr</p>
            <p>Τηλέφωνο: 210 1234567</p>
            <p>Διεύθυνση: Αγία Παρασκευή, Αττική</p>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>