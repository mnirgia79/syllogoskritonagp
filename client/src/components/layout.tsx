import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Facebook, Instagram, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Αρχική" },
    { href: "/events", label: "Εκδηλώσεις" },
    { href: "/courses", label: "Τμήματα" },
    { 
      label: "Ο Σύλλογος", 
      children: [
        { href: "/about", label: "Σχετικά με εμάς" },
        { href: "/history", label: "Ιστορία" },
        { href: "/council", label: "Διοικητικό Συμβούλιο" },
        { href: "/statute", label: "Καταστατικό" },
      ]
    },
    { href: "/contact", label: "Επικοινωνία" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      {/* Top Bar - Info */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-2"><MapPin size={14} /> Ηρακλείου 12, Αθήνα</span>
            <span className="flex items-center gap-2"><Mail size={14} /> info@syllogoskriton.gr</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-serif text-xl font-bold group-hover:bg-secondary transition-colors">
              Κ
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-none tracking-tight text-primary group-hover:text-secondary transition-colors">Σύλλογος Κρητών</span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">ΑΓΠ</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="relative group cursor-pointer">
                    <span className={cn(
                      "text-sm font-medium transition-colors hover:text-primary py-1 flex items-center gap-1",
                      item.children.some(child => location === child.href) ? "text-primary font-bold" : "text-muted-foreground"
                    )}>
                      {item.label}
                    </span>
                    <div className="absolute top-full left-0 w-48 bg-card shadow-lg rounded-md border p-2 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
                      {item.children.map(child => (
                        <Link key={child.href} href={child.href}>
                          <a className={cn(
                            "block px-4 py-2 text-sm rounded-sm hover:bg-muted transition-colors",
                            location === child.href ? "text-primary font-bold bg-muted/50" : "text-foreground"
                          )}>
                            {child.label}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link key={item.href} href={item.href!}>
                  <a className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-1",
                    location === item.href 
                      ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary" 
                      : "text-muted-foreground"
                  )}>
                    {item.label}
                  </a>
                </Link>
              );
            })}
            <Link href="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 rounded-full text-sm font-medium transition-colors">
              Γίνε Μέλος
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="space-y-2">
                    <span className="block p-2 text-lg font-medium text-foreground opacity-50 uppercase tracking-widest text-xs">
                      {item.label}
                    </span>
                    <div className="pl-4 space-y-2 border-l ml-2">
                      {item.children.map(child => (
                        <Link key={child.href} href={child.href}>
                          <a 
                            className={cn(
                              "block p-2 text-base font-medium rounded-md hover:bg-muted",
                              location === child.href ? "text-primary bg-muted/50" : "text-foreground"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link key={item.href} href={item.href!}>
                  <a 
                    className={cn(
                      "block p-2 text-lg font-medium rounded-md hover:bg-muted",
                      location === item.href ? "text-primary bg-muted/50" : "text-foreground"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              );
            })}
            <Link 
              href="/contact"
              className="block w-full text-center bg-primary text-primary-foreground p-3 rounded-md font-medium mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Γίνε Μέλος
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-primary text-primary-foreground mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Σύλλογος Κρητών</h3>
              <p className="text-primary-foreground/80 leading-relaxed max-w-xs">
                Διατηρώντας την παράδοση και τον πολιτισμό της Κρήτης ζωντανό στην καρδιά της πόλης μας από το 1980.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Σύνδεσμοι</h4>
              <ul className="space-y-2">
                <li><Link href="/events" className="hover:text-secondary transition-colors">Εκδηλώσεις</Link></li>
                <li><Link href="/about" className="hover:text-secondary transition-colors">Ιστορία</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors">Επικοινωνία</Link></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Πολιτική Απορρήτου</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Επικοινωνία</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 shrink-0" size={18} />
                  <span>Ηρακλείου 12, 11144<br/>Αθήνα, Ελλάδα</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>info@syllogoskriton.gr</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Σύλλογος Κρητών ΑΓΠ. Με επιφύλαξη παντός δικαιώματος.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
