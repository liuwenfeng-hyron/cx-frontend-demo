import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './modules/app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

// Added by hyron 2024.11.5 Start
window.fetch = new Proxy(window.fetch, {
  apply: function (target, that, args) {
    // args holds argument of fetch function
    // Do whatever you want with fetch request
    if (args[0] && args[0].headers) {
      let headers = args[0].headers as Headers
      if(headers.get("access_token")) {
        const token = localStorage.getItem('access_token')
        if (token) {
          headers.append('Authorization', "Bearer " +token)
        }
      }
    }
    if (args[1]) {
      let init = args[1] as RequestInit
      init.credentials = 'include';
    } else {
      args.push({
        credentials: 'include'
      })
    }

    let temp = target.apply(that, args as any);

    /**
    temp.then((res) => {
      // After completion of request
      if (res.status === 401) {
        localStorage.setItem('redirect_uri', location.href.replace(location.origin, ''))
        let loginPath = 'https://xxx.xxx.xx.xx:xxx/realms/demoEDC/protocol/openid-connect/auth?client_id=xxxxx&response_type=code&scope=openid'
        loginPath += '&state=bbb';
        loginPath += '&nonce=aaa';
        loginPath += '&redirect_uri=' + location.origin + "/_login";
        location.href = loginPath;
      }
    });
     */
    return temp;
  },
});

// Added by hyron 2024.11.5 End

const appInit = async () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
};

appInit().catch((err) => console.error(err));

