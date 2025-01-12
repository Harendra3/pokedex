export default function Header(props) {
  const { handlemenu } = props;
  return (
    <header>
      <button className="open-nav-button" onClick={handlemenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <h1 className="text-gradient">Pokedex</h1>
    </header>
  );
}
