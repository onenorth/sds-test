import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-cast',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCast {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M1.33325 10.7333C1.97385 10.8639 2.56188 11.1801 3.02417 11.6424C3.48647 12.1047 3.80261 12.6927 3.93325 13.3333M1.33325 8.03329C2.68711 8.18387 3.94944 8.79066 4.91266 9.75388C5.87589 10.7171 6.48268 11.9794 6.63325 13.3333M1.33325 5.33329V3.99996C1.33325 3.64634 1.47373 3.3072 1.72378 3.05715C1.97382 2.8071 2.31296 2.66663 2.66659 2.66663H13.3333C13.6869 2.66663 14.026 2.8071 14.2761 3.05715C14.5261 3.3072 14.6666 3.64634 14.6666 3.99996V12C14.6666 12.3536 14.5261 12.6927 14.2761 12.9428C14.026 13.1928 13.6869 13.3333 13.3333 13.3333H9.33325M1.33325 13.3333H1.33992"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
