const playlist = [
  'assets/music/a1.mp3',
  'assets/music/a2.mp3',
  'assets/music/a3.mp3',
  'assets/music/a4.mp3',
  'assets/music/a5.mp3'
];

// 🎵 Music playlist

let currentTrack = 0;
let music = null;

// 🔁 Function to play a track
function playTrack(index) {
  if (music) {
    music.stop(); // Stop current track
  }

  music = new Howl({
    src: [playlist[index]],
    autoplay: true,
    loop: true,
    volume: 0.4,
    onplay: () => {
      document.getElementById('musicButton').innerText = '🎵 Stop Music';
    },
    onpause: () => {
      document.getElementById('musicButton').innerText = '🎵 Play Music';
    },
    onstop: () => {
      document.getElementById('musicButton').innerText = '🎵 Play Music';
    }
  });
}

// 🔘 Toggle button function
function toggleMusic() {
  if (music && music.playing()) {
    music.stop();
  } else {
    currentTrack = (currentTrack + 1) % playlist.length;
    playTrack(currentTrack);
  }
}

// ▶️ Autoplay the first track when page loads
window.addEventListener('DOMContentLoaded', () => {
  playTrack(0); // Play first track
});




// 📜 Load friend messages from JSON
fetch('data/messages.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('friendMessages');
    data.forEach(msg => {
      const el = document.createElement('div');
      el.className = "bg-white p-4 rounded-lg shadow";
      el.innerHTML = `<strong>${msg.name}:</strong> <p>${msg.message}</p>`;
      container.appendChild(el);
    });
  });
