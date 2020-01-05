import {OS} from "./os/os.enum";
import {BROWSERS} from "./downloaders/browser.enum";
import {Downloader} from "./downloaders/downloader";
import {Extractor} from "./extractor/extractor";

export class Orchestrator {

    private downloader: Downloader;
    private extractor: Extractor;

    constructor(private os: OS, private browser: BROWSERS, private revision: string, private downloadPath: string) {
        this.downloader = new Downloader(os, browser, revision, downloadPath);
        this.extractor = new Extractor();
    }

    download() {
        return this.downloader
            .download()
            .then((file) => this.extractor.extract(file));
    }
}
