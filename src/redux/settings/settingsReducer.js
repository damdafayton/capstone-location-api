const TOGGLE_TABS = 'settings/toggle_tabs';

export const toggleTabs = () => ({ type: TOGGLE_TABS });

export default function settingsSlider(state = { tabs: 0 }, action) {
  switch (action.type) {
    case TOGGLE_TABS:
      return { ...state, tabs: state.tabs === 0 ? 1 : 0 };
    default:
      return state;
  }
}
