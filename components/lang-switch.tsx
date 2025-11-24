// import React from 'react';
// import { useRouter } from 'next/router';
// import { useTranslations } from 'next-intl';

// const LanguageSwitcher: React.FC = () => {
//     const router = useRouter();

//     const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         const newLang = event.target.value;
//         router.push(router.pathname, router.asPath, { locale: newLang });
//     };

//     return (
//         <div className="language-switcher">
//             <label htmlFor="language-select" className="sr-only">
//                 {t('selectLanguage')}
//             </label>
//             <select
//                 // id="language-select"
//                 onChange={changeLanguage}
//                 value={router.locale}
//                 aria-label={t('selectLanguage')}
//                 className="p-2 border rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500"
//             >
//                 <option value="en">{t('english')}</option>
//                 <option value="hi">{t('hindi')}</option>
//                 <option value="es">{t('spanish')}</option>
//             </select>
//         </div>
//     );
// };

// export default LanguageSwitcher;