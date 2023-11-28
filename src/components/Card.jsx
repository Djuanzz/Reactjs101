const Card = (props) => {
  const { children } = props;
  return (
    <div className="card card-image-cover m-5 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return <img src={image} alt="" />;
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="card-body pb-1 h-full">
      <h2 className="card-header font-bold text-3xl">{name}</h2>
      <p className="text-content2">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { children } = props;
  return (
    <div className="card-body pt-1">
      <div className="card-footer">
        <button className="btn-secondary btn">{children}</button>
      </div>
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
