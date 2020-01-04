import {OS} from '../os/os.enum';
import {BROWSERS} from './browser.enum';

export const downloadUrls = {
    [BROWSERS.CHROMIUM]: (revision: string) => ({
        [OS.LINUX]:
            `https://storage.googleapis.com/chromium-browser-snapshots/Linux_x64/${revision}/chrome-linux.zip`,
        [OS.MAC]:
            `https://storage.googleapis.com/chromium-browser-snapshots/Mac/${revision}/chrome-mac.zip`,
        [OS.WIN32]:
            `https://storage.googleapis.com/chromium-browser-snapshots/Win/${revision}/chrome-win32.zip`,
        [OS.WIN64]:
            `https://storage.googleapis.com/chromium-browser-snapshots/Win_x64/${revision}/chrome-win32.zip`
    })
};
