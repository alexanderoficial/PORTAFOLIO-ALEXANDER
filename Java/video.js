document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () =>{
      document.querySelector('.repro-video').style.display = 'block';
  document.querySelector('.repro-video video').src = vid.getAttribute('src');
    }
});

document.querySelector('.repro-video span').onclick = () =>{
    document.querySelector('.repro-video').style.display = 'none';
};