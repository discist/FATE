import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fate.app',
  appName: 'fate',
  webDir: 'dist',
  bundledWebRuntime: false,
  "server": {
    "url": "http://112.133.192.241:3000",
    "cleartext": true
  }
};

export default config;
