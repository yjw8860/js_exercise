const nav_btns = document.querySelectorAll('li');

const pythonDetail = (e) => {
    if(document.querySelector('#python_ul') === null){
        const ul = document.createElement('ul'),
        li_1 = document.createElement('li'),
        li_2 = document.createElement('li'),
        nav = document.querySelector('.nav');
        first_checker = true;
        ul.id = 'python_ul';
        ul.className = 'second_ul'
        li_1.textContent = '객체 지향 코딩'
        li_2.textContent = '함수 지향 코딩'
        li_1.className = 'second_li';
        li_2.className = 'second_li';
        ul.appendChild(li_1);
        ul.appendChild(li_2);
        ul.style.display = 'flex';
        ul.style.flexDirection = 'column';
        nav.appendChild(ul)
        if(document.querySelector('.second_li') !== null){
            nav.removeChild(document.querySelector('.second_ul'))
        }
        nav.appendChild(ul)
    }else{
        const nav = document.querySelector('.nav'),
        ul = document.querySelector('#python_ul');
        nav.removeChild(ul);
    }  
}

const jsDetail = (e) => {
    if(document.querySelector('#js_ul') === null){
        const js = document.querySelector('#js'),
        ul = document.createElement('ul'),
        li_1 = document.createElement('li'),
        li_2 = document.createElement('li'),
        li_3 = document.createElement('li'),
        nav = document.querySelector('.nav');
        first_checker = true;
        ul.id = 'js_ul';
        ul.className = 'second_ul';
        li_1.textContent = 'Array';
        li_2.textContent = 'Object';
        li_3.textContent = 'Function';
        li_1.className = 'second_li';
        li_2.className = 'second_li';
        li_3.className = 'second_li';
        ul.appendChild(li_1);
        ul.appendChild(li_2);
        ul.appendChild(li_3);
        ul.style.display = 'flex';
        ul.style.flexDirection = 'column';
        ul.style.position = 'fixed';
        rect = js.getBoundingClientRect();
        ul.style.top = `${rect.bottom}px`;
        ul.style.left = `${rect.left}px`;
        if(document.querySelector('.second_li') !== null){
            nav.removeChild(document.querySelector('.second_ul'))
        }
        nav.appendChild(ul)
    }else{
        const nav = document.querySelector('.nav'),
        ul = document.querySelector('#js_ul');
        nav.removeChild(ul);
    }  
}

nav_btns[0].addEventListener('click', pythonDetail);
nav_btns[1].addEventListener('click', jsDetail);