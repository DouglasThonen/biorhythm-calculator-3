import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.example.biorhythms',
  appName: 'Biorhythms',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
