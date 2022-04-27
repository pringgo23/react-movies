import logo from "./logo.svg";
import "./css/App.css";
import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Home.jsx";
import Detail from "./pages/Details.jsx";
import Favorites from "./pages/Favorites.jsx";
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    activePage: "Home",
    posts: [],
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=b2f0ee9217d829b7deaa3ba29a6f813c&language=en-US&page=1"
      )
      .then((data) => {
        this.setState({
          posts: data.data.results,
        });
      })
      .catch((err) => {
        // untuk keperluan mengetahui errornya
        console.log(err, "ini error dari catch");
      })

      .finally(() => {
        // kita set state menjadi false untuk menandakan loading sudah selesai
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <div id="movies">
        <Navbar
          currentPage={(page) => {
            this.setState({
              activePage: page,
            });
          }}
        />

        <div className="p-5">
          {this.state.isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {this.state.activePage === "Home" && (
                <Homepage posts={this.state.posts} />
              )}
              {this.state.activePage === "Detail" && <Detail />}
              {this.state.activePage === "Favorites" && <Favorites />}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
