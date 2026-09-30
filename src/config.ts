// Site-wide settings. Change values here and they update everywhere on the site.

export const site = {
  name: 'PartnerPhi',
  url: 'https://partnerphi.com',
  description:
    'Fractional partner marketing for B2B SaaS companies building in the Salesforce and Adobe ecosystems.',
  location: 'Las Vegas, NV',

  // Contact. Swap in the partnerphi.com address once it exists.
  email: 'diabpatrick@gmail.com',

  // Where every "Book an intro call" button points. When you have a Cal.com or
  // Calendly link, paste it here (for example 'https://cal.com/partnerphi/intro').
  bookingUrl: 'mailto:diabpatrick@gmail.com?subject=PartnerPhi%20intro%20call',
  ctaLabel: 'Book an intro call',

  linkedin: 'https://www.linkedin.com/in/patrickdiab',
  personalSite: 'https://patrickdiab.com',

  // Logo. Leave as null to use the built-in phi mark. To use your own logo,
  // drop the file in the /public folder and set this to its name, e.g. '/logo.svg'.
  logoSrc: null as string | null,
};

export const nav = [
  { label: 'How we work', href: '/#how-we-work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];
