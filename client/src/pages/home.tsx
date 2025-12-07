import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { announcements, events } from "@/lib/mock-data";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/cretan_landscape_with_olive_trees_and_mountains.png";
import patternImage from "@assets/generated_images/traditional_cretan_textile_pattern_texture.png";

export default function Home() {
  const latestEvents = events.slice(0, 2);
  const latestNews = announcements.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Cretan Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-6 max-w-4xl">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-sm tracking-widest uppercase bg-black/20 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            Καλως Ηρθατε
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Η Κρήτη στην Καρδιά μας
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Ο Σύλλογος Κρητών ΑΓΠ είναι ένας φάρος πολιτισμού, διατηρώντας ζωντανές τις παραδόσεις, 
            τη μουσική και την ιστορία του τόπου μας.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-none text-md h-12 px-8 rounded-full">
              <Link href="/events">Δείτε τις Εκδηλώσεις</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white text-md h-12 px-8 rounded-full">
              <Link href="/about">Μάθετε για Εμάς</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Announcements / News Ticker */}
      <section className="bg-primary text-primary-foreground py-4 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 flex items-center gap-4 overflow-hidden">
          <span className="font-bold text-secondary uppercase tracking-wider text-xs shrink-0 bg-primary-foreground/10 px-2 py-1 rounded">Νεα</span>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm md:text-base font-medium">
              {latestNews[0].title} — <span className="opacity-80 font-normal">{latestNews[0].summary}</span>
            </p>
          </div>
          <Link href="/events" className="text-xs uppercase tracking-widest hover:text-secondary shrink-0 flex items-center gap-1">
            Ολα τα νεα <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Introduction Section with Pattern */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
           <img src={patternImage} className="w-full h-full object-cover mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-primary">
              Μια Ιστορία <span className="text-secondary">Παράδοσης</span>
            </h2>
            <div className="w-20 h-1 bg-secondary rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Από την ίδρυσή μας, ο Σύλλογος Κρητών έχει δεσμευτεί να προάγει τον Κρητικό πολιτισμό μέσα από χορευτικές εκδηλώσεις, 
              μουσικές βραδιές και φιλανθρωπικές δράσεις. Είμαστε μια κοινότητα που ενώνει τους Κρητικούς της διασποράς.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Σας προσκαλούμε να γίνετε μέλος της μεγάλης μας παρέας και να ταξιδέψουμε μαζί στα μονοπάτια της Κρητικής παράδοσης.
            </p>
            <div className="pt-4">
               <Button asChild variant="link" className="text-primary p-0 h-auto font-bold text-lg hover:text-secondary decoration-2 underline-offset-4">
                 <Link href="/about">Διαβάστε την Ιστορία μας</Link>
               </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
              <img 
                src="https://images.unsplash.com/photo-1596319682968-c8d4875a6f17?auto=format&fit=crop&q=80" 
                alt="Traditional Dance" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-xl max-w-[200px] hidden md:block border-l-4 border-secondary">
              <p className="font-serif font-bold text-xl text-primary">40+ Χρόνια</p>
              <p className="text-sm text-muted-foreground">Συνεχούς προσφοράς στον πολιτισμό</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-3">Εκδηλώσεις</h2>
              <p className="text-muted-foreground">Οι επόμενες συναντήσεις μας και αναμνήσεις από τα παλιά.</p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex gap-2">
              <Link href="/events">Όλες οι εκδηλώσεις <ArrowRight size={16} /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {latestEvents.map((event) => (
              <div key={event.id} className="group bg-card hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-border/50">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md shadow-sm font-bold text-primary text-sm">
                    {event.date}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">{event.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm">
                    <MapPin size={16} /> {event.location}
                  </div>
                  <p className="text-muted-foreground mb-6 line-clamp-2">{event.description}</p>
                  <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-secondary font-bold">
                    <Link href={`/events`}>Περισσότερα <ArrowRight size={16} className="ml-2" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/events">Όλες οι εκδηλώσεις</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
