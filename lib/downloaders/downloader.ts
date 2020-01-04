import {OS} from '../os/os.enum';
import {BROWSERS} from './browser.enum';
import {Chromium} from './browsers/chromium';
import {get} from 'superagent';
import {createWriteStream} from 'fs';
import {sep} from 'path';

export class Downloader {

    private downloaders = {
        [BROWSERS.CHROMIUM]: () => new Chromium()
    };

    constructor(private os: OS, private browser: BROWSERS, private revision: string, private downloadPath: string) {
    }

    async download(): Promise<string> {
        const url = await this.downloaders[this.browser]().downloadUrl(this.os, this.revision);
        const filename = url.split('/').pop();

        const stream = createWriteStream(`${this.downloadPath}${sep}${filename}`);

        return new Promise((resolve, reject) => {
            console.log(url);
            stream.on('finish', () => resolve(`${this.downloadPath}${sep}${filename}`));
            stream.on('error', (err) => reject(err));

            get(url).pipe(stream);
        });
    }
}
