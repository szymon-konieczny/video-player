export interface Stream {
  streamUrl: string;
  posterUrl?: string;
}

export interface PlayerSettings {
  streams: string[];
  currentStreamUrl: string;
  playerSettings?: any;
}
