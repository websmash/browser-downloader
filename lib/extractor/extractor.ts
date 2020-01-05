import {Zip} from './zip';

export class Extractor {
    zip: Zip;

    constructor() {
        this.zip = new Zip();
    }

    extract(archivePath: string) {
        return this.zip.extract(archivePath);
    }

}