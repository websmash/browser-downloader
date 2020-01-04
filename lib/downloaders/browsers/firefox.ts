import {Browser} from './browser.interface';
import {OS} from '../../os/os.enum';

export class Firefox implements Browser {

    downloadUrl(os: OS, version: string) {
        return Promise.resolve(null);
    }
}
