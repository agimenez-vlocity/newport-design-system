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
  .add('LWC Omniscript', () => {
    requestAnimationFrame(() => {
      const bpView = document.getElementById(`VlocityBPView`);
      bpView.addEventListener('change', event => {
        if (event.target.value) {
          event.target.classList.add('nds-has-value');
        } else {
          event.target.classList.remove('nds-has-value');
        }
      });
    });
    const width = number(label, defaultValue, options, groupId);
    return withExample(`<vloc_mg-omniscript-preview id="a0Z1J00000FGWtHUAX"
    data-aura-rendered-by="6:0"
    vloc_mg-omniscriptpreview_omniscriptpreview_nds-host="">
<div vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
class="via-nds">
<article vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
class="nds-card nds-grid nds-theme_default nds-grid_vertical">
<div vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
class="nds-card__body nds-card__body_inner nds-m-top_medium">
<c-omniscript-step-chart vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
         data-omni-key="omniscriptStepChart">
<slot>
<div class="nds-omniscript_stepform nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_8-of-12 nds-large-size_6-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large nds-m-bottom_x-large">
<div class="nds-size_1-of-1">
<div class="nds-progress">
<ol class="nds-progress__list">
<li data-index="0"
class="nds-progress__item nds-is-relative nds-is-completed"><button data-index="0"
      class="nds-button nds-button_icon nds-progress__marker nds-progress__marker_icon"><svg data-index="0"
     aria-hidden="true"
     class="nds-button__icon">
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24">
    <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm6.2 8.3l-7.1 7.2c-.3.3-.7.3-1 0l-3.9-3.9c-.2-.3-.2-.8 0-1.1l1-1c.3-.2.8-.2 1.1 0l2 2.1c.2.2.5.2.7 0l5.2-5.3c.2-.3.7-.3 1 0l1 1c.3.2.3.7 0 1z"></path>
  </svg>
</svg><span class="nds-assistive-text">Completed</span></button>
<div data-index="0"
   class="nds-is-absolute">
<div role="tooltip"
     class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
  <div class="nds-popover__body">This is step one</div>
</div>
</div>
</li>
<li data-index="1"
class="nds-progress__item nds-is-active"
style="cursor: default;"><button data-index="1"
      disabled=""
      class="nds-button nds-progress__marker"><span class="nds-assistive-text">In Progress</span></button>
<div class="nds-is-absolute">
<div data-index="1"
     class="nds-m-top_medium nds-is-relative nds-progress__step-label nds-p-top_xx-small">Step Chart Label 1</div>
</div>
</li>
<li class="nds-progress__item"
style="cursor: default;"><button data-index="2"
      disabled=""
      class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
<div data-index="2"
   class="nds-is-absolute">
<div role="tooltip"
     class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
  <div class="nds-popover__body">Step2</div>
</div>
</div>
</li>
<li class="nds-progress__item"
style="cursor: default;"><button data-index="3"
      disabled=""
      class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
<div data-index="3"
   class="nds-is-absolute">
<div role="tooltip"
     class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
  <div class="nds-popover__body">Step2</div>
</div>
</div>
</li>
<li class="nds-progress__item"
style="cursor: default;"><button data-index="4"
      disabled=""
      class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
<div data-index="4"
   class="nds-is-absolute">
<div role="tooltip"
     class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
  <div class="nds-popover__body">This is step three</div>
</div>
</div>
</li>
</ol>
<div aria-valuemin="0"
aria-valuemax="100"
aria-valuenow="25"
role="progressbar"
class="nds-progress-bar nds-progress-bar_x-small"><span class="nds-progress-bar__value"
  style="width: 25%;"><span class="nds-assistive-text">Progress: 25%</span></span></div>
</div>
</div>
</div>
</slot>
</c-omniscript-step-chart>
<c-omniscript-step vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
   data-omni-key="Step1"></c-omniscript-step>
<c-omniscript-step vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
   data-omni-key="Inputs">
<h1 class="nds-page-header__title nds-align_absolute-center nds-text-align_center nds-medium-size_8-of-12 nds-p-vertical_large nds-step_label">Step One</h1>
<div class="nds-medium-size_8-of-12 nds-align_absolute-center">
<div class="nds-grid nds-wrap nds-col_padded nds-size_1-of-1">
<slot>
<c-omniscript-checkbox vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
               data-omni-key="Checkbox"
               class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-input data-omni-input="true"
     vloc_mg-input_input_nds-host="">
<div vloc_mg-input_input_nds=""
   class="nds-form-element nds-form-container nds-relative-tooltip">
<div vloc_mg-input_input_nds=""
     class="nds-form-element__control">
  <div vloc_mg-input_input_nds=""
       class="nds-checkbox"><input vloc_mg-input_input_nds=""
           type="checkbox"
           id="input0-12"
           value=""
           class="vlocity-input nds-input_mask"><label vloc_mg-input_input_nds=""
           for="input0-12"
           class="nds-checkbox__label"><span vloc_mg-input_input_nds=""
            class="nds-checkbox_faux"></span><span vloc_mg-input_input_nds=""
            class="nds-form-element__label nds-form-element__control-help nds-checkbox-span">Checkbox Field Label</span>
      </label>
      <c-tooltip vloc_mg-input_input_nds=""
               class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
      </div>
</div>
</div>
</c-input>
</slot>
</c-omniscript-checkbox>
<c-omniscript-currency vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
               data-omni-key="Currency"
               class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-masked-input data-omni-input="true">
<div class="nds-form-element nds-form-container">
<div class="nds-form-element__control nds-form-element__control-animated-label"><input id="input1-17"
         type="tel"
         aria-controls="id-17"
         class="vlocity-input nds-input_mask nds-input">
  <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label aria-label="Currency">Currency</label>
    <c-tooltip class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"
                  class="nds-button nds-button_icon"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
  </div>
</div>
<div class="nds-grid"></div>
</div>
</c-masked-input>
</slot>
</c-omniscript-currency>
<c-omniscript-date vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
           data-omni-key="Date"
           class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-input data-omni-input="true"
     vloc_mg-input_input_nds-host="">
<c-date-picker vloc_mg-input_input_nds=""
             vloc_mg-datepicker_datepicker_nds-host="">
<div vloc_mg-datepicker_datepicker_nds=""
     class="via-nds datePickerHt">
  <div vloc_mg-datepicker_datepicker_nds=""
       class="nds-form nds-form_compound">
    <fieldset vloc_mg-datepicker_datepicker_nds=""
              class="nds-form-element nds-form-container">
      <div vloc_mg-datepicker_datepicker_nds=""
           class="nds-grid nds-gutters nds-size_1-of-1 nds-m-around_none">
        <div vloc_mg-datepicker_datepicker_nds=""
             class="nds-col nds-p-around_none">
          <div vloc_mg-datepicker_datepicker_nds=""
               role="dialog"
               aria-hidden="false"
               aria-label="Date picker: June"
               tabindex="-1"
               class="date-picker-parent-div nds-form-element nds-size_1-of-1 nds-dropdown-trigger nds-dropdown-trigger_click">
            <div vloc_mg-datepicker_datepicker_nds=""
                 class="nds-form-element__control nds-input-has-icon nds-input-has-icon_right nds-form-element__control-animated-label"><input vloc_mg-datepicker_datepicker_nds=""
                     type="text"
                     tabindex="0"
                     data-id="date-picker-nds-input"
                     autocomplete="off"
                     class="nds-input">
              <div vloc_mg-datepicker_datepicker_nds=""
                   class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vloc_mg-datepicker_datepicker_nds=""
                       aria-label="Date">Date</label>
                <c-tooltip vloc_mg-datepicker_datepicker_nds=""
                           class="nds-tooltip__container"
                           vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
                        style="position: relative;">
                    <c-button vloc_mg-tooltip_tooltip=""
                              tabindex="0"
                              class="nds-button nds-button_icon"><button type="button"
                              tabindex="-1"
                              class="nds-button nds-button_icon">
                        <c-icon><svg aria-hidden="true"
                               class="nds-button__icon nds-icon_xx-small">
                            <svg viewBox="0 0 24 24">
                              <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                            </svg><span class="nds-assistive-text"></span></c-icon>
                      </button></c-button><span vloc_mg-tooltip_tooltip=""
                          role="dialog"
                          aria-label="Help Text"
                          class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
                      <div vloc_mg-tooltip_tooltip=""
                           class="nds-popover__body">Help Text</div>
                    </span>
                  </span></c-tooltip>
              </div><button vloc_mg-datepicker_datepicker_nds=""
                      data-id="datePickerBtn"
                      title="Select a date"
                      class="nds-button nds-button_icon nds-input__icon nds-input__icon_right Date">
                <c-icon vloc_mg-datepicker_datepicker_nds=""
                        class="Date"><svg aria-hidden="true"
                       class="nds-icon nds-icon-text-default nds-icon_x-small">
                    <svg viewBox="0 0 24 24">
                      <path d="M21.5 9.2h-19c-.3 0-.7.4-.7.7v11.3c0 1 .9 1.9 1.9 1.9h16.6c1 0 1.9-.9 1.9-1.9V9.9c0-.3-.4-.7-.7-.7zM8.8 19.4c0 .3-.2.4-.5.4H6.5c-.3 0-.5-.1-.5-.4v-1.9c0-.2.2-.4.5-.4h1.8c.3 0 .5.2.5.4v1.9zm0-4.6c0 .2-.2.4-.5.4H6.5c-.3 0-.5-.2-.5-.4v-1.9c0-.3.2-.4.5-.4h1.8c.3 0 .5.1.5.4v1.9zm4.6 4.6c0 .3-.2.4-.5.4h-1.8c-.3 0-.5-.1-.5-.4v-1.9c0-.2.2-.4.5-.4h1.8c.3 0 .5.2.5.4v1.9zm0-4.6c0 .2-.2.4-.5.4h-1.8c-.3 0-.5-.2-.5-.4v-1.9c0-.3.2-.4.5-.4h1.8c.3 0 .5.1.5.4v1.9zm4.6 4.6c0 .3-.2.4-.5.4h-1.8c-.3 0-.5-.1-.5-.4v-1.9c0-.2.2-.4.5-.4h1.8c.3 0 .5.2.5.4v1.9zm0-4.6c0 .2-.2.4-.5.4h-1.8c-.3 0-.5-.2-.5-.4v-1.9c0-.3.2-.4.5-.4h1.8c.3 0 .5.1.5.4v1.9zm2.3-11.6H18v-.9c0-.7-.6-1.4-1.4-1.4-.7 0-1.4.6-1.4 1.4v.9H8.8v-.9c0-.7-.6-1.4-1.4-1.4C6.6.9 6 1.5 6 2.3v.9H3.7c-1 0-1.9.9-1.9 1.9v1.1c0 .4.4.7.7.7h19c.3 0 .7-.3.7-.7V5.1c0-1-.9-1.9-1.9-1.9z"></path>
                    </svg>
                  </svg><span class="nds-assistive-text"></span></c-icon><span vloc_mg-datepicker_datepicker_nds=""
                      class="nds-assistive-text">Select a date</span>
              </button>
            </div>
            <div vloc_mg-datepicker_datepicker_nds=""
                 data-id="date-picker-div"
                 class="calendar-div nds-datepicker nds-dropdown nds-dropdown_left posAbsolute">
              <div vloc_mg-datepicker_datepicker_nds=""
                   class="nds-datepicker__filter nds-grid">
                <div vloc_mg-datepicker_datepicker_nds=""
                     class="nds-datepicker__filter_month nds-grid nds-grid_align-spread nds-grow">
                  <div vloc_mg-datepicker_datepicker_nds=""
                       class="nds-align-middle"><button vloc_mg-datepicker_datepicker_nds=""
                            data-id="prevMonthBtnId"
                            tabindex="0"
                            title="Previous Month"
                            class="nds-button nds-button_icon nds-button_icon-container prevMonth">
                      <c-icon vloc_mg-datepicker_datepicker_nds=""
                              class="prevMonth"><svg aria-hidden="true"
                             class="nds-icon nds-icon-text-default nds-icon_x-small">
                          <use xlink:href="#httpsvlocouidesignerdevedvlocmgvisualforcecomresource1568032701000vlocmgnewportassetsiconsutilityspritesvgsymbolssvg_left"></use>
                        </svg><span class="nds-assistive-text"></span></c-icon><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-assistive-text">Previous Month</span>
                    </button></div>
                  <h2 vloc_mg-datepicker_datepicker_nds=""
                      aria-atomic="true"
                      aria-live="assertive"
                      data-id="selected_month"
                      class="nds-align-middle">September</h2>
                  <div vloc_mg-datepicker_datepicker_nds=""
                       class="nds-align-middle"><button vloc_mg-datepicker_datepicker_nds=""
                            data-id="nextMonthBtnId"
                            tabindex="0"
                            title="Next Month"
                            class="nds-button nds-button_icon nds-button_icon-container nextMonth">
                      <c-icon vloc_mg-datepicker_datepicker_nds=""
                              class="nextMonth"><svg aria-hidden="true"
                             class="nds-icon nds-icon-text-default nds-icon_x-small">
                          <use xlink:href="#httpsvlocouidesignerdevedvlocmgvisualforcecomresource1568032701000vlocmgnewportassetsiconsutilityspritesvgsymbolssvg_right"></use>
                        </svg><span class="nds-assistive-text"></span></c-icon><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-assistive-text">Next Month</span>
                    </button></div>
                </div>
                <div vloc_mg-datepicker_datepicker_nds=""
                     class="nds-shrink-none"><label vloc_mg-datepicker_datepicker_nds=""
                         for="select-01-23"
                         class="nds-assistive-text">Pick a Year</label>
                  <div vloc_mg-datepicker_datepicker_nds=""
                       class="nds-select_container"><select vloc_mg-datepicker_datepicker_nds=""
                            tabindex="0"
                            data-id="select-01"
                            class="nds-select">
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1919</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1920</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1921</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1922</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1923</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1924</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1925</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1926</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1927</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1928</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1929</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1930</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1931</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1932</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1933</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1934</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1935</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1936</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1937</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1938</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1939</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1940</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1941</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1942</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1943</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1944</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1945</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1946</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1947</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1948</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1949</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1950</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1951</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1952</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1953</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1954</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1955</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1956</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1957</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1958</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1959</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1960</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1961</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1962</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1963</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1964</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1965</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1966</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1967</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1968</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1969</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1970</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1971</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1972</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1973</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1974</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1975</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1976</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1977</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1978</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1979</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1980</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1981</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1982</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1983</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1984</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1985</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1986</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1987</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1988</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1989</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1990</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1991</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1992</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1993</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1994</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1995</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1996</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1997</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1998</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1999</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2000</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2001</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2002</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2003</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2004</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2005</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2006</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2007</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2008</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2009</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2010</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2011</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2012</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2013</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2014</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2015</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2016</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2017</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2018</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2019</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2020</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2021</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2022</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2023</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2024</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2025</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2026</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2027</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2028</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2029</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2030</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2031</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2032</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2033</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2034</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2035</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2036</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2037</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2038</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2039</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2040</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2041</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2042</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2043</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2044</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2045</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2046</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2047</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2048</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2049</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2050</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2051</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2052</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2053</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2054</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2055</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2056</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2057</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2058</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2059</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2060</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2061</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2062</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2063</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2064</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2065</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2066</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2067</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2068</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2069</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2070</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2071</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2072</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2073</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2074</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2075</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2076</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2077</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2078</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2079</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2080</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2081</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2082</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2083</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2084</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2085</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2086</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2087</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2088</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2089</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2090</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2091</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2092</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2093</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2094</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2095</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2096</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2097</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2098</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2099</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2100</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2101</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2102</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2103</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2104</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2105</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2106</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2107</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2108</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2109</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2110</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2111</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2112</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2113</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2114</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2115</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2116</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2117</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2118</span></option>
                      <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2119</span></option>
                    </select></div>
                </div>
              </div>
              <table vloc_mg-datepicker_datepicker_nds=""
                     aria-labelledby="month-23"
                     aria-multiselectable="true"
                     role="grid"
                     class="nds-datepicker__month">
                <thead vloc_mg-datepicker_datepicker_nds="">
                  <tr vloc_mg-datepicker_datepicker_nds=""
                      data-id="weekdays">
                    <th vloc_mg-datepicker_datepicker_nds=""
                        data-id="Sun"
                        tabindex="-1"
                        scope="col"
                        class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                            title="Sun">Sun</abbr></th>
                    <th vloc_mg-datepicker_datepicker_nds=""
                        data-id="Mon"
                        tabindex="-1"
                        scope="col"
                        class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                            title="Mon">Mon</abbr></th>
                    <th vloc_mg-datepicker_datepicker_nds=""
                        data-id="Tue"
                        tabindex="-1"
                        scope="col"
                        class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                            title="Tue">Tue</abbr></th>
                    <th vloc_mg-datepicker_datepicker_nds=""
                        data-id="Wed"
                        tabindex="-1"
                        scope="col"
                        class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                            title="Wed">Wed</abbr></th>
                    <th vloc_mg-datepicker_datepicker_nds=""
                        data-id="Thu"
                        tabindex="-1"
                        scope="col"
                        class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                            title="Thu">Thu</abbr></th>
                    <th vloc_mg-datepicker_datepicker_nds=""
                        data-id="Fri"
                        tabindex="-1"
                        scope="col"
                        class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                            title="Fri">Fri</abbr></th>
                    <th vloc_mg-datepicker_datepicker_nds=""
                        data-id="Sat"
                        tabindex="-1"
                        scope="col"
                        class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                            title="Sat">Sat</abbr></th>
                  </tr>
                </thead>
                <tbody vloc_mg-datepicker_datepicker_nds="">
                  <tr vloc_mg-datepicker_datepicker_nds="">
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId1"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId1"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">1</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId2"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId2"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">2</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId3"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId3"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">3</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId4"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId4"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">4</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId5"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId5"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">5</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId6"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId6"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">6</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId7"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId7"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">7</span></td>
                  </tr>
                  <tr vloc_mg-datepicker_datepicker_nds="">
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId8"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId8"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">8</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId9"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId9"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">9</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId10"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId10"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">10</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId11"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId11"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">11</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId12"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId12 nds-is-today"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">12</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId13"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId13"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">13</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId14"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId14"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">14</span></td>
                  </tr>
                  <tr vloc_mg-datepicker_datepicker_nds="">
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId15"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId15"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">15</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId16"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId16"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">16</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId17"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId17"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">17</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId18"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId18"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">18</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId19"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId19"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">19</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId20"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId20"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">20</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId21"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId21"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">21</span></td>
                  </tr>
                  <tr vloc_mg-datepicker_datepicker_nds="">
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId22"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId22"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">22</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId23"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId23"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">23</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId24"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId24"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">24</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId25"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId25"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">25</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId26"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId26"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">26</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId27"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId27"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">27</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId28"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId28"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">28</span></td>
                  </tr>
                  <tr vloc_mg-datepicker_datepicker_nds="">
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId29"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId29"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">29</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="dayId30"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="day-val dayId30"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">30</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="disabled-dayId1"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">1</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="disabled-dayId2"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">2</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="disabled-dayId3"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">3</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="disabled-dayId4"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">4</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="disabled-dayId5"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">5</span></td>
                  </tr>
                  <tr vloc_mg-datepicker_datepicker_nds="">
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="disabled-dayId6"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">6</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="disabled-dayId7"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">7</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="disabled-dayId8"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">8</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="disabled-dayId9"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">9</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="disabled-dayId10"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">10</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="disabled-dayId11"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">11</span></td>
                    <td vloc_mg-datepicker_datepicker_nds=""
                        aria-disabled="true"
                        data-id="disabled-dayId12"
                        aria-selected="false"
                        tabindex="0"
                        role="gridcell"
                        class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-day">12</span></td>
                  </tr>
                </tbody>
              </table><button vloc_mg-datepicker_datepicker_nds=""
                      data-id="current-date"
                      tabindex="0"
                      class="nds-button nds-align_absolute-center nds-text-link currentDate">Today</button>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</div>
</c-date-picker>
</c-input>
</slot>
</c-omniscript-date>
<c-omniscript-date-time vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
                data-omni-key="Date/Time"
                class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-input data-omni-input="true"
     vloc_mg-input_input_nds-host="">
<c-datetime-picker vloc_mg-input_input_nds=""
                 data-format="MM-DD-YYYY"
                 name="datetime-0">
<div class="nds-grid nds-gutters">
  <div class="nds-col">
    <c-date-picker vloc_mg-datepicker_datepicker_nds-host="">
      <div vloc_mg-datepicker_datepicker_nds=""
           class="via-nds datePickerHt">
        <div vloc_mg-datepicker_datepicker_nds=""
             class="nds-form nds-form_compound">
          <fieldset vloc_mg-datepicker_datepicker_nds=""
                    class="nds-form-element nds-form-container">
            <div vloc_mg-datepicker_datepicker_nds=""
                 class="nds-grid nds-gutters nds-size_1-of-1 nds-m-around_none">
              <div vloc_mg-datepicker_datepicker_nds=""
                   class="nds-col nds-p-around_none">
                <div vloc_mg-datepicker_datepicker_nds=""
                     role="dialog"
                     aria-hidden="false"
                     aria-label="Date picker: June"
                     tabindex="-1"
                     class="date-picker-parent-div nds-form-element nds-size_1-of-1 nds-dropdown-trigger nds-dropdown-trigger_click">
                  <div vloc_mg-datepicker_datepicker_nds=""
                       class="nds-form-element__control nds-input-has-icon nds-input-has-icon_right nds-form-element__control-animated-label"><input vloc_mg-datepicker_datepicker_nds=""
                           type="text"
                           tabindex="0"
                           placeholder="Select Date"
                           name="date"
                           data-id="date-picker-nds-input"
                           autocomplete="off"
                           class="nds-input">
                    <div vloc_mg-datepicker_datepicker_nds=""
                         class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vloc_mg-datepicker_datepicker_nds=""
                             aria-label="Date/Time">Date/Time</label>
                      <c-tooltip vloc_mg-datepicker_datepicker_nds=""
                                 class="nds-tooltip__container"
                                 vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
                              style="position: relative;">
                          <c-button vloc_mg-tooltip_tooltip=""
                                    tabindex="0"
                                    class="nds-button nds-button_icon"><button type="button"
                                    tabindex="-1"
                                    class="nds-button nds-button_icon">
                              <c-icon><svg aria-hidden="true"
                                     class="nds-button__icon nds-icon_xx-small">
                                  <svg viewBox="0 0 24 24">
                                    <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                                  </svg><span class="nds-assistive-text"></span></c-icon>
                            </button></c-button><span vloc_mg-tooltip_tooltip=""
                                role="dialog"
                                aria-label="Help Text"
                                class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
                            <div vloc_mg-tooltip_tooltip=""
                                 class="nds-popover__body">Help Text</div>
                          </span>
                        </span></c-tooltip>
                    </div><button vloc_mg-datepicker_datepicker_nds=""
                            data-id="datePickerBtn"
                            title="Select a date"
                            class="nds-button nds-button_icon nds-input__icon nds-input__icon_right Date">
                      <c-icon vloc_mg-datepicker_datepicker_nds=""
                              class="Date"><svg aria-hidden="true"
                             class="nds-icon nds-icon-text-default nds-icon_x-small">
                          <svg viewBox="0 0 24 24">
                            <path d="M21.5 9.2h-19c-.3 0-.7.4-.7.7v11.3c0 1 .9 1.9 1.9 1.9h16.6c1 0 1.9-.9 1.9-1.9V9.9c0-.3-.4-.7-.7-.7zM8.8 19.4c0 .3-.2.4-.5.4H6.5c-.3 0-.5-.1-.5-.4v-1.9c0-.2.2-.4.5-.4h1.8c.3 0 .5.2.5.4v1.9zm0-4.6c0 .2-.2.4-.5.4H6.5c-.3 0-.5-.2-.5-.4v-1.9c0-.3.2-.4.5-.4h1.8c.3 0 .5.1.5.4v1.9zm4.6 4.6c0 .3-.2.4-.5.4h-1.8c-.3 0-.5-.1-.5-.4v-1.9c0-.2.2-.4.5-.4h1.8c.3 0 .5.2.5.4v1.9zm0-4.6c0 .2-.2.4-.5.4h-1.8c-.3 0-.5-.2-.5-.4v-1.9c0-.3.2-.4.5-.4h1.8c.3 0 .5.1.5.4v1.9zm4.6 4.6c0 .3-.2.4-.5.4h-1.8c-.3 0-.5-.1-.5-.4v-1.9c0-.2.2-.4.5-.4h1.8c.3 0 .5.2.5.4v1.9zm0-4.6c0 .2-.2.4-.5.4h-1.8c-.3 0-.5-.2-.5-.4v-1.9c0-.3.2-.4.5-.4h1.8c.3 0 .5.1.5.4v1.9zm2.3-11.6H18v-.9c0-.7-.6-1.4-1.4-1.4-.7 0-1.4.6-1.4 1.4v.9H8.8v-.9c0-.7-.6-1.4-1.4-1.4C6.6.9 6 1.5 6 2.3v.9H3.7c-1 0-1.9.9-1.9 1.9v1.1c0 .4.4.7.7.7h19c.3 0 .7-.3.7-.7V5.1c0-1-.9-1.9-1.9-1.9z"></path>
                          </svg>
                        </svg><span class="nds-assistive-text"></span></c-icon><span vloc_mg-datepicker_datepicker_nds=""
                            class="nds-assistive-text">Select a date</span>
                    </button>
                  </div>
                  <div vloc_mg-datepicker_datepicker_nds=""
                       data-id="date-picker-div"
                       class="calendar-div nds-datepicker nds-dropdown nds-dropdown_left posAbsolute">
                    <div vloc_mg-datepicker_datepicker_nds=""
                         class="nds-datepicker__filter nds-grid">
                      <div vloc_mg-datepicker_datepicker_nds=""
                           class="nds-datepicker__filter_month nds-grid nds-grid_align-spread nds-grow">
                        <div vloc_mg-datepicker_datepicker_nds=""
                             class="nds-align-middle"><button vloc_mg-datepicker_datepicker_nds=""
                                  data-id="prevMonthBtnId"
                                  tabindex="0"
                                  title="Previous Month"
                                  class="nds-button nds-button_icon nds-button_icon-container prevMonth">
                            <c-icon vloc_mg-datepicker_datepicker_nds=""
                                    class="prevMonth"><svg aria-hidden="true"
                                   class="nds-icon nds-icon-text-default nds-icon_x-small">
                                <use xlink:href="#httpsvlocouidesignerdevedvlocmgvisualforcecomresource1568032701000vlocmgnewportassetsiconsutilityspritesvgsymbolssvg_left"></use>
                              </svg><span class="nds-assistive-text"></span></c-icon><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-assistive-text">Previous Month</span>
                          </button></div>
                        <h2 vloc_mg-datepicker_datepicker_nds=""
                            aria-atomic="true"
                            aria-live="assertive"
                            data-id="selected_month"
                            class="nds-align-middle">September</h2>
                        <div vloc_mg-datepicker_datepicker_nds=""
                             class="nds-align-middle"><button vloc_mg-datepicker_datepicker_nds=""
                                  data-id="nextMonthBtnId"
                                  tabindex="0"
                                  title="Next Month"
                                  class="nds-button nds-button_icon nds-button_icon-container nextMonth">
                            <c-icon vloc_mg-datepicker_datepicker_nds=""
                                    class="nextMonth"><svg aria-hidden="true"
                                   class="nds-icon nds-icon-text-default nds-icon_x-small">
                                <use xlink:href="#httpsvlocouidesignerdevedvlocmgvisualforcecomresource1568032701000vlocmgnewportassetsiconsutilityspritesvgsymbolssvg_right"></use>
                              </svg><span class="nds-assistive-text"></span></c-icon><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-assistive-text">Next Month</span>
                          </button></div>
                      </div>
                      <div vloc_mg-datepicker_datepicker_nds=""
                           class="nds-shrink-none"><label vloc_mg-datepicker_datepicker_nds=""
                               for="select-01-31"
                               class="nds-assistive-text">Pick a Year</label>
                        <div vloc_mg-datepicker_datepicker_nds=""
                             class="nds-select_container"><select vloc_mg-datepicker_datepicker_nds=""
                                  tabindex="0"
                                  data-id="select-01"
                                  class="nds-select">
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1919</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1920</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1921</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1922</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1923</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1924</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1925</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1926</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1927</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1928</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1929</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1930</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1931</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1932</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1933</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1934</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1935</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1936</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1937</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1938</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1939</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1940</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1941</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1942</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1943</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1944</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1945</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1946</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1947</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1948</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1949</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1950</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1951</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1952</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1953</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1954</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1955</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1956</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1957</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1958</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1959</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1960</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1961</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1962</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1963</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1964</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1965</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1966</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1967</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1968</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1969</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1970</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1971</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1972</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1973</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1974</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1975</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1976</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1977</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1978</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1979</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1980</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1981</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1982</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1983</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1984</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1985</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1986</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1987</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1988</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1989</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1990</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1991</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1992</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1993</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1994</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1995</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1996</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1997</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1998</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">1999</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2000</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2001</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2002</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2003</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2004</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2005</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2006</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2007</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2008</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2009</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2010</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2011</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2012</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2013</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2014</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2015</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2016</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2017</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2018</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2019</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2020</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2021</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2022</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2023</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2024</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2025</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2026</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2027</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2028</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2029</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2030</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2031</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2032</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2033</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2034</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2035</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2036</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2037</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2038</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2039</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2040</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2041</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2042</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2043</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2044</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2045</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2046</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2047</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2048</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2049</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2050</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2051</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2052</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2053</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2054</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2055</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2056</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2057</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2058</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2059</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2060</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2061</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2062</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2063</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2064</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2065</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2066</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2067</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2068</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2069</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2070</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2071</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2072</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2073</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2074</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2075</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2076</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2077</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2078</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2079</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2080</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2081</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2082</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2083</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2084</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2085</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2086</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2087</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2088</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2089</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2090</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2091</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2092</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2093</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2094</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2095</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2096</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2097</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2098</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2099</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2100</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2101</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2102</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2103</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2104</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2105</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2106</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2107</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2108</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2109</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2110</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2111</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2112</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2113</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2114</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2115</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2116</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2117</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2118</span></option>
                            <option vloc_mg-datepicker_datepicker_nds=""><span vloc_mg-datepicker_datepicker_nds="">2119</span></option>
                          </select></div>
                      </div>
                    </div>
                    <table vloc_mg-datepicker_datepicker_nds=""
                           aria-labelledby="month-31"
                           aria-multiselectable="true"
                           role="grid"
                           class="nds-datepicker__month">
                      <thead vloc_mg-datepicker_datepicker_nds="">
                        <tr vloc_mg-datepicker_datepicker_nds=""
                            data-id="weekdays">
                          <th vloc_mg-datepicker_datepicker_nds=""
                              data-id="Sun"
                              tabindex="-1"
                              scope="col"
                              class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                                  title="Sun">Sun</abbr></th>
                          <th vloc_mg-datepicker_datepicker_nds=""
                              data-id="Mon"
                              tabindex="-1"
                              scope="col"
                              class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                                  title="Mon">Mon</abbr></th>
                          <th vloc_mg-datepicker_datepicker_nds=""
                              data-id="Tue"
                              tabindex="-1"
                              scope="col"
                              class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                                  title="Tue">Tue</abbr></th>
                          <th vloc_mg-datepicker_datepicker_nds=""
                              data-id="Wed"
                              tabindex="-1"
                              scope="col"
                              class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                                  title="Wed">Wed</abbr></th>
                          <th vloc_mg-datepicker_datepicker_nds=""
                              data-id="Thu"
                              tabindex="-1"
                              scope="col"
                              class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                                  title="Thu">Thu</abbr></th>
                          <th vloc_mg-datepicker_datepicker_nds=""
                              data-id="Fri"
                              tabindex="-1"
                              scope="col"
                              class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                                  title="Fri">Fri</abbr></th>
                          <th vloc_mg-datepicker_datepicker_nds=""
                              data-id="Sat"
                              tabindex="-1"
                              scope="col"
                              class="nds-disabled-text"><abbr vloc_mg-datepicker_datepicker_nds=""
                                  title="Sat">Sat</abbr></th>
                        </tr>
                      </thead>
                      <tbody vloc_mg-datepicker_datepicker_nds="">
                        <tr vloc_mg-datepicker_datepicker_nds="">
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId1"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId1"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">1</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId2"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId2"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">2</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId3"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId3"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">3</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId4"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId4"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">4</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId5"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId5"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">5</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId6"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId6"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">6</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId7"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId7"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">7</span></td>
                        </tr>
                        <tr vloc_mg-datepicker_datepicker_nds="">
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId8"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId8"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">8</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId9"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId9"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">9</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId10"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId10"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">10</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId11"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId11"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">11</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId12"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId12 nds-is-today"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">12</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId13"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId13"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">13</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId14"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId14"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">14</span></td>
                        </tr>
                        <tr vloc_mg-datepicker_datepicker_nds="">
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId15"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId15"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">15</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId16"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId16"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">16</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId17"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId17"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">17</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId18"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId18"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">18</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId19"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId19"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">19</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId20"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId20"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">20</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId21"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId21"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">21</span></td>
                        </tr>
                        <tr vloc_mg-datepicker_datepicker_nds="">
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId22"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId22"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">22</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId23"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId23"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">23</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId24"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId24"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">24</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId25"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId25"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">25</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId26"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId26"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">26</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId27"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId27"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">27</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId28"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId28"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">28</span></td>
                        </tr>
                        <tr vloc_mg-datepicker_datepicker_nds="">
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId29"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId29"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">29</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="dayId30"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="day-val dayId30"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">30</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="disabled-dayId1"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">1</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="disabled-dayId2"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">2</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="disabled-dayId3"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">3</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="disabled-dayId4"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">4</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="disabled-dayId5"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">5</span></td>
                        </tr>
                        <tr vloc_mg-datepicker_datepicker_nds="">
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="disabled-dayId6"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">6</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="disabled-dayId7"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">7</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="disabled-dayId8"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">8</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="disabled-dayId9"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">9</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="disabled-dayId10"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">10</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="disabled-dayId11"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">11</span></td>
                          <td vloc_mg-datepicker_datepicker_nds=""
                              aria-disabled="true"
                              data-id="disabled-dayId12"
                              aria-selected="false"
                              tabindex="0"
                              role="gridcell"
                              class="nds-disabled-text day nds-day"><span vloc_mg-datepicker_datepicker_nds=""
                                  class="nds-day">12</span></td>
                        </tr>
                      </tbody>
                    </table><button vloc_mg-datepicker_datepicker_nds=""
                            data-id="current-date"
                            tabindex="0"
                            class="nds-button nds-align_absolute-center nds-text-link currentDate">Today</button>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </c-date-picker>
  </div>
  <div class="nds-col">
    <c-time-picker>
      <div class="nds-form-element nds-form-container">
        <div class="nds-form-element__control">
          <div class="nds-combobox_container">
            <div aria-expanded="false"
                 aria-haspopup="listbox"
                 role="combobox"
                 class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click nds-combobox-picklist nds-timepicker">
              <div role="none"
                   class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right nds-form-element__control nds-form-element__control-animated-label"><input autocomplete="off"
                       role="textbox"
                       type="text"
                       name="time"
                       placeholder="Select Time"
                       tabindex="0"
                       aria-autocomplete="both"
                       class="nds-input nds-combobox__input nds-combobox__input-value">
                <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"></div><span class="nds-icon_container nds-icon-utility-clock nds-input__icon nds-input__icon_right">
                  <c-icon><svg aria-hidden="true"
                         class="nds-icon nds-icon-text-default nds-icon_x-small">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 19.4c-4.6 0-8.3-3.7-8.3-8.3S7.4 3.7 12 3.7s8.3 3.7 8.3 8.3-3.7 8.3-8.3 8.3zm1.6-8.2c-.2-.1-.2-.3-.2-.5V7.2c0-.4-.3-.7-.7-.7h-1.4c-.4 0-.7.3-.7.7v5.5c0 .2.1.4.2.5l3.4 3.5c.3.2.7.2 1 0l1-1c.2-.3.2-.7 0-1l-2.6-2.6z"></path>
                      </svg>
                    </svg><span class="nds-assistive-text"></span></c-icon>
                </span>
              </div>
              <ul role="listbox"
                  class="nds-listbox nds-listbox_vertical nds-dropdown nds-dropdown_fluid nds-dropdown_length-5"></ul>
            </div>
          </div>
        </div>
      </div>
    </c-time-picker>
  </div>
</div>
</c-datetime-picker>
</c-input>
</slot>
</c-omniscript-date-time>
<c-omniscript-email vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
            data-omni-key="Email"
            class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-input data-id="Email"
     data-omni-input="true"
     vloc_mg-input_input_nds-host="">
<div vloc_mg-input_input_nds=""
   class="nds-form-element nds-form-container">
<div vloc_mg-input_input_nds=""
     class="nds-form-element__control nds-form-element__control-animated-label"><input vloc_mg-input_input_nds=""
         id="input4-39"
         pattern=".+\..+"
         type="email"
         aria-controls="id-39"
         class="vlocity-input nds-input_mask nds-input">
  <div vloc_mg-input_input_nds=""
       class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vloc_mg-input_input_nds=""
           aria-label="Email">Email</label>
    <c-tooltip vloc_mg-input_input_nds=""
               class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"
                  class="nds-button nds-button_icon"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
  </div>
</div>
<div vloc_mg-input_input_nds=""
     class="nds-grid"></div>
</div>
</c-input>
</slot>
</c-omniscript-email>
<c-omniscript-lookup vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
             data-omni-key="Lookup"
             class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<fieldset class="nds-form-element nds-form-container">
<div class="nds-combobox_container">
<div aria-expanded="false"
     aria-haspopup="listbox"
     role="combobox"
     class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click">
  <div role="none"
       class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right nds-form-element__control nds-form-element__control-animated-label"><input type="text"
           aria-controls="lookup-43"
           placeholder=""
           data-omni-input="true"
           readonly=""
           class="vlocity-input nds-input">
    <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label aria-label="Lookup">Lookup</label>
      <c-tooltip class="nds-tooltip__container"
                 vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
              style="position: relative;">
          <c-button vloc_mg-tooltip_tooltip=""
                    tabindex="0"
                    class="nds-button nds-button_icon"><button type="button"
                    tabindex="-1"
                    class="nds-button nds-button_icon">
              <c-icon><svg aria-hidden="true"
                     class="nds-button__icon nds-icon_xx-small">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                  </svg><span class="nds-assistive-text"></span></c-icon>
            </button></c-button><span vloc_mg-tooltip_tooltip=""
                role="dialog"
                aria-label="Help Text"
                class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
            <div vloc_mg-tooltip_tooltip=""
                 class="nds-popover__body">Help Text</div>
          </span>
        </span></c-tooltip>
    </div><span class="nds-icon_container nds-input__icon_right">
      <c-icon><svg aria-hidden="true"
             class="nds-icon nds-input__icon nds-icon-text-default nds-icon_small nds-icon_right">
          <svg viewBox="0 0 24 24">
            <title></title>
            <path d="M22.9 20.9l-6.2-6.1c1.3-1.8 1.9-4 1.6-6.4-.6-3.9-3.8-7.1-7.8-7.4C5 .4.4 5 1 10.5c.3 4 3.5 7.3 7.4 7.8 2.4.3 4.6-.3 6.4-1.5l6.1 6.1c.3.3.7.3 1 0l.9-1c.3-.3.3-.7.1-1zM3.7 9.6c0-3.2 2.7-5.9 5.9-5.9 3.3 0 6 2.7 6 5.9 0 3.3-2.7 6-6 6-3.2 0-5.9-2.6-5.9-6z"></path>
          </svg>
        </svg><span class="nds-assistive-text">lookup</span></c-icon>
    </span>
    <div role="listbox"
         id="lookup-43"
         class="nds-dropdown nds-dropdown_fluid">
      <ul role="presentation"
          class="nds-listbox nds-listbox_vertical"></ul>
    </div>
  </div>
  <div class="nds-has-error nds-m-top_none"></div>
</div>
</div>
</fieldset>
</slot>
</c-omniscript-lookup>
<c-omniscript-multiselect vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
                  data-omni-key="Multi-select-vertical-manual"
                  class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-checkbox-group data-refresh="false"
              data-omni-input="true"
              vloc_mg-checkboxgroup_checkboxgroup_nds-host="">
<div vloc_mg-checkboxgroup_checkboxgroup_nds=""
   class="nds-form-element nds-form-container">
<fieldset vloc_mg-checkboxgroup_checkboxgroup_nds=""
          class="nds-form-element"><label vloc_mg-checkboxgroup_checkboxgroup_nds=""
         class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><span vloc_mg-checkboxgroup_checkboxgroup_nds="">Multi-select Vertical Manual</span>
    <c-tooltip vloc_mg-checkboxgroup_checkboxgroup_nds=""
               class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"
                  class="nds-button nds-button_icon"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
  </label>
  <div vloc_mg-checkboxgroup_checkboxgroup_nds=""
       class="nds-form-element__control nds-vertical_checkbox"><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
          class="nds-checkbox"><input vloc_mg-checkboxgroup_checkboxgroup_nds=""
             type="checkbox"
             id="vlocity-checkbox-0-0-49"
             data-index="0"
             name="Multi-select-vertical-manual"
             value="One"><label vloc_mg-checkboxgroup_checkboxgroup_nds=""
             data-index="0"
             for="vlocity-checkbox-0-0-49"
             class="nds-checkbox__label"><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
              class="nds-checkbox_faux"></span><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
              class="nds-form-element__label">One</span></label></span><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
          class="nds-checkbox"><input vloc_mg-checkboxgroup_checkboxgroup_nds=""
             type="checkbox"
             id="vlocity-checkbox-0-1-49"
             data-index="1"
             name="Multi-select-vertical-manual"
             value="Two"><label vloc_mg-checkboxgroup_checkboxgroup_nds=""
             data-index="1"
             for="vlocity-checkbox-0-1-49"
             class="nds-checkbox__label"><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
              class="nds-checkbox_faux"></span><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
              class="nds-form-element__label">Two</span></label></span><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
          class="nds-checkbox"><input vloc_mg-checkboxgroup_checkboxgroup_nds=""
             type="checkbox"
             id="vlocity-checkbox-0-2-49"
             data-index="2"
             name="Multi-select-vertical-manual"
             value="Three"><label vloc_mg-checkboxgroup_checkboxgroup_nds=""
             data-index="2"
             for="vlocity-checkbox-0-2-49"
             class="nds-checkbox__label"><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
              class="nds-checkbox_faux"></span><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
              class="nds-form-element__label">Three</span></label></span></div>
</fieldset>
</div>
</c-checkbox-group>
</slot>
</c-omniscript-multiselect>
<c-omniscript-multiselect vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
                  data-omni-key="Multi-select-horizontal-manual"
                  class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-checkbox-group data-refresh="false"
              data-omni-input="true"
              vloc_mg-checkboxgroup_checkboxgroup_nds-host="">
<div vloc_mg-checkboxgroup_checkboxgroup_nds=""
   class="nds-form-element nds-form-container">
<fieldset vloc_mg-checkboxgroup_checkboxgroup_nds=""
          class="nds-form-element"><label vloc_mg-checkboxgroup_checkboxgroup_nds=""
         class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><span vloc_mg-checkboxgroup_checkboxgroup_nds="">Multi-select Horizontal Manual</span>
    <c-tooltip vloc_mg-checkboxgroup_checkboxgroup_nds=""
               class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"
                  class="nds-button nds-button_icon"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
  </label>
  <div vloc_mg-checkboxgroup_checkboxgroup_nds=""
       class="nds-form-element__control nds-horizontal_checkbox"><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
          class="nds-checkbox"><input vloc_mg-checkboxgroup_checkboxgroup_nds=""
             type="checkbox"
             id="vlocity-checkbox-1-0-54"
             data-index="0"
             name="Multi-select-horizontal-manual"
             value="One"><label vloc_mg-checkboxgroup_checkboxgroup_nds=""
             data-index="0"
             for="vlocity-checkbox-1-0-54"
             class="nds-checkbox__label"><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
              class="nds-checkbox_faux"></span><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
              class="nds-form-element__label">One</span></label></span><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
          class="nds-checkbox"><input vloc_mg-checkboxgroup_checkboxgroup_nds=""
             type="checkbox"
             id="vlocity-checkbox-1-1-54"
             data-index="1"
             name="Multi-select-horizontal-manual"
             value="Two"><label vloc_mg-checkboxgroup_checkboxgroup_nds=""
             data-index="1"
             for="vlocity-checkbox-1-1-54"
             class="nds-checkbox__label"><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
              class="nds-checkbox_faux"></span><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
              class="nds-form-element__label">Two</span></label></span><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
          class="nds-checkbox"><input vloc_mg-checkboxgroup_checkboxgroup_nds=""
             type="checkbox"
             id="vlocity-checkbox-1-2-54"
             data-index="2"
             name="Multi-select-horizontal-manual"
             value="Three"><label vloc_mg-checkboxgroup_checkboxgroup_nds=""
             data-index="2"
             for="vlocity-checkbox-1-2-54"
             class="nds-checkbox__label"><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
              class="nds-checkbox_faux"></span><span vloc_mg-checkboxgroup_checkboxgroup_nds=""
              class="nds-form-element__label">Three</span></label></span></div>
</fieldset>
</div>
</c-checkbox-group>
</slot>
</c-omniscript-multiselect>
<c-omniscript-multiselect vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
                  data-omni-key="Multi-select-image-image"
                  class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-checkbox-image-group data-refresh="false"
                    data-omni-input="true">
<div class="nds-form-element nds-form-container">
<fieldset>
  <div class="nds-form-element__control"><label class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><span>Multi-select Image Image</span>
      <c-tooltip class="nds-tooltip__container"
                 vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
              style="position: relative;">
          <c-button vloc_mg-tooltip_tooltip=""
                    tabindex="0"
                    class="nds-button nds-button_icon"><button type="button"
                    tabindex="-1"
                    class="nds-button nds-button_icon">
              <c-icon><svg aria-hidden="true"
                     class="nds-button__icon nds-icon_xx-small">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                  </svg><span class="nds-assistive-text"></span></c-icon>
            </button></c-button><span vloc_mg-tooltip_tooltip=""
                role="dialog"
                aria-label="Help Text"
                class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
            <div vloc_mg-tooltip_tooltip=""
                 class="nds-popover__body">Help Text</div>
          </span>
        </span></c-tooltip>
    </label>
    <div>
      <div class="nds-checkbox nds-checkbox_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3"
           style="padding-top: 100px;"><input type="checkbox"
               name="Multi-select-image-image"
               id="vlocity-checkbox-2-0-59"
               value="One"><label for="vlocity-checkbox-2-0-59"
               class="nds-checkbox__label vlc-img_select-container nds-img_select-cont nds-img_no-width-height">
          <div class="nds-img-item_select-container"><img src="/assets/images/avatar1.jpg"
                 alt="One"
                 title="One"
                 class="nds-img-item"></div>
          <div class="nds-caption-out_cont"><span class="captionOut nds-form-element__label">One</span></div>
        </label></div>
      <div class="nds-checkbox nds-checkbox_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3"
           style="padding-top: 100px;"><input type="checkbox"
               name="Multi-select-image-image"
               id="vlocity-checkbox-2-1-59"
               value="Two"><label for="vlocity-checkbox-2-1-59"
               class="nds-checkbox__label vlc-img_select-container nds-img_select-cont nds-img_no-width-height">
          <div class="nds-img-item_select-container"><img src="/assets/images/avatar1.jpg"
                 alt="Two"
                 title="Two"
                 class="nds-img-item"></div>
          <div class="nds-caption-out_cont"><span class="captionOut nds-form-element__label">Two</span></div>
        </label></div>
      <div class="nds-checkbox nds-checkbox_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3"
           style="padding-top: 100px;"><input type="checkbox"
               name="Multi-select-image-image"
               id="vlocity-checkbox-2-2-59"
               value="Three"><label for="vlocity-checkbox-2-2-59"
               class="nds-checkbox__label vlc-img_select-container nds-img_select-cont nds-img_no-width-height">
          <div class="nds-img-item_select-container"><img src="/assets/images/avatar1.jpg"
                 alt="Three"
                 title="Three"
                 class="nds-img-item"></div>
          <div class="nds-caption-out_cont"><span class="captionOut nds-form-element__label">Three</span></div>
        </label></div>
    </div>
  </div>
</fieldset>
</div>
</c-checkbox-image-group>
</slot>
</c-omniscript-multiselect>
<c-omniscript-number vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
             data-omni-key="Number"
             class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-masked-input data-omni-input="true">
<div class="nds-form-element nds-form-container">
<div class="nds-form-element__control nds-form-element__control-animated-label"><input id="input5-74"
         type="tel"
         aria-controls="id-74"
         class="vlocity-input nds-input_mask nds-input">
  <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label aria-label="Number">Number</label>
    <c-tooltip class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"
                  class="nds-button nds-button_icon"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
  </div>
</div>
<div class="nds-grid"></div>
</div>
</c-masked-input>
</slot>
</c-omniscript-number>
<c-omniscript-radio vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
            data-omni-key="Radio-vertical-manual"
            class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-radio-group data-refresh="false"
           data-omni-input="true">
<div class="nds-form-element nds-form-container">
<fieldset><label class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><span>Radio Vertical Manual</span>
    <c-tooltip class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"
                  class="nds-button nds-button_icon"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
  </label>
  <div class="nds-form-element__control nds-vertical_radio"><span class="nds-radio"><input type="radio"
             id="vlocity-radio-0-0-79"
             data-index="0"
             name="Radio-vertical-manual"
             value="One"><label data-index="0"
             for="vlocity-radio-0-0-79"
             class="nds-radio__label"><span class="nds-radio_faux"></span><span class="nds-form-element__label">One</span></label></span><span class="nds-radio"><input type="radio"
             id="vlocity-radio-0-1-79"
             data-index="1"
             name="Radio-vertical-manual"
             value="Two"><label data-index="1"
             for="vlocity-radio-0-1-79"
             class="nds-radio__label"><span class="nds-radio_faux"></span><span class="nds-form-element__label">Two</span></label></span><span class="nds-radio"><input type="radio"
             id="vlocity-radio-0-2-79"
             data-index="2"
             name="Radio-vertical-manual"
             value="Three"><label data-index="2"
             for="vlocity-radio-0-2-79"
             class="nds-radio__label"><span class="nds-radio_faux"></span><span class="nds-form-element__label">Three</span></label></span></div>
</fieldset>
</div>
</c-radio-group>
</slot>
</c-omniscript-radio>
<c-omniscript-radio vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
            data-omni-key="Radio-horiztonal-manual"
            class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-radio-group data-refresh="false"
           data-omni-input="true">
<div class="nds-form-element nds-form-container">
<fieldset><label class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><span>Radio Horizontal Manual</span>
    <c-tooltip class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"
                  class="nds-button nds-button_icon"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
  </label>
  <div class="nds-form-element__control nds-horizontal_radio"><span class="nds-radio"><input type="radio"
             id="vlocity-radio-1-0-84"
             data-index="0"
             name="Radio-horiztonal-manual"
             value="One"><label data-index="0"
             for="vlocity-radio-1-0-84"
             class="nds-radio__label"><span class="nds-radio_faux"></span><span class="nds-form-element__label">One</span></label></span><span class="nds-radio"><input type="radio"
             id="vlocity-radio-1-1-84"
             data-index="1"
             name="Radio-horiztonal-manual"
             value="Two"><label data-index="1"
             for="vlocity-radio-1-1-84"
             class="nds-radio__label"><span class="nds-radio_faux"></span><span class="nds-form-element__label">Two</span></label></span><span class="nds-radio"><input type="radio"
             id="vlocity-radio-1-2-84"
             data-index="2"
             name="Radio-horiztonal-manual"
             value="Three"><label data-index="2"
             for="vlocity-radio-1-2-84"
             class="nds-radio__label"><span class="nds-radio_faux"></span><span class="nds-form-element__label">Three</span></label></span></div>
</fieldset>
</div>
</c-radio-group>
</slot>
</c-omniscript-radio>
<c-omniscript-radio vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
            data-omni-key="Radio-image-image"
            class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-radio-image-group data-refresh="false"
                 data-omni-input="true">
<div class="nds-form-element nds-form-container">
<fieldset>
  <div class="nds-radio_custom_container nds-form-element__control"><label class="nds-form-element__legend nds-form-element__label nds-radio-relative-tooltip"><span>Radio Image Image</span>
      <c-tooltip class="nds-tooltip__container"
                 vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
              style="position: relative;">
          <c-button vloc_mg-tooltip_tooltip=""
                    tabindex="0"
                    class="nds-button nds-button_icon"><button type="button"
                    tabindex="-1"
                    class="nds-button nds-button_icon">
              <c-icon><svg aria-hidden="true"
                     class="nds-button__icon nds-icon_xx-small">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                  </svg><span class="nds-assistive-text"></span></c-icon>
            </button></c-button><span vloc_mg-tooltip_tooltip=""
                role="dialog"
                aria-label="Help Text"
                class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
            <div vloc_mg-tooltip_tooltip=""
                 class="nds-popover__body">Help Text</div>
          </span>
        </span></c-tooltip>
    </label>
    <div>
      <div class="nds-radio nds-radio_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3"
           style="padding-top: 100px;"><input type="radio"
               name="Radio-image-image"
               id="vlocity-radio-2-0-89"
               value="One"><label for="vlocity-radio-2-0-89"
               class="nds-radio__label vlc-img_select-container nds-img_select-container nds-img_no-width-height">
          <div class="nds-img-item_select-container nds-img_option-width-height"><img src="/assets/images/avatar1.jpg"
                 alt="One"
                 title="One"
                 class="nds-img-item"></div>
          <div class="nds-caption-out_cont"><span class="captionOut nds-form-element__label">One</span></div>
        </label></div>
      <div class="nds-radio nds-radio_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3"
           style="padding-top: 100px;"><input type="radio"
               name="Radio-image-image"
               id="vlocity-radio-2-1-89"
               value="Two"><label for="vlocity-radio-2-1-89"
               class="nds-radio__label vlc-img_select-container nds-img_select-container nds-img_no-width-height">
          <div class="nds-img-item_select-container nds-img_option-width-height"><img src="/assets/images/avatar1.jpg"
                 alt="Two"
                 title="Two"
                 class="nds-img-item"></div>
          <div class="nds-caption-out_cont"><span class="captionOut nds-form-element__label">Two</span></div>
        </label></div>
      <div class="nds-radio nds-radio_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3"
           style="padding-top: 100px;"><input type="radio"
               name="Radio-image-image"
               id="vlocity-radio-2-2-89"
               value="Three"><label for="vlocity-radio-2-2-89"
               class="nds-radio__label vlc-img_select-container nds-img_select-container nds-img_no-width-height">
          <div class="nds-img-item_select-container nds-img_option-width-height"><img src="/assets/images/avatar1.jpg"
                 alt="Three"
                 title="Three"
                 class="nds-img-item"></div>
          <div class="nds-caption-out_cont"><span class="captionOut nds-form-element__label">Three</span></div>
        </label></div>
    </div>
  </div>
</fieldset>
</div>
</c-radio-image-group>
</slot>
</c-omniscript-radio>
<c-omniscript-radio vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
            data-omni-key="Radio-segment-manual"
            class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-radio-group data-refresh="false"
           data-omni-input="true">
<div class="nds-form-element nds-form-container">
<fieldset><label class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><span>Radio Segment manual</span>
    <c-tooltip class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"
                  class="nds-button nds-button_icon"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
  </label>
  <div class="nds-form-element__control nds-vertical_radio">
    <div class="nds-radio_button-group"><span class="nds-button nds-radio_button"><input type="radio"
               id="vlocity-radio-6-0-109"
               data-index="0"
               name="Radio-segment-manual"
               value="One"><label data-index="0"
               for="vlocity-radio-6-0-109"
               class="nds-radio_button__label"><span class="nds-radio_faux">One</span>
          <div class="nds-radio-overlay"></div>
        </label></span><span class="nds-button nds-radio_button"><input type="radio"
               id="vlocity-radio-6-1-109"
               data-index="1"
               name="Radio-segment-manual"
               value="Two"><label data-index="1"
               for="vlocity-radio-6-1-109"
               class="nds-radio_button__label"><span class="nds-radio_faux">Two</span>
          <div class="nds-radio-overlay"></div>
        </label></span><span class="nds-button nds-radio_button"><input type="radio"
               id="vlocity-radio-6-2-109"
               data-index="2"
               name="Radio-segment-manual"
               value="Three"><label data-index="2"
               for="vlocity-radio-6-2-109"
               class="nds-radio_button__label"><span class="nds-radio_faux">Three</span>
          <div class="nds-radio-overlay"></div>
        </label></span></div>
  </div>
</fieldset>
</div>
</c-radio-group>
</slot>
</c-omniscript-radio>
<c-omniscript-range vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
            data-omni-key="Range"
            class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-slider data-omni-input="true"
      vloc_mg-slider_slider_nds-host="">
<div vloc_mg-slider_slider_nds=""
   class="nds-has-error nds-form-container">
<div vloc_mg-slider_slider_nds=""
     class="nds-slider-label"><label vloc_mg-slider_slider_nds=""
         class="nds-slider-label__label nds-form-element__legend nds-form-element__label"><span vloc_mg-slider_slider_nds="">Range</span></label>
  <c-tooltip vloc_mg-slider_slider_nds=""
             class="nds-tooltip_container"
             vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
          style="position: relative;">
      <c-button vloc_mg-tooltip_tooltip=""
                tabindex="0"
                class="nds-button nds-button_icon"><button type="button"
                tabindex="-1"
                class="nds-button nds-button_icon">
          <c-icon><svg aria-hidden="true"
                 class="nds-button__icon nds-icon_xx-small">
              <svg viewBox="0 0 24 24">
                <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
              </svg><span class="nds-assistive-text"></span></c-icon>
        </button></c-button><span vloc_mg-tooltip_tooltip=""
            role="dialog"
            aria-label="Help Text"
            class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
        <div vloc_mg-tooltip_tooltip=""
             class="nds-popover__body">Help Text</div>
      </span>
    </span></c-tooltip>
</div><span vloc_mg-slider_slider_nds=""
      class="nds-slider-label__range">5-10</span>
<div vloc_mg-slider_slider_nds=""
     class="nds-slider"><input vloc_mg-slider_slider_nds=""
         type="range"
         min="5"
         max="10"
         step="1"
         required=""
         class="nds-slider__range"><span vloc_mg-slider_slider_nds=""
        aria-hidden="true"
        class="nds-slider__value no-break">5</span></div>
</div>
</c-slider>
</slot>
</c-omniscript-range>
<c-omniscript-select vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
             data-omni-key="Select"
             class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-combobox data-refresh="false"
        data-omni-input="true">
<div class="nds-form-element nds-form-container">
<div aria-expanded="false"
     aria-haspopup="listbox"
     role="combobox"
     class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click">
  <div class="nds-form-element__control">
    <div class="nds-combobox_container">
      <div role="none"
           class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right nds-form-element__control nds-form-element__control-animated-label"><input data-value=""
               readonly=""
               class="nds-input nds-listbox__option-text_entity">
        <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label aria-label="Select">Select</label>
          <c-tooltip class="nds-tooltip__container"
                     vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
                  style="position: relative;">
              <c-button vloc_mg-tooltip_tooltip=""
                        tabindex="0"
                        class="nds-button nds-button_icon"><button type="button"
                        tabindex="-1"
                        class="nds-button nds-button_icon">
                  <c-icon><svg aria-hidden="true"
                         class="nds-button__icon nds-icon_xx-small">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                      </svg><span class="nds-assistive-text"></span></c-icon>
                </button></c-button><span vloc_mg-tooltip_tooltip=""
                    role="dialog"
                    aria-label="Help Text"
                    class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
                <div vloc_mg-tooltip_tooltip=""
                     class="nds-popover__body">Help Text</div>
              </span>
            </span></c-tooltip>
        </div><span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right">
          <c-icon><svg aria-hidden="true"
                 class="nds-icon nds-icon-text-default nds-icon_x-small">
              <svg viewBox="0 0 24 24">
                <path d="M3.8 6.5h16.4c.4 0 .8.6.4 1l-8 9.8c-.3.3-.9.3-1.2 0l-8-9.8c-.4-.4-.1-1 .4-1z"></path>
              </svg>
            </svg><span class="nds-assistive-text"></span></c-icon>
        </span>
      </div>
    </div>
    <div class="nds-form-element">
      <div role="listbox"
           class="nds-dropdown nds-dropdown_fluid nds-p-bottom_none">
        <ul role="presentation"
            class="listbox nds-listbox nds-listbox_vertical"></ul>
      </div>
    </div>
  </div>
</div>
</div>
</c-combobox>
</slot>
</c-omniscript-select>
<c-omniscript-telephone vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
                data-omni-key="Telephone"
                class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-masked-input data-omni-input="true">
<div class="nds-form-element nds-form-container">
<div class="nds-form-element__control nds-form-element__control-animated-label"><input id="input6-125"
         type="tel"
         aria-controls="id-125"
         class="vlocity-input nds-input_mask nds-input">
  <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label aria-label="Telephone">Telephone</label>
    <c-tooltip class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"
                  class="nds-button nds-button_icon"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
  </div>
</div>
<div class="nds-grid"></div>
</div>
</c-masked-input>
</slot>
</c-omniscript-telephone>
<c-omniscript-text vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
           data-omni-key="Text"
           class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-input data-omni-input="true"
     vloc_mg-input_input_nds-host="">
<div vloc_mg-input_input_nds=""
   class="nds-form-element nds-form-container">
<div vloc_mg-input_input_nds=""
     class="nds-form-element__control nds-form-element__control-animated-label"><input vloc_mg-input_input_nds=""
         id="input7-130"
         maxlength="255"
         minlength="0"
         type="text"
         aria-controls="id-130"
         class="vlocity-input nds-input_mask nds-input">
  <div vloc_mg-input_input_nds=""
       class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vloc_mg-input_input_nds=""
           aria-label="Text">Text</label>
    <c-tooltip vloc_mg-input_input_nds=""
               class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"
                  class="nds-button nds-button_icon"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
  </div>
</div>
<div vloc_mg-input_input_nds=""
     class="nds-grid"></div>
</div>
</c-input>
</slot>
</c-omniscript-text>
<c-omniscript-textarea vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
               data-omni-key="TextArea"
               class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-textarea data-id="TextArea"
        data-omni-input="true">
<div class="nds-form-element nds-form-container">
<div class="nds-form-element__control nds-form-element__control-animated-label"><textarea minlength="0"
            maxlength="255"
            class="nds-textarea"></textarea>
  <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label aria-label="TextArea">TextArea</label>
    <c-tooltip class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"
                  class="nds-button nds-button_icon"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
  </div>
</div>
</div>
</c-textarea>
</slot>
</c-omniscript-textarea>
<c-omniscript-time vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
           data-omni-key="Time"
           class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-input data-omni-input="true"
     vloc_mg-input_input_nds-host="">
<c-time-picker vloc_mg-input_input_nds="">
<div class="nds-form-element nds-form-container">
  <div class="nds-form-element__control">
    <div class="nds-combobox_container">
      <div aria-expanded="false"
           aria-haspopup="listbox"
           role="combobox"
           class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click nds-combobox-picklist nds-timepicker">
        <div role="none"
             class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right nds-form-element__control nds-form-element__control-animated-label"><input autocomplete="off"
                 role="textbox"
                 type="text"
                 tabindex="0"
                 aria-autocomplete="both"
                 class="nds-input nds-combobox__input nds-combobox__input-value">
          <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label>Time</label>
            <c-tooltip class="nds-tooltip__container"
                       vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
                    style="position: relative;">
                <c-button vloc_mg-tooltip_tooltip=""
                          tabindex="0"
                          class="nds-button nds-button_icon"><button type="button"
                          tabindex="-1"
                          class="nds-button nds-button_icon">
                    <c-icon><svg aria-hidden="true"
                           class="nds-button__icon nds-icon_xx-small">
                        <svg viewBox="0 0 24 24">
                          <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                        </svg><span class="nds-assistive-text"></span></c-icon>
                  </button></c-button><span vloc_mg-tooltip_tooltip=""
                      role="dialog"
                      aria-label="Help Text"
                      class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
                  <div vloc_mg-tooltip_tooltip=""
                       class="nds-popover__body">Help Text</div>
                </span>
              </span></c-tooltip>
          </div><span class="nds-icon_container nds-icon-utility-clock nds-input__icon nds-input__icon_right">
            <c-icon><svg aria-hidden="true"
                   class="nds-icon nds-icon-text-default nds-icon_x-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 19.4c-4.6 0-8.3-3.7-8.3-8.3S7.4 3.7 12 3.7s8.3 3.7 8.3 8.3-3.7 8.3-8.3 8.3zm1.6-8.2c-.2-.1-.2-.3-.2-.5V7.2c0-.4-.3-.7-.7-.7h-1.4c-.4 0-.7.3-.7.7v5.5c0 .2.1.4.2.5l3.4 3.5c.3.2.7.2 1 0l1-1c.2-.3.2-.7 0-1l-2.6-2.6z"></path>
                </svg>
              </svg><span class="nds-assistive-text"></span></c-icon>
          </span>
        </div>
        <ul role="listbox"
            class="nds-listbox nds-listbox_vertical nds-dropdown nds-dropdown_fluid nds-dropdown_length-5"></ul>
      </div>
    </div>
  </div>
</div>
</c-time-picker>
</c-input>
</slot>
</c-omniscript-time>
<c-omniscript-url vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
          data-omni-key="URL"
          class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-input data-id="URL"
     data-omni-input="true"
     vloc_mg-input_input_nds-host="">
<div vloc_mg-input_input_nds=""
   class="nds-form-element nds-form-container">
<div vloc_mg-input_input_nds=""
     class="nds-form-element__control nds-form-element__control-animated-label"><input vloc_mg-input_input_nds=""
         id="input9-147"
         pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&amp;'\(\)\*\+,;=.]+$"
         type="text"
         aria-controls="id-147"
         class="vlocity-input nds-input_mask nds-input">
  <div vloc_mg-input_input_nds=""
       class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vloc_mg-input_input_nds=""
           aria-label="URL">URL</label>
    <c-tooltip vloc_mg-input_input_nds=""
               class="nds-tooltip__container"
               vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
            style="position: relative;">
        <c-button vloc_mg-tooltip_tooltip=""
                  tabindex="0"
                  class="nds-button nds-button_icon"><button type="button"
                  tabindex="-1"
                  class="nds-button nds-button_icon">
            <c-icon><svg aria-hidden="true"
                   class="nds-button__icon nds-icon_xx-small">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg><span class="nds-assistive-text"></span></c-icon>
          </button></c-button><span vloc_mg-tooltip_tooltip=""
              role="dialog"
              aria-label="Help Text"
              class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
          <div vloc_mg-tooltip_tooltip=""
               class="nds-popover__body">Help Text</div>
        </span>
      </span></c-tooltip>
  </div>
</div>
<div vloc_mg-input_input_nds=""
     class="nds-grid"></div>
</div>
</c-input>
</slot>
</c-omniscript-url>
<c-omniscript-formula vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
              data-omni-key="FormulaBoolean"
              class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-masked-input data-omni-input="true">
<div class="nds-form-element nds-form-container">
<div><label aria-label="Formula Boolean"
         class="nds-form-element__label">Formula Boolean</label><input type="text"
         readonly=""
         disabled=""
         class="nds-input nds-not-empty nds-is-dirty"></div>
<div class="nds-form-element__control nds-form-element__control-animated-label">
  <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"></div>
</div>
<div class="nds-grid"></div>
</div>
</c-masked-input>
</slot>
</c-omniscript-formula>
<c-omniscript-formula vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
              data-omni-key="FormulaCurrency"
              class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-masked-input data-omni-input="true">
<div class="nds-form-element nds-form-container">
<div><label aria-label="Formula Currency"
         class="nds-form-element__label">Formula Currency</label><input type="text"
         readonly=""
         disabled=""
         class="nds-input nds-not-empty nds-is-dirty"></div>
<div class="nds-form-element__control nds-form-element__control-animated-label">
  <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"></div>
</div>
<div class="nds-grid"></div>
</div>
</c-masked-input>
</slot>
</c-omniscript-formula>
<c-omniscript-formula vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
              data-omni-key="FormulaDate"
              class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-masked-input data-omni-input="true">
<div class="nds-form-element nds-form-container">
<div><label aria-label="Formula Date"
         class="nds-form-element__label">Formula Date</label><input type="text"
         readonly=""
         disabled=""
         class="nds-input"></div>
<div class="nds-form-element__control nds-form-element__control-animated-label">
  <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"></div>
</div>
<div class="nds-grid"></div>
</div>
</c-masked-input>
</slot>
</c-omniscript-formula>
<c-omniscript-formula vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
              data-omni-key="FormulaNumber"
              class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-masked-input data-omni-input="true">
<div class="nds-form-element nds-form-container">
<div><label aria-label="Formula Number"
         class="nds-form-element__label">Formula Number</label><input type="text"
         readonly=""
         disabled=""
         class="nds-input nds-not-empty nds-is-dirty"></div>
<div class="nds-form-element__control nds-form-element__control-animated-label">
  <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"></div>
</div>
<div class="nds-grid"></div>
</div>
</c-masked-input>
</slot>
</c-omniscript-formula>
<c-omniscript-formula vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
              data-omni-key="FormulaText"
              class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<c-masked-input data-omni-input="true">
<div class="nds-form-element nds-form-container">
<div><label aria-label="Formula Text"
         class="nds-form-element__label">Formula Text</label><input type="text"
         readonly=""
         disabled=""
         class="nds-input"></div>
<div class="nds-form-element__control nds-form-element__control-animated-label">
  <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"></div>
</div>
<div class="nds-grid"></div>
</div>
</c-masked-input>
</slot>
</c-omniscript-formula>
<c-omniscript-preview-block vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
                  data-omni-key="Block"
                  class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<div class="nds-size_1-of-1">
<div class="nds-form-element nds-clearfix nds-block nds-p-around_small nds-is-open">
<div data-force-refresh="true"
 class="nds-form-element__control nds-block_container"><label role="button"
     tabindex="0"
     class="nds-form-element__label nds-clearfix">
<c-icon><svg aria-hidden="true"
       class="nds-icon nds-block__action-icon nds-button__icon nds-button__icon-left nds-icon-text-default nds-icon_small">
       <svg viewBox="0 0 24 24"><path d="M22 8.2l-9.5 9.6c-.3.2-.7.2-1 0L2 8.2c-.2-.3-.2-.7 0-1l1-1c.3-.3.8-.3 1.1 0l7.4 7.5c.3.3.7.3 1 0l7.4-7.5c.3-.3.8-.3 1.1 0l1 1c.2.3.2.7 0 1z"></path></svg>
  </svg><span class="nds-assistive-text">Toggle Content</span></c-icon>
<div class="nds-form-element__label_toggle-text">Block</div>
<div class="nds-control-action__container"></div>
</label>
<div aria-hidden="false"
   aria-expanded="true"
   class="nds-size_1-of-1 nds-block_body">
<div class="nds-grid nds-wrap nds-grid_pull-padded">
  <c-omniscript-text data-omni-key="TextInBlock"
                     class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
    <slot>
      <c-input data-omni-input="true"
               vloc_mg-input_input_nds-host="">
        <div vloc_mg-input_input_nds=""
             class="nds-form-element nds-form-container">
          <div vloc_mg-input_input_nds=""
               class="nds-form-element__control nds-form-element__control-animated-label"><input vloc_mg-input_input_nds=""
                   id="input15-164"
                   maxlength="255"
                   minlength="0"
                   type="text"
                   aria-controls="id-164"
                   class="vlocity-input nds-input_mask nds-input">
            <div vloc_mg-input_input_nds=""
                 class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vloc_mg-input_input_nds=""
                     aria-label="Text in Block">Text in Block</label>
              <c-tooltip vloc_mg-input_input_nds=""
                         class="nds-tooltip__container"
                         vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
                      style="position: relative;">
                  <c-button vloc_mg-tooltip_tooltip=""
                            tabindex="0"
                            class="nds-button nds-button_icon"><button type="button"
                            tabindex="-1"
                            class="nds-button nds-button_icon">
                      <c-icon><svg aria-hidden="true"
                             class="nds-button__icon nds-icon_xx-small">
                          <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg>
                        </svg><span class="nds-assistive-text"></span></c-icon>
                    </button></c-button><span vloc_mg-tooltip_tooltip=""
                        role="dialog"
                        aria-label="Help text"
                        class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
                    <div vloc_mg-tooltip_tooltip=""
                         class="nds-popover__body">Help text</div>
                  </span>
                </span></c-tooltip>
            </div>
          </div>
          <div vloc_mg-input_input_nds=""
               class="nds-grid"></div>
        </div>
      </c-input>
    </slot>
  </c-omniscript-text>
  <c-omniscript-number data-omni-key="NumberInBlock"
                       class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
    <slot>
      <c-masked-input data-omni-input="true">
        <div class="nds-form-element nds-form-container">
          <div class="nds-form-element__control nds-form-element__control-animated-label"><input id="input16-169"
                   type="tel"
                   aria-controls="id-169"
                   class="vlocity-input nds-input_mask nds-input">
            <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label aria-label="Number In Block">Number In Block</label></div>
          </div>
          <div class="nds-grid"></div>
        </div>
      </c-masked-input>
    </slot>
  </c-omniscript-number>
</div>
</div>
</div>
</div>
</div>
</c-omniscript-preview-block>
<c-omniscript-radio-group vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
                  data-omni-key="RadioGroup"
                  class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<fieldset class="nds-form-element nds-form-container nds-m-top_small"><label class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><span>Radio Group</span>
<c-tooltip class="nds-tooltip__container" vloc_mg-tooltip_tooltip-host=""><span vloc_mg-tooltip_tooltip=""
        style="position: relative;">
    <c-button vloc_mg-tooltip_tooltip=""
              tabindex="0"
              class="nds-button nds-button_icon"><button type="button"
              tabindex="-1"
              class="nds-button nds-button_icon">
        <c-icon><svg aria-hidden="true"
               class="nds-button__icon nds-icon_xx-small">
            <svg viewBox="0 0 24 24">
                  <path d="M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm0 5.6c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm2.3 9.7c0 .2-.2.4-.5.4h-3.6c-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5.2 0 .4-.2.4-.4v-1.9c0-.2-.2-.5-.4-.5-.3 0-.5-.1-.5-.4v-.9c0-.3.2-.5.5-.5h2.7c.3 0 .5.2.5.5v3.7c0 .2.2.4.4.4.3 0 .5.2.5.5v.9z"></path>
                </svg>
          </svg><span class="nds-assistive-text"></span></c-icon>
      </button></c-button><span vloc_mg-tooltip_tooltip=""
          role="dialog"
          aria-label="Help Text"
          class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
      <div vloc_mg-tooltip_tooltip=""
           class="nds-popover__body">Help Text</div>
    </span>
  </span></c-tooltip>
</label>
<div data-sval="[object Object]"
   class="nds-grid nds-grid_vertical nds-form-element">
<div class="nds-grid">
  <div class="rlabels nds-p-right_small nds-size_6-of-12"></div>
  <div class="roptions nds-grid nds-size_6-of-12"><label class="nds-form-element__label vlc-setall__label"
           style="width: 33.3333%;"><strong></strong></label><label class="nds-form-element__label vlc-setall__label"
           style="width: 33.3333%;"><strong></strong></label><label class="nds-form-element__label vlc-setall__label"
           style="width: 33.3333%;"><strong></strong></label></div>
</div>
<div class="nds-grid nds-p-bottom_small">
  <div class="rlabels nds-p-right_small nds-size_6-of-12"><span>Four</span></div>
  <div class="roptions nds-grid nds-size_6-of-12"><label class="nds-radio vlc-radiogroup__button"
           style="width: 33.3333%;"><input type="radio"
             data-row="0"
             data-col="0"
             name="RadioGroup-0"
             data-omni-input="true"
             value="One"><span class="nds-radio--faux"></span><span class="nds-form-element__label">One</span></label><label class="nds-radio vlc-radiogroup__button"
           style="width: 33.3333%;"><input type="radio"
             data-row="0"
             data-col="1"
             name="RadioGroup-0"
             data-omni-input="true"
             value="Two"><span class="nds-radio--faux"></span><span class="nds-form-element__label">Two</span></label><label class="nds-radio vlc-radiogroup__button"
           style="width: 33.3333%;"><input type="radio"
             data-row="0"
             data-col="2"
             name="RadioGroup-0"
             data-omni-input="true"
             value="Three"><span class="nds-radio--faux"></span><span class="nds-form-element__label">Three</span></label></div>
</div>
</div>
<div class="nds-has-error nds-m-top_none"></div>
</fieldset>
</slot>
</c-omniscript-radio-group>
<c-omniscript-line-break vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
                 data-omni-key="LineBreak"
                 class="nds-size_1-of-1">
<slot>
<div class="nds-size_1-of-1 nds-line_break"
 style="padding-bottom: 0px;"></div>
</slot>
</c-omniscript-line-break>
<c-omniscript-text-block vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
                 data-omni-key="TextBlock"
                 class="nds-size_12-of-12 nds-medium-size_${width}-of-12">
<slot>
<div class="nds-form-element nds-form-container nds-text-block">
<lightning-formatted-rich-text class="nds-rich-text-editor__output"><span>
  <p><strong>This is a text block</strong></p>
</span></lightning-formatted-rich-text>
</div>
</slot>
</c-omniscript-text-block>
</slot>
</div>
</div>
</c-omniscript-step>
<c-omniscript-step vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
   data-omni-key="Step2"></c-omniscript-step>
<c-omniscript-step vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
   data-omni-key="Step 3"></c-omniscript-step>
<c-omniscript-step vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
   data-omni-key="Step3"></c-omniscript-step>
</div>
<div vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
class="nds-m-around_small">
<div vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
class="nds-grid nds-grid_align-center">
<div vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
<c-button vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
class="omniscript-btn-next nds-size_12-of-12 nds-m-bottom_xx-small nds-medium-size_3-of-12"><button type="button"
class="nds-button nds-button_brand nds-button_stretch nds-p-around_xx-small nds-size_1-of-1">Next</button></c-button>
</div>
</div>
<div vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
class="nds-grid nds-grid_align-center">
<div vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
<c-button vloc_mg-omniscriptpreview_omniscriptpreview_nds=""
class="omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_xx-small nds-medium-size_3-of-12"><button type="button"
class="nds-button nds-button_neutral nds-button_stretch nds-p-around_xx-small nds-size_1-of-1">Previous</button></c-button>
</div>
</div>
</div>
</article>
</div>
</vloc_mg-omniscript-preview>
<!-- the below is added to help recreate dynamic styles of tooltip in LWC -->
<style>
bottom-left[vloc_mg-tooltip_tooltip] {
left: -1rem;
top: -3rem;
}

.tooltipSection[vloc_mg-tooltip_tooltip] {
position: absolute;
max-width: 20rem;
width: max-content;
}
</style>`);
  })
  .add('LWC OS WorkSpace S1-P1', () => {
    requestAnimationFrame(() => {
      const bpView = document.getElementById(`VlocityBPView`);
      bpView.addEventListener('change', event => {
        if (event.target.value) {
          event.target.classList.add('nds-has-value');
        } else {
          event.target.classList.remove('nds-has-value');
        }
      });
    });
    return withExample(`
    <c-wsv-u-x_-po-c_-draft-english data-aura-rendered-by="6:0" c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds-host="">
   <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="via-nds">
      <article c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-card nds-grid nds-theme_default nds-grid_vertical">
         <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-card__body nds-card__body_inner nds-m-top_medium">
            <vlocity_cmt-omniscript-step-chart c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="omniscriptStepChart">
               <slot>
                  <div class="nds-omniscript_stepform nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_8-of-12 nds-large-size_6-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large nds-m-bottom_x-large">
                     <div class="nds-size_1-of-1">
                        <div class="nds-progress">
                           <ol class="nds-progress__list">
                              <c-omniscript-step-chart-items>
                                 <li data-index="0" class="nds-progress__item nds-is-active" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="0" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">In Progress</span></button>
                                    <div class="nds-is-absolute">
                                       <div data-index="0" class="nds-m-top_medium nds-is-relative nds-progress__step-label nds-p-top_xx-small"></div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li class="nds-progress__item" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="1" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
                                    <div data-index="1" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li class="nds-progress__item" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="2" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
                                    <div data-index="2" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li class="nds-progress__item" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="3" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
                                    <div data-index="3" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li class="nds-progress__item" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="4" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
                                    <div data-index="4" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                           </ol>
                           <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" role="progressbar" class="nds-progress-bar nds-progress-bar_x-small"><span class="nds-progress-bar__value" style="width: 0%;"><span class="nds-assistive-text">Progress: 0%</span></span></div>
                        </div>
                     </div>
                  </div>
               </slot>
            </vlocity_cmt-omniscript-step-chart>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step1">
               <h1 class="nds-page-header__title nds-align_absolute-center nds-text-align_center nds-medium-size_8-of-12 nds-p-vertical_large nds-step_label"></h1>
               <div class="nds-medium-size_8-of-12 nds-align_absolute-center">
                  <div class="nds-grid nds-wrap nds-col_padded nds-size_1-of-1">
                     <slot>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="HeadingDetails" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <div>
                                             <div>Section 1 of 9</div>
                                             <h1><strong>Business details</strong></h1>
                                             <div>we require the details about the business for which the licence will be associated</div>
                                          </div>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-radio c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="OrganisationTypeSelector" class="nds-size_12-of-12 nds-medium-size_8-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-radio-group data-refresh="false" data-omni-input="true" vlocity_cmt-radiogroup_radiogroup_nds-host="">
                                    <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element nds-form-container">
                                       <fieldset vlocity_cmt-radiogroup_radiogroup_nds="">
                                          <label vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><abbr vlocity_cmt-radiogroup_radiogroup_nds="" title="required" class="slds-required">*</abbr><span vlocity_cmt-radiogroup_radiogroup_nds="">Is this license for a</span></label>
                                          <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__control nds-vertical_radio"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-0-0-18" data-index="0" name="vlocity-radio-0-0" required="" value="value 1"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="0" for="vlocity-radio-0-0-18" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Organisation</span></label></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-0-1-18" data-index="1" name="vlocity-radio-0-1" required="" value="value 2"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="1" for="vlocity-radio-0-1-18" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Partnership</span></label></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-0-2-18" data-index="2" name="vlocity-radio-0-2" required="" value="value 3"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="2" for="vlocity-radio-0-2-18" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Trust</span></label></span></div>
                                       </fieldset>
                                    </div>
                                 </c-radio-group>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-radio>
                        <vlocity_cmt-omniscript-radio c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="OrganisationSelector" class="nds-size_12-of-12 nds-medium-size_8-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-radio-group data-refresh="false" data-omni-input="true" vlocity_cmt-radiogroup_radiogroup_nds-host="">
                                    <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element nds-form-container">
                                       <fieldset vlocity_cmt-radiogroup_radiogroup_nds="">
                                          <label vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><abbr vlocity_cmt-radiogroup_radiogroup_nds="" title="required" class="slds-required">*</abbr><span vlocity_cmt-radiogroup_radiogroup_nds="">Your ABN/ACN will help us identify your organisation, partnership or trust</span></label>
                                          <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__control nds-vertical_radio"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-1-0-20" data-index="0" name="vlocity-radio-1-0" required="" value="value 1"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="0" for="vlocity-radio-1-0-20" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">ABN(Australian Business Number)</span></label></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-1-1-20" data-index="1" name="vlocity-radio-1-1" required="" value="value 2"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="1" for="vlocity-radio-1-1-20" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">ACN(Australian Company Number)</span></label></span></div>
                                       </fieldset>
                                    </div>
                                 </c-radio-group>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-radio>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Enter_ABN_number_message" class="nds-size_12-of-12 nds-medium-size_8-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <p>Provide Your ABN Number below, if you don't know your&nbsp;</p>
                                          <p>ABN you can find it on&nbsp;<a target="_blank" href="http://www.google.com">ABN Look up website</a></p>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-text c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="ABN_NumberInput" class="nds-size_12-of-12 nds-medium-size_5-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-input data-omni-input="true" class="nds-container_fluid" vlocity_cmt-input_input_nds-host="">
                                    <div vlocity_cmt-input_input_nds="" class="nds-form-element nds-form-container">
                                       <div vlocity_cmt-input_input_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                          <input vlocity_cmt-input_input_nds="" id="input0-24" maxlength="255" minlength="0" type="text" placeholder="77 057 455 026" aria-controls="id-24" class="vlocity-input nds-input_mask nds-input nds-not-empty nds-is-dirty">
                                          <div vlocity_cmt-input_input_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"></div>
                                       </div>
                                    </div>
                                 </c-input>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text>
                        <vlocity_cmt-omniscript-line-break c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="LineBreak7" class="nds-size_1-of-1">
                           <slot>
                              <div class="nds-size_1-of-1 nds-line_break" style="padding-bottom: 0px;"></div>
                           </slot>
                        </vlocity_cmt-omniscript-line-break>
                        <vlocity_cmt-omniscript-text c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="LegalName" class="nds-size_12-of-12 nds-medium-size_5-of-12 nds-read-only" aria-readonly="true">
                           <slot>
                              <div class="nds-grid">
                                 <c-input data-omni-input="true" class="nds-container_fluid" vlocity_cmt-input_input_nds-host="">
                                    <div vlocity_cmt-input_input_nds="" class="nds-form-element nds-form-container">
                                       <div vlocity_cmt-input_input_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                          <input vlocity_cmt-input_input_nds="" id="input1-27" maxlength="255" minlength="0" type="text" aria-controls="id-27" class="vlocity-input nds-input_mask nds-input nds-not-empty nds-is-dirty" tabindex="-1">
                                          <div vlocity_cmt-input_input_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vlocity_cmt-input_input_nds="" aria-label="Full legal name">Full legal name</label></div>
                                       </div>
                                    </div>
                                 </c-input>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text>
                        <vlocity_cmt-omniscript-line-break c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="LineBreak8" class="nds-size_1-of-1">
                           <slot>
                              <div class="nds-size_1-of-1 nds-line_break" style="padding-bottom: 0px;"></div>
                           </slot>
                        </vlocity_cmt-omniscript-line-break>
                        <vlocity_cmt-omniscript-text c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="OrganisationType" class="nds-size_12-of-12 nds-medium-size_5-of-12 nds-read-only" aria-readonly="true">
                           <slot>
                              <div class="nds-grid">
                                 <c-input data-omni-input="true" class="nds-container_fluid" vlocity_cmt-input_input_nds-host="">
                                    <div vlocity_cmt-input_input_nds="" class="nds-form-element nds-form-container">
                                       <div vlocity_cmt-input_input_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                          <input vlocity_cmt-input_input_nds="" id="input2-30" maxlength="255" minlength="0" type="text" aria-controls="id-30" class="vlocity-input nds-input_mask nds-input nds-not-empty nds-is-dirty" tabindex="-1">
                                          <div vlocity_cmt-input_input_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vlocity_cmt-input_input_nds="" aria-label="Organisation type">Organisation type</label></div>
                                       </div>
                                    </div>
                                 </c-input>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text>
                        <vlocity_cmt-omniscript-line-break c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="LineBreak9" class="nds-size_1-of-1">
                           <slot>
                              <div class="nds-size_1-of-1 nds-line_break" style="padding-bottom: 0px;"></div>
                           </slot>
                        </vlocity_cmt-omniscript-line-break>
                        <vlocity_cmt-omniscript-text c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="RegAddress" class="nds-size_12-of-12 nds-medium-size_6-of-12 nds-read-only" aria-readonly="true">
                           <slot>
                              <div class="nds-grid">
                                 <c-input data-omni-input="true" class="nds-container_fluid" vlocity_cmt-input_input_nds-host="">
                                    <div vlocity_cmt-input_input_nds="" class="nds-form-element nds-form-container">
                                       <div vlocity_cmt-input_input_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                          <input vlocity_cmt-input_input_nds="" id="input3-33" maxlength="255" minlength="0" type="text" aria-controls="id-33" class="vlocity-input nds-input_mask nds-input nds-not-empty nds-is-dirty" tabindex="-1">
                                          <div vlocity_cmt-input_input_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vlocity_cmt-input_input_nds="" aria-label="Registered address">Registered address</label></div>
                                       </div>
                                    </div>
                                 </c-input>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text>
                        <vlocity_cmt-omniscript-messaging c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="SuccessMsg" class="nds-size_12-of-12 nds-medium-size_8-of-12">
                           <div role="status" class="nds-is-relative nds-scoped-notification nds-scoped-notification_form">
                              <div class="nds-form-element__control nds-form-element__control-animated-label nds-grid">
                                 <div msg="Success" class="nds-faux-animate">
                                    <span title="Success" class="nds-icon_container nds-icon_container_circle nds-m-right_small">
                                       <c-icon>
                                          <svg aria-hidden="true" class="nds-icon nds-icon-text-success nds-icon_small">
                                             <use xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomresource1586850492000vlocitycmtnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                          </svg>
                                          <span class="nds-assistive-text"></span>
                                       </c-icon>
                                    </span>
                                    <span>ABN Look up has been successfull</span>
                                 </div>
                              </div>
                           </div>
                        </vlocity_cmt-omniscript-messaging>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="HeadingDetails2" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <h1><strong>Business address details</strong></h1>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-radio c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="AddressSelector" class="nds-size_12-of-12 nds-medium-size_8-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-radio-group data-refresh="false" data-omni-input="true" vlocity_cmt-radiogroup_radiogroup_nds-host="">
                                    <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element nds-form-container">
                                       <fieldset vlocity_cmt-radiogroup_radiogroup_nds="">
                                          <label vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                                             <span vlocity_cmt-radiogroup_radiogroup_nds="">Is the registered business address(as shown on your ABN) the same as your primary business address where you carry out your business?</span>
                                             <c-tooltip vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-tooltip__container" vlocity_cmt-tooltip_tooltip-host="">
                                                <span vlocity_cmt-tooltip_tooltip="" style="position: relative;">
                                                   <c-button vlocity_cmt-tooltip_tooltip="" tabindex="0">
                                                      <button type="button" tabindex="-1" class="vlocity-btn nds-button nds-button_icon">
                                                         <c-icon>
                                                            <svg aria-hidden="true" class="nds-button__icon nds-icon_xx-small">
                                                               <use xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomresource1586850492000vlocitycmtnewportassetsiconsutilityspritesvgsymbolssvg_info"></use>
                                                            </svg>
                                                            <span class="nds-assistive-text"></span>
                                                         </c-icon>
                                                      </button>
                                                   </c-button>
                                                   <span vlocity_cmt-tooltip_tooltip="" role="dialog" aria-label="this is required to confirm your address" class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
                                                      <div vlocity_cmt-tooltip_tooltip="" class="nds-popover__body">this is required to confirm your address</div>
                                                   </span>
                                                </span>
                                             </c-tooltip>
                                          </label>
                                          <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__control nds-vertical_radio"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-2-0-38" data-index="0" name="vlocity-radio-2-0" value="value 1"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="0" for="vlocity-radio-2-0-38" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Yes</span></label></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-2-1-38" data-index="1" name="vlocity-radio-2-1" value="value 2"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="1" for="vlocity-radio-2-1-38" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">No</span></label></span></div>
                                       </fieldset>
                                    </div>
                                 </c-radio-group>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-radio>
                        <vlocity_cmt-omniscript-line-break c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="LineBreak6" class="nds-size_1-of-1">
                           <slot>
                              <div class="nds-size_1-of-1 nds-line_break" style="padding-bottom: 0px;"></div>
                           </slot>
                        </vlocity_cmt-omniscript-line-break>
                        <vlocity_cmt-omniscript-text c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="EnterAddress" class="nds-size_12-of-12 nds-medium-size_8-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-input data-omni-input="true" class="nds-container_fluid" vlocity_cmt-input_input_nds-host="">
                                    <div vlocity_cmt-input_input_nds="" class="nds-form-element nds-form-container">
                                       <div vlocity_cmt-input_input_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                          <input vlocity_cmt-input_input_nds="" id="input4-44" maxlength="255" minlength="0" type="text" aria-controls="id-44" class="vlocity-input nds-input_mask nds-input">
                                          <div vlocity_cmt-input_input_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vlocity_cmt-input_input_nds="" aria-label="Enter address">Enter address</label></div>
                                       </div>
                                    </div>
                                 </c-input>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text>
                        <vlocity_cmt-omniscript-radio c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="AddressSelector2" class="nds-size_12-of-12 nds-medium-size_8-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-radio-group data-refresh="false" data-omni-input="true" vlocity_cmt-radiogroup_radiogroup_nds-host="">
                                    <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element nds-form-container">
                                       <fieldset vlocity_cmt-radiogroup_radiogroup_nds="">
                                          <label vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                                             <span vlocity_cmt-radiogroup_radiogroup_nds="">Is there any alternative address you wish to receive  any correspondance from WorkSafe Victoria?</span>
                                             <c-tooltip vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-tooltip__container" vlocity_cmt-tooltip_tooltip-host="">
                                                <span vlocity_cmt-tooltip_tooltip="" style="position: relative;">
                                                   <c-button vlocity_cmt-tooltip_tooltip="" tabindex="0">
                                                      <button type="button" tabindex="-1" class="vlocity-btn nds-button nds-button_icon">
                                                         <c-icon>
                                                            <svg aria-hidden="true" class="nds-button__icon nds-icon_xx-small">
                                                               <use xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomresource1586850492000vlocitycmtnewportassetsiconsutilityspritesvgsymbolssvg_info"></use>
                                                            </svg>
                                                            <span class="nds-assistive-text"></span>
                                                         </c-icon>
                                                      </button>
                                                   </c-button>
                                                   <span vlocity_cmt-tooltip_tooltip="" role="dialog" aria-label="this is required to confirm your address" class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
                                                      <div vlocity_cmt-tooltip_tooltip="" class="nds-popover__body">this is required to confirm your address</div>
                                                   </span>
                                                </span>
                                             </c-tooltip>
                                          </label>
                                          <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__control nds-vertical_radio"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-3-0-46" data-index="0" name="vlocity-radio-3-0" value="value 1"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="0" for="vlocity-radio-3-0-46" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Yes</span></label></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-3-1-46" data-index="1" name="vlocity-radio-3-1" value="value 2"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="1" for="vlocity-radio-3-1-46" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">No</span></label></span></div>
                                       </fieldset>
                                    </div>
                                 </c-radio-group>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-radio>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="HeadingDetails3" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <h1><strong>Company extract</strong></h1>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Upload_extract_message" class="nds-size_12-of-12 nds-medium-size_8-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <p>Please provide a company extract to verify your business details. If you do not</p>
                                          <p>have one you can obtain a copy from&nbsp;<a target="_blank" href="http://www.google.com">ASIC Registers website</a></p>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-file c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="UploadDoc" class="nds-size_12-of-12 nds-medium-size_8-of-12" vlocity_cmt-omniscriptfile_omniscriptfile_nds-host="">
                           <div vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-file-custom-selector nds-form-container">
                              <div vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-file-selector__dropzone">
                                 <div vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-form-element nds-p-around--small">
                                    <slot vlocity_cmt-omniscriptfile_omniscriptfile_nds="">
                                       <div vlocity_cmt-omniscriptfile_omniscriptfile_nds="">
                                          <div vlocity_cmt-omniscriptfile_omniscriptfile_nds=""><label vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-form-element__label omni-input-label"><span vlocity_cmt-omniscriptfile_omniscriptfile_nds=""></span></label></div>
                                          <div vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-grid omni-file-input">
                                             <lightning-file-upload vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-has-dividers_around-space omni-file nds-m-bottom_xx-small nds-size_12-of-12 nds-medium-size_12-of-12">
                                                <lightning-input class="slds-form-element" lightning-input_input-host="">
                                                   <span lightning-input_input="" data-aria="true" class="slds-assistive-text"></span><span lightning-input_input="" id="form-label-56" data-form-label="true" class="slds-form-element__label"></span>
                                                   <div lightning-input_input="" class="slds-form-element__control">
                                                      <div lightning-input_input="" class="slds-file-selector slds-file-selector_files">
                                                         <lightning-primitive-file-droppable-zone lightning-input_input="" class="slds-file-selector__dropzone" interop-primitivefiledroppablezone_primitivefiledroppablezone-host="">
                                                            <slot interop-primitivefiledroppablezone_primitivefiledroppablezone="">
                                                               <input lightning-input_input="" type="file" id="input-file-56" name="lwc019-0" multiple="" class="slds-file-selector__input slds-assistive-text" aria-labelledby="form-label-56 file-selector-label-56">
                                                               <label lightning-input_input="" id="file-selector-label-56" data-file-selector-label="true" for="input-file-56" class="slds-file-selector__body">
                                                                  <span lightning-input_input="" class="slds-file-selector__button slds-button slds-button_neutral">
                                                                     <lightning-primitive-icon lightning-input_input="" lightning-primitiveicon_primitiveicon-host="">
                                                                        <svg lightning-primitiveIcon_primitiveIcon="" focusable="false" data-key="upload" aria-hidden="true" class="slds-button__icon slds-button__icon_left">
                                                                           <use lightning-primitiveIcon_primitiveIcon="" xlink:href="/_slds/icons/utility-sprite/svg/symbols.svg?cache=9.31.2-1#upload"></use>
                                                                        </svg>
                                                                     </lightning-primitive-icon>
                                                                     Upload Files
                                                                  </span>
                                                                  <span lightning-input_input="" class="slds-file-selector__text slds-medium-show">Or drop files</span>
                                                               </label>
                                                            </slot>
                                                         </lightning-primitive-file-droppable-zone>
                                                      </div>
                                                   </div>
                                                </lightning-input>
                                             </lightning-file-upload>
                                          </div>
                                       </div>
                                    </slot>
                                    <slot vlocity_cmt-omniscriptfile_omniscriptfile_nds="" name="files">
                                       <div vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-grid">
                                          <ul vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-has-dividers_around-space omni-file nds-file-list nds-file-list-lwc nds-m-bottom_xx-small nds-size_12-of-12 nds-medium-size_12-of-12"></ul>
                                       </div>
                                    </slot>
                                 </div>
                              </div>
                           </div>
                        </vlocity_cmt-omniscript-file>
                     </slot>
                  </div>
               </div>
            </vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step2"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step3"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step4"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step5"></vlocity_cmt-omniscript-step>
         </div>
         <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-m-around_small">
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
                  <vlocity_cmt-button c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="omniscript-btn-next nds-size_12-of-12 nds-m-bottom_xx-small nds-medium-size_3-of-12"><button type="button" class="vlocity-btn nds-button nds-button_brand nds-button_stretch nds-p-around_xx-small nds-size_1-of-1">Next</button></vlocity_cmt-button>
               </div>
            </div>
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
            </div>
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
            </div>
         </div>
      </article>
   </div>
</c-wsv-u-x_-po-c_-draft-english>
    `);
  })
  .add('LWC OS WorkSpace S1-P2', () => {
    requestAnimationFrame(() => {
      const bpView = document.getElementById(`VlocityBPView`);
      bpView.addEventListener('change', event => {
        if (event.target.value) {
          event.target.classList.add('nds-has-value');
        } else {
          event.target.classList.remove('nds-has-value');
        }
      });
    });
    return withExample(`
    <c-wsv-u-x_-po-c_-draft-english data-aura-rendered-by="6:0" c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds-host="">
   <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="via-nds">
      <article c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-card nds-grid nds-theme_default nds-grid_vertical">
         <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-card__body nds-card__body_inner nds-m-top_medium">
            <vlocity_cmt-omniscript-step-chart c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="omniscriptStepChart">
               <slot>
                  <div class="nds-omniscript_stepform nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_8-of-12 nds-large-size_6-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large nds-m-bottom_x-large">
                     <div class="nds-size_1-of-1">
                        <div class="nds-progress">
                           <ol class="nds-progress__list">
                              <c-omniscript-step-chart-items>
                                 <li data-index="0" class="nds-progress__item nds-is-relative nds-is-completed">
                                    <button data-index="0" class="nds-button nds-button_icon nds-progress__marker nds-progress__marker_icon">
                                       <svg data-index="0" aria-hidden="true" class="nds-button__icon">
                                          <use data-index="0" xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomsldsiconsutilityspritesvgsymbolssvg_success"></use>
                                       </svg>
                                       <span class="nds-assistive-text">Completed</span>
                                    </button>
                                    <div data-index="0" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li data-index="1" class="nds-progress__item nds-is-active" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="1" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">In Progress</span></button>
                                    <div class="nds-is-absolute">
                                       <div data-index="1" class="nds-m-top_medium nds-is-relative nds-progress__step-label nds-p-top_xx-small"></div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li class="nds-progress__item" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="2" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
                                    <div data-index="2" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li class="nds-progress__item" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="3" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
                                    <div data-index="3" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li class="nds-progress__item" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="4" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
                                    <div data-index="4" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                           </ol>
                           <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" role="progressbar" class="nds-progress-bar nds-progress-bar_x-small"><span class="nds-progress-bar__value" style="width: 25%;"><span class="nds-assistive-text">Progress: 25%</span></span></div>
                        </div>
                     </div>
                  </div>
               </slot>
            </vlocity_cmt-omniscript-step-chart>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step1"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step2">
               <h1 class="nds-page-header__title nds-align_absolute-center nds-text-align_center nds-medium-size_8-of-12 nds-p-vertical_large nds-step_label"></h1>
               <div class="nds-medium-size_8-of-12 nds-align_absolute-center">
                  <div class="nds-grid nds-wrap nds-col_padded nds-size_1-of-1">
                     <slot>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="HeadingDetails4" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <p>Section 2 of 9</p>
                                          <h1><strong>Responsible Persons</strong></h1>
                                          <p></p>
                                          <p>You are logged in as&nbsp;<a target="_blank" href="http://www.google.com">Sarah Johnson</a></p>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-textarea c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="LegalObligation" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-textarea data-id="LegalObligation" data-omni-input="true" class="nds-container_fluid" vlocity_cmt-textarea_textarea_nds-host="">
                                    <div vlocity_cmt-textarea_textarea_nds="" class="nds-form-element nds-form-container">
                                       <div vlocity_cmt-textarea_textarea_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                          <textarea vlocity_cmt-textarea_textarea_nds="" minlength="0" maxlength="255" class="nds-textarea nds-not-empty nds-is-dirty">The licence holder or holders are legally responsible for the licence. In the case of a partnership we require all partners. In the case of a trust this will be the trustee(s).</textarea>
                                          <div vlocity_cmt-textarea_textarea_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out">
                                             <label vlocity_cmt-textarea_textarea_nds="" aria-label="Legal Obligation">Legal Obligation</label>
                                             <c-tooltip vlocity_cmt-textarea_textarea_nds="" class="nds-tooltip__container" vlocity_cmt-tooltip_tooltip-host="">
                                                <span vlocity_cmt-tooltip_tooltip="" style="position: relative;">
                                                   <c-button vlocity_cmt-tooltip_tooltip="" tabindex="0">
                                                      <button type="button" tabindex="-1" class="vlocity-btn nds-button nds-button_icon">
                                                         <c-icon>
                                                            <svg aria-hidden="true" class="nds-button__icon nds-icon_xx-small">
                                                               <use xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomresource1586850492000vlocitycmtnewportassetsiconsutilityspritesvgsymbolssvg_info"></use>
                                                            </svg>
                                                            <span class="nds-assistive-text"></span>
                                                         </c-icon>
                                                      </button>
                                                   </c-button>
                                                   <span vlocity_cmt-tooltip_tooltip="" role="dialog" aria-label="here are some legal obligations" class="nds-popover nds-nubbin_bottom-left nds-popover_tooltip nds-fall-into-ground bottom-left tooltipSection">
                                                      <div vlocity_cmt-tooltip_tooltip="" class="nds-popover__body">here are some legal obligations</div>
                                                   </span>
                                                </span>
                                             </c-tooltip>
                                          </div>
                                       </div>
                                    </div>
                                 </c-textarea>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-textarea>
                        <vlocity_cmt-omniscript-radio c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="LicenceHolderSelector" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-radio-group data-refresh="false" data-omni-input="true" vlocity_cmt-radiogroup_radiogroup_nds-host="">
                                    <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element nds-form-container">
                                       <fieldset vlocity_cmt-radiogroup_radiogroup_nds="">
                                          <label vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><abbr vlocity_cmt-radiogroup_radiogroup_nds="" title="required" class="slds-required">*</abbr><span vlocity_cmt-radiogroup_radiogroup_nds="">Confirm if you are:</span></label>
                                          <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__control nds-vertical_radio"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-4-0-69" data-index="0" name="vlocity-radio-4-0" required="" value="value 1"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="0" for="vlocity-radio-4-0-69" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Licence holder</span></label></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-4-1-69" data-index="1" name="vlocity-radio-4-1" required="" value="value 2"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="1" for="vlocity-radio-4-1-69" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Applying on behalf of a licence holder</span></label></span></div>
                                       </fieldset>
                                    </div>
                                 </c-radio-group>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-radio>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Text" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <p>Add any person that are required to be licence holders</p>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-text c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="FirstName" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-input data-omni-input="true" class="nds-container_fluid" vlocity_cmt-input_input_nds-host="">
                                    <div vlocity_cmt-input_input_nds="" class="nds-form-element nds-form-container">
                                       <div vlocity_cmt-input_input_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                          <input vlocity_cmt-input_input_nds="" id="input5-73" maxlength="255" minlength="0" type="text" aria-controls="id-73" class="vlocity-input nds-input_mask nds-input">
                                          <div vlocity_cmt-input_input_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vlocity_cmt-input_input_nds="" aria-label="First name">First name</label></div>
                                       </div>
                                    </div>
                                 </c-input>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text>
                        <vlocity_cmt-omniscript-text c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Surname" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-input data-omni-input="true" class="nds-container_fluid" vlocity_cmt-input_input_nds-host="">
                                    <div vlocity_cmt-input_input_nds="" class="nds-form-element nds-form-container">
                                       <div vlocity_cmt-input_input_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                          <input vlocity_cmt-input_input_nds="" id="input6-75" maxlength="255" minlength="0" type="text" aria-controls="id-75" class="vlocity-input nds-input_mask nds-input">
                                          <div vlocity_cmt-input_input_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vlocity_cmt-input_input_nds="" aria-label="Surname">Surname</label></div>
                                       </div>
                                    </div>
                                 </c-input>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text>
                        <vlocity_cmt-omniscript-text c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Email" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-input data-omni-input="true" class="nds-container_fluid" vlocity_cmt-input_input_nds-host="">
                                    <div vlocity_cmt-input_input_nds="" class="nds-form-element nds-form-container">
                                       <div vlocity_cmt-input_input_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                          <input vlocity_cmt-input_input_nds="" id="input7-77" maxlength="255" minlength="0" type="text" aria-controls="id-77" class="vlocity-input nds-input_mask nds-input">
                                          <div vlocity_cmt-input_input_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vlocity_cmt-input_input_nds="" aria-label="Email">Email</label></div>
                                       </div>
                                    </div>
                                 </c-input>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text>
                        <vlocity_cmt-omniscript-messaging c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="SuccessMsg2" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <div role="status" class="nds-is-relative nds-scoped-notification nds-scoped-notification_form">
                              <div class="nds-form-element__control nds-form-element__control-animated-label nds-grid">
                                 <div msg="Success" class="nds-faux-animate">
                                    <span title="Success" class="nds-icon_container nds-icon_container_circle nds-m-right_small">
                                       <c-icon>
                                          <svg aria-hidden="true" class="nds-icon nds-icon-text-success nds-icon_small">
                                             <use xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomresource1586850492000vlocitycmtnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                          </svg>
                                          <span class="nds-assistive-text"></span>
                                       </c-icon>
                                    </span>
                                    <span>Company director check has been successful</span>
                                 </div>
                              </div>
                           </div>
                        </vlocity_cmt-omniscript-messaging>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="PrimaryContact" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <h3><strong>Primary Contact</strong></h3>
                                          <p>The primary contact will be the person that WorkSafe Victoria contact in</p>
                                          <p>relation to the licence and also in regards to this application. For any legal</p>
                                          <p>communication we will always contact the licence holder by default.</p>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-radio c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="PrimaryContactSelector" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-radio-group data-refresh="false" data-omni-input="true" vlocity_cmt-radiogroup_radiogroup_nds-host="">
                                    <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element nds-form-container">
                                       <fieldset vlocity_cmt-radiogroup_radiogroup_nds="">
                                          <label vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><span vlocity_cmt-radiogroup_radiogroup_nds="">Are you the primary contact?</span></label>
                                          <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__control nds-vertical_radio"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-5-0-82" data-index="0" name="vlocity-radio-5-0" value="value 1"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="0" for="vlocity-radio-5-0-82" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Yes</span></label></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-5-1-82" data-index="1" name="vlocity-radio-5-1" value="value 2"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="1" for="vlocity-radio-5-1-82" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">No</span></label></span></div>
                                       </fieldset>
                                    </div>
                                 </c-radio-group>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-radio>
                     </slot>
                  </div>
               </div>
            </vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step3"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step4"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step5"></vlocity_cmt-omniscript-step>
         </div>
         <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-m-around_small">
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
                  <vlocity_cmt-button c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="omniscript-btn-next nds-size_12-of-12 nds-m-bottom_xx-small nds-medium-size_3-of-12"><button type="button" class="vlocity-btn nds-button nds-button_brand nds-button_stretch nds-p-around_xx-small nds-size_1-of-1">Next</button></vlocity_cmt-button>
               </div>
            </div>
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
                  <vlocity_cmt-button c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_xx-small nds-medium-size_3-of-12"><button type="button" class="vlocity-btn nds-button nds-button_neutral nds-button_stretch nds-p-around_xx-small nds-size_1-of-1">Previous</button></vlocity_cmt-button>
               </div>
            </div>
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
            </div>
         </div>
      </article>
   </div>
</c-wsv-u-x_-po-c_-draft-english>
    `);
  })
  .add('LWC OS WorkSpace S1-P3', () => {
    requestAnimationFrame(() => {
      const bpView = document.getElementById(`VlocityBPView`);
      bpView.addEventListener('change', event => {
        if (event.target.value) {
          event.target.classList.add('nds-has-value');
        } else {
          event.target.classList.remove('nds-has-value');
        }
      });
    });
    return withExample(`
    <c-wsv-u-x_-po-c_-draft-english data-aura-rendered-by="6:0" c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds-host="">
   <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="via-nds">
      <article c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-card nds-grid nds-theme_default nds-grid_vertical">
         <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-card__body nds-card__body_inner nds-m-top_medium">
            <vlocity_cmt-omniscript-step-chart c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="omniscriptStepChart">
               <slot>
                  <div class="nds-omniscript_stepform nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_8-of-12 nds-large-size_6-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large nds-m-bottom_x-large">
                     <div class="nds-size_1-of-1">
                        <div class="nds-progress">
                           <ol class="nds-progress__list">
                              <c-omniscript-step-chart-items>
                                 <li data-index="0" class="nds-progress__item nds-is-relative nds-is-completed">
                                    <button data-index="0" class="nds-button nds-button_icon nds-progress__marker nds-progress__marker_icon">
                                       <svg data-index="0" aria-hidden="true" class="nds-button__icon">
                                          <use data-index="0" xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomsldsiconsutilityspritesvgsymbolssvg_success"></use>
                                       </svg>
                                       <span class="nds-assistive-text">Completed</span>
                                    </button>
                                    <div data-index="0" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li data-index="1" class="nds-progress__item nds-is-relative nds-is-completed">
                                    <button data-index="1" class="nds-button nds-button_icon nds-progress__marker nds-progress__marker_icon">
                                       <svg data-index="1" aria-hidden="true" class="nds-button__icon">
                                          <use data-index="1" xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomsldsiconsutilityspritesvgsymbolssvg_success"></use>
                                       </svg>
                                       <span class="nds-assistive-text">Completed</span>
                                    </button>
                                    <div data-index="1" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li data-index="2" class="nds-progress__item nds-is-active" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="2" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">In Progress</span></button>
                                    <div class="nds-is-absolute">
                                       <div data-index="2" class="nds-m-top_medium nds-is-relative nds-progress__step-label nds-p-top_xx-small"></div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li class="nds-progress__item" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="3" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
                                    <div data-index="3" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li class="nds-progress__item" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="4" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
                                    <div data-index="4" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                           </ol>
                           <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar" class="nds-progress-bar nds-progress-bar_x-small"><span class="nds-progress-bar__value" style="width: 50%;"><span class="nds-assistive-text">Progress: 50%</span></span></div>
                        </div>
                     </div>
                  </div>
               </slot>
            </vlocity_cmt-omniscript-step-chart>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step1"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step2"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step3">
               <h1 class="nds-page-header__title nds-align_absolute-center nds-text-align_center nds-medium-size_8-of-12 nds-p-vertical_large nds-step_label"></h1>
               <div class="nds-medium-size_8-of-12 nds-align_absolute-center">
                  <div class="nds-grid nds-wrap nds-col_padded nds-size_1-of-1">
                     <slot>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="HeadingDetails5" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <p>Section 3 of 5</p>
                                          <h1><strong>Licence type</strong></h1>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-radio c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="LicenceClassSelector" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-radio-group data-refresh="false" data-omni-input="true" vlocity_cmt-radiogroup_radiogroup_nds-host="">
                                    <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element nds-form-container">
                                       <fieldset vlocity_cmt-radiogroup_radiogroup_nds="">
                                          <label vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><abbr vlocity_cmt-radiogroup_radiogroup_nds="" title="required" class="slds-required">*</abbr><span vlocity_cmt-radiogroup_radiogroup_nds="">Select the licence class that you require.</span></label>
                                          <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__control nds-vertical_radio"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-6-0-87" data-index="0" name="vlocity-radio-6-0" required="" value="value 1"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="0" for="vlocity-radio-6-0-87" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Class A - Friable asbestos</span></label></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-6-1-87" data-index="1" name="vlocity-radio-6-1" required="" value="value 2"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="1" for="vlocity-radio-6-1-87" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Class B -  Non-friable asbestos</span></label></span></div>
                                       </fieldset>
                                    </div>
                                 </c-radio-group>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-radio>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="LicenceDetailsText" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <p>If you are not sure on which licence you need you can read</p>
                                          <p>more on&nbsp;<a target="_blank" href="http://www.google.com">Asbestos; What is friable and non-friable asbestos</a></p>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-radio c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="LicenceConditionClass" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-radio-group data-refresh="false" data-omni-input="true" vlocity_cmt-radiogroup_radiogroup_nds-host="">
                                    <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element nds-form-container">
                                       <fieldset vlocity_cmt-radiogroup_radiogroup_nds="">
                                          <label vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><span vlocity_cmt-radiogroup_radiogroup_nds="">Select the conditions of the class you require</span></label>
                                          <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__control nds-vertical_radio"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-7-0-91" data-index="0" name="vlocity-radio-7-0" value="Value 1"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="0" for="vlocity-radio-7-0-91" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Class A - Friable and  non-friable</span></label></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-7-1-91" data-index="1" name="vlocity-radio-7-1" value="value 2"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="1" for="vlocity-radio-7-1-91" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Class B -  Specific friable</span></label></span></div>
                                       </fieldset>
                                    </div>
                                 </c-radio-group>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-radio>
                        <vlocity_cmt-omniscript-multiselect c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="SpecifiedItem" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-checkbox-group data-refresh="false" data-omni-input="true" vlocity_cmt-checkboxgroup_checkboxgroup_nds-host="">
                                    <div vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-form-element nds-form-container">
                                       <fieldset vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-form-element">
                                          <label vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><abbr vlocity_cmt-checkboxgroup_checkboxgroup_nds="" title="required" class="nds-required">*</abbr><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="">Select the specified item</span></label>
                                          <div vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__control nds-vertical_checkbox"><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_cmt-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-0-93" data-index="0" name="SpecifiedItem" required="" value="value 1"><label vlocity_cmt-checkboxgroup_checkboxgroup_nds="" data-index="0" for="vlocity-checkbox-0-0-93" class="nds-checkbox__label"><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Item 01</span></label></span><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_cmt-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-1-93" data-index="1" name="SpecifiedItem" required="" value="value 2"><label vlocity_cmt-checkboxgroup_checkboxgroup_nds="" data-index="1" for="vlocity-checkbox-0-1-93" class="nds-checkbox__label"><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Item 02</span></label></span><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_cmt-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-2-93" data-index="2" name="SpecifiedItem" required="" value="value 3"><label vlocity_cmt-checkboxgroup_checkboxgroup_nds="" data-index="2" for="vlocity-checkbox-0-2-93" class="nds-checkbox__label"><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Item 03</span></label></span><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_cmt-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-3-93" data-index="3" name="SpecifiedItem" required="" value="value 4"><label vlocity_cmt-checkboxgroup_checkboxgroup_nds="" data-index="3" for="vlocity-checkbox-0-3-93" class="nds-checkbox__label"><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Item 04</span></label></span><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_cmt-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-4-93" data-index="4" name="SpecifiedItem" required="" value="value 5"><label vlocity_cmt-checkboxgroup_checkboxgroup_nds="" data-index="4" for="vlocity-checkbox-0-4-93" class="nds-checkbox__label"><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Item 05</span></label></span><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_cmt-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-5-93" data-index="5" name="SpecifiedItem" required="" value="value 6"><label vlocity_cmt-checkboxgroup_checkboxgroup_nds="" data-index="5" for="vlocity-checkbox-0-5-93" class="nds-checkbox__label"><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_cmt-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Other</span></label></span></div>
                                       </fieldset>
                                    </div>
                                 </c-checkbox-group>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-multiselect>
                        <vlocity_cmt-omniscript-textarea c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="ListItemsArea" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-textarea data-id="ListItemsArea" data-omni-input="true" class="nds-container_fluid" vlocity_cmt-textarea_textarea_nds-host="">
                                    <div vlocity_cmt-textarea_textarea_nds="" class="nds-form-element nds-form-container">
                                       <div vlocity_cmt-textarea_textarea_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                          <textarea vlocity_cmt-textarea_textarea_nds="" minlength="0" maxlength="255" class="nds-textarea"></textarea>
                                          <div vlocity_cmt-textarea_textarea_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vlocity_cmt-textarea_textarea_nds="" aria-label="List other items you wish to include (separated by a coma)">List other items you wish to include (separated by a coma)</label></div>
                                       </div>
                                    </div>
                                 </c-textarea>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-textarea>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="HeadingDetails6" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <h3><strong>Class A supporting certification</strong></h3>
                                          <p>To obtain a Class A licence it is a requirement to provide a current</p>
                                          <p>occupational health and safety (OH&amp;S) Management System certificate</p>
                                          <p>that is related to asbestos removal.</p>
                                          <p>We can also accept proof of a review if you have been audited by an OH&amp;S</p>
                                          <p>office within the past 6 months.</p>
                                          <p></p>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-radio c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="ClassConditionSelector" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-radio-group data-refresh="false" data-omni-input="true" vlocity_cmt-radiogroup_radiogroup_nds-host="">
                                    <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element nds-form-container">
                                       <fieldset vlocity_cmt-radiogroup_radiogroup_nds="">
                                          <label vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><span vlocity_cmt-radiogroup_radiogroup_nds="">Select the conditions of the class you require</span></label>
                                          <div vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__control nds-vertical_radio"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-8-0-99" data-index="0" name="vlocity-radio-8-0" value="value 1"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="0" for="vlocity-radio-8-0-99" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Valid OH&amp;S certificate</span></label></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio"><input vlocity_cmt-radiogroup_radiogroup_nds="" type="radio" id="vlocity-radio-8-1-99" data-index="1" name="vlocity-radio-8-1" value="value 2"><label vlocity_cmt-radiogroup_radiogroup_nds="" data-index="1" for="vlocity-radio-8-1-99" class="nds-radio__label"><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-radio_faux"></span><span vlocity_cmt-radiogroup_radiogroup_nds="" class="nds-form-element__label">Proof of OH&amp;S review</span></label></span></div>
                                       </fieldset>
                                    </div>
                                 </c-radio-group>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-radio>
                        <vlocity_cmt-omniscript-file c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="UploadDoc2" class="nds-size_12-of-12 nds-medium-size_12-of-12" vlocity_cmt-omniscriptfile_omniscriptfile_nds-host="">
                           <div vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-file-custom-selector nds-form-container">
                              <div vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-file-selector__dropzone">
                                 <div vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-form-element nds-p-around--small">
                                    <slot vlocity_cmt-omniscriptfile_omniscriptfile_nds="">
                                       <div vlocity_cmt-omniscriptfile_omniscriptfile_nds="">
                                          <div vlocity_cmt-omniscriptfile_omniscriptfile_nds=""><label vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-form-element__label omni-input-label"><span vlocity_cmt-omniscriptfile_omniscriptfile_nds=""></span></label></div>
                                          <div vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-grid omni-file-input">
                                             <lightning-file-upload vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-has-dividers_around-space omni-file nds-m-bottom_xx-small nds-size_12-of-12 nds-medium-size_12-of-12">
                                                <lightning-input class="slds-form-element" lightning-input_input-host="">
                                                   <span lightning-input_input="" data-aria="true" class="slds-assistive-text"></span><span lightning-input_input="" id="form-label-102" data-form-label="true" class="slds-form-element__label"></span>
                                                   <div lightning-input_input="" class="slds-form-element__control">
                                                      <div lightning-input_input="" class="slds-file-selector slds-file-selector_files">
                                                         <lightning-primitive-file-droppable-zone lightning-input_input="" class="slds-file-selector__dropzone" interop-primitivefiledroppablezone_primitivefiledroppablezone-host="">
                                                            <slot interop-primitivefiledroppablezone_primitivefiledroppablezone="">
                                                               <input lightning-input_input="" type="file" id="input-file-102" name="lwc28-0" multiple="" class="slds-file-selector__input slds-assistive-text" aria-labelledby="form-label-102 file-selector-label-102">
                                                               <label lightning-input_input="" id="file-selector-label-102" data-file-selector-label="true" for="input-file-102" class="slds-file-selector__body">
                                                                  <span lightning-input_input="" class="slds-file-selector__button slds-button slds-button_neutral">
                                                                     <lightning-primitive-icon lightning-input_input="" lightning-primitiveicon_primitiveicon-host="">
                                                                        <svg lightning-primitiveIcon_primitiveIcon="" focusable="false" data-key="upload" aria-hidden="true" class="slds-button__icon slds-button__icon_left">
                                                                           <use lightning-primitiveIcon_primitiveIcon="" xlink:href="/_slds/icons/utility-sprite/svg/symbols.svg?cache=9.31.2-1#upload"></use>
                                                                        </svg>
                                                                     </lightning-primitive-icon>
                                                                     Upload Files
                                                                  </span>
                                                                  <span lightning-input_input="" class="slds-file-selector__text slds-medium-show">Or drop files</span>
                                                               </label>
                                                            </slot>
                                                         </lightning-primitive-file-droppable-zone>
                                                      </div>
                                                   </div>
                                                </lightning-input>
                                             </lightning-file-upload>
                                          </div>
                                       </div>
                                    </slot>
                                    <slot vlocity_cmt-omniscriptfile_omniscriptfile_nds="" name="files">
                                       <div vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-grid">
                                          <ul vlocity_cmt-omniscriptfile_omniscriptfile_nds="" class="nds-has-dividers_around-space omni-file nds-file-list nds-file-list-lwc nds-m-bottom_xx-small nds-size_12-of-12 nds-medium-size_12-of-12"></ul>
                                       </div>
                                    </slot>
                                 </div>
                              </div>
                           </div>
                        </vlocity_cmt-omniscript-file>
                        <vlocity_cmt-omniscript-date c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="DateSelector" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-input data-omni-input="true" class="nds-container_fluid" vlocity_cmt-input_input_nds-host="">
                                    <c-date-picker vlocity_cmt-input_input_nds="" vlocity_cmt-datepicker_datepicker_nds-host="">
                                       <div vlocity_cmt-datepicker_datepicker_nds="" class="via-nds datePickerHt">
                                          <div vlocity_cmt-datepicker_datepicker_nds="" class="nds-form nds-form_compound">
                                             <fieldset vlocity_cmt-datepicker_datepicker_nds="" class="nds-form-element nds-form-container">
                                                <div vlocity_cmt-datepicker_datepicker_nds="" class="nds-grid nds-gutters nds-size_1-of-1 nds-m-around_none">
                                                   <div vlocity_cmt-datepicker_datepicker_nds="" class="nds-col nds-p-around_none">
                                                      <div vlocity_cmt-datepicker_datepicker_nds="" role="dialog" aria-hidden="false" aria-label="Date picker" tabindex="-1" class="nds-form-element nds-size_1-of-1 nds-dropdown-trigger nds-dropdown-trigger_click">
                                                         <div vlocity_cmt-datepicker_datepicker_nds="" class="nds-form-element__control nds-input-has-icon nds-input-has-icon_right nds-form-element__control-animated-label">
                                                            <input vlocity_cmt-datepicker_datepicker_nds="" type="text" tabindex="0" data-id="date-picker-nds-input" autocomplete="off" class="nds-input">
                                                            <div vlocity_cmt-datepicker_datepicker_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"><label vlocity_cmt-datepicker_datepicker_nds="" aria-label="Provide the expiry date of the certificate">Provide the expiry date of the certificate</label></div>
                                                            <button vlocity_cmt-datepicker_datepicker_nds="" data-id="datePickerBtn" title="Select a date" class="nds-button nds-button_icon nds-input__icon nds-input__icon_right Date">
                                                               <c-icon vlocity_cmt-datepicker_datepicker_nds="" class="Date">
                                                                  <svg aria-hidden="true" class="nds-icon nds-icon-text-default nds-icon_x-small">
                                                                     <use xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomresource1586850492000vlocitycmtnewportassetsiconsutilityspritesvgsymbolssvg_event"></use>
                                                                  </svg>
                                                                  <span class="nds-assistive-text"></span>
                                                               </c-icon>
                                                               <span vlocity_cmt-datepicker_datepicker_nds="" class="nds-assistive-text">Select a date</span>
                                                            </button>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </fieldset>
                                          </div>
                                       </div>
                                    </c-date-picker>
                                 </c-input>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-date>
                        <vlocity_cmt-omniscript-textarea c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="CertificateMessage" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-textarea data-id="CertificateMessage" data-omni-input="true" class="nds-container_fluid" vlocity_cmt-textarea_textarea_nds-host="">
                                    <div vlocity_cmt-textarea_textarea_nds="" class="nds-form-element nds-form-container">
                                       <div vlocity_cmt-textarea_textarea_nds="" class="nds-form-element__control nds-form-element__control-animated-label">
                                          <textarea vlocity_cmt-textarea_textarea_nds="" minlength="0" maxlength="400" class="nds-textarea nds-not-empty nds-is-dirty">It is a requirement that your OH&amp;S certificate remains current and valid for the duration of your Licence. Please be aware that if your certification expires you will no longer be able to operate under this licence. By providing your certification expiry date we will send you a reminder when an updated certification is due.</textarea>
                                          <div vlocity_cmt-textarea_textarea_nds="" class="nds-form-element__label nds-align-middle nds-animated-label__ease-out"></div>
                                       </div>
                                    </div>
                                 </c-textarea>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-textarea>
                     </slot>
                  </div>
               </div>
            </vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step4"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step5"></vlocity_cmt-omniscript-step>
         </div>
         <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-m-around_small">
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
                  <vlocity_cmt-button c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="omniscript-btn-next nds-size_12-of-12 nds-m-bottom_xx-small nds-medium-size_3-of-12"><button type="button" class="vlocity-btn nds-button nds-button_brand nds-button_stretch nds-p-around_xx-small nds-size_1-of-1">Next</button></vlocity_cmt-button>
               </div>
            </div>
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
                  <vlocity_cmt-button c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_xx-small nds-medium-size_3-of-12"><button type="button" class="vlocity-btn nds-button nds-button_neutral nds-button_stretch nds-p-around_xx-small nds-size_1-of-1">Previous</button></vlocity_cmt-button>
               </div>
            </div>
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
            </div>
         </div>
      </article>
   </div>
</c-wsv-u-x_-po-c_-draft-english>
    `);
  })
  .add('LWC OS WorkSpace S1-P4', () => {
    requestAnimationFrame(() => {
      const bpView = document.getElementById(`VlocityBPView`);
      bpView.addEventListener('change', event => {
        if (event.target.value) {
          event.target.classList.add('nds-has-value');
        } else {
          event.target.classList.remove('nds-has-value');
        }
      });
    });
    return withExample(`
    <c-wsv-u-x_-po-c_-draft-english data-aura-rendered-by="6:0" c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds-host="">
   <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="via-nds">
      <article c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-card nds-grid nds-theme_default nds-grid_vertical">
         <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-card__body nds-card__body_inner nds-m-top_medium">
            <vlocity_cmt-omniscript-step-chart c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="omniscriptStepChart">
               <slot>
                  <div class="nds-omniscript_stepform nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_8-of-12 nds-large-size_6-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large nds-m-bottom_x-large">
                     <div class="nds-size_1-of-1">
                        <div class="nds-progress">
                           <ol class="nds-progress__list">
                              <c-omniscript-step-chart-items>
                                 <li data-index="0" class="nds-progress__item nds-is-relative nds-is-completed">
                                    <button data-index="0" class="nds-button nds-button_icon nds-progress__marker nds-progress__marker_icon">
                                       <svg data-index="0" aria-hidden="true" class="nds-button__icon">
                                          <use data-index="0" xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomsldsiconsutilityspritesvgsymbolssvg_success"></use>
                                       </svg>
                                       <span class="nds-assistive-text">Completed</span>
                                    </button>
                                    <div data-index="0" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li data-index="1" class="nds-progress__item nds-is-relative nds-is-completed">
                                    <button data-index="1" class="nds-button nds-button_icon nds-progress__marker nds-progress__marker_icon">
                                       <svg data-index="1" aria-hidden="true" class="nds-button__icon">
                                          <use data-index="1" xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomsldsiconsutilityspritesvgsymbolssvg_success"></use>
                                       </svg>
                                       <span class="nds-assistive-text">Completed</span>
                                    </button>
                                    <div data-index="1" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li data-index="2" class="nds-progress__item nds-is-relative nds-is-completed">
                                    <button data-index="2" class="nds-button nds-button_icon nds-progress__marker nds-progress__marker_icon">
                                       <svg data-index="2" aria-hidden="true" class="nds-button__icon">
                                          <use data-index="2" xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomsldsiconsutilityspritesvgsymbolssvg_success"></use>
                                       </svg>
                                       <span class="nds-assistive-text">Completed</span>
                                    </button>
                                    <div data-index="2" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li data-index="3" class="nds-progress__item nds-is-active" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="3" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">In Progress</span></button>
                                    <div class="nds-is-absolute">
                                       <div data-index="3" class="nds-m-top_medium nds-is-relative nds-progress__step-label nds-p-top_xx-small"></div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li class="nds-progress__item" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="4" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">Pristine</span></button>
                                    <div data-index="4" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                           </ol>
                           <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" role="progressbar" class="nds-progress-bar nds-progress-bar_x-small"><span class="nds-progress-bar__value" style="width: 75%;"><span class="nds-assistive-text">Progress: 75%</span></span></div>
                        </div>
                     </div>
                  </div>
               </slot>
            </vlocity_cmt-omniscript-step-chart>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step1"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step2"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step3"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step4">
               <h1 class="nds-page-header__title nds-align_absolute-center nds-text-align_center nds-medium-size_8-of-12 nds-p-vertical_large nds-step_label"></h1>
               <div class="nds-medium-size_8-of-12 nds-align_absolute-center">
                  <div class="nds-grid nds-wrap nds-col_padded nds-size_1-of-1">
                     <slot>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Declaration" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <p>Section 4 of 5</p>
                                          <h1><strong>Declaration</strong></h1>
                                          <p></p>
                                          <h3><strong>Consent</strong></h3>
                                          <p>I consent to the collection of my personal and/ or health information by WorkSafe Victoria (WorkSafe) for the purpose outlined in the ‘privacy and collection statement’ (Statement).</p>
                                          <p>I consent to the disclosure of my personal and/ or health information to organisations listed in the section of the Statement headed ‘myWorkSafe account holders’ for any of the purposes listed in that section.</p>
                                          <p>I declare to the best of my knowledge, the information provided in this application and supporting this application is true and correct.</p>
                                          <p>I declare that where I provide information to WorkSafe about another individual, </p>
                                          <p>I consent to the collection of my personal and/ or health information by WorkSafe Victoria (WorkSafe) for the purpose outlined in the ‘privacy and collection statement’ (Statement).</p>
                                          <p>I consent to the disclosure of my personal and/ or health information to organisations listed in the section of the Statement headed ‘myWorkSafe account holders’ for any of the purposes listed in that section.</p>
                                          <p>I declare to the best of my knowledge, the information provided in this application and supporting this application is true and correct.</p>
                                          <p>I declare that where I provide information to WorkSafe about another individual,&nbsp;</p>
                                          <h3><strong>Declaration</strong></h3>
                                          <p>I declare that I am authorised to access this account and act on behalf of the organisation/ partnership/ entity/ individual to which this account relates.</p>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-checkbox c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="DeclarationCheck" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-grid">
                                 <c-input data-omni-input="true" vlocity_cmt-input_input_nds-host="">
                                    <div vlocity_cmt-input_input_nds="" class="nds-form-element nds-form-container nds-relative-tooltip">
                                       <div vlocity_cmt-input_input_nds="" class="nds-form-element__control">
                                          <div vlocity_cmt-input_input_nds="" class="nds-checkbox"><input vlocity_cmt-input_input_nds="" type="checkbox" id="input9-114" value="" class="vlocity-input nds-input_mask"><label vlocity_cmt-input_input_nds="" for="input9-114" class="nds-checkbox__label"><span vlocity_cmt-input_input_nds="" class="nds-checkbox_faux"></span><span vlocity_cmt-input_input_nds="" class="nds-form-element__label nds-form-element__control-help nds-checkbox-span">I agree with the above consent and declaration.</span></label></div>
                                       </div>
                                       <div vlocity_cmt-input_input_nds="" class="nds-form-element__control"></div>
                                    </div>
                                 </c-input>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-checkbox>
                     </slot>
                  </div>
               </div>
            </vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step5"></vlocity_cmt-omniscript-step>
         </div>
         <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-m-around_small">
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
                  <vlocity_cmt-button c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="omniscript-btn-next nds-size_12-of-12 nds-m-bottom_xx-small nds-medium-size_3-of-12"><button type="button" class="vlocity-btn nds-button nds-button_brand nds-button_stretch nds-p-around_xx-small nds-size_1-of-1">Submit</button></vlocity_cmt-button>
               </div>
            </div>
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
                  <vlocity_cmt-button c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_xx-small nds-medium-size_3-of-12"><button type="button" class="vlocity-btn nds-button nds-button_neutral nds-button_stretch nds-p-around_xx-small nds-size_1-of-1">Previous</button></vlocity_cmt-button>
               </div>
            </div>
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
            </div>
         </div>
      </article>
   </div>
</c-wsv-u-x_-po-c_-draft-english>
    `);
  })
  .add('LWC OS WorkSpace S1-P5', () => {
    requestAnimationFrame(() => {
      const bpView = document.getElementById(`VlocityBPView`);
      bpView.addEventListener('change', event => {
        if (event.target.value) {
          event.target.classList.add('nds-has-value');
        } else {
          event.target.classList.remove('nds-has-value');
        }
      });
    });
    return withExample(`
    <c-wsv-u-x_-po-c_-draft-english data-aura-rendered-by="6:0" c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds-host="">
   <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="via-nds">
      <article c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-card nds-grid nds-theme_default nds-grid_vertical">
         <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-card__body nds-card__body_inner nds-m-top_medium">
            <vlocity_cmt-omniscript-step-chart c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="omniscriptStepChart">
               <slot>
                  <div class="nds-omniscript_stepform nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_8-of-12 nds-large-size_6-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large nds-m-bottom_x-large">
                     <div class="nds-size_1-of-1">
                        <div class="nds-progress">
                           <ol class="nds-progress__list">
                              <c-omniscript-step-chart-items>
                                 <li data-index="0" class="nds-progress__item nds-is-relative nds-is-completed">
                                    <button data-index="0" class="nds-button nds-button_icon nds-progress__marker nds-progress__marker_icon">
                                       <svg data-index="0" aria-hidden="true" class="nds-button__icon">
                                          <use data-index="0" xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomsldsiconsutilityspritesvgsymbolssvg_success"></use>
                                       </svg>
                                       <span class="nds-assistive-text">Completed</span>
                                    </button>
                                    <div data-index="0" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li data-index="1" class="nds-progress__item nds-is-relative nds-is-completed">
                                    <button data-index="1" class="nds-button nds-button_icon nds-progress__marker nds-progress__marker_icon">
                                       <svg data-index="1" aria-hidden="true" class="nds-button__icon">
                                          <use data-index="1" xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomsldsiconsutilityspritesvgsymbolssvg_success"></use>
                                       </svg>
                                       <span class="nds-assistive-text">Completed</span>
                                    </button>
                                    <div data-index="1" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li data-index="2" class="nds-progress__item nds-is-relative nds-is-completed">
                                    <button data-index="2" class="nds-button nds-button_icon nds-progress__marker nds-progress__marker_icon">
                                       <svg data-index="2" aria-hidden="true" class="nds-button__icon">
                                          <use data-index="2" xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomsldsiconsutilityspritesvgsymbolssvg_success"></use>
                                       </svg>
                                       <span class="nds-assistive-text">Completed</span>
                                    </button>
                                    <div data-index="2" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li data-index="3" class="nds-progress__item nds-is-relative nds-is-completed">
                                    <button data-index="3" class="nds-button nds-button_icon nds-progress__marker nds-progress__marker_icon">
                                       <svg data-index="3" aria-hidden="true" class="nds-button__icon">
                                          <use data-index="3" xlink:href="#httpsjavadata7880vlocitycmtvisualforcecomsldsiconsutilityspritesvgsymbolssvg_success"></use>
                                       </svg>
                                       <span class="nds-assistive-text">Completed</span>
                                    </button>
                                    <div data-index="3" class="nds-is-absolute">
                                       <div role="tooltip" class="nds-popover nds-popover_tooltip nds-nubbin_bottom">
                                          <div class="nds-popover__body"></div>
                                       </div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                              <c-omniscript-step-chart-items>
                                 <li data-index="4" class="nds-progress__item nds-is-active" style="cursor: default; padding-bottom: 4px;">
                                    <button data-index="4" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">In Progress</span></button>
                                    <div class="nds-is-absolute">
                                       <div data-index="4" class="nds-m-top_medium nds-is-relative nds-progress__step-label nds-p-top_xx-small"></div>
                                    </div>
                                 </li>
                              </c-omniscript-step-chart-items>
                           </ol>
                           <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" role="progressbar" class="nds-progress-bar nds-progress-bar_x-small"><span class="nds-progress-bar__value" style="width: 100%;"><span class="nds-assistive-text">Progress: 100%</span></span></div>
                        </div>
                     </div>
                  </div>
               </slot>
            </vlocity_cmt-omniscript-step-chart>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step1"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step2"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step3"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step4"></vlocity_cmt-omniscript-step>
            <vlocity_cmt-omniscript-step c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Step5">
               <h1 class="nds-page-header__title nds-align_absolute-center nds-text-align_center nds-medium-size_8-of-12 nds-p-vertical_large nds-step_label"></h1>
               <div class="nds-medium-size_8-of-12 nds-align_absolute-center">
                  <div class="nds-grid nds-wrap nds-col_padded nds-size_1-of-1">
                     <slot>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="HeadingDetails7" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <h1><strong>WorkSafe has recieved your application.</strong></h1>
                                          <p>You can track your application's status in your myWorkSafe account.</p>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                        <vlocity_cmt-omniscript-http-action c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="WorkSafeAccountBtn" class="nds-size_12-of-12 nds-medium-size_3-of-12">
                           <slot>
                              <div class="nds-is-relative nds-p-around_x-small nds-m-bottom_x-small">
                                 <c-button><button type="button" class="vlocity-btn nds-button nds-button_brand nds-button_stretch">Proceed to myWorkSafe</button></c-button>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-http-action>
                        <vlocity_cmt-omniscript-text-block c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="NextStepsText" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                           <slot>
                              <div class="nds-form-element nds-form-container nds-text-block">
                                 <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                    <span>
                                       <div>
                                          <p><strong>Next Steps</strong></p>
                                          <p>We have sent an invite to your business director <strong>Paul Smith</strong> at <strong><a href="mailto:paul.smith@workemail.com">paul.smith@workemail.com</a></strong> to set up a WorkSafe account for grace cafe.</p>
                                       </div>
                                    </span>
                                 </lightning-formatted-rich-text>
                              </div>
                           </slot>
                        </vlocity_cmt-omniscript-text-block>
                     </slot>
                  </div>
               </div>
            </vlocity_cmt-omniscript-step>
         </div>
         <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-m-around_small">
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
            </div>
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
            </div>
            <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center">
               <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
            </div>
         </div>
      </article>
   </div>
</c-wsv-u-x_-po-c_-draft-english>
    `);
  })
  .add('LWC OS WorkSpace Test Buttons', () => {
    requestAnimationFrame(() => {
      const bpView = document.getElementById(`VlocityBPView`);
      bpView.addEventListener('change', event => {
        if (event.target.value) {
          event.target.classList.add('nds-has-value');
        } else {
          event.target.classList.remove('nds-has-value');
        }
      });
    });
    return withExample(`
      <div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-m-around_small"><div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center"><div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"><vlocity_ins-button c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="omniscript-btn-next nds-size_12-of-12 nds-m-bottom_xx-small nds-medium-size_3-of-12"><button type="button" class="vlocity-btn nds-button nds-button_brand nds-button_stretch nds-p-around_xx-small nds-size_1-of-1">Next step</button></vlocity_ins-button></div></div><div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center"><div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"><vlocity_ins-button c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="omniscript-btn-previous nds-size_12-of-12 nds-m-bottom_xx-small nds-medium-size_3-of-12"><button type="button" class="vlocity-btn nds-button nds-button_neutral nds-button_stretch nds-p-around_xx-small nds-size_1-of-1">Previous step</button></vlocity_ins-button></div></div><div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center"><div c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div></div></div>
   `);
  })
  .add('LWC OS WorkSpace Test classes', () => {
    requestAnimationFrame(() => {
      const bpView = document.getElementById(`VlocityBPView`);
      bpView.addEventListener('change', event => {
        if (event.target.value) {
          event.target.classList.add('nds-has-value');
        } else {
          event.target.classList.remove('nds-has-value');
        }
      });
    });
    return withExample(`
      <c-wsv-test-english data-aura-rendered-by="6:0" c-wsvtestenglish_wsvtestenglish_nds-host="">
         <div c-wsvtestenglish_wsvtestenglish_nds="" class="via-nds">
         <article c-wsvtestenglish_wsvtestenglish_nds="" class="nds-card nds-grid nds-theme_default nds-grid_vertical">
         <div c-wsvtestenglish_wsvtestenglish_nds="" class="nds-card__body nds-card__body_inner nds-m-top_medium">
         <vlocity_ins-omniscript-step c-wsvtestenglish_wsvtestenglish_nds="" data-omni-key="Step-1">
         <h1 class="nds-page-header__title nds-align_absolute-center nds-text-align_center nds-medium-size_8-of-12 nds-p-vertical_large nds-step_label">Personal Details</h1>
         <div class="nds-medium-size_8-of-12 nds-align_absolute-center">
         <div class="nds-grid nds-wrap nds-col_padded nds-size_1-of-1">
         <slot>
         <vlocity_ins-omniscript-text-block c-wsvtestenglish_wsvtestenglish_nds="" data-omni-key="AccountDetails" class="nds-size_12-of-12 nds-medium-size_9-of-12">
         <slot>
         <div class="nds-form-element nds-form-container nds-text-block">
         <lightning-formatted-rich-text class="slds-rich-text-editor__output">
         <span>
         <div class="nds-color__text_gray-12">
            <h1 class="nds-text-heading_large account-details">Account details</h1>
            <div class="nds-text-body_small nds-color__text_gray-12 nds-p-vertical_large details-info-text">Please provide the persons details below.</div>
            <div class="nds-list_horizontal nds-wrap details-container">
               <div class="nds-item_label nds-text-color_weak nds-truncate details-label">First Name:</div>
               <div class="nds-item_detail nds-truncate details-value">Abhinav</div>
               <div class="nds-item_label nds-text-color_weak nds-truncate details-label">Lastname:</div>
               <div class="nds-item_detail nds-truncate details-value">Sachan</div>
               <div class="nds-item_label nds-text-color_weak nds-truncate details-label">Address:</div>
               <div class="nds-item_detail nds-truncate details-value">IND</div>
               <div class="nds-item_label nds-text-color_weak nds-truncate details-label">Work Location:</div>
               <div class="nds-item_detail nds-truncate details-value">IND</div>
            </div>
            <div>&nbsp;</div>
            <div class="nds-box details-container">
               <div class="nds-dl_inline nds-m-around_medium details">
                  <div class="nds-dl_inline__label details-label">First Name:</div>
                  <div class="nds-dl_inline__detail details-value">Abhinav</div>
               </div>
               <div class="nds-dl_inline nds-m-around_medium details">
                  <div class="nds-dl_inline__label details-label">Lastname:</div>
                  <div class="nds-dl_inline__detail details-value">Sachan</div>
               </div>
               <div class="nds-dl_inline nds-m-around_medium details">
                  <div class="nds-dl_inline__label details-label">Address:</div>
                  <div class="nds-dl_inline__detail details-value">IND</div>
               </div>
               <div class="nds-dl_inline nds-m-around_medium details">
                  <div class="nds-dl_inline__label details-label">Work Location:</div>
                  <div class="nds-dl_inline__detail details-value">IND</div>
               </div>
            </div>
            <div>&nbsp;</div>
            <div class="nds-color__text_gray-12 nds-p-vertical_large details-submit-text">Please save the above details.</div>
         </div>
         </span>
         </lightning-formatted-rich-text>
         </div></slot></vlocity_ins-omniscript-text-block></slot></div></div></vlocity_ins-omniscript-step></div><div c-wsvtestenglish_wsvtestenglish_nds="" class="nds-m-around_small"><div c-wsvtestenglish_wsvtestenglish_nds="" class="nds-grid nds-grid_align-center"><div c-wsvtestenglish_wsvtestenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div></div><div c-wsvtestenglish_wsvtestenglish_nds="" class="nds-grid nds-grid_align-center"><div c-wsvtestenglish_wsvtestenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div></div><div c-wsvtestenglish_wsvtestenglish_nds="" class="nds-grid nds-grid_align-center"><div c-wsvtestenglish_wsvtestenglish_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"><vlocity_ins-button c-wsvtestenglish_wsvtestenglish_nds="" class="omniscript-btn-save-for-later"><button type="button" class="vlocity-btn nds-button nds-button_base nds-button_stretch nds-p-around_xx-small nds-size_1-of-1">Save for later</button></vlocity_ins-button></div></div></div></article></div> 
      </c-wsv-test-english>
   `);
  })
  .add('LWC OS WorkSpace Test Messaging', () => {
    requestAnimationFrame(() => {
      const bpView = document.getElementById(`VlocityBPView`);
      bpView.addEventListener('change', event => {
        if (event.target.value) {
          event.target.classList.add('nds-has-value');
        } else {
          event.target.classList.remove('nds-has-value');
        }
      });
    });
    return withExample(`
      <h2>#1 Warning</h2>
      <br />
      <vlocity_ins-omniscript-messaging c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="SuccessMsg" class="nds-size_12-of-12 nds-medium-size_8-of-12"><div role="status" class="nds-is-relative nds-scoped-notification nds-scoped-notification_form"><div class="nds-form-element__control nds-form-element__control-animated-label nds-grid"><div msg="Warning" class="nds-faux-animate"><span title="Warning" class="nds-icon_container nds-icon_container_circle nds-m-right_small"><c-icon><svg aria-hidden="true" class="nds-icon nds-icon-text-warning nds-icon_small"><use xlink:href="#httpsworksafevicwsvvlocityvlocityinscs152visualforcecomresource1584139839000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_warning"></use></svg><span class="nds-assistive-text"></span></c-icon></span><span>ABN Look up is not matched</span></div><label class="nds-form-element__label" style="top: 0rem;"><span></span></label></div></div></vlocity_ins-omniscript-messaging>
      <br />
      <br />
      <h2>#2 Success</h2>
      <br />
      <vlocity_ins-omniscript-messaging c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="SuccessMsg" class="nds-size_12-of-12 nds-medium-size_8-of-12"><div role="status" class="nds-is-relative nds-scoped-notification nds-scoped-notification_form"><div class="nds-form-element__control nds-form-element__control-animated-label nds-grid"><div msg="Success" class="nds-faux-animate"><span title="Success" class="nds-icon_container nds-icon_container_circle nds-m-right_small"><c-icon><svg aria-hidden="true" class="nds-icon nds-icon_small nds-icon-text-success"><use xlink:href="#httpsworksafevicwsvvlocityvlocityinscs152visualforcecomresource1584139839000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use></svg><span class="nds-assistive-text"></span></c-icon></span><span>ABN Look up has been successfull</span></div><label class="nds-form-element__label" style="top: 0rem;"><span></span></label></div></div></vlocity_ins-omniscript-messaging>
      <br />
      <br />
      <h2>#3 Comment</h2>
      <br />
      <vlocity_ins-omniscript-messaging c-wsvux_poc_draftenglish_wsvux_poc_draftenglish_nds="" data-omni-key="Messaging3" class="nds-size_12-of-12 nds-medium-size_8-of-12"><div role="status" class="nds-is-relative nds-scoped-notification nds-scoped-notification_form"><div class="nds-form-element__control nds-form-element__control-animated-label nds-grid"><div msg="Comment" class="nds-faux-animate"><span title="Comment" class="nds-icon_container nds-icon_container_circle nds-m-right_small"><c-icon><svg aria-hidden="true" class="nds-icon nds-icon-text-default nds-icon_small"><use xlink:href="#httpsworksafevicwsvvlocityvlocityinscs152visualforcecomresource1584139839000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_chat"></use></svg><span class="nds-assistive-text"></span></c-icon></span><span>It is a requirement that your OH&amp;S certificate remains current and valid for the duration of your licence. Please be aware that if your certification expires you will no longer be able to operate under this licence. By providing your certification expiry date we will send you a reminder when an updated certificate is due.</span></div></div></div></vlocity_ins-omniscript-messaging>
   `);
  }).add('WSV - OS - Block with Step', ()=>{
     return withExample(`
     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-size_1-of-1 wsv-step-block" style="padding-left: 0px;">
         <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-p-left_small nds-p-right_small nds-block nds-clearfix">
            <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-form-element__control nds-block_container"
               style="display: block;"><label c-wsvomniblockwithstep_wsvomniblockwithstep="" role="button" tabindex="0"
               class="nds-form-element__label nds-clearfix nds-m-bottom_none">
               <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-grid nds-size_1-of-1"
                  style="position: relative;">
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-show_small">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     class="stepOvalActive stepOvalSize_default nds-text-heading_large" style="display: flex;"><span
                        c-wsvomniblockwithstep_wsvomniblockwithstep="" aria-label="Step 1;" class="nds-align_absolute-center"
                        style="color: black;"><strong c-wsvomniblockwithstep_wsvomniblockwithstep="">1</strong></span></div>
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     style="display: inline; align-items: stretch; min-width: 48px;">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="stepRectangleActive"></div>
                     </div>
                  </div>
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-hide_small">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-text-heading_large blockLabelTextClass"
                        style="line-height: 25%; width: 48px;"> &nbsp;</div>
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="stepOvalActiveSmall stepOvalSize_small"></div>
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-clearfix"
                        style="width: 4px; margin: auto;">
                        <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="stepRectangleActive"
                           style="position: absolute;"></div>
                     </div>
                     </div>
                  </div>
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     class="nds-form-element__label_toggle-text marginLeft marginVerticalHeader">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-text-heading_large blockLabelTextClass"
                     style="color: black;"><strong c-wsvomniblockwithstep_wsvomniblockwithstep="">Confirm your details</strong>
                     </div>
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-p-top_small nds-hide_small">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                        class="nds-pill pillsmall_wsv nds-align_absolute-center nds-m-left_none">
                        <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                           class="nds-pill__label nds-truncate nds-m-top_xxx-small"> Takes about 4 mins</div>
                     </div>
                     </div>
                  </div>
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     class="nds-pill nds-pill_wsv nds-align_absolute-center nds-show_small" style="max-width: 80%;">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     class="nds-pill__label nds-truncate nds-m-top_xxx-small"> Takes about 4 mins</div>
                  </div>
               </div>
               </label>
               <div c-wsvomniblockwithstep_wsvomniblockwithstep="" aria-hidden="false" aria-expanded="true"
               class="nds-grid nds-size_1-of-1 nds-block_body" style="padding: 0px;">
               <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                  style="display: flex; align-items: stretch; min-width: 48px;">
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="stepRectangleActive"></div>
               </div>
               <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-grid nds-size_11-of-12">
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-grid nds-wrap nds-grid_pull-padded marginLeft">
                     <slot c-wsvomniblockwithstep_wsvomniblockwithstep="">
                     <vlocity_ins-omniscript-text-block c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="DetailsIntro"
                        class="nds-size_12-of-12 nds-medium-size_8-of-12">
                        <slot>
                           <div class="nds-form-element nds-form-container nds-text-block">
                           <lightning-formatted-rich-text class="slds-rich-text-editor__output"><span>
                                 <div>
                                 <p>&nbsp;</p>
                                 <div tabindex="0">
                                    <p><span style="color: #000000;">We'll be using information from your WorkSafe Victoria
                                       profile to complete your submission. Please check the details below are still
                                       correct.</span></p>
                                    <p><span style="color: #000000;">If you need to update anything, you can do so through your
                                       WorkSafe profile.</span></p>
                                 </div>
                                 <p>&nbsp;</p>
                                 </div>
                              </span></lightning-formatted-rich-text>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-text-block>
                     <vlocity_ins-omniscript-text-block c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="UserDetails"
                        class="nds-size_12-of-12 nds-medium-size_8-of-12">
                        <slot>
                           <div class="nds-form-element nds-form-container nds-text-block">
                           <lightning-formatted-rich-text class="slds-rich-text-editor__output"><span>
                                 <div>
                                 <div class="nds-size--1-of-1">
                                    <div tabindex="0" style="border-radius: 12px; border: 4px solid #f2f2f2;"
                                       class="nds-box nds-grow">
                                       <p><span style="color: #000000;"><strong>Given name: </strong>Sarah</span></p>
                                       <p><span style="color: #000000;"><strong>Family name: </strong>Johnson</span></p>
                                       <p><span style="color: #000000;"><strong>Mobile: </strong>0478233334</span></p>
                                       <p><span style="color: #000000;"><strong>Email: </strong><a
                                             href="mailto:sarah.johnson@gmail.com">sarah.johnson@gmail.com</a></span></p>
                                    </div>
                                 </div>
                                 </div>
                              </span></lightning-formatted-rich-text>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-text-block>
                     <vlocity_ins-omniscript-line-break c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="LineBreak1"
                        class="nds-size_1-of-1">
                        <slot>
                           <div class="nds-size_1-of-1 nds-line_break" style="padding-bottom: 25px;"></div>
                        </slot>
                     </vlocity_ins-omniscript-line-break>
                     <vlocity_ins-omniscript-set-values c-wsvpocos2english_wsvpocos2english_nds=""
                        data-omni-key="ConfirmButton" class="nds-size_12-of-12 nds-medium-size_2-of-12">
                        <slot>
                           <div class="nds-is-relative nds-p-around_x-small nds-m-bottom_x-small">
                           <c-button><button type="button"
                                 class="vlocity-btn nds-button nds-button_brand nds-button_stretch">Confirm</button></c-button>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-set-values>
                     <c-wsv-omniscript-set-values c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="EditButton"
                        class="nds-size_12-of-12 nds-medium-size_2-of-12">
                        <slot>
                           <div class="nds-is-relative nds-p-around_x-small nds-m-bottom_x-small">
                           <vlocity_ins-button><button type="button"
                                 class="vlocity-btn nds-button nds-button_neutral nds-button_stretch">Edit</button>
                           </vlocity_ins-button>
                           </div>
                        </slot>
                     </c-wsv-omniscript-set-values>
                     <vlocity_ins-omniscript-line-break c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="LineBreak2"
                        class="nds-size_1-of-1">
                        <slot>
                           <div class="nds-size_1-of-1 nds-line_break" style="padding-bottom: 30px;"></div>
                        </slot>
                     </vlocity_ins-omniscript-line-break>
                     </slot>
                  </div>
               </div>
               </div>
            </div>
         </div>
      </div>    
      <!-- 2nd step -->
      <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-size_1-of-1 wsv-step-block" style="padding-left: 0px;">
         <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-p-left_small nds-p-right_small nds-block nds-clearfix">
            <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-form-element__control nds-block_container"
               style="display: block;"><label c-wsvomniblockwithstep_wsvomniblockwithstep="" role="button" tabindex="0"
               class="nds-form-element__label nds-clearfix nds-m-bottom_none">
               <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-grid nds-size_1-of-1"
                  style="position: relative;">
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-show_small">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     class="stepOvalInactive stepOvalSize_default nds-text-heading_large" style="display: flex;"><span
                        c-wsvomniblockwithstep_wsvomniblockwithstep="" aria-label="Step 2;" class="nds-align_absolute-center"
                        style="color: black;"><strong c-wsvomniblockwithstep_wsvomniblockwithstep="">2</strong></span></div>
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     style="display: inline; align-items: stretch; min-width: 48px;">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="stepRectangleInactive"></div>
                     </div>
                  </div>
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-hide_small">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-text-heading_large blockLabelTextClass"
                        style="line-height: 25%; width: 48px;"> &nbsp;</div>
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="stepOvalInactiveSmall stepOvalSize_small">
                     </div>
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-clearfix"
                        style="width: 4px; margin: auto;">
                        <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="stepRectangleInactive"
                           style="position: absolute;"></div>
                     </div>
                     </div>
                  </div>
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     class="nds-form-element__label_toggle-text marginLeft marginVerticalHeader">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-text-heading_large blockLabelTextClass"
                     style="color: black;"><strong c-wsvomniblockwithstep_wsvomniblockwithstep="">Application form</strong>
                     </div>
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-p-top_small nds-hide_small">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                        class="nds-pill pillsmall_wsv nds-align_absolute-center nds-m-left_none">
                        <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                           class="nds-pill__label nds-truncate nds-m-top_xxx-small"> Takes about 10 mins</div>
                     </div>
                     </div>
                  </div>
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     class="nds-pill nds-pill_wsv nds-align_absolute-center nds-show_small" style="max-width: 80%;">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     class="nds-pill__label nds-truncate nds-m-top_xxx-small"> Takes about 10 mins</div>
                  </div>
               </div>
               </label>
               <div c-wsvomniblockwithstep_wsvomniblockwithstep="" aria-hidden="false" aria-expanded="true"
               class="nds-grid nds-size_1-of-1 nds-block_body" style="padding: 0px;">
               <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                  style="display: flex; align-items: stretch; min-width: 48px;">
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="stepRectangleInactive"></div>
               </div>
               <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-grid nds-size_11-of-12">
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-grid nds-wrap nds-grid_pull-padded marginLeft">
                     <slot c-wsvomniblockwithstep_wsvomniblockwithstep="">
                     <vlocity_ins-omniscript-text-block c-wsvpocos2english_wsvpocos2english_nds=""
                        data-omni-key="ApplicationIntro" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                        <slot>
                           <div class="nds-form-element nds-form-container nds-text-block">
                           <lightning-formatted-rich-text class="slds-rich-text-editor__output"><span>
                                 <div>
                                 <p><span style="color: #000000;">&nbsp;</span></p>
                                 <div tabindex="0">
                                    <p><span style="color: #000000;">Complete and submit the following form, providing all
                                       required information and supporting documentation.</span></p>
                                 </div>
                                 <p>&nbsp;</p>
                                 </div>
                              </span></lightning-formatted-rich-text>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-text-block>
                     <vlocity_ins-omniscript-text-block c-wsvpocos2english_wsvpocos2english_nds=""
                        data-omni-key="WhatYouWillNeed" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                        <slot>
                           <div class="nds-form-element nds-form-container nds-text-block">
                           <lightning-formatted-rich-text class="slds-rich-text-editor__output"><span>
                                 <div>
                                 <p><span tabindex="0" style="color: #000000;">What you'll need:</span></p>
                                 <p>&nbsp;</p>
                                 <ul tabindex="0" style="color: #000000;">
                                    <li><span style="color: #000000;">ABN / ACN and a company extract</span></li>
                                    <li><span style="color: #000000;">Trust deed (only if you are applying for a trust)</span>
                                    </li>
                                    <li><span style="color: #000000;">OH&amp;S certificate (only if you require a Class A
                                       license)</span></li>
                                    <li><span style="color: #000000;">Site supervisor experience and training for the class type
                                       you require</span></li>
                                 </ul>
                                 <p><span tabindex="0" style="color: #000000;">All fields are mandatory unless marked as
                                       optional.</span></p>
                                 </div>
                              </span></lightning-formatted-rich-text>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-text-block>
                     <vlocity_ins-omniscript-line-break c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="LineBreak3"
                        class="nds-size_1-of-1">
                        <slot>
                           <div class="nds-size_1-of-1 nds-line_break" style="padding-bottom: 15px;"></div>
                        </slot>
                     </vlocity_ins-omniscript-line-break>
                     <c-wsv-omniscript-set-values c-wsvpocos2english_wsvpocos2english_nds=""
                        data-omni-key="StartFormButtonInactive" class="nds-size_12-of-12 nds-medium-size_2-of-12">
                        <slot>
                           <div class="nds-is-relative nds-p-around_x-small nds-m-bottom_x-small">
                           <vlocity_ins-button><button type="button" disabled=""
                                 class="vlocity-btn nds-button nds-button_neutral nds-button_stretch">Start form</button>
                           </vlocity_ins-button>
                           </div>
                        </slot>
                     </c-wsv-omniscript-set-values>
                     <vlocity_ins-omniscript-set-values c-wsvpocos2english_wsvpocos2english_nds=""
                        data-omni-key="StartFormButtonActive" class="nds-size_12-of-12 nds-medium-size_2-of-12 nds-hide">
                        <slot>
                           <div class="nds-is-relative nds-p-around_x-small nds-m-bottom_x-small">
                           <c-button><button type="button"
                                 class="vlocity-btn nds-button nds-button_brand nds-button_stretch">Start form</button>
                           </c-button>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-set-values>
                     <vlocity_ins-omniscript-line-break c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="LineBreak4"
                        class="nds-size_1-of-1">
                        <slot>
                           <div class="nds-size_1-of-1 nds-line_break" style="padding-bottom: 30px;"></div>
                        </slot>
                     </vlocity_ins-omniscript-line-break>
                     </slot>
                  </div>
               </div>
               </div>
            </div>
         </div>
      </div>
      <!-- 3rd step -->
      <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-size_1-of-1 wsv-step-block" style="padding-left: 0px;">
         <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-p-left_small nds-p-right_small nds-block nds-clearfix">
            <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-form-element__control nds-block_container"
               style="display: block;"><label c-wsvomniblockwithstep_wsvomniblockwithstep="" role="button" tabindex="0"
               class="nds-form-element__label nds-clearfix nds-m-bottom_none">
               <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-grid nds-size_1-of-1"
                  style="position: relative;">
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-show_small">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     class="stepOvalSize_default nds-text-heading_large stepOvalActive" style="display: flex;"><span
                        c-wsvomniblockwithstep_wsvomniblockwithstep="" aria-label="Step 3;" class="nds-align_absolute-center"
                        style="color: black;"><strong c-wsvomniblockwithstep_wsvomniblockwithstep="">3</strong></span></div>
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     style="display: inline; align-items: stretch; min-width: 48px;"></div>
                  </div>
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-hide_small">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-text-heading_large blockLabelTextClass"
                        style="line-height: 25%; width: 48px;"> &nbsp;</div>
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="stepOvalSize_small stepOvalActiveSmall"></div>
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-clearfix"
                        style="width: 4px; margin: auto;"></div>
                     </div>
                  </div>
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     class="nds-form-element__label_toggle-text marginLeft marginVerticalHeader">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-text-heading_large blockLabelTextClass"
                     style="color: black;"><strong c-wsvomniblockwithstep_wsvomniblockwithstep="">Pay and submit</strong></div>
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-p-top_small nds-hide_small">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                        class="nds-pill pillsmall_wsv nds-align_absolute-center nds-m-left_none">
                        <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                           class="nds-pill__label nds-truncate nds-m-top_xxx-small"> Takes about 6 mins</div>
                     </div>
                     </div>
                  </div>
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     class="nds-pill nds-pill_wsv nds-align_absolute-center nds-show_small" style="max-width: 80%;">
                     <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                     class="nds-pill__label nds-truncate nds-m-top_xxx-small"> Takes about 6 mins</div>
                  </div>
               </div>
               </label>
               <div c-wsvomniblockwithstep_wsvomniblockwithstep="" aria-hidden="false" aria-expanded="true"
               class="nds-grid nds-size_1-of-1 nds-block_body" style="padding: 0px;">
               <div c-wsvomniblockwithstep_wsvomniblockwithstep=""
                  style="display: flex; align-items: stretch; min-width: 48px;"></div>
               <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-grid nds-size_11-of-12">
                  <div c-wsvomniblockwithstep_wsvomniblockwithstep="" class="nds-grid nds-wrap nds-grid_pull-padded marginLeft">
                     <slot c-wsvomniblockwithstep_wsvomniblockwithstep="">
                     <vlocity_ins-omniscript-text-block c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="PayIntro"
                        class="nds-size_12-of-12 nds-medium-size_9-of-12">
                        <slot>
                           <div class="nds-form-element nds-form-container nds-text-block">
                           <lightning-formatted-rich-text class="slds-rich-text-editor__output"><span>
                                 <div>
                                 <p>&nbsp;</p>
                                 <p><span tabindex="0" style="color: #000000;">You are required to pay a fee when you submit an
                                       application for a new license or license renewal. The fees are listed below.</span></p>
                                 <p></p>
                                 </div>
                              </span></lightning-formatted-rich-text>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-text-block>
                     <vlocity_ins-omniscript-line-break c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="LineBreak10"
                        class="nds-size_1-of-1">
                        <slot>
                           <div class="nds-size_1-of-1 nds-line_break" style="padding-bottom: 15px;"></div>
                        </slot>
                     </vlocity_ins-omniscript-line-break>
                     <vlocity_ins-omniscript-text-block c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="FeeSummary"
                        class="nds-size_12-of-12 nds-medium-size_12-of-12">
                        <slot>
                           <div class="nds-form-element nds-form-container nds-text-block">
                           <lightning-formatted-rich-text class="slds-rich-text-editor__output"><span>
                                 <div>
                                 <div class="nds-text-body_regular"><span tabindex="0" style="color: #000000;"><strong>Fee
                                       summary</strong></span></div>
                                 <p>&nbsp;</p>
                                 </div>
                              </span></lightning-formatted-rich-text>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-text-block>
                     <vlocity_ins-omniscript-text-block c-wsvpocos2english_wsvpocos2english_nds=""
                        data-omni-key="TextBlockLicenseFeeA" class="nds-size_12-of-12 nds-medium-size_3-of-12">
                        <slot>
                           <div class="nds-form-element nds-form-container nds-text-block">
                           <lightning-formatted-rich-text class="slds-rich-text-editor__output"><span>
                                 <div>
                                 <div style="float: left;" class="nds-grid nds-p-right_large">
                                    <div tabindex="0"
                                       class="nds-border_top nds-p-top_medium nds-text-heading_large nds-border_top_wsvColor">
                                       <h3>$893.00</h3>
                                       <p><span style="color: #000000;">Fee for a class A license</span></p>
                                    </div>
                                 </div>
                                 </div>
                              </span></lightning-formatted-rich-text>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-text-block>
                     <vlocity_ins-omniscript-text-block c-wsvpocos2english_wsvpocos2english_nds=""
                        data-omni-key="TextBlockLicenseFeeB" class="nds-size_12-of-12 nds-medium-size_3-of-12">
                        <slot>
                           <div class="nds-form-element nds-form-container nds-text-block">
                           <lightning-formatted-rich-text class="slds-rich-text-editor__output"><span>
                                 <div>
                                 <div style="float: left;" class="nds-grid nds-p-right_large">
                                    <div tabindex="0"
                                       class="nds-border_top nds-p-top_medium nds-text-heading_large nds-border_top_wsvColor">
                                       <h3>$777.50</h3>
                                       <p><span style="color: #000000;">Fee for a class B license</span></p>
                                    </div>
                                 </div>
                                 <p></p>
                                 </div>
                              </span></lightning-formatted-rich-text>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-text-block>
                     <vlocity_ins-omniscript-text-block c-wsvpocos2english_wsvpocos2english_nds=""
                        data-omni-key="TextBlockLicenseTerm" class="nds-size_12-of-12 nds-medium-size_3-of-12">
                        <slot>
                           <div class="nds-form-element nds-form-container nds-text-block">
                           <lightning-formatted-rich-text class="slds-rich-text-editor__output"><span>
                                 <div>
                                 <div style="float: left;" class="nds-grid nds-p-right_large">
                                    <div tabindex="0"
                                       class="nds-border_top nds-p-top_medium nds-text-heading_large nds-border_top_wsvColor">
                                       <h3>5 years</h3>
                                       <p><span style="color: #000000;">this license is valid for 5 years</span></p>
                                    </div>
                                 </div>
                                 </div>
                              </span></lightning-formatted-rich-text>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-text-block>
                     <vlocity_ins-omniscript-line-break c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="LineBreak5"
                        class="nds-size_1-of-1">
                        <slot>
                           <div class="nds-size_1-of-1 nds-line_break" style="padding-bottom: 20px;"></div>
                        </slot>
                     </vlocity_ins-omniscript-line-break>
                     <c-wsv-omniscript-set-values c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="PayButtonInactive"
                        class="nds-size_12-of-12 nds-medium-size_4-of-12 nds-hide">
                        <slot>
                           <div class="nds-is-relative nds-p-around_x-small nds-m-bottom_x-small">
                           <vlocity_ins-button><button type="button" disabled=""
                                 class="vlocity-btn nds-button nds-button_neutral nds-button_stretch">Pay and submit
                                 application</button></vlocity_ins-button>
                           </div>
                        </slot>
                     </c-wsv-omniscript-set-values>
                     <vlocity_ins-omniscript-set-values c-wsvpocos2english_wsvpocos2english_nds=""
                        data-omni-key="PayButtonActive" class="nds-size_12-of-12 nds-medium-size_4-of-12">
                        <slot>
                           <div class="nds-is-relative nds-p-around_x-small nds-m-bottom_x-small">
                           <c-button><button type="button"
                                 class="vlocity-btn nds-button nds-button_brand nds-button_stretch">Pay and submit
                                 application</button></c-button>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-set-values>
                     <vlocity_ins-omniscript-text-block c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="Note"
                        class="nds-size_12-of-12 nds-medium-size_12-of-12">
                        <slot>
                           <div class="nds-form-element nds-form-container nds-text-block">
                           <lightning-formatted-rich-text class="slds-rich-text-editor__output"><span>
                                 <div>
                                 <p><span tabindex="0" style="color: #999999;" class="nds-text-body_small">Note: you'll be
                                       temporarily redirected to the Service Victoria website to pay online.</span></p>
                                 </div>
                              </span></lightning-formatted-rich-text>
                           </div>
                        </slot>
                     </vlocity_ins-omniscript-text-block>
                     <vlocity_ins-omniscript-line-break c-wsvpocos2english_wsvpocos2english_nds="" data-omni-key="LineBreak6"
                        class="nds-size_1-of-1">
                        <slot>
                           <div class="nds-size_1-of-1 nds-line_break" style="padding-bottom: 30px;"></div>
                        </slot>
                     </vlocity_ins-omniscript-line-break>
                     </slot>
                  </div>
               </div>
               </div>
            </div>
         </div>
         </div>
     `);
  }).add('WSV - Step Chart - Progress', () => {
   return withExample(`
   <div c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
   class="nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_1-of-1 nds-large-size_9-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large">
   <div c-wsvomniscriptstepchart_wsvomniscriptstepchart="" class="nds-size_1-of-1">
     <div c-wsvomniscriptstepchart_wsvomniscriptstepchart="" class="nds-path">
       <ol c-wsvomniscriptstepchart_wsvomniscriptstepchart="" class="nds-path__nav wsv-nds-path__nav">
         <c-wsv-omniscript-step-chart-items c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
           class="wsv-steps-container" c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems-host="">
           <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="0"
             class="step wsv-nds-is-active wsv-nds-is-current step-first">
             <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="0" class="wsv-truncate"><span
                 c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="0"
                 class="wsv-number-circle">1</span><span c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems=""
                 data-index="0" class="wsv-step-text" style="border-radius: 0.25rem 0rem 0rem 0.25rem;">Business
                 details</span></div>
           </div>
         </c-wsv-omniscript-step-chart-items>
         <c-wsv-omniscript-step-chart-items c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
           class="wsv-steps-container" c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems-host="">
           <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="1" class="step">
             <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="1" class="wsv-truncate"><span
                 c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="1"
                 class="wsv-number-circle">2</span><span c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems=""
                 data-index="1" class="wsv-step-text" style="border-radius: 0.25rem 0rem 0rem 0.25rem;">Responsible
                 Persons</span></div>
           </div>
         </c-wsv-omniscript-step-chart-items>
         <c-wsv-omniscript-step-chart-items c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
           class="wsv-steps-container" c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems-host="">
           <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="2" class="step">
             <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="2" class="wsv-truncate"><span
                 c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="2"
                 class="wsv-number-circle">3</span><span c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems=""
                 data-index="2" class="wsv-step-text" style="border-radius: 0.25rem 0rem 0rem 0.25rem;">Licence
                 type</span></div>
           </div>
         </c-wsv-omniscript-step-chart-items>
         <c-wsv-omniscript-step-chart-items c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
           class="wsv-steps-container" c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems-host="">
           <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="3" class="step step-last">
             <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="3" class="wsv-truncate"><span
                 c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="3"
                 class="wsv-number-circle">4</span><span c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems=""
                 data-index="3" class="wsv-step-text"
                 style="border-radius: 0.25rem 0rem 0rem 0.25rem;">Declaration</span></div>
           </div>
         </c-wsv-omniscript-step-chart-items>
       </ol>
     </div>
   </div><br c-wsvomniscriptstepchart_wsvomniscriptstepchart="">
 </div>
   `);
 }).add('WSV - Step Chart - Progress: Completed', () => {
   return withExample(`
   <div c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
   class="nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_1-of-1 nds-large-size_9-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large">
   <div c-wsvomniscriptstepchart_wsvomniscriptstepchart="" class="nds-size_1-of-1">
     <div c-wsvomniscriptstepchart_wsvomniscriptstepchart="" class="nds-path">
       <ol c-wsvomniscriptstepchart_wsvomniscriptstepchart="" class="nds-path__nav wsv-nds-path__nav">
         <c-wsv-omniscript-step-chart-items c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
           class="wsv-steps-container" c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems-host="">
           <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="0"
             class="step wsv-nds-is-completed step-first">
             <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="0" class="wsv-truncate"><span
                 c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="0"
                 class="wsv-number-circle"><svg c-wsvOmniscriptStepChartItems_wsvOmniscriptStepChartItems=""
                   data-index="0" aria-hidden="true" class="nds-button__icon slds-current-color wsv-svg-icon">
                   <use c-wsvOmniscriptStepChartItems_wsvOmniscriptStepChartItems="" data-index="0"
                     xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                 </svg></span><span c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="0"
                 class="wsv-step-text" style="border-radius: 0.25rem 0rem 0rem 0.25rem;">Business details</span></div>
           </div>
         </c-wsv-omniscript-step-chart-items>
         <c-wsv-omniscript-step-chart-items c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
           class="wsv-steps-container" c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems-host="">
           <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="1"
             class="step wsv-nds-is-active wsv-nds-is-current">
             <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="1" class="wsv-truncate"><span
                 c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="1"
                 class="wsv-number-circle">2</span><span c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems=""
                 data-index="1" class="wsv-step-text" style="border-radius: 0.25rem 0rem 0rem 0.25rem;">Responsible
                 Persons</span></div>
           </div>
         </c-wsv-omniscript-step-chart-items>
         <c-wsv-omniscript-step-chart-items c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
           class="wsv-steps-container" c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems-host="">
           <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="2" class="step">
             <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="2" class="wsv-truncate"><span
                 c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="2"
                 class="wsv-number-circle">3</span><span c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems=""
                 data-index="2" class="wsv-step-text" style="border-radius: 0.25rem 0rem 0rem 0.25rem;">Licence
                 type</span></div>
           </div>
         </c-wsv-omniscript-step-chart-items>
         <c-wsv-omniscript-step-chart-items c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
           class="wsv-steps-container" c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems-host="">
           <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="3" class="step step-last">
             <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="3" class="wsv-truncate"><span
                 c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="3"
                 class="wsv-number-circle">4</span><span c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems=""
                 data-index="3" class="wsv-step-text"
                 style="border-radius: 0.25rem 0rem 0rem 0.25rem;">Declaration</span></div>
           </div>
         </c-wsv-omniscript-step-chart-items>
       </ol>
     </div>
   </div><br c-wsvomniscriptstepchart_wsvomniscriptstepchart="">
 </div>
   `);
 }).add('WSV - Step Chart - Print/Save and Resume', () => {
   return withExample(`
   <div style="height:250px;">
     <div c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
     class="nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_1-of-1 nds-large-size_9-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large">
     <div c-wsvomniscriptstepchart_wsvomniscriptstepchart="" class="nds-size_1-of-1">
       <div c-wsvomniscriptstepchart_wsvomniscriptstepchart="" class="nds-path">
         <ol c-wsvomniscriptstepchart_wsvomniscriptstepchart="" class="nds-path__nav wsv-nds-path__nav">
           <c-wsv-omniscript-step-chart-items c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
             class="wsv-steps-container" c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems-host="">
             <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="0"
               class="step wsv-nds-is-completed step-first">
               <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="0" class="wsv-truncate"><span
                   c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="0"
                   class="wsv-number-circle"><svg c-wsvOmniscriptStepChartItems_wsvOmniscriptStepChartItems=""
                     data-index="0" aria-hidden="true" class="nds-button__icon slds-current-color wsv-svg-icon">
                     <use c-wsvOmniscriptStepChartItems_wsvOmniscriptStepChartItems="" data-index="0"
                       xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                   </svg></span><span c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="0"
                   class="wsv-step-text" style="border-radius: 0.25rem 0rem 0rem 0.25rem;">Business details</span></div>
             </div>
           </c-wsv-omniscript-step-chart-items>
           <c-wsv-omniscript-step-chart-items c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
             class="wsv-steps-container" c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems-host="">
             <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="1"
               class="step wsv-nds-is-active wsv-nds-is-current">
               <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="1" class="wsv-truncate"><span
                   c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="1"
                   class="wsv-number-circle">2</span><span c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems=""
                   data-index="1" class="wsv-step-text" style="border-radius: 0.25rem 0rem 0rem 0.25rem;">Responsible
                   Persons</span></div>
             </div>
           </c-wsv-omniscript-step-chart-items>
           <c-wsv-omniscript-step-chart-items c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
             class="wsv-steps-container" c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems-host="">
             <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="2" class="step">
               <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="2" class="wsv-truncate"><span
                   c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="2"
                   class="wsv-number-circle">3</span><span c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems=""
                   data-index="2" class="wsv-step-text" style="border-radius: 0.25rem 0rem 0rem 0.25rem;">Licence
                   type</span></div>
             </div>
           </c-wsv-omniscript-step-chart-items>
           <c-wsv-omniscript-step-chart-items c-wsvomniscriptstepchart_wsvomniscriptstepchart=""
             class="wsv-steps-container" c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems-host="">
             <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="3" class="step step-last">
               <div c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="3" class="wsv-truncate"><span
                   c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems="" data-index="3"
                   class="wsv-number-circle">4</span><span c-wsvomniscriptstepchartitems_wsvomniscriptstepchartitems=""
                   data-index="3" class="wsv-step-text"
                   style="border-radius: 0.25rem 0rem 0rem 0.25rem;">Declaration</span></div>
             </div>
           </c-wsv-omniscript-step-chart-items>
         </ol>
       </div>
     </div><br c-wsvomniscriptstepchart_wsvomniscriptstepchart="">
   </div>
   <div c-wsvomniscriptstepchart_wsvomniscriptstepchart="" style="position:relative;"
   class="nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_1-of-1 nds-large-size_9-of-12 nds-align_absolute-center wsv-grid nds-m-top_x-large nds-grid_align-center">
   <div c-wsvomniscriptstepchart_wsvomniscriptstepchart="" class="nds-wrap wsv-stepchart-btn-container"  style="left: 850px;"><button
       c-wsvomniscriptstepchart_wsvomniscriptstepchart="" type="button"
       class="vlocity-btn nds-button nds-size_1-of-1 nds-button_neutral wsv-btn-stepchart wsv-btn-print">Print</button><button
       c-wsvomniscriptstepchart_wsvomniscriptstepchart="" type="button"
       class="vlocity-btn nds-button nds-size_1-of-1 nds-button_neutral wsv-btn-stepchart wsv-btn-save">Save &amp; resume
       later</button></div>
   </div>
 </div>
   `);
 });