(function () {
  var navToggle = document.getElementById('mobile-nav-toggle');
  var nav = document.getElementById('main-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var ponenciasFilter = document.querySelector('.ponencias-filter');
  var yearFilter = document.getElementById('ponencias-year-filter');
  var monthFilter = document.getElementById('ponencias-month-filter');
  var ponenciasEmpty = document.querySelector('.ponencias-empty');
  if (ponenciasFilter && yearFilter && monthFilter) {
    var applyFilters = function () {
      var typeValue = (document.querySelector('input[name="ponencias-filter"]:checked') || {}).value || 'all';
      var yearValue = yearFilter.value;
      var monthValue = monthFilter.value;
      var visibleCount = 0;

      document.querySelectorAll('.ponencia-card').forEach(function (card) {
        var tags = card.getAttribute('data-tags') || '';
        var year = card.getAttribute('data-year') || '';
        var month = card.getAttribute('data-month') || '';
        var match = (typeValue === 'all' || tags.indexOf(typeValue) !== -1) &&
          (yearValue === 'all' || year === yearValue) &&
          (monthValue === 'all' || month === monthValue);
        if (match) {
          card.removeAttribute('hidden');
          visibleCount += 1;
        } else {
          card.setAttribute('hidden', '');
        }
      });

      if (ponenciasEmpty) {
        if (visibleCount === 0) ponenciasEmpty.removeAttribute('hidden');
        else ponenciasEmpty.setAttribute('hidden', '');
      }
    };

    ponenciasFilter.addEventListener('change', function (e) {
      if (e.target && e.target.name === 'ponencias-filter') applyFilters();
    });
    yearFilter.addEventListener('change', applyFilters);
    monthFilter.addEventListener('change', applyFilters);
  }

  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    var status = contactForm.querySelector('.form-status');
    if (window.location.search.indexOf('enviado=1') !== -1) {
      status.textContent = 'Gracias, tu mensaje se ha enviado correctamente.';
      status.className = 'form-status form-status-success';
      window.history.replaceState(null, '', window.location.pathname);
    }
  }
})();
