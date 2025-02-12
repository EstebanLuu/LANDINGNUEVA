import { MenuItem } from '@/types';

/**
 * Assets
 */
import {
    ChartArea,
    Building2,
    Component,
    Code,
    BetweenHorizonalEnd,
    BrainCircuit,
    Blocks,
    Terminal,
    Package,
    SquareMousePointer,
    ChartPie,
    Files,
    UserRoundPen,
    GitFork,
    UserPlus, Download, Settings, TrendingUp,
    Twitter,
    Github,
    Linkedin,
    Instagram,
    Youtube,
} from 'lucide-react';

import {
    feature1,
    feature2,
    blog1,
    blog2,
    blog3,
    avatar1,
    avatar2,
    avatar3,
} from '@/assets';

// Header
export const navMenu: MenuItem[] = [
    {
        href: '/products',
        label: 'Products',
        submenu: [
            {
                href: '#',
                icon: <ChartArea />,
                label: 'User Analytics',
                desc: 'Powerful options to securely authenticate and manage',
            },
            {
                href: '#',
                icon: <Building2 />,
                label: 'B2B SaaS Suite',
                desc: 'Add-on features built specifically for B2B applications',
            },
            {
                href: '#',
                icon: <Component />,
                label: 'React Components',
                desc: 'Embeddable prebuilt UI components for quick and seamless integrations',
            },
            {
                href: '#',
                icon: <Code />,
                label: 'Next.js Analytics',
                desc: 'The fastest and most seamless authentication solution for Next.js',
            },
            {
                href: '#',
                icon: <BetweenHorizonalEnd />,
                label: 'AnalytiX Elements',
                desc: 'Unstyled UI primitives for endless customization. Powered by AnalytiX',
            },
            {
                href: '#',
                icon: <BrainCircuit />,
                label: 'Authentication for AI',
                desc: 'Authentication and abuse protection tailored to AI applications',
            },
        ],
    },
    {
        href: '/features',
        label: 'Features',
    },
    {
        href: '/docs',
        label: 'Docs',
        submenu: [
            {
                href: '#',
                icon: <Terminal />,
                label: 'Getting Started',
                desc: 'Powerful options to securely authenticate and manage',
            },
            {
                href: '#',
                icon: <Package />,
                label: 'Core Concepts',
                desc: 'Add-on features built specifically for B2B applications',
            },
            {
                href: '#',
                icon: <SquareMousePointer />,
                label: 'Customization',
                desc: 'Embeddable prebuilt UI components for quick and seamless integrations',
            },
            {
                href: '#',
                icon: <Blocks />,
                label: 'Official Plugins',
                desc: 'The fastest and most seamless authentication solution for Next.js',
            },
        ],
    },
    {
        href: '/pricing',
        label: 'Pricing',
    },
];

// Hero
export const heroData = {
    sectionSubtitle: 'La evolución de la gestión empresarial',
    sectionSubtitle2: 'La evolución de tu negocio',
    sectionTitle: 'Gestiona y escala tu negocio con',
    decoTitle: 'Gestini',
    sectionText:
        'Gestini es la plataforma definitiva para empresarios y emprendedores. Agiliza procesos, toma decisiones estratégicas basadas en datos y lleva tu empresa al siguiente nivel con una gestión más inteligente y eficaz.',
};

// Feature
export const featureData = {
    sectionSubtitle: 'Features',
    sectionTitle: 'Discover Powerful Features',
    sectionText:
        'Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.',
    features: [
        {
            icon: <ChartPie size={32} />,
            iconBoxColor: 'bg-blue-600',
            title: 'Advance Analytics',
            desc: 'Experience advanced analytics capabilities that enable you to dive deep into data, uncover meaningful patterns, and derive actionable insights',
            imgSrc: feature1,
        },
        {
            icon: <Files size={32} />,
            iconBoxColor: 'bg-cyan-500',
            title: 'Automated Reports',
            desc: 'Save time and effort with automated reporting, generating comprehensive and accurate reports automatically, streamlining your data analysis',
            imgSrc: feature2,
        },
        {
            icon: <UserRoundPen size={32} />,
            iconBoxColor: 'bg-yellow-500',
            title: 'Retention Report',
            desc: 'Enhance retention with our report, maximizing customer engagement and loyalty for business',
        },
        {
            icon: <GitFork size={32} />,
            iconBoxColor: 'bg-red-500',
            title: 'A/B Test Variants',
            desc: 'Efficiently compare A/B test variants to determine the most effective strategies',
        },
        {
            icon: <Blocks size={32} />,
            iconBoxColor: 'bg-purple-500',
            title: 'Integration Directory',
            desc: 'Seamlessly integrate with our directory, maximizing efficiency and unlocking the full potentials',
        },
    ],
};

