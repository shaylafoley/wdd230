const baseURL = "https://shaylafoley.github.io/wdd230/";
const linksURL = "https://shaylafoley.github.io/wdd230/data/links.json";
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        
        let weekNumber = document.createElement('ul')
        let weekTitle = document.createElement('li');
        let activityLink = document.createElement('a');

        weekTitle.textContent = `${week.week}`;
        activityLink.setAttribute('href',week.links.url);
        activityLink.setAttribute("a", week.links.title);

        weekNumber.appendChild(weekTitle);
        weekNumber.appendChild(activityLink);

        linksURL.appendChild(weekNumber);
    }
    
    )
}
  
  getLinks();