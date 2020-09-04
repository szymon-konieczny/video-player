import { Component, h, Prop, State, Watch } from '@stencil/core';

import videojs from 'video.js';

interface Video {
  src: string[];
  poster: string;
  title: string;
}

@Component({
  tag: 'sky-player',
  styleUrls: ['custom-styles.css'],
  // styleUrls: ['playlist-ui.vertical.css', 'sky-player.css', 'custom-styles.css'],
  // shadow: true,
})
export class SkyPlayer {
  @Prop() sources: string;

  private videoHeight: number;

  public videos: Video[] = [
    {
      src: ['https://test-streams.mux.dev/test_001/stream.m3u8', 'http://stream.flowplayer.org/bauhaus/624x260.ogv'],
      poster: '',
      title: 'First',
    },
    {
      src: ['http://vjs.zencdn.net/v/oceans.mp4', 'http://vjs.zencdn.net/v/oceans.webm'],
      poster: 'http://www.videojs.com/img/poster.jpg',
      title: 'Second',
    },
    {
      src: ['http://media.w3.org/2010/05/bunny/movie.mp4'],
      poster: 'http://www.videojs.com/img/poster.jpg',
      title: 'Third',
    },
    {
      src: ['https://test-streams.mux.dev/test_001/stream.m3u8', 'http://stream.flowplayer.org/bauhaus/624x260.ogv'],
      poster: '',
      title: 'First',
    },
    {
      src: ['http://vjs.zencdn.net/v/oceans.mp4', 'http://vjs.zencdn.net/v/oceans.webm'],
      poster: 'http://www.videojs.com/img/poster.jpg',
      title: 'Second',
    },
    {
      src: ['http://media.w3.org/2010/05/bunny/movie.mp4'],
      poster: 'http://www.videojs.com/img/poster.jpg',
      title: 'Third',
    },
  ];

  private playerElement: Element;
  private player: videojs.Player;
  public currentStreamUrl: string;
  private streams: Video[];
  public isSourceListVisible: boolean;

  componentDidLoad() {
    this.player = videojs(this.playerElement, { fluid: true });
  }

  componentWillRender() {
    this.streams = this.videos;
    this.currentStreamUrl = 'https://test-streams.mux.dev/test_001/stream.m3u8';
    this.isSourceListVisible = this.streams?.length > 1;
  }

  private setSourceUrl(url: string) {
    this.currentStreamUrl = url;
    this.player.src(url);
    this.player.load();
    this.player.play();
    this.setPlaylistHeight();
  }

  private setVideoHeight() {
    this.videoHeight = this.player.currentDimension('height');
  }

  private setPlaylistHeight() {
    this.setVideoHeight();
    const playlist = this.getPlaylistElement();
    playlist.setAttribute('height', `${this.videoHeight}`);
  }

  private getPlaylistElement() {
    return document.querySelector('.playlist-wrapper');
  }

  render(): Node {
    return (
      <div class="player__wrapper">
        <link href="https://vjs.zencdn.net/7.8.4/video-js.css" rel="stylesheet" />

        <video
          id="preview-player"
          ref={el => (this.playerElement = el)}
          class="video-js vjs-default-skin vjs-fluid vjs-big-play-centered"
          controls
          preload="auto"
          // crossorigin="anonymous"
        >
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a web browser that{' '}
            <a href="http://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
          </p>
        </video>

        <ol class="playlist-wrapper">
          {this.streams.map((stream, idx) => (
            <li class="thumbnail" onClick={() => this.setSourceUrl(stream.src[0])}>
              {idx}: {stream.title}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
