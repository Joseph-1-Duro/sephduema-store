import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrapper">
        <Logo />
        <Navbar />
        {/* <button /> to show navbar on mobile */}
      </div>
    </header>
  )
}
