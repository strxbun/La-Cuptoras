// Obiectul de traduceri
const translations = {
    ro: {
        // General
        "loading": "Se încarcă...",
        "brand-name": "La Cuptoraș",
        "home": "Acasă",
        "about-us": "Despre Noi",
        "menu": "Meniu",
        "contact": "Contacte",
        "home-breadcrumb": "Acasă",
        "copyright-text": "La cuptoraș 2025",
        "all-rights-reserved": "Toate drepturile rezervate.",
        "footer-brand-name": "La Cuptoraș",
        "footer-about-us": "Despre Noi",
        "footer-contact": "Contacte",
        "privacy-policy": "Politica Confidențialității",
        "terms-conditions": "Termeni și Condiții",
        "footer-contacts-title": "Contacte",
        "opening-hours-title": "Orele de lucru",
        "weekdays": "Luni - Vineri",
        "weekends": "Sâmbăta - Duminica",
        "days-off": "Zile de odihnă",

        // contact.html specific
        "contact-hero-title": "Contacți-ne",
        "contact-breadcrumb": "Contacte",
        "contact-section-title": "Contacți-ne",
        "contact-form-intro": "Pentru orice întrebări, completați formularul",
        "reservations-title": "Rezervări",
        "catering-title": "Catering",
        "complaints-title": "Plângeri",
        "your-name-label": "Numele dumneavoastră",
        "your-email-label": "Adresa dumneavoastră de email",
        "subject-label": "Subiect",
        "message-label": "Mesaj",
        "send-button": "Trimiteți",

        // index.html specific
        "hero-title": "Ca la mama acasă<br>în bucătăria noastră",
        "hero-subtitle": "La Cuptoraș, servicii de catering și restaurant cu mâncare tradițională.",
        "service1-title": "Mâncare de calitate superioara",
        "service1-description": "Pregătim mâncarea doar din produse proaspete, și de către bucătari profesioniști.",
        "service2-title": "Comandă online",
        "service2-description": "Oferim livrarea produselor din restaurant și servicii de catering la comandă pentru orice fel de eveniment.",
        "about-section-title": "Despre Noi",
        "about-welcome-title": "Bun venit",
        "about-description1": "La Cuptoraș este un local dedicat preparatelor tradiționale românești, oferind atât servire în restaurant, cât și servicii profesionale de catering.",
        "about-description2": "Ne remarcăm prin atenția la detalii, calitatea ingredientelor și respectul pentru rețetele autentice. Fie că vrei o masă delicioasă în oraș sau bucate alese livrate direct la evenimentul tău, La Cuptoraș este alegerea ideală.",
        "experience-years-text": "Ani de ",
        "experience-title": "Experiență",
        "menu-section-title": "Meniu",
        "menu-tagline": "Dacă e bun, se va dori o a 2-a porție",
        "pancakes-title": "Pancakes",
        "pancakes-description": "Pancakes, frișcă, stafide, pomușoare, vanilie, zahăr, miere, ulei de floarea soarelui.",
        "guguta-title": "Cușma lui Guguță",
        "guguta-description": "Făină de grâu, chefir, ou de găină, lapte, zahăr de vanilie, ulei de floarea soarelui, vișină, smântână, zahăr, ciocolată rasă.",
        "mexican-solyanka-title": "Soleancă Mexicană",
        "mexican-solyanka-description": "Bulion, carne de vită, fasole, porumb, nachos, ardei, roșii, ceapă, usturoi, pătrunjel, condimente.",
        "caesar-salad-title": "Salată Caesar",
        "caesar-salad-description": "Salată iceberg, creveți, roșii, sos Caesar, pesmeți, ouă, parmezan, frunze de salată, condimente.",
        "cream-soup-title": "Supă Cremă",
        "cream-soup-description": "Bulion, frișcă, carne de pui, ciuperci, ceapă, pătrunjel, ulei de măsline, chiflă.",
        "baked-wings-title": "Aripioare Coapte",
        "baked-wings-description": "Aripioare de pui, sos picant, ketchup.",
        "sarmale-title": "Sarmale/Ardei Umpluți",
        "sarmale-description": "Varză, carne de porc, ceapă, morcov, roșii decojite, orez, ulei de floarea soarelui, condimente, sos din tomate cu ardei dulce, verdeață.",
        "crepes-title": "Clătite Branză/Carne/Ciuperci",
        "crepes-description": "Carne de pui, ouă de găină, făină de grâu, lapte, ceapă, frișcă, cașcaval, unt, ulei de floarea soarelui, verdeață, condimente.",
        "reviews-section-title": "Recenzii",
        "reviews-intro": "Clienții noștrii!!!",
        "review1-text": "Am avut o experiență foarte plăcută. Atmosfera este primitoare, mâncarea delicioasă. Totul a fost impecabil.",
        "review1-author": "Alexandra",
        "review2-text": "Foarte plăcută atmosfera din local. Angajații foarte amabili, am avut un timp frumos cu familia. Recomand!",
        "review2-author": "Andrei",
        "review3-text": "O seară foarte plăcută. Atmosfera binevoitoare, mâncarea foarte gustoasă, personalul politicos. La sigur o să mai revenim în acest local.",
        "review3-author": "Eugeniu",
        "review4-text": "Totul a fost foarte bun, am avut o mică neplăcere, dar administratorul a lămurit frumos situația. Mulțumesc.",
        "review4-author": "Daniela",
        // Placeholder titles and descriptions for menu items (tab-2 and tab-3)
        "placeholder-title-1": "Titlu Preparat 1",
        "placeholder-description-1": "Descriere preparat 1.",
        "placeholder-title-2": "Titlu Preparat 2",
        "placeholder-description-2": "Descriere preparat 2.",
        "placeholder-title-3": "Titlu Preparat 3",
        "placeholder-description-3": "Descriere preparat 3.",
        "placeholder-title-4": "Titlu Preparat 4",
        "placeholder-description-4": "Descriere preparat 4.",
        "placeholder-title-5": "Titlu Preparat 5",
        "placeholder-description-5": "Descriere preparat 5.",
        "placeholder-title-6": "Titlu Preparat 6",
        "placeholder-description-6": "Descriere preparat 6.",
        "placeholder-title-7": "Titlu Preparat 7",
        "placeholder-description-7": "Descriere preparat 7.",
        "placeholder-title-8": "Titlu Preparat 8",
        "placeholder-description-8": "Descriere preparat 8.",
        "placeholder-title-9": "Titlu Preparat 9",
        "placeholder-description-9": "Descriere preparat 9.",
        "placeholder-title-10": "Titlu Preparat 10",
        "placeholder-description-10": "Descriere preparat 10.",
        "placeholder-title-11": "Titlu Preparat 11",
        "placeholder-description-11": "Descriere preparat 11.",
        "placeholder-title-12": "Titlu Preparat 12",
        "placeholder-description-12": "Descriere preparat 12.",
        "placeholder-title-13": "Titlu Preparat 13",
        "placeholder-description-13": "Descriere preparat 13.",
        "placeholder-title-14": "Titlu Preparat 14",
        "placeholder-description-14": "Descriere preparat 14.",
        "placeholder-title-15": "Titlu Preparat 15",
        "placeholder-description-15": "Descriere preparat 15.",
        "placeholder-title-16": "Titlu Preparat 16",
        "placeholder-description-16": "Descriere preparat 16.",


        // about.html specific
        "about-hero-title": "Despre Noi",
        "about-breadcrumb": "Despre Noi",
        "about-section-title-main": "Despre Noi", // Re-added for clarity if different context
        "about-welcome-title": "Bun venit", // Already present, but good to ensure consistency
        "about-description1": "La Cuptoraș este un local dedicat preparatelor tradiționale românești, oferind atât servire în restaurant, cât și servicii profesionale de catering.",
        "about-description2": "Ne remarcăm prin atenția la detalii, calitatea ingredientelor și respectul pentru rețetele autentice. Fie că vrei o masă delicioasă în oraș sau bucate alese livrate direct la evenimentul tău, La Cuptoraș este alegerea ideală.",
        "experience-years-text": "Ani de ",
        "experience-title": "Experiență",

        // menu.html specific
        "menu-hero-title": "Meniul Preparatelor Noastre",
        "menu-breadcrumb": "Meniu"
    },
    ru: {
        // General
        "loading": "Загрузка...",
        "home": "Главная",
        "about-us": "О нас",
        "menu": "Меню",
        "contact": "Контакты",
        "home-breadcrumb": "Главная",
        "all-rights-reserved": "Все права защищены.",
        "footer-about-us": "О нас",
        "footer-contact": "Контакты",
        "privacy-policy": "Политика конфиденциальности",
        "terms-conditions": "Условия и положения",
        "footer-contacts-title": "Контакты",
        "opening-hours-title": "Часы работы",
        "weekdays": "Понедельник - Пятница",
        "weekends": "Суббота - Воскресенье",
        "days-off": "Выходные дни",

        // contact.html specific
        "contact-hero-title": "Свяжитесь с нами",
        "contact-breadcrumb": "Контакты",
        "contact-section-title": "Свяжитесь с нами",
        "contact-form-intro": "По любым вопросам заполните форму",
        "reservations-title": "Бронирование",
        "catering-title": "Кейтеринг",
        "complaints-title": "Жалобы",
        "your-name-label": "Ваше имя",
        "your-email-label": "Ваш адрес электронной почты",
        "subject-label": "Тема",
        "message-label": "Сообщение",
        "send-button": "Отправить",

        // index.html specific
        "hero-title": "Как дома<br>на нашей кухне",
        "hero-subtitle": "Ла Куптореш, услуги кейтеринга и ресторан с традиционной едой.",
        "service1-title": "Высококачественная еда",
        "service1-description": "Мы готовим еду только из свежих продуктов и профессиональными поварами.",
        "service2-title": "Заказать онлайн",
        "service2-description": "Предлагаем доставку продуктов из ресторана и услуги кейтеринга на заказ для любого мероприятия.",
        "about-section-title": "О нас",
        "about-welcome-title": "Добро пожаловать",
        "about-description1": "Ла Куптореш - это заведение, посвященное традиционным румынским блюдам, предлагающее как обслуживание в ресторане, так и профессиональные услуги кейтеринга.",
        "about-description2": "Мы отличаемся вниманием к деталям, качеством ингредиентов и уважением к аутентичным рецептам. Если вы хотите вкусно пообедать в городе или заказать изысканные блюда с доставкой на ваше мероприятие, Ла Куптореш - идеальный выбор.",
        "experience-years-text": "Лет ",
        "experience-title": "Опыта",
        "menu-section-title": "Меню",
        "menu-tagline": "Если вкусно, захочется вторую порцию",
        "pancakes-title": "Блины",
        "pancakes-description": "Блины, взбитые сливки, изюм, ягоды, ваниль, сахар, мед, подсолнечное масло.",
        "guguta-title": "Шапка Гугуцэ",
        "guguta-description": "Пшеничная мука, кефир, куриное яйцо, молоко, ванильный сахар, подсолнечное масло, вишня, сметана, сахар, тертый шоколад.",
        "mexican-solyanka-title": "Мексиканская Солянка",
        "mexican-solyanka-description": "Бульон, говядина, фасоль, кукуруза, начос, перец, помидоры, лук, чеснок, петрушка, специи.",
        "caesar-salad-title": "Салат Цезарь",
        "caesar-salad-description": "Салат айсберг, креветки, помидоры, соус Цезарь, сухарики, яйца, пармезан, листья салата, специи.",
        "cream-soup-title": "Крем-суп",
        "cream-soup-description": "Бульон, сливки, куриное мясо, грибы, лук, петрушка, оливковое масло, булочка.",
        "baked-wings-title": "Запеченные Крылышки",
        "baked-wings-description": "Куриные крылышки, острый соус, кетчуп.",
        "sarmale-title": "Сармале/Фаршированный перец",
        "sarmale-description": "Капуста, свинина, лук, морковь, очищенные помидоры, рис, подсолнечное масло, специи, томатный соус со сладким перцем, зелень.",
        "crepes-title": "Блины с творогом/мясом/грибами",
        "crepes-description": "Куриное мясо, куриные яйца, пшеничная мука, молоко, лук, сливки, сыр, сливочное масло, подсолнечное масло, зелень, специи.",
        "reviews-section-title": "Отзывы",
        "reviews-intro": "Наши клиенты!!!",
        "review1-text": "У меня был очень приятный опыт. Атмосфера гостеприимная, еда вкусная. Все было безупречно.",
        "review1-author": "Александра",
        "review2-text": "Очень приятная атмосфера в заведении. Персонал очень любезный, мы прекрасно провели время с семьей. Рекомендую!",
        "review2-author": "Андрей",
        "review3-text": "Очень приятный вечер. Благожелательная атмосфера, очень вкусная еда, вежливый персонал. Обязательно вернемся в это заведение.",
        "review3-author": "Евгений",
        "review4-text": "Все было очень хорошо, у меня было небольшое неудобство, но администратор прекрасно разрешил ситуацию. Спасибо.",
        "review4-author": "Даниела",
        // Placeholder titles and descriptions for menu items (tab-2 and tab-3)
        "placeholder-title-1": "Название блюда 1",
        "placeholder-description-1": "Описание блюда 1.",
        "placeholder-title-2": "Название блюда 2",
        "placeholder-description-2": "Описание блюда 2.",
        "placeholder-title-3": "Название блюда 3",
        "placeholder-description-3": "Описание блюда 3.",
        "placeholder-title-4": "Название блюда 4",
        "placeholder-description-4": "Описание блюда 4.",
        "placeholder-title-5": "Название блюда 5",
        "placeholder-description-5": "Описание блюда 5.",
        "placeholder-title-6": "Название блюда 6",
        "placeholder-description-6": "Описание блюда 6.",
        "placeholder-title-7": "Название блюда 7",
        "placeholder-description-7": "Описание блюда 7.",
        "placeholder-title-8": "Название блюда 8",
        "placeholder-description-8": "Описание блюда 8.",
        "placeholder-title-9": "Название блюда 9",
        "placeholder-description-9": "Описание блюда 9.",
        "placeholder-title-10": "Название блюда 10",
        "placeholder-description-10": "Описание блюда 10.",
        "placeholder-title-11": "Название блюда 11",
        "placeholder-description-11": "Описание блюда 11.",
        "placeholder-title-12": "Название блюда 12",
        "placeholder-description-12": "Описание блюда 12.",
        "placeholder-title-13": "Название блюда 13",
        "placeholder-description-13": "Описание блюда 13.",
        "placeholder-title-14": "Название блюда 14",
        "placeholder-description-14": "Описание блюда 14.",
        "placeholder-title-15": "Название блюда 15",
        "placeholder-description-15": "Описание блюда 15.",
        "placeholder-title-16": "Название блюда 16",
        "placeholder-description-16": "Описание блюда 16.",

        // about.html specific
        "about-hero-title": "О нас",
        "about-breadcrumb": "О нас",
        "about-section-title-main": "О нас",
        "about-welcome-title": "Добро пожаловать",
        "about-description1": "Ла Куптореш - это заведение, посвященное традиционным румынским блюдам, предлагающее как обслуживание в ресторане, так и профессиональные услуги кейтеринга.",
        "about-description2": "Мы отличаемся вниманием к деталям, качеством ингредиентов и уважением к аутентичным рецептам. Если вы хотите вкусно пообедать в городе или заказать изысканные блюда с доставкой на ваше мероприятие, Ла Куптореш - идеальный выбор.",
        "experience-years-text": "Лет ",
        "experience-title": "Опыта",

        // menu.html specific
        "menu-hero-title": "Меню наших блюд",
        "menu-breadcrumb": "Меню"
    }
};

