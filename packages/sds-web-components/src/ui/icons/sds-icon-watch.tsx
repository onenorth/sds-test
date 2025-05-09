import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-watch',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconWatch {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16099)">
          <path
            d="M7.99992 5.99985V7.99985L8.99992 8.99985M11.0066 11.5665L10.7733 14.1199C10.7432 14.4523 10.5896 14.7614 10.3427 14.986C10.0958 15.2107 9.7737 15.3345 9.43992 15.3332H6.55325C6.21947 15.3345 5.89732 15.2107 5.65045 14.986C5.40359 14.7614 5.24996 14.4523 5.21992 14.1199L4.98659 11.5665M4.99325 4.43318L5.22659 1.87985C5.25652 1.54857 5.40921 1.24044 5.65466 1.01595C5.90012 0.791462 6.22062 0.666828 6.55325 0.666515H9.45325C9.78703 0.665161 10.1092 0.789047 10.3561 1.0137C10.6029 1.23835 10.7565 1.54742 10.7866 1.87985L11.0199 4.43318M12.6666 7.99985C12.6666 10.5772 10.5772 12.6665 7.99992 12.6665C5.42259 12.6665 3.33325 10.5772 3.33325 7.99985C3.33325 5.42252 5.42259 3.33318 7.99992 3.33318C10.5772 3.33318 12.6666 5.42252 12.6666 7.99985Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16099">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
