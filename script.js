document.getElementById('closeInfoBox').addEventListener('click', function() {
    document.getElementById('infoBox').style.display = 'none';
});

const generateImageURL = (id) => {
    const paddedId = String(id).padStart(6, '0');
    return `https://raw.githubusercontent.com/ScobraCK/MementoMori-data/main/Assets/Characters/Sprites/CHR_${paddedId}_00_s.png`;
}

const characterNames = {
    1: {name: 'Monica', imageURL: generateImageURL(1), soulColor: 'Azure'},
    2: {name: 'Illya', imageURL: generateImageURL(2), soulColor: 'Azure'},
    3: {name: 'Iris', imageURL: generateImageURL(3), soulColor: 'Azure'},
    4: {name: 'Loki', imageURL: generateImageURL(4), soulColor: 'Azure'},
    5: {name: 'Soltina', imageURL: generateImageURL(5), soulColor: 'Azure'},
    6: {name: 'Amleth', imageURL: generateImageURL(6), soulColor: 'Azure'},
    7: {name: 'Fenrir', imageURL: generateImageURL(7), soulColor: 'Azure'},
    8: {name: 'Florence', imageURL: generateImageURL(8), soulColor: 'Azure'},
    9: {name: 'Sonya', imageURL: generateImageURL(9), soulColor: 'Azure'},
    10: {name: 'Moddey', imageURL: generateImageURL(10), soulColor: 'Azure'},
    11: {name: 'Charlotte', imageURL: generateImageURL(11), soulColor: 'Crimson'},
    12: {name: 'Arianrhod', imageURL: generateImageURL(12), soulColor: 'Crimson'},
    13: {name: 'Theodora', imageURL: generateImageURL(13), soulColor: 'Crimson'},
    14: {name: 'Petra', imageURL: generateImageURL(14), soulColor: 'Crimson'},
    15: {name: 'Sabrina', imageURL: generateImageURL(15), soulColor: 'Crimson'},
    16: {name: 'Freesia', imageURL: generateImageURL(16), soulColor: 'Crimson'},
    17: {name: 'Amour', imageURL: generateImageURL(17), soulColor: 'Crimson'},
    18: {name: 'Rean', imageURL: generateImageURL(18), soulColor: 'Crimson'},
    19: {name: 'Belle', imageURL: generateImageURL(19), soulColor: 'Crimson'},
    20: {name: 'Dian', imageURL: generateImageURL(20), soulColor: 'Crimson'},
    21: {name: 'Shizu', imageURL: generateImageURL(21), soulColor: 'Emerald'},
    22: {name: 'Zara', imageURL: generateImageURL(22), soulColor: 'Emerald'},
    23: {name: 'Rosalie', imageURL: generateImageURL(23), soulColor: 'Emerald'},
    24: {name: 'Libra', imageURL: generateImageURL(24), soulColor: 'Emerald'},
    25: {name: 'Ivy', imageURL: generateImageURL(25), soulColor: 'Emerald'},
    26: {name: 'Merlyn', imageURL: generateImageURL(26), soulColor: 'Emerald'},
    27: {name: 'Cordie', imageURL: generateImageURL(27), soulColor: 'Emerald'},
    28: {name: 'Nina', imageURL: generateImageURL(28), soulColor: 'Emerald'},
    29: {name: 'Mertillier', imageURL: generateImageURL(29), soulColor: 'Emerald'},
    30: {name: 'Luke', imageURL: generateImageURL(30), soulColor: 'Emerald'},
    31: {name: 'Garmr', imageURL: generateImageURL(31), soulColor: 'Amber'},
    32: {name: 'Skuld', imageURL: generateImageURL(32), soulColor: 'Amber'},
    33: {name: 'Cherna', imageURL: generateImageURL(33), soulColor: 'Amber'},
    34: {name: 'Soteira', imageURL: generateImageURL(34), soulColor: 'Amber'},
    35: {name: 'Mimi', imageURL: generateImageURL(35), soulColor: 'Amber'},
    36: {name: 'Tropon', imageURL: generateImageURL(36), soulColor: 'Amber'},
    37: {name: 'Hathor', imageURL: generateImageURL(37), soulColor: 'Amber'},
    38: {name: 'Olivia', imageURL: generateImageURL(38), soulColor: 'Amber'},
    39: {name: 'Primavera', imageURL: generateImageURL(39), soulColor: 'Amber'},
    40: {name: 'Carol', imageURL: generateImageURL(40), soulColor: 'Amber'},
    41: {name: 'Natasha', imageURL: generateImageURL(41), soulColor: 'Radiance'},
    42: {name: 'Fortina', imageURL: generateImageURL(42), soulColor: 'Radiance'},
    43: {name: 'Cerberus', imageURL: generateImageURL(43), soulColor: 'Radiance'},
    44: {name: 'Rusalka', imageURL: generateImageURL(44), soulColor: 'Radiance'},
    45: {name: 'Elfriede', imageURL: generateImageURL(45), soulColor: 'Radiance'},
    46: {name: 'Lunalynn', imageURL: generateImageURL(46), soulColor: 'Chaos'},
    47: {name: 'Valeriede', imageURL: generateImageURL(47), soulColor: 'Chaos'},
    48: {name: 'A.A.', imageURL: generateImageURL(48), soulColor: 'Chaos'},
    49: {name: 'Ophelia', imageURL: generateImageURL(49), soulColor: 'Chaos'},
    50: {name: 'Armstrong', imageURL: generateImageURL(50), soulColor: 'Chaos'},
    51: {name: 'Sophia', imageURL: generateImageURL(51), soulColor: 'Crimson'},
    52: {name: 'Sivi', imageURL: generateImageURL(52), soulColor: 'Azure'},
    53: {name: 'Veela', imageURL: generateImageURL(53), soulColor: 'Amber'},
    54: {name: 'Chiffon', imageURL: generateImageURL(54), soulColor: 'Crimson'},
    55: {name: 'Lea', imageURL: generateImageURL(55), soulColor: 'Emerald'},
    56: {name: 'Claudia', imageURL: generateImageURL(56), soulColor: 'Emerald'},
    57: {name: 'Stella', imageURL: generateImageURL(57), soulColor: 'Azure'},
    58: {name: 'Artie', imageURL: generateImageURL(58), soulColor: 'Crimson'},
    59: {name: 'Eir', imageURL: generateImageURL(59), soulColor: 'Azure'},
    60: {name: 'Fia', imageURL: generateImageURL(60), soulColor: 'Emerald'},
    61: {name: 'Illya (Chaos)', imageURL: generateImageURL(61), soulColor: 'Chaos'},
    62: {name: 'Priscilla', imageURL: generateImageURL(62), soulColor: 'Crimson'},
    63: {name: 'Paladea', imageURL: generateImageURL(63), soulColor: 'Chaos'},
    64: {name: 'Gil\'uial', imageURL: generateImageURL(64), soulColor: 'Azure'},
    65: {name: 'Aine', imageURL: generateImageURL(65), soulColor: 'Radiance'},
    66: {name: 'Iris (Amber)', imageURL: generateImageURL(66), soulColor: 'Amber'},
    67: {name: 'Richesse', imageURL: generateImageURL(67), soulColor: 'Amber'},
    68: {name: 'Fenny', imageURL: generateImageURL(68), soulColor: 'Azure'},
    69: {name: 'Kaguya', imageURL: generateImageURL(69), soulColor: 'Chaos'},
    70: {name: 'Sabrina (Emerald)', imageURL: generateImageURL(70), soulColor: 'Emerald'},
    71: {name: 'Moddey (Amber)', imageURL: generateImageURL(71), soulColor: 'Amber'},
    72: {name: 'Cordie (Crimson)', imageURL: generateImageURL(72), soulColor: 'Crimson'},
    73: {name: 'Amour (Amber)', imageURL: generateImageURL(73), soulColor: 'Amber'},
    74: {name: 'Tropon (Azure)', imageURL: generateImageURL(74), soulColor: 'Azure'},
    75: {name: 'Morgana', imageURL: generateImageURL(75), soulColor: 'Crimson'},
    76: {name: 'Yuni', imageURL: generateImageURL(76), soulColor: 'Emerald'},
    77: {name: 'Minasumari', imageURL: generateImageURL(77), soulColor: 'Azure'},
    78: {name: 'Asahi', imageURL: generateImageURL(78), soulColor: 'Amber'},
    79: {name: 'Serruria', imageURL: generateImageURL(79), soulColor: 'Azure'},
    80: {name: 'Milla', imageURL: generateImageURL(80), soulColor: 'Emerald'},
    81: {name: 'Tama', imageURL: generateImageURL(81), soulColor: 'Amber'},
    82: {name: 'Alexandra', imageURL: generateImageURL(82), soulColor: 'Emerald'},
    83: {name: '', imageURL: generateImageURL(83)},
    84: {name: 'Liselotte', imageURL: generateImageURL(84), soulColor: 'Azure'},
    85: {name: 'Matilda', imageURL: generateImageURL(85), soulColor: 'Crimson'},
    86: {name: 'Meria', imageURL: generateImageURL(86), soulColor: 'Radiance'},
    87: {name: '', imageURL: generateImageURL(87)},
    88: {name: 'Rosalie (Radiance)', imageURL: generateImageURL(88), soulColor: 'Radiance'},
    89: {name: '', imageURL: generateImageURL(89)},
    90: {name: '', imageURL: generateImageURL(90)},
    91: {name: '', imageURL: generateImageURL(91)},
    92: {name: '', imageURL: generateImageURL(92)},
    93: {name: '', imageURL: generateImageURL(93)},
    94: {name: '', imageURL: generateImageURL(94)},
    95: {name: 'Nina (Azure)', imageURL: generateImageURL(95), soulColor: 'Azure'},
    96: {name: 'Amleth (Amber)', imageURL: generateImageURL(96), soulColor: 'Amber'},
}

