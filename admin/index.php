<?php
require_once __DIR__ . '/../includes/db_connect.php';
require_once 'admin_header.php';

// Fetch announcements
$stmt = $conn->query("SELECT * FROM announcements ORDER BY event_date DESC");
$announcements = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h2>Ανακοινώσεις & Εκδηλώσεις</h2>
        <a href="create.php" class="btn"><i data-lucide="plus"></i> Νέα Ανακοίνωση</a>
    </div>

    <table>
        <thead>
            <tr>
                <th>Εικόνα</th>
                <th>Τίτλος</th>
                <th>Ημερομηνία</th>
                <th>Ενέργειες</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($announcements as $ann): ?>
                <tr>
                    <td>
                        <?php if ($ann['image_path']): ?>
                            <img src="../<?php echo htmlspecialchars($ann['image_path']); ?>" alt="img" class="preview-img">
                        <?php else: ?>
                            <span style="color: #999;">Χωρίς εικόνα</span>
                        <?php endif; ?>
                    </td>
                    <td><?php echo htmlspecialchars($ann['title']); ?></td>
                    <td>
                        <?php
                        // Format date to Greek format if possible, or just standard
                        echo date("d/m/Y", strtotime($ann['event_date']));
                        ?>
                    </td>
                    <td class="actions">
                        <a href="edit.php?id=<?php echo $ann['id']; ?>" class="btn btn-secondary"
                            style="background:#f39c12;"><i data-lucide="edit-2"></i></a>
                        <a href="delete.php?id=<?php echo $ann['id']; ?>" class="btn btn-danger"
                            onclick="return confirm('Είστε σίγουρος/η;')"><i data-lucide="trash-2"></i></a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>

<script>
    lucide.createIcons();
</script>
</body>

</html>