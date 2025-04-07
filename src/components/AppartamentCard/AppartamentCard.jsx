// styles
import './AppartamentCard.scss';

// images
import imgRuble from '../../images/₽.png';

// components
import { Button } from '../Button/Button.jsx';

export function AppartamentCard({img, header, price}) {
  return (
    <div className="appartament-card">
      <div className="appartament-card__content">
        <img src={img} alt="" className="appartament-card__img" />
        <div className="appartament-card__text">
          <p className="appartament-card__header">{header}</p>
          <p className="appartament-card__price">
            <img src={imgRuble} alt="" />
            {price}
            </p>
          <Button style="purple" size="small">Подробнее</Button>
        </div>
      </div>
    </div>
  );
}