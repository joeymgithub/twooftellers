document.addEventListener('DOMContentLoaded', () => {
    const passwordForm = document.getElementById('password-form');
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('video');
  
    const correctPassword = 'bowie'; // Set your password here
  
    passwordForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form from refreshing the page
  
      if (passwordInput.value === correctPassword) {
        // If password is correct, hide form and show video
        passwordForm.style.display = 'none';
        videoContainer.classList.remove('hidden');
  
        // Autoplay the video
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Autoplay blocked:', error);
            video.muted = true;
            video.play();
          });
        }
      } else {
        // Show error message if password is incorrect
        errorMessage.classList.remove('hidden');
      }
    });
  });
  