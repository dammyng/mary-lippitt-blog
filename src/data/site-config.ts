export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Kdnotes',
    subtitle: 'kd@kdnotes.com',
    description: 'research and quantitative developer with expertise in cloud infrastructure',
    image: {
        src: '/dante-preview.jpg',
        alt: 'kdnotes - Blog articles'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        //  {
        //       text: 'About',
        //       href: '/about'
        //   },
        //   {
        //       text: 'Contact',
        //       href: '/contact'
        //   },
        //   {
        //       text: 'Terms',
        //       href: '/terms'
        //   },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        //  {
        //      text: 'Dribbble',
        //      href: 'https://dribbble.com/'
        //  },
        //  {
        //      text: 'Instagram',
        //      href: 'https://instagram.com/'
        //  },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: '',
        text: "I am a research and quantitative developer with expertise in cloud infrastructure, software, and data engineering, combined with a master’s degree in investment and security analysis. I leverage advanced technology to build scalable, data-driven systems. In a past life, I worked extensively with AWS, Azure, Kubernetes, Docker, Terraform, and monitoring tools like Datadog and Prometheus. Now, I focus on writing C++ and Python to process and analyze millions of data points daily, applying my skills to solve complex financial problems and optimize infrastructure.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to kdnotes Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
