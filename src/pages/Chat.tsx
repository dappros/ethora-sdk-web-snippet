/** @format */

import { XmppProvider, Chat } from "@ethora/chat-component";

export const ChatPage = () => {
  return (
    <XmppProvider>
      <Chat
        // you can customize the chat component by passing your own components
        // CustomMessageComponent={CustomMessageBubble}
        // CustomInputComponent={CustomChatInput}
        // CustomScrollableArea={CustomScrollableArea}
        // CustomDaySeparator={CustomDaySeparator}

        roomJID="646cc8dc96d4a4dc8f7b2f2d_693228d5f05487ee2e332024@conference.xmpp.ethoradev.com"
        config={{
          // Here will be your dedicated server urls
          xmppSettings: {
            devServer: "wss://xmpp.ethoradev.com:5443/ws",
            host: "xmpp.ethoradev.com",
            conference: "conference.xmpp.ethoradev.com",
          },
          baseUrl: "https://api.ethoradev.com/v1",
          newArch: true,
          refreshTokens: { enabled: true }, // Used to enable media sending
          // Change to true to check how it will look for patient
          disableRooms: false,
        }}
        // Just test user, your user data will be provided by the jwt login, that you will get from api req to dedicated server
        user={{
          email: "colod20205@exweme.com",
          password: "12345678",
        }}
      />
    </XmppProvider>
  );
};
