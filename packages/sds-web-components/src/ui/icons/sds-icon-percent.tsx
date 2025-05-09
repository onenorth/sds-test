import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-percent',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconPercent {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M12.6667 3.33329L3.33335 12.6666M6.00002 4.33329C6.00002 5.25377 5.25383 5.99996 4.33335 5.99996C3.41288 5.99996 2.66669 5.25377 2.66669 4.33329C2.66669 3.41282 3.41288 2.66663 4.33335 2.66663C5.25383 2.66663 6.00002 3.41282 6.00002 4.33329ZM13.3334 11.6666C13.3334 12.5871 12.5872 13.3333 11.6667 13.3333C10.7462 13.3333 10 12.5871 10 11.6666C10 10.7462 10.7462 9.99996 11.6667 9.99996C12.5872 9.99996 13.3334 10.7462 13.3334 11.6666Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
