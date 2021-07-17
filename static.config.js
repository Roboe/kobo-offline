// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at https://react-static.js.org

import dotenv from 'dotenv'
import path from 'path'

// Setup .env
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

export const i18n = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
}

const REACT_STATIC_CONFIG = {
  maxThreads: 1, // Remove this when you start doing any static generation
}

export default REACT_STATIC_CONFIG
