import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-music',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconMusic {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M6 12V3.33333L14 2V10.6667M6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12ZM14 10.6667C14 11.7712 13.1046 12.6667 12 12.6667C10.8954 12.6667 10 11.7712 10 10.6667C10 9.5621 10.8954 8.66667 12 8.66667C13.1046 8.66667 14 9.5621 14 10.6667Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
