document.addEventListener('DOMContentLoaded', () => {
  // Menu Mobile Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Fermer le menu lors du clic sur un lien
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Gestion du formulaire de contact / devis
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const service = document.getElementById('service-type').value;

    alert(`Merci ${name} ! Votre demande pour le service (${service}) a bien été envoyée. L'équipe WebIprint services vous recontactera rapidement.`);

    contactForm.reset();
  });
});