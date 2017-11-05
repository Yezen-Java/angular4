import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponnet {

    @Output() featureSelected = new EventEmitter<string>();

    onSelectFeature(feature:string){
        this.featureSelected.emit(feature);
    }
  
}

