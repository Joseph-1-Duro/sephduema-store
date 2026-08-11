import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link aria-label="Home link" href={'/'} className={`logo ${className}`}>
      <Image loading="eager" src={'/logo.png'} width={36} height={36} alt="logo icon" />
      <span>Sephduema</span>
    </Link>
  )
}