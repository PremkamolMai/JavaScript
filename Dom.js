// <div>
        //     <button id="red" style='color:red'>red</button>
        //     <button class="green">green</button>
        //     <button id="blue">blue</button>
        // </div>


const divButton = document.createElement('div')

const divBody = document.body.children[1]

const buttonRed = document.createElement('button')
buttonRed.setAttribute('id','red')
buttonRed.textContent = 'red'
divButton.appendChild(buttonRed)

const buttonGreen = document.createElement('button')
buttonGreen.setAttribute('class','green')
buttonGreen.textContent = 'green'
divButton.appendChild(buttonGreen)

const buttonBlue = document.createElement('button')
buttonBlue.setAttribute('id','blue')
buttonBlue.textContent = 'blue'
divButton.appendChild(buttonBlue)

divBody.appendChild(divButton)

buttonRed.addEventListener('click',changeToRed)

function changeToRed(){
    buttonRed.setAttribute('style','color:red')
}