const rarity = {
    1: 'N',
    2: 'R',
    4: 'R+',
    8: 'SR',
    16: 'SR+',
    32: 'SSR',
    64: 'SSR+',
    128: 'UR',
    256: 'UR+',
    512: 'LR',
    1024: 'LR+',
    2048: 'LR+2',
    4096: 'LR+3',
    8192: 'LR+4',
    16384: 'LR+5',
    32768: 'LR+6',
    65536: 'LR+7',
    131072: 'LR+8',
    262144: 'LR+9',
    524288: 'LR+10',
    1048576: 'LR+11',
    2097152: 'LR+12',
    4194304: 'LR+13',
    8388608: 'LR+14',
    16777216: 'LR+15'
};

const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.getElementById('characterDropdown');
const soulColorFilter = document.getElementById('soulColorFilter');
const progressBarContainer = document.getElementById('progressBarContainer');
const progressBar = document.getElementById('progressBar');

// Populate dropdown with character names and images
const populateDropdown = (filter = '') => {
    dropdownContent.innerHTML = ''; // Clear existing options
    Object.entries(characterNames).forEach(([id, { name, imageURL, soulColor }]) => {
        if (name && (filter === '' || soulColor === filter)) {
            const optionDiv = document.createElement('div');
            optionDiv.dataset.value = id;
            optionDiv.innerHTML = `<img src="${imageURL}" alt="${name}"> ${name}`;
            dropdownContent.appendChild(optionDiv);
        }
    });
};

