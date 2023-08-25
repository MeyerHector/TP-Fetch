const btnGet = document.getElementById('get');
const btnPost = document.getElementById('post');
const btnDownload = document.getElementById('download')
const container = document.getElementById('image_container')

const JSON_PLACE_HOLDER = 'https://jsonplaceholder.typicode.com/posts'
const IMAGE = 'https://pbs.twimg.com/media/FkbNNUYXkAMIn3F?format=jpg&name=medium'



btnGet.addEventListener('click', () => {
    fetch(JSON_PLACE_HOLDER, {
        method: 'GET'
    })
        .then(alert('Array mostrado en consola'))
        .then((response) => response.json())
        .then((post) => console.log(post.slice(0, 3)))
})

btnPost.addEventListener('click', () => {
    const post = {
        title: "Titulo de prueba",
        body: "Cuerpo del mensaje",
    }

    fetch(JSON_PLACE_HOLDER, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json())
        .then((post) => console.log(post))
        .then(alert('Mensaje subido, mostrando por consola'))
        .catch((error) => console.error(error))
})

btnDownload.addEventListener('click', async () => {
    const imgRender = (url) => `<img class='w-25' src=${url}>`;
    await fetch(IMAGE, {
        method: 'GET'
    })
        .then((response) => response.blob())
        .then((image) => {
            const objectUrl = URL.createObjectURL(image);
            container.innerHTML = imgRender(objectUrl)

        })
        .catch((error) => console.error(error))
})