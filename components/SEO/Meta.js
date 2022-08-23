import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Christopher Dolbert - Site Officiel</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Christopher Dolbert - Site Officiel" />
            <meta name="description"
                content="Portfolio personnel de Christopher Dolbert (SailorEudes). Réalisé avec Ubuntu 20.4 (Linux) thème par Next.js et Tailwind CSS" />
            <meta name="author" content="Christopher Dolbert (SailorEudes)" />
            <meta name="keywords"
                content="linux, ubuntu portfolio, vivek patel protfolio,vivek patel computer, vivek patel, vivek ubuntu, vivek patel ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="French" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Christopher Dolbert - Site Officiel" />
            <meta itemProp="description"
                content="Portfolio personnel de Christopher Dolbert (SailorEudes). Réalisé avec Ubuntu 20.4 (Linux), thème par Next.js et Tailwind CSS" />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Christopher Dolbert - Site Officiel" />
            <meta name="twitter:description"
                content="Portfolio personnel de Christopher Dolbert (SailorEudes). Réalisé avec Ubuntu 20.4 (Linux), thème par Next.js et Tailwind CSS" />
            <meta name="twitter:site" content="SailorEudes" />
            <meta name="twitter:creator" content="Christopher Dolbert" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.svg" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Christopher Dolbert - Site Officiel" />
            <meta name="og:description"
                content="Portfolio personnel de Christopher Dolbert (SailorEudes). Réalisé avec Ubuntu 20.4 (Linux), thème par Next.js et Tailwind CSS" />
            <meta name="og:image" content="images/logos/logo_1200.svg" />
            <meta name="og:url" content="https://christopher-dolbert.fr/" />
            <meta name="og:site_name" content="Christopher Dolbert - Site Officiel" />
            <meta name="og:locale" content="fr_FR" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.svg" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
