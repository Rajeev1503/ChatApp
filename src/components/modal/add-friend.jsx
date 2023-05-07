import { FaSolidX } from "solid-icons/fa";
import { For } from "solid-js";

export default function AddFriend({ props }) {
  return (
    <div class="relative text-white h-full w-full">
      <div
        class="absolute right-0 cursor-pointer p-2 text-xl"
        onClick={() => {
          props.setAddFriendModal(false);
        }}
      >
        <FaSolidX />
      </div>

      <div class="pt-10 p-2">
        <div class="flex flex-col gap-4 p-4">
          <For each={props.foundUsers}>
            {(user, i) => (
              <div key={i} class="text-white button_highlight p-1">
                <div class="flex flex-row justify-between items-center">
                  <div class="flex gap-2 items-center">
                    <span class="text-xl capitalize">{user.fullname}</span>
                    <span class="text-sm text-[#6d6d6d]">@{user.userName}</span>
                  </div>
                  <div class="text-sm font-semibold">
                    <button class="bg-[#e7e9ea] text-black rounded-full p-1 px-3">
                      Send Request
                    </button>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
