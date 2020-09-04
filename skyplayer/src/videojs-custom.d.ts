export {};

declare module 'video.js' {
  function getComponent(name: string): any;
  function registerComponent(name: string, definition: any);
  function extend(target: any, source: any);
  function plugin(name: string, constructor: new (...args: any[]) => any);

  interface VideoJsPlaylist {
    (sources): void;
    autoadvance(item: number): any;
  }

  interface VideoJsPlayer {
    loadVideo(videoData: any);
    playlist: VideoJsPlaylist;
    playlistUi();
  }
}
