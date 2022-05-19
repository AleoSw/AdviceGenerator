const apiUrl = 'https://api.adviceslip.com/advice'
const app = document.querySelector('.container .card')
const templateAdvice = document.querySelector('#templateAdvice')
const fragment = document.createDocumentFragment()

const getAdvice = async () => {
    try {
        const API_URL = await fetch(apiUrl)
        const adviceData = await API_URL.json()
        renderAdvice(adviceData)
    } catch (error) {
        console.log(error);
    }
}

const renderAdvice = (adviceData) => {
    const clone = templateAdvice.content.cloneNode(true)
    clone.querySelector('.adviceNumber').textContent = `ADVICE #${adviceData.slip.id}`
    clone.querySelector('.adviceText').textContent = `“${adviceData.slip.advice}”`
    fragment.appendChild(clone)
    app.appendChild(fragment)

    const btn = document.querySelector('.icon')
    btn.addEventListener('click', () => {
        app.innerHTML = ''
        fragment.innerHTML = ''
        getAdvice()
    })
}

window.addEventListener('load', () => {
    getAdvice()
})