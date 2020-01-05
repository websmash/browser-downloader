export interface Extractor {
    extract(archivePath: string): Promise<string>;
}