let currentSkin = '';
let characterUpgradeLevel = 0;
let priceData = {};
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    if (!window.location.pathname.includes('/mobile')) {
        window.location.href = '/mobile';
    }
} else {
    if (window.location.pathname.includes('/mobile')) {
        window.location.href = '/';
    }
}

const basePath = window.location.pathname.includes('/mobile/') ? '../' : './';

const items = [
    {
        imageSrc: `${basePath}imgs/face/netri.png`,
        stats: { deff: 2, krit: 25 },
        upg: 'deff',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/head/nimbdori.png`,
        stats: { deff: 2, damage: 1, krit: 1, hpmax: 10, hpmin: 1 },
        upg: 'hpmin',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/face/maskinvisible.png`,
        stats: { deff: 0, oglysh: 3 },
        upg: 'deff',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/shoulder/magshar2.png`,
        stats: { deff: 2, damage: 1, krit: 10, armourmax: 25 },
        upg: 'deff',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/head/enderkyb.png`,
        stats: { damage: 1, krit: 10, oglysh: 1 },
        upg: 'krit',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/shoulder/energoshar.png`,
        stats: { deff: 4, damage: 4, krit: 14, hpmax: 5, armourmax: 27, neoglysh: 10 },
        upg: 'deff',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/case/enegrochem.png`,
        stats: { damage: 3, oglysh: 13, neoglysh: 4 },
        upg: '',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/case/chem.png`,
        stats: { oglysh: 6 },
        upg: '',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/armour/bronik.png`,
        stats: { deff: 2, krit: 1, armourmax: 0 },
        upg: 'armour',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/armour/genbronik.png`,
        stats: { deff: 2, damage: 2, krit: 1, armourmax: 35 },
        upg: 'armour',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/hand/duff.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/hand/fraps.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'damage',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/head/deadinside.png`,
        stats: { damage: 1, krit: 10, oglysh: 1 },
        upg: 'krit',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/spine/tor.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/spine/hammervoyda.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/spine/rbt.png`,
        stats: { deff: 4 },
        upg: 'deff',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/spine/energoshield.png`,
        stats: { deff: 4, hpmax: 10, opyan: 2 },
        upg: 'deff',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/shoulder/delorean.png`,
        stats: { deff: 0, krit: 10, armourmax: 20, oglysh: 4 },
        upg: 'deff',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/shoulder/pexpress.png`,
        stats: { deff: 0, krit: 10, armourmax: 20, oglysh: 4 },
        upg: 'deff',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/breast/mahi.png`,
        stats: { deff: 2, damage: 1, krit: 10, armourmax: 25 },
        upg: 'damage',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/breast/energomahi.png`,
        stats: { deff: 4, damage: 2, krit: 12, armourmax: 25 },
        upg: 'damage',
        yellow: { damage: 2, hpmax: 5 }
    },
    {
        imageSrc: `${basePath}imgs/head/bad.png`,
        stats: { krit: 10 },
        upg: 'krit',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/head/ironman.png`,
        stats: { krit: 2 },
        upg: 'krit',
        yellow: {}
    },
	{
        imageSrc: `${basePath}imgs/head/robosanta.png`,
        stats: { krit: 2 },
        upg: 'krit',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/head/pepe.png`,
        stats: { krit: 1 },
        upg: 'krit',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/head/tikva.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'hpmin',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/hand/azinot.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'damage',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/breast/magsphere.png`,
        stats: { deff: 2, krit: 1 },
        upg: 'krit',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/face/sphereoverhead.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'deff',
        yellow: {}
    },
    {
        imageSrc: `${basePath}imgs/head/jetpack.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'hpmin',
        yellow: {}
    },
];

var RuTypes = {
    deff: 'Защита',
    hpmin: 'HP в мин.',
    damage: 'Урон',
    krit: 'Удача',
    hpmax: 'Макс. HP',
    armourmax: 'Макс. Брони',
    oglysh: 'Шанс оглушения',
    opyan: 'Шанс опьянения',
    neoglysh: 'Шанс избежать оглушения',
    otrazh: 'Отражение урона'
};

var RuSlots = {
    head: 'Голова',
    face: 'Лицо',
    hand: 'Рука',
    breast: 'Грудь',
    shoulder: 'Плечо',
    spine: 'Спина',
    armour: 'Бронежилет',
    case: 'Чемодан'
}

