document.querySelectorAll('.accordion__content').forEach(item => {
  item.style.maxHeight = 0;  
});

document.querySelectorAll('.accordion__button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }
  })
})