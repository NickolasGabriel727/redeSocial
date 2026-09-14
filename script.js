document.addEventListener("DOMContentLoaded", () => {
  let likesCount = 0;

  const likeBtn = document.getElementById("like-btn");
  const likeCountSpan = document.getElementById("like-count");
  const postMedia = document.getElementById("post-media");
  const bookmarkBtn = document.getElementById("bookmark-btn");
  const totalLikesText = document.getElementById("total-likes-text");

  function updateLikesDisplay() {
    likeCountSpan.textContent = likesCount;
    totalLikesText.textContent = `${likesCount} curtidas`;
  }

  function addLike() {
    likesCount++;
    updateLikesDisplay();
    likeBtn.classList.add("liked");

    const svg = likeBtn.querySelector("svg");
    if (svg) {
      svg.style.transform = "scale(1.4)";
      setTimeout(() => {
        svg.style.transform = "scale(1)";
      }, 150);
    }
  }

  // Clique no botão de curtida
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    addLike();
  });

  // Clique na imagem principal
  if (postMedia) {
    postMedia.addEventListener("click", (e) => {
      e.stopPropagation();
      addLike();
    });
  }

  // Clique no botão Salvar
  if (bookmarkBtn) {
    let isBookmarked = false;
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

      const svg = bookmarkBtn.querySelector("svg");
      if (svg) {
        svg.style.transform = "scale(1.2)";
        setTimeout(() => {
          svg.style.transform = "scale(1)";
        }, 150);
      }
    });
  }

  // Inicializa o contador na tela em 0
  updateLikesDisplay();
});
