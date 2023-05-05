import { Match, createSignal } from "solid-js";
import AllChats from "../components/AllChats";
import UserProfile from "../components/user-profile";
import AllFriends from "../components/AllFriends";
import LeftPanel from "../components/left-panel";
import SettingMenu from "../components/setting-menu";
import dp from "../assets/dp.jpg";
import AddFriend from "../components/modal/add-friend";

export default function LeftLayout(props) {
  const [placeholder, setPlaceholder] = createSignal("");
  const [formUrl, setFormUrl] = createSignal(false);
  const [showForm, setShowForm] = createSignal(false);
  const [showSettingMenu, setShowSettingMenu] = createSignal(false);
  const [showUserProfile, setShowUserProfile] = createSignal(false);
  const [showAllFriends, setShowAllFriends] = createSignal(false);
  const [showAllChats, setShowAllChats] = createSignal(true);
  const [addFriendModal, setAddFriendModal] = createSignal(false);

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
  let inputFieldRef;
  const [heading, setHeading] = createSignal();
  const [searchInputValue, setSearchInputValue] = createSignal("");

  function whichFormToShowVariables(placeholder, formUrl) {
    // if (formToShow) {
      setShowForm(true);
      inputFieldRef.focus();
      setPlaceholder(placeholder);
      setFormUrl(formUrl);
    // }
  }

  return (
    <div class="h-full md:flex hidden flex-col bg-[#000] md:w-[40vw] lg:w-[30vw] ">
      <header class="h-[7%] w-full border-b border-[#1d1d1d] flex flex-row items-center">
        <div class="w-full flex justify-between px-4">
          <div
            onClick={() => {
              setShowUserProfile(!showUserProfile());
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
            <div class=" h-full">
              {showForm() == true && (
                <form
                  class="h-full flex items-center justify-center gap-2 text-xs p-1"
                  method="POST"
                  action={`/${formUrl()}`}
                >
                  <input
                    class={`${
                      showForm() && "focus"
                    } h-full text-white outline-none flex-grow min-w-max rounded-3xl border-2 border-[#4d4d4d] bg-transparent px-4 text-sm caret-white placeholder:text-[#4d4d4d] focus:placeholder:text-[#2d2d2d]`}
                    placeholder={placeholder()}
                    value={searchInputValue()}
                    onChange={(e) => {
                      console.log("changing")
                      setAddFriendModal(true);
                      console.log(addFriendModal());
                      setSearchInputValue(e.target.value);
                      console.log(searchInputValue())
                    }}
                    onFocusOut={() =>setShowForm(false)}
                    ref={inputFieldRef}
                  />
                  <button
                    class={`h-full w-full flex-grow max-w-max shadow-md px-4 rounded-3xl cursor-pointer bg-[#e7e9ea] text-black font-semibold text-xs`}
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              )}
            </div>
            {!showForm() && (
              <>
                <div
                  class="relative bg-[#e7e9ea] rounded-3xl text-xs p-2 px-3 cursor-pointer"
                  onClick={() => {
                    whichFormToShowVariables(
                      "Username or email",
                      "/addfriend"
                    );
                  }}
                >
                  <button>Add Friend</button>
                </div>
                <div
                  class="bg-[#e7e9ea] cursor-pointer rounded-3xl text-xs p-2 px-3"
                  onClick={() => {
                    whichFormToShowVariables("Group Name", "/addgroup");
                  }}
                >
                  <button>New Group</button>
                </div>
                <div
                  class="bg-[#e7e9ea] cursor-pointer rounded-3xl text-xs p-2 px-3"
                  onClick={() => {
                    setShowForm(true);
                  }}
                >
                  <button>Invites & Requests</button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
      <div class="w-full h-[93%]">
        <div class="h-full flex flex-row w-full">
          <div class="h-full w-[15%] hidden md:block">
            <LeftPanel
              signalVariables={signalVariables}
              setHeading={setHeading(heading())}
            />
          </div>
          <div class="h-full w-[85%]">
            <Switch fallback={<AllChats />}>
              <Match when={addFriendModal()}>
                <AddFriend />
              </Match>
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
