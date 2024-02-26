import type { SiteConfig } from '$lib/types/site';
import { bioText } from '$lib/config/biotext';

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'MOXON',
  subtitle: 'Oscar Moxon - Essays - Projects - Artifical Intelligence - Contact',
  lang: 'en-US',
  description: 'London-based artificial intelligence postgraduate, researching agents and multi-agent systems.',
  author: {
    // avatar: '/assets/maskable@192.png',
    name: '',
    // status: '🌸',
    
    bio: '',
  },
  themeColor: '#3D4451'
}