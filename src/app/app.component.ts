import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToolService } from '../core/common/tool.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: string = 'TabsPage';

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    toolService: ToolService,
    screenOrientation: ScreenOrientation,
    mobileAccessibility: MobileAccessibility
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();



      if (toolService.isDevice()) {

        // 锁定字体缩放
        mobileAccessibility.usePreferredTextZoom(false);

        // 锁定竖屏
        screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);

      }

    });




  }
}