populateDropdown(); // Initial population of dropdown

dropdownButton.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

dropdownContent.addEventListener('click', (event) => {
    const optionDiv = event.target.closest('div');
    if (optionDiv) {
        const selectedCharacterId = optionDiv.dataset.value;
        const character = characterNames[selectedCharacterId];
        if (character) {
            dropdownButton.dataset.value = selectedCharacterId;
            // dropdownButton.innerHTML = `<img src="${character.imageURL}" alt="${character.name}"> ${character.name}`;
            dropdownButton.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <img src="${character.imageURL}" alt="${character.name}">
                <span>${character.name}</span>
            </div>
            `;
            dropdownContent.style.display = 'none';
        }
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.custom-dropdown')) {
        dropdownContent.style.display = 'none';
    }
});

soulColorFilter.addEventListener('change', (event) => {
    const filter = event.target.value;
    populateDropdown(filter);
});

const worldsEndpoint = 'https://api.mentemori.icu/worlds';

const fetchWorldsData = async () => {
    try {
        const response = await fetch(worldsEndpoint);
        if (!response.ok) {
            throw new Error(`HTTP error, status = ${response.status}`);
        }
        const result = await response.json();
        // console.log(result.data);
        return result.data;
    } catch (error) {
        console.error('Error fetching worlds:', error);
        return null;
    }
}

const processWorldsData = (data) => {
    const worldsCount = {
        JP: 0,
        KR: 0,
        ASIA: 0,
        NA: 0,
        EU: 0,
        GLB: 0
    }

    data.forEach(world => {
        switch (world.server) {
            case 'jp':
                worldsCount.JP++;
                break;
            case 'kr':
                worldsCount.KR++;
                break;
            case 'as':
                worldsCount.ASIA++;
                break;
            case 'na':
                worldsCount.NA++;
                break;
            case 'eu':
                worldsCount.EU++;
                break;
            case 'gl':
                worldsCount.GLB++;
                break;
        }
    })
    return worldsCount;
}

const generateUrls = (worldsCount) => {
    const urls = [];
    const LL = document.getElementById('LL').checked;
    const BL = document.getElementById('BL').checked;
    const KR = document.getElementById('KR').checked;
    const ASIA = document.getElementById('ASIA').checked;
    const NA = document.getElementById('NA').checked;
    const EU = document.getElementById('EU').checked;
    const GLB = document.getElementById('GLB').checked;
    const JP = document.getElementById('JP').checked;

    if (BL) {
        if (JP) {
            for (let i = 1; i <= worldsCount.JP; i++) {
                const paddedId = String(i + 1000).padStart(4, '0');
                urls.push(`https://api.mentemori.icu/${paddedId}/arena/latest`);
            }
        }
        if (KR) {
            for (let i = 1; i <= worldsCount.KR; i++) {
                const paddedId = String(i + 2000).padStart(4, '0');
                urls.push(`https://api.mentemori.icu/${paddedId}/arena/latest`);
            }
        }
        if (ASIA) {
            for (let i = 1; i <= worldsCount.ASIA; i++) {
                const paddedId = String(i + 3000).padStart(4, '0');
                urls.push(`https://api.mentemori.icu/${paddedId}/arena/latest`);
            }
        }
        if (NA) {
            for (let i = 1; i <= worldsCount.NA; i++) {
                const paddedId = String(i + 4000).padStart(4, '0');
                urls.push(`https://api.mentemori.icu/${paddedId}/arena/latest`);
            }
        }
        if (EU) {
            for (let i = 1; i <= worldsCount.EU; i++) {
                const paddedId = String(i + 5000).padStart(4, '0');
                urls.push(`https://api.mentemori.icu/${paddedId}/arena/latest`);
            }
        }
        if (GLB) {
            for (let i = 1; i <= worldsCount.GLB; i++) {
                const paddedId = String(i + 6000).padStart(4, '0');
                urls.push(`https://api.mentemori.icu/${paddedId}/arena/latest`);
            }
        }
    }

    if (LL) {
        if (KR) {
            for (let i = 19; i <= 20; i++) {
                urls.push(`https://api.mentemori.icu/wg/${i}/legend/latest`);
            }
        }
    
        if (ASIA) {
            for (let i = 21; i <= 22; i++) {
                urls.push(`https://api.mentemori.icu/wg/${i}/legend/latest`);
            }
        }
    
        if (NA) {
            for (let i = 23; i <= 24; i++) {
                urls.push(`https://api.mentemori.icu/wg/${i}/legend/latest`);
            }
        }
    
        if (EU) {
            for (let i = 25; i <= 25; i++) {
                urls.push(`https://api.mentemori.icu/wg/${i}/legend/latest`);
            }
        }
    
        if (GLB) {
            for (let i = 26; i <= 27; i++) {
                urls.push(`https://api.mentemori.icu/wg/${i}/legend/latest`);
            }
        }
    
        if (JP) {
            for (let i = 37; i <= 66; i++) {
                urls.push(`https://api.mentemori.icu/wg/${i}/legend/latest`);
            }
        }
    }
    return urls;
}

