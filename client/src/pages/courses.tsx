import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, Music, Users } from "lucide-react";
import danceImage from "@assets/generated_images/traditional_cretan_dance_group_performing.png";
import laoutoImage from "@assets/generated_images/cretan_lute_laouto_instrument.png";

interface Course {
  id: number;
  title: string;
  category: "Χορός" | "Μουσική" | "Πολιτισμός";
  description: string;
  schedule: string;
  instructor: string;
  image: string;
  level: "Αρχάριοι" | "Προχωρημένοι" | "Όλα τα επίπεδα";
}

const courses: Course[] = [
  {
    id: 1,
    title: "Παραδοσιακοί Κρητικοί Χοροί",
    category: "Χορός",
    description: "Μάθετε τα βήματα του Πεντοζάλη, του Μαλεβιζιώτη, του Συρτού και της Σούστας. Ένα ταξίδι στην έκφραση και την λεβεντιά.",
    schedule: "Δευτέρα & Τετάρτη, 18:00 - 20:00",
    instructor: "Γιώργος Βιτώρος",
    image: danceImage,
    level: "Αρχάριοι"
  },
  {
    id: 2,
    title: "Εκμάθηση Κρητικής Λύρας",
    category: "Μουσική",
    description: "Μαθήματα λύρας για όλες τις ηλικίες. Γνωρίστε την τέχνη του δοξαριού και της μελωδίας.",
    schedule: "Τρίτη & Πέμπτη, 17:00 - 21:00",
    instructor: "Αντώνης Ξυλούρης",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80",
    level: "Όλα τα επίπεδα"
  },
  {
    id: 3,
    title: "Εκμάθηση Λαούτου",
    category: "Μουσική",
    description: "Το λαούτο ως συνοδευτικό και σολιστικό όργανο. Ρυθμός, συγχορδίες και ταξιμια.",
    schedule: "Παρασκευή, 17:00 - 20:00",
    instructor: "Μανώλης Πάππος",
    image: laoutoImage,
    level: "Όλα τα επίπεδα"
  },
  {
    id: 4,
    title: "Παιδικό Χορευτικό",
    category: "Χορός",
    description: "Ειδικό τμήμα για τους μικρούς μας φίλους (6-12 ετών). Η πρώτη επαφή με την παράδοση μέσα από το παιχνίδι.",
    schedule: "Σάββατο, 10:00 - 12:00",
    instructor: "Μαρία Κουτσουμπάκη",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80",
    level: "Αρχάριοι"
  },
  {
    id: 5,
    title: "Ριζίτικο Τραγούδι",
    category: "Πολιτισμός",
    description: "Ομάδα μελέτης και απόδοσης ριζίτικων τραγουδιών. Η ψυχή της Κρήτης μέσα από τους στίχους.",
    schedule: "Κυριακή, 18:00 - 20:00",
    instructor: "Ιωσήφ Βεντούρης",
    image: "https://images.unsplash.com/photo-1525926477800-7a392b5b3314?auto=format&fit=crop&q=80",
    level: "Προχωρημένοι"
  }
];

export default function Courses() {
  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Τμήματα & Δραστηριότητες</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ελάτε να μάθουμε, να δημιουργήσουμε και να εκφραστούμε μέσα από την παράδοσή μας.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Schedule Summary */}
        <div className="mb-16 bg-muted/50 p-6 rounded-xl border">
          <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="text-secondary" /> Εβδομαδιαίο Πρόγραμμα
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'].map((day) => (
              <div key={day} className="bg-background p-4 rounded-lg text-center border shadow-sm">
                <span className="font-bold text-primary block mb-2">{day}</span>
                <span className="text-xs text-muted-foreground block">17:00 - 22:00</span>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md">
              <div className="aspect-[4/3] relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="font-bold bg-white/90 text-primary hover:bg-white">
                    {course.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs font-normal text-muted-foreground border-muted-foreground/30">
                    {course.level}
                  </Badge>
                </div>
                <h3 className="font-serif text-2xl font-bold">{course.title}</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {course.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Clock size={16} /> {course.schedule}
                  </div>
                  <div className="flex items-center gap-2 text-stone-600">
                    <Users size={16} /> Διδασκαλία: {course.instructor}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90">Εγγραφή</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-secondary text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-bold mb-4">Θέλετε να ξεκινήσετε;</h2>
            <p className="opacity-90 text-lg">
              Η πρώτη εβδομάδα μαθημάτων είναι δωρεάν για όλα τα νέα μέλη. Ελάτε να γνωριστούμε από κοντά!
            </p>
          </div>
          <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-stone-100 font-bold px-8 shadow-md whitespace-nowrap">
            Επικοινωνήστε μαζί μας
          </Button>
        </div>
      </div>
    </Layout>
  );
}
