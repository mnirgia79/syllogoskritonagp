import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Download, FileText, Scale } from "lucide-react";
import paperTexture from "@assets/generated_images/vintage_paper_texture_for_legal_document.png";

export default function Statute() {
  return (
    <Layout>
      <div className="relative py-20 bg-stone-100 dark:bg-stone-900 border-b">
         <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply">
           <img src={paperTexture} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block flex items-center gap-2">
                <Scale size={16} /> Νομικό Πλαίσιο
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">Καταστατικό</h1>
              <p className="text-lg text-muted-foreground">
                Οι αρχές και οι κανόνες που διέπουν τη λειτουργία του συλλόγου μας.
              </p>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground gap-2 shadow-lg">
              <Download size={18} /> Λήψη PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-card p-8 md:p-12 rounded-xl shadow-sm border relative">
          {/* Decorative binding */}
          <div className="absolute top-0 bottom-0 left-0 w-2 md:w-3 bg-primary/20 rounded-l-xl border-r border-primary/10"></div>
          
          <div className="pl-6 md:pl-8 prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-primary">
            <h2 className="text-center text-3xl mb-12 border-b-2 border-double border-stone-200 pb-4">
              ΚΑΤΑΣΤΑΤΙΚΟΝ<br/>
              <span className="text-lg font-sans font-normal text-stone-500 mt-2 block">Συλλόγου Κρητών Αγίας Παρασκευής</span>
            </h2>

            <h3>ΚΕΦΑΛΑΙΟΝ Α' - ΙΔΡΥΣΙΣ, ΕΠΩΝΥΜΙΑ, ΕΔΡΑ, ΣΚΟΠΟΣ</h3>
            
            <h4>Άρθρον 1</h4>
            <p>
              Ιδρύεται σωματείον υπό την επωνυμίαν «ΣΥΛΛΟΓΟΣ ΚΡΗΤΩΝ ΑΓΙΑΣ ΠΑΡΑΣΚΕΥΗΣ» με έδραν την Αγία Παρασκευή Αττικής.
              Ο Σύλλογος έχει σφραγίδα κυκλικήν φέρουσαν εν τω μέσω παράστασιν του Κρητικού Ήρωα και πέριξ την επωνυμίαν του Συλλόγου και το έτος ιδρύσεως 1980.
            </p>

            <h4>Άρθρον 2 - Σκοπός</h4>
            <p>Σκοποί του Συλλόγου είναι:</p>
            <ol>
              <li>Η σύσφιξις των δεσμών μεταξύ των εν Αγία Παρασκευή και τοις περιχώροις εγκατεστημένων Κρητών.</li>
              <li>Η διατήρησις και διάδοσις των Κρητικών εθίμων, της μουσικής, των χορών και εν γένει της Κρητικής παραδόσεως.</li>
              <li>Η πνευματική και πολιτιστική ανάπτυξις των μελών του.</li>
              <li>Η παροχή ηθικής και υλικής συμπαραστάσεως εις τα έχοντα ανάγκην μέλη.</li>
            </ol>

            <h3>ΚΕΦΑΛΑΙΟΝ Β' - ΜΕΛΗ, ΔΙΚΑΙΩΜΑΤΑ, ΥΠΟΧΡΕΩΣΕΙΣ</h3>

            <h4>Άρθρον 3 - Μέλη</h4>
            <p>
              Τα μέλη του Συλλόγου διακρίνονται εις Τακτικά, Πάρεδρα και Επίτιμα.
            </p>
            <ul>
              <li><strong>Τακτικά μέλη:</strong> Δύνανται να εγγραφούν πάντες οι καταγόμενοι εξ ενός τουλάχιστον γονέως εκ Κρήτης, ηλικίας άνω των 18 ετών.</li>
              <li><strong>Πάρεδρα μέλη:</strong> Φίλοι της Κρήτης μη καταγόμενοι εξ αυτής, επιθυμούντες να συμβάλλουν εις τους σκοπούς του Συλλόγου.</li>
              <li><strong>Επίτιμα μέλη:</strong> Ανακηρύσσονται υπό της Γενικής Συνελεύσεως πρόσωπα προσφέροντα εξαιρετικάς υπηρεσίας εις τον Σύλλογον ή την Κρήτην.</li>
            </ul>

            <h4>Άρθρον 4 - Δικαιώματα & Υποχρεώσεις</h4>
            <p>
              Τα τακτικά μέλη έχουν το δικαίωμα του εκλέγειν και εκλέγεσθαι. Υποχρεούνται εις την καταβολήν της ετησίας συνδρομής και εις την συμμετοχήν εις τας δραστηριότητας του Συλλόγου.
            </p>

            <div className="my-8 p-6 bg-stone-50 border border-stone-200 rounded text-sm italic text-stone-600">
              <FileText className="inline-block mr-2" size={16} />
              Το παρόν αποτελεί απόσπασμα του καταστατικού. Το πλήρες κείμενο είναι διαθέσιμο προς λήψη ή στα γραφεία του συλλόγου.
            </div>

            <h3>ΚΕΦΑΛΑΙΟΝ Γ' - ΔΙΟΙΚΗΣΙΣ</h3>
            <h4>Άρθρον 8</h4>
            <p>
              Ο Σύλλογος διοικείται υπό επταμελούς (7) Διοικητικού Συμβουλίου, εκλεγομένου ανά διετίαν υπό της Γενικής Συνελεύσεως.
            </p>

          </div>
        </div>
      </div>
    </Layout>
  );
}
