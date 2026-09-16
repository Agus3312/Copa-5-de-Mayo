document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const status = document.querySelector('.form-status');

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('nombre')?.value?.trim() || 'Participante';
      status.textContent = `¡Gracias, ${name}! Tu registro quedó listo para continuar con el pago.`;
      form.reset();
    });
  }

  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
