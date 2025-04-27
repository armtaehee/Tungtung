let scores = {
    "Indonesia": 0,
    "Malaysia": 0,
    "Philippines": 0,
    "Singapore": 0,
    "Thailand": 0,
    "Other": 0
  };
  
  const bonkSound = document.getElementById('bonkSound');

  function popTungtung() {
    const tungtung = document.getElementById('tungtung');
    const sound = document.getElementById('sound');
    const countrySelect = document.getElementById('countrySelect');
    const selectedCountry = countrySelect.value;
  

    bonkSound.currentTime = 2; 
    bonkSound.play();
    setTimeout(() => {
        bonkSound.pause(); 
      }, 5000);

    tungtung.src = 'image/after.png';
    sound.textContent = 'TUNGTUNG!';
  
    scores[selectedCountry]++;
    updateLeaderboard();
  
    setTimeout(() => {
      tungtung.src = 'image/before.webp';
      sound.textContent = '';
    }, 100);
  }
  
  function updateLeaderboard() {
    const leaderboardList = document.getElementById('leaderboardList');
    const sortedCountries = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  
    leaderboardList.innerHTML = '';
  
    sortedCountries.forEach(country => {
      const li = document.createElement('li');
      li.textContent = `${country}: ${scores[country]} hits`;
      leaderboardList.appendChild(li);
    });
  }