export const sounds = {
    card1: new Audio('./assets/floresta.wav'),
    card2: new Audio('./assets/chuva.wav'),
    card3: new Audio('./assets/cafeteria.wav'),
    card4: new Audio('./assets/lareira.wav')
  };
  
  export function initializeSoundClickEvents() {
    let isPlaying = {
      card1: false,
      card2: false,
      card3: false,
      card4: false
    };
  
    document.querySelector('.sound1').addEventListener('click', () => {
      toggleSound(sounds.card1, 'card1', isPlaying);
    });
  
    document.querySelector('.sound2').addEventListener('click', () => {
      toggleSound(sounds.card2, 'card2', isPlaying);
    });
  
    document.querySelector('.sound3').addEventListener('click', () => {
      toggleSound(sounds.card3, 'card3', isPlaying);
    });
  
    document.querySelector('.sound4').addEventListener('click', () => {
      toggleSound(sounds.card4, 'card4', isPlaying);
    });
  }
  
  function toggleSound(audio, soundKey, isPlaying) {
    if (isPlaying[soundKey]) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying[soundKey] = !isPlaying[soundKey];
  }
  