import {
  NavLink,
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
function Navigation() {
  return (
    <section className="navigation">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="Navigate"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="Navigate"
        to="/"
      >
        Home
      </NavLink>
    </section>
  );
}

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is my Home page</p>
      <p>click the About button to go to about page</p>
      <Navigation />
    </div>
  );
}

export function About() {
  const location = useLocation();
  // console.log(location);
  const { out } = useParams();
  // console.log(param);
  return (
    <div>
      <h1>About</h1>
      <p>this is my About page</p>
      <p>click Home button to go back to home page</p>
      <p>i am a param of value {out}</p>
      <Navigation />
      <Outlet />
    </div>
  );
}

function Myout() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  return (
    <div>
      <p>i am an outlet</p>
      <button onClick={() => navigate("/about")}>navigate to home</button>
    </div>
  );
}

function Layout() {
  return <Head>I am the heading layout</Head>;
}

function Head(props) {
  return <h1 style={{ fontSize: "55px", color: "green" }}>{props.children}</h1>;
}

function Another() {
  return (
    <div>
      <p>i am another one</p>
    </div>
  );
}

function Rout() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="out" element={<Myout />} />
          <Route path=":another" element={<Another />} />
        </Route>
      </Routes>
    </>
  );
}

export default Rout;
