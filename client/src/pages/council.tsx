import Layout from "@/components/layout";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CouncilMember {
  name: string;
  role: string;
  phone?: string;
  email?: string;
  image?: string;
}

const councilMembers: CouncilMember[] = [
  {
    name: "Ιωάννης Σηφάκης",
    role: "Πρόεδρος",
    phone: "697 1234567",
    email: "president@syllogoskriton.gr",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Μαρία Καλογεράκη",
    role: "Αντιπρόεδρος",
    email: "maria.kal@syllogoskriton.gr",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Κώστας Παπαδόπουλος",
    role: "Γενικός Γραμματέας",
    email: "sec@syllogoskriton.gr",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Ελένη Βαρδινογιάννη",
    role: "Ταμίας",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Γιώργος Ανδρεαδάκης",
    role: "Ειδικός Γραμματέας",
  },
  {
    name: "Μανώλης Ξυλούρης",
    role: "Υπεύθυνος Δημοσίων Σχέσεων",
  },
  {
    name: "Σοφία Κουτσογιάννη",
    role: "Μέλος",
  }
];

export default function Council() {
  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Διοικητικό Συμβούλιο</h1>
          <p className="text-xl opacity-90">Οι άνθρωποι που υπηρετούν το όραμα του συλλόγου μας.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {councilMembers.map((member, index) => (
            <div key={index} className="bg-card rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow group">
              <div className="aspect-square w-full bg-muted relative overflow-hidden">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-stone-100 text-stone-300">
                    <span className="font-serif text-6xl opacity-20">{member.name[0]}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider bg-secondary px-2 py-1 rounded w-fit mb-2">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-4">{member.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {member.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-primary" />
                      <span>{member.phone}</span>
                    </div>
                  )}
                  {member.email && (
                    <div className="flex items-center gap-2">
                      <Mail size={14} className="text-primary" />
                      <span>{member.email}</span>
                    </div>
                  )}
                  {!member.phone && !member.email && (
                    <p className="italic text-xs">Επικοινωνία μέσω της γραμματείας</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-muted/30 p-8 rounded-xl text-center max-w-2xl mx-auto border border-dashed border-primary/30">
          <h3 className="font-serif text-2xl font-bold mb-4">Εκλογές</h3>
          <p className="text-muted-foreground mb-6">
            Το Διοικητικό Συμβούλιο εκλέγεται από τη Γενική Συνέλευση των μελών κάθε 2 χρόνια.
            Οι επόμενες εκλογές έχουν προγραμματιστεί για τον <strong>Οκτώβριο του 2025</strong>.
          </p>
          <Button variant="outline">Μάθετε περισσότερα για τη διαδικασία</Button>
        </div>
      </div>
    </Layout>
  );
}
