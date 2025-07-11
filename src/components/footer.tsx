import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 pb-24 md:pb-0">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 text-center md:text-left">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AluEmpire Office Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
