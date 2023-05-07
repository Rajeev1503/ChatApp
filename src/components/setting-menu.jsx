export default function SettingMenu(props) {
  return (
    <div class="h-full flex flex-col gap-8 lg:pl-6 p-2 lg:p-4 text-md text-white">
      <div class="my-4">
        <input
          class={``}
          placeholder="Search settings"
        />
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
