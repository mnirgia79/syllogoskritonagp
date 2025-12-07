
export interface Announcement {
  id: number;
  title: string;
  date: string;
  summary: string;
  type: 'upcoming' | 'news';
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
  gallery?: string[];
  location?: string;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Έναρξη Εγγραφών Χορευτικών Τμημάτων",
    date: "2024-09-01",
    summary: "Οι εγγραφές για τη νέα χρονιά ξεκίνησαν. Τμήματα ενηλίκων και παιδικά.",
    type: "news"
  },
  {
    id: 2,
    title: "Γενική Συνέλευση Μελών",
    date: "2024-10-15",
    summary: "Καλούνται όλα τα μέλη στην ετήσια τακτική γενική συνέλευση.",
    type: "upcoming"
  },
  {
    id: 3,
    title: "Συλλογή Τροφίμων",
    date: "2024-12-01",
    summary: "Συγκέντρωση τροφίμων για τις γιορτές των Χριστουγέννων.",
    type: "news"
  }
];

export const events: Event[] = [
  {
    id: 1,
    title: "Ετήσιος Χορός 2024",
    date: "2024-02-20",
    description: "Μια μαγική βραδιά με ζωντανή κρητική μουσική και παραδοσιακούς χορούς. Συμμετείχε το συγκρότημα του Αντώνη Μαρτσάκη.",
    location: "Κέντρο 'Ομαλός'",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Αφιέρωμα στον Νίκο Καζαντζάκη",
    date: "2023-11-10",
    description: "Πολιτιστική εκδήλωση προς τιμήν του μεγάλου Κρητικού συγγραφέα.",
    location: "Αίθουσα Συλλόγου",
    image: "https://images.unsplash.com/photo-1461301214746-1e790926d323?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Γιορτή Τσικουδιάς",
    date: "2023-10-05",
    description: "Παραδοσιακό καζανέμα με άφθονη τσικουδιά και μεζέδες.",
    location: "Πλατεία Αγίου Γεωργίου",
    image: "https://images.unsplash.com/photo-1524676104866-b25866a41f8c?auto=format&fit=crop&q=80"
  }
];
