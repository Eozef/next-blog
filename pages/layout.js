import Link from "next/link";

export default function Layout(children) {
  return (
    <div>
      <header>
        <div>
          <Link href="/">
            <a>Home Page</a>
          </Link>
          <span>Welcome to my blog</span>
          {""}
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div>&copy; 2022 Joseph.Y</div>
      </footer>
    </div>
  );
}
