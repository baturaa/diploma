function filterBrand(brandId) {
  const blocks = document.querySelectorAll('.brand-block');
  
  blocks.forEach(block => {
    if (block.id === brandId) {
      block.style.display = 'block';
      block.scrollIntoView({ behavior: 'smooth' });
    } else {
      block.style.display = 'none';
    }
  });
}

// Показать все при загрузке (или только один бренд — если хочешь)
window.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.brand-block');
  blocks.forEach(block => block.style.display = 'block');
});