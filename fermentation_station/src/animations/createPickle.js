import '../css/Pickle.css';
import picklePng from "../images/pickle.png";

export const createPickle = () => {
      const pickle = document.createElement("img");
      pickle.src=picklePng;

      pickle.classList.add("pickle");
      document.body.appendChild(pickle);
      const randomX = Math.random() * window.innerWidth; // Generate random X coordinate
      const randomY = Math.random() * window.innerHeight; // Generate random Y coordinate
      pickle.style.left = `${randomX}px`; // Set the left position
      pickle.style.top = `${randomY}px`; // Set the top position
      setTimeout(() => {
        pickle.remove();
      }, 10000);
    };