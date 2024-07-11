const generateMemeBtn = document.querySelector(
    ".meme-gen .gen-meme-btn"
  );
  const memeImage = document.querySelector(".meme-gen img");
  const memeTitle = document.querySelector(".meme-gen .meme-title");
  const memeAuthor = document.querySelector(".meme-gen .meme-author");
  
  const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
  };
  
  const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };
  
  generateMemeBtn.addEventListener("click", generateMeme);
  
  generateMeme();