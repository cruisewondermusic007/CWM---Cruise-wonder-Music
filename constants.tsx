
import { Member, Release, GalleryItem, AgendaEvent, NewsPost, FanMessage, Service, MerchItem, VideoItem } from './types';

export const FORM_ENDPOINT = "https://formspree.io/f/FORM_ENDPOINT_AQUI";

export const ASSETS = {
  // Links formatados para download direto para garantir que funcionam como <img>
  logoCircle: 'https://1drv.ms/i/c/aa0272bb4bd889ac/IQCXVcd-gghLRYkNznUVnbeXAWuHhfp2ayw4T5YG0tVpieM?e=VHH7No&download=1',         
  logoWide: 'assets/logo_horizontal_cwm.png',       
  dadilson: 'https://1drv.ms/i/c/aa0272bb4bd889ac/IQAu4SMq6IvUQqSBZFY7bEHXAWGUNoxDgYfgJFHs6c5lA58?e=qTEIGW&download=1', 
  jmilano: 'assets/j_milano_studio.jpg',               
  xtremo: 'assets/xtremo_delelis_style.jpg',           
  manilson: 'assets/manilson_clever_profile.jpg',      
  giovanni: 'assets/giovanni_gervasio_bears.jpg',      
  mariana: 'https://placehold.co/800x1000/000000/FFFFFF?text=Mariana+de+Jesus',              
  groupNight: 'assets/cwm_grupo_noite.jpg',            
  groupStudio: 'assets/cwm_grupo_studio.jpg',          
  posterNoveMbro: 'assets/poster_nove_mbro.jpg',       
};

export const SOCIAL_LINKS = {
  spotify: 'https://open.spotify.com/artist/5GNqFAQXN1CT6frtSmHHpc',
  appleMusic: 'https://music.apple.com/us/artist/cwm-cruise-wonder-music/1688713807',
  amazon: 'https://music.amazon.com/artists/B0C5T1TJFG/cwm---cruise-wonder-music',
  soundcloud: 'https://soundcloud.com/cwm-cruisewondermusic',
  youtube: 'https://m.youtube.com/@CWM-CruiseWonderMusic',
  instagram: 'https://www.instagram.com/cruisewondermusic/', 
  tiktok: 'https://www.tiktok.com/@cruisewondermusic', 
  facebook: 'https://www.facebook.com/100093014912336/',
  audiomack: 'https://audiomack.com/cwm-cruise-wonder-music',
  iheart: 'https://www.iheart.com/artist/cwm-cruise-wonder-music-featuring-j-milano-40452664/',
  email: 'Cruisewondermusic007@gmail.com',
  whatsapp: ['922 875 922', '922 008 559', '939 485 060']
};

export const SERVICES: Service[] = [
  { id: 'shows', title: 'Atuações / Shows', pitch: 'Performances explosivas para festivais, clubes e eventos corporativos.', icon: 'Mic2' },
  { id: 'features', title: 'Features / Participações', pitch: 'Colaborações vocais e líricas de alto nível para o seu projecto.', icon: 'Plus' },
  { id: 'production', title: 'Produção / Composição', pitch: 'Direção artística e criação musical personalizada no nosso estúdio.', icon: 'Music' },
  { id: 'promo', title: 'Promo / Parcerias', pitch: 'Ativação de marcas e parcerias estratégicas com o selo CWM.', icon: 'Briefcase' }
];

export const MERCH_ITEMS: MerchItem[] = [
  { 
    id: 'tshirt-007', 
    name: 'T-Shirt CWM 007', 
    price: '7.500 Kz', 
    category: 'Vestuário', 
    // Usando o logo oficial para o mock da t-shirt
    imageUrl: 'https://placehold.co/600x800/000/fff?text=CWM+LOGO+T-SHIRT' 
  },
  { id: 'hoodie-classic', name: 'Hoodie Essential Black', price: '15.000 Kz', category: 'Vestuário', imageUrl: 'https://placehold.co/600x800/111/fff?text=Hoodie+Black' },
  { id: 'cap-legacy', name: 'Boné Legacy Edition', price: '5.000 Kz', category: 'Acessórios', imageUrl: 'https://placehold.co/600x800/111/fff?text=Boné+Legacy' }
];

