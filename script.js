const characterNames = {
    1: 'Monica',
    2: 'Illya',
    3: 'Iris',
    4: 'Loki',
    5: 'Soltina',
    6: 'Amleth',
    7: 'Fenrir',
    8: 'Florence',
    9: 'Sonya',
    10: 'Moddey',
    11: 'Charlotte',
    12: 'Arianrhod',
    13: 'Theodora',
    14: 'Petra',
    15: 'Sabrina',
    16: 'Freesia',
    17: 'Amour',
    18: 'Rean',
    19: 'Belle',
    20: 'Dian',
    21: 'Shizu',
    22: 'Zara',
    23: 'Rosalie',
    24: 'Libra',
    25: 'Ivy',
    26: 'Merlyn',
    27: 'Cordie',
    28: 'Nina',
    29: 'Mertillier',
    30: 'Luke',
    31: 'Garmr',
    32: 'Skuld',
    33: 'Cherna',
    34: 'Soteira',
    35: 'Mimi',
    36: 'Tropon',
    37: 'Hathor',
    38: 'Olivia',
    39: 'Primavera',
    40: 'Carol',
    41: '[The Witch of Mourning Flowers] Natasha',
    42: '[The Witch of Sacred Swords] Fortina',
    43: '[The Witch of Wailing Lightning] Cerberus',
    44: '[The Witch of Torrential Sorrow] Rusalka',
    45: '[The Witch of Longinus] Elfriede',
    46: '[The Witch of Snowy Illusions] Lunalynn',
    47: '[The Witch of Conflagration] Valeriede',
    48: '[The Witch of Rust] A.A.',
    49: '[The Witch of Fallen Crystals] Ophelia',
    50: '[The Witch of Lost Souls] Armstrong',
    51: 'Sophia',
    52: 'Sivi',
    53: 'Veela',
    54: 'Chiffon',
    55: 'Lea',
    56: 'Claudia',
    57: 'Stella',
    58: 'Artie',
    59: 'Eir',
    60: 'Fia',
    61: '[The Witch of God\'s Curse] Illya',
    62: 'Priscilla',
    63: '[The Witch of Justice] Paladea',
    64: 'Gil\'uial',
    65: 'Aine',
    66: '[Attendant Tainted in Black] Iris',
    67: 'Richesse',
    68: 'Fenny',
    69: '[The Witch of Dreams] Kaguya',
    70: '[Soldier of the Summer Breeze] Sabrina',
    71: '[Gravekeeper\'s Summer Holiday] Moddey',
    72: '[Summer\'s Reverb] Cordie',
    73: '[Holy Night\'s Gift] Amour',
    74: '[Holy Night\'s Prayer] Tropon',
    75: 'Morgana',
    76: 'Yuni',
    77: 'Minasumari',
    78: 'Asahi',
    79: 'Serruria',
    80: 'Milla',
    81: 'Tama',
    82: 'Alexandra',
    83: '',
    84: 'Liselotte',
    85: 'Matilda',
    86: '',
    87: '',
    88: '[Apostle of Caritas] Rosalie',
    89: '',
    90: '',
    91: '',
    92: '',
    93: '',
    94: '',
    95: '[Little Big Adventure] Nina',
    96: '[A Midsummer Day\'s Dream] Amleth'
};

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
// const selectedCharactersDiv = document.getElementById('selectedCharacters');
let click = 0;

Object.entries(characterNames).forEach(([id, name]) => {
    if (name) {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = name;
        dropdown.appendChild(option);

        
        option.addEventListener('click', () => {
            click++;
            console.log('Click:', click);
        });
    }
});

dropdown.addEventListener('change', () => {
    // updateSelectedCharacterDisplay();
    const temp = [];
    const selectedOptions = Array.from(dropdown.selectedOptions);
    const selectedCharacterIds = selectedOptions.map(option => parseInt(option.value));

    for (let i = 0; i < click; i++) {
        temp.push(selectedCharacterIds.at(0));
    }

    // selectedCharactersDiv.innerHTML = `<strong>Selected Characters:</strong> ${selectedCharacterNames.join(', ')}`;
    console.log('Selected character IDs:', selectedCharacterIds);
    console.log('Temp:', temp);
});

document.getElementById('getTeam').addEventListener('click', async () => {
    const selectedOptions = Array.from(dropdown.selectedOptions);
    const selectedCharacterIds = selectedOptions.map(option => parseInt(option.value));

    if (selectedCharacterIds.length === 0) {
        alert('Please select at least one character');
        return;
    }

    try {
        const response = await fetch('https://api.mentemori.icu/wg/24/legend/latest');
        if (!response.ok) {
            throw new Error(`HTTP error, status = ${response.status}`);
        }
        const data = await response.json();

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
        data.data.forEach(player => {
            const characterIds = player.UserCharacterInfoList.map(characterInfo => characterInfo.CharacterId);
            if (selectedCharacterIds.every(id => characterIds.includes(id))) {
                console.log(player.PlayerName);
                player.UserCharacterInfoList.forEach(info => {
                    const characterName = characterNames[info.CharacterId] || 'Unknown Character';
                    const characterRarity = rarity[info.RarityFlags] || 'Unknown Rarity';
                    console.log(`Character ID: ${info.CharacterId}, Name: ${characterName} Lv. ${info.Level} (${characterRarity})`);
                });
            }
        });

    } catch (error) {
        console.error('Error fetching team:', error);
    }
})