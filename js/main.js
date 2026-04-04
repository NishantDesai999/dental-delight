/**
 * Dental Delight – Pure Cure
 * js/main.js
 *
 * Features:
 *  1. Nav scroll state (opaque background after 20px)
 *  2. Mobile hamburger menu with drawer
 *  3. Smooth scroll for anchor links + drawer close
 *  4. Scroll-spy: active nav link highlighting
 *  5. Scroll-triggered fade-in animations (IntersectionObserver)
 *  6. Back-to-top button
 *  7. Appointment modal (WhatsApp form)
 */

(function () {
  'use strict';

  /* ── Element refs ──────────────────────────────────────── */
  const navbar       = document.getElementById('navbar');
  const hamburger    = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const backToTop    = document.getElementById('back-to-top');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose   = document.getElementById('modal-close');
  const apptForm     = document.getElementById('appointment-form');

  /* ── 1. Nav scroll state ───────────────────────────────── */
  function handleNavScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  /* ── 2. Hamburger / Mobile Drawer ─────────────────────── */
  function openDrawer() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function toggleDrawer() {
    mobileDrawer.classList.contains('open') ? closeDrawer() : openDrawer();
  }

  hamburger.addEventListener('click', toggleDrawer);

  // Close drawer when a drawer link is clicked
  document.querySelectorAll('.drawer-link').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  // Close drawer on outside click
  document.addEventListener('click', function (e) {
    if (
      mobileDrawer.classList.contains('open') &&
      !mobileDrawer.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeDrawer();
    }
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeDrawer();
      closeModal();
    }
  });

  /* ── 3. Smooth scroll for anchor links ────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ── 4. Scroll-spy ─────────────────────────────────────── */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  function updateScrollSpy() {
    const scrollPos = window.scrollY + 120;
    let current = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  /* ── 5. Scroll-triggered animations ───────────────────── */
  const animatedEls = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    const animObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    animatedEls.forEach(function (el) {
      animObserver.observe(el);
    });
  } else {
    // Fallback: show all immediately
    animatedEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── 6. Back-to-top ────────────────────────────────────── */
  function handleBackToTop() {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Unified scroll handler ────────────────────────────── */
  window.addEventListener('scroll', function () {
    handleNavScroll();
    updateScrollSpy();
    handleBackToTop();
  }, { passive: true });

  // Run once on load
  handleNavScroll();
  updateScrollSpy();
  handleBackToTop();

  /* ── 7. Appointment Modal ──────────────────────────────── */
  function openModal() {
    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus the first input for accessibility
    setTimeout(function () {
      const firstInput = apptForm.querySelector('input, select');
      if (firstInput) firstInput.focus();
    }, 100);
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Open modal on all .open-modal triggers
  document.querySelectorAll('.open-modal').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      closeDrawer();
      openModal();
    });
  });

  // Close on X button
  modalClose.addEventListener('click', closeModal);

  // Close on overlay backdrop click
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeModal();
  });

  /* ── Form validation & WhatsApp submit ─────────────────── */
  function showError(input, message) {
    const group = input.closest('.form-group');
    group.classList.add('has-error');
    input.classList.add('error');
    let errEl = group.querySelector('.form-error');
    if (!errEl) {
      errEl = document.createElement('div');
      errEl.className = 'form-error';
      group.appendChild(errEl);
    }
    errEl.textContent = message;
  }

  function clearError(input) {
    const group = input.closest('.form-group');
    group.classList.remove('has-error');
    input.classList.remove('error');
  }

  // Clear error on input
  apptForm.querySelectorAll('input, select').forEach(function (field) {
    field.addEventListener('input', function () { clearError(this); });
  });

  apptForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput  = document.getElementById('patient-name');
    const phoneInput = document.getElementById('patient-phone');
    const serviceEl  = document.getElementById('patient-service');
    const dateInput  = document.getElementById('patient-date');

    let valid = true;

    // Validate name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your name.');
      valid = false;
    } else {
      clearError(nameInput);
    }

    // Validate phone (basic: at least 7 digits)
    const phoneDigits = phoneInput.value.replace(/\D/g, '');
    if (!phoneInput.value.trim() || phoneDigits.length < 7) {
      showError(phoneInput, 'Please enter a valid phone number.');
      valid = false;
    } else {
      clearError(phoneInput);
    }

    if (!valid) return;

    // Build WhatsApp message
    const name    = nameInput.value.trim();
    const phone   = phoneInput.value.trim();
    const service = serviceEl.value || 'General Enquiry';
    const date    = dateInput.value
      ? new Date(dateInput.value).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
      : 'Flexible';

    const message =
      'Hi Dr. Disha,\n\n' +
      'I would like to book an appointment at Dental Delight.\n\n' +
      '• Name: ' + name + '\n' +
      '• Phone: ' + phone + '\n' +
      '• Service: ' + service + '\n' +
      '• Preferred Date: ' + date + '\n\n' +
      'Please let me know the available slots. Thank you!';

    const waURL = 'https://wa.me/919023039280?text=' + encodeURIComponent(message);
    window.open(waURL, '_blank', 'noopener');

    // Reset and close
    apptForm.reset();
    closeModal();
  });

  /* ── Set min date for date picker to today ─────────────── */
  const dateInput = document.getElementById('patient-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  /* ── 8. Dynamic Copyright Year ─────────────────────────── */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ── 9. FAQ Accordion ─────────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var answer = this.nextElementSibling;

      // Close all other FAQs
      document.querySelectorAll('.faq-question').forEach(function(otherBtn) {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherBtn.nextElementSibling.hidden = true;
          otherBtn.classList.remove('open');
        }
      });

      // Toggle current FAQ
      this.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      answer.hidden = expanded;
      this.classList.toggle('open', !expanded);
    });
  });

  /* ── 10. Reviews Carousel ─────────────────────────────── */
  (function initReviewsCarousel() {
    var viewport = document.getElementById('reviews-viewport');
    var track = document.getElementById('reviews-track');
    var dotsContainer = document.getElementById('carousel-dots');
    var arrowLeft = document.querySelector('.carousel-arrow--left');
    var arrowRight = document.querySelector('.carousel-arrow--right');

    if (!viewport || !track || !dotsContainer) return;

    var cards = track.querySelectorAll('.review-card');
    var totalCards = cards.length;
    var currentIndex = 0;
    var cardsPerView = 3;
    var autoPlayInterval = null;
    var AUTO_PLAY_DELAY = 4000;

    function getCardsPerView() {
      if (window.innerWidth <= 480) return 1;
      if (window.innerWidth <= 768) return 2;
      return 3;
    }

    function getTotalPages() {
      return Math.ceil(totalCards / cardsPerView);
    }

    function buildDots() {
      dotsContainer.innerHTML = '';
      var pages = getTotalPages();
      for (var i = 0; i < pages; i++) {
        var dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to review group ' + (i + 1));
        dot.setAttribute('role', 'tab');
        (function(idx) {
          dot.addEventListener('click', function() {
            currentIndex = idx * cardsPerView;
            if (currentIndex > totalCards - cardsPerView) {
              currentIndex = totalCards - cardsPerView;
            }
            updateCarousel();
            resetAutoPlay();
          });
        })(i);
        dotsContainer.appendChild(dot);
      }
    }

    function updateDots() {
      var currentPage = Math.floor(currentIndex / cardsPerView);
      var dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === currentPage);
      });
    }

    function updateCarousel() {
      var cardWidth = cards[0].offsetWidth;
      var gap = 17.6; // 1.1rem in px
      var offset = currentIndex * (cardWidth + gap);
      track.style.transform = 'translateX(-' + offset + 'px)';
      updateDots();
    }

    function goNext() {
      cardsPerView = getCardsPerView();
      var maxIndex = totalCards - cardsPerView;
      if (currentIndex >= maxIndex) {
        currentIndex = 0;
      } else {
        currentIndex = Math.min(currentIndex + cardsPerView, maxIndex);
      }
      updateCarousel();
    }

    function goPrev() {
      cardsPerView = getCardsPerView();
      var maxIndex = totalCards - cardsPerView;
      if (currentIndex <= 0) {
        currentIndex = maxIndex;
      } else {
        currentIndex = Math.max(currentIndex - cardsPerView, 0);
      }
      updateCarousel();
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayInterval = setInterval(goNext, AUTO_PLAY_DELAY);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
      }
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    // Arrow buttons
    if (arrowRight) arrowRight.addEventListener('click', function() { goNext(); resetAutoPlay(); });
    if (arrowLeft) arrowLeft.addEventListener('click', function() { goPrev(); resetAutoPlay(); });

    // Pause on hover
    viewport.addEventListener('mouseenter', stopAutoPlay);
    viewport.addEventListener('mouseleave', startAutoPlay);

    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;

    viewport.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    }, { passive: true });

    viewport.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext(); else goPrev();
      }
      startAutoPlay();
    }, { passive: true });

    // Resize handler
    window.addEventListener('resize', function() {
      cardsPerView = getCardsPerView();
      buildDots();
      if (currentIndex > totalCards - cardsPerView) {
        currentIndex = totalCards - cardsPerView;
      }
      updateCarousel();
    });

    // Init
    cardsPerView = getCardsPerView();
    buildDots();
    updateCarousel();
    startAutoPlay();
  })();

  /* ── 10. Initialize Lucide icons ─────────────────────── */
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

})();