export const MEMBERS: Member[] = [
  {
    id: 'jmilano',
    name: 'J Milano (CEO)',
    role: 'Líder Estratégico | Gestor Executivo',
    bio: 'Líder estratégico e gestor executivo do grupo CWM. Focado na direção institucional e no crescimento global do coletivo.',
    imageUrl: ASSETS.jmilano,
    birthDate: '2000-08-18',
    spotifyArtistId: '5GNqFAQXN1CT6frtSmHHpc',
    socials: {
      apple: 'https://music.apple.com/us/album/azul-feat-dadilson-gerv%C3%A1sio-sadstation-single/1811518128',
      spotify: 'https://open.spotify.com/artist/5GNqFAQXN1CT6frtSmHHpc',
      instagram: 'https://www.instagram.com/jmilano_cwm'
    }
  },
  {
    id: 'dadilson',
    name: 'Dadilson Gervásio',
    role: 'Pilar Criativo | Artista',
    bio: 'Autor do álbum "23 de Março", destaca-se por uma discografia autêntica de superação. Pilar criativo fundamental da CWM.',
    imageUrl: ASSETS.dadilson,
    birthDate: '1999-03-23',
    spotifyArtistId: '5sb2QDcxFbioF6FfnlhUhI',
    socials: {
      youtube: 'https://youtube.com/@dadilsongervasio',
      apple: 'https://music.apple.com/pt/artist/dadilson-gerv%C3%A1sio/1680743707',
      spotify: 'https://open.spotify.com/intl-pt/artist/5sb2QDcxFbioF6FfnlhUhI'
    }
  },
  {
    id: 'xtremo',
    name: 'Xtremo Delelis',
    role: 'Artista | Versatilidade Criativa',
    bio: 'Traz energia e versatilidade interpretativa à CWM, consolidando sua presença no cenário musical urbano de Menongue.',
    imageUrl: ASSETS.xtremo,
    birthDate: '2000-08-26',
    socials: {
      facebook: 'https://www.facebook.com/neri.fox.1',
      instagram: 'https://www.instagram.com/xtremo_delelis'
    }
  },
  {
    id: 'giovanni',
    name: 'Giovanni Gervásio',
    role: 'Artista | Performance',
    bio: 'Membro integrante do coletivo, contribuindo para a estética e sonoridade única da CWM.',
    imageUrl: ASSETS.giovanni,
    socials: {
      instagram: 'https://www.instagram.com/cruisewondermusic/'
    }
  },
  {
    id: 'manilson',
    name: 'Manilson Clever',
    role: 'Artista | Técnica',
    bio: 'Dedicado à evolução sonora do grupo, trazendo rigor técnico e paixão pela música.',
    imageUrl: ASSETS.manilson,
    socials: {
      instagram: 'https://www.instagram.com/cruisewondermusic/'
    }
  }
];

export const DISCOGRAPHY: Release[] = [
  {
    title: 'Celavi',
    artist: 'CWM',
    type: 'Single',
    releaseDate: '2023',
    releaseFullDate: '2023-06-20',
    releaseYear: '2023',
    releaseDay: '20',
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/4a/4e/4a/4a4e4a2d-4f1b-5e6e-0f0f-6a9b3d1f2e2a/cover.jpg/600x600bb.jpg',
    spotifyId: '6p8YvL6z8L4w8p1H8L6z8L',
    links: { 
      apple: 'https://music.apple.com/us/album/celavi-single/1692598791', 
      spotify: 'https://open.spotify.com/track/6p8YvL6z8L4w8p1H8L6z8L'
    }
  },
  {
    title: 'No No',
    artist: 'CWM',
    type: 'Single',
    releaseDate: '2024',
    releaseFullDate: '2024-01-10',
    releaseYear: '2024',
    releaseDay: '10',
    coverUrl: 'https://placehold.co/600x600/111/fff?text=No+No',
    spotifyId: '4LRPuy9R99YpYV2M6vR99Y',
    links: { 
      spotify: 'https://open.spotify.com/track/4LRPuy9R99YpYV2M6vR99Y'
    }
  }
];

export const VIDEOS: VideoItem[] = [
  { id: 'v1', youtubeId: 'dQw4w9WgXcQ', title: 'CWM - Official Video', category: 'Music Video', artistId: 'group' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', url: ASSETS.groupNight, title: 'CWM Night Session', category: 'Grupo' },
];

export const AGENDA_EVENTS: AgendaEvent[] = [
  { id: 'e1', title: 'Live Session Menongue', date: '2025-05-15', type: 'Show', status: 'Confirmado', highlight: true, city: 'Menongue' },
];

export const NEWS_POSTS: NewsPost[] = [
  { id: 'n1', title: 'Novo Single em Menongue', date: '2024-03-10', category: 'Bastidores', excerpt: 'Colectivo reunido no estúdio.' }
];

export const FAN_MURAL_EXAMPLES: FanMessage[] = [
  { name: 'Ricardo S.', message: 'CWM é o orgulho de Menongue!', date: '2024-03-12' }
];
