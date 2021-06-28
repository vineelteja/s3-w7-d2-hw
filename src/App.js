import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MediaList } from "./medialist";

export default function App() {
  //Insert router, links here
  const RenderMedia = MediaList.map((media) => {
    return (
      <Link to={`/${media.name}`}>
        <img
          src={media.img_src}
          className={media.class}
          key={media.name}
          alt={media.name}
        />
      </Link>
    );
  });

  return (
    <Router>
      <div className="container">
        <div>{RenderMedia}</div>
        <Switch>
          <Routes>
            <Route path="/:id" element={<Child />}></Route>
          </Routes>
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  // Below this comment, there's one major key script missing
  const { id } = useParams();

  return (
    <div>
      <h3>
        You Selected:<span>{id}</span>
      </h3>
    </div>
  );
}
