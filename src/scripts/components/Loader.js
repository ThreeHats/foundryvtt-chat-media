import { append, attr, create, find, focus, remove, removeAttr } from "../utils/JqueryWrappers.js";

const toggleChat = (chat, toggle) => {
  if (!toggle) {
    attr(chat, "disabled", true);
    return;
  }
  removeAttr(chat, "disabled");
  focus(chat);
};

const toggleSpinner = (chatForm, toggle) => {
  const spinnerId = "chat-media-spinner";
  const spinner = find(`#${spinnerId}`, chatForm);

  if (!toggle && spinner[0]) {
    remove(spinner);
    return;
  }

  if (toggle && !spinner[0]) {
    const newSpinner = create(`<div id="${spinnerId}"></div>`);
    append(chatForm, newSpinner);
  }
};

export const getUploadingStates = (sidebar) => {
  let chatForm = sidebar;
  const chat = find("#chat-message", sidebar);

  return {
    on() {
      toggleChat(chat, false);
      toggleSpinner(chatForm, true);
    },
    off() {
      toggleChat(chat, true);
      toggleSpinner(chatForm, false);
    },
  };
};
