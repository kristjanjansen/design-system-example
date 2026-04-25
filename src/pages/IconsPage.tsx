import {
  IconCheckXs,
  IconChevronDownXs,
  IconEyeHideSm,
  IconEyeSm,
  IconIndeterminateXs,
  IconMoonSm,
  IconRadioXs,
  IconSunSm,
} from "@kristjanjansen/design-system";

export function IconsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-6 items-center">
        <span className="w-4 h-4"><IconCheckXs /></span>
        <span className="w-4 h-4"><IconChevronDownXs /></span>
        <span className="w-4 h-4"><IconRadioXs /></span>
        <span className="w-4 h-4"><IconIndeterminateXs /></span>
      </div>
      <div className="flex gap-6 items-center">
        <span className="w-6 h-6"><IconEyeSm /></span>
        <span className="w-6 h-6"><IconEyeHideSm /></span>
        <span className="w-6 h-6"><IconSunSm /></span>
        <span className="w-6 h-6"><IconMoonSm /></span>
      </div>
    </div>
  );
}
