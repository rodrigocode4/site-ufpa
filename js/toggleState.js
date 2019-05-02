function alterContrat(e) {
    e.preventDefault();
    mapA();
    alterBackgroundColor();
    alterFontColor();
    alterBackgroundColor2();
    alterBackgroundColor3();
    alterBackgroundColor4();
    alterBackgroundColor5();
    alterBackgroundColor6();
    alterBackgroundColor7();
    alterBackgroundColor8()
    changeOutlineAll();
}

function alterBackgroundColor() {
    const contrasteButton = document.querySelector('header');
    let color = contrasteButton.style.backgroundColor;
    
    if (color !== 'black') {
        contrasteButton.style.backgroundColor = 'black';
        contrasteButton.style.borderBottom = '2px solid green';
    } else {
        contrasteButton.style.backgroundColor = 'white';
        contrasteButton.style.borderBottom = '';
    }
}

function alterFontColor() {
    const font = document.querySelectorAll('nav ul li a');
    let elements = [...font];
    elements.forEach(e => {
        if (e.style.color !== 'white') {
            e.style.color = 'white';
        } else {
            e.style.color = 'rgba(0, 0, 0, 0.5)';
        }
    });
}

function alterBackgroundColor2() {
    const contrasteButton = document.querySelector('#fh5co-search-map');
    let color = contrasteButton.style.backgroundColor;
    
    if (color !== 'black') {
        contrasteButton.style.backgroundColor = 'black';
        contrasteButton.style.border = '2px solid yellow';
    } else {
        contrasteButton.style.backgroundColor = '#44C662';
        contrasteButton.style.border = '';
    }
}

function alterBackgroundColor3() {
    const contrasteButton = document.querySelector('#fh5co-search-map .search-property');
    let color = contrasteButton.style.backgroundColor;
    
    if (color !== 'black') {
        contrasteButton.style.backgroundColor = 'black';
    } else {
        contrasteButton.style.backgroundColor = '#44C662';
    }
}

function alterBackgroundColor4() {
    const contrasteButton = document.querySelector('#fh5co-wrapper .fh5co-agent');
    let color = contrasteButton.style.backgroundColor;
    
    if (color !== 'black' || color !== '') {
        contrasteButton.style.backgroundColor = 'black';
    } else {
        contrasteButton.style.backgroundColor = '#44C662';
    }
}

function alterBackgroundColor5() {
    const div = document.querySelector('#fh5co-features');
    if (div.style.backgroundColor !== 'black') {
        div.style.backgroundColor = 'black'
    } else {
        div.style.backgroundColor = '';
    }
}


function alterBackgroundColor6() {
    const div = document.querySelectorAll('.fh5co-section-gray');
    Array.from(div).forEach(e => {
        if (e.style.backgroundColor !== 'black') {
            e.style.backgroundColor = 'black'
            e.style.border = '2px solid yellow';
        } else {
            e.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
            e.style.border = '';
        }
    })
}

function alterBackgroundColor7() {
    const blockquote = document.querySelectorAll('blockquote');
    Array.from(blockquote).forEach(e => {
        if (e.style.backgroundColor !== 'black') {
            e.style.backgroundColor = 'black'
        } else {
            e.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
        }
    })
}

function changeOutlineAll() {
    const outlineAll = document.querySelectorAll('.lista');
    let elements = [...outlineAll];
    elements.forEach(e => {
        if (e.style.outlineColor !== 'yellow') {
            e.style.outlineColor = 'yellow';
        } else {
            e.style.outlineColor = 'black';
        }
    });
}

function mapA() {
    const a = document.querySelectorAll('a');
    Array.from(a).forEach( e => e.classList.add('lista'))
}

function alterBackgroundColor8() {
    const div = document.querySelector('.fh5co-contact');
    div.style.backgroundColor !== 'black' ?  div.style.backgroundColor = 'black' :  div.style.backgroundColor = '';
}