import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";
import styled from "styled-components";

const DialogModal: any = styled.dialog`

  padding: 1em 2em;
  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }

  border: none;
  border-radius: calc(5px * 3.74);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 1.6rem;
  /* max-width: 400px; */

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
`;

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
      // modal closed
      enableScroll();
      return;
    }

    // modal is open
    topScroll = window.scrollY || document.documentElement.scrollTop;
    leftScroll = window.scrollX || document.documentElement.scrollLeft;

    
    dialogRef.current?.showModal()
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

  return (
    <>
      {createPortal(
        <DialogModal ref={dialogRef} onCancel={ closeModal }  >
          <button className="font-sm clear close-modal" onClick={ closeModal } >
            <BiX></BiX>
          </button>

          <h3 className="font-sm">{title}</h3>
          {children}
        </DialogModal>,
        document.getElementById('root')!
      )}
    </>
  );
}

export default Modal;