const characters = {
    ct: {
        extra: { deff : 2, damage: 2, otrazh: 3 },
        zatochkaBuffs: getDefaultZatochkaBuffs()
    },
    homelander: {
        extra: { deff: 0 },
        zatochkaBuffs: getDefaultZatochkaBuffs()
    },
    rilay: {
        extra: { hpmax: 5, damage: 2, oglysh: 10 },
        zatochkaBuffs: getDefaultZatochkaBuffs()
    },
    superman: {
        extra: { deff: 2, damage: 2, otrazh: 3 },
        zatochkaBuffs: getDefaultZatochkaBuffs()
    },
    xikkaistoka: {
        extra: { deff: 2, damage: 2, otrazh: 3 },
        zatochkaBuffs: getDefaultZatochkaBuffs()
    }
};

function getCharacterBuff() {
    const character = characters[currentSkin] || { extra: {}, zatochkaBuffs: {} };
    let buffed = {};

    for (let stat in character.extra) {
        buffed[stat] = (buffed[stat] || 0) + character.extra[stat];
    }

    const zatochkaStats = character.zatochkaBuffs[characterUpgradeLevel] || {};
    for (let stat in zatochkaStats) {
        buffed[stat] = (buffed[stat] || 0) + zatochkaStats[stat];
    }

    return buffed;
}

function updateCharacterImage() {
    let randomElement;

    do {
        randomElement = getRandomElement(myArray);
    } while (randomElement === currentSkin);

    currentSkin = randomElement;
    $('#character-image').attr('src', `${basePath}imgs/characters/${randomElement}.png`);
    updateStats();
}

function calculateItemPrice(imgElement) {
    const src = imgElement.src;
    const match = src.match(/\/([^\/]+)\.png$/);
    const name = match ? match[1] : null;
    if (!name || !priceData[name]) return 0;

    const gridItem = imgElement.closest('.grid-item');
    const upgradeSpan = gridItem.querySelector('span');
    const upgradeLevel = upgradeSpan ? parseInt(upgradeSpan.textContent.replace('+', '')) : 0;

    let key = `+${upgradeLevel}`;
    let nashivka = imgElement.dataset.nashivka ? JSON.parse(imgElement.dataset.nashivka) : null;

    if (nashivka) {
        for (let stat in nashivka) {
            key += `_nashivka_${stat}_${nashivka[stat]}`;
        }
    }

    return priceData[name][key] ?? priceData[name]['base'] ?? 0;
}

function calculateTotalPrice() {
    let total = 0;
    document.querySelectorAll('.grid-item img.main').forEach(img => {
        total += calculateItemPrice(img);
    });
    return total;
}

function getDefaultZatochkaBuffs() {
    return {
        1: { hpmax: 1, armourmax: 1 },
        2: { hpmax: 2, armourmax: 2 },
        3: { deff: 2, hpmin: 1, damage: 1, krit: 1, hpmax: 3, armourmax: 3 },
        4: { deff: 2, hpmin: 1, damage: 1, krit: 1, hpmax: 4, armourmax: 4 },
        5: { deff: 4, hpmin: 2, damage: 2, krit: 2, hpmax: 5, armourmax: 5 },
        6: { deff: 4, hpmin: 2, damage: 2, krit: 2, hpmax: 6, armourmax: 6 },
        7: { deff: 4, hpmin: 2, damage: 2, krit: 2, hpmax: 7, armourmax: 7 },
        8: { deff: 6, hpmin: 3, damage: 3, krit: 3, hpmax: 8, armourmax: 8 },
        9: { deff: 6, hpmin: 3, damage: 3, krit: 3, hpmax: 9, armourmax: 9 },
        10: { deff: 8, hpmin: 4, damage: 4, krit: 4, hpmax: 10, armourmax: 10 },
        11: { deff: 8, hpmin: 4, damage: 4, krit: 4, hpmax: 11, armourmax: 11 },
        12: { deff: 8, hpmin: 4, damage: 4, krit: 4, hpmax: 12, armourmax: 12 }
    };
}

