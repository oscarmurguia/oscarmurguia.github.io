import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
<<<<<<< HEAD
  title: 'Oscar Murguia Blog',
  description:
    'Blog personal de Oscar Murguia sobre tecnología, desarrollo y administración de sistemas.',
  href: 'https://oscarmurguia.github.io',
  author: 'oscar-murguia',
  locale: 'es-ES',
=======
  title: 'Devopscar Blog',
  description:
    'Great blog about devops',
  href: 'https://oscarmurguia.github.io',
  author: 'oscarmurguia',
  locale: 'en-US',
>>>>>>> 662953bcdf9316ab6bd27840b22e3aa1085c0d2a
  featuredPostCount: 2,
  postsPerPage: 6,
}

// Google Analytics
// Configure via environment variable: PUBLIC_GOOGLE_ANALYTICS_ID
export const ANALYTICS = {
  google: import.meta.env.PUBLIC_GOOGLE_ANALYTICS_ID || '',
}

// Umami Analytics
// Configure via environment variable: PUBLIC_UMAMI_WEBSITE_ID
export const UMAMI = {
  websiteId: import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || '',
}

// Disqus Comments
// Get your shortname from https://disqus.com/admin/settings/general/
// Set it as an environment variable: PUBLIC_DISQUS_SHORTNAME=your-shortname
export const DISQUS = {
  shortname: import.meta.env.PUBLIC_DISQUS_SHORTNAME || '',
}

// Brevo Newsletter
// Get your API key from https://app.brevo.com/settings/keys/api
// Set it as an environment variable: BREVO_API_KEY=your-api-key
// Optional: Set BREVO_LIST_ID to automatically add subscribers to a specific list
// Optional: Set BREVO_TEMPLATE_ID for double opt-in confirmation email (default: 5)
export const BREVO = {
  apiKey: import.meta.env.BREVO_API_KEY || '',
  listId: import.meta.env.BREVO_LIST_ID || '',
  templateId: import.meta.env.BREVO_TEMPLATE_ID || '5',
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/about',
    label: 'About',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/oscarmurguia',
    label: 'GitHub',
  },
  {
<<<<<<< HEAD
    href: 'mailto:oscar@example.com',
=======
    href: 'https://twitter.com/username',
    label: 'Twitter',
  },
  {
    href: 'mailto:omurguiasa@gmail.com',
>>>>>>> 662953bcdf9316ab6bd27840b22e3aa1085c0d2a
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

// Newsletter consent text (centralized for GDPR compliance)
export const NEWSLETTER_CONSENT_TEXT = {
  text: 'I agree to receive newsletter emails.',
  privacyLink: '/privacy',
  privacyText: 'Privacy Policy',
}
