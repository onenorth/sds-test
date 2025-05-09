import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-award',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconAward {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15601)">
          <path
            d="M5.4735 9.26008L4.66683 15.3334L8.00016 13.3334L11.3335 15.3334L10.5268 9.25341M12.6668 5.33341C12.6668 7.91074 10.5775 10.0001 8.00016 10.0001C5.42283 10.0001 3.3335 7.91074 3.3335 5.33341C3.3335 2.75609 5.42283 0.666748 8.00016 0.666748C10.5775 0.666748 12.6668 2.75609 12.6668 5.33341Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15601">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
