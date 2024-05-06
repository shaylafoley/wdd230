const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);

document.getElementById('copyYear').innerHTML = `Copyright &copy; ${currentYear} &bull; Shayla Foley &bull; Indiana, USA`;
document.getElementById('lastMod').innerHTML = `Last modified: ${lastModified}`;

