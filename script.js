
  const cubes = document.querySelectorAll('.cube');
  let draggedItem = null;

  cubes.forEach(cube => {
    cube.addEventListener('dragstart', () => {
      draggedItem = cube;
      cube.classList.add('dragging');
    });

    cube.addEventListener('dragend', () => {
      cube.classList.remove('dragging');
      draggedItem = null;
    });

    cube.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    cube.addEventListener('drop', (e) => {
      e.preventDefault();
      if (draggedItem && draggedItem !== cube) {
        cube.parentNode.insertBefore(draggedItem, cube.nextSibling);
      }
    });
  });

