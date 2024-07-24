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
    opacity: 0.3;
    background-size: 90px 90px;
    background-image: repeating-linear-gradient(45deg, #000000 0, #000000 2.8000000000000003px, transparent 0, transparent 50%);
  }

  background-color: var(--color-secondary);

  color: var(--color-secondary-contrast);

  border: none;
  border-radius: 18px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 0;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;

  width: fit-content;
  height: fit-content;
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
  open: number,
  scrollDisabled?: boolean
}> = ({ title, children, open, scrollDisabled=false }) => {
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
    disableScroll();

    return () => {
      enableScroll();
    };
  }), [open];


  const disableScroll = () => {
    if (!scrollDisabled) return;
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
              <button className="font-l clear close-modal" onClick={ closeModal } >
                <BiX></BiX>
              </button>
              <h3 className="font-s text-center m-b-xxl">{title}</h3>
              {children}
            </DialogContainer>
        </DialogModal>,
        document.getElementById('root')!
      )}
    </>
  );
}

export default Modal;
