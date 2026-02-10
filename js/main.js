/**
 * JT (旅) Landing Page - Main JavaScript
 * Handles language toggle, FAQ accordion, smooth scroll, mobile nav, and screenshot carousel
 */

// ============================================================================
// Language Toggle
// ============================================================================

/**
 * Initialize language toggle functionality
 * Reads from localStorage and sets up toggle button
 */
function initLanguageToggle() {
  const html = document.documentElement;
  const toggleBtn = document.querySelector('.lang-toggle');
  
  if (!toggleBtn) return;

  // Try to read saved language preference
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('jt-lang') || 'en';
  } catch (e) {
    console.warn('localStorage unavailable, using default language');
  }

  // Apply saved language
  if (savedLang === 'th') {
    html.classList.add('lang-th');
    toggleBtn.textContent = 'TH';
  } else {
    html.classList.remove('lang-th');
    toggleBtn.textContent = 'EN';
  }

  // Toggle button click handler
  toggleBtn.addEventListener('click', () => {
    const isThaiActive = html.classList.toggle('lang-th');
    const newLang = isThaiActive ? 'th' : 'en';
    
    // Update button text
    toggleBtn.textContent = isThaiActive ? 'TH' : 'EN';
    
    // Try to save preference
    try {
      localStorage.setItem('jt-lang', newLang);
    } catch (e) {
      console.warn('localStorage unavailable, language preference not saved');
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageToggle);
} else {
  initLanguageToggle();
}

// ============================================================================
// FAQ Accordion
// ============================================================================

/**
 * Initialize FAQ accordion functionality
 * Handles native <details> elements with enhanced keyboard support
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach((item) => {
    const summary = item.querySelector('summary');
    
    if (!summary) return;

    // Enhance keyboard navigation (Enter and Space already work natively)
    // Add smooth animation by listening to toggle event
    item.addEventListener('toggle', () => {
      // Optional: Add any custom behavior when FAQ opens/closes
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFaqAccordion);
} else {
  initFaqAccordion();
}

// ============================================================================
// Smooth Scroll
// ============================================================================

/**
 * Initialize smooth scroll for navigation links
 * Offsets scroll position to account for sticky navigation bar
 */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const navHeight = document.querySelector('.nav')?.offsetHeight || 80;
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if it's just "#" or empty
      if (!href || href === '#') return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Calculate scroll position with offset for sticky nav
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
          mobileMenu.classList.remove('active');
          mobileMenu.setAttribute('aria-hidden', 'true');
          const hamburger = document.querySelector('.nav-hamburger');
          if (hamburger) {
            hamburger.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });
}

// ============================================================================
// Mobile Navigation
// ============================================================================

/**
 * Initialize mobile hamburger menu toggle
 */
function initMobileNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isActive = mobileMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    hamburger.setAttribute('aria-label', isActive ? 'Close menu' : 'Open menu');
    mobileMenu.setAttribute('aria-hidden', isActive ? 'false' : 'true');
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initMobileNav();
  });
} else {
  initSmoothScroll();
  initMobileNav();
}

// ============================================================================
// Screenshot Carousel
// ============================================================================

/**
 * Initialize screenshot carousel with horizontal scroll
 * CSS handles scroll-snap, this adds optional arrow navigation for desktop
 */
function initScreenshotCarousel() {
  const carousel = document.querySelector('.screenshot-carousel');
  
  if (!carousel) return;

  // Enable horizontal scroll with mouse wheel (optional enhancement)
  carousel.addEventListener('wheel', (e) => {
    // Only handle horizontal scroll if scrolling vertically
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      carousel.scrollLeft += e.deltaY;
    }
  }, { passive: false });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScreenshotCarousel);
} else {
  initScreenshotCarousel();
}