function getSlotNameFromItem(item) {
    const match = item.getAttribute('src').match(/\.\/imgs\/([^/]+)\//);
    return match ? match[1] : null;
}

class ItemPlacer {
    constructor() {

        this.containers = document.querySelectorAll('.mini-container');
    }

    getSlotNameFromSrc(src) {

        const match = src.match(/\.\/imgs\/([^/]+)\//);
        return match ? match[1] : null;
    }

    createItemElement(imageSrc, stats, upg, yellow) {

        const img = document.createElement('img');
        img.src = imageSrc;
        img.draggable = true;
        img.className = 'main'
        img.setAttribute('data-stats', JSON.stringify(stats));
        img.setAttribute('data-upg', upg);
        img.setAttribute('data-yellow', JSON.stringify(yellow));

        return img;
    }

    placeItem(imageSrc, stats, upg, yellow) {

        const slotName = this.getSlotNameFromSrc(imageSrc);
        if (!slotName) {
            return;
        }


        const container = Array.from(this.containers).find(
            (el) => el.getAttribute('slot-name') === slotName
        );

        if (container) {

            const img = this.createItemElement(imageSrc, stats, upg, yellow);
            container.appendChild(img);
        }
    }
}

function saveSet(setName) {
    if (!setName) return;
    
    const setData = {
        skin: currentSkin,
        upgradeLevel: characterUpgradeLevel,
        items: [],
        timestamp: new Date().toISOString()
    };

    // Собираем данные о всех предметах
    document.querySelectorAll('.grid-item').forEach(item => {
        const img = item.querySelector('img.main');
        if (!img) return;

        const slot = item.id;
        const upgrade = item.querySelector('span')?.textContent.replace('+', '') || '0';
        const nashivka = img.dataset.nashivka || '{}';
        const yellow = img.dataset.yellow || '{}';
        const src = img.src.split('/').pop().replace('.png', '');

        setData.items.push({
            slot,
            item: src,
            upgrade: parseInt(upgrade),
            nashivka: JSON.parse(nashivka),
            yellow: JSON.parse(yellow)
        });
    });

    // Сохраняем в файл
    const blob = new Blob([JSON.stringify(setData, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${SETS_DIR}${setName.replace(/[^a-z0-9]/gi, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

async function loadSet(file) {  // Добавляем async перед function
    try {
        const data = await file.text();
        const setData = JSON.parse(data);

        // Загружаем основные параметры
        currentSkin = setData.skin;
        characterUpgradeLevel = setData.upgradeLevel || 0;
        $('#character-image').attr('src', `${basePath}imgs/characters/${currentSkin}.png`);
        $('#character-upgrade-level').val(characterUpgradeLevel);

        // Очищаем все слоты
        document.querySelectorAll('.grid-item img.main').forEach(img => img.remove());

        // Загружаем предметы
        setData.items.forEach(itemData => {
            const slotElement = document.querySelector(`.grid-item#${itemData.slot}`);
            if (!slotElement) return;

            // Создаем элемент предмета
            const img = document.createElement('img');
            img.src = `${basePath}imgs/${itemData.slot}/${itemData.item}.png`;
            img.className = 'main';
            img.dataset.stats = '{}';
            img.dataset.upg = '';
            img.dataset.yellow = JSON.stringify(itemData.yellow || {});
            img.dataset.nashivka = JSON.stringify(itemData.nashivka || {});

            // Добавляем в слот
            slotElement.appendChild(img);

            // Устанавливаем уровень заточки
            const upgradeSpan = slotElement.querySelector('span');
            if (upgradeSpan) {
                upgradeSpan.textContent = `+${itemData.upgrade || 0}`;
            }
        });

        updateStats();
        reenableEventHandlers();
        alert(`Сет "${file.name.replace('.json', '')}" успешно загружен!`);
    } catch (error) {
        console.error('Ошибка загрузки сета:', error);
        alert('Ошибка загрузки сета!');
    }
}

const placer = new ItemPlacer();

items.forEach(item => {
    placer.placeItem(item.imageSrc, item.stats, item.upg, item.yellow);
});

function reenableEventHandlers() {
    document.querySelectorAll('.grid-item img.main').forEach(img => {
        if (!isMobileDevice()) {
            img.setAttribute('draggable', true);
            img.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('slot-name', img.parentElement.getAttribute('slot-name'));
                e.dataTransfer.setData('img-html', img.outerHTML);
                img.classList.add('dragging');
            });

            img.addEventListener('dragend', () => {
                img.classList.remove('dragging');
            });
        } else {
            img.addEventListener('click', function () {
                addAccs(img.parentElement.getAttribute('slot-name'), img.outerHTML)
            });
        }
    });
}

function getMultiplier(type) {
    switch (type) {
        case 'deff':
            return 2;
        case 'armour':
            return 5;
        default:
            return 1;
    }
}

function updateStats() {
    const gridItems = document.querySelectorAll('.grid-item');
    var deff = 0;
    var hpmin = 0;
    var damage = 0;
    var krit = 0;
    var hpmax = 0;
    var armourmax = 0;
    var oglysh = 0;
    var opyan = 0;
    var neoglysh = 0;
    var otrazh = 0;
	var totalPrice = 0;

    gridItems.forEach(item => {
        const img = item.querySelector('img.main');
        if (img) {
            const stats = JSON.parse(img.dataset.stats);
            const type = img.dataset.upg;
            const yellow_stats = JSON.parse(img.dataset.yellow);
            let nashivka = img.dataset.nashivka ? JSON.parse(img.dataset.nashivka) : {};

            const upgrader = getMultiplier(type)
            if (type != '') {
                const zatochkaElement = item.querySelector('span');
                const zatochka = parseInt(zatochkaElement.textContent.trim(), 10);
				
				totalPrice += calculateItemPrice(img, zatochka, nashivka);

                if (type == 'armour') {
                    stats.armourmax += zatochka * upgrader;
                } else {
                    if (zatochka >= 4) {
                        stats[type] += (zatochka - 3) * upgrader;
                        if (zatochka == 13) {
                            stats.armourmax = (stats.armourmax || 0) + 9;
                            stats.hpmax = (stats.hpmax || 0) + 4;
                        }
						if (zatochka == 14) {
                            stats.otrazh = (stats.otrazh || 0) + 1;
                            stats.hpmin = (stats.hpmin || 0) + 3;
                            stats.armourmax = (stats.armourmax || 0) + 14;
                            stats.hpmax = (stats.hpmax || 0) + 4;
                        }
                    }
                }
            }

            deff += (nashivka.deff || 0) + (yellow_stats.deff || 0) + (stats.deff || 0);
            hpmin += (yellow_stats.hpmin || 0) + (stats.hpmin || 0);
            damage += (nashivka.damage || 0) + (yellow_stats.damage || 0) + (stats.damage || 0);
            krit += (nashivka.krit || 0) + (yellow_stats.krit || 0) + (stats.krit || 0);
            hpmax += (yellow_stats.hpmax || 0) + (stats.hpmax || 0);
            armourmax += (yellow_stats.armourmax || 0) + (stats.armourmax || 0);
            oglysh += (yellow_stats.oglysh || 0) + (stats.oglysh || 0);
            opyan += (yellow_stats.opyan || 0) + (stats.opyan || 0);
            neoglysh += (nashivka.neoglysh || 0) + (yellow_stats.neoglysh || 0) + (stats.neoglysh || 0);
            otrazh += (nashivka.otrazh || 0) + (yellow_stats.otrazh || 0) + (stats.otrazh || 0);
			
        }
    });

    if (typeof getCharacterBuff === "function") {
        const characterBuff = getCharacterBuff();
        deff += characterBuff.deff || 0;
        damage += characterBuff.damage || 0;
        hpmax += characterBuff.hpmax || 0;
        hpmin += characterBuff.hpmin || 0;
        krit += characterBuff.krit || 0;
        armourmax += characterBuff.armourmax || 0;
        oglysh += characterBuff.oglysh || 0;
        opyan += characterBuff.opyan || 0;
        neoglysh += characterBuff.neoglysh || 0;
        otrazh += characterBuff.otrazh || 0;
    }

    if (armourmax >= 160) {
        armourmax = 160;
    }
    if (deff >= 90) {
        deff = 90;
    }

    $('span#deff').text(`[-${deff}% урона]`);
    $('span#hpmin').text(`[${hpmin} HP в мин.]`);
    $('span#damage').text(`[+${damage} урона]`);
    $('span#krit').text(`[шанс ${krit}% крит.урона]`);
    $('span#hpmax').text(`[+${hpmax} макс. HP]`);
    $('span#armourmax').text(`[+${armourmax} макс. Брони]`);
    $('span#oglysh').text(`[+${oglysh}%]`);
    $('span#opyan').text(`[+${opyan}%]`);
    $('span#neoglysh').text(`[+${neoglysh}%]`);
    $('span#otrazh').text(`[-${otrazh}%]`);
	
	const priceDisplay = document.getElementById('total-price');
    if (priceDisplay) {
        priceDisplay.textContent = totalPrice.toLocaleString();
    }
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    const tooltip = item.querySelector('.tooltip');
    const ruName = item.getAttribute('ru-name');

    tooltip.innerHTML = ruName;

    item.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});


document.querySelectorAll('.mini-container img').forEach(img => {
    if (!isMobileDevice()) {
        img.setAttribute('draggable', true);
        img.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('slot-name', img.parentElement.getAttribute('slot-name'));
            e.dataTransfer.setData('img-html', img.outerHTML);
            img.classList.add('dragging');
        });

        img.addEventListener('dragend', () => {
            img.classList.remove('dragging');
        });
    } else {
        img.addEventListener('click', function () {
            addAccs(img.parentElement.getAttribute('slot-name'), img.outerHTML)
        })
    }

});

var current_item;
var itemForNashivka;

function addAccs(slot_name, imgHtml) {
    var item = $(`.grid-item#${slot_name}`).get(0);
    if (imgHtml) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = imgHtml.trim();
        const imgElement = tempDiv.querySelector('img.main');
        if (slot_name == item.getAttribute("id")) {
            if (imgElement) {
                const existingImg = item.querySelector('img.main');
                if (existingImg) {
                    existingImg.outerHTML = imgHtml;
                    $(item).find('img.default-accs').remove();
                } else {
                    item.appendChild(imgElement);
                }
                current_item = $(item).find('img')[0]
                current_item.className = 'main'
                $(item).find('.tooltip').text($(item).attr('ru-name'))
                const slot = getSlotNameFromItem(current_item)
                showPereshiv(slot)
            }
        }
        updateStats();
    }

    const img = item.querySelector('img');
    if (img) {
        img.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('img-html', img.outerHTML);
            e.dataTransfer.effectAllowed = "move";
        });
    }
}

