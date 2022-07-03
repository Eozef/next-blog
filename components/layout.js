import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-600 mb-8 py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            <a>🏡</a>
          </Link>
          <span className="mx-auto">Welcome to My Blog</span>{" "}
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-gray-600 mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          &copy; 2022-2023 Eozef
        </div>
      </footer>
    </div>
  );
}
