const playlists = {
    happy: [
      { title: "Happy Vibes", artist: "John Doe", url:"songs/bensound-dancinginthesand.mp3" },
      { title: "Feel Good Song", artist: "Jane Smith", url: "songs/bensound-hearty.mp3" },
      { title: "Cheerful Tune", artist: "Chris Brown", url: "songs/bensound-ukulele.mp3" },
    ],
    sad: [
      { title: "Melancholy Melody", artist: "MarcusWay", url: "songs/breathing1.mp3" },
      { title: "Tearful Ballad", artist: "Chris Brown", url: "songs/songs3.mp3" },
      { title: "Blue Notes", artist: "Jane Smith", url: "songs/song A.mp3" },
    ],
    energetic: [
      { title: "High Energy Beats", artist: "John Doe", url: "songs/bensound-ukulele.mp3" },
      { title: "Pump Up Jam", artist: "MarcusWay", url: "songs/song B.mp3" },
      { title: "Adrenaline Rush", artist: "Jane Smith", url: "songs/song C.mp3" },
    ],
    relaxed: [
      { title: "Calm Breeze", artist: "Jane Smith", url: "songs/song A.mp3" },
      { title: "Chill Vibes", artist: "MarcusWay", url: "songs/bensound-hearty.mp3" },
      { title: "Peaceful Harmony", artist: "Chris Brown", url: "songs/song B.mp3" },
    ],
  };
  
  const playlistContainer = document.getElementById("playlist-container");
  const themeToggle = document.getElementById("theme-toggle");
  
  // Display playlist based on mood
  document.querySelectorAll(".mood-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const mood = button.getAttribute("data-mood");
      displayPlaylist(mood);
    });
  });
  
  function displayPlaylist(mood) {
    playlistContainer.innerHTML = ""; // Clear existing playlist
    const selectedPlaylist = playlists[mood];
    selectedPlaylist.forEach((song) => {
      const card = document.createElement("div");
      card.className = "playlist-card";
      card.innerHTML = `
        <h3>${song.title}</h3>
        <p>By: ${song.artist}</p>
        <audio controls>
          <source src="${song.url}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      `;
      playlistContainer.appendChild(card);
    });
  }
  
  // Theme toggle functionality
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark")
      ? "🌙 Dark Mode"
      : "🌞 Light Mode";
  });
  