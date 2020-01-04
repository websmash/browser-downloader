import {Browser} from './browser.interface';
import {OS} from '../../os/os.enum';
import {downloadUrls} from '../urls';
import {BROWSERS} from '../browser.enum';

export class Chromium implements Browser {

    downloadUrl(os: OS, version: string) {
        return Promise.resolve(downloadUrls[BROWSERS.CHROMIUM](version)[os]);
    }
}
