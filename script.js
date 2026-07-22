document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade-in');
  animatedElements.forEach(el => observer.observe(el));

  // Add stagger delay for grid children
  const problemCards = document.querySelectorAll('.problem-card');
  problemCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  const stepCards = document.querySelectorAll('.step-card');
  stepCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  const benefitItems = document.querySelectorAll('.benefit-item');
  benefitItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });
});
