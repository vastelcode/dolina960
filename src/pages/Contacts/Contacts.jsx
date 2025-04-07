// styles
import './Contacts.scss';

// images
import imgTg from '../../images/telegram.svg';

// components
import { Point } from '../../components/Point/Point.jsx';

export function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__text">
        <p className="mainText">Контакты</p>
        <div className="contacts__wrapper-links">

        <div className="contacts__wrapper-tg">
          <img src={imgTg} alt="" />
          <p className="contacts__text-tg">
          Telegram канал «Лучшие горнолыжные курорты России»
          </p>
        </div>

        <div className="contacts__wrapper-info">
        <p className="bigText">Свяжитесь с нами:</p>
        <div className="contacts__wrapper-points">
          <Point text="8 (861) 205-07-32 (бронирование в Москве)"></Point>
          <Point text="8 (499) 322-14-78 (корпоративный отдел)"></Point>
        </div>
        </div>      

        <div className="contacts__wrapper-info">
        <p className="bigText">Адрес туристической компании:</p>
        <div className="contacts__wrapper-points">
          <Point text="г. Москва, ул. Бауманская, д.6, стр.2, Бизнес-центр Виктория Плаза, 8 этаж, 804 офис."></Point>
        </div>
        </div>

        <div className="contacts__wrapper-info">
        <p className="bigText">Адрес:</p>
        <div className="contacts__wrapper-points">
          <Point text="Россия, г. Сочи, Курорт Красная Поляна 960, ул. Горная, д. 2."></Point>
        </div>
        </div>


        </div>
        <p className="text">
        *Обращаем Ваше внимание на то, что данный Интернет-сайт носит исключительно информационный характер и ни при каких условиях результаты расчетов не являются публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации. За окончательным расчетом обращайтесь к нашим менеджерам. Данный ресурс не является официальным сайтом отеля.
        </p>
      </div>
      <div className="contacts__wrapper-map">
      <div style={{ position: 'relative', overflow: 'hidden' }} className="contacts__map">
  <a href="https://yandex.ru/maps/239/sochi/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Сочи</a>
  <a href="https://yandex.ru/maps/239/sochi/?azimuth=0.6193673016498252&ll=40.261671%2C43.667831&utm_medium=mapframe&utm_source=maps&z=19.19" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Яндекс Карты</a>
  <iframe
    src="https://yandex.ru/map-widget/v1/?azimuth=0.6193673016498252&ll=40.261671%2C43.667831&z=19.19"
    width="636"
    height="450"
    frameBorder="1"
    allowFullScreen={true}
    style={{ position: 'relative' }}
    title="Карта Яндекс" // Добавлен title для accessibility
  />
</div>
      </div>
    </div>
  );
}