import {Extractor} from "extractor/extractor.interface";
import * as AdmZip from 'adm-zip';
import {sep} from 'path';

export class Zip implements Extractor {

    extract(archivePath: string): Promise<string> {
        console.log('Extracting zip file: ' + archivePath);
        return new Promise((resolve, reject) => {
            const extractPath = archivePath.split(sep);
            extractPath.pop();

            try {
                new AdmZip(archivePath).extractAllTo(extractPath.join(sep));
            } catch (err) {
                reject(err);
            }

            resolve(extractPath.join(sep));
        });
    }

}