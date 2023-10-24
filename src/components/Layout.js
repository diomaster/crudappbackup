import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
      <div>
        <header className="App-header">
            <h2>Crud App</h2>
        </header>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">Project List</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
      
      <Outlet />
      <footer className="App-footer">
          <p>&copy; Copyright 2023</p>
          <p>Envirnment Variable (set in root/.env): {process.env.REACT_APP_SERVER_URL}</p>
      </footer>
</div>
    );
  }
  