// Overview
export const processData = {
    sectionSubtitle: 'Tu negocio, más simple',
    sectionTitle: 'Gestiona todo en un solo lugar',
    sectionText:
        'Optimiza la administración de tu empresa con herramientas diseñadas para hacer tu trabajo más fácil y eficiente.',
    list: [
        {
            icon: <UserPlus size={32} />,
            title: 'Regístrate en Gestini',
            text: 'Crea tu cuenta en minutos y accede a todas las herramientas que necesitas para gestionar tu negocio.',
        },
        {
            icon: <Download size={32} />,
            title: 'Instala el software',
            text: 'Descarga e instala Gestini en tu computadora o accede a la versión web para comenzar a gestionar tu empresa.',
        },
        {
            icon: <Settings size={32} />,
            title: 'Configura tu empresa',
            text: 'Agrega información clave sobre tu negocio y empieza a organizar ventas, facturación e inventario sin esfuerzo.',
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Administra y crece',
            text: 'Toma mejores decisiones con reportes inteligentes, automatiza tareas y enfócate en hacer crecer tu empresa.',
        },
    ],
};

// Overview
export const overviewData = {
    sectionSubtitle: 'Visión General',
    sectionTitle: 'La herramienta todo-en-uno para tu negocio',
    sectionText:
        'Gestini simplifica la gestión de empresas con herramientas inteligentes para optimizar tu tiempo y mejorar la toma de decisiones.',
    listTitle: 'Emprendedores y negocios confían en Gestini para crecer',
    list: [
        {
            title: '500+',
            text: 'Empresas interesadas',
        },
        {
            title: '4.9',
            text: 'Calificación esperada',
        },
        {
            title: 'Lanzamiento en 1 mes',
            text: 'Únete a la lista de espera',
        },
    ],
};

// Blog
export const blogData = {
    sectionSubtitle: 'Nuestro Blog',
    sectionTitle: 'Centro de Recursos',
    sectionText:
        'Explora nuestro centro de recursos y accede a información clave para mejorar la gestión y el crecimiento de tu negocio.',  
    blogs: [
        {
            imgSrc: blog1,
            badge: 'Gestión Empresarial',
            title: '5 claves para optimizar la administración de tu negocio',
            author: {
                avatarSrc: avatar1,
                authorName: 'José Soria',
                publishDate: '10 de agosto, 2024',
                readingTime: '6 min de lectura',
            },
        },
        {
            imgSrc: blog2,
            badge: 'Tecnología',
            title: 'Cómo elegir el software ideal para gestionar tu empresa',
            author: {
                avatarSrc: avatar2,
                authorName: 'Nicolás Luna',
                publishDate: '5 de agosto, 2024',
                readingTime: '7 min de lectura',
            },
        },
        {
            imgSrc: blog3,
            badge: 'Diseño UX/UI',
            title: 'La importancia de una interfaz intuitiva en la gestión empresarial',
            author: {
                avatarSrc: avatar3,
                authorName: 'Daniel Núñez',
                publishDate: '1 de agosto, 2024',
                readingTime: '5 min de lectura',
            },
        },
    ],
};


// Cta
export const ctaData = {
    text: 'Toma mejores decisiones con reportes inteligentes',
};

// Footer
export const footerData = {
    links: [
        {
            title: 'Product',
            items: [
                {
                    href: '#',
                    label: 'Components',
                },
                {
                    href: '#',
                    label: 'Pricing',
                },
                {
                    href: '#',
                    label: 'Dashboard',
                },
                {
                    href: '#',
                    label: 'Feature requests',
                },
            ],
        },
        {
            title: 'Developers',
            items: [
                {
                    href: '#',
                    label: 'Documentation',
                },
                {
                    href: '#',
                    label: 'Discord server',
                },
                {
                    href: '#',
                    label: 'Support',
                },
                {
                    href: '#',
                    label: 'Glossary',
                },
                {
                    href: '#',
                    label: 'Changelog',
                },
            ],
        },
        {
            title: 'Company',
            items: [
                {
                    href: '#',
                    label: 'About',
                },
                {
                    href: '#',
                    label: 'Careers',
                },
                {
                    href: '#',
                    label: 'Blog',
                },
                {
                    href: '#',
                    label: 'Contact',
                },
            ],
        },
        {
            title: 'Legal',
            items: [
                {
                    href: '#',
                    label: 'Terms and Conditions',
                },
                {
                    href: '#',
                    label: 'Privacy Policy',
                },
                {
                    href: '#',
                    label: 'Data Processing Agreement',
                },
                {
                    href: '#',
                    label: 'Cookie manager',
                },
            ],
        },
    ],
    copyright: '© 2024 codewithsadee',
    socialLinks: [
        {
            href: 'https://x.com/codewithsadee_',
            icon: <Twitter size={18} />,
        },
        {
            href: 'https://github.com/codewithsadee',
            icon: <Github size={18} />,
        },
        {
            href: 'https://www.linkedin.com/in/codewithsadee/',
            icon: <Linkedin size={18} />,
        },
        {
            href: 'https://www.instagram.com/codewithsadee',
            icon: <Instagram size={18} />,
        },
        {
            href: 'https://www.youtube.com/codewithsadee',
            icon: <Youtube size={18} />,
        },
    ],
};