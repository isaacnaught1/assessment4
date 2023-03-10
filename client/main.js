const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

let postForm = document.getElementById('post-form')
let getButton = document.getElementById('get-button')
let deleteForm =document.getElementById('delete-form')
let postMakeInput =document.getElementById('post-make')
let postModelInput =document.getElementById('post-model')
let postYearInput =document.getElementById('post-year')
let deleteMakeInput =document.getElementById('delete-make')
let deleteModelInput =document.getElementById('delete-model')
let deleteYearInput =document.getElementById('delete-year')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
    .then(res => {
        const data = res.data
        alert(data)
    })
}
fortuneBtn.addEventListener('click', getFortune)


postForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const maBod = {
        Make: postMakeInput.value,
        Model: postModelInput.value,
        year: +postYearInput.value
    }

    axios.post('http://localhost:4000/vehicle', maBod)
    .then((result) => {
        alert('Vehicle added!')
        console.log(result.data)
    })
    .catch(() => {
        console.log('Unexpected error')
    })
})
function getClickHandler(){
    axios.get('http://localhost:4000/vehicle')
    .then((result) => {
        console.log(result.data)
    })
}

getButton.addEventListener('click', getClickHandler)

deleteForm.addEventListener('submit', (event) => {
    event.preventDefault

    let make = deleteMakeInput.value
    let model = deleteModelInput.value
    let year = deleteYearInput.value

    axios.delete('http://localhost:4000/vehicle/')
    .then (() => {
        alert('The' + make + model + year + 'is no longer a vehicle you love')
        console.log(result.data)
    })
})