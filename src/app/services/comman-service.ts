import { Injectable } from '@angular/core';
import { Modal, Offcanvas } from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  private modals: Map<string, Modal> = new Map();
  private offcanvasMap: Map<string, Offcanvas> = new Map();
  // Bootstrap the service with any necessary initialization

  // Method to open a specific modal by its ID
  public openModal(modalId: string) {
    const modalElement = document.getElementById(modalId);
    if (modalElement && !this.modals.has(modalId)) {
      const modalInstance = new Modal(modalElement);
      this.modals.set(modalId, modalInstance);
      // Attach close event listener here
      modalElement.removeEventListener('hide.bs.modal', this.confirmBeforeClose as EventListener);
      modalElement.addEventListener('hide.bs.modal', this.confirmBeforeClose as EventListener);
    }
    this.modals.get(modalId)?.show();
    // this.sendMessage('openmodal$M$');
  }

  // Method to close a specific modal by its ID
  public closeModal(modalId: string) {
    const modalInstance = this.modals.get(modalId);
    if (modalInstance) {
      modalInstance.hide();
      this.modals.delete(modalId); // Remove the instance if no longer needed
      // this.sendMessage('closemodal$M$');
    }
  }

  public openOffcanvas(offcanvasID: string): void {
    const offcanvasElement = document.getElementById(offcanvasID);
    if (offcanvasElement && !this.offcanvasMap.has(offcanvasID)) {
      const offcanvasInstance = new Offcanvas(offcanvasElement);
      this.offcanvasMap.set(offcanvasID, offcanvasInstance);
      // Attach close event listener here
      offcanvasElement.removeEventListener('hide.bs.offcanvas', this.confirmBeforeClose as EventListener);
      offcanvasElement.addEventListener('hide.bs.offcanvas', this.confirmBeforeClose as EventListener);

    }
    this.offcanvasMap.get(offcanvasID)?.show();
    // this.sendMessage('openmodal$M$');
  }

  // Method to close a specific Offcanvas by its ID
  public closeOffcanvas(offcanvasID: string): void {
    const offcanvasInstance = this.offcanvasMap.get(offcanvasID);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
      this.offcanvasMap.delete(offcanvasID); // Clean up the instance
      // this.sendMessage('closemodal$M$');
    }
  }

  private confirmBeforeClose = (event: Event): void => {
    // this.sendMessage('closemodal$M$');

    // Cleanup modal or offcanvas
    const target = event.target as HTMLElement;

    // Clear form fields or inner content
    const inputs = target.querySelectorAll('input, textarea');
    inputs.forEach(input => (input as HTMLInputElement | HTMLTextAreaElement).value = '');

    // Optional: Remove event listener if needed (not mandatory in Angular SPA)
    const isModal = target.classList.contains('modal');
    const isOffcanvas = target.classList.contains('offcanvas');

    if (isModal) {
      this.modals.delete(target.id);
    }

    if (isOffcanvas) {
      this.offcanvasMap.delete(target.id);
    }

    // Any other state cleanups here...
  };


  public cleanUpAll(): void {
    let wasSomethingOpen = false;

    // Hide all modals only if they are shown
    this.modals.forEach((instance, id) => {
      if ((instance as any)._isShown) {
        instance.hide();
        wasSomethingOpen = true;
      }
    });
    this.modals.clear();

    // Hide all offcanvases only if they are shown
    this.offcanvasMap.forEach((instance, id) => {
      if ((instance as any)._isShown) {
        instance.hide();
        wasSomethingOpen = true;
      }
    });
    this.offcanvasMap.clear();

    // Send message only if any modal or offcanvas was open
    if (wasSomethingOpen) {
      // this.sendMessage('closemodal$M$');

      // alert("1")
    }
  }

  touchStartY = 0;
  touchEndY = 0;

  handleTouchStart(event: TouchEvent) {
    this.touchStartY = event.changedTouches[0].screenY;
  }

  handleTouchEnd(event: TouchEvent) {
    this.touchEndY = event.changedTouches[0].screenY;

    const distance = this.touchEndY - this.touchStartY;
    if (distance > 200) { // downward swipe threshold
      this.cleanUpAll(); // or closeModal('myModal')
    }
  }


}
