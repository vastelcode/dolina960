// styles
import './Territory.scss';

// images 

import imgBar1 from '../../images/image__bar.png';
import imgBar2 from '../../images/image__bar-1.png';
import imgBar3 from '../../images/image__bar-2.png';
import imgBar4 from '../../images/image__bar-3.png';

import imgBeach1 from '../../images/image__beach.png';
import imgBeach2 from '../../images/image__beach-1.png';
import imgBeach3 from '../../images/image__beach-2.png';
import imgBeach4 from '../../images/image__beach-3.png';

import imgSpa1 from '../../images/image__spa.png';
import imgSpa2 from '../../images/image__spa-1.png';
import imgSpa3 from '../../images/image__spa-2.png';
import imgSpa4 from '../../images/image__spa-3.png';

import imgEntertainments1 from '../../images/image__entertainments.png';
import imgEntertainments2 from '../../images/image__entertainments-1.png';
import imgEntertainments3 from '../../images/image__entertainments-2.png';
import imgEntertainments4 from '../../images/image__entertainments-3.png';

// Components
import { Point } from '../../components/Point/Point.jsx';

export function Territory() {

  // arrays with images
  let imagesBar = [imgBar1,imgBar2,imgBar3,imgBar4];
  let imagesBeach = [imgBeach1,imgBeach2,imgBeach3,imgBeach4];
  let imagesSpa = [imgSpa1,imgSpa2,imgSpa3,imgSpa4];
  let imagesEntertainments = [imgEntertainments1,imgEntertainments2,imgEntertainments3,imgEntertainments4];

  return (
    <div className="territory">
      <div className="territory__wrapper">
        <div className="territory__wrapper-text">
          <p className="mainText">Рестораны и бары</p>
          <p className="text">
          На территории отеля работает рестобар «Liechtenstein», примыкающая к нему банкетная терраса и яркий оригинальный лобби-бар.
          </p>
          <p className="bigText">
          Ресторан и бар «Liechtenstein»
          </p>
          <p className="text">
          Роскошный стиль поп-арт, репродукции картин Роя Лихтенштейна, живописные панорамные виды Кавказских гор в сочетании с высоким сервисом и авторским подходом к приготовлению блюд разных кухонь мира подарят незабываемые впечатления от гастрономического отдыха.
          </p>
          <p className="bigText">Room Servise</p>
          <p className="text">
          Рестобар Liechtenstein временно не работает, в отеле работает только Room Service. В отеле работает служба доставки еды и напитков в номер с 11:00 до 22:30, бар открыт с 11:00 до 23:00.
          </p>
        </div>
        <div className="territory__wrapper-img">
          <div className="territory__wrapper-grid">
            {imagesBar.map((img,index) => (
            <img 
            src={img} 
            key={index}
            />
            )
          )}
          </div>
        </div>
      </div>

      <div className="territory__wrapper">
        <div className="territory__wrapper-text">
          <p className="mainText">Пляж</p>
          <p className="text">
          Каждый день на побережье Черного моря от горного курорта курсирует бесплатный трансфер к самым ближайшим пляжам в Имеретинской низменности. Записаться на нужное время нужно заранее на стойке ресепшен. Просторный пляж для гостей курорта расположен вблизи Олимпийского парка и крупнейшего в России тематического парка развлечений Сочи Парк. На территории пляжа есть вся необходимая инфраструктура для отдыха на побережье: шезлонги и зонтики, зона аэрария, прокат SUP-бордов. Множество кафе на выбор всего в нескольких шагах.
          </p>
        </div>
        <div className="territory__wrapper-img">
          <div className="territory__wrapper-grid">
          {imagesBeach.map((img,index) => (
            <img 
            src={img} 
            key={index}
            />
            )
          )}
          </div>
        </div>
      </div>

      <div className="territory__wrapper">
        <div className="territory__wrapper-text">
          <p className="mainText">SPA-комплекс</p>
          <p className="text">
          Преимуществом отеля в горах является его крытый бассейн и банный комплекс.
          </p>
          <div className="territory__wrapper-points">
            <Point text="Крытый бассейн"></Point>
            <Point text="Хаммам"></Point>
            <Point text="Сауна"></Point>
            <Point text="Массажи"></Point>
            <Point text="Парная"></Point>
            <Point text="Инфинити-бассейн"></Point>
          </div>
        </div>
        <div className="territory__wrapper-img">
          <div className="territory__wrapper-grid">
          {imagesSpa.map((img,index) => (
            <img 
            src={img} 
            key={index}
            />
            )
          )}
          </div>
        </div>
      </div>

      <div className="territory__wrapper">
        <div className="territory__wrapper-text">
          <p className="mainText">Развлечения и спорт</p>
          <p className="text">
          В центре курорта Красная Поляна, где находится отель, имеется аквапарк, торговые и развлекательные центры, салоны красоты и другие объекты курортной инфраструктуры
          </p>
          <p className="bigText">Спортивный зал</p>
          <p className="text">
          Спортивный зал отеля оснащен современными тренажерами для кардиотренировок, силовых нагрузок, ковриками для занятий йогой. Из панорамных окон открывается красивый вид.
          </p>
          <p className="bigText">Прокат</p>
          <p className="text">
          В службе проката можно арендовать горный или городской велосипед, сигвеи и самокаты, квадроциклы и электромопеды. Прогулки на них доставят вам большое удовольствие, прокат предоставляет в пользование только новые, проверенные модели.
          </p>
          <p className="bigText">Горнолыжные трассы</p>
          <p className="text">
          Горнолыжные трассы курорта Красная Поляна имеют различный уровень сложности, благодаря чему туристы могут выбрать трассу, которая соответствует их уровню подготовки. Новички могут воспользоваться курсом по обучению горнолыжному спорту.
          </p>
        </div>
        <div className="territory__wrapper-img">
          <div className="territory__wrapper-grid">
          {imagesEntertainments.map((img,index) => (
            <img 
            src={img} 
            key={index}
            />
            )
          )}
          </div>
        </div>
      </div>


    </div>
  );
}