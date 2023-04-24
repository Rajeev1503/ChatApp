export default function SettingMenu(props) {
  return (
    <div class="h-full flex flex-col gap-8 px-2 md:p-4 text-md text-white">
      <div class="h-[6%] flex flex-row gap-2 mt-2">
        <input
          class={`text-white outline-none flex-grow min-w-max rounded-3xl bg-[#273340] bg-opacity-50 px-4 text-sm caret-white placeholder:text-[#bbb] focus:placeholder:text-[#999]`}
          placeholder="Search settings"
        />
        <button
          class={`w-full flex-grow max-w-max shadow-md px-4 rounded-3xl cursor-pointer bg-white text-black font-semibold text-sm`}
          type="submit"
        >
          Search
        </button>
      </div>
      <div class="pt-2 px-4 h-full flex flex-col gap-3 scrollbarfeature overflow-y-scroll text-xl font-normal">
        <div class="button_highlight">
          <p>Edit Profile</p>
        </div>
        <div class="button_highlight">
          <p>Account</p>
        </div>
        <div class="button_highlight">
          <p>Theme</p>
        </div>
        <div class="button_highlight">
          <p>Chat Wallpaper</p>
        </div>
        <div class="button_highlight">
          <p>Notifications</p>
        </div>
        <div class="button_highlight">
          <p>Logout</p>
        </div>
        <div class="button_highlight">
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}
