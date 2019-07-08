import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  public hex;

  private col:any = {
    R:0,
    G:0,
    B:0
  }

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  add = (C) => {
    
    let remainingRange = 255;
    
    switch(C){
      case "R":
      remainingRange = 255 - this.col.R;
      this.col.R += Math.floor(remainingRange*.5);
      break;

      case "G":
      remainingRange = 255 - this.col.G;
      this.col.G += Math.floor(remainingRange*.5);
      break;

      case "B":
      remainingRange = 255 - this.col.B;
      this.col.B += Math.floor(remainingRange*.5);
      break;
    }

    this.hex = this.rgbToHex(this.col.R,this.col.G,this.col.B);
    
    document.getElementById('theColor').style.backgroundColor = this.hex;
  }
}
