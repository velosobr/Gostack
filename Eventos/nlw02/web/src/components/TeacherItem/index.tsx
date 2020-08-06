import React from 'react';
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/26415164?s=460&u=9587941f06d3c748acd4097b2b9b7ea47fe9455f&v=4" alt="imagem" />
        <div>
          <strong>Lino Veloso</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>Entusiasta das melhores tecnologias
<br /><br />
Apaixonado por expodir coisas em laboratorios e por mudar a vida das pessoas através de experiências.
</p>
      <footer>
        <p>
          Preço/hora
    <strong>R$ 90,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
    Entrar em contato
  </button>
      </footer>
    </article>

  )
}
export default TeacherItem;
