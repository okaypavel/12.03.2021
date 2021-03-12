// const button = document.getElementsByClassName('button')
// console.log(button)

// const btn = document.getElementsByClassName('btn')
// console.log(btn)

// const number = document.getElementsByClassName('number')
// console.log(number)

// const par1 = document.getElementsByClassName('par1')
// const sth = Array.from(par1) // tablica
// console.log(sth)
// // par1[0].style.color = 'red'
// console.log(par1)
// for(let i = 0; i < par1.length; i++){
//     // par1[i].style.color = 'red'
//     console.log(par1[i].classList)
//     par1[i].classList.add('xdx') // dodac class
//     par1[i].classList.remove('xdd') // dell class
// }
//  // colory
// const par2 = document.getElementsByClassName('par2')
// console.log(par2)
// for(let i = 0; i < par2.length; i++){
//     par2[i].style.color = 'pink'
// }

// const parID = document.getElementById('parid1')
// console.log(parID)
// parID.style.backgroundColor = 'pink'

// parID.innerHTML = '<button>cos tam oj</button>'

// const type = document.querySelector('input[type="button"]')
// console.log(type)

// const allType = document.querySelectorAll('input[type="button"]')
// console.log(allType)
// const xdcxer = Array.from(allType)
// console.log(xdcxer)
// xdcxer.forEach(item => {
//     item.value = 'qq'
// })

// const tegA = document.getElementById('tegA')
// tegA.getAttribute('href', 'https://www.wp.pl/')
// console.log(tegA)

// const paragraf = document.createElement('p')
// paragraf.setAttribute('class', 'xdd')
// paragraf.innerText = "elo elo"
// const app = document.getElementById('app')
// app.appendChild(paragraf)

// const span = document.createElement('span')
// span.setAttribute('class', 'xdd')
// span.innerText = "elo elo"
// const app = document.getElementById('app')
// app.appendChild(span)


// v1 create element in element
// const div = document.createElement('div')
// div.setAttribute('class', 'xdd')
// div.innerHTML = '<div></div>'
// div.innerHTML = '<p>qqq</p>'
// const app = document.getElementById('app')
// app.appendChild(div)


// v2 create element in element
const newDiv = document.createElement('div')
newDiv.setAttribute('class','xdx')
const span = document.createElement('span')
span.innerText = "qqqq"

newDiv.appendChild(span)
app.appendChild(newDiv)