var temp_info = {};

document.querySelectorAll('.grid-item').forEach(item => {
    if (isMobileDevice()) {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            temp_info.html = img.outerHTML
            temp_info.dom = img
            youWannaDelete()
        })
    }
    item.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    item.addEventListener('drop', (e) => {
        e.preventDefault();
        const imgHtml = e.dataTransfer.getData('img-html');
        const slot_name = e.dataTransfer.getData('slot-name');

        if (imgHtml) {

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = imgHtml.trim();
            const imgElement = tempDiv.querySelector('img.main');
            if (slot_name == item.getAttribute("id")) {
                if (imgElement) {
                    const existingImg = item.querySelector('img.main');
                    if (existingImg) {
                        existingImg.outerHTML = imgHtml;
                        $(item).find('img.default-accs').remove();
                    } else {
                        item.appendChild(imgElement);
                    }
                    current_item = $(item).find('img')[0]
                    current_item.className = 'main'
                    $(item).find('.tooltip').text($(item).attr('ru-name'))
                    const slot = getSlotNameFromItem(current_item)
                    showPereshiv(slot)
                }
            }
            updateStats();
        }

        const img = item.querySelector('img');
        if (img) {
            img.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('img-html', img.outerHTML);
                e.dataTransfer.effectAllowed = "move";
            });
        }
    });
});

