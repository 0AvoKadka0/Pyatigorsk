        // // -----------------------------------
        // // Инициализация AOS анимаций
        // // -----------------------------------
        // AOS.init({
        //     duration: 1000,
        //     once: true,
        // });

        // -----------------------------------
        // FAQ раскрытие
        // -----------------------------------
        document.querySelectorAll('.faq__item').forEach(item => {
            const question = item.querySelector('h3');
            question.addEventListener('click', () => {
                item.classList.toggle('open');
            });
        });

        // -----------------------------------
        // Фильтрация достопримечательностей
        // -----------------------------------
        const filterSelect = document.getElementById('attraction-filter');
        const filterSelect_cafe = document.getElementById('attraction-filter-cafe');
        const attractionCards = document.querySelectorAll('.attraction-card');
        const attractionCards_cafe = document.querySelectorAll('.attraction-card-cafe');

        filterSelect.addEventListener('change', () => {
            const value = filterSelect.value;
            attractionCards.forEach(card => {
                if (value === 'all' || card.dataset.type === value) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });


        filterSelect_cafe.addEventListener('change', () => {
            const value = filterSelect_cafe.value;
            attractionCards_cafe.forEach(card => {
                if (value === 'all_cafe' || card.dataset.type === value) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        // -----------------------------------
        // Логика подбора маршрута (демо)
        // -----------------------------------
        const routeForm = document.getElementById('route-form');
        const routeResult = document.getElementById('route-result');

        routeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(routeForm);
            const type = formData.get('type');
            const budget = formData.get('budget');
            const days = formData.get('days');
            const transport = formData.get('transport');

            // Пример простой логики: выведем статический текст в зависимости от типа
            let resultText = `Оптимальный маршрут для вас: \n`;
            if (type === 'natural') {
                resultText += `1. Подъем на гору Машук\n2. Посещение минеральных источников`;
            } else if (type === 'cultural') {
                resultText += `1. Прогулка по парку «Цветник»\n2. Посещение канатной дороги`;
            } else if (type === 'historical') {
                resultText += `1. Лермонтовские места\n2. Прогулка по историческому центру`;
            }

            resultText += `\n\nБюджет: ~${budget} руб.\nДней: ${days}\nТранспорт: ${transport}`;
            routeResult.textContent = resultText;
        });

        // -----------------------------------
        // Чат-бот (демо)
        // -----------------------------------
        const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');

// Массив ответов бота
const botResponses = [
    "Рекомендую посетить парк «Цветник»!",
    "Как насчёт посмотреть кино в выходные?",
    "Не забудьте посетить местный рынок!",
    "Зачем не заглянуть в музей искусств?",
    "Как насчёт попробовать новое кафе в центре города?",
    "Погода сегодня отличная для прогулки!",
    "Вы уже планировали что-то на выходные?",
    "Как насчёт ужина в ресторане на берегу?"
];

// Функция для отображения ответа бота
function botReply(msg) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    
    // Генерируем случайный ответ
    const randomIndex = Math.floor(Math.random() * botResponses.length);
    botMessage.textContent = `Бот: ${botResponses[randomIndex]}`;
    
    chatMessages.appendChild(botMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Прокрутка вниз
}

// Обработчик отправки сообщения по клику
chatSend.addEventListener('click', sendMessage);

// Обработчик отправки сообщения по нажатию клавиши Enter
chatInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Функция отправки сообщения
function sendMessage() {
    const userText = chatInput.value.trim();
    if (userText !== '') {
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.textContent = `Вы: ${userText}`;
        chatMessages.appendChild(userMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Прокрутка вниз
        chatInput.value = ''; // Очистка поля ввода

        // Имитация ответа бота
        setTimeout(() => {
            botReply(userText);
        }, 500);
    }
}


        // -----------------------------------
        // 3D-анимация в HERO (демо)
        // -----------------------------------
        // const canvas = document.getElementById('hero-3d-canvas');
        // const scene = new THREE.Scene();
        // const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        // camera.position.set(0, 1.5, 3);
        // const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        // renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        // renderer.setPixelRatio(window.devicePixelRatio);

        // const controls = new THREE.OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;
        // controls.enablePan = false;
        // controls.minDistance = 2;
        // controls.maxDistance = 5;

        // const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        // scene.add(ambientLight);

        // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        // directionalLight.position.set(5, 10, 7.5);
        // scene.add(directionalLight);

        // // Пример 3D-объекта (можно заменить моделью горы или символом города)
        // const geometry = new THREE.TorusKnotGeometry(0.6, 0.2, 100, 16);
        // const material = new THREE.MeshStandardMaterial({ color: 0x6C63FF, metalness: 0.6, roughness: 0.4 });
        // const torusKnot = new THREE.Mesh(geometry, material);
        // scene.add(torusKnot);

        // function animate() {
        //     requestAnimationFrame(animate);
        //     torusKnot.rotation.x += 0.005;
        //     torusKnot.rotation.y += 0.005;
        //     controls.update();
        //     renderer.render(scene, camera);
        // }
        // animate();

        // window.addEventListener('resize', () => {
        //     const width = canvas.clientWidth;
        //     const height = canvas.clientHeight;
        //     camera.aspect = width / height;
        //     camera.updateProjectionMatrix();
        //     renderer.setSize(width, height);
        // });


(function() {
  var ws = new WebSocket('ws://' + window.location.host + 
             '/jb-server-page?reloadMode=RELOAD_ON_SAVE&'+
             'referrer=' + encodeURIComponent(window.location.pathname));
  ws.onmessage = function (msg) {
      if (msg.data === 'reload') {
          window.location.reload();
      }
      if (msg.data.startsWith('update-css ')) {
          var messageId = msg.data.substring(11);
          var links = document.getElementsByTagName('link');
          for (var i = 0; i < links.length; i++) {
              var link = links[i];
              if (link.rel !== 'stylesheet') continue;
              var clonedLink = link.cloneNode(true);
              var newHref = link.href.replace(/(&|\?)jbUpdateLinksId=\d+/, "$1jbUpdateLinksId=" + messageId);
              if (newHref !== link.href) {
                clonedLink.href = newHref;
              }
              else {
                var indexOfQuest = newHref.indexOf('?');
                if (indexOfQuest >= 0) {
                  // to support ?foo#hash 
                  clonedLink.href = newHref.substring(0, indexOfQuest + 1) + 'jbUpdateLinksId=' + messageId + '&' + 
                                    newHref.substring(indexOfQuest + 1);
                }
                else {
                  clonedLink.href += '?' + 'jbUpdateLinksId=' + messageId;
                }
              }
              link.replaceWith(clonedLink);
          }
      }
  };
})();



if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log("Вы используете мобильное устройство.");
    let nav = document.getElementById("navigation");

nav.innerHTML = `
<style>
.burger-menu {
    position: relative;
}

.burger {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 30px;
    height: 21px;
    justify-content: space-between;
    transition: transform 0.3s ease; /* Плавный переход для бургер-меню */
}

.line {
    height: 3px;
    background-color: #333;
    transition: all 0.3s ease;
}

.nav-links {
    height: 0; /* Начальная высота */
    overflow: hidden; /* Скрываем переполнение */
    position: absolute;
    top: 60px;
    right: 0; /* Выравнивание меню вправо */
    background-color: #fff;
    padding: 0 10px; /* Убираем внутренние отступы */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000; /* Обеспечивает видимость над другими элементами */
    transition: height 0.3s ease; /* Плавный переход для высоты */
}

.nav-links ul {
    list-style-type: none;
    padding: 0;
    margin: 0; /* Убираем отступы для списка */
}

.nav-links li {
    margin: 10px 0;
}

.nav-links a,
.theme-toggle {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    background: none; /* Убираем фон кнопки */
    border: none; /* Убираем рамку кнопки */
    cursor: pointer; /* Курсор в виде указателя */
}

.theme-toggle:hover {
    text-decoration: underline; /* Подчеркивание при наведении */
}

.nav-links a:hover,
.theme-toggle:hover {
    color: #007BFF; /* Цвет при наведении на ссылки и кнопку */
}

.show {
    height: auto; /* Автоматическая высота при показе */
    padding: 10px; /* Добавляем отступы при открытом меню */
}
</style>

<div class="burger-menu">
    <div class="burger" id="burger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
    <nav class="nav-links" id="nav-links">
        <ul>
            <li><a href="top">Главная</a></li>
            <li><a href="#attraction">Достопримечательности</a></li>
            <li><a href="#cafe">Кафе и Рестораны</a></li>
            <li><a href="#route-planner">Маршрут</a></li>
            <li><a href="#chatbot">Чат-Бот</a></li>
            <li><a href="#contacts">Контакты</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><button class="theme-toggle" id="theme-toggle">Сменить тему</button></li>
        </ul>
    </nav>
</div>
`;

const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const themeToggle = document.getElementById('theme-toggle');

let isDarkTheme = false; // Флаг для отслеживания темы

burger.onclick = function(event) {
    event.stopPropagation(); // Останавливаем событие, чтобы клик по бургеру не закрывал меню
    const isShown = navLinks.classList.toggle('show'); // Переключаем класс для отображения меню
    
    // Меняем бургер-иконку на крестик (для улучшения UX)
    const lines = document.querySelectorAll('.line');
    if (isShown) {
        lines[0].style.transform = "rotate(45deg) translateY(10px)";
        lines[1].style.opacity = "0"; // Скрываем среднюю линию
        lines[2].style.transform = "rotate(-45deg) translateY(-10px)";
    } else {
        lines[0].style.transform = "rotate(0) translateY(0)";
        lines[1].style.opacity = "1"; // Показываем среднюю линию
        lines[2].style.transform = "rotate(0) translateY(0)";
    }
};

// Закрываем меню при клике вне бургер-меню
document.addEventListener('click', function(event) {
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show'); // Убираем класс показа меню
        const lines = document.querySelectorAll('.line');
        // Возвращаем бургер-иконку в исходное состояние
        lines[0].style.transform = "rotate(0) translateY(0)";
        lines[1].style.opacity = "1"; // Показываем среднюю линию
        lines[2].style.transform = "rotate(0) translateY(0)";
    }
});

// Обработчик для смены темы
themeToggle.onclick = function(event) {
    event.stopPropagation(); // Останавливаем событие, чтобы клик по кнопке не закрывал меню
    isDarkTheme = !isDarkTheme; // Переключаем флаг темы

    if (isDarkTheme) {
        document.body.style.backgroundColor = "#808080"; // Меняем фон на серый
        themeToggle.textContent = "Тёмная тема"; // Меняем текст кнопки
    } else {
        document.body.style.backgroundColor = ""; // Возвращаем фон по умолчанию
        themeToggle.textContent = "Светлая тема"; // Меняем текст кнопки обратно
    }
};

  

} else {
    console.log("Вы используете ПК.");

    let nav = document.getElementById("navigation");

    nav.innerHTML = `<ul>
                <li><a href="#top">Главная</a></li>
                <li><a href="#attractions">Достопримечательности</a></li>
                <li><a href="#cafe">Кафе и рестораны</a></li>
                <li><a href="#route-planner">Маршрут</a></li>
                <li><a href="#chatbot">Чат-бот</a></li>
                <li><a href="#contacts">Контакты</a></li>
                <li><a href="#faq">FAQ</a></li>
                </ul>`



}
