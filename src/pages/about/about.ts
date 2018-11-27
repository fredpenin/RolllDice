import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

// import { script } from "../../assets/js/script";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})



export class AboutPage {

  constructor(public navCtrl: NavController, private deviceMotion: DeviceMotion) {

    // Get the device current acceleration
    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
      (error: any) => console.log(error)
    );

    // Watch device acceleration
    // var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
    //   console.log("Acceleration : ");
    //   console.log(acceleration);
    // });
    // console.log("Contenu de la var subscription : ");
    // console.log(subscription);
  }


  
  ngOnInit(){
    var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration);
      console.log(subscription);

    if (acceleration.x > 1 || acceleration.y > 1){
      diceRoll();
    }
    });


  }

}

// Stop watch
//subscription.unsubscribe();


