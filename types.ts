export interface GalleryItem {
  id: number;
  url: string;
  title_sl: string;
  description_sl: string;
  tags: string[];
}

export interface WorkHourStat {
  role: string;
  hours: number;
  tasks: string;
}

export interface StatMetric {
  value: string;
  label: string;
  icon?: string;
}