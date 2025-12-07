import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import vintagePhoto from "@assets/generated_images/vintage_black_and_white_photo_of_1980s_cretan_club_members.png";
import paperTexture from "@assets/generated_images/vintage_paper_texture_for_legal_document.png";

export default function History() {
  return (
    <Layout>
      <div className="relative py-20 bg-stone-100 dark:bg-stone-900 overflow-hidden">
         <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img src={paperTexture} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Ιδρυση 1980</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Η Ιστορία μας</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Τέσσερις δεκαετίες προσφοράς, πολιτισμού και αγάπης για την Κρήτη.
            Ένα ταξίδι που ξεκίνησε από μια παρέα φίλων και έγινε θεσμός.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="prose prose-lg prose-stone max-w-none">
            <h3 className="font-serif text-2xl font-bold text-primary">Τα Πρώτα Βήματα</h3>
            <p>
              Ο Σύλλογος Κρητών Αγίας Παρασκευής (ΑΓΠ) ιδρύθηκε το 1980 από μια ομάδα Κρητικών που κατοικούσαν στην περιοχή 
              και ένιωθαν την ανάγκη να δημιουργήσουν ένα σημείο αναφοράς για την πατρίδα τους. 
              Σκοπός τους ήταν να διατηρήσουν ζωντανά τα ήθη και τα έθιμα της Κρήτης και να τα μεταλαμπαδεύσουν στις νεότερες γενιές.
            </p>
            <p>
              Η πρώτη συνάντηση έγινε στο καφενείο του "Μανώλη", όπου αποφασίστηκε η δημιουργία του καταστατικού και η διενέργεια των πρώτων εκλογών.
              Ο πρώτος πρόεδρος, Γεώργιος Βαρδινογιάννης, έθεσε τα θεμέλια για έναν σύλλογο που θα αγκάλιαζε όλους τους Κρητικούς της περιοχής.
            </p>

            <h3 className="font-serif text-2xl font-bold text-primary mt-8">Η Εξέλιξη</h3>
            <p>
              Μέσα στα χρόνια, ο σύλλογος μεγάλωσε. Από τα πρώτα μικρά γλέντια, περάσαμε σε μεγάλες διοργανώσεις, θεατρικές παραστάσεις 
              και συμμετοχές σε φεστιβάλ σε όλη την Ελλάδα. Το 1995, ο σύλλογος απέκτησε τη δική του στέγη, έναν χώρο που φιλοξενεί 
              τις πρόβες των χορευτικών, τη δανειστική βιβλιοθήκη και τις συνεδριάσεις του Δ.Σ.
            </p>
          </div>

          <div className="space-y-8">
            <div className="relative p-4 bg-white shadow-xl rotate-1 transform transition-transform hover:rotate-0">
              <img 
                src={vintagePhoto} 
                alt="Ιδρυτικά μέλη, 1980" 
                className="w-full h-auto grayscale sepia-[.3]"
              />
              <p className="font-serif text-center mt-4 text-sm text-stone-600 italic">
                Το πρώτο Διοικητικό Συμβούλιο και μέλη του συλλόγου, 1980.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-xl border border-border/50">
              <h4 className="font-serif text-xl font-bold mb-4 text-primary">Σημαντικοί Σταθμοί</h4>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="font-bold text-secondary">1980</span>
                  <span className="text-muted-foreground">Ίδρυση του Συλλόγου και έγκριση καταστατικού.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-secondary">1985</span>
                  <span className="text-muted-foreground">Δημιουργία του πρώτου χορευτικού τμήματος.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-secondary">1995</span>
                  <span className="text-muted-foreground">Αγορά ιδιόκτητων γραφείων στην οδό Ηρακλείου.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-secondary">2010</span>
                  <span className="text-muted-foreground">Βράβευση από την Πανελλήνια Ομοσπονδία Κρητικών Σωματείων.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Separator className="mb-12" />
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Πρόεδροι που υπηρέτησαν</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Γεώργιος Βαρδινογιάννης (1980-1988)', 'Μανούσος Μανουσάκης (1988-1996)', 'Εμμανουήλ Κεφαλογιάννης (1996-2004)', 'Νικόλαος Παπαδάκης (2004-2012)', 'Ιωάννης Σηφάκης (2012-Σήμερα)'].map((name, i) => (
              <div key={i} className="p-4 bg-card rounded-lg border shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-stone-200 rounded-full mx-auto mb-3 flex items-center justify-center font-serif font-bold text-stone-500">
                  {name.split(' ')[0][0]}
                </div>
                <p className="font-bold text-sm text-primary">{name.split(' (')[0]}</p>
                <p className="text-xs text-muted-foreground">{name.match(/\((.*?)\)/)?.[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
