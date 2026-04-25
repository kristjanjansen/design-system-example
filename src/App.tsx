import { useState, useEffect } from "react";
import { AllComponents } from "./pages/AllComponents";
import { AccordionPage } from "./pages/AccordionPage";
import { ButtonPage } from "./pages/ButtonPage";
import { CheckboxPage } from "./pages/CheckboxPage";
import { InputPage } from "./pages/InputPage";
import { InputNumberPage } from "./pages/InputNumberPage";
import { InputPasswordPage } from "./pages/InputPasswordPage";
import { RadioPage } from "./pages/RadioPage";
import { SelectPage } from "./pages/SelectPage";
import { SwitchPage } from "./pages/SwitchPage";
import { TextareaPage } from "./pages/TextareaPage";
import { TypographyPage } from "./pages/TypographyPage";
import { IconsPage } from "./pages/IconsPage";

document.documentElement.dataset.theme = "brand1-light";

const routes: Record<string, { label: string; component: () => React.JSX.Element }> = {
  "": { label: "Design System", component: AllComponents },
  accordion: { label: "Accordion", component: AccordionPage },
  button: { label: "Button", component: ButtonPage },
  checkbox: { label: "Checkbox", component: CheckboxPage },
  input: { label: "Input", component: InputPage },
  "input-number": { label: "InputNumber", component: InputNumberPage },
  "input-password": { label: "InputPassword", component: InputPasswordPage },
  radio: { label: "Radio", component: RadioPage },
  select: { label: "Select", component: SelectPage },
  switch: { label: "Switch", component: SwitchPage },
  textarea: { label: "Textarea", component: TextareaPage },
  typography: { label: "Typography", component: TypographyPage },
  icons: { label: "Icons", component: IconsPage },
};

function getHash() {
  return window.location.hash.replace(/^#\/?/, "");
}

export function App() {
  const [hash, setHash] = useState(getHash);
  const themes = ["brand1-light", "brand1-dark", "brand2-light", "brand2-dark"] as const;
  const labels = ["Brand1 Light", "Brand1 Dark", "Brand2 Light", "Brand2 Dark"] as const;
  const [themeIndex, setThemeIndex] = useState(0);

  const theme = themes[themeIndex];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    function onHashChange() {
      setHash(getHash());
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const route = routes[hash] ?? routes[""];
  const Page = route.component;

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--ds-color-page)",
        color: "var(--ds-color-fg)",
        fontFamily: "var(--ds-font-family)",
        fontStretch: "var(--ds-font-stretch)",
      }}
    >
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-52 shrink-0 px-8 pt-16 sticky top-0 h-screen overflow-y-auto">
          <nav className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 pl-3 mb-6">
              {themes.map((t, i) => (
                <a
                  key={t}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setThemeIndex(i); }}
                  className={`hover:underline underline-offset-4 ${
                    themeIndex === i ? "font-semibold" : "opacity-50 hover:opacity-80"
                  }`}
                  style={{ color: "var(--ds-color-fg)" }}
                >
                  {labels[i]}
                </a>
              ))}
            </div>
            {Object.entries(routes).map(([key, { label }]) => (
              <a
                key={key}
                href={`#${key}`}
                className={`block pl-3 hover:underline underline-offset-4 ${
                  hash === key ? "font-semibold" : "opacity-60 hover:opacity-90"
                }`}
                style={{ color: "var(--ds-color-fg)" }}
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 max-w-2xl mx-auto px-12 pt-16 pb-24">
          <Page />
        </main>
      </div>

    </div>
  );
}
