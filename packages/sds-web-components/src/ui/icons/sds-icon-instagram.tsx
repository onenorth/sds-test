import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-instagram',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconInstagram {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15823)">
          <path
            d="M11.6666 4.33331H11.6733M4.66665 1.33331H11.3333C13.1743 1.33331 14.6666 2.8257 14.6666 4.66665V11.3333C14.6666 13.1743 13.1743 14.6666 11.3333 14.6666H4.66665C2.8257 14.6666 1.33331 13.1743 1.33331 11.3333V4.66665C1.33331 2.8257 2.8257 1.33331 4.66665 1.33331ZM10.6666 7.57998C10.7489 8.13481 10.6542 8.70146 10.3958 9.19932C10.1375 9.69719 9.72874 10.1009 9.22773 10.3531C8.72672 10.6053 8.15894 10.693 7.60517 10.6039C7.0514 10.5148 6.53982 10.2534 6.14321 9.85675C5.74659 9.46014 5.48513 8.94856 5.39602 8.39479C5.30691 7.84102 5.39469 7.27324 5.64686 6.77223C5.89904 6.27122 6.30277 5.86247 6.80064 5.60414C7.2985 5.34581 7.86515 5.25104 8.41998 5.33331C8.98593 5.41724 9.50988 5.68096 9.91444 6.08552C10.319 6.49008 10.5827 7.01403 10.6666 7.57998Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15823">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
