import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import Login from "./components/login";
import Movie from "./components/movie";
import MoviesList from "./components/movies-lists";
import Reviews from "./components/reviews";
import MovieRecs from "./components/movie-recs";

function App() {

  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/movies" className="navbar-brand">
          Movie Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/movies"} className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item" >
            { user ? (
              <a href="/#" onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.name}
              </a>
            ) : (            
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
            )}
          </li>
          <li>
            { user &&
              <Link to={"/movies/reviews"} className="nav-link">
                Reviews
              </Link>
            }
          </li>
          <li>
            { user &&
              <Link to={"/movies/movierecs"} className="nav-link">
                Movie Recs
              </Link>
            }
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/movies"]} component={MoviesList} />
          <Route exact path={"/movies/reviews"} component={Reviews}/>
          <Route exact path={"/movies/movierecs"} component={MovieRecs}/>
          <Route 
            path="/movies/:id/review"
            render={(props) => (
              <AddReview {...props} user={user} />
            )}
          />
          <Route 
            path="/movies/:id"
            render={(props) => (
              <Movie {...props} user={user} />
            )}
          />
          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
