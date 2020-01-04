import {Chromium} from './chromium';
import {OS} from '../../os/os.enum';
import {expect} from 'chai';

describe('Chromium', () => {

    describe('linux', () => {

        it('should give correct download url', async() => {
            const url = await new Chromium().downloadUrl(OS.LINUX, '12.0');

            expect(url).to.eq('https://storage.googleapis.com/chromium-browser-snapshots/Linux_x64/12.0/chrome-linux.zip');
        });
    });

    describe('win64', () => {

        it('should give correct download url', async() => {
            const url = await new Chromium().downloadUrl(OS.WIN64, '12.0');

            expect(url).to.eq('https://storage.googleapis.com/chromium-browser-snapshots/Win_x64/12.0/chrome-win32.zip');
        });
    });

    describe('win32', () => {

        it('should give correct download url', async() => {
            const url = await new Chromium().downloadUrl(OS.WIN32, '12.0');

            expect(url).to.eq('https://storage.googleapis.com/chromium-browser-snapshots/Win/12.0/chrome-win32.zip');
        });
    });

    describe('mac', () => {

        it('should give correct download url', async() => {
            const url = await new Chromium().downloadUrl(OS.MAC, '12.0');

            expect(url).to.eq('https://storage.googleapis.com/chromium-browser-snapshots/Mac/12.0/chrome-mac.zip');
        });
    });

});
