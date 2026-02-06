<script>
  const items = document.querySelectorAll('.item');
  let draggedItem = null;

  items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
      draggedItem = item;
      item.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      draggedItem = null;
    });

    item.addEventListener('dragover', (e) => {
      e.preventDefault(); // REQUIRED for drop to fire
    });

    item.addEventListener('drop', (e) => {
      e.preventDefault();
      if (!draggedItem || draggedItem === item) return;

      const container = item.parentNode;
      container.insertBefore(draggedItem, item.nextSibling);
    });
  });
</script>


