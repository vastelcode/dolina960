// styles
import './AboutCard.scss';

// components
import { Sticker } from '../Sticker/Sticker.jsx';

export function AboutCard({sticker, header, text, img, isActive}) {
  return (
    <div className={`about-card ${isActive ? 'about-card_active' : ''}`}>
      <div className="about-card__content">
        <img src={img} alt="" className="about-card__img" />
        <Sticker>{sticker}</Sticker>
        <p className="about-card__header">{header}</p>
        <p className="about-card__text">
          {text}
        </p>
      </div>
    </div>
  );
}