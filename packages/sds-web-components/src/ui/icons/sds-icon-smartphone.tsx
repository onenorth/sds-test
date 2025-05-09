import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-smartphone',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconSmartphone {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M8.00001 11.9999H8.00668M4.66668 1.33325H11.3333C12.0697 1.33325 12.6667 1.93021 12.6667 2.66659V13.3333C12.6667 14.0696 12.0697 14.6666 11.3333 14.6666H4.66668C3.9303 14.6666 3.33334 14.0696 3.33334 13.3333V2.66659C3.33334 1.93021 3.9303 1.33325 4.66668 1.33325Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
