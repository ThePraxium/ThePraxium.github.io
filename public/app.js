document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var image = document.getElementById('photoUpload').files[0];
  var theme = document.getElementById('themeSelect').value;
  
  var reader = new FileReader();

  reader.onload = function(e) {
      document.getElementById('previewImage').src = e.target.result;
      document.getElementById('themeText').innerText = theme;
  }

  reader.readAsDataURL(image);
});