function showPereshiv(slot) {
    var items = [];
    switch (slot) {
        case 'head':
            items = [
                {
                    name: 'nimbgearvlast',
                    yellow: { deff: 3, damage: 3, krit: 1, hpmax: 19 }
                },
                {
                    name: 'tango',
                    yellow: { deff: 2, damage: 1, krit: 1, hpmax: 10 }
                },
                {
                    name: 'shlyapa4',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'shlyapa3',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'shlyapa2',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'shlyapa1',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'tact',
                    yellow: { deff: 2, armourmax: 10 }
                },
				{
					name: 'nimbdori',
					yellow: { deff: 2, damage: 1, krit: 1, hpmax: 10 }
				}
            ]
            break;
        case 'face':
            items = [
                {
                    name: 'cherep',
                    yellow: { damage: 2, armourmax: 10 }
                },
                {
                    name: 'frontman',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'kvadrat',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'krug',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'treugolnik',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'loki',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'wrench',
                    yellow: { deff: 1, hpmax: 5 }
                },
            ]
            break;
        case 'hand':
            items = [
                {
                    name: 'bumblebee',
                    yellow: { deff: 1, damage: 1 }
                },
                {
                    name: 'energowatch',
                    yellow: { deff: 2, damage: 2, hpmax: 5, armourmax: 5, otrazh: 6 }
                },
                {
                    name: 'watch1',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'watch2',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'watch3',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'watch4',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'watch5',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'watch6',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'watch7',
                    yellow: { damage: 1, hpmax: 5 }
                }
            ]
            break;
        case 'breast':
            items = [
                {
                    name: 'ilum',
                    yellow: { deff: 1, damage: 1 }
                }
            ]
            break;
        case 'shoulder':
            items = [
                {
                    name: 'arkanaio',
                    yellow: { deff: 2, damage: 1, krit: 1, hpmax: 10 }
                }
            ]
            break;
        case 'spine':
            items = [
                {
                    name: 'bloodywings',
                    yellow: { deff: 2, damage: 2 }
                },
                {
                    name: 'spiderlegs',
                    yellow: { deff: 1, damage: 1 }
                },
                {
                    name: 'battlefury',
                    yellow: { deff: 5, krit: 5, hpmax: 5 }
                },
                {
                    name: 'desolator',
                    yellow: { damage: 2, krit: 4, neoglysh: 3, otrazh: 1 }
                },
                {
                    name: 'firepickaxe',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'creeper',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'aegis',
                    yellow: { damage: 2, hpmax: 8, armourmax: 8, otrazh: 1 }
                },
                {
                    name: 'trax',
                    yellow: { damage: 2, hpmax: 7, armourmax: 7, otrazh: 1 }
                },
            ]
            break;
        case 'armour':
            items = []
            break;
        default:
            break;
    }
    if (items.length != 0) {
        var modalAccs = document.querySelector('.modal-accs');

        var tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        modalAccs.appendChild(tooltip);
        items.forEach(item => {
            var img = document.createElement('img');
            img.src = `${basePath}imgs/${slot}/${item.name}.png`;
            img.setAttribute('data-yellow', JSON.stringify(item.yellow));
            img.style.position = 'relative';

            img.addEventListener('click', function () {
                current_item.dataset.yellow = this.getAttribute('data-yellow');
                var img_temp = document.createElement('img');
                img_temp.src = current_item.src;
                img_temp.className = "default-accs"
                current_item.src = `${basePath}imgs/${slot}/${item.name}.png`;
                $(current_item).closest('.grid-item').append(img_temp)
                modalOverlay.style.display = 'none';
                tooltip.style.display = 'none';
                updateStats();

                while (modalAccs.firstChild) {
                    modalAccs.removeChild(modalAccs.firstChild);
                }
            });

            img.addEventListener('mouseenter', function (event) {
                var yellowData = JSON.parse(this.getAttribute('data-yellow'));


                var tooltipText = '';
                for (var key in yellowData) {
                    if (RuTypes[key]) {
                        tooltipText += `${RuTypes[key]}: ${yellowData[key]}<br>`;
                    }
                }
                tooltip.innerHTML = tooltipText;
                tooltip.style.display = 'block';
            });

            img.addEventListener('mouseleave', function () {
                tooltip.style.display = 'none';
            });

            modalAccs.appendChild(img);
        });
        modalOverlay.style.display = 'flex';
    }
}

