
  const container = document.querySelector('.items');
  let draggedItem = null;

  container.addEventListener('dragstart', (e) => {
    if (!e.target.classList.contains('item')) return;

    draggedItem = e.target;
    e.dataTransfer.setData('text/plain', ''); 
    e.dataTransfer.effectAllowed = 'move';
  });

  container.addEventListener('dragover', (e) => {
    e.preventDefault(); 
  });

  container.addEventListener('drop', (e) => {
    e.preventDefault();

    const target = e.target.closest('.item');
    if (!draggedItem || !target || draggedItem === target) return;

    container.insertBefore(draggedItem, target.nextSibling);
  });

  container.addEventListener('dragend', () => {
    draggedItem = null;
  });




