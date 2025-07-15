const form = document.getElementById('deviceForm');
const table = document.querySelector('#deviceTable tbody');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('deviceName').value;
  const location = document.getElementById('deviceLocation').value;
  const date = document.getElementById('deviceDate').value || new Date().toISOString().split('T')[0];

  const row = table.insertRow();
  row.innerHTML = `
    <td>${name}</td>
    <td>${location}</td>
    <td>${date}</td>
    <td><button class="delete-btn">Xoá</button></td>
  `;

  form.reset();
});

table.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    const row = e.target.closest('tr');
    row.remove();
  }
});
