const Button = (props) => {
  const { children = "oke", variant = "bg-blue-500 " } = props;
  return (
    <>
      <button
        className={`${variant} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
        {children}
      </button>
    </>
  );
};

export default Button;
