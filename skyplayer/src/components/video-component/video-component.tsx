import { Component, h, Prop } from '@stencil/core';

import videojs from 'video.js';

@Component({
  tag: 'video-component',
  styleUrl: 'video-component.css',
})
export class VideoComponent {
  @Prop() name: string;
  @Prop() source: string;

  playerElement: Element;
  player: any;

  componentDidRender() {
    this.player = videojs(this.playerElement);
  }

  render() {
    return (
      <div class="video-main__wrapper" data-vjs-player>
        <video id="video-player" ref={el => (this.playerElement = el)} class="video-js vjs-default-skin vjs-big-play-centered" controls muted>
          <source src={this.source}></source>
        </video>
      </div>
    );
  }
}