if (isMobileDevice()) {
    const modalDelete = document.getElementById('modalDelete');
    if (modalDelete) {
        const yesDeleteButton = document.getElementById('yesDelete');
        const noDeleteButton = document.getElementById('noDelete');

        yesDeleteButton.addEventListener('click', () => {
            modalDelete.style.display = 'none';
            reallyDelete(temp_info.html);
        });

        noDeleteButton.addEventListener('click', () => {
            modalDelete.style.display = 'none';
        });
    }
} else {
    const trash = document.querySelector('.trash');
    const trashTooltip = document.querySelector('#trashtooltip');

    if (trash && trashTooltip) {
        trash.addEventListener('mouseover', () => {
            trashTooltip.style.display = 'block';
        });

        trash.addEventListener('mouseout', () => {
            trashTooltip.style.display = 'none';
        });

        trash.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        trash.addEventListener('drop', (e) => {
            e.preventDefault();
            const imgHtml = e.dataTransfer.getData('img-html');

            if (imgHtml) {
                document.querySelectorAll('.grid-item img').forEach(img => {
                    if (img.outerHTML === imgHtml) {
                        var gridItem = $(img).closest('.grid-item');
                        $(gridItem).find('img').remove();
                        $(gridItem).find('.tooltip').text($(gridItem).attr('ru-name'));
                        $(gridItem).find('.tooltip').css('display', 'none');
                    }
                });
            }
            updateStats();
        });
    }
}

