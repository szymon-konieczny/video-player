import { Component, h, Prop } from '@stencil/core';
import { DataService } from '../../services/data-service';

@Component({
  tag: 'video-thumbnail-component',
  styleUrl: 'video-thumbnail-component.css',
})
export class VideoThumbnailComponent {
  @Prop() sourceId: number;
  @Prop() sourceUrl: string;

  setSourceUrl() {
    DataService.setCurrentStreamUrl(this.sourceUrl);
  }

  render() {
    return (
      <div data-vjs-player>
        <div class="thumbnail" onClick={() => this.setSourceUrl()}>
          <span class="thumbnail__number">{this.sourceId + 1}</span>
        </div>
      </div>
    );
  }
}
