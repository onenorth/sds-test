import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-cloud-drizzle',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCloudDrizzle {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15667)">
          <path
            d="M5.33344 12.6667V14M5.33344 8.66668V10M10.6668 12.6667V14M10.6668 8.66668V10M8.0001 14V15.3333M8.0001 10V11.3333M13.3334 11.0533C14.0343 10.7464 14.6082 10.2077 14.9588 9.52771C15.3095 8.84769 15.4155 8.06775 15.2592 7.3188C15.1028 6.56985 14.6936 5.89749 14.1001 5.41457C13.5067 4.93165 12.7652 4.66758 12.0001 4.66668H11.1601C10.9488 3.84836 10.546 3.09198 9.98498 2.45988C9.42395 1.82778 8.72073 1.33806 7.93328 1.03109C7.14583 0.724123 6.29671 0.60869 5.45589 0.694308C4.61507 0.779926 3.80664 1.06414 3.09723 1.52353C2.38782 1.98293 1.79775 2.60433 1.37564 3.33654C0.953534 4.06875 0.711485 4.89079 0.669445 5.73491C0.627404 6.57903 0.786576 7.42106 1.13384 8.19158C1.4811 8.96211 2.00652 9.63907 2.66677 10.1667"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15667">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
