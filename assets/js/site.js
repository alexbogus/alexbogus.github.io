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
  if (ponenciasFilter) {
    var applyFilter = function (value) {
      var items = document.querySelectorAll('.ponencia-item');
      items.forEach(function (item) {
        var tags = (item.getAttribute('data-tags') || '');
        var match = value === 'all' || tags.indexOf(value) !== -1;
        if (match) item.removeAttribute('hidden'); else item.setAttribute('hidden', '');
      });

      document.querySelectorAll('.ponencias-group').forEach(function (group) {
        var visible = group.querySelectorAll('.ponencia-item:not([hidden])').length > 0;
        if (visible) group.removeAttribute('hidden'); else group.setAttribute('hidden', '');
      });

      document.querySelectorAll('.ponencias-year').forEach(function (year) {
        var visible = year.querySelectorAll('.ponencia-item:not([hidden])').length > 0;
        if (visible) year.removeAttribute('hidden'); else year.setAttribute('hidden', '');
      });
    };

    ponenciasFilter.addEventListener('change', function (e) {
      if (e.target && e.target.name === 'ponencias-filter') applyFilter(e.target.value);
    });
  }

  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    var status = contactForm.querySelector('.form-status');
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = 'Enviando…';
      status.className = 'form-status';
      fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          status.textContent = 'Gracias, tu mensaje se ha enviado correctamente.';
          status.className = 'form-status form-status-success';
          contactForm.reset();
        } else {
          status.textContent = 'No se ha podido enviar el mensaje. Inténtalo de nuevo o escribe directamente por email.';
          status.className = 'form-status form-status-error';
        }
      }).catch(function () {
        status.textContent = 'No se ha podido enviar el mensaje. Inténtalo de nuevo o escribe directamente por email.';
        status.className = 'form-status form-status-error';
      });
    });
  }
})();
