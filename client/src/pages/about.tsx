import Layout from "@/components/layout";
import patternImage from "@assets/generated_images/traditional_cretan_textile_pattern_texture.png";

export default function About() {
  return (
    <Layout>
      <div className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img src={patternImage} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6">Σχετικά με εμάς</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Η ιστορία, οι άνθρωποι και το όραμα του Συλλόγου Κρητών.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-a:text-secondary">
          <h2>Η Ιστορία μας</h2>
          <p>
            Ο Σύλλογος Κρητών ΑΓΠ ιδρύθηκε το 1980 από μια ομάδα Κρητικών που ήθελαν να διατηρήσουν ζωντανή τη φλόγα της παράδοσης μακριά από την πατρίδα.
            Σκοπός του συλλόγου ήταν και παραμένει η σύσφιξη των σχέσεων μεταξύ των Κρητών, η διάδοση των εθίμων, της μουσικής και των χορών της Κρήτης,
            καθώς και η αλληλεγγύη προς τα μέλη μας.
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&q=80" 
            alt="Κρητικό Γλέντι" 
            className="w-full h-[400px] object-cover rounded-xl shadow-lg my-12"
          />

          <h2>Το Διοικητικό Συμβούλιο</h2>
          <p>
            Το Διοικητικό Συμβούλιο εκλέγεται κάθε δύο χρόνια και αποτελείται από ανθρώπους με μεράκι και αγάπη για τον τόπο τους.
          </p>
          <ul>
            <li><strong>Πρόεδρος:</strong> Ιωάννης Παπαδάκης</li>
            <li><strong>Αντιπρόεδρος:</strong> Μαρία Καλογεράκη</li>
            <li><strong>Γραμματέας:</strong> Κώστας Σηφάκης</li>
            <li><strong>Ταμίας:</strong> Ελένη Βαρδινογιάννη</li>
          </ul>

          <h2>Δραστηριότητες</h2>
          <p>
            Ο σύλλογος μας είναι ενεργός καθ' όλη τη διάρκεια του έτους με πλήθος δραστηριοτήτων:
          </p>
          <blockquote>
            "Όποιος την Κρήτη αγαπά και την τιμά όπου κι αν είναι,
            πάντα μαζί μας θα 'χει θέση, φίλος καρδιακός θα μείνει."
          </blockquote>
          <ul>
            <li>Τμήματα εκμάθησης Κρητικών χορών για παιδιά και ενήλικες.</li>
            <li>Μαθήματα Κρητικής λύρας και λαούτου.</li>
            <li>Θεατρική ομάδα με έργα Κρητικών συγγραφέων.</li>
            <li>Φιλανθρωπικές εκδηλώσεις και αιμοδοσία.</li>
            <li>Εκδρομές στην Κρήτη και σε άλλους προορισμούς.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
