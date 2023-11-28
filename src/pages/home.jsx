import Card from "../components/Card.jsx";
import Navbar from "../components/Navbar.jsx";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "Rp 1.000.000",
    image: "https://source.unsplash.com/random/300x200",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam facere mollitia rem deleniti cumque.",
  },
  {
    id: 2,
    name: "Product 2",
    price: "Rp 700.000",
    image: "https://source.unsplash.com/random/300x200",
    desc: "Lorem ipsum, adipisicing elit. Excepturi neque, reprehenderit quam facere mollitia rem deleniti cumque.",
  },
  {
    id: 3,
    name: "Product 3",
    price: "Rp 500.000",
    image: "https://source.unsplash.com/random/300x200",
    desc: "Lorem ipsum, dolor mollitia rem deleniti cumque.",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Card key={product.id}>
            <Card.Header image={product.image} />
            <Card.Body name={product.name}>{product.desc}</Card.Body>
            <Card.Footer>{product.price}</Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
