import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-share-2',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconShare2 {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M5.72667 9.00659L10.28 11.6599M10.2733 4.33992L5.72667 6.99325M14 3.33325C14 4.43782 13.1046 5.33325 12 5.33325C10.8954 5.33325 10 4.43782 10 3.33325C10 2.22868 10.8954 1.33325 12 1.33325C13.1046 1.33325 14 2.22868 14 3.33325ZM6 7.99992C6 9.10449 5.10457 9.99992 4 9.99992C2.89543 9.99992 2 9.10449 2 7.99992C2 6.89535 2.89543 5.99992 4 5.99992C5.10457 5.99992 6 6.89535 6 7.99992ZM14 12.6666C14 13.7712 13.1046 14.6666 12 14.6666C10.8954 14.6666 10 13.7712 10 12.6666C10 11.562 10.8954 10.6666 12 10.6666C13.1046 10.6666 14 11.562 14 12.6666Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
