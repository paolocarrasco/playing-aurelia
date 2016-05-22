export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      {
        route: [ '', 'welcome' ],
        name: 'welcome',
        moduleId: './welcome',
        nav: true,
        title: 'Welcome'
      },
      {
        route: 'users',
        name: 'users',
        moduleId: './github-users',
        nav: true,
        title: 'Github users'
      }
    ]);

    this.router = router;
  }
}
