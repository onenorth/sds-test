import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-cloud',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCloud {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15677)">
          <path
            d="M12 6.66663H11.16C10.9106 5.70062 10.3952 4.82395 9.67243 4.13622C8.94966 3.44849 8.04848 2.97729 7.07128 2.77614C6.09409 2.575 5.08007 2.65199 4.14444 2.99835C3.20881 3.34472 2.3891 3.94658 1.77844 4.73555C1.16778 5.52451 0.790662 6.46894 0.689941 7.46153C0.589219 8.45411 0.76893 9.45505 1.20865 10.3506C1.64838 11.2462 2.33048 12.0004 3.17746 12.5277C4.02443 13.0549 5.00232 13.334 6 13.3333H12C12.8841 13.3333 13.7319 12.9821 14.357 12.357C14.9821 11.7319 15.3333 10.884 15.3333 9.99996C15.3333 9.1159 14.9821 8.26806 14.357 7.64294C13.7319 7.01782 12.8841 6.66663 12 6.66663Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15677">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
