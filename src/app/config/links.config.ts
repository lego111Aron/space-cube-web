export interface LinksConfig {
  prismOriginalWindows: string;
  prismOriginalLinux: string;
  prismCrackedWindows: string;
  prismCrackedLinux: string;
  javaWindows: string;
  modsPackage: string;
  serverDomain: string;
}

export const LINKS: LinksConfig = {
  prismOriginalWindows:
    'https://github.com/PrismLauncher/PrismLauncher/releases/download/9.4/PrismLauncher-Windows-MSVC-Setup-9.4.exe',
  prismOriginalLinux:
    'https://github.com/PrismLauncher/PrismLauncher/releases/download/9.4/PrismLauncher-Linux-x86_64.AppImage',
  prismCrackedWindows:
    'https://github.com/Diegiwg/PrismLauncher-Cracked/releases/download/9.4/PrismLauncher-Windows-MinGW-w64-Setup-9.4.exe',
  prismCrackedLinux:
    'https://github.com/Diegiwg/PrismLauncher-Cracked/releases/download/9.4/PrismLauncher-Linux-x86_64.AppImage',

  javaWindows:
    'https://download.oracle.com/java/21/archive/jdk-21.0.8_windows-x64_bin.exe',

  modsPackage:
    'https://drive.google.com/file/d/1Ytb-IEYCOTkbgrbLn0yMB0Rqzc2MtQep/view?usp=sharing',

  serverDomain: 'mc.space-cube.hu',
};
