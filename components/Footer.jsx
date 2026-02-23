const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Virgil Khayanga. Built with precision and passion.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & Developed with React,and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
