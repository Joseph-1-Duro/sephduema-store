import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href={'/shop'}>Shop</Link></li>
        <li><Link href={'/contact'}>Contact</Link></li>
        <li><Link href={'#arrivals'} scroll>New Arrivals</Link></li>
      </ul>
    </nav>
  )
}