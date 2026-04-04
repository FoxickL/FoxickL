
const lang = {
    ru: {
        "info": "Информация обо мне",
        "name-label": "Мое имя",
        "name": "Ярослав",
        "age-label": "Возраст",
        "education-label": "Образование",
        "education": "Среднее профессиональное образование/в настоящее время студент",
        "language-label": "Язык",
        "language": "Русский(родной),Английский(B1)",
        "country-label": "Страна",
        "country": "Россия",
        "hobbie-label": "Хобби",
        "hobbie": "Я люблю слушать музыку,играть в игры и учится",
        "butt-about":"Обо мне",
        "butt-My-skills":"Мои навыки",
        "butt-neko":"Случайный аниме арт",
        "info-skills":"Мои навыки",
        "general-level":"Общий уровень",
        "go-learning":"Сейчас учу",
        "waiting":"Ожидание клика",
        "category":"Категория"
    },
    en:{
        "info": "Info about me",
        "name-label": "My name",
        "name": "Yaroslav",
        "age-label": "Age",
        "education-label": "Education",
        "education": "Secondary vocational/currently a student",
        "language-label": "Language",
        "language": "Russian(native),English(B1)",
        "country-label": "Country",
        "country": "Russian",
        "hobbie-label": "Hobbies",
        "hobbie": "I like listening to music, playing games and studying",
        "butt-about":"About me",
        "butt-My-skills":"My skills",
        "butt-neko":"Random anime art",
        "info-skills":"Info about my skills",
        "general-level":"General level",
        "go-learning":"Studying now",
        "waiting":"Waiting click",
        "category":"Category"
    }
}
document.getElementById('language-change').addEventListener('change', e => {
    value = document.getElementById('categories').value
    let selected = e.target.value
    document.querySelectorAll('[data-lang]').forEach(element => {
        if (lang[selected][element.dataset.lang]) {
            element.innerText = lang[selected][element.dataset.lang]
        }
    })
})