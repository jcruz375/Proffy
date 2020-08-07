import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/61796057?s=460&u=c5b9d620804a45d26c9fc3559ff093eee1097d8e&v=4" 
                alt="João Cruz"
            />
            <div>
                <strong>João Cruz</strong>
                <span>Física</span>
            </div>
        </header>
        <p>
            Formado pela universidade de Harvard. 
            <br/><br/>
            Responsável pelo projeto do foguete Alumni que levou o ser humano para outra galaxia
        </p>
        <footer>
            <p>
                Preço/hora 
                <strong>150$</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Entrar em contato"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
};

export default TeacherItem