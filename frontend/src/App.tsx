import Footer from "components/footer";
import NavBar from "components/navbar";
import Table from "components/table";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo!</h1>
        <Table/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
