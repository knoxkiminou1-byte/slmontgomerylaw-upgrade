(function () {
  const btn = document.getElementById('mobileMenuButton');
  const menu = document.getElementById('mobileMenu');
  function toggle() {
    if (!menu) return;
    menu.classList.toggle('hidden');
    const expanded = !menu.classList.contains('hidden');
    if (btn) btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }
  if (btn && menu) btn.addEventListener('click', toggle);

  // Close mobile menu on link click
  document.querySelectorAll('#mobileMenu a').forEach(a => {
    a.addEventListener('click', () => menu && menu.classList.add('hidden'));
  });

  // Active nav highlighting (supports rewrites)
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const route = ({
    '/': 'home',
    '/index.html': 'home',
    '/meet-your-lawyer': 'meet',
    '/meet-your-lawyer.html': 'meet',
    '/dui-faq': 'dui',
    '/dui-faq.html': 'dui',
    '/drug-crimes': 'drug',
    '/drug-crimes.html': 'drug',
    '/contact': 'contact',
    '/contact.html': 'contact'
  })[path];

  if (route) {
    document.querySelectorAll('a[data-nav]').forEach(a => {
      if (a.getAttribute('data-nav') === route) a.classList.add('active');
    });
  }
})();
