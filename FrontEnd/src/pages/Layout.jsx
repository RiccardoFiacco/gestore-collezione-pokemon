import { Outlet } from "react-router";
import Navbar from "../components/Navabar";

export default function Layout() {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet />
      </main>
    </>
  );
}
