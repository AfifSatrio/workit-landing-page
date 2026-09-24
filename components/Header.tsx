import Logo from "./Logo";
import ApplyButtonHeader from "./ApplyButtonHeader";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-dark-purple px-4 sm:px-8 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-8">
        <Logo />
        <ApplyButtonHeader />
      </div>
    </header>
  );
};

export default Header;
