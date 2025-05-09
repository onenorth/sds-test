import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-download-cloud',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconDownloadCloud {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15733)">
          <path
            d="M5.33335 11.3333L8.00002 14M8.00002 14L10.6667 11.3333M8.00002 14V7.99999M13.92 12.06C14.4996 11.6524 14.9343 11.0708 15.1609 10.3994C15.3875 9.72808 15.3943 9.002 15.1803 8.32654C14.9663 7.65107 14.5426 7.06138 13.9707 6.64303C13.3989 6.22467 12.7086 5.99943 12 5.99999H11.16C10.9595 5.21857 10.5843 4.49282 10.0628 3.87737C9.54118 3.26193 8.88678 2.77283 8.14882 2.44689C7.41086 2.12095 6.60858 1.96667 5.80237 1.99566C4.99616 2.02466 4.20702 2.23617 3.49438 2.61427C2.78175 2.99237 2.16417 3.52722 1.68814 4.17854C1.21212 4.82986 0.890051 5.58068 0.74619 6.37449C0.60233 7.16829 0.640423 7.98438 0.857603 8.76133C1.07478 9.53828 1.46539 10.2558 2.00002 10.86"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15733">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
