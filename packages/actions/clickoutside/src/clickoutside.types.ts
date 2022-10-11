/**
 * Additional attributes extended from `svelte-put/clickoutside`
 * @public
 *
 * @remarks
 * The ambient types for these extended attributes should be available automatically
 * whenever `svelte-put/clickoutside` is imported.
 *
 * ```html
 * <script lang="ts">
 *   import { clickoutside } from '@svelte-put/clickoutside';
 * </script>
 *
 * <!-- on:clickoutside should be typed -->
 * <div
 *   use:clickoutside
 *   on:clickoutside
 * />
 * ```
 */
export interface ClickOutsideAttributes {
  onclickoutside?: (event: CustomEvent<MouseEvent>) => void; // on:clickoutside
}

/**
 * Limit to which the click event will trigger `clickoutside`
 * @public
 *
 * @remarks
 * Currently only the parent option is supported
 */
export interface ClickOutsideLimit {
  /** Click event beyond the `boundingRect` of this parent node will not trigger `clickoutside` */
  parent: HTMLElement;
}

/**
 * svelte action parameters to config behavior of `clickoutside`
 * @public
 */
export interface ClickOutsideParameters {
  /** whether to activate the action. Default to `true` */
  enabled: boolean;
  /** limit to which the click event will trigger `clickoutside` */
  limit?: ClickOutsideLimit;
}
