const url = 'data/members.json';
const gridDirectory = document.querySelector('#gridDirectory');

async function getDirectory() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displayDirectory(data.companies);
}

getDirectory();

const displayDirectory = companies => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let membership = document.createElement('p');
    
        let portrait = document.createElement('img');

        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        membership.textContent = `${company.membership}`;
        website.textContent = `${company.website}`;
    

        portrait.setAttribute('src', company.image);
        portrait.setAttribute('alt', `Logo of ${company.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(website);
        card.appendChild(portrait);

        gridDirectory.appendChild(card);

    });
}

