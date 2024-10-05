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

const characterNames = {
    1: {name: 'Monica', imageURL: ''},
    2: {name: 'Illya', imageURL: ''},
    3: {name: 'Iris', imageURL: ''},
    4: {name: 'Loki', imageURL: ''},
    5: {name: 'Soltina', imageURL: ''},
    6: {name: 'Amleth', imageURL: 'https://github.com/ScobraCK/MementoMori-data/blob/main/Assets/Characters/Sprites/CHR_000006_00_s.png?raw=true'},
    7: {name: 'Fenrir', imageURL: ''},
    8: {name: 'Florence', imageURL: ''},
    9: {name: 'Sonya', imageURL: ''},
    10: {name: 'Moddey', imageURL: ''},
    11: {name: 'Charlotte', imageURL: ''},
    12: {name: 'Arianrhod', imageURL: ''},
    13: {name: 'Theodora', imageURL: ''},
    14: {name: 'Petra', imageURL: ''},
    15: {name: 'Sabrina', imageURL: ''},
    16: {name: 'Freesia', imageURL: ''},
    17: {name: 'Amour', imageURL: ''},
    18: {name: 'Rean', imageURL: ''},
    19: {name: 'Belle', imageURL: ''},
    20: {name: 'Dian', imageURL: ''},
    21: {name: 'Shizu', imageURL: ''},
    22: {name: 'Zara', imageURL: ''},
    23: {name: 'Rosalie', imageURL: ''},
    24: {name: 'Libra', imageURL: ''},
    25: {name: 'Ivy', imageURL: ''},
    26: {name: 'Merlyn', imageURL: ''},
    27: {name: 'Cordie', imageURL: ''},
    28: {name: 'Nina', imageURL: ''},
    29: {name: 'Mertillier', imageURL: ''},
    30: {name: 'Luke', imageURL: ''},
    31: {name: 'Garmr', imageURL: ''},
    32: {name: 'Skuld', imageURL: ''},
    33: {name: 'Cherna', imageURL: ''},
    34: {name: 'Soteira', imageURL: ''},
    35: {name: 'Mimi', imageURL: ''},
    36: {name: 'Tropon', imageURL: ''},
    37: {name: 'Hathor', imageURL: ''},
    38: {name: 'Olivia', imageURL: ''},
    39: {name: 'Primavera', imageURL: ''},
    40: {name: 'Carol', imageURL: ''},
    41: {name: '[The Witch of Mourning Flowers] Natasha', imageURL: ''},
    42: {name: '[The Witch of Sacred Swords] Fortina', imageURL: ''},
    43: {name: '[The Witch of Wailing Lightning] Cerberus', imageURL: ''},
    44: {name: '[The Witch of Torrential Sorrow] Rusalka', imageURL: ''},
    45: {name: '[The Witch of Longinus] Elfriede', imageURL: ''},
    46: {name: '[The Witch of Snowy Illusions] Lunalynn', imageURL: ''},
    47: {name: '[The Witch of Conflagration] Valeriede', imageURL: ''},
    48: {name: '[The Witch of Rust] A.A.', imageURL: ''},
    49: {name: '[The Witch of Fallen Crystals] Ophelia', imageURL: ''},
    50: {name: '[The Witch of Lost Souls] Armstrong', imageURL: ''},
    51: {name: 'Sophia', imageURL: ''},
    52: {name: 'Sivi', imageURL: ''},
    53: {name: 'Veela', imageURL: ''},
    54: {name: 'Chiffon', imageURL: ''},
    55: {name: 'Lea', imageURL: ''},
    56: {name: 'Claudia', imageURL: ''},
    57: {name: 'Stella', imageURL: ''},
    58: {name: 'Artie', imageURL: ''},
    59: {name: 'Eir', imageURL: ''},
    60: {name: 'Fia', imageURL: ''},
    61: {name: '[The Witch of God\'s Curse] Illya', imageURL: ''},
    62: {name: 'Priscilla', imageURL: ''},
    63: {name: '[The Witch of Justice] Paladea', imageURL: ''},
    64: {name: 'Gil\'uial', imageURL: ''},
    65: {name: 'Aine', imageURL: ''},
    66: {name: '[Attendant Tainted in Black] Iris', imageURL: ''},
    67: {name: 'Richesse', imageURL: ''},
    68: {name: 'Fenny', imageURL: ''},
    69: {name: '[The Witch of Dreams] Kaguya', imageURL: ''},
    70: {name: '[Soldier of the Summer Breeze] Sabrina', imageURL: ''},
    71: {name: '[Gravekeeper\'s Summer Holiday] Moddey', imageURL: ''},
    72: {name: '[Summer\'s Reverb] Cordie', imageURL: ''},
    73: {name: '[Holy Night\'s Gift] Amour', imageURL: ''},
    74: {name: '[Holy Night\'s Prayer] Tropon', imageURL: ''},
    75: {name: 'Morgana', imageURL: ''},
    76: {name: 'Yuni', imageURL: ''},
    77: {name: 'Minasumari', imageURL: ''},
    78: {name: 'Asahi', imageURL: ''},
    79: {name: 'Serruria', imageURL: ''},
    80: {name: 'Milla', imageURL: ''},
    81: {name: 'Tama', imageURL: ''},
    82: {name: 'Alexandra', imageURL: ''},
    83: {name: '', imageURL: ''},
    84: {name: 'Liselotte', imageURL: ''},
    85: {name: 'Matilda', imageURL: ''},
    86: {name: '', imageURL: ''},
    87: {name: '', imageURL: ''},
    88: {name: '[Apostle of Caritas] Rosalie', imageURL: ''},
    89: {name: '', imageURL: ''},
    90: {name: '', imageURL: ''},
    91: {name: '', imageURL: ''},
    92: {name: '', imageURL: ''},
    93: {name: '', imageURL: ''},
    94: {name: '', imageURL: ''},
    95: {name: '[Little Big Adventure] Nina', imageURL: ''},
    96: {name: '[A Midsummer Day\'s Dream] Amleth', imageURL: ''}
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

        const targetCharacterIds = [parseInt(selectedCharacterIds)];
        data.forEach(apiData => {
            apiData.data.forEach(player => {
                const characterIds = player.UserCharacterInfoList.map(characterInfo => characterInfo.CharacterId);
                if (selectedCharacterIds.every(id => characterIds.includes(id))) {
                    console.log(player.PlayerName);
                    player.UserCharacterInfoList.forEach(info => {
                        const characterName = characterNames[info.CharacterId]?.name || 'Unknown Character';
                        const characterRarity = rarity[info.RarityFlags] || 'Unknown Rarity';
                        console.log(`Character ID: ${info.CharacterId}, Name: ${characterName} Lv. ${info.Level} (${characterRarity})`);
                    });
                }
            });
        })
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