import { Match, createSignal } from "solid-js";
import AllChats from "../components/AllChats";
import UserProfile from "../components/user-profile";
import AllFriends from "../components/AllFriends";
import LeftPanel from "../components/left-panel";
import SettingMenu from "../components/setting-menu";
import dp from "../assets/dp.jpg";
import AddFriend from "../components/modal/add-friend";
import serverUrl from "../../config/server_url";
import { createStore } from "solid-js/store";
import { useUserContext } from "../../context/userContext";

export default function LeftLayout(props) {
  const [userStore, setUserStore] = useUserContext();
  let inputFieldRef;

  const [placeholder, setPlaceholder] = createSignal("");
  const [formUrl, setFormUrl] = createSignal(false);
  const [showAddFriendForm, setShowAddFriendForm] = createSignal(false);
  const [showAddGroupForm, setShowAddGroupForm] = createSignal(false);
  const [showSettingMenu, setShowSettingMenu] = createSignal(false);
  const [showUserProfile, setShowUserProfile] = createSignal(false);
  const [showAllFriends, setShowAllFriends] = createSignal(false);
  const [showAllChats, setShowAllChats] = createSignal(true);
  const [addFriendModal, setAddFriendModal] = createSignal(false);
  const [addGroupModal, setAddGroupModal] = createSignal(false);
  const [handlerToCall, setHandlerToCall] = createSignal();
  const [heading, setHeading] = createSignal();
  const [searchInputValue, setSearchInputValue] = createSignal("");
  const [foundUsers, setFoundUsers] = createStore([]);

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

  function whichFormToShowVariables(type, placeholder, handler) {
    setPlaceholder(placeholder);
    if (type == "addFriend") {
      setShowAddFriendForm(true);
      setHandlerToCall(handler);
      inputFieldRef?.focus();
      return;
    } else if (type == "addGroup") {
      setShowAddGroupForm(true);
      setHandlerToCall(handler);
      inputFieldRef?.focus();
      return;
    }
  }

  const friendSearchHandler = async () => {
    if (!searchInputValue()) {
      return setFoundUsers([]);
    }
    try {
      setAddFriendModal(true);
      const response = await fetch(`${serverUrl}/user/searchUsers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchValue: searchInputValue() }),
      });
      let result = await response.json();
      if (!result.success) return console.log("error in result");

      result = result.data.userModels;
      setFoundUsers([]);
      result.map((user) => {
        return setFoundUsers([
          ...foundUsers,
          { userName: user.userName, fullname: user.fullName },
        ]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addGroupHandler = async () => {
    if (!searchInputValue()) {
      return;
    }
    try {
      const response = await fetch(
        `${serverUrl}/chatroom/creategroupchatroom`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userStore.userId,
            chatRoomName: searchInputValue(),
          }),
        }
      );
      const result = await response.json();
      if (!result.success) return console.log("error in result");
      const createdChatRoom = result.data.createChatRoom;
      createdChatRoom &&
        setUserStore("allChatRooms", userStore.allChatRooms.length, {
          chatRoom: createdChatRoom,
          lastMessage: [],
        });
    } catch (error) {
      console.log(error);
    }
  };

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
              <div class="h-full flex items-center justify-center gap-2 text-xs p-1">
                {showAddFriendForm() && (
                  <input
                    class={`${showAddFriendForm() && "focus"}`}
                    placeholder={placeholder()}
                    value={searchInputValue()}
                    onInput={(e) => {
                      setSearchInputValue(e.target.value);
                      handlerToCall()();
                    }}
                    onFocusOut={() => {
                      !searchInputValue() && setShowAddFriendForm(false);
                    }}
                    ref={inputFieldRef}
                  />
                )}
                {showAddGroupForm() && (
                  <>
                    <input
                      class={`${showAddGroupForm() && "focus"}`}
                      placeholder={placeholder()}
                      value={searchInputValue()}
                      onFocusOut={() => {
                        !searchInputValue() && setShowAddGroupForm(false);
                      }}
                      onChange={(e) => setSearchInputValue(e.target.value)}
                      ref={inputFieldRef}
                    />
                    <button
                      class={`flex gap-1 items-center rounded-3xl px-4 p-2 bg-[#fff] text-black font-semibold`}
                      onClick={() => addGroupHandler()}
                    >
                      Add
                    </button>
                  </>
                )}
              </div>
            </div>
            {!showAddFriendForm() && !showAddGroupForm() && (
              <>
                <div
                  class="relative bg-[#e7e9ea] rounded-3xl text-xs p-2 px-3 cursor-pointer"
                  onClick={() => {
                    whichFormToShowVariables(
                      "addFriend",
                      "Username or email",
                      () => friendSearchHandler
                    );
                  }}
                >
                  <button>Add Friend</button>
                </div>
                <div
                  class="bg-[#e7e9ea] cursor-pointer rounded-3xl text-xs p-2 px-3"
                  onClick={() => {
                    whichFormToShowVariables(
                      "addGroup",
                      "Group Name",
                      () => addGroupHandler
                    );
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
          <div class=" h-full w-[15%] hidden md:block">
            <LeftPanel
              signalVariables={signalVariables}
              setHeading={setHeading(heading())}
            />
          </div>
          <div class="h-full w-[85%]">
            <Switch fallback={<AllChats />}>
              <Match when={addFriendModal()}>
                <AddFriend
                  props={{ setAddFriendModal, setShowForm, foundUsers }}
                />
              </Match>
              <Match when={addGroupModal()}>
                <AddFriend
                  props={{ setAddFriendModal, setShowForm, foundUsers }}
                />
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
