
import { match } from "@formatjs/intl-localematcher";

import Negotiator from 'negotiator';

export let locales = ['en', 'ro']
let defaultLocale = 'en'


// Get the preferred locale, similar to the above or using a library
export function getLocale(request) {

    const headers = {};
    request.headers.forEach((value, key) => {
        headers[key] = value;
    });
    let languages = new Negotiator({ headers }).languages()



    return match(languages, locales, defaultLocale, );
}
