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
// Fetch latest 3 announcements
try {
    require_once 'includes/db_connect.php';
    $stmt = $conn->query("SELECT * FROM announcements ORDER BY event_date DESC LIMIT 3");
    $announcements = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    $announcements = [];
}
?>

<!-- Events Section -->
<section id="events" class="section" style="background-color: var(--light-gray);">
    <div class="container">
        <h2 class="section-title">Τελευταία Νέα & Ανακοινώσεις</h2>

        <?php if (count($announcements) > 0): ?>
            <div class="grid">
                <?php foreach ($announcements as $ann): ?>
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
            <p style="text-align: center;">Δεν υπάρχουν ακόμη ανακοινώσεις.</p>
        <?php endif; ?>

        <div style="text-align: center; margin-top: 3rem;">
            <!-- Optionally link to a full archive page later -->
            <a href="#" class="btn-primary"
                style="background-color: transparent; border: 2px solid var(--primary-color); color: var(--primary-color);">Όλες
                οι Ανακοινώσεις</a>
        </div>
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