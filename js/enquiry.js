/* =============================================
   CONNECT THE WORLD - Enquiry Form / Supabase
   ============================================= */

const SUPABASE_URL = 'https://fbesiytxmpnhpplwkaqu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiZXNpeXR4bXBuaHBwbHdrYXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4ODczMzIsImV4cCI6MjA5NzQ2MzMzMn0.mvEnUDD72G7enOvte67kbU8hS516dA01o28ISW8o5cI';

async function submitEnquiry(e) {
  e.preventDefault();

  const firstName   = document.getElementById('firstName');
  const lastName    = document.getElementById('lastName');
  const contact     = document.getElementById('contact');
  const country     = document.getElementById('country');
  const city        = document.getElementById('city');
  const submitBtn   = document.getElementById('submitBtn');
  const submitText  = document.querySelector('.submit-text');
  const submitLoader = document.querySelector('.submit-loader');
  const successBox  = document.getElementById('formSuccess');
  const errorBox    = document.getElementById('formError');

  // Validate
  let valid = true;
  [firstName, lastName, contact, country, city].forEach(el => {
    const err = document.getElementById('err_' + el.id);
    if (!el.value.trim()) {
      el.classList.add('invalid');
      if (err) err.textContent = 'This field is required.';
      valid = false;
    } else {
      el.classList.remove('invalid');
      if (err) err.textContent = '';
    }
  });
  if (!valid) return;

  // Show loading
  submitBtn.disabled = true;
  if (submitText)  submitText.style.display  = 'none';
  if (submitLoader) submitLoader.style.display = 'inline';
  if (errorBox) errorBox.style.display = 'none';

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/submit_enquiry`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        p_first_name: firstName.value.trim(),
        p_last_name:  lastName.value.trim(),
        p_contact:    contact.value.trim(),
        p_country:    country.value.trim(),
        p_city:       city.value.trim(),
      }),
    });

    if (!res.ok) throw new Error('Server error: ' + res.status);

    // Success
    [firstName, lastName, contact, country, city].forEach(el => el.value = '');
    if (successBox) successBox.style.display = 'block';
    document.querySelectorAll('#enquiryForm .form-row, #enquiryForm .form-submit')
      .forEach(el => el.style.display = 'none');

  } catch (err) {
    console.error('Enquiry error:', err);
    if (errorBox) errorBox.style.display = 'block';
  } finally {
    submitBtn.disabled = false;
    if (submitText)  submitText.style.display  = 'inline';
    if (submitLoader) submitLoader.style.display = 'none';
  }
}

// Attach directly — script runs at bottom of body, DOM is ready
(function init() {
  const form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', submitEnquiry);
  }

  // Clear red borders on typing
  document.querySelectorAll('#enquiryForm input').forEach(input => {
    input.addEventListener('input', function() {
      this.classList.remove('invalid');
      const err = document.getElementById('err_' + this.id);
      if (err) err.textContent = '';
    });
  });
})();