// Funcția pentru setarea limbii
function setLanguage(lang) {
    // Setează clasa 'active' pe butonul corect
    const langRoButton = document.getElementById('lang-ro');
    const langRuButton = document.getElementById('lang-ru');

    if (langRoButton) langRoButton.classList.remove('active');
    if (langRuButton) langRuButton.classList.remove('active');

    const activeButton = document.getElementById('lang-' + lang);
    if (activeButton) activeButton.classList.add('active');

    // Salvează limba selectată în localStorage
    localStorage.setItem('selectedLanguage', lang);

    // Traduce elementele de pe pagină
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            // Verifică dacă elementul este un input, textarea sau label pentru a seta placeholder-ul sau textContent
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'LABEL') {
                element.textContent = translations[lang][key];
            } else if (element.tagName === 'SPAN' && element.classList.contains('sr-only')) { // Pentru spinner
                element.textContent = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key]; // Folosim innerHTML pentru a permite tag-uri HTML (ex: <br>)
            }
        }
    });

    // Actualizează placeholder-urile pentru input-uri, deoarece label-urile nu sunt întotdeauna direct legate de placeholder
    const nameInput = document.getElementById('name');
    if (nameInput) nameInput.placeholder = translations[lang]['your-name-label'];
    const emailInput = document.getElementById('email');
    if (emailInput) emailInput.placeholder = translations[lang]['your-email-label'];
    const subjectInput = document.getElementById('subject');
    if (subjectInput) subjectInput.placeholder = translations[lang]['subject-label'];
    const messageInput = document.getElementById('message');
    if (messageInput) messageInput.placeholder = translations[lang]['message-label'];
}

// Ascultă evenimentele de click pe butoanele de limbă
document.addEventListener('DOMContentLoaded', () => {
    const langRoButton = document.getElementById('lang-ro');
    const langRuButton = document.getElementById('lang-ru');

    if (langRoButton) {
        langRoButton.addEventListener('click', () => setLanguage('ro'));
    }
    if (langRuButton) {
        langRuButton.addEventListener('click', () => setLanguage('ru'));
    }

    // Setează limba la încărcarea paginii (preia din localStorage sau implicit română)
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ro';
    setLanguage(savedLanguage);
});
