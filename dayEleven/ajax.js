let creatCountry = async function (countryName) {
  try {
    let myRequest = await fetch(
      `https://restcountries.com/v2/name/${countryName}`
    );
    let data = await myRequest.json();

    document.querySelector(".result").append(creatElement(data[0]));

    ///
    let neighbors = data[0].borders;
    console.log(neighbors);
    let random = Math.floor(Math.random() * neighbors.length);
    console.log(neighbors[random]);
    let myRequest2 = await fetch(
      `https://restcountries.com/v2/alpha/${neighbors[random]}`
    );
    let data2 = await myRequest2.json();
    let neighborParagraph = document.createElement("p");
    neighborParagraph.textContent = "Neighbor Country";
    document
      .querySelector(".result")
      .append(neighborParagraph, creatElement(data2));

    console.log(data2);
  } catch (error) {
    console.log(error);
  }
};
