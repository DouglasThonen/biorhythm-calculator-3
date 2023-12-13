import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.example.biorhythms',
  appName: 'Biorhythms',
  webDir: 'build',
  
  server: {
    url: 'http://192.168.10.105:3000',
    cleartext: true,
  }
};
// androidScheme: 'https'
export default config;
