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


  useEffect(() => {
    if (!dialogRef || !open) return;
    dialogRef.current?.showModal()
  }), [open];

  return (
    <>
      {createPortal(
        <DialogModal ref={dialogRef} onCancel={() => dialogRef.current?.close()}  >
          <button className="clear" onClick={() => dialogRef.current?.close()} >
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
