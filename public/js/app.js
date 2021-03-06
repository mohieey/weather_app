const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const address = search.value;

  m1.textContent = "Loading...";
  m2.textContent = "";

  fetch(`/weather?address=${address}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) m1.textContent = data.error;
      else {
        m1.textContent = data.forecast;
        m2.textContent = data.location;
      }
    });
});
