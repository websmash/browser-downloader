import {OS} from '../../os/os.enum';

export interface Browser {
    downloadUrl(os: OS, version: string): Promise<string>;
}
