import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-target',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconTarget {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16025)">
          <path
            d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.00004 11.9999C10.2092 11.9999 12 10.2091 12 7.99992C12 5.79078 10.2092 3.99992 8.00004 3.99992C5.7909 3.99992 4.00004 5.79078 4.00004 7.99992C4.00004 10.2091 5.7909 11.9999 8.00004 11.9999Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.00004 9.33325C8.73642 9.33325 9.33337 8.7363 9.33337 7.99992C9.33337 7.26354 8.73642 6.66658 8.00004 6.66658C7.26366 6.66658 6.66671 7.26354 6.66671 7.99992C6.66671 8.7363 7.26366 9.33325 8.00004 9.33325Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16025">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
