let creatElement = function (object) {
  let myCountry = document.createElement("div");
  myCountry.classList.add("container");
  let countryName, contenent, people, photo;
  for (let prop in object) {
    countryName = document.createElement("p");
    countryName.textContent = object.name;
    contenent = document.createElement("p");
    contenent.textContent = object.region;
    people = document.createElement("p");
    people.textContent = object.population;
    photo = document.createElement("img");
    // photo.src = "https://flagcdn.com/eg.svg";
    photo.src = object.flag;
    photo.classList.add("flag");
  }
  myCountry.append(photo, countryName, contenent, people);

  return myCountry;
};
