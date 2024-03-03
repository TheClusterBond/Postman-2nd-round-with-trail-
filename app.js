document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector('.preloader').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    }, 2000); 
  });

  const texta = document.querySelector('.texta p');
    texta.innerHTML = texta.innerText.split("").map(
        (char, i) =>
        `<span style="transform:rotate(${i * 8.2}deg)">${char}</span>`
    ).join("")

