import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'id', 'es', 'fr'];
const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid

    return {
        messages: (await import(`./locales/${locale}.json`)).default
    };
});