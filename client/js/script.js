document.getElementById('qr-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const info = document.getElementById('info').value;
  
    fetch('http://localhost:3000/api/qr/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, info }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      const qrDisplay = document.querySelector('.qr-display');
      qrDisplay.innerHTML = `<img src="${data.qrCode}" alt="QR Code">`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  