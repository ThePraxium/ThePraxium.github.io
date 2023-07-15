document.getElementById('transform-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let photo = document.getElementById('photo').files[0];
  let transformType = document.getElementById('transform-type').value;

  let formData = new FormData();
  formData.append('photo', photo);
  formData.append('transform-type', transformType);
  
  fetch('/transform', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(imageBlob => {
    let imageUrl = URL.createObjectURL(imageBlob);
    // Display the transformed image on the page
    document.getElementById('transformed-image').src = imageUrl;
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
});