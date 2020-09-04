/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SkyPlayer {
        "sources": string;
    }
    interface VideoComponent {
        "name": string;
        "source": string;
    }
    interface VideoListComponent {
    }
    interface VideoThumbnailComponent {
        "sourceId": number;
        "sourceUrl": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSkyPlayerElement extends Components.SkyPlayer, HTMLStencilElement {
    }
    var HTMLSkyPlayerElement: {
        prototype: HTMLSkyPlayerElement;
        new (): HTMLSkyPlayerElement;
    };
    interface HTMLVideoComponentElement extends Components.VideoComponent, HTMLStencilElement {
    }
    var HTMLVideoComponentElement: {
        prototype: HTMLVideoComponentElement;
        new (): HTMLVideoComponentElement;
    };
    interface HTMLVideoListComponentElement extends Components.VideoListComponent, HTMLStencilElement {
    }
    var HTMLVideoListComponentElement: {
        prototype: HTMLVideoListComponentElement;
        new (): HTMLVideoListComponentElement;
    };
    interface HTMLVideoThumbnailComponentElement extends Components.VideoThumbnailComponent, HTMLStencilElement {
    }
    var HTMLVideoThumbnailComponentElement: {
        prototype: HTMLVideoThumbnailComponentElement;
        new (): HTMLVideoThumbnailComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "sky-player": HTMLSkyPlayerElement;
        "video-component": HTMLVideoComponentElement;
        "video-list-component": HTMLVideoListComponentElement;
        "video-thumbnail-component": HTMLVideoThumbnailComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SkyPlayer {
        "sources"?: string;
    }
    interface VideoComponent {
        "name"?: string;
        "source"?: string;
    }
    interface VideoListComponent {
    }
    interface VideoThumbnailComponent {
        "sourceId"?: number;
        "sourceUrl"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "sky-player": SkyPlayer;
        "video-component": VideoComponent;
        "video-list-component": VideoListComponent;
        "video-thumbnail-component": VideoThumbnailComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sky-player": LocalJSX.SkyPlayer & JSXBase.HTMLAttributes<HTMLSkyPlayerElement>;
            "video-component": LocalJSX.VideoComponent & JSXBase.HTMLAttributes<HTMLVideoComponentElement>;
            "video-list-component": LocalJSX.VideoListComponent & JSXBase.HTMLAttributes<HTMLVideoListComponentElement>;
            "video-thumbnail-component": LocalJSX.VideoThumbnailComponent & JSXBase.HTMLAttributes<HTMLVideoThumbnailComponentElement>;
        }
    }
}