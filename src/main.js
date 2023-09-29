const addButton = document.querySelector('.add--js');
const subtractButton = document.querySelector('.subtract--js');
const counterValue = document.querySelector('.counter--js');

let glases = 0;

const setCounterValue = (value) => {
    counterValue.innerHTML = value;
}
setCounterValue(glases)

addButton.addEventListener('click', () => {       
    glases = glases + 1;
    setCounterValue(glases);
})

subtractButton.addEventListener('click', () => {
    if (glases >=1){
    glases = glases - 1;
    setCounterValue(glases);
    }
})