const fetchDataBtn = document.querySelector("#fetchdata");
const result = document.querySelector("#result");
//getting data from api and to append in html
function getcolor() {
  var color = document.getElementById("result").value;
  var container = document.createElement("div");

  fetch(`https://x-colors.herokuapp.com/api/random/${color}`)
    .then((data) => data.json())
    .then((data1) => {
      const color = Object.values(data1);
      for (let i = 0; i < color.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", " col-lg-4 card");
        div.innerHTML = `<h5 class="card-title"id="rgbcolor">${color[i]}</h5>`;
        div.style.background = color[i];
        var hexcard = document.querySelector("#hexcard");
        hexcard.append(div);
      }

      //console.log(data1.hex)
    })
    .catch((err) => console.log(err));
}

//calling function in button click
fetchDataBtn.addEventListener("click", getcolor);
