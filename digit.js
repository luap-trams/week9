const spans = document.querySelectorAll('div>span:first-of-type')
const span = document.querySelector('main div:last-of-type > :last-child')

function clock(){
    spans[0].textContent = new Date().getHours() < 10 ? '0' + new Date().getHours() : 
    new Date().getHours() > 12 ? '0' + ((new Date().getHours()) -12) : new Date().getHours()

    spans[1].textContent = new Date().getMinutes() < 10 ? '0' +  new Date().getMinutes() :  new Date().getMinutes()
    spans[2].textContent = new Date().getSeconds() < 10 ? '0' +  new Date().getSeconds() :  new Date().getSeconds()
    spans[3].textContent = new Date().getMilliseconds()

    span.textContent = new Date().getHours()<= 12 ? 'AM' : 'PM'
    setTimeout(() => clock(), 500)

}

clock()