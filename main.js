document.getElementById('create').onclick = () => {
  const u = document.getElementById('username').value.trim();
  if (!u) return alert('Entre un pseudo');
  location.href = `user.html?user=${encodeURIComponent(u)}`;
};