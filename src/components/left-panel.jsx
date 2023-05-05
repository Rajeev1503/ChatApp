import {
  FiMessageSquare,
  FiPhone,
  FiPlus,
  FiSettings,
  FiVideo,
} from "solid-icons/fi";
import { IoPeople } from "solid-icons/io";
import { createSignal } from "solid-js";

export default function LeftPanel(props) {
  const [heading, setHeading] = createSignal("Messages");

  function buttonStyle(variable) {
    const styleString = `text-1xl bg-[#e7e9ea] rounded-3xl p-3 cursor-pointer ${
      variable
        ? "transition-all duration-700 flex flex-row gap-1 items-center after:hidden after:text-xs after:font-semibold after:content-[attr(after)]"
        : "max-w-min"
    }`;

    return styleString;
  }

  return (
    <div class="h-full w-full relative p-2 flex flex-col gap-4 border-r border-[#1d1d1d]">
      <div class="h-1/2 w-full flex items-center justify-center">
        <div class="font-extrabold text-6xl -rotate-90 text-[#1d1d1d]">
          {heading()}
        </div>
      </div>
      <div class="relative flex flex-col gap-8 items-center justify-end h-1/2 pb-4">
        <div
          onClick={() => {
            props.signalVariables.allChats.setShowAllChats(true);
            props.signalVariables.allFriends.setShowAllFriends(false);
            props.signalVariables.userProfile.setShowUserProfile(false);
            props.signalVariables.settingMenu.setShowSettingMenu(false);
            setHeading("Messages");
          }}
          class="relative w-full flex items-center justify-center min-h-[8%]"
        >
          <div
            after="Messages"
            class={buttonStyle(props.signalVariables.allChats.showAllChats())}
          >
            <FiMessageSquare />
          </div>
        </div>
        <div
          onClick={() => {
            props.signalVariables.allFriends.setShowAllFriends(true);
            props.signalVariables.userProfile.setShowUserProfile(false);
            props.signalVariables.settingMenu.setShowSettingMenu(false);
            props.signalVariables.allChats.setShowAllChats(false);
            setHeading("Phone");
          }}
          class="relative w-full flex items-center justify-center min-h-[8%]"
        >
          <div
            class={buttonStyle(
              props.signalVariables.allFriends.showAllFriends()
            )}
          >
            <FiPhone />
          </div>
        </div>
        <div
          onClick={() => {
            props.signalVariables.allFriends.setShowAllFriends(true);
            props.signalVariables.userProfile.setShowUserProfile(false);
            props.signalVariables.settingMenu.setShowSettingMenu(false);
            props.signalVariables.allChats.setShowAllChats(false);
            setHeading("Video");
          }}
          class="relative w-full flex items-center justify-center min-h-[8%]"
        >
          <div
            after="Friends"
            class={buttonStyle(
              props.signalVariables.allFriends.showAllFriends()
            )}
          >
            <FiVideo />
          </div>
        </div>
        <div
          onClick={() => {
            props.signalVariables.allFriends.setShowAllFriends(true);
            props.signalVariables.userProfile.setShowUserProfile(false);
            props.signalVariables.settingMenu.setShowSettingMenu(false);
            props.signalVariables.allChats.setShowAllChats(false);
            setHeading("Friends");
          }}
          class="relative w-full flex items-center justify-center min-h-[8%]"
        >
          <div
            after="Friends"
            class={buttonStyle(
              props.signalVariables.allFriends.showAllFriends()
            )}
          >
            <IoPeople />
          </div>
        </div>
        <div
          onClick={() => {
            props.signalVariables.settingMenu.setShowSettingMenu(true);
            props.signalVariables.userProfile.setShowUserProfile(false);
            props.signalVariables.allFriends.setShowAllFriends(false);
            props.signalVariables.allChats.setShowAllChats(false);
            setHeading("Settings");
          }}
          class="relative w-full flex items-center justify-center min-h-[8%]"
        >
          <div
            after="Settings"
            class={buttonStyle(
              props.signalVariables.settingMenu.showSettingMenu()
            )}
          >
            <FiSettings />
          </div>
        </div>
      </div>
    </div>
  );
}
