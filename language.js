
const lang = {
    ru: {
        "info": "Информация обо мне",
        "name-label": "Мое имя",
        "name": "Ярослав",
        "age-label": "Возраст",
        "education-label": "Образование",
        "education": "среднее профессиональное образование/в настоящее время студент",
        "language-label": "Язык",
        "language": "Русский(родной),Английский(B1)",
        "country-label": "Страна",
        "country": "Россия",
        "hobbie-label": "Хобби",
        "hobbie": "Я люблю слушать музыку,играть в игры и учится",
        "butt-about":"Обо мне",
        "butt-My-skills":"Мои навыки",
        "butt-neko":"Случайный аниме арт"
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