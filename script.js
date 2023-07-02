let baslik = document.createElement("h2");
baslik.textContent = "Akordeon";
document.body.append(baslik);

const bolumler = [
  {
    baslik: "Bölüm 1",
    icerik: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    baslik: "Bölüm 2",
    icerik: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    baslik: "Bölüm 3",
    icerik: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

for (let i = 0; i < bolumler.length; i++) {
  let buton = document.createElement("button");
  buton.className = "accordion";
  buton.textContent = bolumler[i].baslik;
  document.body.append(buton);

  let panel = document.createElement("div");
  panel.className = "panel";
  panel.innerHTML = "<p>" + bolumler[i].icerik + "</p>";
  document.body.append(panel);
}

let akordeonlar = document.getElementsByClassName("accordion");

for (let j = 0; j < akordeonlar.length; j++) {
  akordeonlar[j].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
