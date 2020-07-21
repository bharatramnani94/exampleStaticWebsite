const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title') || "";
const tag = urlParams.get('tag') || "";
const img = urlParams.get('img') || "";
console.log({
  title, tag, img,
})