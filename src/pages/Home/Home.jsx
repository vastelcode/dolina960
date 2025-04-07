// styles
import './Home.scss';

// images
import imgStar from '../../images/star-icon.svg';
import imgAppartament1 from '../../images/appartment-card__image-1.png';
import imgAppartament2 from '../../images/appartment-card__image-2.png';
import imgAppartament from '../../images/appartment-card__image.png';

// components
import { Sticker } from '../../components/Sticker/Sticker.jsx';
import { AppartamentCard } from '../../components/AppartamentCard/AppartamentCard.jsx';


export function Home() {
  return (
    <div className="home">
      <div className="home__text">
        <div className="home__wrapper-stars">
          <img src={imgStar} alt="" />
          <img src={imgStar} alt="" />
          <img src={imgStar} alt="" />
          <img src={imgStar} alt="" />
        </div>
        <p className="mainText">
        Отель «Долина 960»
        </p>
        <Sticker>Быстрое бронирование</Sticker>
      </div>
      <div className="home__offers">
        <p className="bigText">Лучшие предложения</p>
        <div className="home__wrapper-offers">
          <AppartamentCard header="Премиум Кинг" price="4000" img={imgAppartament}></AppartamentCard>
          <AppartamentCard header="Экслюзивный Кинг" price="5000" img={imgAppartament1}></AppartamentCard>
          <AppartamentCard header="Star Кинг" price="8000" img={imgAppartament2}></AppartamentCard>
        </div>
      </div>
    </div>
  );
}