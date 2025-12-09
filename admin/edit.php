<?php
require_once __DIR__ . '/../includes/db_connect.php';
require_once 'admin_header.php';

if (!isset($_GET['id'])) {
    header("Location: index.php");
    exit();
}

$stmt = $conn->prepare("SELECT * FROM announcements WHERE id = :id");
$stmt->execute([':id' => $_GET['id']]);
$announcement = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$announcement) {
    die("Announcement not found");
}
?>

<div class="card">
    <div style="margin-bottom: 2rem;">
        <a href="index.php" style="color: #666; text-decoration: none;">&larr; Πίσω</a>
        <h2 style="margin-top: 1rem;">Επεξεργασία Ανακοίνωσης</h2>
    </div>

    <form action="save_announcement.php" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="id" value="<?php echo $announcement['id']; ?>">

        <div class="form-group">
            <label for="title">Τίτλος</label>
            <input type="text" id="title" name="title" value="<?php echo htmlspecialchars($announcement['title']); ?>"
                required>
            <div class="form-group">
                <label for="type">Τύπος</label>
                <select id="type" name="type"
                    style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; background: white;">
                    <option value="event" <?php echo ($announcement['type'] ?? 'event') == 'event' ? 'selected' : ''; ?>>
                        Εκδήλωση</option>
                    <option value="announcement" <?php echo ($announcement['type'] ?? '') == 'announcement' ? 'selected' : ''; ?>>Ανακοίνωση</option>
                </select>
            </div>

            <div class="form-group">
                <label for="event_date">Ημερομηνία Εκδήλωσης</label>
                <input type="date" id="event_date" name="event_date" value="<?php echo $announcement['event_date']; ?>"
                    required>
            </div>

            <div class="form-group">
                <label for="image">Νέα Εικόνα (Αφήστε κενό για διατήρηση)</label>
                <?php if ($announcement['image_path']): ?>
                    <div style="margin-bottom: 0.5rem;">
                        <img src="../<?php echo htmlspecialchars($announcement['image_path']); ?>" alt="Current Image"
                            style="height: 100px; border-radius: 4px;">
                    </div>
                <?php endif; ?>
                <input type="file" id="image" name="image" accept="image/*">
            </div>

            <div class="form-group">
                <label for="content">Περιγραφή</label>
                <textarea id="content" name="content"
                    required><?php echo htmlspecialchars($announcement['content']); ?></textarea>
            </div>

            <button type="submit" class="btn">Ενημέρωση</button>
    </form>
</div>

<script>
    lucide.createIcons();
</script>
</body>

</html>