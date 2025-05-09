import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-link-2',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconLink2 {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15835)">
          <path
            d="M9.99984 4.66669H11.9998C12.4376 4.66669 12.871 4.75291 13.2754 4.92042C13.6799 5.08794 14.0473 5.33347 14.3569 5.643C14.6664 5.95253 14.9119 6.31999 15.0794 6.72441C15.247 7.12883 15.3332 7.56228 15.3332 8.00002C15.3332 8.43776 15.247 8.87121 15.0794 9.27563C14.9119 9.68005 14.6664 10.0475 14.3569 10.357C14.0473 10.6666 13.6799 10.9121 13.2754 11.0796C12.871 11.2471 12.4376 11.3334 11.9998 11.3334H9.99984M5.99984 11.3334H3.99984C3.5621 11.3334 3.12864 11.2471 2.72423 11.0796C2.31981 10.9121 1.95234 10.6666 1.64281 10.357C1.01769 9.73192 0.666504 8.88408 0.666504 8.00002C0.666504 7.11597 1.01769 6.26812 1.64281 5.643C2.26794 5.01788 3.11578 4.66669 3.99984 4.66669H5.99984M5.33317 8.00002H10.6665"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15835">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
