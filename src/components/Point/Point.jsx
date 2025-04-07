// styles
import './Point.scss';

// images
import imgArrow from '../../images/arrow.svg';

export function Point({ text }) {
  return (
    <div className="point">
      <img src={imgArrow} alt="" />
      <p className="point__text">{text}</p>
    </div>
  );
}