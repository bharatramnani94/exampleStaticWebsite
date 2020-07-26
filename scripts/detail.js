function populateData({imageName, title, desc, tag} = experience) {
  const titleEl = document.querySelector("#js--title");
  const descEl = document.querySelector("#js--desc");
  const imageEl = document.querySelector("#js--image");
  const moreLinkEl = document.querySelector("#js--more");
  titleEl.textContent = title;
  descEl.textContent = desc;
  imageEl.setAttribute("src", `./images/${imageName}`);
  moreLinkEl.textContent = `More from ${tag}`;
  moreLinkEl.href = `/${tag.toLowerCase()}`;
}

function getIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id') || "1";
  return id;
}

function findExperienceById(id) {
  const allExperiences = JSON.parse(window.localStorage.getItem("[Experiences]AllExperiences"));
  const activeExperience = allExperiences.find(e => e.id === id);
  return activeExperience || allExperiences[0];
}

function disableLoading() {
  const bodyEl = document.querySelector("body");
  bodyEl.classList.remove("loading");
}

function main() {
  const id = getIdFromUrl();
  const activeExperience = findExperienceById(id);
  populateData(activeExperience);
  disableLoading();
}

main();