const itemsPerPage = 6;
let currentPage = 1;
let filteredResults = [];

const renderTable = (data, page) => {
    // console.log('Rendering table', data);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    const resultsTable = document.getElementById('resultsTable');
    resultsTable.innerHTML = ''; // Clear the table

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headers = ['Player Name', 'Team'];
    const tr = document.createElement('tr');
    headers.forEach((header, index) => {
        const th = document.createElement('th');
        th.textContent = header;
        if (index === 0) {
            th.style.width = '15%';
        } else if (index === 1) {
            th.style.width = '85%';
        }
        tr.appendChild(th);
    })
    thead.appendChild(tr);

    paginatedData.forEach(player => {
        const tr = document.createElement('tr');

        const playerNameId = document.createElement('td');
        playerNameId.style.width = '15%';
        const world = parseInt(player.playerId.toString().slice(-3), 10); // Get the last three digits of the playerId which represents the world
        playerNameId.innerHTML = `${player.playerName}<br><small>${player.region} W${world}</small>`;
        tr.appendChild(playerNameId);

        const teamTd = document.createElement('td');
        teamTd.style.width = '85%';
        player.characters.forEach(info => {
            const characterName = characterNames[info.CharacterId]?.name || 'Unknown Character';
            const characterRarity = rarity[info.RarityFlags] || 'Unknown Rarity';

            const characterDiv = document.createElement('div');
            characterDiv.className = 'character-container'

            const rarityDiv = document.createElement('div');
            rarityDiv.textContent = characterRarity;
            characterDiv.appendChild(rarityDiv);

            const nameDiv = document.createElement('div');
            nameDiv.textContent = characterName;
            characterDiv.appendChild(nameDiv);

            const levelDiv = document.createElement('div');
            levelDiv.textContent = `Lv. ${info.Level}`;
            characterDiv.appendChild(levelDiv);

            const img = document.createElement('img');
            img.src = characterNames[info.CharacterId]?.imageURL;
            img.alt = characterName;
            characterDiv.appendChild(img);

            teamTd.appendChild(characterDiv);
        });
        tr.appendChild(teamTd);
        tbody.appendChild(tr);

        
    })
    table.appendChild(thead);
    table.appendChild(tbody);
    resultsTable.appendChild(table);
}

