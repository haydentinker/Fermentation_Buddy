import '../css/Bubble.css';

export const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      document.body.appendChild(bubble);
      const randomX = Math.random() * window.innerWidth; // Generate random X coordinate
      const randomY = Math.random() * window.innerHeight; // Generate random Y coordinate
      bubble.style.left = `${randomX}px`; // Set the left position
      bubble.style.top = `${randomY}px`; // Set the top position
      setTimeout(() => {
        bubble.remove();
      }, 10000);
    };