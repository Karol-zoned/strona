
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://gdfpwixfrujkoxlejcgo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZnB3aXhmcnVqa294bGVqY2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NTY0NjMsImV4cCI6MjA2MzMzMjQ2M30.btatLN5ciqWbERzsaDvk6yyTI2eJJY1wjTUDFsmA00Q')

const form = document.getElementById('login-form');
const errorEl = document.getElementById('login-error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    errorEl.textContent = error.message;
    errorEl.classList.remove('hidden');
  } else {
  
    window.location.href = '/strona/index.html';
  }
});
