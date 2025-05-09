import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-cloud-lightning',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCloudLightning {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15669)">
          <path
            d="M12.6667 11.2667C13.4768 11.1022 14.1969 10.6425 14.6872 9.97698C15.1774 9.31143 15.4029 8.48745 15.3198 7.665C15.2368 6.84255 14.8511 6.08031 14.2376 5.52625C13.6241 4.97218 12.8267 4.66583 12 4.66666H11.16C10.9392 3.81154 10.5094 3.02466 9.9093 2.37665C9.30921 1.72865 8.55759 1.23982 7.72192 0.954038C6.88625 0.66826 5.99269 0.594484 5.12146 0.739335C4.25023 0.884185 3.42862 1.24313 2.73037 1.78394C2.03213 2.32474 1.47912 3.03049 1.12099 3.8378C0.762865 4.64512 0.610831 5.52874 0.678539 6.40932C0.746248 7.28991 1.03158 8.1399 1.50892 8.88297C1.98626 9.62605 2.64066 10.239 3.41337 10.6667M8.6667 7.33333L6.00004 11.3333H10L7.33337 15.3333"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15669">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
