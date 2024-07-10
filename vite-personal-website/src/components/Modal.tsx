import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";
import styled from "styled-components";

const DialogModal: any = styled.dialog`
  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }

  border: none;
  border-radius: 18px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 0;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
`;

const DialogContainer: any = styled.div`
  // this exists to allow clicking the background of the dialog to close
  width: 100%;
  height: 100%;
  padding: 3rem;
`

const Modal: React.FC<{
  title: string,
  children: JSX.Element,
  open: number
}> = ({ title, children, open }) => {
  const dialogRef = useRef<HTMLDialogElement | null>();
  let topScroll: number = 0;
  let leftScroll: number = 0;

  useEffect(() => {
    if (!dialogRef || !open) {
      // modal closing
      enableScroll();
      return;
    }

    // modal is opening
    topScroll = window.scrollY || document.documentElement.scrollTop;
    leftScroll = window.scrollX || document.documentElement.scrollLeft;

    
    dialogRef.current?.showModal()
    // Set focus to the dialog (default focus is the close button, which ruins the hover animation)
    dialogRef.current?.focus();
    disableScroll();

    return () => {
      enableScroll();
    };
  }), [open];


  const disableScroll = () => {
    document.body.classList.add('disable-scrolling')
  };

  const enableScroll = () => {
    document.body.classList.remove('disable-scrolling');
  };

  const closeModal = () => {
    dialogRef.current?.close();
    enableScroll();
  }

  const dialogClicked = () => {
    closeModal();
  }

  const dialogContainerClicked = (event: React.MouseEvent) => {
    // prevent dialogClicked --> closeModal()
    event.stopPropagation()
  }

  return (
    <>
      {createPortal(
        <DialogModal ref={dialogRef} onCancel={ closeModal } onClick={ dialogClicked } >
            <DialogContainer onClick={ dialogContainerClicked }>
              <button className="font-lg clear close-modal" onClick={ closeModal } >
                <BiX></BiX>
              </button>
              <h3 className="font-sm text-center">{title}</h3>
              {children}
            </DialogContainer>
        </DialogModal>,
        document.getElementById('root')!
      )}
    </>
  );
}

export default Modal;
