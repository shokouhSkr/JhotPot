"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeSearchModal } from "@/redux/features/modal/modalSlice";

const SearchModal = () => {
  const { isSearchModalOpen } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();

  return (
    <dialog
      id="my_modal_3"
      className={`${
        isSearchModalOpen ? "block" : "hidden"
      } fixed inset-0 h-[calc(100dvh)] w-screen bg-navbar p-4`}
    >
      <button onClick={() => dispatch(closeSearchModal())}>hi</button>
    </dialog>
  );
};

export default SearchModal;
