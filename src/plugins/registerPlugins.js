// src/plugins/registerPlugins.js
import components from "@/components/components";

export function registerPlugins(app) {
  // Импорт компонентов

  // Глобальная регистрация компонентов
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
  });
}
