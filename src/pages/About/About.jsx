// styles
import './About.scss';

// modules
import { useState, useEffect } from 'react';

// components
import { Button } from '../../components/Button/Button.jsx';
import { AboutCard } from '../../components/AboutCard/AboutCard.jsx';

// images 
import imgAboutCard1 from '../../images/about-card__image.png';
import imgAboutCard2 from '../../images/about-card__image-1.png';
import imgAboutCard3 from '../../images/about-card__image-2.png';

export function About() {
  const [activeCard,setActiveCard] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCard(prevCard => (prevCard < 3 ? prevCard + 1 : 1));
    }, 3000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__text">
          <p className="mainText">Добро пожаловать в отель «Долина 960»</p>
          <p className="text">
          Бутик-отель расположен на Поляне 960, верхнем уровне Курорта Красная Поляна. Небольшой номерной фонд в 48 просторных номеров создает ощущение уединенности и в то же время отвечает запросам молодежной аудитории, которая ценит стиль и активный отдых.
          
          Ресторан отеля подает завтраки по системе «шведский стол» и примечателен интерьерным решением в стиле поп-арт. Рестобар Liechtenstein временно не работает, в отеле работает только Room Service.
          
          Cпа-комплекс отеля предлагает гостям посетить открытый подогреваемым инфинити-бассейн с панорамным видом на горы, крытый бассейн. Также в спа-центре отеля Долина 960, представлена термальная зона с финской сауной, паровой комнатой и турецким хаммамом, крытым бассейном с шезлонгами для отдыха.
          </p>
          <Button style="white" size="small">Быстрое бронирование</Button>
        </div>
        <div className="about__card-block">
          <AboutCard img={imgAboutCard1} header="«Liechtenstein»" text="В ресторане и баре «Liechtenstein» используется авторский подход к приготовлению международных блюд. В заведении представлены блюда европейской, японской и итальянской кухонь. В баре имеется большой выбор терпких напитков и коктейлей." sticker="Ресторан и бар"
          isActive={activeCard === 1}
          ></AboutCard>
          <AboutCard img={imgAboutCard2} header="Термальная зона" text="В спа-центре отеля Долина 960, представлена термальная зона с финской сауной, паровой комнатой и турецким хаммамом, крытым бассейном с шезлонгами для отдыха. Гости могут посетить открытый подогреваемым инфинити-бассейн с панорамным видом на горы, крытый бассейн." sticker="Банный комплекс"
          isActive={activeCard === 2}
          ></AboutCard>
          <AboutCard img={imgAboutCard3} header="Пляжный отдых" text="У тех, кто хочет совместить отдых в горах с купанием в море, есть такая возможность. До городских галечных пляжей Адлера - 40 минут езды на электричке, до пляжей Большого Сочи - 1 час 10 минут." sticker="Отдыхай летом"
          isActive={activeCard === 3}
          ></AboutCard>
        </div>
      </div>
    </div>
  );
}