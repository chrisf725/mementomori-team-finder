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
    86: {name: '', imageURL: generateImageURL(86)},
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
// const progressBarContainer = document.getElementById('progressBarContainer');
// const progressBar = document.getElementById('progressBar');

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

// dropdown.addEventListener('change', () => {
//     const selectedOptions = Array.from(dropdown.selectedOptions);
//     const selectedCharacterIds = selectedOptions.map(option => parseInt(option.value));

//     // const selectedOption = dropdown.options[dropdown.selectedIndex];
//     // const characterId = selectedOption.value;
//     const character = characterNames[selectedCharacterIds];

//     if (character) {
//         characterImage.src = character.imageURL;
//         characterImage.alt = character.name;
//         characterImage.style.display = 'block';
//     }

//     console.log(selectedCharacterIds);
// })

document.getElementById('getTeam').addEventListener('click', async () => {
    // const selectedOptions = Array.from(dropdown.selectedOptions);
    // const selectedCharacterIds = selectedOptions.map(option => parseInt(option.value));
    // console.log()

    // if (selectedCharacterIds.length === 0) {
    //     alert('Please select at least one character');
    //     return;
    // }

    const selectedCharacterId = dropdownButton.dataset.value;
    console.log(selectedCharacterId);
    if (!selectedCharacterId) {
        alert('Please select a character');
        return;
    }
    const selectedCharacterIds = [parseInt(selectedCharacterId)];

    // // Display progress bar
    // progressBarContainer.style.display = 'block';
    // progressBar.style.width = '0%';

    const urls = [];
    const LL = document.getElementById('LL').checked;
    const BL = document.getElementById('BL').checked;
    const KR = document.getElementById('KR').checked;
    const ASIA = document.getElementById('ASIA').checked;
    const NA = document.getElementById('NA').checked;
    const EU = document.getElementById('EU').checked;
    const GLB = document.getElementById('GLB').checked;
    const JP = document.getElementById('JP').checked;

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

    // Need to update every time a new world is added
    if (BL) {
        if (JP) {
            for (let i = 1; i <= 131; i++) {
                const paddedId = String(i).padStart(3, '0');
                urls.push(`https://api.mentemori.icu/1${paddedId}/arena/latest`);
            }
        }
        if (KR) {
            for (let i = 1; i <= 18; i++) {
                const paddedId = String(i).padStart(3, '0');
                urls.push(`https://api.mentemori.icu/2${paddedId}/arena/latest`);
            }
        }
        if (ASIA) {
            for (let i = 1; i <= 18; i++) {
                const paddedId = String(i).padStart(3, '0');
                urls.push(`https://api.mentemori.icu/3${paddedId}/arena/latest`);
            }
        }
        if (NA) {
            for (let i = 1; i <= 20; i++) {
                const paddedId = String(i).padStart(3, '0');
                urls.push(`https://api.mentemori.icu/4${paddedId}/arena/latest`);
            }
        }
        if (EU) {
            for (let i = 1; i <= 9; i++) {
                const paddedId = String(i).padStart(3, '0');
                urls.push(`https://api.mentemori.icu/5${paddedId}/arena/latest`);
            }
        }
        if (GLB) {
            for (let i = 1; i <= 25; i++) {
                const paddedId = String(i).padStart(3, '0');
                urls.push(`https://api.mentemori.icu/6${paddedId}/arena/latest`);
            }
        }
    }

    // // Progress bar
    // const totalUrls = urls.length;
    // for (let i = 0; i < totalUrls; i++) {
    //     await fetch(urls[i]);
    //     const progress = ((i + 1) / totalUrls) * 100;
    //     progressBar.style.width = `${progress}%`;
    // }

    // progressBarContainer.style.display = 'none';



    try {
        // const response = await fetch('https://api.mentemori.icu/wg/37/legend/latest');
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => {
            if (!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.json();
        }));

        console.log(data);

        const resultsTable = document.getElementById('resultsTable');
        resultsTable.innerHTML = ''; // Clear the table

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        const headers = ['Player Name', 'Team'];
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            tr.appendChild(th);
        });
        thead.appendChild(tr);

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

        data.forEach((apiData, index) => {
            const url = urls[index];
            let region = 'Unknown Region';

            if (url.includes('/arena/')) {
                const regionCode = url.match(/https:\/\/api\.mentemori\.icu\/(\d)/)[1];
                region = regionMappingBL[regionCode] || 'Unknown Region';
            } else if (url.includes('/legend/')) {
                const regionCode = url.match(/https:\/\/api\.mentemori\.icu\/wg\/(\d+)/)[1];
                region = regionMappingLL[regionCode] || 'Unknown Region';
            }
            // const regionCodeBL = urls[index].match(/https:\/\/api\.mentemori\.icu\/(\d)/)[1];
            // const regionBL = regionMappingBL[regionCodeBL];

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
                        console.log(player.PlayerName);
                        console.log(playerId);

                        const tr = document.createElement('tr');

                        // Player Name
                        const playerNameTd = document.createElement('td');
                        // playerNameTd.textContent = player.PlayerName;
                        const world = parseInt(playerId.toString().slice(-3), 10); // Get the last three digits of the playerId which represents the world
                        playerNameTd.innerHTML = `${player.PlayerName}<br><small>${region} W${world}</small>`;
                        tr.appendChild(playerNameTd);

                        const teamTd = document.createElement('td');
                        player.UserCharacterInfoList.forEach(info => {
                            const characterName = characterNames[info.CharacterId]?.name || 'Unknown Character';
                            const characterRarity = rarity[info.RarityFlags] || 'Unknown Rarity';
                            console.log(`Character ID: ${info.CharacterId}, Name: ${characterName} ${region} Lv. ${info.Level} (${characterRarity})`);

                            // // Debug
                            // if (characterName === 'Soltina') {
                            //     console.log(info.UserEquipmentDtoInfos);
                            // }

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
                    }
                }
            });
        })

        table.appendChild(thead);
        table.appendChild(tbody);
        resultsTable.appendChild(table);

    } catch (error) {
        console.error('Error fetching team:', error);
    }
})