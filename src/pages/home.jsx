import Card from "../components/Card.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        <Card>
          <Card.Header image="https://source.unsplash.com/random/300x200" />
          <Card.Body title="Card 1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            neque, reprehenderit quam facere mollitia rem deleniti cumque illum
            eaque voluptate dignissimos impedit sit repudiandae autem nisi,
            fugiat sapiente laboriosam dolore.
          </Card.Body>
          <Card.Footer>Amannn</Card.Footer>
        </Card>

        <Card>
          <Card.Header image="https://source.unsplash.com/random/300x200" />
          <Card.Body title="Card 2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            neque, reprehenderit quam facere mollitia rem deleniti cumque illum
            eaque voluptate dignissimos impedit sit repudiandae autem nisi,
            fugiat sapiente laboriosam dolore.
          </Card.Body>
          <Card.Footer>Sipsipoke</Card.Footer>
        </Card>

        <Card>
          <Card.Header image="https://source.unsplash.com/random/300x200" />
          <Card.Body title="Card 3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            neque, reprehenderit quam facere mollitia rem deleniti cumque illum
            eaque voluptate dignissimos impedit sit repudiandae autem nisi,
            fugiat sapiente laboriosam dolore.
          </Card.Body>
          <Card.Footer>Mantappp</Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default Home;
