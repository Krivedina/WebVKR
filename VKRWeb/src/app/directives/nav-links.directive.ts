import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[nav-links]"
})
export class NavLinksDirective {
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
         
        this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
    }
}
