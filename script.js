// const characterNames = {
//     1: 'Monica',
//     2: 'Illya',
//     3: 'Iris',
//     4: 'Loki',
//     5: 'Soltina',
//     6: 'Amleth',
//     7: 'Fenrir',
//     8: 'Florence',
//     9: 'Sonya',
//     10: 'Moddey',
//     11: 'Charlotte',
//     12: 'Arianrhod',
//     13: 'Theodora',
//     14: 'Petra',
//     15: 'Sabrina',
//     16: 'Freesia',
//     17: 'Amour',
//     18: 'Rean',
//     19: 'Belle',
//     20: 'Dian',
//     21: 'Shizu',
//     22: 'Zara',
//     23: 'Rosalie',
//     24: 'Libra',
//     25: 'Ivy',
//     26: 'Merlyn',
//     27: 'Cordie',
//     28: 'Nina',
//     29: 'Mertillier',
//     30: 'Luke',
//     31: 'Garmr',
//     32: 'Skuld',
//     33: 'Cherna',
//     34: 'Soteira',
//     35: 'Mimi',
//     36: 'Tropon',
//     37: 'Hathor',
//     38: 'Olivia',
//     39: 'Primavera',
//     40: 'Carol',
//     41: '[The Witch of Mourning Flowers] Natasha',
//     42: '[The Witch of Sacred Swords] Fortina',
//     43: '[The Witch of Wailing Lightning] Cerberus',
//     44: '[The Witch of Torrential Sorrow] Rusalka',
//     45: '[The Witch of Longinus] Elfriede',
//     46: '[The Witch of Snowy Illusions] Lunalynn',
//     47: '[The Witch of Conflagration] Valeriede',
//     48: '[The Witch of Rust] A.A.',
//     49: '[The Witch of Fallen Crystals] Ophelia',
//     50: '[The Witch of Lost Souls] Armstrong',
//     51: 'Sophia',
//     52: 'Sivi',
//     53: 'Veela',
//     54: 'Chiffon',
//     55: 'Lea',
//     56: 'Claudia',
//     57: 'Stella',
//     58: 'Artie',
//     59: 'Eir',
//     60: 'Fia',
//     61: '[The Witch of God\'s Curse] Illya',
//     62: 'Priscilla',
//     63: '[The Witch of Justice] Paladea',
//     64: 'Gil\'uial',
//     65: 'Aine',
//     66: '[Attendant Tainted in Black] Iris',
//     67: 'Richesse',
//     68: 'Fenny',
//     69: '[The Witch of Dreams] Kaguya',
//     70: '[Soldier of the Summer Breeze] Sabrina',
//     71: '[Gravekeeper\'s Summer Holiday] Moddey',
//     72: '[Summer\'s Reverb] Cordie',
//     73: '[Holy Night\'s Gift] Amour',
//     74: '[Holy Night\'s Prayer] Tropon',
//     75: 'Morgana',
//     76: 'Yuni',
//     77: 'Minasumari',
//     78: 'Asahi',
//     79: 'Serruria',
//     80: 'Milla',
//     81: 'Tama',
//     82: 'Alexandra',
//     83: '',
//     84: 'Liselotte',
//     85: 'Matilda',
//     86: '',
//     87: '',
//     88: '[Apostle of Caritas] Rosalie',
//     89: '',
//     90: '',
//     91: '',
//     92: '',
//     93: '',
//     94: '',
//     95: '[Little Big Adventure] Nina',
//     96: '[A Midsummer Day\'s Dream] Amleth'
// };
const generateImageURL = (id) => {
    const paddedId = String(id).padStart(6, '0');
    return `https://raw.githubusercontent.com/ScobraCK/MementoMori-data/main/Assets/Characters/Sprites/CHR_${paddedId}_00_s.png`;
}
const characterNames = {
    1: {name: 'Monica', imageURL: generateImageURL(1)},
    2: {name: 'Illya', imageURL: generateImageURL(2)},
    3: {name: 'Iris', imageURL: generateImageURL(3)},
    4: {name: 'Loki', imageURL: generateImageURL(4)},
    5: {name: 'Soltina', imageURL: generateImageURL(5)},
    6: {name: 'Amleth', imageURL: generateImageURL(6)},
    7: {name: 'Fenrir', imageURL: generateImageURL(7)},
    8: {name: 'Florence', imageURL: generateImageURL(8)},
    9: {name: 'Sonya', imageURL: generateImageURL(9)},
    10: {name: 'Moddey', imageURL: generateImageURL(10)},
    11: {name: 'Charlotte', imageURL: generateImageURL(11)},
    12: {name: 'Arianrhod', imageURL: generateImageURL(12)},
    13: {name: 'Theodora', imageURL: generateImageURL(13)},
    14: {name: 'Petra', imageURL: generateImageURL(14)},
    15: {name: 'Sabrina', imageURL: generateImageURL(15)},
    16: {name: 'Freesia', imageURL: generateImageURL(16)},
    17: {name: 'Amour', imageURL: generateImageURL(17)},
    18: {name: 'Rean', imageURL: generateImageURL(18)},
    19: {name: 'Belle', imageURL: generateImageURL(19)},
    20: {name: 'Dian', imageURL: generateImageURL(20)},
    21: {name: 'Shizu', imageURL: generateImageURL(21)},
    22: {name: 'Zara', imageURL: generateImageURL(22)},
    23: {name: 'Rosalie', imageURL: generateImageURL(23)},
    24: {name: 'Libra', imageURL: generateImageURL(24)},
    25: {name: 'Ivy', imageURL: generateImageURL(25)},
    26: {name: 'Merlyn', imageURL: generateImageURL(26)},
    27: {name: 'Cordie', imageURL: generateImageURL(27)},
    28: {name: 'Nina', imageURL: generateImageURL(28)},
    29: {name: 'Mertillier', imageURL: generateImageURL(29)},
    30: {name: 'Luke', imageURL: generateImageURL(30)},
    31: {name: 'Garmr', imageURL: generateImageURL(31)},
    32: {name: 'Skuld', imageURL: generateImageURL(32)},
    33: {name: 'Cherna', imageURL: generateImageURL(33)},
    34: {name: 'Soteira', imageURL: generateImageURL(34)},
    35: {name: 'Mimi', imageURL: generateImageURL(35)},
    36: {name: 'Tropon', imageURL: generateImageURL(36)},
    37: {name: 'Hathor', imageURL: generateImageURL(37)},
    38: {name: 'Olivia', imageURL: generateImageURL(38)},
    39: {name: 'Primavera', imageURL: generateImageURL(39)},
    40: {name: 'Carol', imageURL: generateImageURL(40)},
    41: {name: 'Natasha', imageURL: generateImageURL(41)},
    42: {name: 'Fortina', imageURL: generateImageURL(42)},
    43: {name: 'Cerberus', imageURL: generateImageURL(43)},
    44: {name: 'Rusalka', imageURL: generateImageURL(44)},
    45: {name: 'Elfriede', imageURL: generateImageURL(45)},
    46: {name: 'Lunalynn', imageURL: generateImageURL(46)},
    47: {name: 'Valeriede', imageURL: generateImageURL(47)},
    48: {name: 'A.A.', imageURL: generateImageURL(48)},
    49: {name: 'Ophelia', imageURL: generateImageURL(49)},
    50: {name: 'Armstrong', imageURL: generateImageURL(50)},
    51: {name: 'Sophia', imageURL: generateImageURL(51)},
    52: {name: 'Sivi', imageURL: generateImageURL(52)},
    53: {name: 'Veela', imageURL: generateImageURL(53)},
    54: {name: 'Chiffon', imageURL: generateImageURL(54)},
    55: {name: 'Lea', imageURL: generateImageURL(55)},
    56: {name: 'Claudia', imageURL: generateImageURL(56)},
    57: {name: 'Stella', imageURL: generateImageURL(57)},
    58: {name: 'Artie', imageURL: generateImageURL(58)},
    59: {name: 'Eir', imageURL: generateImageURL(59)},
    60: {name: 'Fia', imageURL: generateImageURL(60)},
    61: {name: 'Illya', imageURL: generateImageURL(61)},
    62: {name: 'Priscilla', imageURL: generateImageURL(62)},
    63: {name: 'Paladea', imageURL: generateImageURL(63)},
    64: {name: 'Gil\'uial', imageURL: generateImageURL(64)},
    65: {name: 'Aine', imageURL: generateImageURL(65)},
    66: {name: 'Iris', imageURL: generateImageURL(66)},
    67: {name: 'Richesse', imageURL: generateImageURL(67)},
    68: {name: 'Fenny', imageURL: generateImageURL(68)},
    69: {name: 'Kaguya', imageURL: generateImageURL(69)},
    70: {name: 'Sabrina', imageURL: generateImageURL(70)},
    71: {name: 'Moddey', imageURL: generateImageURL(71)},
    72: {name: 'Cordie', imageURL: generateImageURL(72)},
    73: {name: 'Amour', imageURL: generateImageURL(73)},
    74: {name: 'Tropon', imageURL: generateImageURL(74)},
    75: {name: 'Morgana', imageURL: generateImageURL(75)},
    76: {name: 'Yuni', imageURL: generateImageURL(76)},
    77: {name: 'Minasumari', imageURL: generateImageURL(77)},
    78: {name: 'Asahi', imageURL: generateImageURL(78)},
    79: {name: 'Serruria', imageURL: generateImageURL(79)},
    80: {name: 'Milla', imageURL: generateImageURL(80)},
    81: {name: 'Tama', imageURL: generateImageURL(81)},
    82: {name: 'Alexandra', imageURL: generateImageURL(82)},
    83: {name: '', imageURL: generateImageURL(83)},
    84: {name: 'Liselotte', imageURL: generateImageURL(84)},
    85: {name: 'Matilda', imageURL: generateImageURL(85)},
    86: {name: '', imageURL: generateImageURL(86)},
    87: {name: '', imageURL: generateImageURL(87)},
    88: {name: 'Rosalie', imageURL: generateImageURL(88)},
    89: {name: '', imageURL: generateImageURL(89)},
    90: {name: '', imageURL: generateImageURL(90)},
    91: {name: '', imageURL: generateImageURL(91)},
    92: {name: '', imageURL: generateImageURL(92)},
    93: {name: '', imageURL: generateImageURL(93)},
    94: {name: '', imageURL: generateImageURL(94)},
    95: {name: 'Nina (Azure)', imageURL: generateImageURL(95)},
    96: {name: 'Amleth (Amber)', imageURL: generateImageURL(96)}
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

const dropdown = document.getElementById('characterDropdown');
const characterImage = document.getElementById('characterImage');
// const selectedCharactersDiv = document.getElementById('selectedCharacters');

Object.entries(characterNames).forEach(([id, {name, imageURL}]) => {
    if (name) {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = name;
        dropdown.appendChild(option);

    }
});

dropdown.addEventListener('change', () => {
    const selectedOptions = Array.from(dropdown.selectedOptions);
    const selectedCharacterIds = selectedOptions.map(option => parseInt(option.value));

    // const selectedOption = dropdown.options[dropdown.selectedIndex];
    // const characterId = selectedOption.value;
    const character = characterNames[selectedCharacterIds];

    if (character) {
        characterImage.src = character.imageURL;
        characterImage.alt = character.name;
        characterImage.style.display = 'block';
    }

    console.log(selectedCharacterIds);
})

document.getElementById('getTeam').addEventListener('click', async () => {
    const selectedOptions = Array.from(dropdown.selectedOptions);
    const selectedCharacterIds = selectedOptions.map(option => parseInt(option.value));
    // console.log()

    if (selectedCharacterIds.length === 0) {
        alert('Please select at least one character');
        return;
    }

    const urls = [];
    const KR = document.getElementById('KR').checked;
    const ASIA = document.getElementById('ASIA').checked;
    const NA = document.getElementById('NA').checked;
    const EU = document.getElementById('EU').checked;
    const GLB = document.getElementById('GLB').checked;
    const JP = document.getElementById('JP').checked;

    if (KR) {
        for (let i = 18; i <= 19; i++) {
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

    try {
        // const response = await fetch('https://api.mentemori.icu/wg/37/legend/latest');
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => {
            if (!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.json();
        }));
        // if (!response.ok) {
        //     throw new Error(`HTTP error, status = ${response.status}`);
        // }
        // const data = await response.json();

        console.log(data);

        // console.log(data.data[10].PlayerName);
        // console.log(data.data[10].UserCharacterInfoList[0].CharacterId);

        // // Iterate over the UserCharacterInfoList array and log each element
        // // Grabs the team's character IDs of the player
        // data.data[10].UserCharacterInfoList.forEach ((characterInfo, index) => {
        //     const characterName = characterNames[characterInfo.CharacterId] || 'Unknown Character';
        //     console.log(`Character ${index + 1}:`, characterName);
        // });

        // // Find a specific character ID in the team
        // const targetCharacterId = 6;
        // data.data.forEach(player => {
        //     player.UserCharacterInfoList.forEach(characterInfo => {
        //         if (characterInfo.CharacterId === targetCharacterId) {
        //             console.log(player.PlayerName);
        //             player.UserCharacterInfoList.forEach(info => {
        //                 const characterName = characterNames[info.CharacterId] || 'Unknown Character';
        //                 console.log(`Character ID: ${info.CharacterId}, Name: ${characterName}`);
        //             });
        //         }
        //     });
        // });

        const resultsTable = document.getElementById('resultsTable');
        resultsTable.innerHTML = ''; // Clear the table

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        const headers = ['Player Name', 'Character Name'];
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            tr.appendChild(th);
        });
        thead.appendChild(tr);

        data.forEach(apiData => {
            apiData.data.forEach(player => {
                const characterIds = player.UserCharacterInfoList.map(characterInfo => characterInfo.CharacterId);
                if (selectedCharacterIds.every(id => characterIds.includes(id))) {
                    console.log(player.PlayerName);

                    const tr = document.createElement('tr');

                    const playerNameTd = document.createElement('td');
                    playerNameTd.textContent = player.PlayerName;
                    tr.appendChild(playerNameTd);

                    const teamTd = document.createElement('td');
                    player.UserCharacterInfoList.forEach(info => {
                        const characterName = characterNames[info.CharacterId]?.name || 'Unknown Character';
                        const characterRarity = rarity[info.RarityFlags] || 'Unknown Rarity';
                        console.log(`Character ID: ${info.CharacterId}, Name: ${characterName} Lv. ${info.Level} (${characterRarity})`);

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

                        // const playerNameTd = document.createElement('td');
                        // playerNameTd.textContent = player.PlayerName;
                        // tr.appendChild(playerNameTd);

                        // const characterNameTd = document.createElement('td');
                        // characterNameTd.textContent = characterName;
                        // tr.appendChild(characterNameTd);

                        // const levelTd = document.createElement('td');
                        // levelTd.textContent = info.Level;
                        // tr.appendChild(levelTd);

                        // const rarityTd = document.createElement('td');
                        // rarityTd.textContent = characterRarity;
                        // tr.appendChild(rarityTd);

                        // tbody.appendChild(tr);
                    });

                    tr.appendChild(teamTd);
                    tbody.appendChild(tr);
                }
            });
        })

        table.appendChild(thead);
        table.appendChild(tbody);
        resultsTable.appendChild(table);

        // data.data.forEach(player => {
        //     const characterIds = player.UserCharacterInfoList.map(characterInfo => characterInfo.CharacterId);
        //     if (selectedCharacterIds.every(id => characterIds.includes(id))) {
        //         console.log(player.PlayerName);
        //         player.UserCharacterInfoList.forEach(info => {
        //             const characterName = characterNames[info.CharacterId] || 'Unknown Character';
        //             const characterRarity = rarity[info.RarityFlags] || 'Unknown Rarity';
        //             console.log(`Character ID: ${info.CharacterId}, Name: ${characterName} Lv. ${info.Level} (${characterRarity})`);
        //         });
        //     }
        // });

    } catch (error) {
        console.error('Error fetching team:', error);
    }
})