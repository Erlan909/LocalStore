const createTask = (e) =>{
    e.preventDefault()
    let input = document.getElementById('input')
    localStorage.setItem('ITC',input.value)
    console.log(localStorage.getItem('ITC'));
}
console.log(localStorage.getItem('ITC'))