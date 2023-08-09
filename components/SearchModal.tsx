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
      } fixed inset-0 h-screen w-screen bg-white`}
    >
      <button onClick={() => dispatch(closeSearchModal())}>hi</button>
    </dialog>
  );
};

export default SearchModal;
