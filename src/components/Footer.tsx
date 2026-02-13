const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-heading text-xl text-primary-foreground">Vikram Fitness Studio</span>
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-primary-foreground transition-colors">Home</a>
          <a href="#programs" className="hover:text-primary-foreground transition-colors">Programs</a>
          <a href="#about" className="hover:text-primary-foreground transition-colors">About</a>
          <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
        </div>
        <span className="text-xs">&copy; {new Date().getFullYear()} Vikram Fitness Studio. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
