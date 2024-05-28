const url = 'data/members.json';


async function getSpotlight() {
    const response = await fetch(url);
    const data = await response.json();
    
    displaySpotlight(data.companies);
}



const displaySpotlight = companies => {
    const qualified = companies.filter(company => company.membership === 'Silver' || company.membership === 'Gold');
    

    const shuffleMembers = qualified.sort(() => 0.5 - Math.random());
    const spotlightMembers = shuffleMembers.slice(0, 3);

    const spotlightIds = ['spotWinner1', 'spotWinner2', 'spotWinner3'];

    spotlightMembers.forEach((company, index) => {
        const memberAd = document.createElement('div');
        memberAd.classList.add('spotWinner');

        let name = document.createElement('h2');
        let website = document.createElement('a');
        let membership = document.createElement('p');
       
        let portrait = document.createElement('img');

        name.textContent = `${company.name}`;
        membership.textContent = `Membership: ${company.membership}`;
        
        website.textContent = company.websiteURL;
        website.href = company.websiteURL;
        website.setAttribute('target', '_blank');
    

        portrait.setAttribute('src', company.image);
        portrait.setAttribute('alt', `Logo of ${company.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        
        memberAd.appendChild(name);
        memberAd.appendChild(membership);
        memberAd.appendChild(website);
        memberAd.appendChild(portrait);

        const spotlight = document.getElementById(spotlightIds[index]);
        
        spotlight.appendChild(memberAd);

    });
}

getSpotlight();

