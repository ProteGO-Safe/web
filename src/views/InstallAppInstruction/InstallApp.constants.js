import { BROWSER } from '../../constants';

import ChromeDotsIcon from '../../assets/img/icons/dots.svg';
import FirefoxPWAButton from '../../assets/img/icons/pwa-firefox.jpg';
import FirefoxAddToDesktop from '../../assets/img/icons/pwa-firefox-add-to-homescreen.jpg';
import SamsungPWAButton from '../../assets/img/icons/pwa-samsung.jpg';
import ChromeAddToDesktop from '../../assets/img/icons/add-to-desktop.svg';
import CheckMark from '../../assets/img/icons/check-mark.svg';
import SafeSafeLogo from '../../assets/img/logo/sign.png';
import SafariExport from '../../assets/img/icons/export.svg';
import SafariAddToDesktop from '../../assets/img/icons/add-to-desktop-2.svg';

export const ANDROID_STEPS = {
  [BROWSER.SAMSUNG_BROWSER]: [
    {
      icon: SamsungPWAButton,
      key: 1,
      text:
        'Odszukaj w przeglądarce symbol (grafika po lewej) na górnym pasku przeglądarki'
    },
    {
      icon: CheckMark,
      key: 3,
      text: 'Po naciśnięciu aplikacja zainstaluje się na Twoim telefonie.'
    },
    {
      icon: SafeSafeLogo,
      key: 4,
      text:
        'Na głównym ekranie telefonu znajdź i naciśnij ikonę aplikacji "SafeSafe"'
    }
  ],
  [BROWSER.FIREFOX]: [
    {
      icon: FirefoxPWAButton,
      key: 1,
      text:
        'Odszukaj w przeglądarce symbol (grafika po lewej) na górnym pasku przeglądarki'
    },
    {
      icon: FirefoxAddToDesktop,
      key: 2,
      text: 'Kliknij przycisk "Dodaj do ekranu głównego"'
    },
    {
      icon: CheckMark,
      key: 3,
      text:
        'Po naciśnięciu i akceptacji aplikacja zainstaluje się na Twoim telefonie.'
    },
    {
      icon: SafeSafeLogo,
      key: 4,
      text:
        'Na głównym ekranie telefonu znajdź i naciśnij ikonę aplikacji "SafeSafe"'
    }
  ],
  default: [
    {
      icon: ChromeDotsIcon,
      key: 1,
      text:
        'Odszukaj w przeglądarce symbol "menu" (trzy kropki) na górnym pasku przeglądarki'
    },
    {
      icon: ChromeAddToDesktop,
      key: 2,
      text: 'W otwartej liście znajdź przycisk "Dodaj do ekranu początkowego"'
    },
    {
      icon: CheckMark,
      key: 3,
      text:
        'Po naciśnięciu i akceptacji aplikacja zainstaluje się na Twoim telefonie.'
    },
    {
      icon: SafeSafeLogo,
      key: 4,
      text:
        'Na głównym ekranie telefonu znajdź i naciśnij ikonę aplikacji "SafeSafe"'
    }
  ]
};

export const IOS_STEPS = {
  default: [
    {
      icon: SafariExport,
      key: 1,
      text:
        'Odszukaj na dole ekranu symbol "udostepnij" (strzałki w kwadracie) na dolnym pasku przeglądarki'
    },
    {
      icon: SafariAddToDesktop,
      key: 2,
      text: 'W otwartej liście znajdź przycisk "Dodaj do ekranu początkowego"'
    },
    {
      icon: CheckMark,
      key: 3,
      text:
        'Po naciśnięciu i akceptacji aplikacja zainstaluje się na Twoim telefonie.'
    },
    {
      icon: SafeSafeLogo,
      key: 4,
      text:
        'Na głównym ekranie telefonu znajdź i naciśnij ikonę aplikacji "SafeSafe"'
    }
  ]
};
