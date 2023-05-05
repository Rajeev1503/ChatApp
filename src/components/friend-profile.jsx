import { FaSolidCross, FaSolidImagePortrait, FaSolidX } from "solid-icons/fa";

export default function FriendProfile(props) {
  return (
    <div class="relative h-full flex flex-col gap-8 text-md text-white">
      <div class="absolute cursor-pointer p-2 text-xl" onClick={props.showFriendsProfile}>
        <FaSolidX />
      </div>
      <div class="h-[30%] flex flex-row items-center justify-center gap-2 mt-6 text-8xl">
        <div class="bg-white rounded-full p-8 cursor-pointer text-black">
          <FaSolidImagePortrait />
        </div>
      </div>
      <div class="pt-2 px-4 h-full flex flex-col gap-3 scrollbarfeature overflow-y-scroll text-xl font-normal">
        <div class="p-2">
          <p class="text-xs">Friend's Name</p>
          <p class="p-2">Gautam</p>
        </div>
        <div class="p-2">
          <p class="text-xs">About</p>
          <p class="p-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
            voluptate?
          </p>
        </div>
        <div class="pt-2 h-full flex flex-col gap-3 text-sm font-semibold">
          <div class="button_highlight">
            <p>Unfriend</p>
          </div>
          <div class="button_highlight">
            <p class="text-red-500">Block</p>
          </div>
          <div class="button_highlight">
            <p class="text-red-500">Report</p>
          </div>
        </div>
      </div>
    </div>
  );
}
