// document.getElementById('loginForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     fetch('/saveLogin', {  // Update with your actual backend URL
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Login information saved!');
//         } else {
//             alert('An error occurred!');
//         }
//     })
//     // .catch(error => {
//     //     console.error('Error:', error);
//     //     alert('An error occurred!');
//     // });
// });
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('/api/saveLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Login information saved!');
      } else {
        alert('An error occurred!');
      }
    });
  });
  