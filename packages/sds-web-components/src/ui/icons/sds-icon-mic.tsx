import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-mic',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconMic {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15871)">
          <path
            d="M12.6668 6.66663V7.99996C12.6668 9.23764 12.1752 10.4246 11.3 11.2998C10.4248 12.175 9.23784 12.6666 8.00016 12.6666M8.00016 12.6666C6.76249 12.6666 5.5755 12.175 4.70033 11.2998C3.82516 10.4246 3.3335 9.23764 3.3335 7.99996V6.66663M8.00016 12.6666V15.3333M5.3335 15.3333H10.6668M8.00016 0.666626C7.46973 0.666626 6.96102 0.87734 6.58595 1.25241C6.21088 1.62749 6.00016 2.13619 6.00016 2.66663V7.99996C6.00016 8.53039 6.21088 9.0391 6.58595 9.41417C6.96102 9.78925 7.46973 9.99996 8.00016 9.99996C8.5306 9.99996 9.0393 9.78925 9.41438 9.41417C9.78945 9.0391 10.0002 8.53039 10.0002 7.99996V2.66663C10.0002 2.13619 9.78945 1.62749 9.41438 1.25241C9.0393 0.87734 8.5306 0.666626 8.00016 0.666626Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15871">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
