
export interface Member {
  id: string;
  name: string;
  stageName?: string;
  role: string;
  bio: string;
  imageUrl: string;
  birthDate?: string; // Formato: "YYYY-MM-DD"
  birthdayBio?: string;
  birthdayMedia?: { type: 'image' | 'video', url: string }[];
  spotifyArtistId?: string; // ID do artista no Spotify (ex: 5sb2QDcxFbioF6FfnlhUhI)
  featuredTracks?: string[]; // Array de IDs de faixas (ex: 6p8YvL6z8L...)
  socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    spotify?: string;
    tiktok?: string;
    apple?: string;
    shazam?: string;
    amazon?: string;
    soundcloud?: string;
    ffm?: string;
  };
}

export interface Release {
  title: string;
  artist: string; 
  type: 'Album' | 'EP' | 'Single' | 'Mixtape';
  releaseDate: string; 
  releaseFullDate: string; 
  releaseYear: string;
  releaseDay: string;
  coverUrl: string;
  isUpcoming?: boolean;
  accentColor?: string; 
  artistIcon?: string; 
  description?: string;
  spotifyId?: string; // ID da faixa/álbum para embed
  links: {
    spotify?: string;
    apple?: string;
    audiomack?: string;
    amazon?: string;
    youtube?: string;
    iheart?: string;
    soundcloud?: string;
    shazam?: string;
  };
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  artistId?: string; // Referência ao ID do membro ou 'group'
}

export type GalleryCategory = 'Bastidores' | 'Shows' | 'Lifestyle' | 'Arte' | 'Memorial' | 'Grupo';

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: GalleryCategory;
  description?: string;
  date?: string; // YYYY-MM-DD
  tags?: string[];
  author?: string;
  likesBase?: number;
  shareSlug?: string;
}

export type EventStatus = 'Confirmado' | 'Em Preparação' | 'Realizado' | 'Cancelado';

export interface AgendaEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  timeStart?: string; // HH:MM
  timeEnd?: string;
  type: 'Show' | 'Release' | 'Birthday' | 'Meeting' | 'Festival' | 'Ensaio' | 'Outro';
  location?: string;
  city?: string;
  venue?: string;
  address?: string;
  description?: string;
  accentColor?: string;
  status: EventStatus;
  highlight?: boolean;
  
  // Click Targets
  ticketUrl?: string;
  mapUrl?: string;
  mediaUrl?: string;
  relatedArtistId?: string;
  platformRoute?: string;
  rsvpEnabled?: boolean;
  shareEnabled?: boolean;
}

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  category: 'Bastidores' | 'Lançamentos' | 'Agenda';
  excerpt: string;
}

export interface FanMessage {
  name: string;
  message: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  pitch: string;
  icon: string;
}

export interface MerchItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  category: string;
}
