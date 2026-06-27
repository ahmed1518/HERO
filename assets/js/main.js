(function () {
  'use strict';

  document.documentElement.classList.add('js');

  // cursor-follow glow on buttons
  document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var rect = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width) * 100 + '%');
      btn.style.setProperty('--my', ((e.clientY - rect.top) / rect.height) * 100 + '%');
    });
  });

  // reveal-on-scroll for cards and sections
  var revealTargets = document.querySelectorAll('.step-card, .feature-card, .changelog-card, .section-title, .section-sub');
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach(function (el) { observer.observe(el); });
})();
