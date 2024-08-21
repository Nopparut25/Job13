import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastController: ToastController) {}

  async presentToast(position:'middle') {
    const toast = await this.toastController.create({
      message: 'โปรดใส่รหัสผ่านก่อน',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
