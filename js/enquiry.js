/* =============================================
   CONNECT THE WORLD - Enquiry Form / Supabase
   ============================================= */

const SUPABASE_URL = 'https://fbesiytxmpnhpplwkaqu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiZXNpeXR4bXBuaHBwbHdrYXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4ODczMzIsImV4cCI6MjA5NzQ2MzMzMn0.mvEnUDD72G7enOvte67kbU8hS516dA01o28ISW8o5cI';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function validateForm(data) {
  let valid = true;
  const fields = ['firstName', 'lastName', 'contact', 'country', 'city'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    const err = document.getElementById('err_' + id);
    if (!el.value.trim()) {
      el.classList.add('invalid');
      if (err) err.textContent = 'This field is required.';
      valid = false;
    } else {
      el.classList.remove('invalid');
      if (err) err.textContent = '';
    }
  });
  return valid;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('enquiryForm');
  if (!form) return;

  // Clear invalid state on input
  form.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('invalid');
      const err = document.getElementById('err_' + input.id);
      if (err) err.textContent = '';
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      first_name: document.getElementById('firstName').value.trim(),
      last_name:  document.getElementById('lastName').value.trim(),
      contact:    document.getElementById('contact').value.trim(),
      country:    document.getElementById('country').value.trim(),
      city:       document.getElementById('city').value.trim(),
    };

    if (!validateForm(data)) return;

    const submitBtn  = document.getElementById('submitBtn');
    const submitText = submitBtn.querySelector('.submit-text');
    const submitLoader = submitBtn.querySelector('.submit-loader');
    const successBox = document.getElementById('formSuccess');
    const errorBox   = document.getElementById('formError');

    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitLoader.style.display = 'inline';
    errorBox.style.display = 'none';

    const { error } = await supabase.from('customers').insert([data]);

    submitBtn.disabled = false;
    submitText.style.display = 'inline';
    submitLoader.style.display = 'none';

    if (error) {
      console.error('Supabase error:', error);
      errorBox.style.display = 'block';
    } else {
      form.querySelectorAll('input').forEach(i => i.value = '');
      successBox.style.display = 'block';
      form.querySelector('.form-row') && form.querySelectorAll('.form-row, .form-submit').forEach(el => el.style.display = 'none');
    }
  });
});
