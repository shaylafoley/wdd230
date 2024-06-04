document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified);

    document.getElementById('copyYear').innerHTML = `Copyright &copy; ${currentYear} &bull; Shayla Foley &bull; WDD 230 &bull`;
    document.getElementById('lastMod').innerHTML = `Last modified: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;
});


/*const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);

document.getElementById('copyYear').innerHTML = `Copyright &copy; ${currentYear} &bull; Shayla Foley &bull; WDD 230 &bull`;
document.getElementById('lastMod').innerHTML = `Last modified: ${lastModified}`;
*/
