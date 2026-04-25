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

const themes = ["brand1-light", "brand1-dark", "brand2-light", "brand2-dark"] as const;
document.documentElement.dataset.theme = "brand1-light";

const routes: Record<string, { label: string; component: () => React.JSX.Element }> = {
  "": { label: "All", component: AllComponents },
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
  const [theme, setTheme] = useState("brand1-light");

  useEffect(() => {
    function onHashChange() {
      setHash(getHash());
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function switchTheme(t: string) {
    setTheme(t);
    document.documentElement.dataset.theme = t;
  }

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
      {/* Theme switcher */}
      <nav className="fixed top-0 right-0 p-3 z-50 text-sm">
        <div className="flex gap-4 theme-links">
          {themes.map((t) => (
            <a
              key={t}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                switchTheme(t);
              }}
              className={
                theme === t
                  ? "underline"
                  : "no-underline opacity-50 hover:opacity-80"
              }
              style={{ color: theme === t ? "var(--ds-color-fg)" : "var(--ds-color-muted)" }}
            >
              {t}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="theme-cycle"
          onClick={(e) => {
            e.preventDefault();
            const i = themes.indexOf(theme as (typeof themes)[number]);
            switchTheme(themes[(i + 1) % themes.length]);
          }}
          style={{ color: "var(--ds-color-muted)", fontSize: 18 }}
          title={theme}
        >
          ◐
        </a>
        <style>{`
          .theme-cycle { display: none; }
          @media (max-width: 768px) {
            .theme-links { display: none !important; }
            .theme-cycle { display: block !important; }
          }
        `}</style>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-52 shrink-0 px-8 pt-16 sticky top-0 h-screen overflow-y-auto">
          <nav className="flex flex-col gap-2">
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
        <main className="flex-1 max-w-2xl px-12 pt-16 pb-24">
          <Page />
        </main>
      </div>
    </div>
  );
}
