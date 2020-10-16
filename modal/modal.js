const body = document.querySelector('body'),
nav = document.querySelector('nav'),
modalWindow = document.querySelector('.modal_window'),
removeModalBtn = document.querySelector('#removeModalBtn'),
checkPython = document.querySelector('#check_python'),
checkJS = document.querySelector('#check_js'),
emailForm = document.querySelector('#email_form'),
emailBtn = document.querySelector('#email_btn'),
emailInput = document.querySelector('#email_input');

let infoDict = {
    'python':false,
    'js':false,
    'email':'',
};

removeModalBtn.style.cursor = 'pointer';

const removeModal = () =>{
    const blackWindow = document.querySelector('#blackWindow');
    body.removeChild(blackWindow);
    modalWindow.classList.add('hidden');
}

const popup = () =>{
    const blackWindow = document.createElement('div');
    blackWindow.id = 'blackWindow';

    if(modalWindow.classList['value'].includes('hidden')){
        blackWindow.style.width = '100%';
        blackWindow.style.height = '100%';
        blackWindow.style.backgroundColor = 'black';
        blackWindow.style.opacity = '50%';
        blackWindow.style.position = 'fixed';
        blackWindow.style.top = '0%';
        blackWindow.style.left = '0%';
        blackWindow.style.zIndex = '1';
        body.insertBefore(blackWindow, nav);
        modalWindow.classList.remove('hidden');
        modalWindow.style.position = 'fixed';
        modalWindow.style.float='left';
        modalWindow.style.top = '50%';
        modalWindow.style.left = '50%';
        modalWindow.style.transform = 'translate(-50%, -50%)';
        modalWindow.style.zIndex = '2';
    }
}

const submitEmail = (e) =>{
    e.preventDefault();
    infoDict['email'] = emailInput.value;
    removeModal();
}

const getCheckInfo = (e) => {
    if(e.target.checked){
        infoDict[e.target.value] = true;
    }else{
        infoDict[e.target.value] = false;
    }
}

setTimeout(popup, 5000);
removeModalBtn.addEventListener('click', removeModal);
checkPython.addEventListener('change', getCheckInfo);
checkJS.addEventListener('change', getCheckInfo);
emailBtn.addEventListener('click', submitEmail)
// const init = () =>{
    
// }

// init();