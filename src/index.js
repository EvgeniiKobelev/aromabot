const Telegrambot = require("node-telegram-bot-api")
const helpers = require('./helpers')
const keyboard = require('./keyboard')
const kb = require('./keyboard-buttons')
const fs = require('fs')
const Agent = require('socks5-https-client/lib/Agent')
const token = '1201172454:AAFwJtyBvtEOllcux1MZF55XYZgU9fP-7Ak'

helpers.logStart()

const bot = new Telegrambot(token, {
    polling: true,
    request: {
        agentClass: Agent,
        agentOptions: {
            socksHost: '127.0.0.1',
            socksPort: '9150'
        }
    }
});

bot.on('message', (msg) => {
    console.log('Здравствуй ', msg.from.first_name)

    const chatId = helpers.getChatId(msg)
    
    switch (msg.text) {
        case kb.home.recipes:
            bot.sendMessage(chatId, 'На данный момент информации нет...')
            break
        case kb.home.aromadesign:
            bot.sendMessage(chatId, 'На данный момент информации нет...')
            break
        case kb.sets.collections:
            bot.sendMessage(chatId, 'На данный момент информации нет...')
            break
        case kb.home.aromarecipes:
            bot.sendMessage(chatId, '<a href="https://telegra.ph/Klubnichno-limonnoe-jogurtovoe-morozhenoe-s-ehfirnym-maslom-limona-05-31">Клубнично-лимонное йогуртовое мороженое с эфирным маслом лимона</a>', {
                parse_mode: 'HTML',
            })
            bot.sendMessage(chatId, '<a href="https://telegra.ph/Imbirnyj-puding-s-muskatnoj-grushej-05-31">Имбирный пудинг с мускатной грушей</a>', {
                parse_mode: 'HTML',
            })
            bot.sendMessage(chatId, '<a href="https://telegra.ph/Salat-s-apelsinom-listyami-salata-travami-syrom-feta-i-greckim-orehom-05-31">Салат с апельсином, листьями салата, травами, сыром фета и грецким орехом</a>', {
                parse_mode: 'HTML',
            })
            bot.sendMessage(chatId, '<a href="https://telegra.ph/Tryufeli-s-inzhirom-ehfirnym-maslom-imbirya-kakao-i-kokosovoj-struzhkoj-05-31">Трюфели с инжиром, эфирным маслом имбиря, какао и кокосовой стружкой</a>', {
                parse_mode: 'HTML',
            })
            break
        case kb.home.emocionaroma:
            bot.sendMessage(chatId, 'Загружаю  Эмоциональная ароматерапия...может занять больше времени')
            fs.readFile(__dirname + '/files/emocionaroma.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Эмоциональная ароматерапия'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.home.catalog:
            bot.sendMessage(chatId, 'Загружаю  Каталог...может занять больше времени')
            fs.readFile(__dirname + '/files/catalog.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Каталог'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.sets.leaderSets:
            bot.sendMessage(chatId, '<a href="https://www.doterra.com/RU/ru_RU/pl/leadership-kits">Лидерские наборы</a>', {
                parse_mode: 'HTML'
            })
            break
        case kb.additives.cellEnergy:
            bot.sendMessage(chatId, '<a href="https://www.doterra.com/RU/ru_RU/pl/supplements-specialized">Клеточная энергия и здоровье</a>', {
                parse_mode: 'HTML'
            })
            break
        case kb.materials.matforbuisness:
            bot.sendMessage(chatId, 'Загружаю  Материалы для бизнеса...может занять больше времени')
            bot.sendMessage(chatId, '<a href="https://www.doterra.com/RU/ru_RU/flyers">Бизнес от А до Я + Клуб основателей</a>', {
                parse_mode: 'HTML'
            })
            fs.readFile(__dirname + '/files/creatbussines.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Создавайте - Обзор бизнеса'
                })
            })
            fs.readFile(__dirname + '/files/launch-guide.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Начните свой бизнес'
                })
            })
            break
        case kb.materials.litproduction:
            bot.sendMessage(chatId, 'Загружаю  Литературу...может занять больше времени')
            fs.readFile(__dirname + '/files/live-guide.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Живите - Здоровый образ жизни'
                })
            })
            fs.readFile(__dirname + '/files/share-guide.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Делитесь - Презентация'
                })
            })
            fs.readFile(__dirname + '/files/healthy-simple.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Быть здоровым – Просто'
                })
            })
            fs.readFile(__dirname + '/files/natural-solutions.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Натуральные средства для здоровой, благополучной жизни.'
                })
            })
            break
        case kb.oils.accessory:
            bot.sendMessage(chatId, 'Загружаю  Аксессуары...')
            fs.readFile(__dirname + '/files/diffuz.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Аксессуары'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            }) 
            break
        case kb.home.video:
            bot.sendMessage(chatId, 'Загружаю  Видеоинструкции...')
            bot.sendMessage(chatId, 'https://www.doterra.com/RU/ru_RU/video-instructions')
            bot.sendMessage(chatId, 'Приятного просмотра!')
               
            break
        case kb.additives.kids:
            bot.sendMessage(chatId, 'Загружаю  ДОБАВКИ ДЛЯ ДЕТЕЙ...')
            fs.readFile(__dirname + '/files/kids.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'ДОБАВКИ ДЛЯ ДЕТЕЙ.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.home.price:
            bot.sendMessage(chatId, 'Загружаю  Прайс...')
            fs.readFile(__dirname + '/files/price.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Прайс.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.home.aromaTherapy:
            bot.sendMessage(chatId, 'Загружаю Ароматерапия для матери и ребенка...')
            fs.readFile(__dirname + '/files/aromateraphy.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Ароматерапия для матери и ребенка.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.additives.dolgozhitel:
            bot.sendMessage(chatId, 'Загружаю ДОЛГОЖИТЕЛЬ...')
            fs.readFile(__dirname + '/files/dolgozhitel.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'ДОЛГОЖИТЕЛЬ.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.care.spa:
            bot.sendMessage(chatId, 'Загружаю dōTERRA® СПА...')
            fs.readFile(__dirname + '/files/spa.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'dōTERRA® СПА.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.care.hair:
            bot.sendMessage(chatId, 'Загружаю УХОД ЗА ВОЛОСАМИ...')
            fs.readFile(__dirname + '/files/hair.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'УХОД ЗА ВОЛОСАМИ.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.care.face:
            bot.sendMessage(chatId, 'Загружаю УХОД ЗА КОЖЕЙ ЛИЦА...')
            fs.readFile(__dirname + '/files/face.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'УХОД ЗА КОЖЕЙ ЛИЦА.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.additives.terraGrins:
            bot.sendMessage(chatId, 'Загружаю ТЕРРА ГРИНС...')
            fs.readFile(__dirname + '/files/terragreens.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'ТЕРРА ГРИНС.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.additives.didgestZen:
            bot.sendMessage(chatId, 'Загружаю ДАЙДЖЕСТ ЗЕН...')
            fs.readFile(__dirname + '/files/didgestZen.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'ДАЙДЖЕСТ ЗЕН.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.additives.slimSessi:
            bot.sendMessage(chatId, 'Загружаю СТРОЙНЫЕ И ДЕРЗКИЕ...')
            fs.readFile(__dirname + '/files/slimsessi.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'СТРОЙНЫЕ И ДЕРЗКИЕ.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.additives.doterraWomen:
            bot.sendMessage(chatId, 'Загружаю dōТЕRRА® ДЛЯ ЖЕНЩИН...')
            fs.readFile(__dirname + '/files/doterraWomen.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'dōТЕRRА® ДЛЯ ЖЕНЩИН.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.oils.ongard:
            bot.sendMessage(chatId, 'Загружаю ON GUARD...')
            fs.readFile(__dirname + '/files/onguard.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'ON GUARD.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.oils.dipblu:
            bot.sendMessage(chatId, 'Загружаю DEEP BLUE...')
            fs.readFile(__dirname + '/files/deepblue.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Deep Blue.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.sets.regSets:
            bot.sendMessage(chatId, 'Загружаю регистрационные наборы...')
            fs.readFile(__dirname + '/files/regSets2.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Регистрационные наборы.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.oils.single:
            bot.sendMessage(chatId, 'Загружаю однокомпонентные эфирные масла...')
            fs.readFile(__dirname + '/files/singleoils.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Однокомпонентные эфирные масла.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
            break
        case kb.oils.mixture:
            bot.sendMessage(chatId, 'Загружаю смеси...')
            fs.readFile(__dirname + '/files/mix.pdf', (err, file) => {
                bot.sendDocument(chatId, file, {
                    caption: 'Смеси эфирных масел.'
                }).then(() => {
                    bot.sendMessage(chatId, 'Приятного просмотра!')
                })
            })
                break
        case kb.home.oils:
            bot.sendMessage(chatId, 'Эфирные масла:', {
                reply_markup: { keyboard: keyboard.oils }
            })
            break
        case kb.back:
            bot.sendMessage(chatId, 'Выбери категорию:', {
                reply_markup: { keyboard: keyboard.home }
            })
            break
        case kb.home.care:
            bot.sendMessage(chatId, 'Персональный уход:', {
                reply_markup: { keyboard: keyboard.care }
            })
            break
        case kb.home.sets:
                bot.sendMessage(chatId, 'Наборы:', {
                    reply_markup: { keyboard: keyboard.sets }
                })
            break
        case kb.home.catalog:
                bot.sendMessage(chatId, 'Каталог:', {
                    reply_markup: { keyboard: keyboard.catalog }
                })
            break
        case kb.home.aromaTherapy:
                bot.sendMessage(chatId, 'Ароматерапия для матери и ребенка:', {
                    reply_markup: { keyboard: keyboard.aromaTherapy }
                })
            break
        case kb.home.materials:
                bot.sendMessage(chatId, 'Материалы:', {
                    reply_markup: { keyboard: keyboard.materials }
                })
            break
        case kb.home.additives:
                bot.sendMessage(chatId, 'Добавки:', {
                    reply_markup: { keyboard: keyboard.additives }
                })
            break
    }

})

bot.onText(/\/start/, msg => {
    const text = `Дорогой друг! Арома Академия бот приветствует тебя!\nЯ рад, что ты мне доверяешь и готов помочь найти любую интересующую тебя информацию!\nЭфирные масла dōTERRA® представляют собой самые безопасные и самые чистые масла, доступные в современном мире!\nВыбери категорию:`
    bot.sendMessage(helpers.getChatId(msg), text, {
        reply_markup: {
            keyboard: keyboard.home
        }
    })
})