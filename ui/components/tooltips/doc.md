# Tooltips

A Tooltip is a small piece of contextual information about an element on the screen, which is displayed when a user hovers or focuses on the element it is describing. It is not focusable and cannot contain focusable content.

Nubbins are indicators that inform the user of the direction of the content associated with the tooltip. A tooltip can accept the following nubbin position classes, `.nds-nubbin_left`, `.nds-nubbin_left-top`, `.nds-nubbin_left-bottom`, `.nds-nubbin_top-left`, `.nds-nubbin_top-right`, `.nds-nubbin_right-top`, `.nds-nubbin_right-bottom`, `.nds-nubbin_bottom-left`, `.nds-nubbin_bottom-right`.

Learn more about how to use them at the [Nubbins documentation](/components/popovers/#flavor-nubbins).

## Accessibility

Showing the tooltip on hover or on keyboard focus of a focusable element ensures that all users can access it, even if they aren’t using a mouse. Examples of focusable elements include links, buttons, and inputs. Give the tooltip an ID and use that as the value of the `aria-describedby` attribute of the DOM element it describes. This helps users of assistive technology read the tooltip content.