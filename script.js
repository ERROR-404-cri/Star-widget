const starsContainer = document.querySelector(".starsContainer");
const starCountElem = document.querySelector(".starCount");
const starIdPrefix = "star_";
const totalStarsRequired = 7;

const getStarElem = (idNumber) => {
  const pElem = document.createElement("p");
  pElem.classList.add("star");
  pElem.id = starIdPrefix + idNumber;
  return pElem;
};

const createStars = (numberOfStar) => {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= numberOfStar; i++) {
    const star = getStarElem(i);
    fragment.appendChild(star);
  }
  starsContainer.appendChild(fragment);
};

const updateRating = (element, rating) => {
  element.textContent = rating;
};

const colorStars = (endStarId) => {
  for (let id = 7; id >= endStarId; id--) {
    const starElem = document.getElementById(`${starIdPrefix}${id}`);
    starElem.classList.add("active");
  }

  for (let id = endStarId - 1; id > 0; id--) {
    const starElem = document.getElementById(`${starIdPrefix}${id}`);
    starElem.classList.remove("active");
  }
};

createStars(totalStarsRequired);
starsContainer.addEventListener("click", (event) => {
  const targetStarElem = event.target.id?.startsWith(starIdPrefix)
    ? event.target
    : null;
  if (targetStarElem) {
    const targetStarElemId = targetStarElem.id.slice(-1);
    const starsGiven = totalStarsRequired - Number(targetStarElemId) + 1;
    updateRating(starCountElem, starsGiven);
    colorStars(Number(targetStarElemId));
  }
});
