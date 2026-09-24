const pilotForm = document.getElementById('pilot-form');
const pilotStatus = document.getElementById('pilot-status');
pilotForm.querySelector('button[type="submit"]').disabled = false;

pilotForm.addEventListener('input', (event) => {
  if (event.target.matches('input, textarea')) event.target.setCustomValidity('');
  pilotStatus.textContent = '';
  pilotStatus.removeAttribute('data-i18n');
});

pilotForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const dict = translations[document.documentElement.lang] || translations.en;
  for (const field of pilotForm.querySelectorAll('input, textarea')) {
    field.setCustomValidity(field.value.trim() ? '' : dict.pilot_blank_error);
  }
  if (!pilotForm.reportValidity()) return;

  const values = new FormData(pilotForm);
  const body = [
    'SocialMind pilot inquiry',
    '',
    `Name: ${values.get('name').trim()}`,
    `Email: ${values.get('email').trim()}`,
    `School / organization and location: ${values.get('location').trim()}`,
    '',
    'About me:',
    values.get('message').trim(),
  ].join('\r\n');
  const draftUrl = 'mailto:socialmind2025@gmail.com?subject=' +
    encodeURIComponent('SocialMind pilot inquiry') + '&body=' + encodeURIComponent(body);

  pilotStatus.setAttribute('data-i18n', 'pilot_draft_status');
  pilotStatus.textContent = dict.pilot_draft_status;
  window.location.href = draftUrl;
});
