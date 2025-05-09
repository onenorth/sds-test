import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-eye-off',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconEyeOff {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15749)">
          <path
            d="M11.96 11.96C10.8204 12.8287 9.43273 13.3099 7.99999 13.3333C3.33332 13.3333 0.666656 8 0.666656 8C1.49592 6.4546 2.64608 5.10441 4.03999 4.04001M6.59999 2.82667C7.05888 2.71926 7.5287 2.66556 7.99999 2.66667C12.6667 2.66667 15.3333 8 15.3333 8C14.9286 8.75708 14.446 9.46983 13.8933 10.1267M9.41332 9.41334C9.23022 9.60984 9.00942 9.76744 8.76409 9.87675C8.51876 9.98607 8.25392 10.0448 7.98538 10.0496C7.71684 10.0543 7.4501 10.0049 7.20106 9.90433C6.95203 9.80374 6.7258 9.65402 6.53589 9.46411C6.34597 9.27419 6.19625 9.04797 6.09566 8.79893C5.99507 8.5499 5.94567 8.28315 5.95041 8.01461C5.95515 7.74607 6.01393 7.48123 6.12324 7.2359C6.23255 6.99057 6.39016 6.76977 6.58666 6.58667M0.666656 0.666672L15.3333 15.3333"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15749">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
