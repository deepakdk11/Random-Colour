let body = document.querySelector("body");

let btn = document.querySelector("button");

let can = document.querySelector(".container");

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
  let hex = "#";
  for (let i = 1; i <= 6; i++) {
    hex = hex + change();
  }

  var n_match = ntc.name(hex);
  n_rgb = n_match[0];
  n_name = n_match[1];
  n_exactmatch = n_match[2];

  const hexToRgb = (hexcolour) =>
    hexcolour
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));

  let string = hexToRgb(hex).toString();

  body.style.backgroundColor = hex;

  can.innerHTML = `<p>Name : ${n_name}</p>
 <p>Hex Code : ${hex}</p> 
 <p>RGB(${string})</p>`;
});

function change() {
  let ran = Math.floor(Math.random() * 16);
  return arr[ran];
}
