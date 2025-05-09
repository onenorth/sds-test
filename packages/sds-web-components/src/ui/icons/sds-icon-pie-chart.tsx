import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-pie-chart',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconPieChart {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15929)">
          <path
            d="M14.14 10.5933C13.7159 11.5962 13.0525 12.4801 12.2079 13.1675C11.3633 13.8548 10.3632 14.3249 9.29496 14.5364C8.22674 14.748 7.12295 14.6947 6.0801 14.3811C5.03725 14.0676 4.08709 13.5033 3.31268 12.7377C2.53828 11.9721 1.96321 11.0284 1.63776 9.98922C1.31231 8.95002 1.24638 7.84691 1.44574 6.77634C1.64509 5.70577 2.10367 4.70034 2.78137 3.84794C3.45907 2.99554 4.33526 2.32213 5.33334 1.88659M14.6667 7.99992C14.6667 7.12444 14.4942 6.25753 14.1592 5.4487C13.8242 4.63986 13.3331 3.90493 12.714 3.28587C12.095 2.66682 11.3601 2.17575 10.5512 1.84072C9.74239 1.50569 8.87548 1.33325 8 1.33325V7.99992H14.6667Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15929">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