function youWannaDelete() {
    const modalDelete = document.getElementById('modalDelete');
    if (!modalDelete) return; // защита
    modalDelete.style.display = 'block';
    const img = temp_info.dom;
    const gridItem = $(img).closest('.grid-item');
    $('#modalDelete .modal h2').text(`Вы уверены что хотите удалить аксессуар из слота ${RuSlots[gridItem.attr('id')]}?`);
}

function reallyDelete(imgHtml) {
    if (imgHtml) {
        document.querySelectorAll('.grid-item img').forEach(img => {
            if (img.outerHTML === imgHtml) {
                var gridItem = $(img).closest('.grid-item');
                $(gridItem).find('img').remove();
                $(gridItem).find('.tooltip').text($(gridItem).attr('ru-name'));
                $(gridItem).find('.tooltip').css('display', 'none');
            }
        });
    }
    updateStats();
}

function getRandomElement(arr) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }
    const randomIndex = window.crypto.getRandomValues(new Uint32Array(1))[0] % arr.length;

    return arr[randomIndex];
}

const myArray = [
    'ct',
    'homelander',
    'rilay',
    'superman',
    'xikkaistoka'
]

$(document).ready(function () {
    let previousElement = null;

    function updateCharacterImage() {
        let randomElement;

        do {
            randomElement = getRandomElement(myArray);
        } while (randomElement === previousElement);

        previousElement = randomElement;
        currentSkin = randomElement;
        $('#character-image').attr('src', `${basePath}imgs/characters/${randomElement}.png`);
        updateStats();
    }

    updateCharacterImage();

    var character = $('#character')
    var tooltip = character.find('.tooltip');
    
    if (!isMobileDevice()) {
        character.on('mouseover', function () {
            tooltip.show();
        });
        
        character.on('mouseout', function () {
            tooltip.hide();
        });
    }

    $('#character-upgrade-level').on('change', function() {
        characterUpgradeLevel = parseInt($(this).val(), 10);
        updateStats();
    });
	
	$('#saveSetBtn').on('click', () => {
		$('#saveModal').show();
		$('#saveSetName').focus();
	});

	$('#confirmSaveBtn').on('click', () => {
		const setName = $('#saveSetName').val().trim();
		if (setName) {
			saveSet(setName);
			$('#saveModal').hide();
			$('#saveSetName').val('');
		} else {
			alert('Введите название сета!');
		}
	});

	$('#cancelSaveBtn').on('click', () => {
		$('#saveModal').hide();
		$('#saveSetName').val('');
	});

	// Загрузка сета
	$('#loadSetBtn').on('click', () => {
		$('#loadSetInput').click();
	});

	$('#loadSetInput').on('change', async function(e) {
		if (e.target.files.length) {
			await loadSet(e.target.files[0]);
			$(this).val(''); // Сброс значения input
		}
	});

    $('.btn.plus').on('click', function (e) {
        if (isMobileDevice()) {
            e.stopPropagation();
        }

        let span = $(this).closest('.grid-text').find('span');
        let currentValue = parseInt(span.text().replace('+', ''));
        if (currentValue < 14) {
            span.text(`+${currentValue + 1}`);
            updateStats();
        }
    });

    $('.btn.minus').on('click', function (e) {
        if (isMobileDevice()) {
            e.stopPropagation();
        }

        let span = $(this).closest('.grid-text').find('span');
        let currentValue = parseInt(span.text().replace('+', ''));
        if (currentValue > 0) {
            span.text(`+${currentValue - 1}`);
            updateStats();
        }
    });

    $('.btn.plus-character').on('click', function (e) {
        if (isMobileDevice()) {
            e.stopPropagation();
        }
    
        if (characterUpgradeLevel < 12) {
            characterUpgradeLevel++;
            $('#character-zatoch-value').text(`+${characterUpgradeLevel}`);
            updateStats();
        }
    });
    
    $('.btn.minus-character').on('click', function (e) {
        if (isMobileDevice()) {
            e.stopPropagation();
        }
    
        if (characterUpgradeLevel > 0) {
            characterUpgradeLevel--;
            $('#character-zatoch-value').text(`+${characterUpgradeLevel}`);
            updateStats();
        }
    });

    $('.btn.nashivka').on('click', function (e) {
        if (isMobileDevice()) {
            e.stopPropagation();
        }

        var $gridItem = $(this).closest('.grid-item');
        var $buttonContainer = $('<div class="button-container"></div>');
        var buttons = [
            { text: 'ДЕФФ', type: 'deff', value: 6 },
            { text: 'УРОН', type: 'damage', value: 3 },
            { text: 'КРИТ', type: 'krit', value: 3 },
            { text: 'ОТРАЖЕНИЕ', type: 'otrazh', value: 3 }
        ];
        buttons.forEach(function (button) {
            var $button = $('<button class="btn">' + button.text + '</button>');
            $button.on('click', function (e) {
                if (isMobileDevice()) {
                    e.stopPropagation();
                }
                var item = $gridItem.find('img.main')[0]
                var tooltip = $gridItem.find('.tooltip')[0]
                $($gridItem).find('.tooltip').text($($gridItem).attr('ru-name'))
                if (item != undefined) {
                    item.dataset.nashivka = `{"${button.type}": ${button.value}}`
                    if (item.dataset.nashivka != undefined) {
                        var nashivkaType = button.type;
                        var ruName = RuTypes[nashivkaType];

                        if (ruName) {
                            tooltip.innerHTML = `${tooltip.innerHTML}<br>Нашивка: ${ruName}`;
                        }
                    }
                    updateStats()
                }
                $buttonContainer.remove();
            });
            $buttonContainer.append($button);
        });

        $gridItem.append($buttonContainer);
    });

    $('.btn.nashivkabronik').on('click', function (e) {
        if (isMobileDevice()) {
            e.stopPropagation();
        }

        var $gridItem = $(this).closest('.grid-item');
        var item = $gridItem.find('img.main')[0]
        var tooltip = $gridItem.find('.tooltip')[0]
        $($gridItem).find('.tooltip').text($($gridItem).attr('ru-name'))
        if (item != undefined) {
            item.dataset.nashivka = `{"neoglysh": 20}`
            
            if (item.dataset.nashivka != undefined) {
                tooltip.innerHTML = `${tooltip.innerHTML}<br>Нашивка: Есть`;
            }
            updateStats()
        }
    });

    const closeModalButton = document.getElementById('closeModal');
    const testButton = document.getElementById('addYellowStats');
    const modalOverlay = document.getElementById('modalOverlay');

    if (isMobileDevice()) {
        const modalDelete = document.getElementById('modalDelete');
    
        const yesDeleteButton = document.getElementById('yesDelete');
        const noDeleteButton = document.getElementById('noDelete');
        
        yesDeleteButton.addEventListener('click', () => {
            modalDelete.style.display = 'none';
            reallyDelete(temp_info.html)
        });
        
        noDeleteButton.addEventListener('click', () => {
            modalDelete.style.display = 'none';
        });
    }

    closeModalButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';

        var modalAccs = document.querySelector('.modal-accs');
        while (modalAccs.firstChild) {
            modalAccs.removeChild(modalAccs.firstChild);
        }
    });

    $('#character-select').on('click', function () {
        $('#character-list').toggle();
    });

    $('.character-option').on('click', function () {
        const skin = $(this).data('skin');
        currentSkin = skin;
        $('#character-image').attr('src', `${basePath}imgs/characters/${skin}.png`);
        $('#character-list').hide();
        updateStats();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('#character-select, #character-list').length) {
            $('#character-list').hide();
        }
    });
});
