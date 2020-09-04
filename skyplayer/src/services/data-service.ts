import { BehaviorSubject } from 'rxjs';

import { PlayerSettings } from '../interfaces';

class DataServiceController {
  public storage = new BehaviorSubject<PlayerSettings>({
    streams: [],
    currentStreamUrl: '',
    playerSettings: {},
  });

  public data$ = this.storage.asObservable();

  public setData(value: PlayerSettings) {
    this.storage.next(value);
  }

  public setCurrentStreamUrl(currentStreamUrl: string) {
    this.storage.next({ ...this.storage.value, currentStreamUrl });
  }
}

export const DataService = new DataServiceController();
