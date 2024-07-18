import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="border-b">
      <Container designs="flex justify-between p-5">
        <div className="flex gap-10">
          <Link to="/" className="font-extrabold  text-3xl">Tripster</Link>
          <nav className="flex gap-5 items-center max-md:hidden">
            <Link to="/">Oteller</Link>
            <Link to="/">Popüler</Link>
            <Link to="/admin/create">Oluştur</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button className="border border-blue-500 rounded-full py-1 px-5">
            Kayıt Ol
          </button>
          <button className="border bg-blue-500 text-white rounded-full py-1 px-5">
            Giriş Yap
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
