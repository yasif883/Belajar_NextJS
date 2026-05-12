import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="header">
      <nav>
        <Image src="https://cf.shopee.co.id/file/id-11134216-7rbk5-m98h1d137lzla4" alt="Logo" width={100} height={50} />
        <div className="logo">
          <Link href="">Dimensimu 3D</Link>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
