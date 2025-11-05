import logoHorizontal from "@/assets/logo-horizontal.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <img 
          src={logoHorizontal} 
          alt="Liga Maternar" 
          className="h-10 md:h-12 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;
