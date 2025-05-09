import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-gitlab',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconGitlab {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15797)">
          <path
            d="M15.1001 9.59334L8.0001 14.7533L0.900096 9.59334C0.804913 9.52334 0.734309 9.42502 0.698386 9.31247C0.662463 9.19991 0.663061 9.07887 0.700096 8.96667L1.51343 6.44667L3.1401 1.44C3.15587 1.39921 3.18099 1.36268 3.21343 1.33334C3.26626 1.28509 3.33522 1.25833 3.40676 1.25833C3.47831 1.25833 3.54727 1.28509 3.6001 1.33334C3.63435 1.36645 3.65959 1.40775 3.67343 1.45334L5.3001 6.44667H10.7001L12.3268 1.44C12.3425 1.39921 12.3677 1.36268 12.4001 1.33334C12.4529 1.28509 12.5219 1.25833 12.5934 1.25833C12.665 1.25833 12.7339 1.28509 12.7868 1.33334C12.821 1.36645 12.8463 1.40775 12.8601 1.45334L14.4868 6.46L15.3334 8.96667C15.3671 9.08233 15.3626 9.20576 15.3206 9.31865C15.2785 9.43155 15.2012 9.52787 15.1001 9.59334Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15797">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
