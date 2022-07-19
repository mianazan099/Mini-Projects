const bgImg = document.querySelector('.card')
let randomNum = Math.floor(Math.random() * 5 + 1)
bgImg.setAttribute('style', `--bg-img: url(./images/img${randomNum}.jpg)`)
