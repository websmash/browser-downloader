import {ImportMock, MockManager} from 'ts-mock-imports';
import {Downloader} from './downloader';
import {OS} from '../os/os.enum';
import {BROWSERS} from './browser.enum';
import * as chromium from './browsers/chromium';
import * as superagent from 'superagent';
import * as fs from 'fs';
import {expect} from 'chai';
import {SinonStub, spy} from 'sinon';
import {EventEmitter} from 'events';
import {sep} from 'path';

describe('Downloader', () => {

    let emitter = new EventEmitter();
    let superagentManagerGetStub: SinonStub;
    let createWriteStreamStub: SinonStub;
    let mockManagerChromium: MockManager<chromium.Chromium>;

    beforeEach(() => {
        superagentManagerGetStub = ImportMock.mockFunction(superagent, 'get', {
            pipe: spy()
        });
        createWriteStreamStub = ImportMock.mockFunction(fs, 'createWriteStream', emitter);
        mockManagerChromium = ImportMock.mockClass(chromium, 'Chromium');
    });

    afterEach(() => {
        superagentManagerGetStub.restore();
        createWriteStreamStub.restore();
        mockManagerChromium.restore();
    });

    describe('linux', () => {

        it('should downloadUrl correct file for chromium', async () => {
            mockManagerChromium.mock('downloadUrl', Promise.resolve('/path/to/chromium'));

            const downloader = new Downloader(OS.LINUX, BROWSERS.CHROMIUM, '12', '/path/to');

            setTimeout(() => emitter.emit('finish'));

            expect(await downloader.download()).to.eql(`/path/to${sep}chromium`);
        });
    });

    describe('win64', () => {

        it('should downloadUrl correct file for chromium', async () => {
            mockManagerChromium.mock('downloadUrl', Promise.resolve('/path/to/chromium'));

            const downloader = new Downloader(OS.WIN64, BROWSERS.CHROMIUM, '12', '/path/to');

            setTimeout(() => emitter.emit('finish'));

            expect(await downloader.download()).to.eql(`/path/to${sep}chromium`);
        });
    });

    describe('win32', () => {

        it('should downloadUrl correct file for chromium', async () => {
            mockManagerChromium.mock('downloadUrl', Promise.resolve('/path/to/chromium'));

            const downloader = new Downloader(OS.WIN32, BROWSERS.CHROMIUM, '12', '/path/to');

            setTimeout(() => emitter.emit('finish'));

            expect(await downloader.download()).to.eql(`/path/to${sep}chromium`);
        });
    });

    describe('MAC', () => {

        it('should downloadUrl correct file for chromium', async () => {
            mockManagerChromium.mock('downloadUrl', Promise.resolve('/path/to/chromium'));

            const downloader = new Downloader(OS.MAC, BROWSERS.CHROMIUM, '12', '/path/to');

            setTimeout(() => emitter.emit('finish'));

            expect(await downloader.download()).to.eql(`/path/to${sep}chromium`);
        });
    });
});
