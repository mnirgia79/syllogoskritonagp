import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { announcements, events } from "@/lib/mock-data";
import { Calendar, ChevronRight, Clock, MapPin } from "lucide-react";
import lyraImage from "@assets/generated_images/cretan_lyra_musical_instrument.png";
import { Link } from "wouter";

export default function Events() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src={lyraImage} className="w-full h-full object-cover object-center mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-serif text-5xl font-bold mb-4">Εκδηλώσεις & Νέα</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Μείνετε ενημερωμένοι για τις δραστηριότητες του συλλόγου μας και ανακαλύψτε στιγμές από το παρελθόν.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content - Events List */}
          <div className="lg:col-span-2 space-y-12">
            <h2 className="font-serif text-3xl font-bold border-b pb-4 mb-8">Πρόσφατες & Μελλοντικές Εκδηλώσεις</h2>
            
            {events.map((event) => (
              <div key={event.id} className="flex flex-col md:flex-row gap-6 bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
                <div className="md:w-1/3 aspect-video md:aspect-auto relative overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-secondary font-bold text-sm mb-2 uppercase tracking-wide">
                    <Calendar size={14} /> {event.date}
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">{event.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm">
                    <MapPin size={14} /> {event.location}
                  </div>
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  <Button variant="outline" className="w-fit">Δείτε Φωτογραφίες</Button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar - Announcements */}
          <div className="space-y-8">
            <div className="bg-muted/50 p-6 rounded-xl border">
              <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">
                <Clock className="text-secondary" /> Ανακοινώσεις
              </h3>
              <div className="space-y-6">
                {announcements.map((item) => (
                  <div key={item.id} className="border-l-2 border-primary/20 pl-4 py-1 hover:border-secondary transition-colors">
                    <span className="text-xs font-bold text-muted-foreground block mb-1">{item.date}</span>
                    <h4 className="font-bold text-foreground mb-1 hover:text-primary cursor-pointer transition-colors">{item.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.summary}</p>
                  </div>
                ))}
              </div>
              <Button asChild variant="link" className="mt-4 px-0 text-secondary font-bold">
                <Link href="/events">Όλες οι ανακοινώσεις <ChevronRight size={16} /></Link>
              </Button>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-xl text-center space-y-4">
              <h3 className="font-serif text-2xl font-bold">Εγγραφείτε στο Newsletter</h3>
              <p className="opacity-90 text-sm">Λάβετε τα νέα και τις προσκλήσεις μας απευθείας στο email σας.</p>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Το email σας" 
                  className="w-full px-4 py-2 rounded-md bg-primary-foreground text-primary border-none focus:ring-2 focus:ring-secondary"
                />
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold">Εγγραφή</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
