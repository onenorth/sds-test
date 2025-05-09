import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-camera-off',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCameraOff {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15631)">
          <path
            d="M0.666748 0.666626L15.3334 15.3333M14.0001 14H2.00008C1.64646 14 1.30732 13.8595 1.05727 13.6094C0.807224 13.3594 0.666748 13.0202 0.666748 12.6666V5.33329C0.666748 4.97967 0.807224 4.64053 1.05727 4.39048C1.30732 4.14044 1.64646 3.99996 2.00008 3.99996H4.00008M6.00008 1.99996H10.0001L11.3334 3.99996H14.0001C14.3537 3.99996 14.6928 4.14044 14.9429 4.39048C15.1929 4.64053 15.3334 4.97967 15.3334 5.33329V11.56M10.1867 10.1866C9.96548 10.51 9.67567 10.7806 9.33794 10.9793C9.00021 11.1779 8.62285 11.2997 8.23271 11.336C7.84257 11.3722 7.44923 11.322 7.08068 11.189C6.71213 11.056 6.37742 10.8434 6.10036 10.5663C5.8233 10.2893 5.6107 9.95458 5.47768 9.58602C5.34467 9.21747 5.2945 8.82414 5.33075 8.434C5.367 8.04385 5.48879 7.6665 5.68743 7.32876C5.88608 6.99103 6.15672 6.70123 6.48008 6.47996"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15631">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
