export type NavPage = 'home' | 'sobre' | 'servicos' | 'como-trabalhamos' | 'audiovisual' | 'news' | 'colaboradores' | 'contato';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  connectedTo: string;
  iconName: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  featured?: boolean;
}

export interface Collaborator {
  id: string;
  name: string;
  subtitle: string;
  category: string;
}
