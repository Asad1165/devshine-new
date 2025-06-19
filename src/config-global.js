// routes
import { paths } from 'src/routes/paths';
import packageJson from '../package.json';

// API
// ----------------------------------------------------------------------

export const HOST_API = process.env.NEXT_PUBLIC_HOST_API;
export const ASSETS_API = process.env.NEXT_PUBLIC_ASSETS_API;

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/dashboard'

// ----------------------------------------------------------------------

export const CONFIG = {
  appName: 'Zone UI',
  appVersion: packageJson.version,
  assetsDir: process.env.NEXT_PUBLIC_ASSETS_DIR ?? '',
  googleMapApiKey: process.env.NEXT_PUBLIC_MAP_API ?? '',
};
