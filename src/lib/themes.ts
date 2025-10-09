export interface Theme {
  id: string;
  name: string;
  type: 'light' | 'dark';
  colors: {
    primary: string;
    primaryLight: string;
    primaryLighter: string;
    accent: string;
    text: string;
    textSecondary: string;
    background: string;
  };
}

export const themes: Theme[] = [
  // Dark Themes
  {
    id: 'midnight-sophistication',
    name: 'Midnight Sophistication',
    type: 'dark',
    colors: {
      primary: '#0A1128',
      primaryLight: '#1A2744',
      primaryLighter: '#14213D',
      accent: '#D4AF37',
      text: '#F5F1E8',
      textSecondary: '#708090',
      background: '#0A1128',
    },
  },
  {
    id: 'ocean-depths',
    name: 'Ocean Depths',
    type: 'dark',
    colors: {
      primary: '#0B2438',
      primaryLight: '#1C3D5A',
      primaryLighter: '#154360',
      accent: '#FF6B6B',
      text: '#E8F4F8',
      textSecondary: '#7FB3D5',
      background: '#0B2438',
    },
  },
  {
    id: 'forest-night',
    name: 'Forest Night',
    type: 'dark',
    colors: {
      primary: '#0D1F0D',
      primaryLight: '#1A3A1A',
      primaryLighter: '#1E4620',
      accent: '#FFB84D',
      text: '#F0F4E8',
      textSecondary: '#8FA88F',
      background: '#0D1F0D',
    },
  },
  {
    id: 'royal-purple',
    name: 'Royal Purple',
    type: 'dark',
    colors: {
      primary: '#1A0A2E',
      primaryLight: '#2D1B4E',
      primaryLighter: '#3A2654',
      accent: '#E8A87C',
      text: '#F4EEFC',
      textSecondary: '#A78FB5',
      background: '#1A0A2E',
    },
  },
  {
    id: 'charcoal-elite',
    name: 'Charcoal Elite',
    type: 'dark',
    colors: {
      primary: '#1A1A1D',
      primaryLight: '#2E2E32',
      primaryLighter: '#3A3A3F',
      accent: '#4ECDC4',
      text: '#F5F5F5',
      textSecondary: '#A0A0A8',
      background: '#1A1A1D',
    },
  },
  // Light Themes
  {
    id: 'cream-elegance',
    name: 'Cream Elegance',
    type: 'light',
    colors: {
      primary: '#F5F1E8',
      primaryLight: '#FFFFFF',
      primaryLighter: '#FAF8F3',
      accent: '#2C3E50',
      text: '#2C3E50',
      textSecondary: '#5D6D7E',
      background: '#F5F1E8',
    },
  },
  {
    id: 'sage-serenity',
    name: 'Sage Serenity',
    type: 'light',
    colors: {
      primary: '#E8F0E8',
      primaryLight: '#F5FAF5',
      primaryLighter: '#FFFFFF',
      accent: '#6B4423',
      text: '#2D4A2D',
      textSecondary: '#5A7A5A',
      background: '#E8F0E8',
    },
  },
  {
    id: 'blush-professional',
    name: 'Blush Professional',
    type: 'light',
    colors: {
      primary: '#FAF0F0',
      primaryLight: '#FFF8F8',
      primaryLighter: '#FFFFFF',
      accent: '#C7577A',
      text: '#3D2632',
      textSecondary: '#6B4D58',
      background: '#FAF0F0',
    },
  },
  {
    id: 'sky-blue',
    name: 'Sky Blue',
    type: 'light',
    colors: {
      primary: '#E8F4F8',
      primaryLight: '#F5FAFB',
      primaryLighter: '#FFFFFF',
      accent: '#E67E22',
      text: '#1F3A4A',
      textSecondary: '#5D7A8A',
      background: '#E8F4F8',
    },
  },
  {
    id: 'warm-beige',
    name: 'Warm Beige',
    type: 'light',
    colors: {
      primary: '#F5EEE6',
      primaryLight: '#FAF6F0',
      primaryLighter: '#FFFFFF',
      accent: '#8B2635',
      text: '#3D2F2F',
      textSecondary: '#6B5858',
      background: '#F5EEE6',
    },
  },
];

export const getThemeById = (id: string): Theme => {
  return themes.find(theme => theme.id === id) || themes[0];
};
