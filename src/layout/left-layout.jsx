import { Match, createSignal } from "solid-js";
import AllChats from "../components/AllChats";
import UserProfile from "../components/user-profile";
import AllFriends from "../components/AllFriends";
import LeftPanel from "../components/left-panel";
import SettingMenu from "../components/setting-menu";
import dp from "../assets/dp.jpg";

export default function LeftLayout(props) {
  const [showSettingMenu, setShowSettingMenu] = createSignal(false);
  const [showUserProfile, setShowUserProfile] = createSignal(false);
  const [showAllFriends, setShowAllFriends] = createSignal(false);
  const [showAllChats, setShowAllChats] = createSignal(true);

  const signalVariables = {
    settingMenu: {
      showSettingMenu: showSettingMenu,
      setShowSettingMenu: setShowSettingMenu,
    },
    userProfile: {
      showUserProfile: showUserProfile,
      setShowUserProfile: setShowUserProfile,
    },
    allFriends: {
      showAllFriends: showAllFriends,
      setShowAllFriends: setShowAllFriends,
    },
    allChats: {
      showAllChats: showAllChats,
      setShowAllChats: setShowAllChats,
    },
  };

  const [heading, setHeading] = createSignal();

  return (
    <div
      class="h-full md:flex hidden flex-col bg-[#000]"
      style={{ width: "30vw" }}
    >
      <header class="h-[7%] w-full border-b border-[#1d1d1d] flex flex-row items-center">
        <div class="w-full flex justify-between px-4">
          <div
            onClick={() => {
              setShowUserProfile(true);
              setShowSettingMenu(false);
              setShowAllFriends(false);
              setShowAllChats(false);
              setHeading("Profile");
            }}
            class="flex items-center justify-center min-h-[8%]"
          >
            <div after="Profile" class="">
              <img
                src={dp}
                height={"100%"}
                width={"100%"}
                class="rounded-full h-10 w-10 cursor-pointer"
              />
            </div>
          </div>
          <div class="flex gap-2 items-center font-semibold">
            <div class="bg-[#e7e9ea] rounded-3xl text-xs p-2 px-3">
              <button>New Group</button>
            </div>
            <div class="bg-[#e7e9ea] rounded-3xl text-xs p-2 px-3">
              <button>Friend Requests</button>
            </div>
          </div>
        </div>
      </header>
      <div class="w-full h-[93%]">
        <div class="h-full flex flex-row w-full">
          <div class="h-full w-[15%]">
            <LeftPanel
              signalVariables={signalVariables}
              setHeading={setHeading(heading())}
            />
          </div>
          <div class="h-full w-[85%]">
            <Switch fallback={<AllChats />}>
              <Match when={showAllChats()}>
                <AllChats />
              </Match>
              <Match when={showSettingMenu()}>
                <SettingMenu />
              </Match>
              <Match when={showUserProfile()}>
                <UserProfile />
              </Match>
              <Match when={showAllFriends()}>
                <AllFriends />
              </Match>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
