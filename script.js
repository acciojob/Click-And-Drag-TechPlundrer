

let draggedItem = null;

document.querySelectorAll('li').forEach(item => {

  item.addEventListener('dragstart', function() {
    draggedItem = this;
  });

  item.addEventListener('dragover', function(e) {
    e.preventDefault();
  });

  item.addEventListener('drop', function() {
    this.parentNode.insertBefore(draggedItem, this);
  });

});


