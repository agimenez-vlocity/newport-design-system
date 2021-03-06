/* eslint-env browser */
import { storiesOf } from '@storybook/html';
import { withKnobs, number } from '@storybook/addon-knobs';
import base from 'paths.macro';
import notes from './doc.md';
import scss from '../base/_index.scss';
import {
  withExample,
  withDocs,
  commentToHTML
} from '../../../../scripts/storybook';

const label = 'Element Widths';
const defaultValue = 12;
const options = {
  range: true,
  min: 0,
  max: 12,
  step: 1
};
const groupId = 'GROUP-ID1';

storiesOf(`${base}`, module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(notes))
  .addDecorator(commentToHTML(scss))
  .add(`OS Text Field`, () => {
    requestAnimationFrame(() => {
        const bpView = document.getElementById(`a0g4x000000OJreAAG`);
        bpView.addEventListener('change', event => {
          if (event.target.value) {
            event.target.classList.add('nds-has-value');
          } else {
            event.target.classList.remove('nds-has-value');
          }
        });
      });
      const width = number(label, defaultValue, options, groupId);
      return withExample(
          `
          <vlocity_ins-omniscript-preview id="a0g4x000000OJreAAG" data-aura-rendered-by="6:0" vlocity_ins-omniscriptpreview_omniscriptpreview_nds-host="">
          <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" dir="ltr">
             <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="via-nds">
                <article vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" tabindex="-1" class="omniscript-article nds-card nds-grid nds-theme_default nds-grid_vertical">
                   <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-card__body nds-card__body_inner nds-m-top_medium">
                      <c-omniscript-step-chart vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="omniscriptStepChart">
                         <slot>
                            <div class="nds-omniscript_stepform nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_8-of-12 nds-large-size_6-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large nds-m-bottom_x-large">
                               <div class="nds-size_1-of-1">
                                  <div class="nds-progress">
                                     <ol class="nds-progress__list">
                                        <c-omniscript-step-chart-items>
                                           <li data-index="0" class="nds-progress__item nds-is-active" style="cursor: default; padding-bottom: 4px;">
                                              <button data-index="0" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">In Progress</span></button>
                                              <div class="nds-is-absolute">
                                                 <div data-index="0" class="nds-m-top_medium nds-is-relative nds-progress__step-label nds-p-top_xx-small">Text Area</div>
                                              </div>
                                           </li>
                                        </c-omniscript-step-chart-items>
                                     </ol>
                                     <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" role="progressbar" class="nds-progress-bar nds-progress-bar_x-small" style="width: 0%;"><span class="nds-progress-bar__value" style="width: 0%;"><span class="nds-assistive-text">Progress: 0%</span></span></div>
                                  </div>
                               </div>
                            </div>
                         </slot>
                      </c-omniscript-step-chart>
                      <c-omniscript-step vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Step1" vlocity_ins-omniscriptstep_omniscriptstep_nds-host="">
                         <h1 vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-page-header__title nds-align_absolute-center nds-text-align_center nds-medium-size_8-of-12 nds-p-vertical_large nds-step_label">Text Area</h1>
                         <div vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-medium-size_8-of-12 nds-align_absolute-center">
                            <div vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-grid nds-wrap nds-col_padded nds-size_1-of-1 omniscript-step__body-nds">
                               <slot vlocity_ins-omniscriptstep_omniscriptstep_nds="">
                                  <c-omniscript-textarea vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="TextArea" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                                     <slot>
                                        <c-textarea data-id="TextArea" data-omni-input="" class="nds-container_fluid" vlocity_ins-textarea_textarea_nds-host="">
                                           <div vlocity_ins-textarea_textarea_nds="" class="nds-form-element nds-form-container nds-has-error">
                                              <div vlocity_ins-textarea_textarea_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                                 <textarea vlocity_ins-textarea_textarea_nds="" minlength="10" maxlength="255" required="" placeholder="This is a place holder" id="textAreaId-7" class="nds-textarea"></textarea>
                                                 <div vlocity_ins-textarea_textarea_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out">
                                                    <label vlocity_ins-textarea_textarea_nds="" aria-label="TextArea" for="textAreaId-7">TextArea<abbr vlocity_ins-textarea_textarea_nds="" title="Required" class="nds-required nds-p-left_xx-small">*</abbr></label>
                                                    <slot vlocity_ins-textarea_textarea_nds="" name="label"></slot>
                                                 </div>
                                              </div>
                                              <div vlocity_ins-textarea_textarea_nds="" class="nds-form-element__help nds-form-element__help_text-transform__none">Required</div>
                                           </div>
                                        </c-textarea>
                                     </slot>
                                  </c-omniscript-textarea>
                                  <c-omniscript-textarea vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="TextAreaWDefault" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                                     <slot>
                                        <c-textarea data-id="TextAreaWDefault" data-omni-input="" class="nds-container_fluid" vlocity_ins-textarea_textarea_nds-host="">
                                           <div vlocity_ins-textarea_textarea_nds="" class="nds-form-element nds-form-container">
                                              <div vlocity_ins-textarea_textarea_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                                 <textarea vlocity_ins-textarea_textarea_nds="" minlength="10" maxlength="255" required="" placeholder="This is a place holder" id="textAreaId-9" class="nds-textarea nds-not-empty nds-is-dirty">Place holder with default value
       and Line two</textarea>
                                                 <div vlocity_ins-textarea_textarea_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out">
                                                    <label vlocity_ins-textarea_textarea_nds="" aria-label="TextArea" for="textAreaId-9">TextArea<abbr vlocity_ins-textarea_textarea_nds="" title="Required" class="nds-required nds-p-left_xx-small">*</abbr></label>
                                                    <slot vlocity_ins-textarea_textarea_nds="" name="label"></slot>
                                                 </div>
                                              </div>
                                           </div>
                                        </c-textarea>
                                     </slot>
                                  </c-omniscript-textarea>
                                  <c-omniscript-textarea vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="TextAreaRO" class="nds-size_12-of-12 nds-medium-size_12-of-12 nds-read-only" aria-readonly="true">
                                     <slot>
                                        <c-textarea data-id="TextAreaRO" data-omni-input="" class="nds-container_fluid" vlocity_ins-textarea_textarea_nds-host="">
                                           <div vlocity_ins-textarea_textarea_nds="" class="nds-form-element nds-form-container">
                                              <div vlocity_ins-textarea_textarea_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                                 <textarea vlocity_ins-textarea_textarea_nds="" minlength="0" maxlength="255" placeholder="This is a place holder" id="textAreaId-11" class="nds-textarea nds-not-empty nds-is-dirty" tabindex="-1" readonly="">Readonly Place holder with default value</textarea>
                                                 <div vlocity_ins-textarea_textarea_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out">
                                                    <label vlocity_ins-textarea_textarea_nds="" aria-label="TextArea" for="textAreaId-11">TextArea</label>
                                                    <slot vlocity_ins-textarea_textarea_nds="" name="label"></slot>
                                                 </div>
                                              </div>
                                           </div>
                                        </c-textarea>
                                     </slot>
                                  </c-omniscript-textarea>
                               </slot>
                            </div>
                         </div>
                      </c-omniscript-step>
                   </div>
                   <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-m-around_small">
                      <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center">
                         <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
                      </div>
                      <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center">
                         <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
                      </div>
                      <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center">
                         <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
                            <c-button vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="omniscript-btn-save-for-later"><button type="button" label="undefined" class="vlocity-btn nds-button nds-button_base nds-button_stretch nds-p-around_xx-small nds-size_1-of-1"><span class="btnLabel">Save for later</span></button></c-button>
                         </div>
                      </div>
                   </div>
                </article>
             </div>
          </div>
       </vlocity_ins-omniscript-preview>
          `
      );
  });