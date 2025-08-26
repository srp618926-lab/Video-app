function filterVideos(cat) {
  const videos = document.querySelectorAll(".video-card");
  videos.forEach(v => {
    if (cat === "all" || v.dataset.cat === cat) {
      v.style.display = "block";
    } else {
      v.style.display = "none";
    }
  });
}