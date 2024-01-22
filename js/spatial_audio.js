const sound = new Howl({
  src: ['audio/heavy\ pad.mp3'],
  spatial: true,
  loop: true,
  volume: 1,
  pos: [0,0,0],
  pan: 0,
  panningModel: 'HRTF' // Set panning model to HRTF
});

function toggleAudio() {
    if (sound.playing()) {
        sound.pause();
    } else {
        sound.play();
    }
}

document.addEventListener('mousemove', function(event) {
        const phi = (-event.clientX / window.innerWidth) * Math.PI + Math.PI
        const z = -(event.clientY / window.innerHeight) * 2 + 1/2;
        const rho = 1;
        sound.pos(rho * Math.cos(phi), rho *  Math.sin(phi+Math.PI), z); // Update audio source position using cylindrical polar coordinates
        // console.log('L/R Position:', phi); // as expected (pi -> pi/2 -> 0)
        console.log('Object Height:', z);
});
