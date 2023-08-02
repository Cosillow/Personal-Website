import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";
import styled from "styled-components";

const DialogModal: any = styled.dialog`
  /* width: 400px;
  border-radius: 8px;
  border: 1px solid #888; */

  &::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }

  border: none;
  border-radius: calc(5px * 3.74);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 1.6rem;
  max-width: 400px;

  position: fixed;
  /* float: left; */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
`;

const Modal: React.FC<{
  children: JSX.Element,
  open: number
}> = ({ children, open }) => {
  const dialogRef = useRef<HTMLDialogElement | null>();
  let topScroll: number = 0;
  let leftScroll: number = 0;

  useEffect(() => {
    if (!dialogRef || !open) {
      // modal closing
      enableScroll();
      return;
    }

    // Save the current scroll position
    topScroll = window.scrollY || document.documentElement.scrollTop;
    leftScroll = window.scrollX || document.documentElement.scrollLeft;

    dialogRef.current?.showModal()
    disableScroll();

    return () => {
      enableScroll();
    };
  }), [open];

  const disableScroll = () => {
    // Add scroll event listener and prevent scrolling
    window.onscroll = function () {
      window.scrollTo(leftScroll, topScroll);
    };
  };

  const enableScroll = () => {
    // Remove scroll event listener to enable scrolling
    window.onscroll = null;
  };

  const closeModal = () => {
    dialogRef.current?.close();
    enableScroll();
  }

  const modalClicked = (event: any) => {
    // if the user has clicked the backdrop, close the modal

    let rect = event.target.getBoundingClientRect();
    if (rect.left > event.clientX ||
      rect.right < event.clientX ||
      rect.top > event.clientY ||
      rect.bottom < event.clientY
    ) {
      closeModal();
    }
  }

  return (
    <>
      {createPortal(
        <DialogModal ref={dialogRef} onCancel={ closeModal } onClick={ modalClicked } >
          <button className="clear" onClick={ closeModal } >
            <BiX></BiX>
          </button>
          <h3>THIS is it</h3>
          {children}
        </DialogModal>,
        document.getElementById('root')!
      )}
    </>
  );
}

export default Modal;
