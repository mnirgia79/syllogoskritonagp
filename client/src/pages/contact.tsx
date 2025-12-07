import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Check, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Επικοινωνία</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Είμαστε εδώ για να απαντήσουμε σε κάθε ερώτησή σας. Ελάτε σε επαφή μαζί μας ή επισκεφθείτε μας στα γραφεία του συλλόγου.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card p-8 rounded-xl shadow-sm border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
                <MapPin size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold">Διεύθυνση</h3>
              <p className="text-muted-foreground">
                Ηρακλείου 12,<br/>
                11144, Αθήνα<br/>
                Ελλάδα
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border space-y-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-2">
                <Phone size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold">Τηλέφωνο</h3>
              <p className="text-muted-foreground">
                +30 210 1234567<br/>
                +30 690 1234567
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-2">
                <Mail size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold">Email</h3>
              <p className="text-muted-foreground">
                info@syllogoskriton.gr<br/>
                press@syllogoskriton.gr
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-card rounded-xl shadow-lg border p-8 md:p-12">
            <h2 className="font-serif text-3xl font-bold mb-8">Στείλτε μας μήνυμα</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Ονοματεπώνυμο</label>
                  <input id="name" type="text" className="w-full px-4 py-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Γιώργος Παπαδόπουλος" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" type="email" className="w-full px-4 py-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="giorgos@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Θέμα</label>
                <select id="subject" className="w-full px-4 py-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>Γενικές Πληροφορίες</option>
                  <option>Εγγραφή Μέλους</option>
                  <option>Εκδηλώσεις</option>
                  <option>Άλλο</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Μήνυμα</label>
                <textarea id="message" rows={6} className="w-full px-4 py-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Πώς μπορούμε να βοηθήσουμε;"></textarea>
              </div>

              <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8">
                Αποστολή Μηνύματος
              </Button>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  );
}
