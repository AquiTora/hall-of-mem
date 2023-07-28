let personAPI = {
    persons: [
        {
            key: 1,
            id: "Genadyi Gorin",
            title: "Генадий Горин", 
            content: "Очень хороший человек, столкнувшийся с крайне недружелюбными жизненными обстоятельствами. Однако же он с честью через них прошел. Однако спустя многие годы борьбы, его психическое здоровье сущетсвенноповредилось. Сейчас наш герой жив, но находится в пограничном состоянии.",
            photos: ["/jpg/test1.jpg", "/jpg/test2.jpg", "/jpg/test3.jpeg"]
        },
        {
            key: 2, 
            id: "Zubenko Michail",
            title: "Зубенко Михаил Петрович", 
            content: "Вор в законе Шумиловского городка по прозвищу: 'Мафиозник' - крайне опасная, но очень расчетливая личность. Обладает непревзойденным вкусом.",
            photos: ["/jpg/test1.jpg", "/jpg/test2.jpg", "/jpg/test3.jpeg"]
        },
        {
            key: 3, 
            id: "Djon Yakuza",
            title: "Джон Якудза", 
            content: "Странная личность: скрытная, лысая. Многие утверждают, что ее и вовсе не существует, однако все данные из сети интернет - говорят об обратном.",
            photos: ["/jpg/test1.jpg", "/jpg/test2.jpg", "/jpg/test3.jpeg"]
        },
        {
            key: 4, 
            id: "Shamaich",
            title: "Шамаич", 
            content: "Самый крутой гонщик на районе, тупо крут без лишних слов. На его счету не одна разбитая машина. Но он может себе такое позволить.",
            photos: ["/jpg/test1.jpg", "/jpg/test2.jpg", "/jpg/test3.jpeg"]
        },
        {
            key: 5, 
            id: "Lonk",
            title: "Лонк", 
            content: "Неизвестный брат близнец небезызвестного Линка. Очень на него похож, однако только внешне. Внутренне не отличается особым умом и сообразительностью.",
            photos: ["/jpg/test1.jpg", "/jpg/test2.jpg", "/jpg/test3.jpeg"]
        },
        {
            key: 6, 
            id: "Djon Kiwami",
            title: "Джон Кивами", 
            content: "Личность из серии легендарного Джона Якудзы. Возможно как-то с ним связан, но данный факт еще предстоит установить, как сам факт их существования.",
            photos: ["/jpg/test1.jpg", "/jpg/test2.jpg", "/jpg/test3.jpeg"]
        }
    ]
}

export const getAllPerson = async () => {
    return await personAPI;
}

export function getAllPostIds() {
    return personAPI.persons.map((person) => {
        return {
            params: {
                id: person.id
            }
        }
    })
}

export async function getPersonData(id) {
    const result = personAPI.persons.filter((person) => person.id === id);
    
    return {
        id,
        ...result[0],
    };
}