import settingsReducer, { toggleTabs } from "../settings/settingsReducer";

test('toggle button for country view', () => {
  expect(settingsReducer(undefined, toggleTabs())).toEqual({ tabs: 1 })
})