const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.footlocker.es/');
  const title = await page.title();
  console.log('El título de la página es:', title);
  await browser.close();
})();

document.addEventListener('DOMContentLoaded', () => {
    const divDatos = document.getElementById('datos');
    const url = 'https://jsonplaceholder.typicode.com/users';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.forEach(user => {
          divDatos.innerHTML += `<p>${user.name}</p>`;
        });
      })
      .catch(error => console.error(error));
  });
  

fetch('https://www.footlocker.es')
  .then(response => response.text())
  .then(data => {
    const datosDiv = document.getElementById('datos');
    datosDiv.innerHTML = data;
  })
  .catch(error => console.error(error));
