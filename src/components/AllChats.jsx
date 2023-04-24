import { FaSolidImagePortrait } from "solid-icons/fa";
import LeftLayout from "../layout/left-layout";
import AllFriends from "./AllFriends";

export default function AllChats() {
  return (
    <div class="h-full flex flex-col gap-4 text-xs pl-6 p-4">
      <div class="h-full flex flex-col gap-4">
        <div class="flex flex-row gap-2 my-4">
          <input
            class={`p-3 text-white outline-none flex-grow min-w-max rounded-3xl bg-transparent border-2 border-[#4d4d4d] px-4 text-sm caret-white placeholder:text-[#bbb] focus:placeholder:text-[#999]`}
            placeholder="Search Messages"
          />
        </div>
        <div class="h-full px-3 flex flex-col gap-3 scrollbarfeature hideScrollBar overflow-y-scroll">
          <div class="button_highlight">
            <div class="flex flex-row items-center gap-4 font-semibold text-sm">
              <span
                class={`rounded-full text-3xl w-10 h-10 text-transparent`}
                style={{
                  background: `rgb(${
                    Math.floor(Math.random() * 150) + 50
                  }, ${Math.floor(Math.random() * 160) + 100},${
                    Math.floor(Math.random() * 250) + 200
                  })`,
                }}
              >
                s
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
          <div class="button_highlight">
            <div class="flex flex-row items-center gap-4 font-semibold text-sm">
              <span
                class={`rounded-full text-3xl w-10 h-10 text-transparent`}
                style={{
                  background: `rgb(${
                    Math.floor(Math.random() * 150) + 50
                  }, ${Math.floor(Math.random() * 160) + 100},${
                    Math.floor(Math.random() * 250) + 200
                  })`,
                }}
              >
                s
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
          <div class="button_highlight">
            <div class="flex flex-row items-center gap-4 font-semibold text-sm">
              <span
                class={`rounded-full text-3xl w-10 h-10 text-transparent`}
                style={{
                  background: `rgb(${
                    Math.floor(Math.random() * 150) + 50
                  }, ${Math.floor(Math.random() * 160) + 100},${
                    Math.floor(Math.random() * 250) + 200
                  })`,
                }}
              >
                s
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
          <div class="button_highlight">
            <div class="flex flex-row items-center gap-4 font-semibold text-sm">
              <span
                class={`rounded-full text-3xl w-10 h-10 text-transparent`}
                style={{
                  background: `rgb(${
                    Math.floor(Math.random() * 150) + 50
                  }, ${Math.floor(Math.random() * 160) + 100},${
                    Math.floor(Math.random() * 250) + 200
                  })`,
                }}
              >
                s
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
          <div class="button_highlight">
            <div class="flex flex-row items-center gap-4 font-semibold text-sm">
              <span
                class={`rounded-full text-3xl w-10 h-10 text-transparent`}
                style={{
                  background: `rgb(${
                    Math.floor(Math.random() * 150) + 50
                  }, ${Math.floor(Math.random() * 160) + 100},${
                    Math.floor(Math.random() * 250) + 200
                  })`,
                }}
              >
                s
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
          <div class="button_highlight">
            <div class="flex flex-row items-center gap-4 font-semibold text-sm">
              <span
                class={`rounded-full text-3xl w-10 h-10 text-transparent`}
                style={{
                  background: `rgb(${
                    Math.floor(Math.random() * 150) + 50
                  }, ${Math.floor(Math.random() * 160) + 100},${
                    Math.floor(Math.random() * 250) + 200
                  })`,
                }}
              >
                s
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
          <div class="button_highlight">
            <div class="flex flex-row items-center gap-4 font-semibold text-sm">
              <span
                class={`rounded-full text-3xl w-10 h-10 text-transparent`}
                style={{
                  background: `rgb(${
                    Math.floor(Math.random() * 150) + 50
                  }, ${Math.floor(Math.random() * 160) + 100},${
                    Math.floor(Math.random() * 250) + 200
                  })`,
                }}
              >
                s
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
          <div class="button_highlight">
            <div class="flex flex-row items-center gap-4 font-semibold text-sm">
              <span
                class={`rounded-full text-3xl w-10 h-10 text-transparent`}
                style={{
                  background: `rgb(${
                    Math.floor(Math.random() * 150) + 50
                  }, ${Math.floor(Math.random() * 160) + 100},${
                    Math.floor(Math.random() * 250) + 200
                  })`,
                }}
              >
                s
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
          <div class="button_highlight">
            <div class="flex flex-row items-center gap-4 font-semibold text-sm">
              <span
                class={`rounded-full text-3xl w-10 h-10 text-transparent`}
                style={{
                  background: `rgb(${
                    Math.floor(Math.random() * 150) + 50
                  }, ${Math.floor(Math.random() * 160) + 100},${
                    Math.floor(Math.random() * 150) + 200
                  })`,
                }}
              >
                s
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
          <div class="button_highlight">
            <div class="flex flex-row items-center gap-4 font-semibold text-sm">
              <span
                class={`rounded-full text-3xl w-10 h-10 text-transparent`}
                style={{
                  background: `rgb(${
                    Math.floor(Math.random() * 150) + 50
                  }, ${Math.floor(Math.random() * 160) + 100},${
                    Math.floor(Math.random() * 250) + 200
                  })`,
                }}
              >
                s
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
    </div>
  );
}
