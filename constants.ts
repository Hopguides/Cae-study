import { GalleryItem, WorkHourStat, StatMetric } from './types';

export const ZOIS_CHARACTER_GALLERY: GalleryItem[] = [
  {
    id: 1,
    url: 'https://lmdizcjjqeizmfcrakni.supabase.co/storage/v1/object/public/Web-photos/ezgif-frame-003.jpg',
    title_sl: 'Žiga Zois - Naslovnica',
    description_sl: 'Uvodni kader z naslovom projekta in portretom barona Zoisa.',
    tags: ['intro', 'kabinet']
  },
  {
    id: 2,
    url: 'https://lmdizcjjqeizmfcrakni.supabase.co/storage/v1/object/public/Web-photos/ezgif-frame-006.jpg',
    title_sl: 'Zois govori',
    description_sl: 'Bližnji plan barona Zoisa med pripovedovanjem.',
    tags: ['animacija', 'govor']
  },
  {
    id: 5,
    url: 'https://lmdizcjjqeizmfcrakni.supabase.co/storage/v1/object/public/Web-photos/ezgif-frame-017.jpg',
    title_sl: 'Zois na vozičku',
    description_sl: 'Zgodovinsko natančna upodobitev Zoisa na vozičku v knjižnici.',
    tags: ['voziček', 'knjižnica']
  },
  {
    id: 10,
    url: 'https://lmdizcjjqeizmfcrakni.supabase.co/storage/v1/object/public/Web-photos/ezgif-frame-030.jpg',
    title_sl: 'Postojnska jama',
    description_sl: 'Zois raziskuje kraško jamo s stalaktiti.',
    tags: ['jama', 'kras']
  }
];

export const ZOIS_MINERALS_GALLERY: GalleryItem[] = [
  {
    id: 30,
    url: 'https://lmdizcjjqeizmfcrakni.supabase.co/storage/v1/object/public/Web-photos/ezgif-frame-039.jpg',
    title_sl: 'Malahit',
    description_sl: 'Zeleni malahit z značilnimi pasovi in teksturo.',
    tags: ['malahit', 'mineral']
  },
  {
    id: 33,
    url: 'https://lmdizcjjqeizmfcrakni.supabase.co/storage/v1/object/public/Web-photos/ezgif-frame-192.jpg',
    title_sl: 'Ametistna geoda',
    description_sl: 'Prerez ametistne geode z vijoličnimi kristali.',
    tags: ['ametist', 'geoda']
  },
  {
    id: 12,
    url: 'https://lmdizcjjqeizmfcrakni.supabase.co/storage/v1/object/public/Web-photos/ezgif-frame-042.jpg',
    title_sl: 'Preučevanje vzorcev',
    description_sl: 'Zois preučuje rdeče mineralne vzorce iz svoje zbirke.',
    tags: ['znanost', 'zbirka']
  }
];

export const WORK_HOURS_DATA: WorkHourStat[] = [
  {
    role: 'Video Editor',
    hours: 235,
    tasks: 'Montaža, rotoscoping brkov, korekcija "žarenja", animacija'
  },
  {
    role: 'Sound Engineer',
    hours: 115,
    tasks: 'Sinhronizacija govora, odprava časovnih zamikov, mastering'
  },
  {
    role: 'AI Asistent',
    hours: 50,
    tasks: 'Analiza scenarijev, generiranje QR kod, klasifikacija gliv'
  }
];

export const PROJECT_STATS: StatMetric[] = [
  { value: '400', label: 'Delovnih ur', icon: 'clock' },
  { value: '3', label: 'Ekipe (Video, Zvok, AI)', icon: 'users' },
  { value: '16k €', label: 'Vrednost projekta', icon: 'euro' }
];