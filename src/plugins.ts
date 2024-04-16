import { App } from 'vue';

import router from './router/routerIndex';

export default function definePlugins(app: App): App {
  // Define your plugins here with app.use. It is required for storybook support.
  return app.use(router);
}