const renderPaginationControls = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationControls = document.getElementById('paginationControls');
    paginationControls.innerHTML = ''; // Clear the pagination container

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = '<';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable(filteredResults, currentPage);
            renderPaginationControls(filteredResults.length);
        }
    })
    paginationControls.appendChild(prevButton);

    const pageInputContainer = document.createElement('div');
    pageInputContainer.style.display = 'inline-flex';
    pageInputContainer.style.alignItems = 'center';

    // Page number input
    const pageInput = document.createElement('input');
    pageInput.type = 'number';
    pageInput.min = 1;
    pageInput.max = totalPages;
    pageInput.value = currentPage;
    pageInput.style.width = '40px';
    pageInput.style.textAlign = 'center';
    pageInput.addEventListener('change', () => {
        const pageNumber = parseInt(pageInput.value, 10);
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            currentPage = pageNumber;
            renderTable(filteredResults, currentPage);
            renderPaginationControls(filteredResults.length);
        } else {
            pageInput.value = currentPage; // Reset to current page if out of range
        }
    })
    pageInputContainer.appendChild(pageInput);

    const totalPagesSpan = document.createElement('span');
    totalPagesSpan.textContent = ` / ${totalPages}`;
    pageInputContainer.appendChild(totalPagesSpan);

    paginationControls.appendChild(pageInputContainer);

    // Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderTable(filteredResults, currentPage);
            renderPaginationControls(filteredResults.length);
        }
    })
    paginationControls.appendChild(nextButton);
}

