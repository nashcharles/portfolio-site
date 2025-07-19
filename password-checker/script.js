const passwordInput = document.getElementById('password');
const strengthOutput = document.getElementById('strength-output');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = calculatePasswordStrength(password);
  strengthOutput.textContent = `Strength: ${strength.label}`;
  strengthOutput.style.color = strength.color;
});

function calculatePasswordStrength(password) {
  let score = 0;

  // Criteria checks
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  // Assign label and color based on score
  if (score === 0) return { label: 'Very Weak', color: 'red' };
  if (score <= 2) return { label: 'Weak', color: 'orange' };
  if (score === 3) return { label: 'Moderate', color: 'goldenrod' };
  if (score === 4) return { label: 'Strong', color: 'green' };
  if (score === 5) return { label: 'Very Strong', color: 'darkgreen' };
}