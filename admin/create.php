<?php require_once 'admin_header.php'; ?>

<div class="card">
    <div style="margin-bottom: 2rem;">
        <a href="index.php" style="color: #666; text-decoration: none;">&larr; Πίσω</a>
        <h2 style="margin-top: 1rem;">Δημιουργία Ανακοίνωσης</h2>
    </div>

    <form action="save_announcement.php" method="POST" enctype="multipart/form-data">
        <div class="form-group">
            <label for="title">Τίτλος</label>
            <input type="text" id="title" name="title" required>
        </div>

        <div class="form-group">
            <label for="event_date">Ημερομηνία Εκδήλωσης</label>
            <input type="date" id="event_date" name="event_date" required>
        </div>

        <div class="form-group">
            <label for="image">Εικόνα (Προαιρετικό)</label>
            <input type="file" id="image" name="image" accept="image/*">
        </div>

        <div class="form-group">
            <label for="content">Περιγραφή</label>
            <textarea id="content" name="content" required></textarea>
        </div>

        <button type="submit" class="btn">Αποθήκευση</button>
    </form>
</div>

<script>
    lucide.createIcons();
</script>
</body>

</html>