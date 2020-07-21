function populateData({imageName, title, desc} = experience) {
  const titleEl = document.querySelector("#js--title");
  const descEl = document.querySelector("#js--desc");
  const imageEl = document.querySelector("#js--image");
  titleEl.textContent = title;
  descEl.textContent = desc;
  imageEl.setAttribute("src", `./images/${imageName}`);
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

function main() {
  const id = getIdFromUrl();
  const activeExperience = findExperienceById(id);
  populateData(activeExperience);
}

main();