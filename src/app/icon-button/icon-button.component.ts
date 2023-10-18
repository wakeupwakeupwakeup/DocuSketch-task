import { fas } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})

export class IconButtonComponent implements OnInit {
  private iconNames: string[]
  showIcon: boolean = false;
  iconProps: { prefix: IconPrefix; iconName: IconName } = { prefix: 'fas', iconName: 'yelp'}


  ngOnInit() { }

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
    this.iconNames = Object.values(fas).map(icon => icon.iconName)
  }

  showRandomIcon() {
    setTimeout(() => {
      this.getRandomIcon()
      this.showIcon = true
    }, 3000);
    this.showIcon = false;
  }
  getRandomIcon() {
    const randomIndex = Math.floor(Math.random() * this.iconNames.length)
    this.iconProps.iconName = this.iconNames[randomIndex] as IconName
    console.log(this.iconProps)
  }
}
