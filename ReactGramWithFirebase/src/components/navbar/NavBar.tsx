import { NavLink } from "react-router-dom";

import { auth, useGetContext } from "../../context/FirebaseAuth";

import { signOut } from "firebase/auth";

import "./NavBar.css";

const NavBar = () => {
  const { stateOfUser } = useGetContext();

  const logOut = async () => {
    await signOut(auth);
    localStorage.removeItem("user-reactgram");
    window.location.reload();
  };

  return (
    <>
      <nav className="nav-bar">
        <NavLink to={"/"}>Home</NavLink>
        {stateOfUser?.displayName ? (
          <>
            <NavLink to={"/userposts"}>Seus Posts</NavLink>
            <NavLink to={"/addpost"}>Criar Post</NavLink>
            <NavLink to={"/about"}>Sobre</NavLink>
            <NavLink
              to={"/logout"}
              onClick={() => {
                logOut();
              }}
            >
              Deslogar
            </NavLink>
          </>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </nav>
      <nav className="nav-bar-sm">
        <label htmlFor="check" className="label-check">
          <i className="material-symbols-outlined">menu</i>
        </label>

        <input type="checkbox" name="check" id="check" />
        <nav>
          <label htmlFor="check" className="label-check">
            <i className="material-symbols-outlined">menu</i>
          </label>
          <NavLink to={"/"}>Home</NavLink>
          {stateOfUser?.displayName ? (
            <>
              <NavLink to={"/userposts"}>Seus Posts</NavLink>
              <NavLink to={"/addpost"}>Criar Post</NavLink>
              <NavLink to={"/about"}>Sobre</NavLink>
              <NavLink
                to={"/logout"}
                onClick={() => {
                  logOut();
                }}
              >
                Deslogar
              </NavLink>
            </>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </nav>
      </nav>
    </>
  );
};

export default NavBar;
