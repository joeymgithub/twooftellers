document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('reveal-button');
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('video');
  
    revealButton.addEventListener('click', () => {
      // Hide the button and show the video
      revealButton.style.display = 'none';
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
    });
  });
  