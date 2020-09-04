import { Component, h } from '@stencil/core';

import { tap, take } from 'rxjs/operators';

import { DataService } from '../../services/data-service';

@Component({
  tag: 'video-list-component',
  styleUrl: 'video-list-component.css',
})
export class VideoListComponent {
  sources: string[];

  componentWillRender() {
    DataService.data$
      .pipe(
        take(1),
        tap(data => (this.sources = data.streams)),
      )
      .subscribe(a => console.log('AAA: ', a));
  }

  render() {
    console.log('this.sources', this.sources);

    return <div>{this.sources && this.sources.map((data, idx) => <video-thumbnail-component sourceId={idx} sourceUrl={data}></video-thumbnail-component>)}</div>;
  }
}
