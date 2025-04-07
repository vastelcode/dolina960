import './Button.scss';

export function Button({children, style, size}) {
  return (
    <button className={`btn ${style === 'purple' ? 'btn-purple' : 'btn-white'} ${size === 'big' ? 'btn-big' : 'btn-small'}`}>{children}</button>
  );
}