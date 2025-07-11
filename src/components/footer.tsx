import Logo from '@/components/logo';

const footerLinks = ['Benefits', 'Products', 'Why Us', 'Applications', 'FAQs'];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-8">
            <Logo />
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {footerLinks.map((link) => (
                <span key={link} className="text-sm text-muted-foreground transition-colors hover:text-primary cursor-pointer">
                    {link}
                </span>
            ))}
        </nav>
        <p className="text-sm text-muted-foreground">
            © {currentYear} AluEmpire Office Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
