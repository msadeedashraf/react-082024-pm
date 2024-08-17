import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
function App() {
  const mydishes = [
    "Chocolate Quark Cake",
    "Creamy Tomato Soup",
    "5 Minute Xocai Chocolate Mug Cake",
    "Gingerbread Mummies",
    "The Best Arugula Pesto",
    "Avocado and Orange Salad With Orange-Ginger Dressing",
    "The Best Arugula Pesto",
  ];
  return (
    <>
      <Header name="CJ's" />

      <Main adjective="amazing" dishes={mydishes} />

      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;
