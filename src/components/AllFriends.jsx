
export default function AllFriends() {
  return (
    <div class="h-full flex flex-col gap-4 text-xs lg:pl-6 p-2 lg:p-4">
      <div class="w-full flex flex-row gap-2 my-4">
        <input
          class={``}
          placeholder="Search Friend"
        />
      </div>
      <div class="h-full px-0 xl:px-3 flex flex-col gap-3 scrollbarfeature hideScrollBar overflow-y-scroll">
        <div class="button_highlight">
          <div class="flex flex-row items-center gap-4 font-semibold text-sm">
            <span
              class={`rounded-full text-3xl w-[40px] h-[40px] text-transparent`}
              style={{
                background: `rgb(${Math.floor(Math.random() * 150) + 50}, ${
                  Math.floor(Math.random() * 160) + 100
                },${Math.floor(Math.random() * 250) + 200})`,
              }}
            >
              
            </span>
            <div class="flex-grow max-w-full flex flex-row justify-between items-center">
              <div class="flex flex-col gap-1">
                <span>Friend 2</span>
                <span class="text-[#4d4d4d] text-xs">
                  Last Message sent on this room ...
                </span>
              </div>
              <span class="text-[#aaa] text-[0.6rem]">Yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