const filterResults = (query) => {
    if (!query) {
        filteredResults = playerData;
    } else {
        filteredResults = playerData.filter(player =>
            player.characters.some(character => {
                return characterNames[character.CharacterId]?.name.toLowerCase().includes(query.toLowerCase())
            })
        )
    }
    currentPage = 1;
    renderTable(filteredResults, currentPage);
    renderPaginationControls(filteredResults.length);
}

document.getElementById('searchInput').addEventListener('input', (event) => {
    const query = event.target.value;
    filterResults(query);
})

document.getElementById('getTeam').addEventListener('click', async () => {
    // fetchWorldsData();
    currentPage = 1;
    const worldsData = await fetchWorldsData();
    if (!worldsData) {
        alert('Error fetching worlds data');
        return;
    }
    const selectedCharacterId = dropdownButton.dataset.value;
    console.log(selectedCharacterId);
    if (!selectedCharacterId) {
        alert('Please select a character');
        return;
    }

    // Check if any league or region checkboxes are selected
    const leagueCheckboxes = document.querySelectorAll('input[name="league"]');
    const regionCheckboxes = document.querySelectorAll('input[name="region"]');
    const isAnyLeagueSelected = Array.from(leagueCheckboxes).some(checkbox => checkbox.checked);
    const isAnyRegionSelected = Array.from(regionCheckboxes).some(checkbox => checkbox.checked);

    // If no league or region checkboxes are selected, select all
    if (!isAnyLeagueSelected) {
        leagueCheckboxes.forEach(checkbox => checkbox.checked = true);
    }

    if (!isAnyRegionSelected) {
        regionCheckboxes.forEach(checkbox => checkbox.checked = true);
    }

    const selectedCharacterIds = [parseInt(selectedCharacterId)];

    // Display progress bar
    progressBarContainer.style.display = 'block';
    progressBar.style.width = '0%';

    const worldsCount = processWorldsData(worldsData);
    const urls = generateUrls(worldsCount);

    // Progress bar
    const totalUrls = urls.length;
    let completedUrls = 0;

    const updateProgressBar = () => {
        const progress = (completedUrls / totalUrls) * 100;
        progressBar.style.width = `${progress}%`;
        if (completedUrls < totalUrls) {
            requestAnimationFrame(updateProgressBar);
        } else {
            progressBar.style.width = '100%'; // Ensure progress bar is at 100% when all requests are completed
            setTimeout(() => {
                progressBarContainer.style.display = 'none';
            }, 250); // Hide progress bar after 250ms
        }
    }

    requestAnimationFrame(updateProgressBar);

    try {
        // const responses = await Promise.all(urls.map(async (url) => {
        //     const response = await fetch(url);
        //     completedUrls++;
        //     return response;
        // }));
        // const data = await Promise.all(responses.map(response => {
        //     if (!response.ok) {
        //         throw new Error(`HTTP error, status = ${response.status}`);
        //     }
        //     return response.json();
        // }));

        // Fetch BL and LL URLs. If the URL returns a 404 (world exists but no data), ignore it.
        const responses = await Promise.all(urls.map(async (url) => {
            try {
                const response = await fetch(url);
                if (response.status === 404)  {
                    console.warn(`Data not available for ${url}`);
                    completedUrls++;
                    return null;
                }
                completedUrls++;
                return response;
            } catch (error) {
                console.error(`Error fetching data for ${url}`, error);
                return null;
            }
        }));

        const data = await Promise.all(responses.map(response => {
            if (response && response.ok) {
                return response.json();
            }
            return null;
        }))

        const filteredData = data.filter(item => item !== null);

        // console.log(data);

        const regionMappingBL = {
            '1': 'Japan',
            '2': 'Korea',
            '3': 'Asia',
            '4': 'America',
            '5': 'Europe',
            '6': 'Global'
        };

        const regionMappingLL = {
            '19': 'Korea',
            '20': 'Korea',
            '21': 'Asia',
            '22': 'Asia',
            '23': 'America',
            '24': 'America',
            '25': 'Europe',
            '26': 'Global',
            '27': 'Global',
            '37': 'Japan',
            '38': 'Japan',
            '39': 'Japan',
            '40': 'Japan',
            '41': 'Japan',
            '42': 'Japan',
            '43': 'Japan',
            '44': 'Japan',
            '45': 'Japan',
            '46': 'Japan',
            '47': 'Japan',
            '48': 'Japan',
            '49': 'Japan',
            '50': 'Japan',
            '51': 'Japan',
            '52': 'Japan',
            '53': 'Japan',
            '54': 'Japan',
            '55': 'Japan',
            '56': 'Japan',
            '57': 'Japan',
            '58': 'Japan',
            '59': 'Japan',
            '60': 'Japan',
            '61': 'Japan',
            '62': 'Japan',
            '63': 'Japan',
            '64': 'Japan',
            '65': 'Japan',
            '66': 'Japan',
            '67': 'Japan'
        };

        // Use a Set to track unique players
        const uniquePlayers = new Set();
        playerData = [];
        const teammateCounts = {};

        filteredData.forEach((apiData, index) => {
            const url = urls[index];
            let region = 'Unknown Region';

            if (url.includes('/arena/')) {
                const regionCode = url.match(/https:\/\/api\.mentemori\.icu\/(\d)/)[1];
                region = regionMappingBL[regionCode] || 'Unknown Region';
            } else if (url.includes('/legend/')) {
                const regionCode = url.match(/https:\/\/api\.mentemori\.icu\/wg\/(\d+)/)[1];
                region = regionMappingLL[regionCode] || 'Unknown Region';
            }

            apiData.data.forEach(player => {
                /*
                    Unique identifier found through character equipment.
                    There are edge cases where the player has no equipment on their characters, therefore
                    those players will not be included in the results.
                */
                let playerId = null
                for (let i = 0; i < 5 && !playerId; i++) {
                    for (let j = 0; j < 6 && !playerId; j++) {
                        playerId = player.UserCharacterInfoList[i]?.UserEquipmentDtoInfos[j]?.PlayerId;
                    }
                }
                if (playerId && !uniquePlayers.has(playerId)) {
                    uniquePlayers.add(playerId);

                    const characterIds = player.UserCharacterInfoList.map(characterInfo => characterInfo.CharacterId);
                    if (selectedCharacterIds.every(id => characterIds.includes(id))) {
                        const highestLevel = Math.max(...player.UserCharacterInfoList.map(info => info.Level));
                        playerData.push({
                            playerName: player.PlayerName,
                            playerId,
                            region,
                            highestLevel,
                            characters: player.UserCharacterInfoList
                        })

                        // Count teammates
                        player.UserCharacterInfoList.forEach(info => {
                            if (info.CharacterId !== selectedCharacterId) {
                                if (!teammateCounts[info.CharacterId]) {
                                    teammateCounts[info.CharacterId] = 0;
                                }
                                teammateCounts[info.CharacterId]++;
                            }
                        })
                    }
                }
            });
        });
        // Debug
        // console.log(player.PlayerName);
        // console.log(playerId);
        playerData.sort((a, b) => b.highestLevel - a.highestLevel);

        // Initially render the full data
        filteredResults = playerData;
        // Render the results table
        renderTable(filteredResults, currentPage);
        // Render pagination controls
        renderPaginationControls(filteredResults.length);

        document.getElementById('searchInput').style.display = 'block';

        let selectedCharacterCount = 0;
        playerData.forEach(player => {
            player.characters.forEach(character => {
                if (character.CharacterId === parseInt(selectedCharacterId)) {
                    selectedCharacterCount++;
                }
            })
        })
        console.log(selectedCharacterCount);

        const selectedCharacterCountContainer = document.getElementById('selectedCharacterCountContainer');
        const cname = characterNames[selectedCharacterId].name;
        const endsWithS = cname.endsWith('s') ? 'es' : 's';
        selectedCharacterCountContainer.innerHTML = `<p>Total: ${selectedCharacterCount} ${characterNames[selectedCharacterId].name}${endsWithS}</p>`;

        // Find most used teammates
        const sortedTeammates = Object.entries(teammateCounts)
        .filter(([characterId]) => characterId !== selectedCharacterId.toString()) // Filter out the selected character
        .sort((a, b) => b[1] - a[1])
        .slice(0, 100);

        // console.log(`Top 10 Most Used Teammates for ${characterNames[selectedCharacterId].name}:`);
        sortedTeammates.forEach(([characterId, count], index) => {
            const characterName = characterNames[characterId]?.name || 'Unknown Character';
            // console.log(`${index + 1}. ${characterName}: ${count}`);
        })

        // Display most used teammates in descending order
        const topTeammatesContainer = document.getElementById('topTeammates');
        topTeammatesContainer.innerHTML = `<h3>Most Used Teammates for ${characterNames[selectedCharacterId].name}</h3>`;
        const topTeammatesList = document.createElement('ol');
        const maxCount = sortedTeammates[0][1]; // Get the count of the most used teammate

        const renderTeammatesList = (teammates, limit) => {
            topTeammatesList.innerHTML = ''; // Clear the list
        
            teammates.slice(0, limit).forEach(([characterId, count], index) => {
                const listItem = document.createElement('li');
                const characterName = characterNames[characterId]?.name || 'Unknown Character';
                const characterImageUrl = generateImageURL(characterId);

                const img = document.createElement('img');
                img.src = characterImageUrl;
                img.alt = characterName;
                img.style.width = '50px';
                img.style.height = '50px';
                img.style.marginRight = '10px';

                const textContainer = document.createElement('div');
                textContainer.style.display = 'flex';
                textContainer.style.flexDirection = 'column';
                textContainer.style.alignItems = 'flex-start';

                const nameText = document.createElement('span');
                nameText.textContent = `${index + 1}) ${characterName}: ${count} (${((count / selectedCharacterCount) * 100).toFixed(2)}%)`;
                textContainer.appendChild(nameText);

                const barContainer = document.createElement('div');
                barContainer.style.display = 'inline-block';
                barContainer.style.width = '200px';
                barContainer.style.height = '15px';
                barContainer.style.backgroundColor = '#ccc';

                const bar = document.createElement('div');
                bar.style.width = `${(count / selectedCharacterCount) * 100}%`;
                bar.style.height = '100%';
                bar.style.backgroundColor = '#76c7c0';

                barContainer.appendChild(bar);
                textContainer.appendChild(barContainer);
                
                listItem.appendChild(img);
                listItem.appendChild(textContainer);
                topTeammatesList.appendChild(listItem);
        })
    }

    // Initially render top 10 teammates
    renderTeammatesList(sortedTeammates, 10);

    // Create and append the "Show All" button
    const showAllButton = document.createElement('button');
    showAllButton.textContent = 'Show All';
    showAllButton.className = 'show-toggle';
    showAllButton.addEventListener('click', () => {
        renderTeammatesList(sortedTeammates, sortedTeammates.length);
        showAllButton.style.display = 'none';
        showLessButton.style.display = 'inline';
    })

    topTeammatesContainer.appendChild(topTeammatesList);
    topTeammatesContainer.appendChild(showAllButton);

    // Create and append the "Show Less" button
    const showLessButton = document.createElement('button');
    showLessButton.textContent = 'Show Less';
    showLessButton.className = 'show-toggle';
    showLessButton.style.display = 'none';
    showLessButton.addEventListener('click', () => {
        renderTeammatesList(sortedTeammates, 10);
        showLessButton.style.display = 'none';
        showAllButton.style.display = 'inline';
    })
    topTeammatesContainer.appendChild(showLessButton);

    } catch (error) {
        console.error('Error fetching team:', error);
    }
})