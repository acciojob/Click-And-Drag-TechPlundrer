
const items = document.querySelectorAll('.item');
const container = document.querySelector('.items');

let draggedItem = null;

// When drag starts
items.forEach(function(item) {

  item.addEventListener('dragstart', function() {
    draggedItem = this;
    setTimeout(() => {
      this.style.display = "none";
    }, 0);
  });

  item.addEventListener('dragend', function() {
    this.style.display = "flex";
    draggedItem = null;
  });

});

// Allow dropping inside container
container.addEventListener('dragover', function(e) {
  e.preventDefault();
});

// Handle drop logic
container.addEventListener('drop', function(e) {
  e.preventDefault();

  const afterElement = getDragAfterElement(container, e.clientX);
  
  if (afterElement == null) {
    container.appendChild(draggedItem);
  } else {
    container.insertBefore(draggedItem, afterElement);
  }
});

// Helper function to determine drop position
function getDragAfterElement(container, x) {
  const draggableElements = [...container.querySelectorAll('.item:not([style*="display: none"])')];

  let closest = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  draggableElements.forEach(function(child) {
    const box = child.getBoundingClientRect();
    const offset = x - box.left - box.width / 2;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closest = child;
    }
  });

  return closest;
}




