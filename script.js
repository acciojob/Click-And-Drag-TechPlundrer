// Your code here.
<script>
  const container = document.querySelector('.items');
  const items = document.querySelectorAll('.item');

  let activeItem = null;
  let startX = 0;
  let startY = 0;
  let offsetX = 0;
  let offsetY = 0;

  items.forEach(item => {
    item.addEventListener('mousedown', e => {
      activeItem = item;
      container.classList.add('active');

      const rect = item.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Mouse offset inside the item
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      // Lock size
      item.style.width = rect.width + 'px';
      item.style.height = rect.height + 'px';

      // Convert to absolute positioning
      item.style.position = 'absolute';
      item.style.left = rect.left - containerRect.left + container.scrollLeft + 'px';
      item.style.top = rect.top - containerRect.top + 'px';

      // Kill 3D transform during drag (important)
      item.style.transform = 'none';
      item.style.cursor = 'grabbing';

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  });

  function onMouseMove(e) {
    if (!activeItem) return;

    const containerRect = container.getBoundingClientRect();

    let x =
      e.clientX -
      containerRect.left -
      offsetX +
      container.scrollLeft;

    let y =
      e.clientY -
      containerRect.top -
      offsetY;

    // Boundaries
    const maxX =
      container.scrollWidth - activeItem.offsetWidth;
    const maxY =
      container.clientHeight - activeItem.offsetHeight;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    activeItem.style.left = x + 'px';
    activeItem.style.top = y + 'px';
  }

  function onMouseUp() {
    if (!activeItem) return;

    activeItem.style.cursor = 'grab';
    container.classList.remove('active');

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    activeItem = null;
  }
</script>
